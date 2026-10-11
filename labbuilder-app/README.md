# AZ-104 LabBuilder - Interactive Practical Lab Simulator

A serverless, client-side web application designed for practicing hands-on scenario-based administrative challenges for the **Microsoft Certified: Azure Administrator Associate (AZ-104)** exam and role.

---

## 🌟 Core Features

1. **Zero-Server Offline Execution**:
   - Built with pure HTML5, modern CSS3 (Azure Dark Glassmorphism), and Vanilla JavaScript.
   - Runs out-of-the-box by double-clicking [`index.html`](./index.html) in any modern web browser without requiring a backend server or triggering CORS blocks (`file:///` protocol supported).

2. **Catalog by Learning Path & Module**:
   - Filter labs by Microsoft Learn Learning Paths, difficulty levels (Fundamental, Intermediate, Advanced), topic, and trouble flags.
   - Search instantly across titles, topics, summaries, and CLI commands.

3. **Partially Randomized Dynamic Labs**:
   - Each time a lab is launched, the dynamic hydration engine injects fresh parameters (e.g. unique resource group names, storage account prefixes, Azure RBAC roles, regions, and CIDR subnet blocks).
   - Click the **"🎲 Reroll Parameters"** button at any time to instantly generate a new scenario variation for repeated practice.
   - Quick-reference parameters cheat sheet with 1-click clipboard copy for each generated value.

4. **Progressive Step-by-Step Revelation (Hints)**:
   - Steps are hidden/locked by default to challenge learners to complete tasks independently in Azure.
   - Reveal steps one-by-one (`🔓 Reveal Step X (Hint)`) or all at once.
   - Each step provides:
     - 🌐 **Azure Portal Walkthrough**
     - 💻 **Azure CLI (Bash)** snippet with 1-click copy
     - ⚡ **Azure PowerShell** snippet with 1-click copy
     - 🔍 **Verification & Validation CLI Command** to confirm successful configuration in Azure.

5. **Acceptance Criteria Checklist**:
   - Interactive checklist with real-time percentage progress bar to track completed lab objectives.

6. **Trouble Flagging & Self-Assessment**:
   - Flag labs you find challenging with the **"🚩 Flag Trouble"** button.
   - Filter catalog to view only flagged labs for focused review sessions.
   - Rate your session upon completion:
     - 🌟 **Independent Master** (Completed without hints)
     - 💡 **Assisted Completion** (Used portal/CLI hints)
     - ⚠️ **Struggled / Need Review** (Encountered gaps; auto-flags for review)

7. **Learner Object Persistence**:
   - Automatically tracks attempts, completion status, hint ratios, trouble flags, and personal observations in browser `localStorage`.
   - Export and import your learner progress profile as a portable JSON file.

---

## 📂 File Architecture

```text
labbuilder-app/
├── index.html        # Main dual-view interface (Catalog + Active Lab View + Modal)
├── style.css         # Modern Azure Dark Glassmorphism design system
├── app.js            # State machine, hydration engine, step disclosure & persistence
├── labs.js           # Compiled master lab dataset (27 verified archetypes, zero CORS)
├── labs.json         # Portable pure JSON export of the lab templates (27 labs)
├── compile_labs.py   # Lab validation and compiler tool
├── labs/             # Modular JSON lab definitions per Learning Path
│   ├── path-01.json  # Path 1: Prerequisites for Azure Administrators (2 labs)
│   ├── path-02.json  # Path 2: Manage Identities & Governance (5 labs)
│   ├── path-03.json  # Path 3: Configure & Manage Virtual Networks (7 labs)
│   ├── path-04.json  # Path 4: Implement & Manage Storage (4 labs)
│   ├── path-05.json  # Path 5: Deploy & Manage Compute Resources (5 labs)
│   └── path-06.json  # Path 6: Monitor & Back Up Resources (4 labs)
└── README.md         # Documentation and guide
```

---

## 🛠️ Recompiling Labs

If you add new lab archetypes or edit parameters in `labs/path-0X.json`, recompile using:

```bash
python labbuilder-app/compile_labs.py
```

The compiler checks for required fields, validates syntax and step structures, and synchronizes `labs.json` and `labs.js`.

---

## 🚀 How to Run

1. Open [`index.html`](./index.html) in Microsoft Edge, Google Chrome, Mozilla Firefox, or Safari.
2. Select any of the 27 labs from the catalog and click **"🚀 Launch Dynamic Lab"**.
3. Read the business mission scenario and copy the generated parameters into your Azure environment.
4. Complete the tasks independently, or click **"🔓 Reveal Next Step"** if you need guidance.
5. Record your reflection, save your notes, and track your progress in the **Learner Profile** modal.

---

## 🔗 Related AZ-104 Study Tools

- **Quiz Practice**: [`../quiz-app/index.html`](../quiz-app/index.html)
- **Spaced-Repetition Flashcards**: [`../flash-app/index.html`](../flash-app/index.html)
- **Official Knowledge Base**: [`../knowledge-base/AZ-104/README.md`](../knowledge-base/AZ-104/README.md)

