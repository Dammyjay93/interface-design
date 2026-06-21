# Core Craft Principles

These apply regardless of design direction. This is the quality floor.

---

## Surface & Token Architecture

Professional interfaces don't pick colors randomly — they build systems. Understanding this architecture is the difference between "looks okay" and "feels like a real product."

### The Primitive Foundation

Every color in your interface should trace back to a small set of primitives:

- **Foreground** — text colors (primary, secondary, muted)
- **Background** — surface colors (base, elevated, overlay)
- **Border** — edge colors (default, subtle, strong)
- **Brand** — your primary accent
- **Semantic** — functional colors (destructive, warning, success)

Don't invent new colors. Map everything to these primitives.

### Surface Elevation Hierarchy

Surfaces stack. A dropdown sits above a card which sits above the page. Build a numbered system:

```
Level 0: Base background (the app canvas)
Level 1: Cards, panels (same visual plane as base)
Level 2: Dropdowns, popovers (floating above)
Level 3: Nested dropdowns, stacked overlays
Level 4: Highest elevation (rare)
```

In dark mode, higher elevation = slightly lighter. In light mode, higher elevation = slightly lighter or uses shadow. The principle: **elevated surfaces need visual distinction from what's beneath them.**

### The Subtlety Principle

This is where most interfaces fail. Study Vercel, Supabase, Linear — their surfaces are **barely different** but still distinguishable. Their borders are **light but not invisible**.

**For surfaces:** The difference between elevation levels should be subtle — a few percentage points of lightness, not dramatic jumps. In dark mode, surface-100 might be 7% lighter than base, surface-200 might be 9%, surface-300 might be 12%. You can barely see it, but you feel it.

**For borders:** Borders should define regions without demanding attention. Use low opacity (0.05-0.12 alpha for dark mode, slightly higher for light). The border should disappear when you're not looking for it, but be findable when you need to understand the structure.

**The test:** Squint at your interface. You should still perceive the hierarchy — what's above what, where regions begin and end. But no single border or surface should jump out at you. If borders are the first thing you notice, they're too strong. If you can't find where one region ends and another begins, they're too subtle.

**Common AI mistakes to avoid:**
- Borders that are too visible (1px solid gray instead of subtle rgba)
- Surface jumps that are too dramatic (going from dark to light instead of dark to slightly-less-dark)
- Using different hues for different surfaces (gray card on blue background)
- Harsh dividers where subtle borders would do

### Text Hierarchy via Tokens

Don't just have "text" and "gray text." Build four levels:

- **Primary** — default text, highest contrast
- **Secondary** — supporting text, slightly muted
- **Tertiary** — metadata, timestamps, less important
- **Muted** — disabled, placeholder, lowest contrast

Use all four consistently. If you're only using two, your hierarchy is too flat.

### Border Progression

Borders aren't binary. Build a scale:

- **Default** — standard borders
- **Subtle/Muted** — softer separation
- **Strong** — emphasis, hover states
- **Stronger** — maximum emphasis, focus rings

Match border intensity to the importance of the boundary.

### Dedicated Control Tokens

Form controls (inputs, checkboxes, selects) have specific needs. Don't just reuse surface tokens — create dedicated ones:

- **Control background** — often different from surface backgrounds
- **Control border** — needs to feel interactive
- **Control focus** — clear focus indication

This separation lets you tune controls independently from layout surfaces.

### Context-Aware Bases

Different areas of your app might need different base surfaces:

- **Marketing pages** — might use darker/richer backgrounds
- **Dashboard/app** — might use neutral working backgrounds
- **Sidebar** — might differ from main canvas

The surface hierarchy works the same way — it just starts from a different base.

### Alternative Backgrounds for Depth

Beyond shadows, use contrasting backgrounds to create depth. An "alternative" or "inset" background makes content feel recessed. Useful for:

- Empty states in data grids
- Code blocks
- Inset panels
- Visual grouping without borders

---

## Spacing System

Pick a base unit (4px and 8px are common) and use multiples throughout. The specific number matters less than consistency — every spacing value should be explainable as "X times the base unit."

Build a scale for different contexts:
- **Micro spacing** (icon gaps, tight element pairs)
- **Component spacing** (within buttons, inputs, cards)
- **Section spacing** (between related groups)
- **Major separation** (between distinct sections)

## Symmetrical Padding

TLBR must match. If top padding is 16px, left/bottom/right must also be 16px. Exception: when content naturally creates visual balance.

```css
/* Good */
padding: 16px;
padding: 12px 16px; /* Only when horizontal needs more room */

/* Bad */
padding: 24px 16px 12px 16px;
```

## Border Radius Consistency

Sharper corners feel technical, rounder corners feel friendly. Pick a scale that fits your product's personality and use it consistently.

The key is having a system: small radius for inputs and buttons, medium for cards, large for modals or containers. Don't mix sharp and soft randomly — inconsistent radius is as jarring as inconsistent spacing.

## Depth & Elevation Strategy

Match your depth approach to your design direction. Choose ONE and commit:

**Borders-only (flat)** — Clean, technical, dense. Works for utility-focused tools where information density matters more than visual lift. Linear, Raycast, and many developer tools use almost no shadows — just subtle borders to define regions.

**Subtle single shadows** — Soft lift without complexity. A simple `0 1px 3px rgba(0,0,0,0.08)` can be enough. Works for approachable products that want gentle depth.

**Layered shadows** — Rich, premium, dimensional. Multiple shadow layers create realistic depth. Stripe and Mercury use this approach. Best for cards that need to feel like physical objects.

**Surface color shifts** — Background tints establish hierarchy without any shadows. A card at `#fff` on a `#f8fafc` background already feels elevated.

```css
/* Borders-only approach */
--border: rgba(0, 0, 0, 0.08);
--border-subtle: rgba(0, 0, 0, 0.05);
--border-strong: rgba(0, 0, 0, 0.12);

/* Subtle shadows approach */
--shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.08);
--shadow-md: 0 2px 6px rgba(0, 0, 0, 0.1);

/* Layered shadows approach */
--shadow-card: 0 1px 3px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.05);

/* Surface color shifts approach */
--surface-base: #f8fafc;
--surface-elevated: #ffffff;
--surface-overlay: #ffffff;
```

## Typography System

Build distinct levels distinguishable at a glance. Don't rely on size alone — combine size, weight, and letter-spacing.

```css
/* Headline - presence and weight */
--font-headline: 24px / 600 / -0.02em;

/* Body - comfortable readability */
--font-body: 14px / 400 / 0em;

/* Label - medium weight for small sizes */
--font-label: 13px / 500 / 0.01em;

/* Data - monospace with tabular numbers */
--font-data: 13px / 400 / 0em / 'SF Mono', Consolas, monospace;
```

### Tabular Numbers for Data

When displaying numbers that need to align (tables, metrics, financial data), use `font-variant-numeric: tabular-nums`. This ensures each digit has the same width, preventing jitter when values change.

```css
.metric-value {
  font-variant-numeric: tabular-nums;
}
```

## Card Layouts

A metric card doesn't have to look like a plan card doesn't have to look like a settings card. Design each card's internal structure for its specific content — but keep the surface treatment consistent: same border weight, shadow depth, corner radius, padding scale.

**Metric Card:**
- Large number, small label
- Icon or sparkline
- Minimal padding for density

**Plan Card:**
- Title, description, price
- Feature list
- More generous padding

**Settings Card:**
- Section headers
- Form controls
- Consistent vertical rhythm

## Form Controls

### Custom Selects and Date Pickers

Native `<select>` and `<input type="date">` render OS-native elements that cannot be styled consistently. Build custom components:

```tsx
// Custom Select
function Select({ value, onChange, options }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="select-container">
      <button
        className="select-trigger"
        onClick={() => setOpen(!open)}
      >
        {options.find(o => o.value === value)?.label}
      </button>
      {open && (
        <div className="select-dropdown">
          {options.map(option => (
            <button
              key={option.value}
              onClick={() => {
                onChange(option.value);
                setOpen(false);
              }}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
```

### Input States

Every input needs states: default, hover, focus, disabled, error.

```css
.input {
  background: var(--control-bg);
  border: 1px solid var(--control-border);
  padding: 10px 12px;
  border-radius: 6px;
}

.input:hover {
  border-color: var(--control-border-hover);
}

.input:focus {
  outline: none;
  border-color: var(--control-border-focus);
  box-shadow: 0 0 0 2px var(--control-focus-ring);
}

.input:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.input.error {
  border-color: var(--color-destructive);
}
```

## Iconography

Icons clarify, not decorate — if removing an icon loses no meaning, remove it.

### Icon Sets

Choose one icon set and stick with it. Common options:
- Lucide (clean, modern)
- Heroicons (solid, friendly)
- Phosphor (consistent weights)
- Tabler (outline, technical)

### Standalone Icons

Give standalone icons presence with subtle background containers:

```css
.icon-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 6px;
  background: var(--surface-elevated);
  border: 1px solid var(--border);
}

.icon-button:hover {
  background: var(--surface-overlay);
}
```

## Animation

Fast micro-interactions, smooth easing. Larger transitions can be slightly longer.

```css
/* Micro-interactions */
.button {
  transition: background 150ms ease, transform 100ms ease;
}

/* Larger transitions */
.modal {
  transition: opacity 200ms ease, transform 200ms ease;
}

/* Use deceleration easing */
.ease-out {
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
}
```

Avoid spring/bounce in professional interfaces — they feel playful, not precise.

## States

Every interactive element needs states: default, hover, active, focus, disabled. Data needs states too: loading, empty, error. Missing states feel broken.

```css
/* Button states */
.button {
  /* default */
}

.button:hover {
  /* hover */
}

.button:active {
  /* active/pressed */
}

.button:focus-visible {
  /* focus */
}

.button:disabled {
  /* disabled */
}

/* Data states */
.loading {
  /* loading indicator */
}

.empty {
  /* empty state message */
}

.error {
  /* error message */
}
```

## Navigation Context

Screens need grounding. A data table floating in space feels like a component demo, not a product. Include navigation showing where you are in the app, location indicators, and user context.

### Sidebar Design

When building sidebars, consider same background as main content with border separation rather than different colors. This creates a unified visual space.

```css
/* Good - unified space */
.app {
  display: flex;
}

.sidebar {
  width: 240px;
  background: var(--surface-base);
  border-right: 1px solid var(--border);
}

.main {
  flex: 1;
  background: var(--surface-base);
}

/* Avoid - fragmented space */
.sidebar {
  background: #1e293b; /* Different from main */
}

.main {
  background: #0f172a;
}
```

## Dark Mode

Dark interfaces have different needs:

### Shadows are Less Visible

On dark backgrounds, shadows don't show up well. Lean on borders for definition instead.

```css
/* Light mode - shadows work */
.card-light {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

/* Dark mode - use borders */
.card-dark {
  border: 1px solid rgba(255, 255, 255, 0.08);
}
```

### Semantic Colors Need Desaturation

Success, warning, and error colors often need slight desaturation in dark mode to avoid eye strain.

```css
/* Light mode */
--success: #22c55e;
--warning: #f59e0b;
--error: #ef4444;

/* Dark mode - slightly desaturated */
--success: #4ade80;
--warning: #fbbf24;
--error: #f87171;
```

### Hierarchy Still Applies

The surface elevation system works the same way — just with inverted values. Higher elevation = lighter in dark mode too.

```css
/* Dark mode surfaces */
--surface-base: #0f172a;
--surface-1: #1e293b;  /* 7% lighter */
--surface-2: #334155;  /* 9% lighter */
--surface-3: #475569;  /* 12% lighter */
```

## Code Examples

### Complete Token System

```css
:root {
  /* Foreground - text hierarchy */
  --foreground-primary: #0f172a;
  --foreground-secondary: #475569;
  --foreground-tertiary: #94a3b8;
  --foreground-muted: #cbd5e1;

  /* Background - surface elevation */
  --surface-base: #ffffff;
  --surface-1: #f8fafc;
  --surface-2: #f1f5f9;
  --surface-3: #e2e8f0;

  /* Border - separation hierarchy */
  --border: rgba(0, 0, 0, 0.08);
  --border-subtle: rgba(0, 0, 0, 0.05);
  --border-strong: rgba(0, 0, 0, 0.12);
  --border-stronger: rgba(0, 0, 0, 0.16);

  /* Brand */
  --brand: #3b82f6;
  --brand-hover: #2563eb;

  /* Semantic */
  --success: #22c55e;
  --warning: #f59e0b;
  --error: #ef4444;

  /* Control tokens */
  --control-bg: #ffffff;
  --control-border: rgba(0, 0, 0, 0.1);
  --control-border-hover: rgba(0, 0, 0, 0.15);
  --control-border-focus: #3b82f6;
  --control-focus-ring: rgba(59, 130, 246, 0.2);

  /* Spacing */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;

  /* Radius */
  --radius-sm: 4px;
  --radius-md: 6px;
  --radius-lg: 8px;
  --radius-xl: 12px;
}
```

### Dark Mode Override

```css
@media (prefers-color-scheme: dark) {
  :root {
    /* Foreground - inverted */
    --foreground-primary: #f8fafc;
    --foreground-secondary: #cbd5e1;
    --foreground-tertiary: #64748b;
    --foreground-muted: #475569;

    /* Background - inverted */
    --surface-base: #0f172a;
    --surface-1: #1e293b;
    --surface-2: #334155;
    --surface-3: #475569;

    /* Border - light on dark */
    --border: rgba(255, 255, 255, 0.08);
    --border-subtle: rgba(255, 255, 255, 0.05);
    --border-strong: rgba(255, 255, 255, 0.12);
    --border-stronger: rgba(255, 255, 255, 0.16);

    /* Control tokens */
    --control-bg: #1e293b;
    --control-border: rgba(255, 255, 255, 0.1);
    --control-border-hover: rgba(255, 255, 255, 0.15);
    --control-border-focus: #60a5fa;
    --control-focus-ring: rgba(96, 165, 250, 0.2);

    /* Semantic - desaturated */
    --success: #4ade80;
    --warning: #fbbf24;
    --error: #f87171;
  }
}
```
