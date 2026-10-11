# Azure Tooling & Execution Standard for Gemini

This project incorporates the Azure Solutions and Cloud Architecture skills suite adapted for Google Antigravity and Gemini.

## 1. Tool Mapping for Gemini Agents

When executing workflows from any skill in `.agents/skills/`, map all operations to Antigravity / Gemini native tools:

| Operation | Skill Reference | Gemini Tool | Details |
|-----------|-----------------|-------------|---------|
| **User Confirmation & Approval** | `ask_user(...)` | `ask_question` | Use for interactive choice modals (subscriptions, regions, deployment gates, destructive confirmations). |
| **CLI & Script Execution** | `az`, `azd`, `bash`, `pwsh` | `run_command` | Execute PowerShell or cmd commands in the user's workspace. Limit output length where appropriate. |
| **Documentation Search** | `microsoft_docs_search` | `search_web` | Use query `site:learn.microsoft.com <query>` or domain `learn.microsoft.com`. Alternatively, run `npx -y @microsoft/learn-cli search "..."` via `run_command`. |
| **Documentation Fetch** | `microsoft_docs_fetch` | `read_url_content` | Fetch live content of Microsoft Learn URLs directly. Alternatively, run `npx -y @microsoft/learn-cli fetch "<url>"` via `run_command`. |
| **IaC & File Reading** | File inspection | `view_file` | Read existing templates (`*.bicep`, `*.tf`, `azure.yaml`, `Dockerfile`, plans). |
| **IaC & File Modification** | File creation/editing | `write_to_file` / `replace_file_content` | Author or update templates, scripts, and deployment plans. |
| **Azure MCP Server** | `mcp__azure__*` | MCP Proxy Tools | When Azure MCP is active in `mcp_config.json`, dispatch tools directly. When unavailable, execute Azure CLI equivalents via `run_command`. |

---

## 2. Destructive Action & Safety Gates

⛔ **MANDATORY**: Any destructive or irreversible operation MUST prompt the user using `ask_question` before execution:
- Deleting resource groups (`az group delete`, `azd down --purge`)
- Dropping databases or storage accounts
- Overwriting existing production configurations or purging Key Vaults
- Scaling operations that incur substantial cloud costs

### Interactive Gate Format:
```json
ask_question({
  questions: [{
    question: "This action will delete resource group '<rg-name>' and all associated resources. Do you want to proceed?",
    options: ["(Recommended) Abort operation", "Proceed with deletion"],
    is_multi_select: false
  }],
  toolAction: "Requesting confirmation",
  toolSummary: "Resource deletion confirmation"
})
```

---

## 3. Subscription & Region Verification

Never assume a default subscription or deployment region.
1. Inspect available subscriptions and active account via `az account show` / `az account list` using `run_command`.
2. Confirm with the user if multiple subscriptions or regions are plausible.
