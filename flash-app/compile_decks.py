import json
import glob
import os

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
decks_dir = os.path.join(BASE_DIR, 'decks')
deck_files = sorted(glob.glob(os.path.join(decks_dir, 'path-*.json')))
print(f"Found {len(deck_files)} deck files.")

all_cards = []
seen_ids = set()
section_counts = {}

for f in deck_files:
    with open(f, 'r', encoding='utf-8') as fp:
        cards = json.load(fp)
        rel_name = os.path.relpath(f, BASE_DIR)
        print(f"Loaded {len(cards)} cards from {rel_name}")
        for c in cards:
            cid = c['id']
            if cid in seen_ids:
                raise ValueError(f"Duplicate card ID found: {cid}")
            seen_ids.add(cid)
            sec = c['section']
            section_counts[sec] = section_counts.get(sec, 0) + 1
            all_cards.append(c)

print(f"\nTotal compiled flashcards: {len(all_cards)}")
print("Section Breakdown:")
for sec, cnt in section_counts.items():
    print(f"  - {sec}: {cnt} cards")

# 1. Write cards.json
out_json = os.path.join(BASE_DIR, 'cards.json')
with open(out_json, 'w', encoding='utf-8') as fp:
    json.dump(all_cards, fp, indent=2, ensure_ascii=False)
print("Wrote cards.json")

# 2. Write cards.js
out_js = os.path.join(BASE_DIR, 'cards.js')
js_content = '/**\n * flash-app/cards.js\n * Compiled Flashcard Dataset for AZ-104 Study WebApp.\n * Total Cards: ' + str(len(all_cards)) + '\n */\n\nwindow.FLASHCARD_DATA = ' + json.dumps(all_cards, indent=2, ensure_ascii=False) + ';\n'
with open(out_js, 'w', encoding='utf-8') as fp:
    fp.write(js_content)
print("Wrote cards.js")

# 3. Write cards.tsv (Anki import format)
out_tsv = os.path.join(BASE_DIR, 'cards.tsv')
with open(out_tsv, 'w', encoding='utf-8') as fp:
    for c in all_cards:
        q = c['question'].replace('\t', ' ').replace('\n', '<br>')
        a = c['answer'].replace('\t', ' ').replace('\n', '<br>')
        t = c.get('topic', '').replace('\t', ' ')
        s = c.get('source', '').replace('\t', ' ')
        fp.write(f"{q}\t{a}\t{t}\t{s}\n")
print("Wrote cards.tsv (Anki importable)")
