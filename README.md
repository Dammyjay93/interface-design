# Frontend Design Skill for Claude Code

A Claude Code skill that creates distinctive, production-grade frontend interfaces with high design quality. Inspired by Linear, Notion, Stripe, and Vercel.

## What It Does

This skill transforms how Claude Code approaches UI generation. Instead of producing generic, forgettable interfaces, it guides Claude to:

1. **Choose a design direction** before writing code (Precision & Density, Warmth & Approachability, Sophistication & Trust, etc.)
2. **Apply consistent craft principles** (4px grid, typography hierarchy, intentional depth strategy)
3. **Avoid common anti-patterns** (dramatic shadows, asymmetric padding, decorative gradients)

## Before & After

See the difference at **[dashboard-v4-eta.vercel.app](https://dashboard-v4-eta.vercel.app)**

| Without Skill | With Skill |
|---------------|------------|
| Generic gray palette | Intentional color foundation |
| Basic shadows | Consistent depth strategy |
| Default spacing | 4px grid system |
| No design direction | Context-driven personality |

## Installation

### Plugin Install (Recommended)

```
/plugin install github:Dammyjay93/claude-design-skill
```

### Manual Install (Legacy)

```bash
mkdir -p ~/.claude/skills/frontend-design
curl -o ~/.claude/skills/frontend-design/SKILL.md \
  https://raw.githubusercontent.com/Dammyjay93/claude-design-skill/main/skills/SKILL.md
```

## Usage

The skill activates automatically when building web components, pages, or applications. It can also be invoked explicitly:

```
/frontend-design
```

Or referenced in prompts:

```
Build a dashboard for [your use case]. Use the frontend-design skill.
```

## Design Directions

The skill supports multiple design personalities:

| Direction | Aesthetic | Best For |
|-----------|-----------|----------|
| **Precision & Density** | Tight, monochrome, technical | Developer tools, power user apps |
| **Warmth & Approachability** | Generous spacing, soft shadows | Collaborative tools, consumer SaaS |
| **Sophistication & Trust** | Cool tones, layered depth | Finance, enterprise B2B |
| **Boldness & Clarity** | High contrast, dramatic space | Modern dashboards, marketing |
| **Utility & Function** | Muted, functional density | GitHub-style tools |
| **Data & Analysis** | Chart-optimized, numbers-first | Analytics, BI tools |

## Core Principles

- **4px Grid** — All spacing uses multiples of 4px
- **Symmetrical Padding** — TLBR must match
- **Consistent Depth** — Choose one shadow strategy and commit
- **Monospace for Data** — Numbers, IDs, timestamps in mono
- **Color for Meaning** — Gray builds structure, color communicates

## File Structure

```
claude-design-skill/
├── .claude-plugin/
│   └── plugin.json   # Plugin manifest
└── skills/
    └── SKILL.md      # The skill definition
```

## Customization

Fork this repo and modify `skills/SKILL.md` to match your design system. Key sections to customize:

- **Design Directions** — Add your own personality options
- **Color Foundation** — Define your brand colors
- **Typography** — Specify your font stack
- **Iconography** — Change from Phosphor to your icon library

## License

MIT
