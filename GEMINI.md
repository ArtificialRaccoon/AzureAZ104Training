# Azure Training Project Guidelines (Gemini & Antigravity)

This project contains Azure training materials, architectures, and skills.

## Customizations & Skills
- **Skills Directory**: `.agents/skills/` (also aliased via `agents/skills`)
- **Available Skills**:
  - `cloud-solution-architect`: Azure Architecture Center principles, styles, patterns, and reviews.
  - `microsoft-docs`: Authoritative Microsoft Learn documentation query and retrieval.
  - `discover-azure-skills`: Catalog of Azure modular skills.
  - Azure Services Suite (`azure-compute`, `azure-storage`, `azure-kubernetes`, `azure-ai`, `azure-messaging`, `azure-deploy`, `azure-prepare`, `azure-validate`, etc.).
  - `flashcard-generator`: High-retention Anki flashcard creator adhering to SuperMemo 20 Rules, Andy Matuschak, and Control-Alt-Backspace principles.

## Gemini Tool Protocol
- **Interactive Prompts / Gates**: Use `ask_question` whenever confirmation, approval, or disambiguation is required (e.g. destructive actions, subscription selection).
- **Command Execution**: Use `run_command` (PowerShell on Windows) for `az`, `azd`, `bicep`, `terraform`, and `git`.
- **Microsoft Documentation**: Use `search_web` (`domain: "learn.microsoft.com"`) and `read_url_content`, or `run_command` with `@microsoft/learn-cli`.
- **File Authoring**: Use `view_file`, `write_to_file`, and `replace_file_content`.

## Knowledge Base
- **Directory**: `knowledge-base/AZ-104/` (Index: [README.md](knowledge-base/AZ-104/README.md))
- **Sources**:
  - [Course AZ-104T00-A: Microsoft Azure Administrator](https://learn.microsoft.com/en-us/training/courses/az-104t00) (Microsoft Learn)
  - *Exam Ref AZ-104 Microsoft Azure Administrator* (Charles Pluta, 3rd Edition, 2024; Pearson Education)
- **Scope**: 6 Learning Paths, 28 Modules, ~18.1 hours of authoritative curriculum enriched with exam traps, thought experiments, and verified page numbers.


