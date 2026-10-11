# AZ-104 QuizMaster - Multiple Choice Certification Practice

A lightweight, serverless local web application designed for active multiple-choice practice and mistake remediation for the **AZ-104 Microsoft Azure Administrator** certification.

---

## 🚀 Quick Start (Zero Server Required)

This webapp is completely self-contained and runs purely in the client browser with **no backend server, Node.js, or build step**.

1. Navigate to the `quiz-app/` folder.
2. Double-click `index.html` or open it with **Google Chrome**, **Microsoft Edge**, **Brave**, or **Firefox**.
3. Configure your quiz options and begin testing immediately!

---

## 📁 Project Structure

```text
quiz-app/
├── index.html            # Main HTML layout, modals, and screen containers
├── style.css             # Modern Azure dark-theme styling, choice animations, badges
├── app.js                # Client-side state machine, Fisher-Yates choice & question randomization, learner tracking
├── questions.js          # Compiled master question dataset (338 questions, window.QUIZ_DATA)
├── questions.json        # Compiled master JSON dataset (338 questions)
├── compile_questions.py  # Python compiler and validation tool for question banks
├── banks/                # Modular question banks partitioned by Learning Path
│   ├── path-01.json      # Path 1: Prerequisites & ARM Templates (30 questions)
│   ├── path-02.json      # Path 2: Entra ID, Governance & RBAC (61 questions)
│   ├── path-03.json      # Path 3: VNets, Routing, Load Balancer & Gateways (74 questions)
│   ├── path-04.json      # Path 4: Storage Accounts, Blobs & Azure Files (59 questions)
│   ├── path-05.json      # Path 5: Virtual Machines, VMSS, App Service & ACI (68 questions)
│   └── path-06.json      # Path 6: Azure Backup, VM Protection & Azure Monitor (46 questions)
└── README.md             # Documentation & guide
```

---

## 🔑 Key Features

### 1. Randomized Choices on Every Display (Anti-Gaming)
To prevent memorizing choice positions (e.g., "the answer is B"):
- Every time a question is rendered or revisited, its array of choices is shuffled with the **Fisher-Yates algorithm**.
- Choice labels (**A, B, C, D**) are assigned dynamically based on that specific random order.
- Question order is also completely randomized whenever a new quiz is generated or revisited.

### 2. Dual Quiz Delivery Modes
- **Practice Mode (Default)**:
  - Instant validation on each question with green/red highlighting and ✓/✗ icons.
  - Automatically expands a detailed **Explanation Panel** explaining why the correct answer is right, why the distractors are incorrect, and citing the exact chapter or page reference.
- **Exam Simulation Mode**:
  - Simulates the actual AZ-104 exam experience without immediate spoilers.
  - Provides question navigation (Previous, Next, Question Palette grid, and Flag for Review).
  - Grades all questions simultaneously when you click **Submit Exam**.

### 3. Automatic Mistake Tracking & Dedicated Remediation Quizzes
- Whenever a question is answered incorrectly, it is automatically marked and saved to your **Learner Object** under `wrongQuestionIds`.
- **1-Click Past Mistakes Remediation**: If you have questions you previously got wrong, a high-visibility callout banner appears on the setup screen:
  > **⚠️ Past Mistakes Remediation Ready**  
  > *Retest Past Mistakes Now*
- Clicking this generates a targeted quiz containing only your unresolved mistakes in a fresh randomized order with reshuffled choices.
- When you answer a remediated question correctly across multiple reviews, it is automatically mastered and cleared from the mistakes list.

### 4. Interactive Results & Question Review
- **Score Circle & Verdict**: Displays score percentage with pass/fail indicator based on the official AZ-104 passing mark of 70% (700/1000).
- **Topic Breakdown**: Shows accuracy percentage across each tested Azure learning path.
- **Detailed Review Accordion**: Filter by *All Questions*, *Missed Only*, or *Flagged Only*. Inspect what you selected versus the correct choice, along with full explanations.

---

## 🧠 The Learner Object (`localStorage`)

Your progress and mistake history are saved in browser `localStorage` under `AZ104_QUIZ_LEARNER_OBJECT`.

### Schema Definition

```json
{
  "version": "1.0.0",
  "learnerId": "az104-quiz-student",
  "createdDate": "2026-10-11T16:20:00.000Z",
  "lastActive": "2026-10-11T16:25:00.000Z",
  "metrics": {
    "totalQuizzes": 4,
    "totalQuestionsAnswered": 30,
    "totalCorrect": 24,
    "totalIncorrect": 6,
    "overallAccuracyPct": 80
  },
  "sectionStats": {
    "01-prerequisites-for-azure-administrators": { "answered": 5, "correct": 4, "incorrect": 1 },
    "03-configure-and-manage-virtual-networks": { "answered": 10, "correct": 9, "incorrect": 1 }
  },
  "questionHistory": {
    "q-path1-01": {
      "attempts": 2,
      "correctCount": 2,
      "incorrectCount": 0,
      "consecutiveCorrect": 2,
      "lastResult": "correct",
      "lastAnsweredDate": "2026-10-11T16:22:00.000Z"
    }
  },
  "wrongQuestionIds": [
    "q-path2-02"
  ],
  "flaggedQuestionIds": []
}
```

### Profile Management & Portability
Click **Learner Profile & Stats** in the header to:
- Inspect all unresolved past mistakes and their missed counts.
- Launch a remediation quiz directly from the modal.
- **Export Profile (.json)** to back up your progress.
- **Import Profile (.json)** to restore your progress.
- **Import Custom Questions (.json)** to load additional questions into the app.
- **Reset Quiz Progress** to restart afresh.

---

## 📝 Question Dataset Schema (`questions.js` & `questions.json`)

To add new multiple-choice questions into [`questions.js`](questions.js), add items matching this structure to `window.QUIZ_DATA`:

```javascript
{
  id: "unique-question-id",
  section: "01-prerequisites-for-azure-administrators", // Learning Path key
  topic: "Azure Cloud Shell",                            // Specific module or service
  question: "You need custom scripts to persist across Azure Cloud Shell sessions. Which resource must you configure?",
  choices: [
    { id: "c1", text: "An Azure Files share mounted to `/home/<user>/clouddrive`", correct: true },
    { id: "c2", text: "An Azure Blob Storage container with Hot access tier", correct: false },
    { id: "c3", text: "An ephemeral managed data disk attached to the container host", correct: false },
    { id: "c4", text: "An Azure NetApp Files volume linked to the Cloud Shell subnet", correct: false }
  ],
  explanation: "Cloud Shell mounts an Azure Files share to `/home/<user>/clouddrive` inside the backing Linux container to persist files across sessions.",
  source: "Exam Ref AZ-104, Ch. 1, p. 3; MS Learn Cloud Shell Overview"
}
```
