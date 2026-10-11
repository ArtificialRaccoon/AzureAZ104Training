/**
 * quiz-app/app.js
 * AZ-104 QuizMaster - Application State Machine & Learner Tracking
 * Fully client-side, runs locally without a backend server.
 */

(function () {
  'use strict';

  // Storage Keys
  const STORAGE_KEY_LEARNER = 'AZ104_QUIZ_LEARNER_OBJECT';
  const STORAGE_KEY_CUSTOM_QUESTIONS = 'AZ104_CUSTOM_QUIZ_QUESTIONS';

  // Section Display Names
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
      learnerId: 'az104-quiz-student',
      createdDate: new Date().toISOString(),
      lastActive: new Date().toISOString(),
      metrics: {
        totalQuizzes: 0,
        totalQuestionsAnswered: 0,
        totalCorrect: 0,
        totalIncorrect: 0,
        overallAccuracyPct: 0
      },
      sectionStats: {},
      questionHistory: {},
      wrongQuestionIds: [],
      flaggedQuestionIds: []
    };
  }

  function loadLearnerObject() {
    try {
      const data = localStorage.getItem(STORAGE_KEY_LEARNER);
      if (data) {
        return JSON.parse(data);
      }
    } catch (e) {
      console.error('Error reading learner object:', e);
    }
    const def = getDefaultLearnerObject();
    saveLearnerObject(def);
    return def;
  }

  function saveLearnerObject(obj) {
    try {
      obj.lastActive = new Date().toISOString();
      if (obj.metrics.totalQuestionsAnswered > 0) {
        obj.metrics.overallAccuracyPct = Math.round(
          (obj.metrics.totalCorrect / obj.metrics.totalQuestionsAnswered) * 100
        );
      }
      localStorage.setItem(STORAGE_KEY_LEARNER, JSON.stringify(obj));
    } catch (e) {
      console.error('Error saving learner object:', e);
    }
  }

  let learner = loadLearnerObject();

  // -------------------------------------------------------------
  // Dataset Management (Default questions.js + Custom Deck Override)
  // -------------------------------------------------------------
  function loadMasterQuestions() {
    // 1. Check custom override from localStorage
    const custom = localStorage.getItem(STORAGE_KEY_CUSTOM_QUESTIONS);
    if (custom) {
      try {
        const parsed = JSON.parse(custom);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      } catch (e) {
        console.warn('Custom questions corrupted, reverting to questions.js');
      }
    }
    // 2. Default to window.QUIZ_DATA
    if (window.QUIZ_DATA && Array.isArray(window.QUIZ_DATA)) {
      return [...window.QUIZ_DATA];
    }
    return [];
  }

  let masterQuestions = loadMasterQuestions();

  // -------------------------------------------------------------
  // Helpers: Fisher-Yates Shuffling
  // -------------------------------------------------------------
  function shuffleArray(array) {
    const copy = [...array];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  // -------------------------------------------------------------
  // Active Quiz State
  // -------------------------------------------------------------
  let activeQuizQuestions = [];     // Array of question objects (shuffled order)
  let currentIndex = 0;
  let userResponses = {};           // [questionId]: { selectedChoiceId, isCorrect, randomizedChoices }
  let currentRandomizedChoices = [];// Active display order of choices for currentIndex
  let isAnswerSubmittedForCurrent = false;
  let quizMode = 'practice';        // 'practice' (instant feedback) or 'exam' (grade at end)
  let flaggedInCurrentQuiz = new Set();

  // -------------------------------------------------------------
  // DOM Elements
  // -------------------------------------------------------------
  const screens = {
    setup: document.getElementById('setup-screen'),
    quiz: document.getElementById('quiz-screen'),
    results: document.getElementById('results-screen')
  };

  const el = {
    // Setup Screen Elements
    statTotalQuizzes: document.getElementById('stat-total-quizzes'),
    statAccuracy: document.getElementById('stat-accuracy'),
    statWrongCount: document.getElementById('stat-wrong-count'),
    statTotalAnswered: document.getElementById('stat-total-answered'),
    remediationBanner: document.getElementById('remediation-banner'),
    remediationCountText: document.getElementById('remediation-count-text'),
    btnStartRemediation: document.getElementById('btn-start-remediation'),
    sectionCheckboxList: document.getElementById('section-checkbox-list'),
    btnSelectAll: document.getElementById('btn-select-all'),
    btnDeselectAll: document.getElementById('btn-deselect-all'),
    cardCountPills: document.getElementsByName('quiz-count'),
    quizModeSelect: document.getElementById('quiz-mode-select'),
    btnStartQuiz: document.getElementById('btn-start-quiz'),

    // Active Quiz Elements
    btnQuitQuiz: document.getElementById('btn-quit-quiz'),
    progressBarFill: document.getElementById('progress-bar-fill'),
    questionCounterLabel: document.getElementById('question-counter-label'),
    quizTopicTag: document.getElementById('quiz-topic-tag'),
    btnFlagQuestion: document.getElementById('btn-flag-question'),
    questionPromptText: document.getElementById('question-prompt-text'),
    choicesContainer: document.getElementById('choices-container'),
    explanationPanel: document.getElementById('explanation-panel'),
    explanationHeader: document.getElementById('explanation-header'),
    explanationBody: document.getElementById('explanation-body'),
    explanationSource: document.getElementById('explanation-source'),
    btnPrevQuestion: document.getElementById('btn-prev-question'),
    btnSubmitOrNext: document.getElementById('btn-submit-or-next'),
    questionNavGrid: document.getElementById('question-nav-grid'),

    // Results Screen Elements
    resultCircle: document.getElementById('result-circle'),
    resultScoreNumber: document.getElementById('result-score-number'),
    resultScoreSub: document.getElementById('result-score-sub'),
    resultVerdict: document.getElementById('result-verdict'),
    resultSubtitle: document.getElementById('result-subtitle'),
    statResultCorrect: document.getElementById('stat-result-correct'),
    statResultWrong: document.getElementById('stat-result-wrong'),
    statResultFlagged: document.getElementById('stat-result-flagged'),
    resultsTopicBreakdown: document.getElementById('results-topic-breakdown'),
    reviewFilterSelect: document.getElementById('review-filter-select'),
    reviewAccordionList: document.getElementById('review-accordion-list'),
    btnRetestMissedThis: document.getElementById('btn-retest-missed-this'),
    btnRetestAllMistakes: document.getElementById('btn-retest-all-mistakes'),
    btnReturnToSetup: document.getElementById('btn-return-to-setup'),

    // Modals
    profileModal: document.getElementById('profile-modal'),
    btnOpenProfile: document.getElementById('btn-open-profile'),
    btnCloseProfile: document.getElementById('btn-close-profile'),
    profileAccuracyVal: document.getElementById('profile-accuracy-val'),
    profileTotalQuizzesVal: document.getElementById('profile-total-quizzes-val'),
    profileWrongCountVal: document.getElementById('profile-wrong-count-val'),
    profileWrongQuestionsList: document.getElementById('profile-wrong-questions-list'),
    btnLaunchProfileRemediation: document.getElementById('btn-launch-profile-remediation'),
    btnExportProfile: document.getElementById('btn-export-profile'),
    inputImportProfile: document.getElementById('input-import-profile'),
    btnImportQuestionsTrigger: document.getElementById('btn-import-questions-trigger'),
    inputImportQuestions: document.getElementById('input-import-questions'),
    btnResetProfile: document.getElementById('btn-reset-profile'),

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

  function switchScreen(screenName) {
    Object.keys(screens).forEach(key => {
      screens[key].style.display = key === screenName ? 'block' : 'none';
    });

    if (screenName === 'setup') {
      renderSetupScreen();
    }
  }

  function getSelectedQuestionCount() {
    for (const pill of el.cardCountPills) {
      if (pill.checked) {
        return pill.value === 'all' ? Infinity : parseInt(pill.value, 10);
      }
    }
    return 10;
  }

  // -------------------------------------------------------------
  // Setup Screen Rendering
  // -------------------------------------------------------------
  function renderSetupScreen() {
    // 1. Update Snapshot Cards
    el.statTotalQuizzes.textContent = learner.metrics.totalQuizzes || 0;
    el.statAccuracy.textContent = (learner.metrics.overallAccuracyPct || 0) + '%';
    const wrongCount = (learner.wrongQuestionIds || []).length;
    el.statWrongCount.textContent = wrongCount;
    el.statTotalAnswered.textContent = learner.metrics.totalQuestionsAnswered || 0;

    // 2. Remediation Banner (Show if user has past wrong questions)
    if (wrongCount > 0) {
      el.remediationBanner.style.display = 'flex';
      el.remediationCountText.textContent = `You have ${wrongCount} question${wrongCount === 1 ? '' : 's'} previously answered incorrectly. Target your weak points with a dedicated review quiz.`;
    } else {
      el.remediationBanner.style.display = 'none';
    }

    // 3. Render Section Checkboxes
    const sectionCounts = {};
    masterQuestions.forEach(q => {
      const sec = q.section || 'General';
      sectionCounts[sec] = (sectionCounts[sec] || 0) + 1;
    });

    el.sectionCheckboxList.innerHTML = '';
    const sections = Object.keys(sectionCounts);

    if (sections.length === 0) {
      el.sectionCheckboxList.innerHTML = '<p style="color:var(--text-muted); padding:1rem;">No questions found. Use Import to load questions.</p>';
      return;
    }

    sections.forEach(secKey => {
      const friendlyName = SECTION_NAMES[secKey] || secKey;
      const count = sectionCounts[secKey];

      const item = document.createElement('label');
      item.className = 'section-item active';
      item.innerHTML = `
        <div class="section-info">
          <input type="checkbox" name="selected-quiz-section" value="${secKey}" checked>
          <span class="section-name">${friendlyName}</span>
        </div>
        <span class="section-badge">${count} questions</span>
      `;

      const chk = item.querySelector('input[type="checkbox"]');
      chk.addEventListener('change', () => {
        if (chk.checked) {
          item.classList.add('active');
        } else {
          item.classList.remove('active');
        }
      });

      el.sectionCheckboxList.appendChild(item);
    });
  }

  // -------------------------------------------------------------
  // Quiz Generator & Assembler
  // -------------------------------------------------------------
  function startQuiz(customQuestions = null) {
    quizMode = el.quizModeSelect ? el.quizModeSelect.value : 'practice';

    if (customQuestions && customQuestions.length > 0) {
      // Question order is strictly randomized
      activeQuizQuestions = shuffleArray(customQuestions);
    } else {
      // 1. Gather selected sections
      const selectedSections = [];
      const checkboxes = el.sectionCheckboxList.querySelectorAll('input[name="selected-quiz-section"]:checked');
      checkboxes.forEach(c => selectedSections.push(c.value));

      if (selectedSections.length === 0) {
        showToast('Please select at least one section for the quiz.');
        return;
      }

      // 2. Filter candidate pool
      let pool = masterQuestions.filter(q => selectedSections.includes(q.section));
      if (pool.length === 0) {
        showToast('No questions available in selected sections.');
        return;
      }

      // 3. Randomize Question Order
      const shuffled = shuffleArray(pool);
      const limit = getSelectedQuestionCount();
      activeQuizQuestions = shuffled.slice(0, Math.min(limit, shuffled.length));
    }

    if (activeQuizQuestions.length === 0) {
      showToast('No questions available to generate quiz.');
      return;
    }

    // Reset Quiz State
    currentIndex = 0;
    userResponses = {};
    flaggedInCurrentQuiz.clear();
    isAnswerSubmittedForCurrent = false;

    switchScreen('quiz');
    renderQuestion(currentIndex);
    renderQuestionNavPalette();
  }

  // Generate Remediation Quiz from All Past Wrong Questions
  function startRemediationQuiz() {
    const wrongIds = learner.wrongQuestionIds || [];
    if (wrongIds.length === 0) {
      showToast('No past mistakes recorded. Outstanding job!');
      return;
    }

    const wrongQuestions = masterQuestions.filter(q => wrongIds.includes(q.id));
    if (wrongQuestions.length === 0) {
      showToast('No matching questions found for past mistakes.');
      return;
    }

    startQuiz(wrongQuestions);
    showToast(`Generated remediation quiz with ${wrongQuestions.length} past missed question(s).`);
  }

  // -------------------------------------------------------------
  // Active Question Display & Choice Randomization
  // -------------------------------------------------------------
  function renderQuestion(index) {
    if (index < 0 || index >= activeQuizQuestions.length) return;
    currentIndex = index;

    const question = activeQuizQuestions[currentIndex];
    const totalQuestions = activeQuizQuestions.length;

    // 1. Progress Bar & Counter
    const progressPct = ((currentIndex + 1) / totalQuestions) * 100;
    el.progressBarFill.style.width = `${progressPct}%`;
    el.questionCounterLabel.textContent = `Question ${currentIndex + 1} of ${totalQuestions}`;

    // 2. Meta Bar
    const sectionName = SECTION_NAMES[question.section] || question.section;
    el.quizTopicTag.textContent = `${sectionName} • ${question.topic || ''}`;

    // Flag toggle state
    if (flaggedInCurrentQuiz.has(question.id)) {
      el.btnFlagQuestion.classList.add('active');
      el.btnFlagQuestion.innerHTML = `🚩 Flagged (${currentIndex + 1})`;
    } else {
      el.btnFlagQuestion.classList.remove('active');
      el.btnFlagQuestion.innerHTML = `🏳️ Flag for Review`;
    }

    // 3. Question Statement
    el.questionPromptText.textContent = question.question;

    // 4. Randomized Choice Order Each Display
    // Check if user already answered this question in this session
    const existingResponse = userResponses[question.id];
    let choicesToDisplay = [];

    if (existingResponse && existingResponse.randomizedChoices) {
      // Keep order stable if already answered in this specific session
      choicesToDisplay = existingResponse.randomizedChoices;
      isAnswerSubmittedForCurrent = existingResponse.submitted || false;
    } else {
      // Randomize choices array every time question is first displayed
      choicesToDisplay = shuffleArray(question.choices);
      currentRandomizedChoices = choicesToDisplay;
      isAnswerSubmittedForCurrent = false;
    }

    renderChoices(choicesToDisplay, existingResponse);

    // 5. Explanation Panel State
    if (isAnswerSubmittedForCurrent && quizMode === 'practice') {
      showExplanation(question, existingResponse.isCorrect);
    } else {
      el.explanationPanel.classList.remove('visible', 'correct-feedback', 'incorrect-feedback');
    }

    // 6. Navigation Buttons
    el.btnPrevQuestion.style.visibility = currentIndex > 0 ? 'visible' : 'hidden';

    if (quizMode === 'practice') {
      if (!isAnswerSubmittedForCurrent) {
        el.btnSubmitOrNext.textContent = 'Check Answer';
        el.btnSubmitOrNext.className = 'btn btn-primary';
      } else {
        if (currentIndex === totalQuestions - 1) {
          el.btnSubmitOrNext.textContent = 'View Final Results';
          el.btnSubmitOrNext.className = 'btn btn-warning';
        } else {
          el.btnSubmitOrNext.textContent = 'Next Question ➔';
          el.btnSubmitOrNext.className = 'btn btn-primary';
        }
      }
    } else {
      // Exam Mode
      if (currentIndex === totalQuestions - 1) {
        el.btnSubmitOrNext.textContent = 'Submit Exam';
        el.btnSubmitOrNext.className = 'btn btn-warning';
      } else {
        el.btnSubmitOrNext.textContent = 'Next ➔';
        el.btnSubmitOrNext.className = 'btn btn-primary';
      }
    }

    updateNavPaletteSelection();
  }

  function renderChoices(choices, existingResponse) {
    el.choicesContainer.innerHTML = '';
    const letters = ['A', 'B', 'C', 'D', 'E', 'F'];

    choices.forEach((choice, idx) => {
      const letter = letters[idx] || (idx + 1);
      const isSelected = existingResponse && existingResponse.selectedChoiceId === choice.id;

      const choiceEl = document.createElement('div');
      choiceEl.className = 'choice-option';
      choiceEl.dataset.choiceId = choice.id;

      if (isSelected) choiceEl.classList.add('selected');

      // If answered in practice mode, reveal correct/incorrect styling
      if (isAnswerSubmittedForCurrent && quizMode === 'practice') {
        choiceEl.classList.add('locked');
        if (choice.correct) {
          choiceEl.classList.add('correct-reveal');
        } else if (isSelected && !choice.correct) {
          choiceEl.classList.add('incorrect-reveal');
        }
      }

      choiceEl.innerHTML = `
        <div class="choice-letter">${letter}</div>
        <div class="choice-text">${choice.text}</div>
        <span class="choice-status-icon correct">✓</span>
        <span class="choice-status-icon incorrect">✗</span>
      `;

      choiceEl.addEventListener('click', () => {
        if (isAnswerSubmittedForCurrent && quizMode === 'practice') return; // locked

        // Toggle selection
        el.choicesContainer.querySelectorAll('.choice-option').forEach(c => c.classList.remove('selected'));
        choiceEl.classList.add('selected');

        // Record selection
        if (!userResponses[activeQuizQuestions[currentIndex].id]) {
          userResponses[activeQuizQuestions[currentIndex].id] = {
            selectedChoiceId: choice.id,
            randomizedChoices: choices,
            isCorrect: choice.correct,
            submitted: false
          };
        } else {
          userResponses[activeQuizQuestions[currentIndex].id].selectedChoiceId = choice.id;
          userResponses[activeQuizQuestions[currentIndex].id].isCorrect = choice.correct;
          userResponses[activeQuizQuestions[currentIndex].id].randomizedChoices = choices;
        }

        renderQuestionNavPalette();
      });

      el.choicesContainer.appendChild(choiceEl);
    });
  }

  function showExplanation(question, isCorrect) {
    el.explanationPanel.classList.add('visible');
    el.explanationPanel.classList.remove('correct-feedback', 'incorrect-feedback');
    el.explanationHeader.classList.remove('correct', 'incorrect');

    if (isCorrect) {
      el.explanationPanel.classList.add('correct-feedback');
      el.explanationHeader.classList.add('correct');
      el.explanationHeader.textContent = '✓ Correct Answer!';
    } else {
      el.explanationPanel.classList.add('incorrect-feedback');
      el.explanationHeader.classList.add('incorrect');
      el.explanationHeader.textContent = '✗ Incorrect!';
    }

    el.explanationBody.textContent = question.explanation || 'No detailed explanation provided.';
    el.explanationSource.textContent = question.source ? `Reference: ${question.source}` : '';
  }

  // -------------------------------------------------------------
  // Quiz Navigation & Action Handling
  // -------------------------------------------------------------
  function handleMainAction() {
    const question = activeQuizQuestions[currentIndex];
    const response = userResponses[question.id];

    if (quizMode === 'practice') {
      if (!isAnswerSubmittedForCurrent) {
        // Step 1: Submit Answer for Current Question
        if (!response || !response.selectedChoiceId) {
          showToast('Please select an option before checking.');
          return;
        }

        response.submitted = true;
        isAnswerSubmittedForCurrent = true;

        // Grade immediate answer
        recordSingleAnswerResult(question, response.isCorrect);

        // Re-render choices with green/red status & explanation
        renderChoices(response.randomizedChoices, response);
        showExplanation(question, response.isCorrect);

        // Update button label
        if (currentIndex === activeQuizQuestions.length - 1) {
          el.btnSubmitOrNext.textContent = 'View Final Results';
          el.btnSubmitOrNext.className = 'btn btn-warning';
        } else {
          el.btnSubmitOrNext.textContent = 'Next Question ➔';
          el.btnSubmitOrNext.className = 'btn btn-primary';
        }
        renderQuestionNavPalette();
      } else {
        // Step 2: Next Question or Finish
        if (currentIndex < activeQuizQuestions.length - 1) {
          renderQuestion(currentIndex + 1);
        } else {
          finishQuiz();
        }
      }
    } else {
      // Exam Mode: Just advance or submit
      if (currentIndex < activeQuizQuestions.length - 1) {
        renderQuestion(currentIndex + 1);
      } else {
        // Finish Exam
        gradeFullExam();
      }
    }
  }

  function handlePrevAction() {
    if (currentIndex > 0) {
      renderQuestion(currentIndex - 1);
    }
  }

  function toggleFlagCurrentQuestion() {
    const qId = activeQuizQuestions[currentIndex].id;
    if (flaggedInCurrentQuiz.has(qId)) {
      flaggedInCurrentQuiz.delete(qId);
      showToast('Flag removed.');
    } else {
      flaggedInCurrentQuiz.add(qId);
      showToast('Flagged question for review.');
    }
    renderQuestion(currentIndex);
    renderQuestionNavPalette();
  }

  // -------------------------------------------------------------
  // Question Nav Palette Grid
  // -------------------------------------------------------------
  function renderQuestionNavPalette() {
    el.questionNavGrid.innerHTML = '';
    activeQuizQuestions.forEach((q, idx) => {
      const dot = document.createElement('div');
      dot.className = 'nav-dot';
      dot.textContent = idx + 1;

      if (idx === currentIndex) dot.classList.add('current');
      if (userResponses[q.id] && userResponses[q.id].selectedChoiceId) dot.classList.add('answered');
      if (flaggedInCurrentQuiz.has(q.id)) dot.classList.add('flagged');

      dot.addEventListener('click', () => {
        renderQuestion(idx);
      });

      el.questionNavGrid.appendChild(dot);
    });
  }

  function updateNavPaletteSelection() {
    const dots = el.questionNavGrid.querySelectorAll('.nav-dot');
    dots.forEach((dot, idx) => {
      if (idx === currentIndex) {
        dot.classList.add('current');
      } else {
        dot.classList.remove('current');
      }
    });
  }

  // -------------------------------------------------------------
  // Grading & Learner Object Updates
  // -------------------------------------------------------------
  function recordSingleAnswerResult(question, isCorrect) {
    if (!learner.questionHistory[question.id]) {
      learner.questionHistory[question.id] = {
        attempts: 0,
        correctCount: 0,
        incorrectCount: 0,
        consecutiveCorrect: 0,
        lastResult: null,
        lastAnsweredDate: null
      };
    }

    const hist = learner.questionHistory[question.id];
    hist.attempts++;
    hist.lastAnsweredDate = new Date().toISOString();

    if (isCorrect) {
      hist.correctCount++;
      hist.consecutiveCorrect++;
      hist.lastResult = 'correct';
      learner.metrics.totalCorrect++;

      // If answered correctly consecutively, clear from wrong question list
      if (hist.consecutiveCorrect >= 2) {
        learner.wrongQuestionIds = (learner.wrongQuestionIds || []).filter(id => id !== question.id);
      }
    } else {
      hist.incorrectCount++;
      hist.consecutiveCorrect = 0;
      hist.lastResult = 'incorrect';
      learner.metrics.totalIncorrect++;

      // Ensure question is tracked in wrongQuestionIds
      if (!learner.wrongQuestionIds) learner.wrongQuestionIds = [];
      if (!learner.wrongQuestionIds.includes(question.id)) {
        learner.wrongQuestionIds.push(question.id);
      }
    }

    // Update section stats
    const sec = question.section || 'General';
    if (!learner.sectionStats[sec]) {
      learner.sectionStats[sec] = { answered: 0, correct: 0, incorrect: 0 };
    }
    learner.sectionStats[sec].answered++;
    if (isCorrect) {
      learner.sectionStats[sec].correct++;
    } else {
      learner.sectionStats[sec].incorrect++;
    }

    learner.metrics.totalQuestionsAnswered++;
    saveLearnerObject(learner);
  }

  function gradeFullExam() {
    // In Exam Mode, grade all questions at once
    activeQuizQuestions.forEach(q => {
      const resp = userResponses[q.id];
      const isCorrect = resp && resp.isCorrect ? true : false;
      recordSingleAnswerResult(q, isCorrect);
    });
    finishQuiz();
  }

  // -------------------------------------------------------------
  // Results & Remediation Screen
  // -------------------------------------------------------------
  function finishQuiz() {
    learner.metrics.totalQuizzes++;
    saveLearnerObject(learner);

    // Calculate score
    let correctCount = 0;
    let wrongCount = 0;
    const missedQuestions = [];
    const sectionBreakdown = {};

    activeQuizQuestions.forEach(q => {
      const resp = userResponses[q.id];
      const isCorrect = resp && resp.isCorrect;

      if (isCorrect) {
        correctCount++;
      } else {
        wrongCount++;
        missedQuestions.push(q);
      }

      const sec = q.section || 'General';
      if (!sectionBreakdown[sec]) {
        sectionBreakdown[sec] = { total: 0, correct: 0 };
      }
      sectionBreakdown[sec].total++;
      if (isCorrect) sectionBreakdown[sec].correct++;
    });

    const total = activeQuizQuestions.length;
    const scorePct = total > 0 ? Math.round((correctCount / total) * 100) : 0;
    const isPassing = scorePct >= 70; // AZ-104 passing mark is 70% (700/1000)

    // Hero Score Badge
    el.resultScoreNumber.textContent = `${scorePct}%`;
    el.resultScoreSub.textContent = `${correctCount} / ${total}`;

    if (isPassing) {
      el.resultCircle.className = 'score-badge-circle pass';
      el.resultVerdict.textContent = '🎉 Exam Passed!';
      el.resultVerdict.className = 'result-verdict pass';
      el.resultSubtitle.textContent = `Great performance! You exceeded the standard AZ-104 passing score threshold (700 / 1000).`;
    } else {
      el.resultCircle.className = 'score-badge-circle fail';
      el.resultVerdict.textContent = '⚠️ Needs Review (Score < 70%)';
      el.resultVerdict.className = 'result-verdict fail';
      el.resultSubtitle.textContent = `Below passing threshold. Don't worry—use the targeted remediation retest below to master missed topics.`;
    }

    // Stats Grid
    el.statResultCorrect.textContent = correctCount;
    el.statResultWrong.textContent = wrongCount;
    el.statResultFlagged.textContent = flaggedInCurrentQuiz.size;

    // Section Breakdown
    el.resultsTopicBreakdown.innerHTML = '';
    Object.keys(sectionBreakdown).forEach(secKey => {
      const item = sectionBreakdown[secKey];
      const pct = Math.round((item.correct / item.total) * 100);
      const name = SECTION_NAMES[secKey] || secKey;

      const row = document.createElement('div');
      row.style.cssText = 'display:flex; justify-content:space-between; align-items:center; padding:0.6rem 0.85rem; background:rgba(0,0,0,0.25); border-radius:6px; margin-bottom:0.4rem;';
      row.innerHTML = `
        <span style="font-size:0.9rem; font-weight:500;">${name}</span>
        <span style="font-weight:700; color:${pct >= 70 ? '#34d399' : '#fbbf24'};">${pct}% (${item.correct}/${item.total})</span>
      `;
      el.resultsTopicBreakdown.appendChild(row);
    });

    // Missed Retest Button State
    if (missedQuestions.length > 0) {
      el.btnRetestMissedThis.style.display = 'inline-flex';
      el.btnRetestMissedThis.textContent = `⚠️ Retest Missed Questions (${missedQuestions.length})`;
      el.btnRetestMissedThis.onclick = () => startQuiz(missedQuestions);
    } else {
      el.btnRetestMissedThis.style.display = 'none';
    }

    // Retest All Past Mistakes Button
    const allPastWrong = (learner.wrongQuestionIds || []).length;
    if (allPastWrong > 0) {
      el.btnRetestAllMistakes.style.display = 'inline-flex';
      el.btnRetestAllMistakes.textContent = `🔄 Retest All Past Mistakes (${allPastWrong})`;
      el.btnRetestAllMistakes.onclick = () => startRemediationQuiz();
    } else {
      el.btnRetestAllMistakes.style.display = 'none';
    }

    // Render Review Accordion
    renderResultsReviewList('all');

    switchScreen('results');
  }

  function renderResultsReviewList(filterType) {
    el.reviewAccordionList.innerHTML = '';

    activeQuizQuestions.forEach((q, idx) => {
      const resp = userResponses[q.id];
      const isCorrect = resp && resp.isCorrect;
      const isFlagged = flaggedInCurrentQuiz.has(q.id);

      if (filterType === 'wrong' && isCorrect) return;
      if (filterType === 'flagged' && !isFlagged) return;

      const userChoice = q.choices.find(c => resp && c.id === resp.selectedChoiceId);
      const correctChoice = q.choices.find(c => c.correct);

      const item = document.createElement('div');
      item.className = `review-item ${isCorrect ? 'right' : 'wrong'}`;

      item.innerHTML = `
        <div class="review-item-header">
          <div style="display:flex; align-items:center; gap:0.5rem;">
            <span class="review-status-tag ${isCorrect ? 'right' : 'wrong'}">
              ${isCorrect ? '✓ Correct' : '✗ Incorrect'}
            </span>
            <span style="font-size:0.8rem; color:var(--text-secondary);">Question ${idx + 1}</span>
            ${isFlagged ? '<span style="font-size:0.8rem; color:#fbbf24;">🚩 Flagged</span>' : ''}
          </div>
          <span style="font-size:0.75rem; color:var(--azure-cyan); font-weight:600;">${q.topic || ''}</span>
        </div>

        <div class="review-q-text">${q.question}</div>

        <div class="review-choice-pill ${isCorrect ? 'correct-pick' : 'user-pick'}">
          <strong>Your Answer:</strong> ${userChoice ? userChoice.text : '<em>No answer selected</em>'}
        </div>

        ${!isCorrect && correctChoice ? `
          <div class="review-choice-pill correct-pick">
            <strong>Correct Answer:</strong> ${correctChoice.text}
          </div>
        ` : ''}

        <div style="margin-top:0.75rem; font-size:0.88rem; color:#cbd5e1; line-height:1.5; background:rgba(0,0,0,0.25); padding:0.75rem; border-radius:6px;">
          <strong>Explanation:</strong> ${q.explanation || ''}
          ${q.source ? `<div style="font-size:0.76rem; color:var(--azure-cyan); margin-top:0.4rem;">Citation: ${q.source}</div>` : ''}
        </div>
      `;

      el.reviewAccordionList.appendChild(item);
    });
  }

  // -------------------------------------------------------------
  // Learner Profile & Statistics Modal
  // -------------------------------------------------------------
  function openProfileModal() {
    renderProfileModalContent();
    el.profileModal.classList.add('open');
  }

  function renderProfileModalContent() {
    el.profileAccuracyVal.textContent = (learner.metrics.overallAccuracyPct || 0) + '%';
    el.profileTotalQuizzesVal.textContent = learner.metrics.totalQuizzes || 0;
    const wrongIds = learner.wrongQuestionIds || [];
    el.profileWrongCountVal.textContent = wrongIds.length;

    // Render list of questions user got wrong
    el.profileWrongQuestionsList.innerHTML = '';
    if (wrongIds.length === 0) {
      el.profileWrongQuestionsList.innerHTML = '<p style="color:var(--text-muted); font-size:0.88rem;">No past mistakes recorded. All caught up!</p>';
      el.btnLaunchProfileRemediation.style.display = 'none';
    } else {
      el.btnLaunchProfileRemediation.style.display = 'inline-flex';
      wrongIds.forEach(id => {
        const q = masterQuestions.find(x => x.id === id);
        if (!q) return;

        const hist = learner.questionHistory[id] || { attempts: 0, incorrectCount: 0 };
        const div = document.createElement('div');
        div.className = 'review-item wrong';
        div.style.padding = '0.85rem';
        div.innerHTML = `
          <div class="review-item-header">
            <span style="font-size:0.78rem; color:var(--azure-cyan); font-weight:600;">${q.topic || q.section}</span>
            <span style="font-size:0.75rem; color:#f87171;">Missed ${hist.incorrectCount}x</span>
          </div>
          <div style="font-size:0.88rem; color:#ffffff; font-weight:500;">${q.question}</div>
        `;
        el.profileWrongQuestionsList.appendChild(div);
      });
    }
  }

  // Export Learner Profile
  function exportLearnerProfile() {
    const jsonStr = JSON.stringify(learner, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `AZ104_QuizLearnerProfile_${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast('Learner profile exported.');
  }

  // Import Learner Profile
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
          showToast('Learner profile imported successfully!');
        } else {
          showToast('Invalid learner profile format.');
        }
      } catch (err) {
        showToast('Could not parse learner profile JSON: ' + err.message);
      }
    };
    reader.readAsText(file);
  }

  // Import Custom Questions Dataset
  function importCustomQuestions(file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      try {
        const questions = JSON.parse(e.target.result);
        if (Array.isArray(questions) && questions.length > 0) {
          localStorage.setItem(STORAGE_KEY_CUSTOM_QUESTIONS, JSON.stringify(questions));
          masterQuestions = questions;
          renderSetupScreen();
          showToast(`Imported ${questions.length} questions successfully!`);
          el.profileModal.classList.remove('open');
        } else {
          showToast('No valid questions array found in file.');
        }
      } catch (err) {
        showToast('Error loading questions file: ' + err.message);
      }
    };
    reader.readAsText(file);
  }

  function resetLearnerProfile() {
    if (confirm('Reset all quiz history and mistake records? This cannot be undone.')) {
      learner = getDefaultLearnerObject();
      saveLearnerObject(learner);
      renderProfileModalContent();
      renderSetupScreen();
      showToast('Learner progress reset.');
    }
  }

  // -------------------------------------------------------------
  // Keyboard Shortcuts
  // -------------------------------------------------------------
  window.addEventListener('keydown', (e) => {
    if (screens.quiz.style.display !== 'none' && !el.profileModal.classList.contains('open')) {
      if (['1', '2', '3', '4', 'a', 'b', 'c', 'd'].includes(e.key.toLowerCase())) {
        let idx = -1;
        if (['1', '2', '3', '4'].includes(e.key)) idx = parseInt(e.key, 10) - 1;
        if (['a', 'b', 'c', 'd'].includes(e.key.toLowerCase())) idx = e.key.toLowerCase().charCodeAt(0) - 97;
        const options = el.choicesContainer.querySelectorAll('.choice-option');
        if (options[idx]) options[idx].click();
      } else if (e.code === 'Enter' || e.code === 'Space') {
        if (!e.target.matches('input, textarea, button')) {
          e.preventDefault();
          handleMainAction();
        }
      } else if (e.key.toLowerCase() === 'f') {
        toggleFlagCurrentQuestion();
      } else if (e.code === 'ArrowRight') {
        if (currentIndex < activeQuizQuestions.length - 1) renderQuestion(currentIndex + 1);
      } else if (e.code === 'ArrowLeft') {
        if (currentIndex > 0) renderQuestion(currentIndex - 1);
      } else if (e.code === 'Escape') {
        const hasAnswers = Object.keys(userResponses).length > 0;
        if (hasAnswers) {
          finishQuiz();
        } else {
          switchScreen('setup');
          showToast('Quiz ended.');
        }
      }
    }
  });

  // -------------------------------------------------------------
  // Event Listeners
  // -------------------------------------------------------------
  el.btnSelectAll.addEventListener('click', () => {
    el.sectionCheckboxList.querySelectorAll('input[type="checkbox"]').forEach(c => {
      c.checked = true;
      c.closest('.section-item').classList.add('active');
    });
  });

  el.btnDeselectAll.addEventListener('click', () => {
    el.sectionCheckboxList.querySelectorAll('input[type="checkbox"]').forEach(c => {
      c.checked = false;
      c.closest('.section-item').classList.remove('active');
    });
  });

  el.btnStartQuiz.addEventListener('click', () => startQuiz());
  el.btnStartRemediation.addEventListener('click', () => startRemediationQuiz());

  el.btnQuitQuiz.addEventListener('click', () => {
    const hasAnswers = Object.keys(userResponses).length > 0;
    if (hasAnswers) {
      finishQuiz();
    } else {
      switchScreen('setup');
      showToast('Quiz ended.');
    }
  });

  el.btnPrevQuestion.addEventListener('click', handlePrevAction);
  el.btnSubmitOrNext.addEventListener('click', handleMainAction);
  el.btnFlagQuestion.addEventListener('click', toggleFlagCurrentQuestion);

  el.reviewFilterSelect.addEventListener('change', () => {
    renderResultsReviewList(el.reviewFilterSelect.value);
  });

  el.btnReturnToSetup.addEventListener('click', () => switchScreen('setup'));

  // Modals
  el.btnOpenProfile.addEventListener('click', openProfileModal);
  el.btnCloseProfile.addEventListener('click', () => el.profileModal.classList.remove('open'));
  el.btnLaunchProfileRemediation.addEventListener('click', () => {
    el.profileModal.classList.remove('open');
    startRemediationQuiz();
  });

  el.btnExportProfile.addEventListener('click', exportLearnerProfile);
  el.inputImportProfile.addEventListener('change', (e) => {
    if (e.target.files && e.target.files[0]) {
      importLearnerProfile(e.target.files[0]);
    }
  });

  el.btnImportQuestionsTrigger.addEventListener('click', () => el.inputImportQuestions.click());
  el.inputImportQuestions.addEventListener('change', (e) => {
    if (e.target.files && e.target.files[0]) {
      importCustomQuestions(e.target.files[0]);
    }
  });

  el.btnResetProfile.addEventListener('click', resetLearnerProfile);

  window.addEventListener('click', (e) => {
    if (e.target === el.profileModal) el.profileModal.classList.remove('open');
  });

  // Initial Load
  switchScreen('setup');

})();
