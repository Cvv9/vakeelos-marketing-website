# Animation & Motion Design — forthetimes.law vs VakeelOS

> **Reference:** [forthetimes.law](https://www.forthetimes.law) — Awwwards Honorable Mention, Apr 2025 · Built by Milan Webionics · Next.js
> **Ours:** VakeelOS marketing site · Next.js 15
> **Focus:** Scroll behaviour, page transitions, section animations, 3D, motion hierarchy

---

## Section-by-Section: What the Reference Does

### 1 · Hero — Full 3D WebGL scene
A **Three.js (or similar WebGL) animation** occupies the entire viewport. Massive 3D "JL" letterforms emerge from a dark receding grid floor with dramatic backlighting. The letters are fully 3D — lit, shadowed, and animated (likely rotating or breathing slowly). On load, this scene plays as the **intro animation** before settling into the resting state.

- Background: perspective-receding tile grid in deep #072428 teal-black
- 3D letterforms: metallic/stone material, god-ray backlighting
- Chromatic aberration RGB split visible in corners
- Scroll indicator: bottom-left corner bracket (L-shaped frame) with animated ↓ arrow
- Founder signature in handwriting font bottom-right, fading in on load

### 2 · Scroll architecture — Full-viewport snap sections
The entire site is built as **full-screen snapping sections** (likely `scroll-snap-type: y mandatory`). Each section = 100vh. Scrolling one notch locks to the next section — the page never stops mid-section.

Left sidebar: a **fixed vertical progress indicator** — a column of dot/dash marks on the left edge, one per section. The active section label appears next to its mark (e.g. "Service", "About", "Testimonial", "Process", "FAQ", "Contact"). This persists across all sections.

### 3 · Services — 3D tilted photo cards
Each practice area is represented by a **real photo treated as a 3D tilted plane** — the photo has depth, tilt, and a slight hover rotation. Cards float in space at different depths. An active card is foregrounded and highlighted; inactive cards fall back and dim.

- Business / Individual **toggle tab** with animated underline/fill transition
- Section heading fades in from below on snap-enter

### 4 · About — 3D rotating cube
A **glossy 3D cube** with the JL monogram embossed on its face. The cube slowly rotates as the section is active. The cube catches and reflects ambient light dynamically.

### 5 · Testimonials — Sliding carousel
A **horizontal carousel** of testimonial cards. Cards slide left/right. Each card: circular avatar, name, title, 5-star rating, and review text on a white card against dark background. Arrow button (→) on the right. Dot pagination at the bottom. Likely auto-advances.

### 6 · Workflow — Animated orbital timeline
"Our Workflow" uses a **tab switcher** (Business Law / Litigation / Real Estate / Personal Injury) that reveals a different workflow steps. The steps are laid out on a **curved orbital path** (not a straight line) — nodes sit along an elliptical arc, connected by a thin line. Selecting a tab animates in new node labels.

### 7 · Booking + FAQ — Split layout with 3D hourglass
Left half: "Online Booking" with a **3D hourglass model** (glass + sand, slow particle fall animation implied). Right half: **accordion FAQ** with a Categories dropdown filter. FAQ rows expand/collapse with smooth height animation.

### 8 · Footer/Contact — Full-bleed background video
The last section uses a **background video** of two lawyers shaking hands (real footage, not stock-looking). Text and links overlay the video. Footer links appear with a stagger fade.

### 9 · Mobile mockup section
A **3D rendered phone mockup** resting on a perforated metal surface (rendered, not photographed). The phone displays the site's services screen. This is a static 3D render used as a design showcase element.

### 10 · Intro video / loading sequence
Awwwards lists **three separate "Intro Video and Animation" elements** — the site has a **preloader or intro video** that plays before the main content appears. Based on the page description, this is likely the 3D logo animation that plays for 2–4 seconds on first load.

---

## VakeelOS: What We Currently Have

| Animation | Implementation | Notes |
|---|---|---|
| **Reveal on scroll** | `.reveal` class + IntersectionObserver | Fade + slide-up, triggered at threshold |
| **Sticky scroll workflow** | Wrapper div 4.5× viewport height, step = `scrolled / vh` | 5 steps, sticky `position` architecture |
| **Service mock UIs** | CSS keyframe animations per mock type | Typewriter cursor, row stagger, chip pulse |
| **Nav auto-hide** | `opacity-0 / opacity-100` toggle, 2.5s hide timer | Appears on scroll + mouse proximity |
| **Logo scale** | Tailwind transition, `h-28 → h-9` on scroll | Smooth via CSS transition |
| **Page transitions** | `TransitionLink` component | Handles route changes |
| **Badge variants** | Static styled badges (Live / Rolling out / In dev) | No animation |
| **Saffron accent text** | CSS `accent` class | No motion |

---

## Gap Analysis — Animations in the Reference That We Don't Have

### 🔴 Critical gaps (most visible, highest impact)

#### G1 — No WebGL / 3D hero
The reference hero is the site's identity — a full 3D scene that signals "this is not a template." Our hero is typography + text reveal, which is solid but flat.

**Our current state:** Static headline + wordmark intro (text fade-in).
**Their approach:** Animated 3D WebGL scene with letterforms, depth, lighting.
**Gap size:** Large. Requires Three.js or a video file approach.

**Practical alternative for VakeelOS:** A **looping background video** in the hero (not full 3D) showing the actual product UI animating, or a canvas-based particle/line animation behind the headline. Far less engineering than WebGL but meaningfully more dynamic than static text.

---

#### G2 — No full-viewport scroll snapping
The reference snaps section-to-section. Every section is exactly 100vh. Scrolling never leaves you mid-section.

**Our current state:** Free-scroll. Only the workflow section uses the sticky/tall-wrapper scroll technique.
**Their approach:** CSS `scroll-snap-type: y mandatory` on the root, each section `scroll-snap-align: start`.
**Gap size:** Medium. Scroll-snap is pure CSS — no JS required. But it's a significant UX architecture decision.

---

#### G3 — No sidebar section progress indicator
The left sidebar dot-indicator tells the user exactly where they are in the page at all times. It persists through all sections and labels the active one.

**Our current state:** No on-page navigation indicator. Users rely on the auto-hide nav.
**Their approach:** Fixed left-side column with one dot per section, active label shown.
**Gap size:** Medium. A useful wayfinding element, especially on a long single-page site.

---

#### G4 — No animated 3D objects per section
Each of their sections has a 3D centrepiece — cube for About, tilted photo cards for Services, hourglass for Booking. These objects react to the section being active (rotate, animate).

**Our current state:** CSS-animated mock UIs (2D, flat). No 3D objects.
**Their approach:** Three.js / CSS 3D transforms applied to real photos or custom 3D models.
**Gap size:** Large for full 3D. Medium if approximated with CSS `perspective` + `rotateX/Y` on images.

---

#### G5 — No intro / preloader animation
The reference has a loading animation (3 separate video elements listed on Awwwards). The first thing you see is likely the JL logo animation.

**Our current state:** Next.js default page render — content appears immediately (or with a brief flash).
**Their approach:** A preloader component that plays for 2–4s, then dissolves into the hero.
**Gap size:** Medium. A preloader can be built without WebGL — even a text-typing or logo-drawing SVG animation counts.

---

### 🟡 Significant gaps (visible, worth adding)

#### G6 — No testimonials / social proof carousel
The reference has an animated testimonial carousel with dot pagination.

**Our current state:** No testimonials or social proof section on the homepage (only a beta stat "60% invoices paid within 24h" inline).
**Their approach:** Full dedicated testimonial section with avatar cards, star ratings, and slide animation.

---

#### G7 — No animated workflow / process timeline
Their "Our Workflow" uses a tab-switching orbital timeline. Our `/workflow` page uses the sticky-scroll step animation, which is good, but the homepage has no lightweight process visualisation.

---

#### G8 — No background video section
The reference uses a real video background for the footer/contact section, giving it warmth and humanity that a pure dark UI can't.

**Our current state:** Dark ink section for the final CTA — no video, no imagery.
**Their approach:** Ambient looping video of human interaction as section background.

---

#### G9 — No hover 3D card tilt effect on service tiles
Their service cards tilt in 3D on hover (photo planes rotating slightly toward the cursor). Our service tiles use a simple `hover:bg-paper-2` background change.

**Their approach:** CSS `perspective` + JS mouse-position tracking → `rotateX/Y` on hover.
**Gap size:** Low effort, high perceived quality. Pure CSS + a few lines of JS.

---

### 🟢 Lower priority

#### G10 — No chromatic aberration / glitch effects
The reference has subtle RGB colour split (chromatic aberration) visible in corners — a luxury aesthetic detail.

#### G11 — No handwriting / signature animation
The "Mark Joseph" signature in handwriting font appears in the hero and mobile mockup — likely an SVG draw-on animation.

#### G12 — No 3D phone/device mockup section
A 3D rendered device mockup showing the product on screen. High production value, common on Awwwards-level sites.

---

## Summary Table

| Animation element | forthetimes.law | VakeelOS | Effort to add |
|---|---|---|---|
| WebGL 3D hero | ✅ Three.js scene | ❌ Static text | High |
| Background video (hero or section) | ✅ Footer video | ❌ None | Low |
| Viewport snap scrolling | ✅ `scroll-snap` | ❌ Free scroll | Low (CSS only) |
| Left sidebar section progress | ✅ Fixed indicator | ❌ None | Medium |
| 3D objects per section | ✅ Cube, cards, hourglass | ❌ None | High |
| Intro / preloader animation | ✅ Video preloader | ❌ None | Medium |
| Testimonial carousel | ✅ Sliding cards | ❌ None | Medium |
| Workflow orbital timeline | ✅ Tabbed arc path | ✅ Sticky scroll (different) | — |
| Animated service cards (3D tilt) | ✅ Hover tilt | ❌ Flat bg change | Low |
| Background video section | ✅ Footer | ❌ None | Low |
| Chromatic aberration | ✅ Corner effect | ❌ None | Low |
| CSS reveal on scroll | ✅ (implied) | ✅ `.reveal` class | — |
| Animated mock UI previews | ❌ Static screenshots | ✅ CSS keyframes | — |
| Sticky scroll narrative | ❌ None | ✅ Workflow section | — |
| Auto-hide glassmorphic nav | ❌ Standard sticky nav | ✅ Timer-based hide | — |

---

## Recommended Quick Wins (low effort, high visual impact)

1. **Hover 3D tilt on service tiles** — add `perspective` to the grid container, track mouse position with a tiny event listener, apply `rotateX/Y` to each card. ~30 lines of JS. Matches their services section feel immediately.

2. **Sidebar section progress dots** — a fixed `<nav>` with one dot per major section, IntersectionObserver sets the active dot. Pure CSS + ~40 lines of JS.

3. **Background video for the CTA/footer section** — replace the dark ink section with a looping ambient video (court corridor, keyboard, soft bokeh) at low opacity. No engineering — one `<video autoPlay muted loop>` tag + `mix-blend-mode: overlay` or a dark overlay.

4. **Intro logo animation** — SVG path draw-on for the "V" glyph on first load, 1.5–2s, then dissolve into the hero. Replaces the abrupt render-on-load.

5. **Smooth page transitions** — if `TransitionLink` isn't already doing a visible cross-fade, add a 200ms opacity-out/in on route change. Their snap-scroll architecture gives implicit section transitions; we need explicit page ones.

---

*Prepared May 2026. Visual analysis based on Awwwards element screenshots for Joseph Law (Honorable Mention, April 2025), created by Milan Webionics.*
