# AGENTS.md

## Repository Expectations

- This repository is Codex-first. Keep Codex plugin files under `.codex-plugin/`, `skills/`, and `.agents/plugins/`.
- Do not reintroduce Claude Code as the primary install surface. If compatibility is added later, keep it clearly secondary.
- Every bundled skill must have a `SKILL.md` with `name` and `description` frontmatter.
- Keep skill descriptions concise and scoped. They are the trigger contract Codex sees before loading the full skill.
- Prefer references under `skills/<skill>/references/` for detailed design guidance instead of bloating `SKILL.md`.
- After changing plugin metadata, verify `.codex-plugin/plugin.json` and `.agents/plugins/marketplace.json` parse as JSON.
