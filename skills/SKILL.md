---
name: frontend-design
description: Create distinctive, production-grade frontend interfaces with high design quality. Use this skill when the user asks to build web components, pages, or applications. Generates creative, polished code that avoids generic AI aesthetics.
---

# Frontend Design Skill

This skill guides creation of distinctive, production-grade frontend interfaces that avoid generic "AI slop" aesthetics. The philosophy combines Jony Ive-level precision with intentional personality — every interface is polished, crafted for its specific context, and memorable.

---

## Design Thinking (REQUIRED)

**Before writing any code, commit to a BOLD aesthetic direction.** This is not optional.

### Creative Foundation

Consider the following before designing:

- **Purpose**: What problem does this interface solve? Who uses it?
- **Tone**: Pick an extreme — don't settle for safe defaults (see Aesthetic Directions below)
- **Constraints**: Technical requirements (framework, performance, accessibility)
- **Differentiation**: What makes this UNFORGETTABLE? What's the one thing someone will remember?

**CRITICAL**: Choose a clear conceptual direction and execute it with precision. Bold maximalism and refined minimalism both work — the key is intentionality, not intensity.

### Context Analysis

- **Product function** — A finance tool needs different energy than a creative tool
- **User type** — Power users want density; occasional users want guidance
- **Emotional job** — Trust? Efficiency? Delight? Focus?
- **Distinctiveness** — Every product has a chance to feel memorable

---

## Aesthetic Directions

Enterprise/SaaS UI has more range than assumed. Select from these directions or blend two:

### Enterprise Personalities

**Precision & Density** — Tight spacing, monochrome, information-forward. For power users who live in the tool. Linear, Raycast, terminal aesthetics.

**Warmth & Approachability** — Generous spacing, soft shadows, friendly colors. For products that feel human. Notion, Coda, collaborative tools.

**Sophistication & Trust** — Cool tones, layered depth, financial gravitas. For products handling money or sensitive data. Stripe, Mercury, enterprise B2B.

**Boldness & Clarity** — High contrast, dramatic negative space, confident typography. For modern, decisive products. Vercel, minimal dashboards.

**Utility & Function** — Muted palette, functional density, clear hierarchy. For products where work matters more than chrome. GitHub, developer tools.

**Data & Analysis** — Chart-optimized, technical but accessible, numbers as first-class citizens. For analytics, metrics, business intelligence.

### Creative Extremes

Push beyond safe defaults. Consider these as starting points:

- **Brutally minimal** — stark, almost uncomfortable restraint
- **Maximalist chaos** — layered, dense, overwhelming intentionally
- **Retro-futuristic** — CRT glow, scan lines, analog-digital fusion
- **Organic/natural** — flowing shapes, earth tones, breathing motion
- **Luxury/refined** — precious metals, silk textures, whisper-quiet
- **Playful/toy-like** — bouncy, colorful, delightfully naive
- **Editorial/magazine** — dramatic typography, white space as content
- **Brutalist/raw** — exposed structure, anti-polish aesthetic
- **Art deco/geometric** — ornate symmetry, gold accents, 1920s glamour
- **Soft/pastel** — gentle gradients, rounded everything, cloud-like
- **Industrial/utilitarian** — exposed grids, warning colors, functional beauty

Pick one or blend two. Commit to a direction that fits the product.

---

## Color Foundation

Avoid defaulting to warm neutrals. Consider the product:

- **Warm foundations** (creams, warm grays) — approachable, comfortable, human
- **Cool foundations** (slate, blue-gray) — professional, trustworthy, serious
- **Pure neutrals** (true grays, black/white) — minimal, bold, technical
- **Tinted foundations** (slight color cast) — distinctive, memorable, branded

**Light or dark?** Dark modes are not inverted light modes. Dark feels technical, focused, premium. Light feels open, approachable, clean. Choose based on context.

**Accent color** — Pick ONE that means something. Blue for trust. Green for growth. Orange for energy. Violet for creativity. Avoid reaching for the same accent every time.

**CRITICAL**: Dominant colors with sharp accents outperform timid, evenly-distributed palettes.

---

## Layout Approach

Content drives layout:

- **Dense grids** — for information-heavy interfaces where users scan and compare
- **Generous spacing** — for focused tasks where users need to concentrate
- **Sidebar navigation** — for multi-section apps with many destinations
- **Top navigation** — for simpler tools with fewer sections
- **Split panels** — for list-detail patterns where context matters

### Spatial Composition

Break conventional layouts through:

- **Asymmetry** — intentional imbalance creates visual interest
- **Overlap** — elements breaking their containers
- **Diagonal flow** — eye movement beyond horizontal/vertical
- **Grid-breaking elements** — strategic rule violations
- **Generous negative space** OR **controlled density** — both work, commit to one

---

## Typography

Typography sets tone and is often the single most impactful design decision.

### Font Selection

Choose fonts that are beautiful, unique, and interesting. **Avoid generic fonts like Arial, Inter, Roboto, and system fonts** — opt for distinctive choices that elevate the aesthetics.

- **System fonts** — fast, native, invisible (only for utility-focused products)
- **Geometric sans** (Geist, Plus Jakarta Sans) — modern, clean, technical
- **Humanist sans** (SF Pro, Satoshi) — warmer, more approachable
- **Monospace influence** — technical, developer-focused, data-heavy
- **Display fonts** — distinctive headlines that anchor the design

**Pair a distinctive display font with a refined body font.** Unexpected, characterful font choices create memorable interfaces.

### Typography Hierarchy

- Headlines: 600 weight, tight letter-spacing (-0.02em)
- Body: 400-500 weight, standard tracking
- Labels: 500 weight, slight positive tracking for uppercase
- Scale: 11px, 12px, 13px, 14px (base), 16px, 18px, 24px, 32px

### Monospace for Data

Numbers, IDs, codes, timestamps belong in monospace. Use `tabular-nums` for columnar alignment. Mono signals "this is data."

---

## Core Craft Principles

These apply regardless of design direction. This is the quality floor.

### The 4px Grid

All spacing uses a 4px base grid:

- `4px` — micro spacing (icon gaps)
- `8px` — tight spacing (within components)
- `12px` — standard spacing (between related elements)
- `16px` — comfortable spacing (section padding)
- `24px` — generous spacing (between sections)
- `32px` — major separation

### Symmetrical Padding

**TLBR must match.** If top padding is 16px, left/bottom/right must also be 16px. Exception: when content naturally creates visual balance.

```css
/* Good */
padding: 16px;
padding: 12px 16px; /* Only when horizontal needs more room */

/* Bad */
padding: 24px 16px 12px 16px;
```

### Border Radius Consistency

Stick to the 4px grid. Sharper corners feel technical, rounder corners feel friendly. Pick a system and commit:

- Sharp: 4px, 6px, 8px
- Soft: 8px, 12px
- Minimal: 2px, 4px, 6px

Avoid mixing systems. Consistency creates coherence.

### Depth & Elevation Strategy

**Match depth approach to design direction.** Depth is a tool, not a requirement:

**Borders-only (flat)** — Clean, technical, dense. Works for utility-focused tools. Linear, Raycast, and many developer tools use almost no shadows — just subtle borders.

**Subtle single shadows** — Soft lift without complexity. A simple `0 1px 3px rgba(0,0,0,0.08)` can be enough. Works for approachable products.

**Layered shadows** — Rich, premium, dimensional. Multiple shadow layers create realistic depth. Stripe and Mercury use this approach.

**Surface color shifts** — Background tints establish hierarchy without any shadows. A card at `#fff` on a `#f8fafc` background already feels elevated.

Choose ONE approach and commit. Mixing flat borders on some cards with heavy shadows on others creates visual inconsistency.

```css
/* Borders-only approach */
--border: rgba(0, 0, 0, 0.08);
--border-subtle: rgba(0, 0, 0, 0.05);
border: 0.5px solid var(--border);

/* Single shadow approach */
--shadow: 0 1px 3px rgba(0, 0, 0, 0.08);

/* Layered shadow approach (when appropriate) */
--shadow-layered:
  0 0 0 0.5px rgba(0, 0, 0, 0.05),
  0 1px 2px rgba(0, 0, 0, 0.04),
  0 2px 4px rgba(0, 0, 0, 0.03),
  0 4px 8px rgba(0, 0, 0, 0.02);
```

**The craft is in the choice, not the complexity.** A flat interface with perfect spacing and typography is more polished than a shadow-heavy interface with sloppy details.

### Card Layouts

Monotonous card layouts are lazy design. A metric card does not have to look like a plan card does not have to look like a settings card. Design each card's internal structure for its specific content — but keep the surface treatment consistent: same border weight, shadow depth, corner radius, padding scale, typography.

### Isolated Controls

UI controls deserve container treatment. Date pickers, filters, dropdowns — these should feel like crafted objects sitting on the page, not plain text with click handlers.

**Never use native form elements for styled UI.** Native `<select>`, `<input type="date">`, and similar elements render OS-native dropdowns and pickers that cannot be styled. Build custom components instead:

- Custom select: trigger button + positioned dropdown menu
- Custom date picker: input + calendar popover
- Custom checkbox/radio: styled div with state management

**Custom select triggers must use `display: inline-flex` with `white-space: nowrap`** to keep text and chevron icons on the same row.

### Iconography

Use **Phosphor Icons** (`@phosphor-icons/react`). Icons clarify, not decorate — if removing an icon loses no meaning, remove it.

Give standalone icons presence with subtle background containers.

### Contrast Hierarchy

Build a four-level system: foreground (primary) → secondary → muted → faint. Use all four consistently.

### Color for Meaning Only

Gray builds structure. Color only appears when it communicates: status, action, error, success. Decorative color is noise.

When building data-heavy interfaces, ask whether each use of color earns its place. Score bars do not need color-coded performance — a single muted color works. Grade badges do not need traffic-light colors — typography can do the hierarchy work.

---

## Motion & Animation

### Philosophy

Focus on high-impact moments: one well-orchestrated page load with staggered reveals (`animation-delay`) creates more delight than scattered micro-interactions.

### Timing

- 150ms for micro-interactions
- 200-250ms for larger transitions
- Easing: `cubic-bezier(0.25, 1, 0.5, 1)`
- No spring/bouncy effects in enterprise UI (unless the aesthetic explicitly calls for playfulness)

### Motion Patterns

- **Staggered reveals** — elements entering in sequence
- **Scroll-triggered effects** — content appearing as user scrolls
- **Hover states that surprise** — unexpected but delightful responses
- **Prioritize CSS-only solutions** for HTML; use Motion library for React when available

---

## Backgrounds & Visual Details

Create atmosphere and depth rather than defaulting to solid colors. Add contextual effects and textures that match the overall aesthetic:

- **Gradient meshes** — organic color blending
- **Noise textures** — tactile, analog feel
- **Geometric patterns** — structured, mathematical
- **Layered transparencies** — depth through overlap
- **Dramatic shadows** — theatrical lighting
- **Decorative borders** — ornate or minimal framing
- **Custom cursors** — interactive personality
- **Grain overlays** — photographic, filmic quality

Match background treatment to the aesthetic direction. A brutalist interface doesn't need gradient meshes. A luxury interface doesn't need geometric patterns.

---

## Navigation Context

Screens need grounding. A data table floating in space feels like a component demo, not a product. Consider including:

- **Navigation** — sidebar or top nav showing location in the app
- **Location indicator** — breadcrumbs, page title, or active nav state
- **User context** — who is logged in, what workspace/org

When building sidebars, consider using the same background as the main content area. Tools like Supabase, Linear, and Vercel rely on a subtle border for separation rather than different background colors.

---

## Dark Mode Considerations

Dark interfaces have different needs:

**Borders over shadows** — Shadows are less visible on dark backgrounds. Lean more on borders for definition. A border at 10-15% white opacity might look nearly invisible but it does its job — resist the urge to make it more prominent.

**Adjust semantic colors** — Status colors (success, warning, error) often need to be slightly desaturated or adjusted for dark backgrounds to avoid feeling harsh.

**Same structure, different values** — The hierarchy system (foreground → secondary → muted → faint) still applies, just with inverted values.

---

## Anti-Patterns

### AI Slop to Avoid

NEVER use generic AI-generated aesthetics:

- **Overused font families**: Inter, Roboto, Arial, system fonts for creative work
- **Clichéd color schemes**: particularly purple gradients on white backgrounds, the ubiquitous blue (#3B82F6)
- **Predictable layouts**: same hero section, same card grid, same footer
- **Cookie-cutter patterns**: lacking context-specific character
- **Convergent choices**: Space Grotesk appearing in every generation

Every design should be different. Vary between light and dark themes, different fonts, different aesthetics. NEVER converge on common choices across generations.

### Never Do This

- Dramatic drop shadows (`box-shadow: 0 25px 50px...`)
- Large border radius (16px+) on small elements
- Asymmetric padding without clear reason
- Pure white cards on colored backgrounds
- Thick borders (2px+) for decoration
- Excessive spacing (margins > 48px between sections)
- Spring/bouncy animations in enterprise contexts
- Gradients for decoration
- Multiple accent colors in one interface

### Self-Check Questions

- "Did I think about what this product needs, or did I default?"
- "Does this direction fit the context and users?"
- "Does this element feel crafted?"
- "Is my depth strategy consistent and intentional?"
- "Are all elements on the grid?"
- "Would someone remember this interface tomorrow?"
- "Am I reaching for the same solution I used last time?"

---

## The Standard

Every interface should look designed by a team that obsesses over 1-pixel differences. Not stripped — *crafted*. And designed for its specific context.

Different products want different things. A developer tool wants precision and density. A collaborative product wants warmth and space. A financial product wants trust and sophistication. Let the product context guide the aesthetic.

**Match implementation complexity to the aesthetic vision.** Maximalist designs need elaborate code with extensive animations and effects. Minimalist or refined designs need restraint, precision, and careful attention to spacing, typography, and subtle details. Elegance comes from executing the vision well.

The goal: intricate minimalism with appropriate personality. Same quality bar, context-driven execution.

**Remember: Claude is capable of extraordinary creative work. Don't hold back — show what can truly be created when thinking outside the box and committing fully to a distinctive vision.**
