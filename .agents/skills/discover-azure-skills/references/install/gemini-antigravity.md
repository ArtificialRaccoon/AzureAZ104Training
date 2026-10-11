# Installing Skills for Gemini / Antigravity

In Antigravity / Gemini, skills are discovered from `.agents/skills/<skill-name>/` in the workspace or globally in `~/.gemini/config/skills/` (or `~/.gemini/config/plugins/<plugin-name>/skills/`).

## Installation Steps

1. Copy the skill directory into your workspace's `.agents/skills/` folder:
   ```powershell
   Copy-Item -Recurse -Path "<source-skill-path>" -Destination ".agents\skills\<skill-name>"
   ```

2. Alternatively, use the `skills` CLI:
   ```bash
   npx skills add https://github.com/microsoft/azure-skills/tree/main/.github/plugins/{plugin-dirname}/skills/{skill-name}
   ```

3. Ensure the skill has a valid `SKILL.md` with YAML frontmatter containing:
   ```yaml
   ---
   name: <skill-name>
   description: >-
     <Description in third-person stating what it does and when to activate it>
   ---
   ```

4. Antigravity automatically detects the skill on reload and registers it for progressive disclosure.
