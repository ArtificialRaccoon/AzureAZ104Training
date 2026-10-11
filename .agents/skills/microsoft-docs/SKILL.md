---
name: microsoft-docs
description: >-
  Query and extract official Microsoft documentation across Azure, .NET, M365, Windows, Power Platform, Entra, and developer tools.
  Use whenever the user asks how something works, needs architecture overviews, tutorials, configuration settings, limits, quotas,
  or best practices for any Microsoft technology—even if they do not explicitly say "docs".
---

# Microsoft Docs

Use this skill to retrieve authoritative, up-to-date documentation directly from Microsoft Learn.

## Tool Execution Strategy for Gemini

In the Antigravity/Gemini environment, retrieve Microsoft documentation using one of the following methods (in order of preference):

### 1. Native Gemini Web Retrieval (Zero Dependency - Recommended)
1. **Search**: Invoke `search_web` with `domain: "learn.microsoft.com"` or query prefixed with `site:learn.microsoft.com`.
   - Example: `search_web(query="site:learn.microsoft.com Azure Cosmos DB partition key best practices", domain="learn.microsoft.com")`
2. **Fetch Page**: Extract full content using `read_url_content` on the retrieved Microsoft Learn URL.
   - Example: `read_url_content(Url="https://learn.microsoft.com/en-us/azure/cosmos-db/partitioning-overview")`

### 2. Microsoft Learn CLI via `run_command`
If detailed command-line CLI extraction is desired, use `run_command` with the official `@microsoft/learn-cli`:
```powershell
# Search Microsoft Learn documentation
npx -y @microsoft/learn-cli search "azure functions timeout"

# Fetch full article or section
npx -y @microsoft/learn-cli fetch "https://learn.microsoft.com/en-us/azure/azure-functions/functions-scale" --section "scale-and-hosting"
```

### 3. Microsoft Learn MCP Server (If configured)
If the Microsoft Learn MCP Server (`https://learn.microsoft.com/api/mcp`) is enabled in `mcp_config.json`:
- `microsoft_docs_search(query: "...")`
- `microsoft_docs_fetch(url: "...")`

---

## When to Use

- **Understanding concepts** — "How does Cosmos DB partitioning work?"
- **Learning a service** — "Azure Functions overview", "Container Apps architecture"
- **Finding tutorials** — "quickstart", "getting started", "step-by-step"
- **Configuration options** — "App Service configuration settings"
- **Limits & quotas** — "Azure OpenAI rate limits", "Service Bus quotas"
- **Best practices** — "Azure security best practices", "Well-Architected review"

---

## Query Effectiveness

Formulate specific, targeted queries:

```
# ❌ Too broad
"Azure Functions"

# ✅ Specific & effective
"Azure Functions Python v2 programming model"
"Cosmos DB partition key design best practices"
"Container Apps scaling rules KEDA"
```

Always include relevant context:
- **Version** when relevant (`.NET 8`, `Python 3.11`, `v2 model`)
- **Intent** (`quickstart`, `tutorial`, `reference`, `quotas`, `limits`)
- **Host / OS** (`Linux`, `Windows`, `Serverless`, `AKS`)

---

## When to Fetch Full Content

Fetch the full document via `read_url_content` (or `fetch`) when:
- **Tutorials / Quickstarts** — Step-by-step reproduction requires complete commands.
- **Reference Tables** — Configuration keys, SKU limits, or quota matrices are cut off in search snippets.
- **Deep Dives** — Comprehensive architecture decisions require full section context.
