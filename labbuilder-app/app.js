/**
 * labbuilder-app/app.js
 * Interactive state engine for AZ-104 LabBuilder
 * Handles hydration/randomization, progressive step disclosure,
 * checklist criteria, trouble flagging, and learner object persistence.
 */

(function () {
  'use strict';

  // ================= State & Storage =================
  const STORAGE_KEY = 'AZ104_LAB_LEARNER_OBJECT';

  let labsCatalog = [];
  let currentLabTemplate = null;
  let currentHydratedLab = null;
  let revealedStepIndices = new Set();
  let checkedCriteriaIndices = new Set();
  let filterFlaggedOnly = false;

  // Default learner object schema
  let learnerObject = {
    version: 1,
    updatedAt: new Date().toISOString(),
    stats: {
      totalAttempted: 0,
      totalCompleted: 0,
      independent: 0,
      assisted: 0,
      struggled: 0
    },
    flaggedLabIds: [],
    history: {}
  };

  // ================= DOM References =================
  const DOM = {
    // Views
    catalogView: document.getElementById('catalog-view'),
    labView: document.getElementById('lab-view'),

    // Global Header Nav
    btnBrandHome: document.getElementById('btn-brand-home'),
    btnNavCatalog: document.getElementById('btn-nav-catalog'),
    btnNavProfile: document.getElementById('btn-nav-profile'),
    headerFlagCount: document.getElementById('header-flag-count'),

    // Catalog Stats & Filters
    statTotalLabs: document.getElementById('stat-total-labs'),
    statCompletedLabs: document.getElementById('stat-completed-labs'),
    statIndependentLabs: document.getElementById('stat-independent-labs'),
    statFlaggedLabs: document.getElementById('stat-flagged-labs'),
    searchInput: document.getElementById('search-input'),
    btnClearSearch: document.getElementById('btn-clear-search'),
    filterPath: document.getElementById('filter-path'),
    filterDifficulty: document.getElementById('filter-difficulty'),
    btnFilterFlagged: document.getElementById('btn-filter-flagged'),
    btnResetFilters: document.getElementById('btn-reset-filters'),
    catalogCountText: document.getElementById('catalog-count-text'),
    labsGrid: document.getElementById('labs-grid'),

    // Active Lab Topbar
    btnBackToCatalog: document.getElementById('btn-back-to-catalog'),
    btnRerollParams: document.getElementById('btn-reroll-params'),
    btnFlagTrouble: document.getElementById('btn-flag-trouble'),
    flagIcon: document.getElementById('flag-icon'),
    flagText: document.getElementById('flag-text'),

    // Active Lab Header
    labPathBadge: document.getElementById('lab-path-badge'),
    labTopicBadge: document.getElementById('lab-topic-badge'),
    labDifficultyBadge: document.getElementById('lab-difficulty-badge'),
    labTimeBadge: document.getElementById('lab-time-badge'),
    labStatusBadge: document.getElementById('lab-status-badge'),
    labTitle: document.getElementById('lab-title'),
    labSummary: document.getElementById('lab-summary'),

    // Scenario & Parameters
    labScenarioText: document.getElementById('lab-scenario-text'),
    labParametersGrid: document.getElementById('lab-parameters-grid'),

    // Acceptance Checklist
    criteriaProgressText: document.getElementById('criteria-progress-text'),
    criteriaProgressFill: document.getElementById('criteria-progress-fill'),
    acceptanceChecklist: document.getElementById('acceptance-checklist'),

    // Steps Section
    hintsCount: document.getElementById('hints-count'),
    hintsRatingBadge: document.getElementById('hints-rating-badge'),
    btnRevealNext: document.getElementById('btn-reveal-next'),
    btnRevealAll: document.getElementById('btn-reveal-all'),
    btnHideAll: document.getElementById('btn-hide-all'),
    stepsContainer: document.getElementById('steps-container'),

    // Ratings & Notes
    btnRateIndependent: document.getElementById('btn-rate-independent'),
    btnRateAssisted: document.getElementById('btn-rate-assisted'),
    btnRateStruggled: document.getElementById('btn-rate-struggled'),
    labNotesInput: document.getElementById('lab-notes-input'),
    btnSaveNotes: document.getElementById('btn-save-notes'),
    notesStatus: document.getElementById('notes-status'),

    // Profile Modal
    profileModal: document.getElementById('profile-modal'),
    btnCloseModal: document.getElementById('btn-close-modal'),
    pTotalAttempted: document.getElementById('p-total-attempted'),
    pTotalCompleted: document.getElementById('p-total-completed'),
    pIndependentCount: document.getElementById('p-independent-count'),
    pFlaggedCount: document.getElementById('p-flagged-count'),
    flaggedLabsList: document.getElementById('flagged-labs-list'),
    pathBreakdownList: document.getElementById('path-breakdown-list'),
    btnExportProfile: document.getElementById('btn-export-profile'),
    fileImportProfile: document.getElementById('file-import-profile'),
    btnResetProfile: document.getElementById('btn-reset-profile'),

    // Toast
    toastContainer: document.getElementById('toast-container')
  };

  // ================= Lifecycle & Initialization =================
  function init() {
    loadLearnerObject();
    loadCatalogData();
    populatePathFilter();
    setupEventListeners();
    renderCatalog();
    updateGlobalStats();
  }

  function loadCatalogData() {
    if (window.LAB_DATA && Array.isArray(window.LAB_DATA)) {
      labsCatalog = window.LAB_DATA;
    } else {
      console.warn('LAB_DATA not found on window object, initializing empty list.');
      labsCatalog = [];
    }
  }

  // ================= Learner Persistence =================
  function loadLearnerObject() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        learnerObject = Object.assign({}, learnerObject, parsed);
        if (!learnerObject.flaggedLabIds) learnerObject.flaggedLabIds = [];
        if (!learnerObject.history) learnerObject.history = {};
        if (!learnerObject.stats) learnerObject.stats = {};
      }
    } catch (err) {
      console.error('Failed to load learner object from localStorage:', err);
    }
  }

  function saveLearnerObject() {
    try {
      learnerObject.updatedAt = new Date().toISOString();
      recalculateStats();
      localStorage.setItem(STORAGE_KEY, JSON.stringify(learnerObject));
      updateGlobalStats();
    } catch (err) {
      console.error('Failed to save learner object to localStorage:', err);
    }
  }

  function recalculateStats() {
    let attempted = 0;
    let completed = 0;
    let independent = 0;
    let assisted = 0;
    let struggled = 0;

    for (const labId in learnerObject.history) {
      const record = learnerObject.history[labId];
      if (record.attempted) attempted++;
      if (record.completed) completed++;
      if (record.status === 'independent') independent++;
      if (record.status === 'assisted') assisted++;
      if (record.status === 'struggled') struggled++;
    }

    learnerObject.stats = {
      totalAttempted: attempted,
      totalCompleted: completed,
      independent: independent,
      assisted: assisted,
      struggled: struggled
    };
  }

  function updateGlobalStats() {
    const total = labsCatalog.length;
    const completed = learnerObject.stats.totalCompleted || 0;
    const independent = learnerObject.stats.independent || 0;
    const flagged = (learnerObject.flaggedLabIds || []).length;

    DOM.statTotalLabs.textContent = total;
    DOM.statCompletedLabs.textContent = completed;
    DOM.statIndependentLabs.textContent = independent;
    DOM.statFlaggedLabs.textContent = flagged;

    // Header badge
    if (flagged > 0) {
      DOM.headerFlagCount.style.display = 'inline-flex';
      DOM.headerFlagCount.textContent = flagged;
    } else {
      DOM.headerFlagCount.style.display = 'none';
    }
  }

  // ================= Hydration & Randomization Engine =================
  function getRandomItem(arr) {
    if (!Array.isArray(arr) || arr.length === 0) return '';
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function generateRandomDigits(digits) {
    const min = Math.pow(10, digits - 1);
    const max = Math.pow(10, digits) - 1;
    return Math.floor(min + Math.random() * (max - min + 1)).toString();
  }

  /**
   * Generates a concrete instance of a lab by selecting random variable values
   * and substituting {{tokens}} across the entire lab schema.
   */
  function hydrateLab(template) {
    // 1. Generate concrete variable assignments
    const selectedValues = {};
    const flatSubstitutions = {};

    // Common random generators
    const rand3 = generateRandomDigits(3);
    const rand5 = generateRandomDigits(5);

    if (template.variables) {
      for (const [varKey, choices] of Object.entries(template.variables)) {
        let picked = getRandomItem(choices);

        // If choice is a string with nested random tokens (e.g. rg-xxx-{{rand3}})
        if (typeof picked === 'string') {
          picked = picked.replace(/\{\{rand3\}\}/g, rand3);
          picked = picked.replace(/\{\{rand5\}\}/g, rand5);
          selectedValues[varKey] = picked;
          flatSubstitutions[varKey] = picked;
        } else if (typeof picked === 'object' && picked !== null) {
          // Object structure (like targetRole: { name: '...', description: '...' })
          selectedValues[varKey] = picked;
          for (const [propKey, propVal] of Object.entries(picked)) {
            flatSubstitutions[`${varKey}.${propKey}`] = propVal;
          }
        } else {
          selectedValues[varKey] = picked;
          flatSubstitutions[varKey] = picked;
        }
      }
    }

    // Always provide rand3 and rand5 fallbacks
    flatSubstitutions['rand3'] = rand3;
    flatSubstitutions['rand5'] = rand5;

    // 2. Helper to substitute tokens in a string
    function replaceTokens(text, wrapHighlight = false) {
      if (typeof text !== 'string') return text;
      let result = text;

      // Replace known keys
      for (const [tokenKey, val] of Object.entries(flatSubstitutions)) {
        const regex = new RegExp(`\\{\\{${tokenKey}\\}\\}`, 'g');
        const replacement = wrapHighlight
          ? `<span class="param-pill">${val}</span>`
          : val;
        result = result.replace(regex, replacement);
      }

      // Cleanup any dangling rand tokens
      result = result.replace(/\{\{rand3\}\}/g, wrapHighlight ? `<span class="param-pill">${rand3}</span>` : rand3);
      result = result.replace(/\{\{rand5\}\}/g, wrapHighlight ? `<span class="param-pill">${rand5}</span>` : rand5);

      return result;
    }

    // 3. Hydrate all components
    const hydratedScenarioHtml = replaceTokens(template.scenarioTemplate, true);
    const hydratedScenarioPlain = replaceTokens(template.scenarioTemplate, false);

    const hydratedAcceptance = (template.acceptanceCriteria || []).map(criterion =>
      replaceTokens(criterion, false)
    );

    const hydratedSteps = (template.steps || []).map(step => ({
      stepNumber: step.stepNumber,
      title: replaceTokens(step.title, false),
      portalGuide: replaceTokens(step.portalGuide, false),
      cliCommand: replaceTokens(step.cliCommand, false),
      powershellCommand: replaceTokens(step.powershellCommand, false),
      validation: replaceTokens(step.validation, false)
    }));

    return {
      templateId: template.id,
      section: template.section,
      pathName: template.pathName,
      topic: template.topic,
      title: template.title,
      difficulty: template.difficulty,
      estimatedMinutes: template.estimatedMinutes,
      summary: template.summary,
      selectedValues: selectedValues,
      flatSubstitutions: flatSubstitutions,
      scenarioHtml: hydratedScenarioHtml,
      scenarioPlain: hydratedScenarioPlain,
      acceptanceCriteria: hydratedAcceptance,
      steps: hydratedSteps
    };
  }

  // ================= Catalog View Rendering =================
  function populatePathFilter() {
    const paths = new Set();
    labsCatalog.forEach(l => {
      if (l.pathName) paths.add(l.pathName);
    });

    DOM.filterPath.innerHTML = '<option value="all">All Learning Paths</option>';
    paths.forEach(p => {
      const opt = document.createElement('option');
      opt.value = p;
      opt.textContent = p;
      DOM.filterPath.appendChild(opt);
    });
  }

  function getFilteredLabs() {
    const searchTerm = DOM.searchInput.value.trim().toLowerCase();
    const selectedPath = DOM.filterPath.value;
    const selectedDiff = DOM.filterDifficulty.value;

    return labsCatalog.filter(lab => {
      // Path filter
      if (selectedPath !== 'all' && lab.pathName !== selectedPath) return false;

      // Difficulty filter
      if (selectedDiff !== 'all' && lab.difficulty !== selectedDiff) return false;

      // Flagged filter
      const isFlagged = learnerObject.flaggedLabIds.includes(lab.id);
      if (filterFlaggedOnly && !isFlagged) return false;

      // Search term
      if (searchTerm) {
        const matchTitle = (lab.title || '').toLowerCase().includes(searchTerm);
        const matchTopic = (lab.topic || '').toLowerCase().includes(searchTerm);
        const matchSummary = (lab.summary || '').toLowerCase().includes(searchTerm);
        const matchPath = (lab.pathName || '').toLowerCase().includes(searchTerm);
        if (!matchTitle && !matchTopic && !matchSummary && !matchPath) return false;
      }

      return true;
    });
  }

  function renderCatalog() {
    const filtered = getFilteredLabs();
    DOM.labsGrid.innerHTML = '';

    if (filtered.length === 0) {
      DOM.labsGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 3rem 1rem; color: var(--text-muted);">
          <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">🔍</div>
          <h3>No matching labs found</h3>
          <p>Try adjusting your search terms or clearing active filters.</p>
          <button class="btn-secondary" style="margin-top: 1rem;" onclick="document.getElementById('btn-reset-filters').click();">Reset Filters</button>
        </div>
      `;
      DOM.catalogCountText.textContent = 'Showing 0 labs';
      return;
    }

    DOM.catalogCountText.textContent = `Showing ${filtered.length} of ${labsCatalog.length} labs`;

    filtered.forEach(lab => {
      const isFlagged = learnerObject.flaggedLabIds.includes(lab.id);
      const history = learnerObject.history[lab.id] || {};
      const isCompleted = history.completed;
      const status = history.status || 'Not Started';

      const card = document.createElement('div');
      card.className = `lab-card ${isFlagged ? 'card-flagged' : ''}`;

      let statusHtml = '<span class="lab-status-indicator">⚪ Not Started</span>';
      if (isCompleted) {
        if (status === 'independent') {
          statusHtml = '<span class="lab-status-indicator completed">🌟 Mastered</span>';
        } else if (status === 'assisted') {
          statusHtml = '<span class="lab-status-indicator assisted">💡 Assisted</span>';
        } else if (status === 'struggled') {
          statusHtml = '<span class="lab-status-indicator struggled">⚠️ Needs Review</span>';
        }
      }

      const flagHtml = isFlagged ? '<span class="flag-chip">🚩 Flagged</span>' : '';

      card.innerHTML = `
        <div class="lab-card-header">
          <div class="lab-badge-row">
            <span class="badge-path">${escapeHtml(lab.pathName.split(':')[0])}</span>
            <span class="badge-difficulty ${escapeHtml(lab.difficulty)}">${escapeHtml(lab.difficulty)}</span>
            <span class="badge-time">⏱️ ${lab.estimatedMinutes}m</span>
          </div>
          <span class="badge-topic" style="display: inline-block; margin-bottom: 0.5rem;">${escapeHtml(lab.topic)}</span>
          <h3 class="lab-card-title">${escapeHtml(lab.title)}</h3>
          <p class="lab-card-summary">${escapeHtml(lab.summary)}</p>
        </div>

        <div>
          <div class="lab-card-meta">
            ${statusHtml}
            ${flagHtml}
          </div>
          <div class="lab-card-footer">
            <button class="btn-launch" data-lab-id="${lab.id}">
              <span>🚀 Launch Dynamic Lab</span>
            </button>
          </div>
        </div>
      `;

      card.querySelector('.btn-launch').addEventListener('click', () => {
        launchLab(lab.id);
      });

      DOM.labsGrid.appendChild(card);
    });
  }

  // ================= Active Lab Launch & Execution =================
  function launchLab(labId) {
    const template = labsCatalog.find(l => l.id === labId);
    if (!template) {
      showToast('Lab not found!', 'error');
      return;
    }

    currentLabTemplate = template;
    revealedStepIndices.clear();
    checkedCriteriaIndices.clear();

    // Mark as attempted in history
    if (!learnerObject.history[labId]) {
      learnerObject.history[labId] = {
        attempted: true,
        completed: false,
        status: null,
        hintsRevealed: 0,
        totalSteps: (template.steps || []).length,
        notes: '',
        lastAttempted: new Date().toISOString()
      };
    } else {
      learnerObject.history[labId].attempted = true;
      learnerObject.history[labId].lastAttempted = new Date().toISOString();
    }
    saveLearnerObject();

    // Generate fresh randomized lab
    currentHydratedLab = hydrateLab(template);

    // Switch views
    DOM.catalogView.style.display = 'none';
    DOM.labView.style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Populate active lab UI
    renderActiveLab();
  }

  function renderActiveLab() {
    if (!currentHydratedLab) return;

    const lab = currentHydratedLab;
    const history = learnerObject.history[lab.templateId] || {};
    const isFlagged = learnerObject.flaggedLabIds.includes(lab.templateId);

    // Header Info
    DOM.labPathBadge.textContent = lab.pathName;
    DOM.labTopicBadge.textContent = lab.topic;
    DOM.labDifficultyBadge.textContent = lab.difficulty;
    DOM.labDifficultyBadge.className = `badge-difficulty ${lab.difficulty}`;
    DOM.labTimeBadge.textContent = `⏱️ ${lab.estimatedMinutes} mins`;
    DOM.labTitle.textContent = lab.title;
    DOM.labSummary.textContent = lab.summary;

    // Status Badge
    updateStatusBadge(history.status);

    // Trouble Flag Button
    updateFlagButton(isFlagged);

    // Scenario Text
    DOM.labScenarioText.innerHTML = lab.scenarioHtml;

    // Parameters Grid
    renderParametersGrid(lab);

    // Acceptance Checklist
    renderAcceptanceCriteria(lab);

    // Progressive Steps
    renderSteps(lab);
    updateHintsCounter();

    // Rating Buttons
    updateRatingButtons(history.status);

    // Notes
    DOM.labNotesInput.value = history.notes || '';
    DOM.notesStatus.textContent = '';
  }

  function updateStatusBadge(status) {
    if (!status) {
      DOM.labStatusBadge.textContent = 'In Progress';
      DOM.labStatusBadge.className = 'badge-status';
    } else if (status === 'independent') {
      DOM.labStatusBadge.textContent = '🌟 Mastered (Independent)';
      DOM.labStatusBadge.className = 'badge-status status-success';
    } else if (status === 'assisted') {
      DOM.labStatusBadge.textContent = '💡 Assisted';
      DOM.labStatusBadge.className = 'badge-status status-assisted';
    } else if (status === 'struggled') {
      DOM.labStatusBadge.textContent = '⚠️ Needs Practice';
      DOM.labStatusBadge.className = 'badge-status status-struggled';
    }
  }

  function updateFlagButton(isFlagged) {
    if (isFlagged) {
      DOM.btnFlagTrouble.classList.add('flagged');
      DOM.flagIcon.textContent = '🚩';
      DOM.flagText.textContent = 'Flagged for Review';
    } else {
      DOM.btnFlagTrouble.classList.remove('flagged');
      DOM.flagIcon.textContent = '🏳️';
      DOM.flagText.textContent = 'Flag Trouble';
    }
  }

  function renderParametersGrid(lab) {
    DOM.labParametersGrid.innerHTML = '';

    const substitutions = lab.flatSubstitutions || {};
    const displayedKeys = Object.keys(substitutions).filter(k => k !== 'rand3' && k !== 'rand5');

    displayedKeys.forEach(key => {
      const val = substitutions[key];
      const card = document.createElement('div');
      card.className = 'param-item';
      card.title = 'Click to copy value';

      card.innerHTML = `
        <div class="param-item-info">
          <span class="param-key">${escapeHtml(formatParamKey(key))}</span>
          <span class="param-val" title="${escapeHtml(String(val))}">${escapeHtml(String(val))}</span>
        </div>
        <span class="param-copy-icon">📋</span>
      `;

      card.addEventListener('click', () => {
        copyToClipboard(String(val), `Copied ${key}: ${val}`);
      });

      DOM.labParametersGrid.appendChild(card);
    });
  }

  function formatParamKey(rawKey) {
    return rawKey
      .replace(/\./g, ' › ')
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, str => str.toUpperCase());
  }

  function renderAcceptanceCriteria(lab) {
    DOM.acceptanceChecklist.innerHTML = '';
    const criteria = lab.acceptanceCriteria || [];

    criteria.forEach((criterion, idx) => {
      const li = document.createElement('li');
      const isChecked = checkedCriteriaIndices.has(idx);
      li.className = `criteria-item ${isChecked ? 'checked' : ''}`;

      li.innerHTML = `
        <div class="criteria-checkbox">${isChecked ? '✓' : ''}</div>
        <span class="criteria-text">${escapeHtml(criterion)}</span>
      `;

      li.addEventListener('click', () => {
        if (checkedCriteriaIndices.has(idx)) {
          checkedCriteriaIndices.delete(idx);
        } else {
          checkedCriteriaIndices.add(idx);
        }
        renderAcceptanceCriteria(lab);
      });

      DOM.acceptanceChecklist.appendChild(li);
    });

    // Update progress bar
    const total = criteria.length;
    const completed = checkedCriteriaIndices.size;
    const pct = total > 0 ? Math.round((completed / total) * 100) : 0;
    DOM.criteriaProgressText.textContent = `${completed} / ${total} Completed (${pct}%)`;
    DOM.criteriaProgressFill.style.width = `${pct}%`;
  }

  // ================= Progressive Step Disclosure =================
  function renderSteps(lab) {
    DOM.stepsContainer.innerHTML = '';
    const steps = lab.steps || [];

    steps.forEach((step, idx) => {
      const isRevealed = revealedStepIndices.has(idx);
      const card = document.createElement('div');
      card.className = `step-card ${isRevealed ? 'revealed' : 'locked'}`;

      if (!isRevealed) {
        // Locked State
        card.innerHTML = `
          <div class="step-locked-bar">
            <div class="step-locked-info">
              <div class="step-lock-icon">🔒</div>
              <span class="step-locked-title">Step ${step.stepNumber}: ${escapeHtml(step.title)}</span>
            </div>
            <button class="btn-primary btn-sm btn-unlock" data-step-idx="${idx}">
              <span>🔓 Reveal Step ${step.stepNumber} (Hint)</span>
            </button>
          </div>
        `;

        card.querySelector('.btn-unlock').addEventListener('click', () => {
          revealStep(idx);
        });
      } else {
        // Revealed State
        card.innerHTML = `
          <div class="step-header-revealed">
            <div class="step-badge-title">
              <span class="step-num-badge">Step ${step.stepNumber}</span>
              <h4 class="step-title-revealed">${escapeHtml(step.title)}</h4>
            </div>
            <button class="btn-hide-step" title="Hide this step">🙈 Hide</button>
          </div>

          <div class="step-body">
            <!-- Portal Walkthrough -->
            <div class="guide-block">
              <div class="guide-block-label">
                <span>🌐 Azure Portal Instructions</span>
              </div>
              <p class="guide-text">${formatMarkdownBasic(step.portalGuide)}</p>
            </div>

            <!-- Azure CLI Snippet -->
            <div class="command-box">
              <div class="command-header">
                <span class="command-tag">💻 Azure CLI (Bash)</span>
                <button class="btn-copy btn-copy-cli" title="Copy CLI Command">
                  <span>📋 Copy</span>
                </button>
              </div>
              <pre class="command-code"><code>${escapeHtml(step.cliCommand)}</code></pre>
            </div>

            <!-- Azure PowerShell Snippet -->
            <div class="command-box">
              <div class="command-header">
                <span class="command-tag">⚡ Azure PowerShell</span>
                <button class="btn-copy btn-copy-ps" title="Copy PowerShell Command">
                  <span>📋 Copy</span>
                </button>
              </div>
              <pre class="command-code"><code>${escapeHtml(step.powershellCommand)}</code></pre>
            </div>

            <!-- Verification / Validation Snippet -->
            <div class="command-box validation-box">
              <div class="command-header">
                <span class="command-tag" style="color: var(--azure-cyan);">🔍 Verification / Validation Command</span>
                <button class="btn-copy btn-copy-val" title="Copy Validation Command">
                  <span>📋 Copy</span>
                </button>
              </div>
              <pre class="command-code"><code>${escapeHtml(step.validation)}</code></pre>
            </div>
          </div>
        `;

        // Event listeners for revealed step
        card.querySelector('.btn-hide-step').addEventListener('click', () => {
          hideStep(idx);
        });

        card.querySelector('.btn-copy-cli').addEventListener('click', (e) => {
          copyButtonAction(e.currentTarget, step.cliCommand, 'Azure CLI command copied!');
        });

        card.querySelector('.btn-copy-ps').addEventListener('click', (e) => {
          copyButtonAction(e.currentTarget, step.powershellCommand, 'PowerShell command copied!');
        });

        card.querySelector('.btn-copy-val').addEventListener('click', (e) => {
          copyButtonAction(e.currentTarget, step.validation, 'Validation command copied!');
        });
      }

      DOM.stepsContainer.appendChild(card);
    });
  }

  function revealStep(idx) {
    revealedStepIndices.add(idx);
    renderSteps(currentHydratedLab);
    updateHintsCounter();
    showToast(`Step ${idx + 1} revealed!`, 'info');
  }

  function hideStep(idx) {
    revealedStepIndices.delete(idx);
    renderSteps(currentHydratedLab);
    updateHintsCounter();
  }

  function revealNextStep() {
    if (!currentHydratedLab) return;
    const total = (currentHydratedLab.steps || []).length;
    for (let i = 0; i < total; i++) {
      if (!revealedStepIndices.has(i)) {
        revealStep(i);
        return;
      }
    }
    showToast('All steps are already revealed!', 'info');
  }

  function revealAllSteps() {
    if (!currentHydratedLab) return;
    const total = (currentHydratedLab.steps || []).length;
    for (let i = 0; i < total; i++) {
      revealedStepIndices.add(i);
    }
    renderSteps(currentHydratedLab);
    updateHintsCounter();
    showToast('All steps revealed.', 'info');
  }

  function hideAllSteps() {
    revealedStepIndices.clear();
    renderSteps(currentHydratedLab);
    updateHintsCounter();
    showToast('All steps hidden.', 'info');
  }

  function updateHintsCounter() {
    if (!currentHydratedLab) return;
    const total = (currentHydratedLab.steps || []).length;
    const used = revealedStepIndices.size;

    DOM.hintsCount.textContent = `${used} / ${total}`;

    if (used === 0) {
      DOM.hintsRatingBadge.textContent = 'Independent';
      DOM.hintsRatingBadge.className = 'badge-independent';
    } else {
      DOM.hintsRatingBadge.textContent = 'Assisted';
      DOM.hintsRatingBadge.className = 'badge-assisted';
    }

    // Save hints used into learner history
    if (learnerObject.history[currentHydratedLab.templateId]) {
      learnerObject.history[currentHydratedLab.templateId].hintsRevealed = used;
      saveLearnerObject();
    }
  }

  // ================= Rating, Notes & Flagging =================
  function setLabRating(status) {
    if (!currentHydratedLab) return;
    const labId = currentHydratedLab.templateId;

    if (!learnerObject.history[labId]) {
      learnerObject.history[labId] = {
        attempted: true,
        completed: true,
        status: status,
        hintsRevealed: revealedStepIndices.size,
        totalSteps: (currentHydratedLab.steps || []).length,
        notes: DOM.labNotesInput.value.trim(),
        lastAttempted: new Date().toISOString()
      };
    } else {
      learnerObject.history[labId].completed = true;
      learnerObject.history[labId].status = status;
      learnerObject.history[labId].hintsRevealed = revealedStepIndices.size;
    }

    // Auto-flag if struggled
    if (status === 'struggled') {
      if (!learnerObject.flaggedLabIds.includes(labId)) {
        learnerObject.flaggedLabIds.push(labId);
      }
      updateFlagButton(true);
    }

    saveLearnerObject();
    updateStatusBadge(status);
    updateRatingButtons(status);
    showToast(`Progress recorded: ${status.toUpperCase()}!`, 'success');
  }

  function updateRatingButtons(activeStatus) {
    DOM.btnRateIndependent.classList.toggle('active', activeStatus === 'independent');
    DOM.btnRateAssisted.classList.toggle('active', activeStatus === 'assisted');
    DOM.btnRateStruggled.classList.toggle('active', activeStatus === 'struggled');
  }

  function toggleTroubleFlag() {
    if (!currentHydratedLab) return;
    const labId = currentHydratedLab.templateId;
    const idx = learnerObject.flaggedLabIds.indexOf(labId);

    if (idx >= 0) {
      learnerObject.flaggedLabIds.splice(idx, 1);
      updateFlagButton(false);
      showToast('Removed trouble flag.', 'info');
    } else {
      learnerObject.flaggedLabIds.push(labId);
      updateFlagButton(true);
      showToast('Flagged for future practice!', 'warning');
    }

    saveLearnerObject();
  }

  function saveNotes() {
    if (!currentHydratedLab) return;
    const labId = currentHydratedLab.templateId;
    const text = DOM.labNotesInput.value.trim();

    if (!learnerObject.history[labId]) {
      learnerObject.history[labId] = {
        attempted: true,
        completed: false,
        status: null,
        notes: text,
        hintsRevealed: 0,
        totalSteps: (currentHydratedLab.steps || []).length,
        lastAttempted: new Date().toISOString()
      };
    } else {
      learnerObject.history[labId].notes = text;
    }

    saveLearnerObject();
    DOM.notesStatus.textContent = '✓ Saved';
    setTimeout(() => {
      DOM.notesStatus.textContent = '';
    }, 2500);
    showToast('Notes saved successfully!', 'success');
  }

  function rerollParameters() {
    if (!currentLabTemplate) return;

    currentHydratedLab = hydrateLab(currentLabTemplate);
    renderActiveLab();
    showToast('🎲 Generated fresh randomized parameters!', 'info');
  }

  // ================= Learner Profile Modal =================
  function openProfileModal() {
    updateModalStats();
    DOM.profileModal.style.display = 'flex';
  }

  function closeProfileModal() {
    DOM.profileModal.style.display = 'none';
  }

  function updateModalStats() {
    DOM.pTotalAttempted.textContent = learnerObject.stats.totalAttempted || 0;
    DOM.pTotalCompleted.textContent = learnerObject.stats.totalCompleted || 0;
    DOM.pIndependentCount.textContent = learnerObject.stats.independent || 0;
    DOM.pFlaggedCount.textContent = (learnerObject.flaggedLabIds || []).length;

    // Flagged labs list
    DOM.flaggedLabsList.innerHTML = '';
    const flaggedIds = learnerObject.flaggedLabIds || [];
    if (flaggedIds.length === 0) {
      DOM.flaggedLabsList.innerHTML = '<p style="color: var(--text-muted); font-size: 0.85rem;">No labs currently flagged for review. Great job!</p>';
    } else {
      flaggedIds.forEach(id => {
        const lab = labsCatalog.find(l => l.id === id);
        if (lab) {
          const item = document.createElement('div');
          item.className = 'flagged-item';
          item.innerHTML = `
            <div>
              <span class="flagged-item-title">${escapeHtml(lab.title)}</span>
              <span style="font-size: 0.72rem; color: var(--text-muted); display: block;">${escapeHtml(lab.pathName)}</span>
            </div>
            <button class="btn-primary btn-sm">Practice Now →</button>
          `;
          item.addEventListener('click', () => {
            closeProfileModal();
            launchLab(lab.id);
          });
          DOM.flaggedLabsList.appendChild(item);
        }
      });
    }

    // Path breakdown list
    DOM.pathBreakdownList.innerHTML = '';
    const pathMap = {};
    labsCatalog.forEach(l => {
      if (!pathMap[l.pathName]) {
        pathMap[l.pathName] = { total: 0, completed: 0 };
      }
      pathMap[l.pathName].total++;
      if (learnerObject.history[l.id] && learnerObject.history[l.id].completed) {
        pathMap[l.pathName].completed++;
      }
    });

    for (const [pathName, data] of Object.entries(pathMap)) {
      const pct = data.total > 0 ? Math.round((data.completed / data.total) * 100) : 0;
      const box = document.createElement('div');
      box.className = 'path-progress-item';
      box.innerHTML = `
        <div class="path-progress-header">
          <span>${escapeHtml(pathName)}</span>
          <span>${data.completed} / ${data.total} (${pct}%)</span>
        </div>
        <div class="path-progress-track">
          <div class="path-progress-fill" style="width: ${pct}%;"></div>
        </div>
      `;
      DOM.pathBreakdownList.appendChild(box);
    }
  }

  function exportProfile() {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(learnerObject, null, 2));
    const dlAnchor = document.createElement('a');
    dlAnchor.setAttribute('href', dataStr);
    dlAnchor.setAttribute('download', 'az104_learner_profile.json');
    document.body.appendChild(dlAnchor);
    dlAnchor.click();
    dlAnchor.remove();
    showToast('Learner progress exported!', 'success');
  }

  function importProfile(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (event) {
      try {
        const imported = JSON.parse(event.target.result);
        if (imported && imported.history) {
          learnerObject = imported;
          saveLearnerObject();
          updateModalStats();
          renderCatalog();
          showToast('Learner progress imported successfully!', 'success');
        } else {
          showToast('Invalid profile JSON structure!', 'error');
        }
      } catch (err) {
        showToast('Error parsing JSON file!', 'error');
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  }

  function resetProfile() {
    if (confirm('Are you sure you want to reset all your learning progress? This action cannot be undone.')) {
      learnerObject = {
        version: 1,
        updatedAt: new Date().toISOString(),
        stats: { totalAttempted: 0, totalCompleted: 0, independent: 0, assisted: 0, struggled: 0 },
        flaggedLabIds: [],
        history: {}
      };
      saveLearnerObject();
      updateModalStats();
      renderCatalog();
      showToast('All learning data reset.', 'warning');
    }
  }

  // ================= Clipboard & Helpers =================
  function copyToClipboard(text, feedbackMsg) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        showToast(feedbackMsg || 'Copied to clipboard!', 'info');
      }).catch(() => {
        fallbackCopyText(text, feedbackMsg);
      });
    } else {
      fallbackCopyText(text, feedbackMsg);
    }
  }

  function fallbackCopyText(text, feedbackMsg) {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand('copy');
      showToast(feedbackMsg || 'Copied to clipboard!', 'info');
    } catch (err) {
      showToast('Unable to copy to clipboard', 'error');
    }
    ta.remove();
  }

  function copyButtonAction(btn, text, feedbackMsg) {
    copyToClipboard(text, feedbackMsg);
    const origHtml = btn.innerHTML;
    btn.innerHTML = '<span>✓ Copied</span>';
    btn.classList.add('copied');
    setTimeout(() => {
      btn.innerHTML = origHtml;
      btn.classList.remove('copied');
    }, 2000);
  }

  function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = 'toast';
    let icon = 'ℹ️';
    if (type === 'success') icon = '✅';
    if (type === 'warning') icon = '⚠️';
    if (type === 'error') icon = '❌';

    toast.innerHTML = `<span>${icon}</span> <span>${escapeHtml(message)}</span>`;
    DOM.toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.25s ease';
      setTimeout(() => toast.remove(), 250);
    }, 2800);
  }

  function escapeHtml(str) {
    if (typeof str !== 'string') return str;
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function formatMarkdownBasic(str) {
    if (!str) return '';
    let escaped = escapeHtml(str);
    // Bold **text**
    escaped = escaped.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    // Inline code `code`
    escaped = escaped.replace(/`([^`]+)`/g, '<code>$1</code>');
    return escaped;
  }

  // ================= Event Listeners =================
  function setupEventListeners() {
    // Navigation
    DOM.btnBrandHome.addEventListener('click', returnToCatalog);
    DOM.btnNavCatalog.addEventListener('click', returnToCatalog);
    DOM.btnBackToCatalog.addEventListener('click', returnToCatalog);
    DOM.btnNavProfile.addEventListener('click', openProfileModal);
    DOM.btnCloseModal.addEventListener('click', closeProfileModal);

    // Modal click outside to close
    DOM.profileModal.addEventListener('click', (e) => {
      if (e.target === DOM.profileModal) closeProfileModal();
    });

    // Profile Data Buttons
    DOM.btnExportProfile.addEventListener('click', exportProfile);
    DOM.fileImportProfile.addEventListener('change', importProfile);
    DOM.btnResetProfile.addEventListener('click', resetProfile);

    // Search & Filters
    DOM.searchInput.addEventListener('input', () => {
      DOM.btnClearSearch.style.display = DOM.searchInput.value ? 'block' : 'none';
      renderCatalog();
    });

    DOM.btnClearSearch.addEventListener('click', () => {
      DOM.searchInput.value = '';
      DOM.btnClearSearch.style.display = 'none';
      renderCatalog();
    });

    DOM.filterPath.addEventListener('change', renderCatalog);
    DOM.filterDifficulty.addEventListener('change', renderCatalog);

    DOM.btnFilterFlagged.addEventListener('click', () => {
      filterFlaggedOnly = !filterFlaggedOnly;
      DOM.btnFilterFlagged.classList.toggle('active', filterFlaggedOnly);
      renderCatalog();
    });

    DOM.btnResetFilters.addEventListener('click', () => {
      DOM.searchInput.value = '';
      DOM.btnClearSearch.style.display = 'none';
      DOM.filterPath.value = 'all';
      DOM.filterDifficulty.value = 'all';
      filterFlaggedOnly = false;
      DOM.btnFilterFlagged.classList.remove('active');
      renderCatalog();
    });

    // Active Lab Controls
    DOM.btnRerollParams.addEventListener('click', rerollParameters);
    DOM.btnFlagTrouble.addEventListener('click', toggleTroubleFlag);

    // Progressive Steps Controls
    DOM.btnRevealNext.addEventListener('click', revealNextStep);
    DOM.btnRevealAll.addEventListener('click', revealAllSteps);
    DOM.btnHideAll.addEventListener('click', hideAllSteps);

    // Rating Buttons
    DOM.btnRateIndependent.addEventListener('click', () => setLabRating('independent'));
    DOM.btnRateAssisted.addEventListener('click', () => setLabRating('assisted'));
    DOM.btnRateStruggled.addEventListener('click', () => setLabRating('struggled'));

    // Notes
    DOM.btnSaveNotes.addEventListener('click', saveNotes);
  }

  function returnToCatalog() {
    DOM.labView.style.display = 'none';
    DOM.catalogView.style.display = 'block';
    DOM.btnNavCatalog.classList.add('active');
    DOM.btnNavProfile.classList.remove('active');
    renderCatalog();
    updateGlobalStats();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Self-start on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
