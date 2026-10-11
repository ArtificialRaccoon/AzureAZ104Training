# AZ-104 Microsoft Azure Administrator Study Suite

A self-contained, offline-first study suite and interactive training environment for the **AZ-104 Microsoft Azure Administrator** certification.

**This is ENTIRELY slop-coded.  I didn't write ZIP of this; I just wanted a quick couple of tools for flashcards and simple quizes, etc.**

---

## 🏛️ Repository Overview

This repository integrates an authoritative markdown knowledge base with two zero-dependency, client-side web applications for active study and testing:

```text
AzureTraining/
├── knowledge-base/AZ-104/   # Comprehensive curriculum markdown notes & Exam Ref analysis
│   ├── 01-prerequisites-for-azure-administrators/
│   ├── 02-manage-identities-and-governance/
│   ├── 03-configure-and-manage-virtual-networks/
│   ├── 04-implement-and-manage-storage/
│   ├── 05-deploy-and-manage-compute-resources/
│   ├── 06-monitor-and-back-up-resources/
│   └── README.md            # Knowledge base index & learning path matrix
├── flash-app/               # Interactive 3D Spaced-Repetition Flashcard WebApp
│   ├── index.html           # Main application entry point (double-click to open)
│   ├── cards.js             # Compiled master deck (409 verified cards)
│   ├── cards.tsv            # Anki-importable TSV file
│   ├── compile_decks.py     # Deck validation and compiler tool
│   └── decks/               # Modular JSON decks per Learning Path
├── quiz-app/                # Interactive Multiple-Choice Exam Simulator WebApp
│   ├── index.html           # Main application entry point (double-click to open)
│   ├── questions.js         # Compiled master question bank (338 verified questions)
│   ├── compile_questions.py # Question validation and compiler tool
│   └── banks/               # Modular JSON question banks per Learning Path
└── README.md                # This file
```

---

## 🚀 Interactive Applications (Zero Server Required)

Both applications run entirely in the web browser using Vanilla HTML5, CSS3, and modern JavaScript. They require **no web server, Node.js, build step, or network connection**.

### 1. Flashcard Study Deck (`flash-app/`)
- **Direct Launch**: Open [`flash-app/index.html`](flash-app/index.html) in any browser (Chrome, Edge, Firefox, Brave, Safari).
- **Features**:
  - **409 Atomic Flashcards**: Formulated adhering to SuperMemo 20 Rules and Andy Matuschak principles.
  - **3D Card Flip**: Smooth animations with keyboard shortcuts (`Space` to flip, `1-4` for self-rating).
  - **Mistake & Revision Flagging**: Mark difficult cards or report cards needing review.
  - **Learner Profile Persistence**: Tracks accuracy, study streaks, and review counts locally in `localStorage`.
  - **Anki Integration**: Export/import custom JSON decks, or import [`flash-app/cards.tsv`](flash-app/cards.tsv) into desktop Anki.

### 2. Multiple-Choice Quiz Master (`quiz-app/`)
- **Direct Launch**: Open [`quiz-app/index.html`](quiz-app/index.html) in any browser.
- **Features**:
  - **338 Scenario-Based Questions**: Covers all 5 functional domains and 80 exam skills measured.
  - **Anti-Gaming Choice Shuffling**: The Fisher-Yates algorithm randomizes choice order (A, B, C, D) on every single render to prevent position memorization.
  - **Dual Modes**: *Practice Mode* (instant green/red feedback, full rationale, and reference citations) and *Exam Simulation Mode* (timed test, question palette, full score breakdown).
  - **Automatic Mistake Remediation**: Tracks incorrect questions in your learner profile and generates targeted remediation quizzes to re-test only missed questions.

---

## 📚 Knowledge Base (`knowledge-base/AZ-104/`)

Detailed, verified technical reference documentation covering 6 Learning Paths and 28 Modules (~18.1 hours of structured curriculum).

- **Knowledge Base Index**: [`knowledge-base/AZ-104/README.md`](knowledge-base/AZ-104/README.md)
- **Authoritative Sources**:
  1. **Course AZ-104T00-A**: Microsoft Learn Official Course Curriculum.
  2. **Exam Ref AZ-104**: *Exam Ref AZ-104 Microsoft Azure Administrator (3rd Edition, 2024)* by Charles Pluta (Pearson Education).
- **Quality Standard**:
  - Zero hallucinations; all limits, parameters, and architectural behaviors verified.
  - Direct chapter and page number citations across all modules.

---

## 🛠️ Recompiling Datasets

If you add new questions or flashcards to the modular files in `decks/` or `banks/`, run the respective compiler scripts from the project root:

```bash
# Recompile flashcard decks (cards.json, cards.js, cards.tsv)
python flash-app/compile_decks.py

# Recompile quiz question banks (questions.json, questions.js)
python quiz-app/compile_questions.py
```

Both compilers validate JSON syntax, ensure unique identifiers, check required fields, and report total coverage metrics.
