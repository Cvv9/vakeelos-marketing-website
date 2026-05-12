---
title: forthetimes.law integration — design spec
date: 2026-05-12
status: approved (Approach B, fallback A)
related:
  - docs/joseph-law-design-audit.md
  - docs/design-language.md
---

# forthetimes.law integration — design spec

## Goal

Adopt the cinematic patterns from **forthetimes.law** (Milan Webionics for Joseph Law) into the VakeelOS marketing site **without breaking VakeelOS's paper-first identity** and **without introducing new heavy assets**. The reference site is a luxury law-firm portfolio; we are a SaaS product. So we borrow the *grammar* (slow type fades, segmented workflow reveal, billboard scale, paper materiality) and reject the *vocabulary* (Lady Justice icons, US handshake photography, leather/metal 3D emblems).

## Approach selected

**Approach B — Selective Integration.** Six surgical moves on the home page, team page, and a site-wide texture system. No new framework, no new top-level layout. Falls back to **Approach A (full cinematic rebuild)** if B feels half-committed after a first pass.

The two approaches differ in *ambition*, not *direction*. B reuses every existing section composition and adds reveal-on-scroll detail. A would tear out `hero-cinematic`, `services-section`, and `workflow-section` and replace them with a full-bleed scroll-scrubbed timeline.

## Non-goals

- No edits to `/about`, `/features`, `/pricing`, `/security`, `/contact`, `/faq`, `/waitlist`.
- No new image, video, or font assets. Everything visual is React + CSS + SVG.
- No new dependencies. Specifically, no `framer-motion`, `gsap`, `lottie`, `three`.
- No replacement of the existing motion library in `globals.css` — only additions.
- No changes to nav, footer, analytics wiring.

## Imagery decision

**Hybrid imagery (option C).** For surfaces where the reference uses photography:

- **Service tiles:** live React product mocks (case-list rows, causelist alerts, draft editor, invoice, conflicts radar, brief reader) — not screenshots, not GIFs. Animated via CSS keyframes and `data-state` toggles.
- **Team page portraits:** the existing founder headshots already in `public/`, paired with the initials block in a crossfade.
- **About-section visual:** the existing `public/about-desk.png` cross-treated through a CSS filter overlay (no new file).
- **Section backgrounds:** SVG turbulence noise overlay, single instance at root, not 5 separate `bg-*.webp` files.

The rule: if the reference uses a photo, we use a product mock or an existing asset. We never generate new raster art.

---

## The six moves

### Move 1 — Service tiles with live product mocks

**Reference:** forthetimes.law §04 (services row with ornate icons).
**Current:** `src/components/marketing/services-section.tsx` — six numbered services in a row-rule list, marquee word-strip below, no per-service visual.

**Change:** introduce `src/components/marketing/services-tiles.tsx` that renders the same six services as a 6-up grid of large tiles (3 cols on lg, 2 on md, 1 on sm). Each tile contains:

- The numeric label (`01–06`), the service name, the one-line description (all from the existing service array — single source of truth, no copy duplication).
- A **live mock panel** rendered by `src/components/marketing/service-mock.tsx` selecting the right mock by `kind`: `case | causelist | draft | invoice | conflicts | brief`.

The six mocks are hand-built React components — small, focused, ~40–80 lines each:

| kind | Mock content |
|---|---|
| `case` | Three case rows (party A vs party B · stage · next date), top row pulses through `pending → updated` every 4s. |
| `causelist` | Court board with three causelist entries; one row slides in from the right with a `New` chip every 5s. |
| `draft` | Document editor frame with serif body copy; the cursor types out one phrase ("…subject to Section 65 of the Indian Evidence Act") on view enter. |
| `invoice` | Stylised invoice header (party, matter, amount in ₹), a `Sent` chip flips to `Paid` once on view enter. |
| `conflicts` | Radar-style concentric rings with three name pills; one pill pulses red as a "match". |
| `brief` | Stacked PDF cards with page numbers; the top card lifts and the highlight bar scans top-to-bottom. |

**Animation mechanics:**

- Each tile uses `animation-timeline: view()` so it reveals on scroll (mask-rise + lift-in, already in `globals.css`).
- Inner mock animations are pure CSS keyframes driven by `data-state` attributes flipped by a small `useEffect` + `IntersectionObserver` (fires once at 40% visibility — no infinite loops, no continuous CPU burn).
- All animations gated by `@media (prefers-reduced-motion: reduce)` → static final state.

**File changes:**

- New: `src/components/marketing/services-tiles.tsx`
- New: `src/components/marketing/service-mock.tsx` (exports six mocks plus a `ServiceMock` switch).
- Modify: `src/app/page.tsx` — swap `<ServicesSection />` for `<ServicesTiles />`.
- `services-section.tsx` stays on disk (used in Approach A fallback; unused but not deleted).

**Why React mocks over rasters:** the reference site ships ~60 raster frames per service tile to fake a UI animation. That's ~10–15 MB of asset weight per service. Our mocks are 5–10 KB of TSX each and scale crisply at any density.

---

### Move 2 — About section, mounted, with crossfade pair

**Reference:** forthetimes.law §05 (About Us with 3D rotating monogram emblem).
**Current:** `src/components/marketing/about-section.tsx` exists but is **not mounted** on the home page. The only existing visual asset is `public/about-desk.png`.

**Change:**

- Mount `<AboutSection />` in `src/app/page.tsx` between `ServicesTiles` and `WorkflowSection`.
- Inside the section, replace the single `about-desk.png` `<img>` with a `<CrossfadePair />` component that layers:
  - **Bottom layer:** the same `about-desk.png` as-is.
  - **Top layer:** the same image with CSS `filter: grayscale(0.6) contrast(1.1) brightness(0.85)` + a brand-gold radial overlay via a pseudo-element.
  - On scroll-into-view, the top layer fades from `opacity: 1` to `opacity: 0` over 1.6s, revealing the warm version beneath.

**Why not a 3D emblem:** the audit doc already concluded the cube/3D treatment doesn't fit our paper aesthetic. The crossfade gives the same "this image is alive" feel with zero new assets and no WebGL.

**File changes:**

- New: `src/components/effects/crossfade-pair.tsx`
- New folder: `src/components/effects/`
- Modify: `src/components/marketing/about-section.tsx` — wrap the existing `<img>` in `<CrossfadePair>`.
- Modify: `src/app/page.tsx` — mount `<AboutSection />`.

---

### Move 3 — Site-wide paper texture system

**Reference:** forthetimes.law §06+ (perforated mesh / metallic-plate backdrops per section).
**Current:** Solid `--paper` background with film-grain on hero only.

**Change:** introduce a single root-level `<PaperTexture />` that renders **once** in `src/app/layout.tsx` as a `position: fixed; inset: 0; pointer-events: none; mix-blend-mode: overlay; opacity: 0.06; z-index: 1` layer above the page background, below all content (`z-index: 1` with `body > main` at `z-index: 2`).

The texture is an inline SVG using `<filter><feTurbulence baseFrequency="0.9" numOctaves="2" /></filter>` filling a `<rect>`. Roughly 400 bytes of markup.

Per-section accents come from a `data-paper="warm|cool|deep"` attribute on a section root, which CSS reads to lay a subtle 30%-opacity radial wash from a corner. No per-section images.

**Why one root instance:** prevents every section from re-allocating its own backdrop layer. The SVG is cached as a single element. Mix-blend-mode does the per-section visual variation for free.

**File changes:**

- New: `src/components/effects/paper-texture.tsx`
- Modify: `src/app/layout.tsx` — mount `<PaperTexture />` directly inside `<body>`, before `<Nav />`.
- Modify: `src/app/globals.css` — append `[data-paper="warm"] { ... }` rules and the noise filter helper (`url(#paper-noise)`).

---

### Move 4 — Workflow section with nested substeps

**Reference:** forthetimes.law §07 (segmented-pill workflow reveal).
**Current:** `src/components/marketing/workflow-section.tsx` is tabbed across four steps (01 Sync / 02 Brief / 03 Draft / 04 Bill) with auto-advance via `setInterval` every 6000ms. The active step shows a single illustration block.

**Change:** inside each active step pane, render `<WorkflowSubsteps />` — a vertical list of three substeps that reveal sequentially over the 6-second dwell time:

| Step | Substeps |
|---|---|
| 01 Sync 06:30 IST | 1. Court site polled · 2. Causelist diffed · 3. Conflicts flagged |
| 02 Brief 09:14 IST | 1. Bundle compiled · 2. Page anchors set · 3. Read by counsel |
| 03 Draft 14:02 IST | 1. Template seeded · 2. Citations resolved · 3. Sent for review |
| 04 Bill 18:45 IST | 1. Time captured · 2. Invoice generated · 3. Payment requested |

Each substep is a short row: a 1-character index, a verb, a mono timestamp. They reveal at t=0s, t=2s, t=4s within the 6-second dwell using CSS `animation-delay` (no JS timers beyond the existing tab cycler).

**Why no new timer:** the existing 6000ms auto-advance is the master clock. New substeps key off `data-active="true"` on the pane via pure CSS keyframes.

**File changes:**

- New: `src/components/marketing/workflow-substeps.tsx`
- Modify: `src/components/marketing/workflow-section.tsx` — render `<WorkflowSubsteps step={active.id} />` inside the active pane below the existing illustration.

---

### Move 5 — Hero pre-roll wordmark intro (gated, one-shot)

**Reference:** forthetimes.law project hero (carved "JL" monogram + "FOR THE TIMES" engraved wordmark, no chrome, no CTAs).
**Current:** `hero-cinematic.tsx` jumps straight into the video tile + headline composition.

**Change:** introduce `src/components/marketing/hero-wordmark-intro.tsx` that, on first visit per session, overlays the viewport with a black plate showing:

- The "V" + "K" monogram from the existing `public/logo-monogram.png` (already there, no new asset).
- The wordmark "VAKEELOS — FOR THE INDIAN BAR" in the existing display serif, letter-rising over 1.8s.
- A subtle "press any key to enter" hint that fades in at 2.2s.

The overlay dismisses on:

- Any keypress
- Any click
- A 4.5s timeout
- `prefers-reduced-motion: reduce` → never shows

After dismissal, set `sessionStorage.setItem('vakeelos.intro.seen', '1')`. On subsequent navigations within the session, the overlay never re-renders.

`HeroCinematic` accepts a new `withIntro?: boolean` prop and, when true, renders `<HeroWordmarkIntro />` as a sibling overlay element.

**File changes:**

- New: `src/components/marketing/hero-wordmark-intro.tsx`
- Modify: `src/components/marketing/hero-cinematic.tsx` — accept `withIntro` prop.
- Modify: `src/app/page.tsx` — pass `<HeroCinematic withIntro />`.

**Why gated:** unconditional intros are a known UX failure (users hit the site three times a day and resent the curtain). One-shot per session balances the cinematic intent with the actual visit pattern.

---

### Move 6 — Team page crossfade portraits

**Reference:** forthetimes.law team/footer (large photographic billboard).
**Current:** `src/app/team/page.tsx` shows two founders. Each card opens with an initials block (`VT` / `VC`) styled as a typographic monogram, and clicking it triggers an Escape-key-dismissible modal with the headshot + bio.

**Change:** on each card, wrap the initials block and the headshot in a `<CrossfadePair />` (same component built in Move 2):

- Card at rest: initials block visible, headshot at `opacity: 0`.
- On scroll-into-view (driven by `animation-timeline: view()`): initials fade to 0 over 800ms, headshot fades in. End state stays as headshot.
- On hover/focus the transition runs early if it hasn't already fired.
- Tap/click still opens the modal.
- Reduced motion → headshot shown immediately, initials hidden.

This gives the page the "the firm is the people" reveal the reference does without breaking our existing modal pattern.

**File changes:**

- Modify: `src/app/team/page.tsx` — wrap the per-founder initials/headshot pair in `<CrossfadePair>`.
- No new file (reuses Move 2's `CrossfadePair`).

---

## File architecture summary

**New files (6):**

```
src/components/effects/
  ├── crossfade-pair.tsx          (Move 2, reused by Move 6)
  └── paper-texture.tsx           (Move 3)
src/components/marketing/
  ├── services-tiles.tsx          (Move 1)
  ├── service-mock.tsx            (Move 1 — six mock components)
  ├── workflow-substeps.tsx       (Move 4)
  └── hero-wordmark-intro.tsx     (Move 5)
```

**Modified files (7):**

```
src/app/layout.tsx                                (Move 3 — mount PaperTexture)
src/app/page.tsx                                  (Moves 1, 2, 5 — wire tiles, about, intro)
src/app/globals.css                               (Moves 1–6 — append keyframes and data-paper rules)
src/components/marketing/hero-cinematic.tsx       (Move 5 — withIntro prop)
src/components/marketing/about-section.tsx        (Move 2 — wrap img in CrossfadePair)
src/components/marketing/workflow-section.tsx     (Move 4 — mount substeps)
src/app/team/page.tsx                             (Move 6 — wrap portraits)
```

`services-section.tsx`, `product-showcase.tsx`, and all unrelated marketing components are untouched.

---

## globals.css additions

Append-only — never edit existing rules. Block names and structure are fixed; CSS bodies below are illustrative skeletons, filled in during implementation:

```css
/* Move 1 — service tile keyframes */
@keyframes tile-mock-pulse { ... }
@keyframes tile-mock-slide-in { ... }
@keyframes tile-mock-typewriter { ... }
@keyframes tile-mock-flip { ... }
@keyframes tile-mock-radar { ... }
@keyframes tile-mock-scan { ... }

/* Move 2 + 6 — crossfade */
@keyframes crossfade-out { from { opacity: 1 } to { opacity: 0 } }

/* Move 3 — paper texture */
.paper-texture { ... }
[data-paper="warm"]::before { ... }
[data-paper="cool"]::before { ... }
[data-paper="deep"]::before { ... }

/* Move 4 — substep cascade */
@keyframes substep-rise { ... }
[data-active="true"] .substep:nth-child(1) { animation: substep-rise 600ms 0ms forwards }
[data-active="true"] .substep:nth-child(2) { animation: substep-rise 600ms 2000ms forwards }
[data-active="true"] .substep:nth-child(3) { animation: substep-rise 600ms 4000ms forwards }

/* Move 5 — intro overlay */
@keyframes intro-dismiss { from { opacity: 1 } to { opacity: 0; pointer-events: none } }

/* Global reduced-motion gate */
@media (prefers-reduced-motion: reduce) {
  .paper-texture, [data-paper], [data-active], .crossfade-pair * {
    animation: none !important;
    transition: none !important;
  }
}
```

---

## Accessibility

- All new motion respects `prefers-reduced-motion: reduce`. Each component must declare its reduced-motion fallback inline in its CSS or via a `motion-safe` Tailwind variant. Reduced-motion users get the *final state* of every animation, never the initial state.
- Service tiles are still keyboard-reachable (`<button>` or `<a>` wrappers if interactive; static `<article>` if not).
- The pre-roll overlay (Move 5) is dismissible by keyboard, mouse, or timeout — never traps focus. The dismiss action moves focus to the page `<main>`.
- The wordmark overlay sets `role="dialog"` and `aria-label="VakeelOS intro"` but `aria-hidden` flips to `true` post-dismiss.
- Color contrast across all new layers maintains the AA contrast lock established in commit c81463b.

---

## Performance

- Zero new dependencies. Bundle delta should be **< 8 KB gzipped** total for all six new components.
- Zero new image, video, or font assets.
- The `paper-texture` SVG noise filter is rendered once and composited by the GPU (mix-blend-mode is a compositor-friendly op on Safari/Chrome/Firefox).
- IntersectionObserver is created lazily inside each component and disconnected after its single fire — no observer leaks.
- Reduced-motion users skip all keyframe work — pure render cost.
- The pre-roll intro is rendered as a sibling overlay, not a parent gate — the rest of the hero mounts and animates beneath it on first paint. The intro never blocks the LCP element.

Budget check at the end of implementation: run `pnpm build` and confirm the home page route bundle hasn't grown by more than 8 KB gzipped vs `main`.

---

## Rollback plan

All work happens on a new git worktree branch (created in the next step). Rollback options:

1. **Revert worktree** — discard branch, nothing reaches `main`.
2. **Per-move revert** — each of the six moves is a separate commit. If Move 5 (pre-roll) feels wrong, revert that single commit while keeping the rest.
3. **Escalate to Approach A** — if B feels half-committed after the first preview pass, retain the six new files and rebuild `hero-cinematic`, `services-tiles`, `workflow-section` against a unified scroll-scrubbed timeline.

`services-section.tsx` stays on disk after Move 1 lands so Approach A can be swapped back in via one line in `page.tsx`.

---

## Out of scope

- Updating `/about`, `/features`, `/pricing`, `/security`, `/contact`, `/faq`, `/waitlist`.
- The four `.bak` files in `public/` (`badge-made-in-india.png.bak`, `bar-council-seal.png.bak`, `dpdpa-shield.png.bak`, `razorpay-badge.png.bak`) — leave untouched.
- The footer-as-billboard reference move (audit doc §08) — would require new assets and a footer rewrite. Defer.
- The mobile-version showcase tile (audit doc §09) — we don't ship a mobile app for VakeelOS yet.
- Removing `framer-motion` or any unused dep (none present; nothing to remove).
- Replacing `hero.mp4` / `hero-poster.jpg` / `hero.gif` — they stay as the hero video source.

---

## Open questions

None. All scope, asset, motion, and behaviour decisions resolved in the pre-spec brainstorm (2026-05-12 conversation log).

---

## Acceptance criteria

A reviewer should be able to verify each move independently:

1. **Move 1:** `/` renders six service tiles in a grid. Each tile shows a unique mock that animates once on scroll-into-view. Reduced-motion users see the final state immediately.
2. **Move 2:** `<AboutSection />` appears on `/` between services and workflow. The about image visibly crossfades from desaturated to warm on scroll-into-view.
3. **Move 3:** A subtle paper-grain overlay is visible across the whole page (every route, not just `/`). Sections with `data-paper="warm"` show a warm radial corner wash.
4. **Move 4:** The workflow section's active step shows three substeps that reveal one-by-one within the 6-second dwell. Switching tabs resets the cascade.
5. **Move 5:** First visit to `/` in a fresh tab shows a black plate with the monogram + wordmark for ~3 s, dismissible by key/click/timeout. Subsequent navigations within the same tab don't re-show.
6. **Move 6:** On `/team`, each founder card's initials block fades to the headshot on hover/focus or on view. Modal still opens on click.
