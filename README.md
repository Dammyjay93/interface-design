# Interface Design for Codex

Codex-first interface design skills for dashboards, admin panels, SaaS apps, tools, settings pages, data interfaces, and interactive products.

Interface Design helps Codex make UI choices from product intent instead of generic dashboard defaults. It also keeps decisions in `.interface-design/system.md` so future UI work can reuse the same spacing, depth, tokens, component patterns, and visual direction.

This fork is adapted for **OpenAI Codex**. Claude Code command/plugin files are not the primary surface.

## What It Provides

- **`interface-design`** - build or refactor product interfaces with intent, domain exploration, craft checks, visual direction, and design-system memory.
- **`interface-design-status`** - summarize the current `.interface-design/system.md`.
- **`interface-design-extract`** - infer a design system from existing frontend code and offer to write `.interface-design/system.md`.
- **`interface-design-audit`** - audit UI code against `.interface-design/system.md`.
- **`interface-design-critique`** - critique a built interface for generic/defaulted decisions and improve it.

Use this for product UI. Do not use it for landing pages, marketing sites, campaigns, or brand-only exploration.

## What Changed From Upstream

This fork keeps the upstream craft model and the newer Codex slash-command/image-generation guidance, but packages it for Codex:

- Codex plugin metadata lives in `.codex-plugin/plugin.json`.
- Repo-local marketplace metadata lives in `.agents/plugins/marketplace.json`.
- Skills live in `skills/`.
- Claude Code plugin files are not bundled as the primary install surface.

## Repository Layout

```text
.
├── .codex-plugin/
│   └── plugin.json
├── .agents/
│   └── plugins/
│       └── marketplace.json
├── skills/
│   ├── interface-design/
│   │   ├── SKILL.md
│   │   ├── agents/openai.yaml
│   │   └── references/
│   ├── interface-design-audit/
│   ├── interface-design-critique/
│   ├── interface-design-extract/
│   └── interface-design-status/
├── reference/
│   ├── system-template.md
│   └── examples/
└── AGENTS.md
```

## Install For Local Testing

Clone the fork:

```bash
git clone https://github.com/Kirchberg/interface-design.git
cd interface-design
```

Codex can read the repo-local marketplace at `.agents/plugins/marketplace.json`. Restart Codex from this repository and install the `interface-design` plugin from the local marketplace.

For personal local testing, copy this plugin into a personal plugin folder and point `~/.agents/plugins/marketplace.json` at it:

```bash
mkdir -p ~/.codex/plugins
cp -R "$(pwd)" ~/.codex/plugins/interface-design
mkdir -p ~/.agents/plugins
```

Then add a personal marketplace entry like:

```json
{
  "name": "personal-plugins",
  "interface": {
    "displayName": "Personal Plugins"
  },
  "plugins": [
    {
      "name": "interface-design",
      "source": {
        "source": "local",
        "path": "./.codex/plugins/interface-design"
      },
      "policy": {
        "installation": "AVAILABLE",
        "authentication": "ON_INSTALL"
      },
      "category": "Design"
    }
  ]
}
```

Restart Codex after changing marketplace or plugin files. Local plugins are installed into Codex's plugin cache, so edits to the source folder may require reinstalling or refreshing the cached copy.

## Use

Ask Codex naturally:

```text
Use Interface Design to build the analytics dashboard.
```

```text
Audit the settings UI against .interface-design/system.md.
```

```text
Extract a design system from src/components and write .interface-design/system.md.
```

When your Codex surface supports slash commands or skill mentions, these are equivalent:

```text
/interface-design
/interface-design status
/interface-design audit src/components
/interface-design extract
/interface-design critique
```

You can also explicitly mention skills by name, for example `$interface-design-audit`.

## How The Main Skill Works

When `interface-design` runs, Codex:

1. Checks for `.interface-design/system.md`.
2. Uses saved direction, tokens, depth, spacing, and component patterns when present.
3. If no system exists, establishes a product-specific direction from:
   - the human using the interface;
   - the task they must perform;
   - the intended feel;
   - domain concepts and color world;
   - one signature element;
   - defaults to reject.
4. Uses image generation when a direction board, UI reference, screenshot paintover, or project-bound raster asset would clarify the work.
5. Builds UI using token architecture, subtle layering, systematic spacing, clear typography, and explicit states.
6. Evaluates the result with swap, squint, signature, token, and state checks.
7. Offers to save reusable decisions to `.interface-design/system.md`.

## Visual Direction

The main skill can use Codex image generation as a design companion when useful. Generated images are references, not implementation.

Good uses:

- direction boards before a greenfield screen;
- medium-fidelity UI references for major redesigns;
- screenshot paintovers when a working UI lacks craft;
- project-bound raster assets such as empty states, onboarding images, placeholders, or product previews.

The durable decisions from those references should become tokens, layout, components, and documented system memory.

## System Memory

`.interface-design/system.md` stores project-specific design decisions:

```markdown
# Design System

## Direction
Personality: ...
Foundation: ...
Depth: ...

## Tokens
### Spacing
Base: ...
Scale: ...

### Colors
...

## Patterns
### Button Primary
- Height: ...
- Padding: ...
- Radius: ...
- Usage: ...

## Decisions
| Decision | Rationale | Date |
```

Templates and examples live in `reference/`.

## Codex Notes

- Skills live under `skills/` and are bundled by `.codex-plugin/plugin.json`.
- The repo marketplace lives at `.agents/plugins/marketplace.json`.
- `AGENTS.md` documents contribution expectations for Codex.
- This plugin does not bundle hooks or rules by default. The workflow is guidance-oriented; add hooks only for deterministic enforcement.
- Subagents are not auto-spawned by installing this plugin. Ask Codex explicitly when you want parallel agents.
- Compatibility with other agents can be added later, but Codex remains the primary install surface for this fork.

## Credits

Based on the original `interface-design` / `claude-design-skill` work by Damola Akinleye, adapted here for OpenAI Codex-first usage.

## License

MIT. See [LICENSE](LICENSE).
