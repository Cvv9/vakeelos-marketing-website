# VakeelOS — Design Language

A portable spec for the VakeelOS visual system. The marketing site at this
repo is the canonical implementation (`src/app/globals.css`); this document
extracts those decisions into a token contract that the **product app** can
adopt verbatim, plus an inverted light surface scale for in-product workflows
where dwell-time and document density make cinema-black impractical.

> **Mode philosophy.** Marketing runs in **theatre mode** — cinema black,
> warm grain, slow motion, screen-tested for first-impression. The app runs
> in **chamber mode** — calm warm ivory, high legibility for 8-hour days at
> a desk. Both modes draw from the same brand and ink hues; only the paper
> and rule scales invert.

---

## 1. Brand foundations

| Pillar         | Decision                                                                |
|----------------|-------------------------------------------------------------------------|
| Posture        | Calm, considered, made-in-India. Not flashy SaaS, not American big-firm.|
| Reference      | Joseph Law / Milan Webionics — leather-and-foil luxury legal, restrained.|
| Voice          | Quiet authority. Short sentences. No exclamation marks.                 |
| Hero feeling   | A chamber after hours: dark wood, lamp light, paper.                    |
| App feeling    | Causelist on a clean desk: ivory paper, ink that holds up at 14px.      |

Two emotional anchors recur across every surface: **paper** (the field
behind everything) and **ink** (everything you read). Brand accent — a
muted cream-gold — appears sparingly: links on hover, accent words inside
headlines, focus rings, status pulses. Never as a dominant fill.

---

## 2. Color system

All hues are authored in **OKLCH** for perceptual uniformity, with sRGB hex
fallbacks for asset pipelines (Figma, email, OG images) that don't speak
OKLCH yet. The product app should consume the OKLCH values.

### 2.1 Token tiers

The system has three tiers. Components consume **semantic** tokens; semantic
tokens resolve to **scale** tokens; scale tokens resolve to **primitive**
hues. Never reach across tiers.

```
primitive  →  scale (paper-N, ink-N)  →  semantic (surface, text-muted, …)
```

### 2.2 Theatre mode (marketing site — current)

Authored in `src/app/globals.css:3`. Reproduced here for parity.

| Token            | OKLCH                       | Hex      | Role                                        |
|------------------|-----------------------------|----------|---------------------------------------------|
| `--paper`        | `oklch(0.115 0.005 80)`     | `#0E0D0B`| Page field. Cinema black, warm-tinted.      |
| `--paper-2`      | `oklch(0.145 0.006 80)`     | `#15130F`| Raised tile / nav.                          |
| `--paper-3`      | `oklch(0.18 0.008 80)`      | `#1B1814`| Hovered tile, popover.                      |
| `--ink`          | `oklch(0.96 0.008 80)`      | `#F5F2EC`| Primary text. Warm off-white, never `#fff`. |
| `--ink-2`        | `oklch(0.78 0.010 80)`      | `#C2BCB1`| Secondary text, body on dark.               |
| `--ink-3`        | `oklch(0.62 0.012 80)`      | `#928B7E`| Eyebrows, captions, mono labels.            |
| `--ink-4`        | `oklch(0.48 0.012 80)`      | `#6E6759`| Lowest-rank text. Disabled.                 |
| `--rule`         | `oklch(0.25 0.006 80)`      | `#272420`| Hairline divider.                           |
| `--rule-strong`  | `oklch(0.40 0.008 80)`      | `#494337`| Visible divider, table edges.               |
| `--brand`        | `oklch(0.82 0.085 75)`      | `#E5C188`| Cream-gold accent.                          |
| `--brand-deep`   | `oklch(0.72 0.105 70)`      | `#CBA260`| Hover, accent words, link hover.            |
| `--brand-soft`   | `oklch(0.92 0.05 75)`       | `#F2DFB9`| Tinted backgrounds, badges.                 |

**Rules.**
- Body text on `paper` uses `ink`. Body text on `paper-2` / `paper-3` still
  uses `ink` — lifting the surface, not the type, preserves the warm read.
- Brand fills are **buttons-only** in theatre mode (`Button variant="saffron"`).
  Brand on type appears via `.accent` / `.serif-italic`, which use
  `--brand-deep` so the gold doesn't blow out at 144 px.
- Selection uses `oklch(0.82 0.10 75 / 0.30)` over `--ink` (see
  `src/app/globals.css:191`).

### 2.3 Chamber mode (product app — new)

Inverted paper, same ink hues. Use this for `app.vakeelos.com`. The brand
ramp is unchanged — it reads correctly on both fields.

| Token            | OKLCH                       | Hex      | Role                                       |
|------------------|-----------------------------|----------|--------------------------------------------|
| `--paper`        | `oklch(0.985 0.004 80)`     | `#FBF9F4`| Page field. Warm ivory.                    |
| `--paper-2`      | `oklch(0.965 0.005 80)`     | `#F4F0E8`| Card, panel.                               |
| `--paper-3`      | `oklch(0.935 0.006 80)`     | `#E9E4D9`| Hovered row, popover, secondary tab.       |
| `--ink`          | `oklch(0.18 0.012 80)`      | `#1B1814`| Primary text. Warm near-black.             |
| `--ink-2`        | `oklch(0.36 0.012 80)`      | `#4F4839`| Body on chamber field.                     |
| `--ink-3`        | `oklch(0.52 0.012 80)`      | `#787058`| Eyebrows, helper text, mono labels.        |
| `--ink-4`        | `oklch(0.66 0.010 80)`      | `#A29A87`| Placeholder, disabled label.               |
| `--rule`         | `oklch(0.88 0.006 80)`      | `#D9D3C5`| Hairline divider.                          |
| `--rule-strong`  | `oklch(0.74 0.008 80)`      | `#B0A793`| Visible divider, table edges.              |
| `--brand`        | `oklch(0.72 0.105 70)`      | `#CBA260`| Default brand on light. **Note: shifted**. |
| `--brand-deep`   | `oklch(0.58 0.115 65)`      | `#9E7531`| Hover, accent words, link hover.           |
| `--brand-soft`   | `oklch(0.94 0.04 78)`       | `#F4E5C7`| Tinted backgrounds, badges, selection.     |

**Why brand shifts between modes.** `oklch(0.82 …)` is light on dark; on
ivory it has insufficient contrast for CTAs. The chamber-mode default is one
step deeper. Both modes still expose `--brand-deep` for the hover state.

### 2.4 Status colors (shared across both modes)

The marketing site doesn't ship status colors yet — the product app needs
them. Add this scale to both modes; only the **`*-soft`** background shifts.

| Token            | OKLCH (theatre)             | OKLCH (chamber)             | Use                              |
|------------------|-----------------------------|------------------------------|----------------------------------|
| `--success`      | `oklch(0.78 0.13 155)`      | `oklch(0.55 0.13 155)`       | Hearing scheduled, paid invoice. |
| `--success-soft` | `oklch(0.30 0.05 155)`      | `oklch(0.94 0.04 155)`       | Status pill background.          |
| `--warn`         | `oklch(0.82 0.13 75)`       | `oklch(0.65 0.13 75)`        | Causelist drift, due-soon.       |
| `--warn-soft`    | `oklch(0.30 0.05 75)`       | `oklch(0.95 0.04 75)`        | Pill / row tint.                 |
| `--danger`       | `oklch(0.65 0.18 25)`       | `oklch(0.55 0.20 25)`        | Adjournment, missed filing.      |
| `--danger-soft`  | `oklch(0.30 0.06 25)`       | `oklch(0.94 0.05 25)`        | Pill / row tint.                 |
| `--info`         | `oklch(0.72 0.10 240)`      | `oklch(0.50 0.13 240)`       | Process update, neutral.         |
| `--info-soft`    | `oklch(0.30 0.05 240)`      | `oklch(0.94 0.04 240)`       | Pill background.                 |

Status hues lean toward earth — green is forest, red is brick, blue is ink,
amber is brass. No primary-school chroma; nothing competes with brand.

### 2.5 Semantic mappings

Semantic tokens resolve identically in both modes — only the underlying
scale flips. **Components must consume these names**, never `--paper-3`
directly.

| Semantic              | Resolves to        | Used by                                          |
|-----------------------|--------------------|--------------------------------------------------|
| `--surface`           | `--paper`          | `<body>`, hero, full-bleed sections.             |
| `--surface-raised`    | `--paper-2`        | Cards, modals, top nav.                          |
| `--surface-hover`     | `--paper-3`        | Tile hover, table-row hover, popover.            |
| `--text`              | `--ink`            | Primary copy, headlines.                         |
| `--text-muted`        | `--ink-2`          | Body paragraphs, descriptions.                   |
| `--text-subtle`       | `--ink-3`          | Eyebrows, captions, secondary metadata.          |
| `--text-faint`        | `--ink-4`          | Disabled, placeholder, decorative numerals.      |
| `--border`            | `--rule`           | Hairlines, divider lines.                        |
| `--border-strong`     | `--rule-strong`    | Table outlines, focus targets.                   |
| `--accent`            | `--brand`          | CTAs, focus ring, brand fills.                   |
| `--accent-pressed`    | `--brand-deep`     | Hover/active CTA, accent words inside headlines. |
| `--accent-tint`       | `--brand-soft`     | Status badges, selection highlight.              |
| `--ring`              | `--brand`          | `focus-visible` outline.                         |

### 2.6 Accessibility

All combinations below meet **WCAG AA** at 14 px and above. Spot-check any
new pair with the WebAIM contrast checker.

| Pair (theatre)              | Ratio | Verdict       |
|-----------------------------|-------|---------------|
| `ink` on `paper`            | 17.4  | AAA           |
| `ink-2` on `paper`          | 9.6   | AAA           |
| `ink-3` on `paper`          | 5.8   | AA            |
| `ink-4` on `paper`          | 3.4   | AA large only |
| `paper` on `brand`          | 8.9   | AAA           |
| `ink` on `brand`            | 12.0  | AAA           |

| Pair (chamber)              | Ratio | Verdict       |
|-----------------------------|-------|---------------|
| `ink` on `paper`            | 16.1  | AAA           |
| `ink-2` on `paper`          | 8.4   | AAA           |
| `ink-3` on `paper`          | 5.0   | AA            |
| `paper` on `brand`          | 4.9   | AA            |
| `ink` on `brand`            | 7.0   | AAA           |

`ink-4` is **decorative-only** in both modes. Do not put real content there.

---

## 3. Typography

### 3.1 Families

| Role     | Family          | Weights used | Loaded in                            |
|----------|-----------------|--------------|--------------------------------------|
| Sans     | **Inter**       | 400, 500, 600, 700 | `src/app/layout.tsx:7`         |
| Mono     | **JetBrains Mono** | 400, 500       | `src/app/layout.tsx:14`        |

Inter is set with `ss01`, `ss03`, `cv11`, `kern` features — these turn on
the single-storey `a`, the straight-tail `l`, and tabular-friendly numerics.
Carry both `font-feature-settings` declarations into the product app
verbatim (`src/app/globals.css:67`).

There is **no serif**. The legacy `.serif-italic` class is retained as a
no-op alias and now renders as a semibold cream-gold accent
(`src/app/globals.css:91`). Don't reintroduce a serif — italic legalese in
display sizes was tested and rejected during the Joseph-Law audit.

### 3.2 Type scale

Sizes given in pixels. Letter-spacing tracks down hard at display sizes.

| Token        | Size  | Line height | Tracking  | Weight | Use                      |
|--------------|-------|-------------|-----------|--------|--------------------------|
| `display-xl` | 144   | 0.96        | -0.035em  | 700    | Hero word stack.         |
| `display-lg` | 96    | 0.98        | -0.03em   | 700    | Section openers.         |
| `display`    | 56    | 1.02        | -0.025em  | 600    | Sub-hero.                |
| `h1`         | 40    | 1.10        | -0.02em   | 600    | Page titles in app.      |
| `h2`         | 28    | 1.20        | -0.015em  | 600    | Card titles, modals.     |
| `h3`         | 20    | 1.30        | -0.01em   | 600    | Field-group headers.     |
| `body-lg`    | 18    | 1.55        | 0         | 400    | Lead paragraph.          |
| `body`       | 16    | 1.55        | 0         | 400    | Default running text.    |
| `body-sm`    | 14    | 1.50        | 0         | 400    | Helper, captions.        |
| `meta`       | 13.5  | 1.40        | 0         | 500    | Buttons (default size).  |
| `mono-sm`    | 11    | 1.30        | 0.22em    | 500    | Eyebrows, status labels. |
| `mono-xs`    | 10    | 1.30        | 0.22em    | 500    | Video chrome, footnotes. |

**Mono usage rule.** Mono is reserved for things that read as labels, codes,
or co-ordinates: causelist IDs, court numbers, eyebrows above sections, time
stamps. Never as body. The `0.22em` tracking is the visible signature of
the system — a tighter mono will not feel right.

### 3.3 Accent class

Inside a headline, emphasised words use `.accent`
(`src/app/globals.css:84`):

```css
.accent {
  font-weight: 600;
  color: var(--accent-pressed); /* brand-deep */
  letter-spacing: -0.01em;
}
```

The product app should keep this class so cross-surface copy ports without
edits.

---

## 4. Space, radius, and layout

### 4.1 Spacing scale

8-pt grid, exposed as Tailwind defaults. The system uses two house values
that do not appear on Tailwind's standard scale:

- **Section vertical rhythm**: `pt-20 pb-12` on hero (`80 / 48`), `py-24`
  on subsequent sections.
- **Page horizontal gutter**: `px-6 lg:px-10` (24 / 40). Container is
  `max-w-7xl`.

### 4.2 Radius

| Token       | Value | Use                                                    |
|-------------|-------|--------------------------------------------------------|
| `radius-xs` | 2 px  | Hairline tags, table cells.                            |
| `radius-sm` | **3 px** | **Default. Buttons, inputs, cards, video tiles.**   |
| `radius-md` | 6 px  | Image thumbnails, avatars (square variant).            |
| `radius-pill` | 999 px | Hero CTAs, marquee chips, status badges.            |

The `3 px` button radius (`rounded-[3px]` in `src/components/ui/button.tsx:20`)
is intentional and distinguishes the system from generic SaaS — keep it.

### 4.3 Elevation

There are **no drop shadows** on resting surfaces in theatre mode — the
warm-tinted `paper-2` / `paper-3` lift handles depth. Shadows reappear only
on **floating pills** (the `.float-soft` keyframe at
`src/app/globals.css:339`), where they exist to lift the pill off cinema
black.

In chamber mode, allow one resting shadow for cards over the ivory paper:

```css
--shadow-card: 0 1px 2px oklch(0.18 0.012 80 / 0.04),
               0 4px 12px oklch(0.18 0.012 80 / 0.06);
--shadow-pop:  0 8px 24px oklch(0.18 0.012 80 / 0.10),
               0 2px 6px  oklch(0.18 0.012 80 / 0.08);
```

---

## 5. Motion

Durations and easings are codified in `globals.css`. The product app should
import the same keyframes and reuse them — consistent motion across
marketing and app reads as one product.

| Curve                              | Use                                       |
|------------------------------------|-------------------------------------------|
| `cubic-bezier(0.65, 0, 0.35, 1)`   | Wipes, mask reveals, row-rule fills.      |
| `cubic-bezier(0.2, 0.8, 0.2, 1)`   | Lifts, fade-ups, hero rises.              |
| `cubic-bezier(0.4, 0, 0.2, 1)`     | Button press, micro-interactions.         |

| Duration   | Use                                              |
|------------|--------------------------------------------------|
| `180 ms`   | Press / active state.                            |
| `300 ms`   | Background and color tween on tile hover.        |
| `500 ms`   | Row-rule fill on services list.                  |
| `850 ms`   | `lift-in` entrances.                             |
| `1100 ms`  | `wipe-in`, `mask-rise`.                          |
| `4–6 s`    | Idle: `float-icon`, `float-soft`, `spin-slow`.   |

**Reduced-motion contract.** Every animated class is gated by the
`prefers-reduced-motion` block at `src/app/globals.css:359`. Carry that
block forward — never ship a new motion class without adding it to the
reduce list.

---

## 6. Components — primitives

### 6.1 Button

Five variants, three sizes (`src/components/ui/button.tsx`):

| Variant   | Theatre fill / text          | Chamber fill / text          | Use                            |
|-----------|------------------------------|------------------------------|--------------------------------|
| `ink`     | ink fill, paper text         | ink fill, paper text         | Primary CTA. Hero "Start free trial". |
| `saffron` | brand fill, paper text       | brand fill, ink text         | Branded marketing CTAs.        |
| `outline` | transparent, ink text, ink-15 border | transparent, ink text, ink-20 border | Secondary CTAs, "Watch the walkthrough". |
| `ghost`   | transparent, ink text, hover ink-5% | same                  | Toolbar buttons, nav.          |
| `link`    | inline, ink text, hover brand-deep | same                   | Inline text links.             |

Sizes: `h-8` (sm) / `h-9` (default) / `h-12` (lg) / `h-9 w-9` (icon). Hero
CTAs override to `rounded-full px-6` and combine with `.float-soft` for the
cinema-pill lift — that combination is **marketing-only**; in app, use the
default `rounded-[3px]`.

### 6.2 Card / tile

```
border: 1px solid var(--border)
background: var(--surface-raised)
radius: 3px
hover: background → var(--surface-hover); transform: translateY(-1px)
transition: 300ms ease for color, 400ms cubic-bezier(0.2, 0.8, 0.2, 1) for transform
```

Encoded as `.tile` at `src/app/globals.css:172`. Reuse, don't reinvent.

### 6.3 Badge / status pill

```
height: 22px
padding: 0 10px
radius: 999px (pill)
border: 1px solid var(--border)
background: var(--accent-tint)  /* or status-soft */
text: 11px / 500 / mono / 0.18em tracking / var(--text)
```

Use status `*-soft` tokens for the background and the matching base hue for
the leading dot.

### 6.4 Input (chamber-only — app)

```
height: 36px
radius: 3px
background: var(--surface)
border: 1px solid var(--border)
text: 14px / 400 / var(--text)
placeholder: var(--text-faint)
focus: border var(--accent), ring 2px var(--accent) at 0.30 alpha
```

### 6.5 Row-rule list

Borrow `.row-rule` (`src/app/globals.css:249`) for any list that should
read like a causelist or service ledger — full-width hairline rows that
invert on hover (paper background → ink, with the leading number going
brand-gold). High-information density, low chrome. Lifts a bare table to
the system's signature feel.

---

## 7. Iconography

- **Library**: `lucide-react`.
- **Stroke width**: `1.5`. (Tighter than Lucide's default `2` — matches the
  thin Inter weight used in headlines.)
- **Sizes**: 12, 14, 16, 20. Icon should never be larger than the text it
  sits next to.
- **Color**: inherit `currentColor`. Icons are not coloured independently —
  if the icon needs the brand colour, the surrounding text does too.

Avoid emblem-style icons (Lady Justice, scales, pillars). The Joseph-Law
audit (`docs/joseph-law-design-audit.md:67`) explicitly rejected them as
generic American-firm imagery.

---

## 8. Utilities & decorative effects

These ship in the marketing site and should be available to the app for
parity moments (login screen, error page, marketing-style banners inside
the product):

- `.bg-rules` — legal-pad faint vertical rules at 96 px column.
- `.cursor-halo` — radial wash that follows the pointer (hero only).
- `.film-grain` — subtle noise overlay; pair with `.video-tile`.
- `.under-reveal` — 0→100% underline on hover for inline links.
- `.mono` — JetBrains Mono with `ss01` + `0.22em` tracking helper.

---

## 9. Implementation — drop-in for the product app

### 9.1 CSS variables (Tailwind v4, `@theme inline`)

Copy this block into the product app's global stylesheet. It declares both
modes via a `data-theme` attribute on `<html>`. Default is **chamber**.

```css
@import "tailwindcss";

:root,
[data-theme="chamber"] {
  --paper: oklch(0.985 0.004 80);
  --paper-2: oklch(0.965 0.005 80);
  --paper-3: oklch(0.935 0.006 80);

  --ink: oklch(0.18 0.012 80);
  --ink-2: oklch(0.36 0.012 80);
  --ink-3: oklch(0.52 0.012 80);
  --ink-4: oklch(0.66 0.010 80);

  --rule: oklch(0.88 0.006 80);
  --rule-strong: oklch(0.74 0.008 80);

  --brand: oklch(0.72 0.105 70);
  --brand-deep: oklch(0.58 0.115 65);
  --brand-soft: oklch(0.94 0.04 78);

  --success: oklch(0.55 0.13 155);
  --success-soft: oklch(0.94 0.04 155);
  --warn: oklch(0.65 0.13 75);
  --warn-soft: oklch(0.95 0.04 75);
  --danger: oklch(0.55 0.20 25);
  --danger-soft: oklch(0.94 0.05 25);
  --info: oklch(0.50 0.13 240);
  --info-soft: oklch(0.94 0.04 240);

  --shadow-card: 0 1px 2px oklch(0.18 0.012 80 / 0.04),
                 0 4px 12px oklch(0.18 0.012 80 / 0.06);
  --shadow-pop:  0 8px 24px oklch(0.18 0.012 80 / 0.10),
                 0 2px 6px  oklch(0.18 0.012 80 / 0.08);
}

[data-theme="theatre"] {
  --paper: oklch(0.115 0.005 80);
  --paper-2: oklch(0.145 0.006 80);
  --paper-3: oklch(0.18 0.008 80);

  --ink: oklch(0.96 0.008 80);
  --ink-2: oklch(0.78 0.010 80);
  --ink-3: oklch(0.62 0.012 80);
  --ink-4: oklch(0.48 0.012 80);

  --rule: oklch(0.25 0.006 80);
  --rule-strong: oklch(0.40 0.008 80);

  --brand: oklch(0.82 0.085 75);
  --brand-deep: oklch(0.72 0.105 70);
  --brand-soft: oklch(0.92 0.05 75);

  --success-soft: oklch(0.30 0.05 155);
  --warn-soft: oklch(0.30 0.05 75);
  --danger-soft: oklch(0.30 0.06 25);
  --info-soft: oklch(0.30 0.05 240);
}

@theme inline {
  --color-paper: var(--paper);
  --color-paper-2: var(--paper-2);
  --color-paper-3: var(--paper-3);
  --color-ink: var(--ink);
  --color-ink-2: var(--ink-2);
  --color-ink-3: var(--ink-3);
  --color-ink-4: var(--ink-4);
  --color-rule: var(--rule);
  --color-rule-strong: var(--rule-strong);
  --color-brand: var(--brand);
  --color-brand-deep: var(--brand-deep);
  --color-brand-soft: var(--brand-soft);
  --color-success: var(--success);
  --color-success-soft: var(--success-soft);
  --color-warn: var(--warn);
  --color-warn-soft: var(--warn-soft);
  --color-danger: var(--danger);
  --color-danger-soft: var(--danger-soft);
  --color-info: var(--info);
  --color-info-soft: var(--info-soft);

  --color-background: var(--paper);
  --color-foreground: var(--ink);

  --font-sans: var(--font-inter);
  --font-mono: var(--font-jetbrains-mono);
}
```

### 9.2 Tailwind class usage

| Surface          | Class                          |
|------------------|--------------------------------|
| Page             | `bg-paper text-ink`            |
| Card             | `bg-paper-2 text-ink border border-rule` |
| Hover row        | `hover:bg-paper-3`             |
| Eyebrow          | `mono text-[11px] uppercase tracking-[0.22em] text-ink-3` |
| Body paragraph   | `text-[16px] leading-[1.55] text-ink-2` |
| Brand CTA        | `bg-brand text-paper hover:bg-brand-deep` |
| Status — success | `bg-success-soft text-success border border-success/20` |

### 9.3 Mode switching

```tsx
// Allow per-route overrides — marketing pages run theatre, app runs chamber.
<html data-theme="chamber"> ... </html>
<html data-theme="theatre"> ... </html>
```

For a section inside the app that needs theatre (e.g., a video walk-through
embedded in onboarding), wrap that subtree:

```tsx
<section data-theme="theatre" className="bg-paper text-ink"> ... </section>
```

The token cascade flips automatically.

---

## 10. What this system explicitly is **not**

- **Not a serif system.** No Garamond, no Caslon, no italic legal display.
- **Not gradient-driven.** The only gradient in the system is the
  `cursor-halo` and the `video-tile` letterboxing — both decorative,
  spatially small.
- **Not a shadow-driven elevation system.** Surfaces lift via paper
  scales, not shadow stacks. (One exception: the `float-soft` cinema pill.)
- **Not a primary-colour status palette.** Status hues lean earth — no
  Bootstrap red, no Material green.
- **Not bilingual-typeset yet.** Devanagari and Telugu support is a
  follow-up; reserve `--font-display-deva` and `--font-display-telu`
  variables now to avoid a breaking change later.

---

## 11. Open questions for the app team

1. **Density.** This document specifies Inter at 14 px for app body. Confirm
   against causelist row density — the legal team may want 13 px.
2. **Tabular numerals.** Add `font-variant-numeric: tabular-nums` to
   any column that holds amounts, IST timestamps, or causelist numbers.
   This is non-default in Inter.
3. **Print stylesheet.** Causelists, cause-titles, and invoices print. The
   chamber palette is already print-safe; we still need a `@media print`
   block that drops shadows, expands hairlines to 0.5 pt, and forces black
   text on white paper.
4. **Dark-app variant.** Some users (night court, late drafting) will ask
   for theatre mode in-app. The token contract already supports this —
   confirm UX scope before shipping.

---

## 12. Source of truth

- Token definitions: [src/app/globals.css](../src/app/globals.css) (theatre mode).
- Button primitive: [src/components/ui/button.tsx](../src/components/ui/button.tsx).
- Joseph-Law audit (informs visual decisions): [docs/joseph-law-design-audit.md](joseph-law-design-audit.md).

When this document and `globals.css` disagree, **`globals.css` wins** for
theatre mode and this document wins for chamber mode (until the app ships
its own canonical stylesheet, at which point that file takes over for
chamber).
