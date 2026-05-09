# Core Craft Principles

These principles are the quality floor for product interfaces.

## Surface And Token Architecture

Every color should trace back to a small primitive set:

- Foreground: primary, secondary, tertiary, muted text.
- Background: app canvas, elevated surfaces, overlays, inset surfaces.
- Border: default, subtle, strong, focus.
- Brand: primary action and identity.
- Semantic: destructive, warning, success, information.
- Control: input background, input border, focus ring, disabled state.

Avoid one-off colors. Map component values to primitives.

## Surface Elevation

Surfaces stack. A popover sits above a card, which sits above the page.

```text
Level 0: Base canvas
Level 1: Cards and panels
Level 2: Dropdowns and popovers
Level 3: Nested overlays
Level 4: Rare highest elevation
```

In dark mode, higher elevation is usually slightly lighter. In light mode, higher elevation can use subtle lightness shifts or shadows. Each step should be a few percentage points, not a dramatic jump.

## Borders

Borders should define structure without demanding attention. Prefer low-opacity `rgba()` values over harsh hex borders. Build a border scale:

- Default separation.
- Subtle separation.
- Strong hover or selected state.
- Focus emphasis.

If borders are the first thing you see, they are too strong. If sections cannot be found, they are too weak.

## Spacing

Pick a base unit and stick to multiples. Common choices are 4px for dense tools and 8px for more spacious products.

Use scale tiers:

- Micro: icon gaps, tight element pairs.
- Component: buttons, inputs, card internals.
- Section: groups inside a screen.
- Major: separate workflows or page regions.

Avoid arbitrary values such as 17px or 22px unless they are derived from a documented component pattern.

## Padding

Keep padding visually symmetrical unless content naturally requires asymmetry. A card with `24px 16px 12px 16px` usually signals an unresolved layout decision.

## Depth Strategy

Choose one:

- Borders-only: dense, technical, utility-focused.
- Subtle shadows: approachable, soft lift.
- Layered shadows: premium, dimensional.
- Surface color shifts: hierarchy through tonal changes.

Do not mix strategies randomly.

## Radius

Sharper corners feel technical. Rounder corners feel friendly. Use a scale:

- Small for inputs and buttons.
- Medium for cards.
- Large for modals and large containers.

Avoid large radius on small elements.

## Typography

Build hierarchy with size, weight, opacity, and tracking. Do not rely on size alone.

- Headlines: heavier, tighter, clear presence.
- Body: readable weight and line height.
- Labels: medium weight, compact.
- Data: monospace or tabular figures when alignment matters.

## Cards

Different card types can have different internal layouts. Keep their surface treatment consistent: border, shadow, radius, padding, and text levels should come from the same system.

## Controls

Native controls are acceptable when they preserve accessibility, styling, and product requirements. Use custom controls when native rendering cannot meet the interaction or visual system, such as fully styled selects, calendar popovers, or multi-state filters.

Custom control triggers should keep label and icon aligned, usually with `inline-flex`, `align-items: center`, and `white-space: nowrap`.

## Iconography

Icons clarify meaning. If removing an icon changes nothing, remove it. Use one icon set per interface surface and align icons optically with text.

## Animation

Keep motion fast and functional.

- Micro interactions: around 120-180ms.
- Larger transitions: around 200-250ms.
- Easing: smooth deceleration.

Avoid spring or bounce unless the product deliberately needs a playful feel.

## Data Interfaces

Numbers, timestamps, IDs, and codes often need monospace or tabular numbers. Data screens also need loading, empty, error, filtered, and permission states.

## Navigation Context

Screens need grounding: navigation, active location, workspace/user context, and a clear route back. A data table floating alone feels like a component demo, not software.

## Dark Mode

Dark UI relies more on borders and surface shifts than shadows. Desaturate semantic colors slightly and test contrast separately from light mode.
