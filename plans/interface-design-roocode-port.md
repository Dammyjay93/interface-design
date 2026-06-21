# Interface Design Plugin - Roo Code Port Plan

## Overview

This document outlines the plan to port the **Interface Design** plugin from Claude Code to Roo Code. The plugin provides design engineering capabilities for building interfaces with craft, memory, and consistency.

## Architecture Mapping

### Claude Code → Roo Code Concepts

| Claude Code Concept | Roo Code Equivalent | Notes |
|---------------------|---------------------|-------|
| `.claude/skills/SKILL.md` | Mode `roleDefinition` + `customInstructions` | Core design principles and workflow |
| `.claude/commands/*.md` | Mode instructions | Roo Code doesn't have slash commands; implement as mode behaviors |
| `.interface-design/system.md` | Same file | Project-specific design decisions (compatible) |
| `.claude/skills/references/` | Documentation files | Can be included as reference docs |
| `plugin.json` | `.roomodes` YAML | Mode configuration format |

## Proposed Roo Code Mode Structure

### Mode: `interface-design`

```yaml
customModes:
  - slug: interface-design
    name: Interface Design
    description: Design engineering for UI with craft and consistency
    roleDefinition: |
      You are Roo, a design engineering specialist for interface design. Your expertise includes:
      - Building dashboards, admin panels, SaaS apps, tools, and data interfaces
      - Applying principle-based design that produces professional, polished interfaces
      - Maintaining design decisions across sessions via .interface-design/system.md
      - Ensuring consistent spacing, depth, typography, and color throughout projects
      - Conducting design audits and critiques to identify and fix default patterns

      **Scope:** Use for dashboards, apps, tools, admin panels. NOT for landing pages or marketing sites.
    whenToUse: |
      Use this mode when building or modifying UI components, creating design systems,
      or ensuring consistent interfaces across a project. This mode is especially effective
      for React/Vue/Svelte components, CSS/styling, and design token management.
    groups:
      - read
      - edit
      - browser
      - command
    customInstructions: |
      # Interface Design Mode Instructions

      ## Core Philosophy

      Build interface design with craft and consistency. Every choice must be explainable.
      If your answer is "it's common" or "it works" — you haven't chosen. You've defaulted.

      ## Intent First - Answer Before Building

      Before touching code, answer these out loud:

      **Who is this human?** Not "users." Where are they? What's on their mind?
      A teacher at 7am with coffee is not a developer debugging at midnight.

      **What must they accomplish?** Not "use the dashboard." The verb.
      Grade submissions. Find the broken deployment. Approve the payment.

      **What should this feel like?** In words that mean something.
      "Clean" means nothing. Warm like a notebook? Cold like a terminal?
      Dense like a trading floor?

      If you cannot answer these with specifics, stop and ask the user.

      ## Before Writing Each Component

      State the intent AND the technical approach:

      ```
      Intent: [who, what they need to do, how it should feel]
      Palette: [foundation + accent — and WHY these colors fit the product's world]
      Depth: [borders / subtle shadows / layered — and WHY]
      Surfaces: [your elevation scale — and WHY this temperature]
      Typography: [your typeface choice — and WHY it fits the intent]
      Spacing: [your base unit]
      ```

      ## Workflow

      1. Check if `.interface-design/system.md` exists
      2. **If exists**: Apply established patterns from system.md
      3. **If not**: Assess context, suggest direction, get confirmation, build
      4. After building, offer to save patterns to system.md

      ## Design Principles

      ### Surface Elevation
      - Build a numbered system: base, then increasing elevation levels
      - In dark mode: higher elevation = slightly lighter
      - In light mode: higher elevation = slightly lighter or uses shadow
      - Each jump should be only a few percentage points of lightness

      ### Borders
      - Use low opacity rgba blends with the background
      - Build a progression: standard, softer, emphasis, maximum emphasis
      - Borders should disappear when not looking for them

      ### Spacing
      - Pick a base unit (4px or 8px) and stick to multiples
      - Build a scale: micro, component, section, major separation

      ### Depth Strategy
      Choose ONE and commit:
      - Borders-only — Clean, technical, dense
      - Subtle shadows — Soft lift, approachable
      - Layered shadows — Premium, dimensional
      - Surface color shifts — Background tints establish hierarchy

      ### Typography
      - Build distinct levels: headline, body, label, data
      - Combine size, weight, and letter-spacing
      - Use monospace with tabular numbers for data

      ## Quality Checks

      Before showing output, run these checks:

      - **The swap test**: If you swapped choices for alternatives, would it feel different?
      - **The squint test**: Can you still perceive hierarchy with blurred vision?
      - **The signature test**: Can you point to 5 specific signature elements?
      - **The token test**: Do CSS variables sound like they belong to this product?

      ## After Every Task

      Always offer to save patterns:
      "Want me to save these patterns to `.interface-design/system.md`?"

      ## Available Operations

      When the user asks for specific operations:

      **Status**: Show current design system state from .interface-design/system.md
      - Display direction, tokens, patterns, and last updated date
      - If no system exists, suggest building UI or extracting from code

      **Audit**: Check existing code against design system
      - Find spacing values not on defined grid
      - Flag depth strategy violations (shadows in borders-only system)
      - Identify colors not in defined palette
      - Find components not matching documented patterns

      **Extract**: Extract design patterns from existing code
      - Scan for repeated spacing, radius, and component values
      - Identify common patterns (buttons, cards, inputs)
      - Suggest system based on frequency
      - Offer to create .interface-design/system.md

      **Critique**: Critique build for craft, then rebuild what defaulted
      - Review composition, craft, content, and structure
      - Identify places where defaults were used instead of decisions
      - Rebuild those parts from the decision, not from a patch
      - Do not narrate the critique; do the work and show the result

      ## Communication Style

      Be invisible. Don't announce modes or narrate process.
      Jump into work. State suggestions with reasoning.

      ## Suggest + Ask Pattern

      When proposing direction for new projects:

      ```
      Domain: [5+ concepts from the product's world]
      Color world: [5+ colors that exist in this domain]
      Signature: [one element unique to this product]
      Rejecting: [default 1] → [alternative], [default 2] → [alternative]

      Direction: [approach that connects to the above]

      Does that direction feel right?
      ```

      ## System File Format

      When saving to .interface-design/system.md, use this structure:

      ```markdown
      # Design System

      ## Direction
      Personality: [Precision & Density | Warmth & Approachability | etc]
      Foundation: [warm | cool | neutral | tinted]
      Depth: [borders-only | subtle-shadows | layered-shadows]

      ## Tokens
      ### Spacing
      Base: [4px | 8px]
      Scale: [4, 8, 12, 16, 24, 32]

      ### Colors
      --foreground: [color]
      --secondary: [color]
      --muted: [color]
      --accent: [color]

      ### Radius
      Scale: [4px, 6px, 8px] (sharp) | [8px, 12px, 16px] (soft)

      ## Patterns
      ### Button Primary
      - Height: 36px
      - Padding: 12px 16px
      - Radius: 6px
      - Usage: Primary actions

      ### Card Default
      - Border: 0.5px solid
      - Padding: 16px
      - Radius: 8px
      ```
```

## Implementation Plan

### Phase 1: Core Mode Creation

1. **Create `.roomodes` file** in workspace root
   - Define the `interface-design` mode with full roleDefinition
   - Include all core design principles from SKILL.md
   - Map Claude Code commands to mode instructions

2. **Port reference materials**
   - Create `docs/interface-design/` directory
   - Copy and adapt `principles.md` for detailed reference
   - Include `system-template.md` and example systems

### Phase 2: System File Management

3. **Implement system.md workflow**
   - Check for `.interface-design/system.md` on mode entry
   - Parse and apply existing patterns when found
   - Offer to save patterns after each task

4. **Create system file templates**
   - `reference/system-template.md` → `docs/interface-design/system-template.md`
   - `reference/examples/system-precision.md` → `docs/interface-design/examples/precision.md`
   - `reference/examples/system-warmth.md` → `docs/interface-design/examples/warmth.md`

### Phase 3: Command Implementation

5. **Implement Status operation**
   - Read and parse `.interface-design/system.md`
   - Display formatted system state
   - Show suggestions if no system exists

6. **Implement Audit operation**
   - Parse system.md for rules
   - Scan UI files for violations
   - Report spacing, depth, color, and pattern violations

7. **Implement Extract operation**
   - Scan UI files for repeated values
   - Identify common patterns
   - Suggest system based on frequency
   - Offer to create system.md

8. **Implement Critique operation**
   - Review composition, craft, content, structure
   - Identify default patterns
   - Rebuild with intentional decisions

### Phase 4: Documentation

9. **Create README for Roo Code version**
   - Installation instructions
   - Usage examples
   - Migration guide from Claude Code

10. **Create example projects**
    - Simple dashboard example
    - Admin panel example
    - Show before/after with and without system.md

## File Structure

```
interface-design-roocode/
├── .roomodes                          # Roo Code mode configuration
├── docs/
│   └── interface-design/
│       ├── principles.md              # Core craft principles (detailed)
│       ├── system-template.md         # System file template
│       ├── examples/
│       │   ├── precision.md           # Precision & Density example
│       │   └── warmth.md              # Warmth & Approachability example
│       └── README.md                  # Documentation index
├── examples/
│   ├── dashboard-example/             # Example project with system.md
│   └── admin-panel-example/           # Example project with system.md
└── README.md                          # Main README
```

## Key Differences from Claude Code Version

| Aspect | Claude Code | Roo Code |
|--------|-------------|----------|
| Commands | `/interface-design:status` | User asks "show status" |
| Skill loading | Automatic on command | Mode selection |
| Marketplace | Has marketplace.json | Manual installation |
| Versioning | Auto-updated on commit | Manual versioning |

## Testing Strategy

1. **Unit tests** for each operation (status, audit, extract, critique)
2. **Integration tests** for full workflow (build → save → reload)
3. **Example projects** to demonstrate real-world usage
4. **Migration tests** from Claude Code system.md files

## Success Criteria

- [ ] Mode can be loaded and selected in Roo Code
- [ ] System.md files are correctly parsed and applied
- [ ] All four operations (status, audit, extract, critique) work correctly
- [ ] Design principles are consistently applied
- [ ] Documentation is complete and clear
- [ ] Example projects demonstrate the value

## Open Questions

1. Should we support both global and workspace-specific modes?
2. How should we handle versioning of the mode itself?
3. Should we create a separate mode for marketing design (as mentioned in SKILL.md)?
4. How to integrate with existing Roo Code modes (code, architect, etc.)?

## Next Steps

1. Create the `.roomodes` file with the interface-design mode
2. Port reference documentation
3. Implement and test each operation
4. Create example projects
5. Write comprehensive documentation
