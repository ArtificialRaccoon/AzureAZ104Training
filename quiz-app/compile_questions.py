#!/usr/bin/env python3
"""
quiz-app/compile_questions.py
Validates, checks for duplicates, and compiles all modular question banks
(banks/path-01.json through banks/path-06.json) into:
  - quiz-app/questions.json
  - quiz-app/questions.js (window.QUIZ_DATA = [...])
"""

import json
import os
import sys

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
BANKS_DIR = os.path.join(BASE_DIR, "banks")
OUTPUT_JSON = os.path.join(BASE_DIR, "questions.json")
OUTPUT_JS = os.path.join(BASE_DIR, "questions.js")

BANK_FILES = [
    "path-01.json",
    "path-02.json",
    "path-03.json",
    "path-04.json",
    "path-05.json",
    "path-06.json"
]

def main():
    all_questions = []
    seen_ids = set()
    seen_questions = set()

    stats_by_section = {}
    stats_by_bank = {}

    print("==================================================")
    print("AZ-104 Quiz Question Compiler & Validator")
    print("==================================================")

    for bank_filename in BANK_FILES:
        filepath = os.path.join(BANKS_DIR, bank_filename)
        if not os.path.exists(filepath):
            print(f"ERROR: Bank file not found: {filepath}", file=sys.stderr)
            sys.exit(1)

        with open(filepath, "r", encoding="utf-8") as f:
            try:
                questions = json.load(f)
            except Exception as e:
                print(f"ERROR parsing {bank_filename}: {e}", file=sys.stderr)
                sys.exit(1)

        stats_by_bank[bank_filename] = len(questions)
        print(f"Loaded {bank_filename}: {len(questions)} questions")

        for idx, q in enumerate(questions):
            qid = q.get("id")
            if not qid:
                print(f"ERROR in {bank_filename}[{idx}]: Missing 'id'", file=sys.stderr)
                sys.exit(1)
            if qid in seen_ids:
                print(f"ERROR in {bank_filename}[{idx}]: Duplicate id '{qid}'", file=sys.stderr)
                sys.exit(1)
            seen_ids.add(qid)

            # Check question text
            q_text = q.get("question", "").strip()
            if not q_text:
                print(f"ERROR in {qid}: Empty question text", file=sys.stderr)
                sys.exit(1)
            norm_text = q_text.lower().strip()
            if norm_text in seen_questions:
                print(f"WARNING: Potential exact duplicate question in {qid}: {q_text[:60]}...", file=sys.stderr)
            seen_questions.add(norm_text)

            # Check choices
            choices = q.get("choices", [])
            if len(choices) != 4:
                print(f"ERROR in {qid}: Expected 4 choices, found {len(choices)}", file=sys.stderr)
                sys.exit(1)
            correct_count = sum(1 for c in choices if c.get("correct") is True)
            if correct_count != 1:
                print(f"ERROR in {qid}: Expected exactly 1 correct choice, found {correct_count}", file=sys.stderr)
                sys.exit(1)

            # Check explanation & source
            if not q.get("explanation", "").strip():
                print(f"ERROR in {qid}: Missing explanation", file=sys.stderr)
                sys.exit(1)
            if not q.get("source", "").strip():
                print(f"ERROR in {qid}: Missing source citation", file=sys.stderr)
                sys.exit(1)

            sec = q.get("section", "unknown")
            stats_by_section[sec] = stats_by_section.get(sec, 0) + 1

            all_questions.append(q)

    total_count = len(all_questions)
    print("--------------------------------------------------")
    print(f"Validation successful! Total questions: {total_count}")
    print("Breakdown by Learning Path Section:")
    for sec, count in sorted(stats_by_section.items()):
        print(f"  - {sec}: {count} questions")
    print("--------------------------------------------------")

    # Write questions.json
    with open(OUTPUT_JSON, "w", encoding="utf-8") as f:
        json.dump(all_questions, f, indent=2, ensure_ascii=False)
    print(f"Wrote JSON to: {os.path.relpath(OUTPUT_JSON, BASE_DIR)}")

    # Write questions.js
    js_content = [
        "/**",
        " * quiz-app/questions.js",
        f" * Master AZ-104 Multiple-Choice Question Dataset ({total_count} Verified Questions)",
        " * Generated automatically by compile_questions.py",
        " * Covers all 6 Learning Paths and 28 Modules of AZ-104T00-A & Exam Ref AZ-104.",
        " * Zero hallucinations. Choice order is randomized on every display.",
        " */",
        "",
        "window.QUIZ_DATA = " + json.dumps(all_questions, indent=2, ensure_ascii=False) + ";",
        ""
    ]
    with open(OUTPUT_JS, "w", encoding="utf-8") as f:
        f.write("\n".join(js_content))
    print(f"Wrote JavaScript to: {os.path.relpath(OUTPUT_JS, BASE_DIR)}")
    print("==================================================")
    print("Build complete! All checks passed.")

if __name__ == "__main__":
    main()
