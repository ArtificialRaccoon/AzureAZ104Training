# AZ-104 FlashMaster - Interactive Study WebApp

A lightweight, serverless local web application designed for active recall and spaced repetition study for the **AZ-104 Microsoft Azure Administrator** certification.

---

## 🚀 Quick Start (Zero Server Required)

This webapp is completely client-side and requires **no web server, Node.js, or build step**.

1. Navigate to the `flash-app/` folder.
2. Double-click `index.html` or right-click and open with **Google Chrome**, **Microsoft Edge**, **Brave**, or **Firefox**.
3. Configure your session and begin studying immediately!

---

## 📁 Project Structure

```text
flash-app/
├── index.html        # Main HTML layout, modals, and screen containers
├── style.css         # Modern Azure dark-theme styling, 3D flip card animations
├── app.js            # Client-side state machine, Fisher-Yates shuffle & learner tracking
├── cards.js          # Compiled master flashcard dataset (409 verified cards, window.FLASHCARD_DATA)
├── cards.json        # Compiled master JSON dataset
├── cards.tsv         # Anki-importable Tab-Separated Values format (409 cards)
├── compile_decks.py  # Validation and compiler script for decks
├── decks/            # Modular path decks (Path 1 through Path 6)
│   ├── path-01.json  # 37 cards (Prerequisites & ARM)
│   ├── path-02.json  # 78 cards (Identities & Governance)
│   ├── path-03.json  # 100 cards (Virtual Networks)
│   ├── path-04.json  # 63 cards (Storage Accounts, Blobs, Files)
│   ├── path-05.json  # 78 cards (Compute, VMs, App Service, ACI)
│   └── path-06.json  # 53 cards (Monitoring, Backup, Log Analytics)
└── README.md         # Documentation & guide
```

---

## 🔑 Key Features

### 1. Zero-CORS Local Data Loading
Modern web browsers restrict `fetch('cards.json')` when loading pages from local `file:///` URLs due to CORS security policies.  
To ensure true double-click offline execution:
- Default flashcards are defined in [`cards.js`](cards.js) attached to `window.FLASHCARD_DATA`.
- You can also import custom `.json` or `.tsv` / Anki decks directly through the **Learner Profile & Stats** modal.

### 2. Session Configuration & Section Filtering
- **Section Selection**: Select any combination of the 6 AZ-104 Learning Paths. The UI displays live card counts for each section.
- **Card Limits**: Choose between 5, 10, 20, 50, or All Available cards.
- **Randomized Draw**: The app executes a Fisher-Yates random shuffle on the candidate pool to ensure unbiased review order.
- **Study Focus Modes**:
  - *Standard Review*: Random draw across all selected sections.
  - *Targeted Drill*: Drills only cards currently marked as **Needs Review (Trouble)**.
  - *New Material*: Drills cards you have never reviewed before.

### 3. Active Recall Study Interface
- **3D Interactive Flip**: Formulate your answer mentally, then click the card or press **Spacebar** to flip.
- **Rating Economy**:
  - **Struggled (1)**: Marks the card as *Trouble / Needs Review* and records for targeted re-drilling.
  - **Recalled (2)**: Increments standard mastery count.
  - **Mastered (3)**: Increments consecutive correct recall. Cards answered correctly twice consecutively are automatically cleared from the trouble list.
- **Keyboard Shortcuts**:
  - `Space`: Flip card
  - `1`: Struggled (Hard)
  - `2`: Recalled (Good)
  - `3`: Mastered (Easy)
  - `T`: Toggle Trouble / Needs Review
  - `F`: Flag as Inaccurate (opens audit notes modal)
  - `Esc`: End session and view summary

### 4. Trouble Marking & Inaccuracy Flagging
- **Trouble / Needs Review (`T`)**: Tag any card you found challenging. This adds it to your persistent trouble list and enables the *Targeted Drill* filter.
- **Flag Inaccurate (`F`)**: Open a modal to record specific revision notes (e.g., outdated Azure portal command, typo, or changed metric limit). Flagged cards display a prominent badge and are logged in your profile for audit.

---

## 🧠 The Learner Object (`localStorage`)

Your learning data is persistently stored in browser `localStorage` under the key `AZ104_LEARNER_OBJECT`.

### Schema Definition

```json
{
  "version": "1.0.0",
  "learnerId": "az104-student",
  "createdDate": "2026-10-11T16:00:00.000Z",
  "lastActive": "2026-10-11T16:15:00.000Z",
  "metrics": {
    "totalReviews": 14,
    "masteredCount": 8,
    "troubleCount": 2,
    "flaggedInaccurateCount": 1,
    "sessionsCompleted": 3
  },
  "sectionPerformance": {
    "01-prerequisites-for-azure-administrators": {
      "reviews": 4,
      "correct": 3,
      "troubleCount": 1
    },
    "03-configure-and-manage-virtual-networks": {
      "reviews": 5,
      "correct": 5,
      "troubleCount": 0
    }
  },
  "cardRecords": {
    "path1-mod1-01": {
      "reviews": 2,
      "consecutiveCorrect": 2,
      "lastRating": "easy",
      "lastReviewed": "2026-10-11T16:12:00.000Z",
      "history": ["good", "easy"]
    }
  },
  "troubleCardIds": [
    "path1-mod2-01"
  ],
  "flaggedCards": [
    {
      "cardId": "path2-mod1-01",
      "section": "02-manage-identities-and-governance",
      "topic": "Microsoft Entra ID",
      "question": "What minimum Microsoft Entra ID edition is required...",
      "note": "Verify whether P2 is needed for Privileged Identity Management",
      "timestamp": "2026-10-11T16:14:00.000Z"
    }
  ]
}
```

### Profile Management & Portability
Click **Learner Profile & Stats** in the top navigation bar to:
- **Export Profile (`.json`)**: Download your full progress, history, and notes to a JSON backup file.
- **Import Profile**: Restore progress from any exported JSON backup.
- **Import Custom Deck (`.json` or `.tsv`)**: Load your own flashcards or Anki exported decks.
- **Reset Progress**: Clear progress and restart afresh.

---

## 📝 Card Dataset Schema (`cards.js` & `cards.json`)

To add new flashcards into [`cards.js`](cards.js), add objects matching this structure to the `window.FLASHCARD_DATA` array:

```javascript
{
  id: "unique-card-id",
  section: "01-prerequisites-for-azure-administrators", // Matches learning path folder
  topic: "Azure Cloud Shell",                            // Specific module or subject
  question: "Where does Azure Cloud Shell mount its persistent storage?",
  answer: "It mounts an Azure Files share to `/home/<user>/clouddrive` within the backing Linux container.",
  source: "Exam Ref AZ-104, Ch. 1, p. 3; MS Learn Cloud Shell Overview"
}
```
