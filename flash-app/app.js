/**
 * AZ-104 FlashMaster - Interactive Study WebApp Logic
 * Self-contained client-side application. No backend server required.
 */

(function () {
  'use strict';

  // Storage Keys
  const STORAGE_KEY_LEARNER = 'AZ104_LEARNER_OBJECT';
  const STORAGE_KEY_CUSTOM_DECK = 'AZ104_CUSTOM_DECK';

  // App State
  let deck = [];
  let activeSessionCards = [];
  let currentIndex = 0;
  let isCardFlipped = false;
  let sessionStats = {
    reviewed: 0,
    easy: 0,
    good: 0,
    hard: 0,
    troubleAdded: 0,
    flaggedAdded: 0
  };

  // Section Friendly Names
  const SECTION_NAMES = {
    '01-prerequisites-for-azure-administrators': 'Path 1: Prerequisites for Azure Administrators',
    '02-manage-identities-and-governance': 'Path 2: Manage Identities & Governance',
    '03-configure-and-manage-virtual-networks': 'Path 3: Configure & Manage Virtual Networks',
    '04-implement-and-manage-storage': 'Path 4: Implement & Manage Storage',
    '05-deploy-and-manage-compute-resources': 'Path 5: Deploy & Manage Compute Resources',
    '06-monitor-and-back-up-resources': 'Path 6: Monitor & Back Up Resources'
  };

  // -------------------------------------------------------------
  // Learner Object Persistence
  // -------------------------------------------------------------
  function getDefaultLearnerObject() {
    return {
      version: '1.0.0',
      learnerId: 'az104-student',
      createdDate: new Date().toISOString(),
      lastActive: new Date().toISOString(),
      metrics: {
        totalReviews: 0,
        masteredCount: 0,
        troubleCount: 0,
        flaggedInaccurateCount: 0,
        sessionsCompleted: 0
      },
      sectionPerformance: {},
      cardRecords: {},
      troubleCardIds: [],
      flaggedCards: []
    };
  }

  function loadLearnerObject() {
    try {
      const data = localStorage.getItem(STORAGE_KEY_LEARNER);
      if (data) {
        return JSON.parse(data);
      }
    } catch (e) {
      console.error('Error loading learner profile:', e);
    }
    const def = getDefaultLearnerObject();
    saveLearnerObject(def);
    return def;
  }

  function saveLearnerObject(obj) {
    try {
      obj.lastActive = new Date().toISOString();
      localStorage.setItem(STORAGE_KEY_LEARNER, JSON.stringify(obj));
    } catch (e) {
      console.error('Error saving learner profile:', e);
    }
  }

  let learner = loadLearnerObject();

  // -------------------------------------------------------------
  // Deck Loading (cards.js default + custom localStorage override)
  // -------------------------------------------------------------
  function loadMasterDeck() {
    // 1. Check custom deck from storage
    const custom = localStorage.getItem(STORAGE_KEY_CUSTOM_DECK);
    if (custom) {
      try {
        const parsed = JSON.parse(custom);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      } catch (e) {
        console.warn('Custom deck corrupted, reverting to default cards.js');
      }
    }
    // 2. Default to window.FLASHCARD_DATA
    if (window.FLASHCARD_DATA && Array.isArray(window.FLASHCARD_DATA)) {
      return [...window.FLASHCARD_DATA];
    }
    return [];
  }

  deck = loadMasterDeck();

  // -------------------------------------------------------------
  // UI Elements
  // -------------------------------------------------------------
  const screens = {
    setup: document.getElementById('setup-screen'),
    study: document.getElementById('study-screen'),
    summary: document.getElementById('summary-screen')
  };

  const el = {
    sectionList: document.getElementById('section-checkbox-list'),
    selectAllBtn: document.getElementById('btn-select-all'),
    deselectAllBtn: document.getElementById('btn-deselect-all'),
    startStudyBtn: document.getElementById('btn-start-study'),
    cardCountPills: document.getElementsByName('card-count'),
    studyFilterSelect: document.getElementById('study-filter-mode'),
    
    // Snapshot stats
    statTotalReviews: document.getElementById('stat-total-reviews'),
    statMastered: document.getElementById('stat-mastered'),
    statTrouble: document.getElementById('stat-trouble'),
    statFlagged: document.getElementById('stat-flagged'),

    // Study UI
    cardScene: document.getElementById('flashcard-scene'),
    cardInner: document.getElementById('flashcard-inner'),
    cardTopicTag: document.getElementById('card-topic-tag'),
    cardPromptType: document.getElementById('card-prompt-type'),
    cardQuestionText: document.getElementById('card-question-text'),
    cardAnswerText: document.getElementById('card-answer-text'),
    cardSourceText: document.getElementById('card-source-text'),
    cardIndicators: document.getElementById('card-indicators'),
    progressBarFill: document.getElementById('progress-bar-fill'),
    cardCounterLabel: document.getElementById('card-counter-label'),
    ratingControls: document.getElementById('rating-controls'),
    
    // Study Buttons
    btnFlip: document.getElementById('btn-flip-card'),
    btnTrouble: document.getElementById('btn-mark-trouble'),
    btnFlag: document.getElementById('btn-flag-inaccurate'),
    btnQuit: document.getElementById('btn-quit-study'),
    
    // Rating Buttons
    btnRateHard: document.getElementById('btn-rate-hard'),
    btnRateGood: document.getElementById('btn-rate-good'),
    btnRateEasy: document.getElementById('btn-rate-easy'),

    // Summary Elements
    summaryReviewed: document.getElementById('summary-reviewed'),
    summaryMastered: document.getElementById('summary-mastered'),
    summaryTrouble: document.getElementById('summary-trouble'),
    summaryFlagged: document.getElementById('summary-flagged'),
    summaryTopicList: document.getElementById('summary-topic-breakdown'),
    btnStudyTroubleAgain: document.getElementById('btn-study-trouble-again'),
    btnReturnSetup: document.getElementById('btn-return-setup'),

    // Modals
    profileModal: document.getElementById('profile-modal'),
    btnOpenProfile: document.getElementById('btn-open-profile'),
    btnCloseProfile: document.getElementById('btn-close-profile'),
    
    flagModal: document.getElementById('flag-modal'),
    flagCardQuestionPreview: document.getElementById('flag-card-question-preview'),
    flagReasonInput: document.getElementById('flag-reason-input'),
    btnConfirmFlag: document.getElementById('btn-confirm-flag'),
    btnCancelFlag: document.getElementById('btn-cancel-flag'),

    // Profile Modal Actions
    btnExportProfile: document.getElementById('btn-export-profile'),
    inputImportProfile: document.getElementById('input-import-profile'),
    btnImportDeck: document.getElementById('btn-import-deck-trigger'),
    inputImportDeck: document.getElementById('input-import-deck'),
    btnResetProfile: document.getElementById('btn-reset-profile'),
    profileTroubleList: document.getElementById('profile-trouble-list'),
    profileFlaggedList: document.getElementById('profile-flagged-list'),

    // Toast
    toast: document.getElementById('toast-notice')
  };

  // -------------------------------------------------------------
  // Helpers
  // -------------------------------------------------------------
  function showToast(message) {
    if (!el.toast) return;
    el.toast.textContent = message;
    el.toast.classList.add('show');
    setTimeout(() => {
      el.toast.classList.remove('show');
    }, 2800);
  }

  function shuffle(array) {
    const copy = [...array];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function getSelectedCardCount() {
    for (const pill of el.cardCountPills) {
      if (pill.checked) {
        return pill.value === 'all' ? Infinity : parseInt(pill.value, 10);
      }
    }
    return 10;
  }

  // -------------------------------------------------------------
  // Render Setup Screen
  // -------------------------------------------------------------
  function renderSetupScreen() {
    // 1. Update Snapshot
    el.statTotalReviews.textContent = learner.metrics.totalReviews || 0;
    el.statMastered.textContent = learner.metrics.masteredCount || 0;
    el.statTrouble.textContent = learner.troubleCardIds ? learner.troubleCardIds.length : 0;
    el.statFlagged.textContent = learner.flaggedCards ? learner.flaggedCards.length : 0;

    // 2. Group cards by section
    const sectionCounts = {};
    deck.forEach(c => {
      const sec = c.section || 'General';
      sectionCounts[sec] = (sectionCounts[sec] || 0) + 1;
    });

    // 3. Render section checkboxes
    el.sectionList.innerHTML = '';
    const sections = Object.keys(sectionCounts);

    if (sections.length === 0) {
      el.sectionList.innerHTML = '<p style="color:var(--text-muted); padding:1rem;">No flashcards found in dataset. Use Import Deck to load cards.</p>';
      return;
    }

    sections.forEach(secKey => {
      const friendlyName = SECTION_NAMES[secKey] || secKey;
      const count = sectionCounts[secKey];
      
      const item = document.createElement('label');
      item.className = 'section-item active';
      item.innerHTML = `
        <div class="section-info">
          <input type="checkbox" name="selected-section" value="${secKey}" checked>
          <span class="section-name">${friendlyName}</span>
        </div>
        <span class="section-badge">${count} cards</span>
      `;

      const chk = item.querySelector('input[type="checkbox"]');
      chk.addEventListener('change', () => {
        if (chk.checked) {
          item.classList.add('active');
        } else {
          item.classList.remove('active');
        }
      });

      el.sectionList.appendChild(item);
    });
  }

  // -------------------------------------------------------------
  // Session Assembly & Start
  // -------------------------------------------------------------
  function startSession(customCardList = null) {
    if (customCardList && customCardList.length > 0) {
      activeSessionCards = shuffle(customCardList);
    } else {
      // 1. Gather selected sections
      const selectedSections = [];
      const checkboxes = el.sectionList.querySelectorAll('input[name="selected-section"]:checked');
      checkboxes.forEach(c => selectedSections.push(c.value));

      if (selectedSections.length === 0) {
        showToast('Please select at least one section to study.');
        return;
      }

      // 2. Filter candidate cards
      let pool = deck.filter(c => selectedSections.includes(c.section));

      // 3. Check study mode filter
      const filterMode = el.studyFilterSelect ? el.studyFilterSelect.value : 'all';
      if (filterMode === 'trouble') {
        const troubleSet = new Set(learner.troubleCardIds || []);
        pool = pool.filter(c => troubleSet.has(c.id));
        if (pool.length === 0) {
          showToast('You have no cards marked as Trouble in the selected sections!');
          return;
        }
      } else if (filterMode === 'unstudied') {
        pool = pool.filter(c => !learner.cardRecords[c.id] || learner.cardRecords[c.id].reviews === 0);
        if (pool.length === 0) {
          showToast('All cards in the selected sections have already been studied!');
          return;
        }
      }

      // 4. Random sample based on count
      const desiredCount = getSelectedCardCount();
      const shuffled = shuffle(pool);
      activeSessionCards = shuffled.slice(0, Math.min(desiredCount, shuffled.length));
    }

    if (activeSessionCards.length === 0) {
      showToast('No cards available matching your criteria.');
      return;
    }

    // Reset session variables
    currentIndex = 0;
    isCardFlipped = false;
    sessionStats = {
      reviewed: 0,
      easy: 0,
      good: 0,
      hard: 0,
      troubleAdded: 0,
      flaggedAdded: 0,
      topicResults: {}
    };

    switchScreen('study');
    renderCurrentCard();
  }

  // -------------------------------------------------------------
  // Screen Switching
  // -------------------------------------------------------------
  function switchScreen(screenName) {
    Object.keys(screens).forEach(key => {
      screens[key].style.display = key === screenName ? 'flex' : 'none';
    });

    if (screenName === 'setup') {
      renderSetupScreen();
    }
  }

  // -------------------------------------------------------------
  // Render Active Flashcard
  // -------------------------------------------------------------
  function renderCurrentCard() {
    if (currentIndex >= activeSessionCards.length) {
      finishSession();
      return;
    }

    const card = activeSessionCards[currentIndex];
    isCardFlipped = false;
    el.cardInner.classList.remove('flipped');
    el.ratingControls.classList.remove('visible');

    // Progress bar
    const progressPct = ((currentIndex) / activeSessionCards.length) * 100;
    el.progressBarFill.style.width = `${progressPct}%`;
    el.cardCounterLabel.textContent = `Card ${currentIndex + 1} of ${activeSessionCards.length}`;

    // Meta & Text
    const friendlySec = SECTION_NAMES[card.section] || card.section;
    el.cardTopicTag.textContent = `${friendlySec} • ${card.topic || ''}`;
    el.cardQuestionText.textContent = card.question;
    el.cardAnswerText.textContent = card.answer;
    el.cardSourceText.textContent = card.source ? `Reference: ${card.source}` : '';

    // Indicators (trouble / inaccurate)
    renderCardBadges(card.id);
  }

  function renderCardBadges(cardId) {
    el.cardIndicators.innerHTML = '';
    const isTrouble = (learner.troubleCardIds || []).includes(cardId);
    const isFlagged = (learner.flaggedCards || []).some(f => f.cardId === cardId);

    if (isTrouble) {
      const b = document.createElement('span');
      b.className = 'indicator-badge trouble';
      b.textContent = '⚠️ Needs Review';
      el.cardIndicators.appendChild(b);
      el.btnTrouble.style.borderColor = 'var(--accent-warning)';
    } else {
      el.btnTrouble.style.borderColor = '';
    }

    if (isFlagged) {
      const b = document.createElement('span');
      b.className = 'indicator-badge inaccurate';
      b.textContent = '🚩 Inaccurate Flagged';
      el.cardIndicators.appendChild(b);
      el.btnFlag.style.borderColor = 'var(--accent-danger)';
    } else {
      el.btnFlag.style.borderColor = '';
    }
  }

  function toggleFlip() {
    isCardFlipped = !isCardFlipped;
    if (isCardFlipped) {
      el.cardInner.classList.add('flipped');
      el.ratingControls.classList.add('visible');
    } else {
      el.cardInner.classList.remove('flipped');
      el.ratingControls.classList.remove('visible');
    }
  }

  // -------------------------------------------------------------
  // Marking Trouble & Inaccuracy
  // -------------------------------------------------------------
  function markCardTrouble() {
    const card = activeSessionCards[currentIndex];
    if (!card) return;

    if (!learner.troubleCardIds) learner.troubleCardIds = [];
    const idx = learner.troubleCardIds.indexOf(card.id);

    if (idx === -1) {
      learner.troubleCardIds.push(card.id);
      sessionStats.troubleAdded++;
      showToast('Marked as Trouble! Will prioritize for extra review.');
    } else {
      learner.troubleCardIds.splice(idx, 1);
      showToast('Removed from Trouble list.');
    }

    // Update section stats
    const sec = card.section || 'General';
    if (!learner.sectionPerformance[sec]) {
      learner.sectionPerformance[sec] = { reviews: 0, correct: 0, troubleCount: 0 };
    }
    learner.sectionPerformance[sec].troubleCount = learner.troubleCardIds.filter(id => {
      const c = deck.find(x => x.id === id);
      return c && c.section === sec;
    }).length;

    saveLearnerObject(learner);
    renderCardBadges(card.id);
  }

  function openFlagInaccurateModal() {
    const card = activeSessionCards[currentIndex];
    if (!card) return;

    el.flagCardQuestionPreview.textContent = `"${card.question}"`;
    const existing = (learner.flaggedCards || []).find(f => f.cardId === card.id);
    el.flagReasonInput.value = existing ? existing.note : '';
    el.flagModal.classList.add('open');
    el.flagReasonInput.focus();
  }

  function saveFlagInaccurate() {
    const card = activeSessionCards[currentIndex];
    if (!card) return;

    const note = el.flagReasonInput.value.trim();
    if (!learner.flaggedCards) learner.flaggedCards = [];

    // Remove old flag if present
    learner.flaggedCards = learner.flaggedCards.filter(f => f.cardId !== card.id);

    // Add new flag
    learner.flaggedCards.push({
      cardId: card.id,
      section: card.section,
      topic: card.topic,
      question: card.question,
      answer: card.answer,
      note: note || 'Flagged for inaccuracy audit',
      timestamp: new Date().toISOString()
    });

    sessionStats.flaggedAdded++;
    learner.metrics.flaggedInaccurateCount = learner.flaggedCards.length;
    saveLearnerObject(learner);

    el.flagModal.classList.remove('open');
    showToast('Card flagged as inaccurate.');
    renderCardBadges(card.id);
  }

  // -------------------------------------------------------------
  // Rating Answer & Updating Learner Object
  // -------------------------------------------------------------
  function handleRateCard(rating) {
    const card = activeSessionCards[currentIndex];
    if (!card) return;

    sessionStats.reviewed++;
    sessionStats[rating]++;

    // 1. Update Card Record
    if (!learner.cardRecords[card.id]) {
      learner.cardRecords[card.id] = {
        reviews: 0,
        consecutiveCorrect: 0,
        lastRating: rating,
        lastReviewed: null,
        history: []
      };
    }

    const rec = learner.cardRecords[card.id];
    rec.reviews++;
    rec.lastRating = rating;
    rec.lastReviewed = new Date().toISOString();
    rec.history.push(rating);

    if (rating === 'easy') {
      rec.consecutiveCorrect++;
      if (rec.consecutiveCorrect >= 2) {
        // Remove from trouble if mastered twice in a row
        learner.troubleCardIds = (learner.troubleCardIds || []).filter(id => id !== card.id);
      }
    } else if (rating === 'hard') {
      rec.consecutiveCorrect = 0;
      // Auto-tag trouble on hard
      if (!learner.troubleCardIds) learner.troubleCardIds = [];
      if (!learner.troubleCardIds.includes(card.id)) {
        learner.troubleCardIds.push(card.id);
      }
    } else {
      rec.consecutiveCorrect++;
    }

    // 2. Update Section Performance
    const sec = card.section || 'General';
    if (!learner.sectionPerformance[sec]) {
      learner.sectionPerformance[sec] = { reviews: 0, correct: 0, troubleCount: 0 };
    }
    learner.sectionPerformance[sec].reviews++;
    if (rating === 'easy' || rating === 'good') {
      learner.sectionPerformance[sec].correct++;
    }

    // 3. Update Overall Metrics
    learner.metrics.totalReviews++;
    
    // Count mastered (cards with 2+ consecutive correct)
    learner.metrics.masteredCount = Object.values(learner.cardRecords).filter(
      r => r.consecutiveCorrect >= 2
    ).length;
    
    learner.metrics.troubleCount = (learner.troubleCardIds || []).length;

    // Track per-session breakdown
    if (!sessionStats.topicResults[sec]) {
      sessionStats.topicResults[sec] = { total: 0, correct: 0 };
    }
    sessionStats.topicResults[sec].total++;
    if (rating === 'easy' || rating === 'good') {
      sessionStats.topicResults[sec].correct++;
    }

    saveLearnerObject(learner);

    // Next Card
    currentIndex++;
    renderCurrentCard();
  }

  // -------------------------------------------------------------
  // Session Summary Screen
  // -------------------------------------------------------------
  function finishSession() {
    learner.metrics.sessionsCompleted = (learner.metrics.sessionsCompleted || 0) + 1;
    saveLearnerObject(learner);

    el.summaryReviewed.textContent = sessionStats.reviewed;
    el.summaryMastered.textContent = sessionStats.easy;
    el.summaryTrouble.textContent = sessionStats.hard;
    el.summaryFlagged.textContent = sessionStats.flaggedAdded;

    // Topic breakdown list
    el.summaryTopicList.innerHTML = '';
    const topics = Object.keys(sessionStats.topicResults);
    if (topics.length > 0) {
      topics.forEach(secKey => {
        const item = sessionStats.topicResults[secKey];
        const pct = Math.round((item.correct / item.total) * 100);
        const name = SECTION_NAMES[secKey] || secKey;

        const row = document.createElement('div');
        row.style.cssText = 'display:flex; justify-content:space-between; align-items:center; padding:0.6rem 0.8rem; background:rgba(0,0,0,0.2); border-radius:6px; margin-bottom:0.4rem;';
        row.innerHTML = `
          <span style="font-size:0.9rem; font-weight:500;">${name}</span>
          <span style="font-weight:700; color:${pct >= 70 ? '#34d399' : '#fbbf24'};">${pct}% accuracy (${item.correct}/${item.total})</span>
        `;
        el.summaryTopicList.appendChild(row);
      });
    } else {
      el.summaryTopicList.innerHTML = '<p style="color:var(--text-muted);">Session completed.</p>';
    }

    switchScreen('summary');
  }

  // -------------------------------------------------------------
  // Learner Profile Modal & Management
  // -------------------------------------------------------------
  function openProfileModal() {
    renderProfileModalContent();
    el.profileModal.classList.add('open');
  }

  function renderProfileModalContent() {
    // Trouble cards list
    el.profileTroubleList.innerHTML = '';
    const troubleIds = learner.troubleCardIds || [];

    if (troubleIds.length === 0) {
      el.profileTroubleList.innerHTML = '<p style="color:var(--text-muted); font-size:0.9rem;">No cards currently marked as trouble. Great job!</p>';
    } else {
      troubleIds.forEach(id => {
        const c = deck.find(x => x.id === id);
        if (!c) return;
        const div = document.createElement('div');
        div.className = 'trouble-item';
        div.innerHTML = `
          <div class="trouble-item-header">
            <span>${SECTION_NAMES[c.section] || c.section}</span>
            <button class="btn btn-sm btn-glass remove-trouble-btn" data-id="${c.id}" style="padding:2px 6px;">Unmark</button>
          </div>
          <div class="trouble-item-q">${c.question}</div>
          <div class="trouble-item-a"><strong>A:</strong> ${c.answer}</div>
        `;
        div.querySelector('.remove-trouble-btn').addEventListener('click', (e) => {
          e.stopPropagation();
          learner.troubleCardIds = learner.troubleCardIds.filter(x => x !== c.id);
          saveLearnerObject(learner);
          renderProfileModalContent();
          renderSetupScreen();
          showToast('Card removed from trouble list.');
        });
        el.profileTroubleList.appendChild(div);
      });
    }

    // Flagged inaccurate list
    el.profileFlaggedList.innerHTML = '';
    const flagged = learner.flaggedCards || [];

    if (flagged.length === 0) {
      el.profileFlaggedList.innerHTML = '<p style="color:var(--text-muted); font-size:0.9rem;">No cards flagged as inaccurate.</p>';
    } else {
      flagged.forEach(f => {
        const div = document.createElement('div');
        div.className = 'trouble-item';
        div.innerHTML = `
          <div class="trouble-item-header">
            <span>${f.topic || f.section}</span>
            <button class="btn btn-sm btn-glass remove-flag-btn" data-id="${f.cardId}" style="padding:2px 6px;">Remove Flag</button>
          </div>
          <div class="trouble-item-q">${f.question}</div>
          <div class="trouble-item-a" style="color:#ff8c00;"><strong>Flag Note:</strong> ${f.note}</div>
        `;
        div.querySelector('.remove-flag-btn').addEventListener('click', (e) => {
          e.stopPropagation();
          learner.flaggedCards = learner.flaggedCards.filter(x => x.cardId !== f.cardId);
          learner.metrics.flaggedInaccurateCount = learner.flaggedCards.length;
          saveLearnerObject(learner);
          renderProfileModalContent();
          renderSetupScreen();
          showToast('Flag removed.');
        });
        el.profileFlaggedList.appendChild(div);
      });
    }
  }

  // Export Learner Object as JSON
  function exportLearnerProfile() {
    const jsonStr = JSON.stringify(learner, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `AZ104_LearnerProfile_${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast('Learner Profile exported successfully.');
  }

  // Import Learner Object from JSON
  function importLearnerProfile(file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      try {
        const imported = JSON.parse(e.target.result);
        if (imported && imported.metrics) {
          learner = imported;
          saveLearnerObject(learner);
          renderProfileModalContent();
          renderSetupScreen();
          showToast('Learner Profile imported successfully!');
        } else {
          showToast('Invalid learner profile format.');
        }
      } catch (err) {
        showToast('Could not parse learner profile JSON: ' + err.message);
      }
    };
    reader.readAsText(file);
  }

  // Import Custom Deck (.json or .tsv)
  function importCustomDeck(file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      try {
        const text = e.target.result;
        let newCards = [];

        if (file.name.endsWith('.json')) {
          newCards = JSON.parse(text);
        } else {
          // Parse TSV / Anki text (Q \t A)
          const lines = text.split('\n');
          lines.forEach((line, i) => {
            const parts = line.split('\t');
            if (parts.length >= 2) {
              newCards.push({
                id: `custom-card-${i + 1}`,
                section: 'Custom Imported Deck',
                topic: 'Imported',
                question: parts[0].trim(),
                answer: parts[1].trim(),
                source: parts[2] ? parts[2].trim() : ''
              });
            }
          });
        }

        if (Array.isArray(newCards) && newCards.length > 0) {
          localStorage.setItem(STORAGE_KEY_CUSTOM_DECK, JSON.stringify(newCards));
          deck = newCards;
          renderSetupScreen();
          showToast(`Imported ${newCards.length} flashcards successfully!`);
          el.profileModal.classList.remove('open');
        } else {
          showToast('No valid flashcards found in file.');
        }
      } catch (err) {
        showToast('Error loading flashcard deck: ' + err.message);
      }
    };
    reader.readAsText(file);
  }

  function resetLearnerProfile() {
    if (confirm('Are you sure you want to reset all learner progress and trouble flags? This cannot be undone.')) {
      learner = getDefaultLearnerObject();
      saveLearnerObject(learner);
      renderProfileModalContent();
      renderSetupScreen();
      showToast('Learner profile reset.');
    }
  }

  // -------------------------------------------------------------
  // Keyboard Shortcuts
  // -------------------------------------------------------------
  window.addEventListener('keydown', (e) => {
    // Only in study screen and when modals are closed
    if (screens.study.style.display !== 'none' && !el.flagModal.classList.contains('open') && !el.profileModal.classList.contains('open')) {
      if (e.code === 'Space') {
        e.preventDefault();
        toggleFlip();
      } else if (e.key === '1' && isCardFlipped) {
        handleRateCard('hard');
      } else if (e.key === '2' && isCardFlipped) {
        handleRateCard('good');
      } else if (e.key === '3' && isCardFlipped) {
        handleRateCard('easy');
      } else if (e.key.toLowerCase() === 't') {
        markCardTrouble();
      } else if (e.key.toLowerCase() === 'f') {
        openFlagInaccurateModal();
      } else if (e.code === 'Escape') {
        if (sessionStats.reviewed > 0) {
          finishSession();
        } else {
          switchScreen('setup');
          showToast('Session ended.');
        }
      }
    }
  });

  // -------------------------------------------------------------
  // Event Listeners
  // -------------------------------------------------------------
  el.selectAllBtn.addEventListener('click', () => {
    el.sectionList.querySelectorAll('input[type="checkbox"]').forEach(c => {
      c.checked = true;
      c.closest('.section-item').classList.add('active');
    });
  });

  el.deselectAllBtn.addEventListener('click', () => {
    el.sectionList.querySelectorAll('input[type="checkbox"]').forEach(c => {
      c.checked = false;
      c.closest('.section-item').classList.remove('active');
    });
  });

  el.startStudyBtn.addEventListener('click', () => startSession());

  // Card click to flip
  el.cardScene.addEventListener('click', (e) => {
    // don't flip if clicked quick buttons
    if (e.target.closest('.card-quick-actions') || e.target.closest('button')) return;
    toggleFlip();
  });
  el.btnFlip.addEventListener('click', toggleFlip);

  el.btnTrouble.addEventListener('click', markCardTrouble);
  el.btnFlag.addEventListener('click', openFlagInaccurateModal);

  el.btnRateHard.addEventListener('click', () => handleRateCard('hard'));
  el.btnRateGood.addEventListener('click', () => handleRateCard('good'));
  el.btnRateEasy.addEventListener('click', () => handleRateCard('easy'));

  el.btnQuit.addEventListener('click', () => {
    if (sessionStats.reviewed > 0) {
      finishSession();
    } else {
      switchScreen('setup');
      showToast('Session ended.');
    }
  });

  el.btnReturnSetup.addEventListener('click', () => switchScreen('setup'));

  el.btnStudyTroubleAgain.addEventListener('click', () => {
    const troubleIds = learner.troubleCardIds || [];
    const troubleCards = deck.filter(c => troubleIds.includes(c.id));
    if (troubleCards.length > 0) {
      startSession(troubleCards);
    } else {
      showToast('You have no cards marked as trouble right now!');
    }
  });

  // Modals
  el.btnOpenProfile.addEventListener('click', openProfileModal);
  el.btnCloseProfile.addEventListener('click', () => el.profileModal.classList.remove('open'));

  el.btnCancelFlag.addEventListener('click', () => el.flagModal.classList.remove('open'));
  el.btnConfirmFlag.addEventListener('click', saveFlagInaccurate);

  el.btnExportProfile.addEventListener('click', exportLearnerProfile);
  el.inputImportProfile.addEventListener('change', (e) => {
    if (e.target.files && e.target.files[0]) {
      importLearnerProfile(e.target.files[0]);
    }
  });

  el.btnImportDeck.addEventListener('click', () => el.inputImportDeck.click());
  el.inputImportDeck.addEventListener('change', (e) => {
    if (e.target.files && e.target.files[0]) {
      importCustomDeck(e.target.files[0]);
    }
  });

  el.btnResetProfile.addEventListener('click', resetLearnerProfile);

  // Close modals on overlay click
  window.addEventListener('click', (e) => {
    if (e.target === el.profileModal) el.profileModal.classList.remove('open');
    if (e.target === el.flagModal) el.flagModal.classList.remove('open');
  });

  // Initial Boot
  switchScreen('setup');

})();
