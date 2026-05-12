# forthetimes.law Integration — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Land the six visual moves from `docs/superpowers/specs/2026-05-12-forthetimes-integration-design.md` on a feature worktree — service tiles with live React mocks, home brief strip with crossfade, site-wide paper texture, workflow substeps, hero wordmark pre-roll, team portrait crossfade — without new image/video assets and without new dependencies.

**Architecture:** Pure additive work on top of the existing Next.js 16 App Router site. Each move is one cohesive commit. New components live under `src/components/effects/` (reusable visual primitives) and `src/components/marketing/` (page-specific compositions). All animation is CSS-driven, gated by `prefers-reduced-motion`, and fires once via `IntersectionObserver` where applicable.

**Tech Stack:** Next.js 16.2.5 (App Router), React 19.2.4, TypeScript 5, Tailwind CSS 4 (`@tailwindcss/postcss`), pnpm. No new deps.

**Working branch:** `forthetimes-integration` in worktree `.worktrees/forthetimes-integration/`.

**Verification model:** This project has no unit test suite (only `pnpm lint` and `pnpm build`). Verification per task is: (a) `pnpm lint` clean, (b) `pnpm dev` runs without errors, (c) visual check at `http://localhost:3000`.

---

## Spec deltas (discovered during code reading)

Three corrections to the spec, applied throughout the plan:

| Spec said | Reality | Plan does |
|---|---|---|
| "Mount `<AboutSection />` on home" | `AboutSection` is the whole `/about` page (header + 4 sub-sections) | Create `HomeBriefStrip` — a small home-only section with desk image + brief teaser |
| "Wrap initials block + headshot in CrossfadePair on team page" | Team page shows headshots directly; no initials block exists | Introduce a name-initials state ("VT" / "VC") that crossfades to the headshot |
| Service mock kinds: `case / causelist / draft / invoice / conflicts / brief` | Actual services are 01 Case Mgmt · 02 Causelist · 03 AI Drafter · 04 AI Research · 05 Net Invoicing · 06 Intelligence Dashboard | Mock kinds: `case / causelist / drafter / research / invoicing / dashboard` |

---

## File structure (after plan)

**New (6):**

```
src/components/effects/
  ├── crossfade-pair.tsx              (Task 4)
  └── paper-texture.tsx               (Task 6)
src/components/marketing/
  ├── service-mock.tsx                (Task 1 — 6 mock components + switch)
  ├── services-tiles.tsx              (Task 2)
  ├── home-brief-strip.tsx            (Task 5)
  ├── workflow-substeps.tsx           (Task 7)
  └── hero-wordmark-intro.tsx         (Task 8)
```

**Modified (7):**

```
src/app/layout.tsx                                  (Task 6)
src/app/page.tsx                                    (Tasks 2, 5, 8)
src/app/globals.css                                 (Tasks 3, 6, 7, 8)
src/components/marketing/hero-cinematic.tsx         (Task 8)
src/components/marketing/workflow-section.tsx       (Task 7)
src/app/team/page.tsx                               (Task 9)
docs/superpowers/plans/...                          (this file)
```

`AboutSection` and `ServicesSection` stay on disk untouched — they are not used by the home page after this plan, but remain reachable for Approach A fallback.

---

## Tasks

### Task 0: Confirm dev server runs from worktree (sanity check)

**Files:** none

- [ ] **Step 1: Start the dev server**

```bash
pnpm dev
```

Expected: server starts on `http://localhost:3000`, terminal shows `✓ Ready in <ms>`. Leave it running in a separate terminal for the rest of the plan.

- [ ] **Step 2: Open the site**

Visit `http://localhost:3000` in a browser. Expected: the current home page renders with the cinema-black paper, hero video, services row-rule list, testimonials, workflow tabs, booking, and closing CTA. No console errors.

- [ ] **Step 3: Confirm baseline lint**

```bash
pnpm lint
```

Expected: `1 problem (0 errors, 1 warning)` — the pre-existing `<img>` warning in `hero-cinematic.tsx:150`. No errors.

No commit for this task.

---

### Task 1: Service mock components

**Files:**
- Create: `src/components/marketing/service-mock.tsx`

The file exports six small React components (one per service) plus a `<ServiceMock kind="..." />` switch. Each mock is a self-contained visual using only existing Tailwind classes and CSS variables. Mocks are dark-paper-friendly (the site is cinema black) and animate via CSS classes that will be defined in Task 3.

Each mock follows this shape:
- Outer wrapper: `relative w-full aspect-[4/3] rounded-[3px] border border-rule bg-paper-2 overflow-hidden`
- Inner content: stylised UI fragments with mono labels, ink-3 text, accent pulses

- [ ] **Step 1: Write the file**

```tsx
"use client";

import { useEffect, useRef, useState } from "react";

type Kind =
  | "case"
  | "causelist"
  | "drafter"
  | "research"
  | "invoicing"
  | "dashboard";

export function ServiceMock({ kind }: { kind: Kind }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [armed, setArmed] = useState(false);

  useEffect(() => {
    const node = wrapRef.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setArmed(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setArmed(true);
            io.disconnect();
            return;
          }
        }
      },
      { threshold: 0.4 },
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={wrapRef}
      data-state={armed ? "armed" : "idle"}
      className="service-mock relative w-full aspect-[4/3] overflow-hidden rounded-[3px] border border-rule bg-paper-2"
    >
      {kind === "case" ? <CaseMock /> : null}
      {kind === "causelist" ? <CauselistMock /> : null}
      {kind === "drafter" ? <DrafterMock /> : null}
      {kind === "research" ? <ResearchMock /> : null}
      {kind === "invoicing" ? <InvoicingMock /> : null}
      {kind === "dashboard" ? <DashboardMock /> : null}
    </div>
  );
}

function MockChrome({ label, right }: { label: string; right?: string }) {
  return (
    <div className="flex items-center justify-between border-b border-rule px-4 py-2.5">
      <span className="mono text-[10px] uppercase tracking-[0.22em] text-ink-3">
        {label}
      </span>
      {right ? (
        <span className="mono text-[10px] uppercase tracking-[0.22em] text-ink-3">
          {right}
        </span>
      ) : null}
    </div>
  );
}

function CaseMock() {
  const rows = [
    { party: "Rao vs State", stage: "Counter filed", date: "Tue · 14 May" },
    { party: "Iyer vs Iyer", stage: "Reply due", date: "Wed · 15 May" },
    { party: "Mehta & Co.", stage: "Mediation", date: "Fri · 17 May" },
  ];
  return (
    <div className="flex h-full flex-col">
      <MockChrome label="Case register" right="03 · Active" />
      <div className="flex flex-1 flex-col">
        {rows.map((r, i) => (
          <div
            key={r.party}
            className={`mock-case-row flex items-center justify-between border-b border-rule px-4 py-3 ${
              i === 0 ? "mock-case-row--lead" : ""
            }`}
          >
            <div>
              <p className="text-[13px] font-medium tracking-tight text-ink">
                {r.party}
              </p>
              <p className="mono mt-1 text-[10px] uppercase tracking-[0.18em] text-ink-3">
                {r.stage}
              </p>
            </div>
            <span className="mono text-[10.5px] uppercase tracking-[0.18em] text-ink-3">
              {r.date}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function CauselistMock() {
  return (
    <div className="flex h-full flex-col">
      <MockChrome label="APHC · 06:30 IST" right="New" />
      <div className="flex flex-1 flex-col">
        <CauselistRow code="W.P. 4711/2025" court="Court 12" hour="11:00" />
        <CauselistRow code="C.R.P. 882/2024" court="Court 7" hour="11:30" />
        <CauselistRow
          code="W.P. 5012/2025"
          court="Court 12"
          hour="12:00"
          fresh
        />
      </div>
    </div>
  );
}

function CauselistRow({
  code,
  court,
  hour,
  fresh,
}: {
  code: string;
  court: string;
  hour: string;
  fresh?: boolean;
}) {
  return (
    <div
      className={`flex items-center justify-between border-b border-rule px-4 py-3 ${
        fresh ? "mock-causelist-row--fresh" : ""
      }`}
    >
      <div className="flex items-center gap-3">
        <span className="mono text-[10.5px] uppercase tracking-[0.18em] text-ink">
          {code}
        </span>
        <span className="mono text-[10px] uppercase tracking-[0.18em] text-ink-3">
          {court}
        </span>
      </div>
      <div className="flex items-center gap-2">
        {fresh ? (
          <span className="mock-chip mono inline-block rounded-full border border-brand-deep bg-brand-deep/15 px-2 py-0.5 text-[9px] uppercase tracking-[0.18em] text-brand-deep">
            New
          </span>
        ) : null}
        <span className="mono text-[10.5px] uppercase tracking-[0.18em] text-ink-3">
          {hour}
        </span>
      </div>
    </div>
  );
}

function DrafterMock() {
  return (
    <div className="flex h-full flex-col">
      <MockChrome label="Drafter · Legal notice" right="Streamed" />
      <div className="flex-1 px-4 py-3 text-[12.5px] leading-[1.55] text-ink-2">
        <p>
          To the Respondent,
          <br />
          Re: <span className="text-ink">Recovery of dues</span>
        </p>
        <p className="mt-2 mock-typewriter">
          Under instructions from our client and subject to Section 65 of the
          Indian Evidence Act, you are hereby called upon to&hellip;
          <span className="mock-caret" aria-hidden />
        </p>
      </div>
    </div>
  );
}

function ResearchMock() {
  const hits = [
    { cite: "Olga Tellis vs BMC", year: "1985" },
    { cite: "Maneka Gandhi vs UoI", year: "1978" },
    { cite: "K.S. Puttaswamy vs UoI", year: "2017" },
  ];
  return (
    <div className="flex h-full flex-col">
      <MockChrome label="Indian Kanoon" right="3 · cited" />
      <div className="flex flex-1 flex-col">
        {hits.map((h, i) => (
          <div
            key={h.cite}
            className={`mock-research-row flex items-center justify-between border-b border-rule px-4 py-3`}
            style={{ ['--i' as string]: i }}
          >
            <span className="text-[13px] tracking-tight text-ink">
              {h.cite}
            </span>
            <span className="mono text-[10px] uppercase tracking-[0.18em] text-ink-3">
              {h.year}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function InvoicingMock() {
  return (
    <div className="flex h-full flex-col">
      <MockChrome label="Invoice · INV-0142" right="UPI" />
      <div className="flex flex-1 flex-col px-4 py-3">
        <div className="flex items-baseline justify-between">
          <span className="text-[12.5px] tracking-tight text-ink-2">
            Mehta &amp; Co.
          </span>
          <span className="display-tight text-[26px] font-medium tracking-tight text-ink">
            ₹ 42,000
          </span>
        </div>
        <p className="mono mt-2 text-[10px] uppercase tracking-[0.18em] text-ink-3">
          Net 7 · Razorpay
        </p>
        <div className="mt-auto flex items-center justify-between border-t border-rule pt-3">
          <span className="mono text-[10px] uppercase tracking-[0.18em] text-ink-3">
            Status
          </span>
          <span className="mock-invoice-chip mono inline-flex items-center gap-1.5 rounded-full border border-rule px-2.5 py-0.5 text-[10px] uppercase tracking-[0.18em]">
            <span className="mock-invoice-chip-dot inline-block h-1.5 w-1.5 rounded-full" />
            <span className="mock-invoice-chip-label">Sent</span>
          </span>
        </div>
      </div>
    </div>
  );
}

function DashboardMock() {
  const items = [
    "Hearings · 3",
    "Conflicts · 1",
    "Overdues · 2",
    "Drafts in review · 4",
  ];
  return (
    <div className="flex h-full flex-col">
      <MockChrome label="Morning brief · 06:00 IST" right="Tue" />
      <div className="flex flex-1 flex-col">
        {items.map((label, i) => (
          <div
            key={label}
            className="mock-dashboard-row flex items-center justify-between border-b border-rule px-4 py-2.5"
            style={{ ['--i' as string]: i }}
          >
            <span className="text-[12.5px] tracking-tight text-ink">
              {label}
            </span>
            <span className="mono text-[10.5px] uppercase tracking-[0.18em] text-ink-3">
              0{i + 1}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Run lint**

```bash
pnpm lint
```

Expected: same 1 pre-existing warning, 0 new errors.

- [ ] **Step 3: Commit**

```bash
git add src/components/marketing/service-mock.tsx
git commit -m "Add ServiceMock dispatcher with six service-specific UI mocks"
```

---

### Task 2: Services tiles grid + page wiring

**Files:**
- Create: `src/components/marketing/services-tiles.tsx`
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Write `services-tiles.tsx`**

```tsx
"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ServiceMock } from "@/components/marketing/service-mock";

type Kind =
  | "case"
  | "causelist"
  | "drafter"
  | "research"
  | "invoicing"
  | "dashboard";

const SERVICES: {
  num: string;
  title: string;
  blurb: string;
  href: string;
  kind: Kind;
}[] = [
  {
    num: "01",
    title: "Case Management",
    blurb:
      "CNR-aware register, party graph, document vault, every order in one drawer.",
    href: "/features#cases",
    kind: "case",
  },
  {
    num: "02",
    title: "Causelist Sync",
    blurb:
      "APHC + TSHC pulled fresh at 06:30 IST. Tick the rows that matter, the rest stay quiet.",
    href: "/features#causelist",
    kind: "causelist",
  },
  {
    num: "03",
    title: "AI Drafter — VakeelBrain",
    blurb:
      "Legal notice, bail app, plaint, written statement. Streamed by Claude, edited by you.",
    href: "/features#drafter",
    kind: "drafter",
  },
  {
    num: "04",
    title: "AI Research",
    blurb:
      "Indian Kanoon search with citations on every line. Cached for instant repeat lookups.",
    href: "/features#research",
    kind: "research",
  },
  {
    num: "05",
    title: "Net Invoicing + UPI",
    blurb:
      "Net invoices in INR, paid by UPI through Razorpay, dunning runs itself.",
    href: "/features#invoicing",
    kind: "invoicing",
  },
  {
    num: "06",
    title: "Intelligence Dashboard",
    blurb:
      "A daily brief at sunrise — hearings, conflicts, overdues, written like a junior would.",
    href: "/features",
    kind: "dashboard",
  },
];

export function ServicesTiles() {
  return (
    <section
      id="services"
      className="relative border-b border-rule bg-paper"
      data-paper="warm"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-10 pt-24 pb-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="mono text-[11px] uppercase tracking-[0.22em] text-ink-3">
              Practice
            </p>
            <h2 className="display-tight mt-4 text-[40px] leading-[1.02] tracking-tight text-ink sm:text-[56px]">
              Six rooms.
              <br />
              <span className="accent">One workspace.</span>
            </h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <p className="reveal max-w-xl text-[16px] leading-[1.6] text-ink-2">
              Vakeel<span className="accent">OS</span>{" "}replaces the
              WhatsApp-screenshot workflow with a calm, keyboard-first studio.
              Each room is independent, every room is connected by the same
              case spine.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-px bg-rule sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <Link
              key={s.num}
              href={s.href}
              className="service-tile group relative flex flex-col gap-6 bg-paper p-6 transition-colors hover:bg-paper-2 lg:p-8"
            >
              <ServiceMock kind={s.kind} />
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="mono text-[10.5px] uppercase tracking-[0.22em] text-ink-3">
                    {s.num}
                  </span>
                  <h3 className="display-tight mt-2 text-[22px] font-medium leading-tight tracking-tight text-ink sm:text-[26px]">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-[13.5px] leading-[1.55] text-ink-3">
                    {s.blurb}
                  </p>
                </div>
                <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-ink-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Modify `src/app/page.tsx` to swap ServicesSection for ServicesTiles**

In `src/app/page.tsx`, change line 5:

```tsx
import { ServicesSection } from "@/components/marketing/services-section";
```

to:

```tsx
import { ServicesTiles } from "@/components/marketing/services-tiles";
```

And change line 14:

```tsx
<ServicesSection />
```

to:

```tsx
<ServicesTiles />
```

- [ ] **Step 3: Run lint**

```bash
pnpm lint
```

Expected: `1 problem (0 errors, 1 warning)` — only the pre-existing `<img>` warning. If a new unused-import warning fires for `ServicesSection`, the swap was incomplete — recheck `page.tsx`.

- [ ] **Step 4: Visual check**

Refresh `http://localhost:3000`. Scroll past the hero. Expected:
- The row-rule list of 6 services is replaced by a 3×2 grid of tiles on desktop, 2×3 on tablet, 1-column on mobile.
- Each tile shows a unique mini-UI mock above its title/blurb.
- The mocks render statically (no animation yet — that's Task 3).
- No layout shift, no console errors.

- [ ] **Step 5: Commit**

```bash
git add src/components/marketing/services-tiles.tsx src/app/page.tsx
git commit -m "Swap services row-rule list for tiles grid with live UI mocks"
```

---

### Task 3: Service mock animation keyframes

**Files:**
- Modify: `src/app/globals.css` (append-only, end of file)

- [ ] **Step 1: Append animation block to `globals.css`**

Open `src/app/globals.css`, scroll to the end, and append this entire block:

```css
/* ---- service tile mocks (forthetimes integration) ---- */

.service-mock { animation: tile-rise 700ms cubic-bezier(0.2, 0.8, 0.2, 1) both; animation-delay: 100ms; }

@keyframes tile-rise {
  from { opacity: 0; transform: translateY(14px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* CaseMock — top row pulses to indicate live update */
.service-mock[data-state="armed"] .mock-case-row--lead {
  animation: case-pulse 4s ease-in-out 800ms infinite;
}
@keyframes case-pulse {
  0%, 100% { background-color: transparent; }
  50%      { background-color: oklch(0.82 0.085 75 / 0.08); }
}

/* CauselistMock — fresh row slides in */
.service-mock[data-state="armed"] .mock-causelist-row--fresh {
  animation: causelist-slide 700ms cubic-bezier(0.2, 0.8, 0.2, 1) 600ms both;
}
@keyframes causelist-slide {
  from { opacity: 0; transform: translateX(20px); }
  to   { opacity: 1; transform: translateX(0); }
}
.service-mock[data-state="armed"] .mock-chip {
  animation: chip-pop 500ms cubic-bezier(0.2, 0.8, 0.2, 1) 1100ms both;
}
@keyframes chip-pop {
  from { opacity: 0; transform: scale(0.8); }
  to   { opacity: 1; transform: scale(1); }
}

/* DrafterMock — typewriter line */
.service-mock[data-state="armed"] .mock-typewriter {
  overflow: hidden;
  white-space: pre-wrap;
  animation: typewriter-mask 2.4s steps(60, end) 600ms both;
}
@keyframes typewriter-mask {
  from { clip-path: inset(0 100% 0 0); }
  to   { clip-path: inset(0 0    0 0); }
}
.mock-caret {
  display: inline-block;
  width: 1px;
  height: 1em;
  margin-left: 1px;
  background: var(--brand-deep);
  vertical-align: -2px;
  animation: caret-blink 0.9s steps(2, end) infinite;
}
@keyframes caret-blink { 50% { opacity: 0; } }

/* ResearchMock — cited rows cascade */
.service-mock[data-state="armed"] .mock-research-row {
  opacity: 0;
  animation: research-pop 500ms cubic-bezier(0.2, 0.8, 0.2, 1) calc(500ms + var(--i) * 220ms) both;
}
@keyframes research-pop {
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* InvoicingMock — Sent → Paid chip flip */
.service-mock .mock-invoice-chip {
  color: var(--ink-3);
  border-color: var(--rule);
}
.service-mock .mock-invoice-chip-dot { background: var(--ink-3); }
.service-mock[data-state="armed"] .mock-invoice-chip {
  animation: invoice-chip-flip 0ms 1400ms both;
}
@keyframes invoice-chip-flip {
  to {
    color: var(--brand-deep);
    border-color: var(--brand-deep);
    background: oklch(0.72 0.105 70 / 0.12);
  }
}
.service-mock[data-state="armed"] .mock-invoice-chip-dot {
  animation: invoice-chip-dot-flip 0ms 1400ms both;
}
@keyframes invoice-chip-dot-flip { to { background: var(--brand-deep); } }
.service-mock[data-state="armed"] .mock-invoice-chip-label::after {
  content: "Paid";
  display: inline-block;
}
.service-mock[data-state="armed"] .mock-invoice-chip-label {
  animation: invoice-chip-label-swap 0ms 1400ms both;
}
@keyframes invoice-chip-label-swap { to { font-size: 0; } }

/* DashboardMock — items cascade */
.service-mock[data-state="armed"] .mock-dashboard-row {
  opacity: 0;
  animation: dashboard-rise 500ms cubic-bezier(0.2, 0.8, 0.2, 1) calc(400ms + var(--i) * 180ms) both;
}
@keyframes dashboard-rise {
  from { opacity: 0; transform: translateY(6px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* Reduced motion — show end states immediately */
@media (prefers-reduced-motion: reduce) {
  .service-mock,
  .service-mock * {
    animation: none !important;
  }
  .service-mock .mock-research-row,
  .service-mock .mock-dashboard-row { opacity: 1 !important; }
  .service-mock .mock-typewriter { clip-path: none !important; }
  .service-mock .mock-invoice-chip {
    color: var(--brand-deep);
    border-color: var(--brand-deep);
    background: oklch(0.72 0.105 70 / 0.12);
  }
  .service-mock .mock-invoice-chip-dot { background: var(--brand-deep); }
  .service-mock .mock-invoice-chip-label::after { content: "Paid"; }
  .service-mock .mock-invoice-chip-label { font-size: 0; }
}
```

> **Note on InvoicingMock label swap:** the keyframe sets `font-size: 0` on the original "Sent" text and the `::after` pseudo-element prints "Paid". This is the trick used to do a text swap without JS state. The animation is `0ms` duration with a 1400ms delay so it fires as an instant flip, not a tween.

- [ ] **Step 2: Run lint**

```bash
pnpm lint
```

Expected: no change in error/warning count.

- [ ] **Step 3: Visual check**

Refresh `http://localhost:3000`. Scroll past the hero to the services grid. Expected:
- Each tile reveals on scroll with a 14px lift.
- Within ~2 seconds of each tile coming into view: CaseMock's top row pulses, CauselistMock's third row slides in with a "New" chip, DrafterMock types out a clause with a blinking caret, ResearchMock cascades 3 citation rows, InvoicingMock flips Sent → Paid, DashboardMock cascades 4 brief items.
- All animations fire **once per scroll-in**, not on a loop (case pulse is the intentional exception).
- Set OS to "reduce motion" if possible and refresh — all mocks show their end state with no animation.

- [ ] **Step 4: Commit**

```bash
git add src/app/globals.css
git commit -m "Add service-mock animation keyframes and reduced-motion fallbacks"
```

---

### Task 4: CrossfadePair component

**Files:**
- Create: `src/components/effects/crossfade-pair.tsx`

This is the shared primitive used by Task 5 (home brief strip) and Task 9 (team portraits). It renders two layered children and crossfades from the first to the second once the element scrolls into view. Pure presentation — no business logic.

- [ ] **Step 1: Write the file**

```tsx
"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export function CrossfadePair({
  from,
  to,
  className,
  duration = 1600,
  hoverFastForward = false,
}: {
  from: ReactNode;
  to: ReactNode;
  className?: string;
  duration?: number;
  hoverFastForward?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDone(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setDone(true);
            io.disconnect();
            return;
          }
        }
      },
      { threshold: 0.35 },
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-done={done}
      className={`crossfade-pair relative ${className ?? ""}`}
      onMouseEnter={hoverFastForward ? () => setDone(true) : undefined}
      onFocus={hoverFastForward ? () => setDone(true) : undefined}
      style={{ ['--crossfade-duration' as string]: `${duration}ms` }}
    >
      <div className="crossfade-layer crossfade-layer--from absolute inset-0">
        {from}
      </div>
      <div className="crossfade-layer crossfade-layer--to absolute inset-0">
        {to}
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Append CrossfadePair CSS to `globals.css` (after Task 3's block)**

```css
/* ---- crossfade pair (forthetimes integration) ---- */

.crossfade-pair { isolation: isolate; }

.crossfade-layer {
  transition: opacity var(--crossfade-duration, 1600ms) cubic-bezier(0.2, 0.8, 0.2, 1);
}

.crossfade-pair .crossfade-layer--from { opacity: 1; }
.crossfade-pair .crossfade-layer--to { opacity: 0; }

.crossfade-pair[data-done="true"] .crossfade-layer--from { opacity: 0; }
.crossfade-pair[data-done="true"] .crossfade-layer--to { opacity: 1; }

@media (prefers-reduced-motion: reduce) {
  .crossfade-layer { transition: none !important; }
}
```

- [ ] **Step 3: Run lint**

```bash
pnpm lint
```

Expected: no change in error/warning count.

- [ ] **Step 4: Commit**

```bash
git add src/components/effects/crossfade-pair.tsx src/app/globals.css
git commit -m "Add CrossfadePair effect component with scroll-triggered fade"
```

---

### Task 5: Home brief strip with crossfade

**Files:**
- Create: `src/components/marketing/home-brief-strip.tsx`
- Modify: `src/app/page.tsx`

A new home-only section that sits between `ServicesTiles` and `WorkflowSection`. Pulls one quote from the about page, uses the existing `about-desk.png` asset, and applies the `CrossfadePair` so the image starts desaturated and warms up on scroll.

- [ ] **Step 1: Write `home-brief-strip.tsx`**

```tsx
import { CrossfadePair } from "@/components/effects/crossfade-pair";

export function HomeBriefStrip() {
  return (
    <section
      className="relative border-b border-rule bg-paper"
      data-paper="deep"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="mono text-[11px] uppercase tracking-[0.22em] text-ink-3">
              The brief
            </p>
            <h2 className="display-tight reveal mt-4 text-[40px] leading-[1.02] tracking-tight text-ink sm:text-[52px]">
              Affordability is not
              <br />
              <span className="accent">an afterthought.</span>
            </h2>
            <p className="mt-6 max-w-md text-[15.5px] leading-[1.65] text-ink-2">
              We don&rsquo;t resell foreign tools. VakeelOS is built around how
              a solo or small firm actually files a vakalatnama, tracks an
              APHC causelist, and bills a client over UPI. Hosted in India,
              priced for India.
            </p>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <figure className="relative aspect-[4/3] w-full overflow-hidden rounded-[3px] border border-rule">
              <CrossfadePair
                className="h-full w-full"
                duration={1800}
                from={
                  <div className="brief-strip-cold absolute inset-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/about-desk.png"
                      alt="A lawyer's desk — lamp, documents, pen"
                      className="absolute inset-0 h-full w-full object-cover object-center"
                    />
                  </div>
                }
                to={
                  <div className="brief-strip-warm absolute inset-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/about-desk.png"
                      alt=""
                      aria-hidden
                      className="absolute inset-0 h-full w-full object-cover object-center"
                    />
                    <div
                      aria-hidden
                      className="absolute inset-0"
                      style={{
                        background:
                          "radial-gradient(120% 80% at 70% 30%, oklch(0.72 0.105 70 / 0.22), transparent 60%)",
                      }}
                    />
                  </div>
                }
              />
              <figcaption className="pointer-events-none absolute inset-x-0 top-0 z-10 flex items-center justify-between px-5 pt-4">
                <span className="mono text-[10.5px] uppercase tracking-[0.22em] text-paper/65">
                  The brief — opening
                </span>
                <span className="mono text-[10.5px] uppercase tracking-[0.22em] text-paper/65">
                  Late night · in chambers
                </span>
              </figcaption>
              <div className="film-grain pointer-events-none absolute inset-0 z-10" aria-hidden />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Append the brief-strip filter CSS to `globals.css`**

```css
/* ---- home brief strip cold / warm filters (forthetimes integration) ---- */
.brief-strip-cold > img { filter: grayscale(0.55) contrast(1.08) brightness(0.82); }
.brief-strip-warm > img { filter: none; }
```

- [ ] **Step 3: Modify `src/app/page.tsx` to mount the strip**

In `src/app/page.tsx`, add the import:

```tsx
import { HomeBriefStrip } from "@/components/marketing/home-brief-strip";
```

And update the JSX so the body looks like:

```tsx
<>
  <HeroCinematic />
  <ServicesTiles />
  <HomeBriefStrip />
  <TestimonialRotator />
  <WorkflowSection />
  <BookingSection />
  <ClosingCta />
</>
```

(The order: hero → tiles → brief strip → testimonials → workflow → booking → cta. The strip sits between tiles and testimonials so the page gets a quiet moment before the testimonial rotator.)

- [ ] **Step 4: Run lint**

```bash
pnpm lint
```

Expected: still `1 problem (0 errors, 1 warning)` — the pre-existing warning. (Our two new `<img>` tags are wrapped in `eslint-disable-next-line` comments.)

- [ ] **Step 5: Visual check**

Refresh `http://localhost:3000`. Scroll past the services grid. Expected:
- A new section appears with the "The brief" eyebrow, a headline ending in "an afterthought.", a paragraph, and the desk image to the right.
- The desk image starts desaturated/dark; on scroll-into-view it crossfades over ~1.8s to a warmer-toned version (still the same source image, just no filter + a brand-gold radial wash).
- No console errors.

- [ ] **Step 6: Commit**

```bash
git add src/components/marketing/home-brief-strip.tsx src/app/page.tsx src/app/globals.css
git commit -m "Add HomeBriefStrip section with crossfade desk reveal"
```

---

### Task 6: Site-wide paper texture + data-paper accents

**Files:**
- Create: `src/components/effects/paper-texture.tsx`
- Modify: `src/app/layout.tsx`
- Modify: `src/app/globals.css`

- [ ] **Step 1: Write `paper-texture.tsx`**

```tsx
export function PaperTexture() {
  return (
    <div
      aria-hidden
      className="paper-texture pointer-events-none fixed inset-0 z-[1]"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        className="h-full w-full"
      >
        <filter id="paper-noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.9"
            numOctaves="2"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#paper-noise)" />
      </svg>
    </div>
  );
}
```

- [ ] **Step 2: Mount in `src/app/layout.tsx`**

Add the import after the Footer import:

```tsx
import { PaperTexture } from "@/components/effects/paper-texture";
```

Then change the `<body>` block from:

```tsx
<body className="min-h-full flex flex-col bg-paper text-ink">
  <Nav />
  <main className="flex-1">{children}</main>
  <Footer />
  <Analytics />
</body>
```

to:

```tsx
<body className="min-h-full flex flex-col bg-paper text-ink">
  <PaperTexture />
  <Nav />
  <main className="relative z-[2] flex-1">{children}</main>
  <Footer />
  <Analytics />
</body>
```

Note: `<main>` gets `relative z-[2]` so all page content sits above the fixed `z-[1]` texture layer. Nav and Footer keep their existing stacking — Nav has its own backdrop, Footer renders below the viewport.

- [ ] **Step 3: Append the texture + data-paper rules to `globals.css`**

```css
/* ---- paper texture (forthetimes integration) ---- */
.paper-texture {
  opacity: 0.05;
  mix-blend-mode: overlay;
}
.paper-texture svg { color: var(--ink); }

/* Per-section accent washes — opt in via data-paper attribute */
section[data-paper] { position: relative; }
section[data-paper]::after {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}
section[data-paper="warm"]::after {
  background: radial-gradient(
    60% 70% at 100% 0%,
    oklch(0.72 0.105 70 / 0.08),
    transparent 70%
  );
}
section[data-paper="cool"]::after {
  background: radial-gradient(
    60% 70% at 0% 100%,
    oklch(0.62 0.012 80 / 0.10),
    transparent 70%
  );
}
section[data-paper="deep"]::after {
  background: radial-gradient(
    80% 80% at 50% 100%,
    oklch(0.115 0.005 80 / 0.20),
    transparent 70%
  );
}
section[data-paper] > * { position: relative; z-index: 1; }
```

- [ ] **Step 4: Run lint**

```bash
pnpm lint
```

Expected: no change in error/warning count.

- [ ] **Step 5: Visual check**

Refresh `http://localhost:3000`. Expected:
- The whole page has a very subtle film-grain noise overlay — visible if you zoom into a flat dark area, invisible from normal viewing distance.
- The services-tiles section (data-paper="warm") has a faint brand-gold wash in the top-right corner.
- The brief-strip section (data-paper="deep") has a darker fade at the bottom.
- Navigate to `/team`, `/features`, `/about` — the texture follows on every page (because it's in the root layout).
- No console errors, no scroll lag, no z-index issues (Nav stays clickable, content scrolls normally).

- [ ] **Step 6: Commit**

```bash
git add src/components/effects/paper-texture.tsx src/app/layout.tsx src/app/globals.css
git commit -m "Add site-wide paper texture overlay and data-paper section accents"
```

---

### Task 7: Workflow nested substeps

**Files:**
- Create: `src/components/marketing/workflow-substeps.tsx`
- Modify: `src/components/marketing/workflow-section.tsx`
- Modify: `src/app/globals.css`

- [ ] **Step 1: Write `workflow-substeps.tsx`**

```tsx
const SUBSTEPS: Record<string, { verb: string; mono: string }[]> = {
  "01": [
    { verb: "Court site polled", mono: "06:30" },
    { verb: "Causelist diffed", mono: "06:31" },
    { verb: "Conflicts flagged", mono: "06:32" },
  ],
  "02": [
    { verb: "Bundle compiled", mono: "09:10" },
    { verb: "Page anchors set", mono: "09:12" },
    { verb: "Read by counsel", mono: "09:14" },
  ],
  "03": [
    { verb: "Template seeded", mono: "13:55" },
    { verb: "Citations resolved", mono: "13:58" },
    { verb: "Sent for review", mono: "14:02" },
  ],
  "04": [
    { verb: "Time captured", mono: "18:30" },
    { verb: "Invoice generated", mono: "18:42" },
    { verb: "Payment requested", mono: "18:45" },
  ],
};

export function WorkflowSubsteps({ stepNum }: { stepNum: string }) {
  const rows = SUBSTEPS[stepNum] ?? [];
  return (
    <ol
      key={stepNum}
      className="workflow-substeps mt-8 flex flex-col gap-2 border-t border-rule pt-6"
      data-step={stepNum}
    >
      {rows.map((s, i) => (
        <li
          key={s.verb}
          className="substep flex items-center justify-between"
          style={{ ['--i' as string]: i }}
        >
          <div className="flex items-center gap-4">
            <span className="mono text-[10.5px] uppercase tracking-[0.22em] text-ink-3">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="text-[14px] tracking-tight text-ink-2">
              {s.verb}
            </span>
          </div>
          <span className="mono text-[10.5px] uppercase tracking-[0.22em] text-ink-3">
            {s.mono} IST
          </span>
        </li>
      ))}
    </ol>
  );
}
```

- [ ] **Step 2: Modify `workflow-section.tsx` to render substeps inside the active pane**

In `src/components/marketing/workflow-section.tsx`, add the import at the top:

```tsx
import { WorkflowSubsteps } from "@/components/marketing/workflow-substeps";
```

Then find the block that renders the step body (around lines 131–147) and insert `<WorkflowSubsteps />` just before the `<div className="mt-10 flex items-center gap-3 text-ink-3">` block (the "auto · 0 clicks" line).

Replace this:

```tsx
<div key={`left-${active}`} className="pull-up lg:col-span-7">
  <p className="mono text-[10.5px] uppercase tracking-[0.22em] text-brand-deep">
    {step.meta}
  </p>
  <h3 className="display-tight mt-4 text-[64px] leading-[0.95] tracking-tight text-ink sm:text-[96px]">
    {step.title}
  </h3>
  <p className="mt-6 max-w-xl text-[16px] leading-[1.6] text-ink-2">
    {step.body}
  </p>
  <div className="mt-10 flex items-center gap-3 text-ink-3">
    <StepIcon className="h-5 w-5 text-brand-deep" />
    <span className="mono text-[11px] uppercase tracking-[0.22em]">
      auto · 0&nbsp;clicks
    </span>
  </div>
</div>
```

with:

```tsx
<div key={`left-${active}`} className="pull-up lg:col-span-7">
  <p className="mono text-[10.5px] uppercase tracking-[0.22em] text-brand-deep">
    {step.meta}
  </p>
  <h3 className="display-tight mt-4 text-[64px] leading-[0.95] tracking-tight text-ink sm:text-[96px]">
    {step.title}
  </h3>
  <p className="mt-6 max-w-xl text-[16px] leading-[1.6] text-ink-2">
    {step.body}
  </p>
  <WorkflowSubsteps stepNum={step.num} />
  <div className="mt-8 flex items-center gap-3 text-ink-3">
    <StepIcon className="h-5 w-5 text-brand-deep" />
    <span className="mono text-[11px] uppercase tracking-[0.22em]">
      auto · 0&nbsp;clicks
    </span>
  </div>
</div>
```

(Note: the `mt-10` on the auto-clicks line is tightened to `mt-8` because the substeps add visual weight above.)

- [ ] **Step 3: Append substep cascade CSS to `globals.css`**

```css
/* ---- workflow substeps cascade (forthetimes integration) ---- */
.workflow-substeps .substep {
  opacity: 0;
  transform: translateY(8px);
  animation: substep-rise 600ms cubic-bezier(0.2, 0.8, 0.2, 1) calc(var(--i) * 1900ms + 200ms) both;
}
@keyframes substep-rise {
  to { opacity: 1; transform: translateY(0); }
}
@media (prefers-reduced-motion: reduce) {
  .workflow-substeps .substep { animation: none !important; opacity: 1 !important; transform: none !important; }
}
```

> **Note on timing:** the workflow tabs auto-advance every 6000ms (`AUTO_MS`). Three substeps at 200ms, 2100ms, 4000ms each take 600ms to fade in — the last one finishes around 4600ms, leaving ~1.4s of dwell on the complete state before the tab cycles. The `key={stepNum}` on the `<ol>` plus `key={`left-${active}`}` on the parent guarantees the cascade re-runs each time the tab changes.

- [ ] **Step 4: Run lint**

```bash
pnpm lint
```

Expected: no change in error/warning count.

- [ ] **Step 5: Visual check**

Refresh `http://localhost:3000`. Scroll to the workflow section. Expected:
- Each tab pane (01 Sync / 02 Brief / 03 Draft / 04 Bill) shows three substeps below the body copy.
- Substeps cascade in one at a time over ~4 seconds.
- When the tab auto-advances (or you click another tab), the substeps reset and cascade again from the new step's substep list.
- The "auto · 0 clicks" line still appears below the substeps.

- [ ] **Step 6: Commit**

```bash
git add src/components/marketing/workflow-substeps.tsx src/components/marketing/workflow-section.tsx src/app/globals.css
git commit -m "Add workflow substeps that cascade within each active tab pane"
```

---

### Task 8: Hero wordmark pre-roll intro (gated, one-shot)

**Files:**
- Create: `src/components/marketing/hero-wordmark-intro.tsx`
- Modify: `src/components/marketing/hero-cinematic.tsx`
- Modify: `src/app/page.tsx`
- Modify: `src/app/globals.css`

- [ ] **Step 1: Write `hero-wordmark-intro.tsx`**

```tsx
"use client";

import { useEffect, useState } from "react";

const SESSION_KEY = "vakeelos.intro.seen";

export function HeroWordmarkIntro() {
  const [visible, setVisible] = useState(false);
  const [dismissing, setDismissing] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.sessionStorage.getItem(SESSION_KEY) === "1") return;

    setVisible(true);
    window.sessionStorage.setItem(SESSION_KEY, "1");

    const onAny = () => dismiss();
    const onKey = (e: KeyboardEvent) => {
      if (e.key) dismiss();
    };
    const timer = window.setTimeout(dismiss, 4500);

    window.addEventListener("pointerdown", onAny, { once: true });
    window.addEventListener("keydown", onKey, { once: true });

    function dismiss() {
      setDismissing(true);
      window.setTimeout(() => setVisible(false), 700);
      window.removeEventListener("pointerdown", onAny);
      window.removeEventListener("keydown", onKey);
      window.clearTimeout(timer);
    }

    return () => {
      window.removeEventListener("pointerdown", onAny);
      window.removeEventListener("keydown", onKey);
      window.clearTimeout(timer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="VakeelOS intro"
      aria-hidden={dismissing}
      data-dismissing={dismissing}
      className="hero-intro fixed inset-0 z-[60] flex items-center justify-center bg-paper"
    >
      <div className="flex flex-col items-center gap-8">
        <span className="hero-intro-mono mono text-[10.5px] uppercase tracking-[0.32em] text-ink-3">
          VakeelOS · A studio launch
        </span>
        <h2 className="display-tight hero-intro-wordmark text-[44px] font-medium leading-[0.92] tracking-tight text-ink sm:text-[88px] lg:text-[120px]">
          {"For the".split("").map((c, i) => (
            <span key={`a-${i}`} style={{ ['--i' as string]: i }}>
              {c === " " ? " " : c}
            </span>
          ))}
          <br />
          <span className="accent">
            {"Indian bar".split("").map((c, i) => (
              <span key={`b-${i}`} style={{ ['--i' as string]: i + 8 }}>
                {c === " " ? " " : c}
              </span>
            ))}
          </span>
        </h2>
        <span className="hero-intro-hint mono text-[10.5px] uppercase tracking-[0.32em] text-ink-3">
          Press any key, or wait
        </span>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Modify `hero-cinematic.tsx` to accept `withIntro` and render the overlay**

In `src/components/marketing/hero-cinematic.tsx`, add the import:

```tsx
import { HeroWordmarkIntro } from "@/components/marketing/hero-wordmark-intro";
```

Change the function signature from:

```tsx
export function HeroCinematic() {
```

to:

```tsx
export function HeroCinematic({ withIntro = false }: { withIntro?: boolean }) {
```

Then, just before the closing `</section>` (around line 118), insert:

```tsx
{withIntro ? <HeroWordmarkIntro /> : null}
```

- [ ] **Step 3: Pass `withIntro` from `src/app/page.tsx`**

Change `<HeroCinematic />` to `<HeroCinematic withIntro />`.

- [ ] **Step 4: Append intro CSS to `globals.css`**

```css
/* ---- hero wordmark intro (forthetimes integration) ---- */
.hero-intro {
  animation: hero-intro-enter 400ms cubic-bezier(0.2, 0.8, 0.2, 1) both;
}
@keyframes hero-intro-enter {
  from { opacity: 0; }
  to   { opacity: 1; }
}
.hero-intro[data-dismissing="true"] {
  animation: hero-intro-leave 700ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
  pointer-events: none;
}
@keyframes hero-intro-leave {
  to { opacity: 0; transform: translateY(-8px); }
}

.hero-intro-wordmark > span {
  display: inline-block;
  opacity: 0;
  transform: translateY(0.4em);
  animation: hero-intro-letter 700ms cubic-bezier(0.2, 0.8, 0.2, 1)
    calc(180ms + var(--i) * 45ms) both;
}
@keyframes hero-intro-letter {
  to { opacity: 1; transform: translateY(0); }
}

.hero-intro-mono { animation: hero-intro-fade 700ms ease-out 80ms both; }
.hero-intro-hint { animation: hero-intro-fade 900ms ease-out 2200ms both; }
@keyframes hero-intro-fade {
  from { opacity: 0; }
  to   { opacity: 1; }
}
```

> **Note on z-index:** the intro sits at `z-[60]`, above Nav (which is typically `z-50` or unset). PaperTexture is `z-[1]` and `<main>` is `z-[2]`, so the intro covers everything. We don't override Nav's z-index — the intro wins by sheer numeric weight.

- [ ] **Step 5: Run lint**

```bash
pnpm lint
```

Expected: no change in error/warning count.

- [ ] **Step 6: Visual check**

Open a fresh browser tab (or use a private/incognito window) and visit `http://localhost:3000`. Expected:
- A black overlay shows the eyebrow "VakeelOS · A studio launch", the wordmark "For the / Indian bar" (letters rising one by one), and a hint "Press any key, or wait".
- Pressing any key, clicking anywhere, or waiting 4.5 seconds dismisses it with a fade-up.
- Refresh the page (same tab) — the overlay does NOT show again.
- Open a fresh tab again — the overlay returns.
- Set OS to "reduce motion", refresh in a fresh tab — the overlay does not show.

- [ ] **Step 7: Commit**

```bash
git add src/components/marketing/hero-wordmark-intro.tsx src/components/marketing/hero-cinematic.tsx src/app/page.tsx src/app/globals.css
git commit -m "Add one-shot hero wordmark pre-roll intro, gated by sessionStorage"
```

---

### Task 9: Team page initials → headshot crossfade

**Files:**
- Modify: `src/app/team/page.tsx`
- Modify: `src/app/globals.css`

The current team page renders `Image` portraits directly. We introduce a name-initials layer that crossfades to the headshot on view.

- [ ] **Step 1: Modify `src/app/team/page.tsx`**

In `src/app/team/page.tsx`, add the CrossfadePair import at the top:

```tsx
import { CrossfadePair } from "@/components/effects/crossfade-pair";
```

Then add a helper above the component (after the `MEMBERS` array, before `export default function TeamPage`):

```tsx
function nameInitials(name: string): string {
  return name
    .split(/\s+/)
    .map((p) => p[0] ?? "")
    .join("")
    .slice(0, 2)
    .toUpperCase();
}
```

Find the portrait block (the `<div className="relative aspect-[4/5] ...">` inside the `MEMBERS.map`, around lines 149–182). Replace this block:

```tsx
<div className="relative aspect-[4/5] w-full overflow-hidden rounded-[6px] border border-rule bg-paper-2 transition-colors duration-300 group-hover:border-saffron/60">
  {m.photo ? (
    <Image
      src={m.photo}
      alt={m.name}
      fill
      className="object-cover object-top transition-transform duration-[1200ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-[1.04]"
      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
    />
  ) : (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
      <span className="mono text-[11px] uppercase tracking-[0.22em] text-ink-3">
        Photo TBD
      </span>
      <span aria-hidden className="block h-px w-8 bg-rule-strong" />
    </div>
  )}

  {/* Index number */}
  <span className="absolute top-3 left-3 mono text-[10px] uppercase tracking-[0.22em] text-paper/70 drop-shadow">
    0{i + 1}
  </span>

  {/* Hover overlay reveal */}
  <div
    aria-hidden
    className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-saffron via-saffron/95 to-saffron/0 px-4 pb-4 pt-12 opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100"
  >
    <span className="mono inline-flex items-center gap-1.5 text-[10.5px] uppercase tracking-[0.22em] text-paper">
      View bio
      <ArrowUpRight className="h-3 w-3" />
    </span>
  </div>
</div>
```

with:

```tsx
<div className="relative aspect-[4/5] w-full overflow-hidden rounded-[6px] border border-rule bg-paper-2 transition-colors duration-300 group-hover:border-saffron/60">
  <CrossfadePair
    className="h-full w-full"
    duration={1200}
    hoverFastForward
    from={
      <div className="team-initials absolute inset-0 flex items-center justify-center bg-paper-2">
        <span className="display-tight text-[88px] font-medium leading-none tracking-tight text-ink-3">
          {nameInitials(m.name)}
        </span>
      </div>
    }
    to={
      m.photo ? (
        <Image
          src={m.photo}
          alt={m.name}
          fill
          className="object-cover object-top transition-transform duration-[1200ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-[1.04]"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
          <span className="mono text-[11px] uppercase tracking-[0.22em] text-ink-3">
            Photo TBD
          </span>
          <span aria-hidden className="block h-px w-8 bg-rule-strong" />
        </div>
      )
    }
  />

  {/* Index number */}
  <span className="pointer-events-none absolute top-3 left-3 z-20 mono text-[10px] uppercase tracking-[0.22em] text-paper/70 drop-shadow">
    0{i + 1}
  </span>

  {/* Hover overlay reveal */}
  <div
    aria-hidden
    className="pointer-events-none absolute inset-x-0 bottom-0 z-20 translate-y-full bg-gradient-to-t from-saffron via-saffron/95 to-saffron/0 px-4 pb-4 pt-12 opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100"
  >
    <span className="mono inline-flex items-center gap-1.5 text-[10.5px] uppercase tracking-[0.22em] text-paper">
      View bio
      <ArrowUpRight className="h-3 w-3" />
    </span>
  </div>
</div>
```

(The two additions: `z-20` on the index number and hover overlay so they paint above the CrossfadePair layers, and `pointer-events-none` on the index number.)

- [ ] **Step 2: Run lint**

```bash
pnpm lint
```

Expected: no change in error/warning count.

- [ ] **Step 3: Visual check**

Navigate to `http://localhost:3000/team`. Expected:
- Each founder card initially shows large monogram initials ("VT" / "VC") on a paper-2 background.
- As you scroll the cards into view, the initials fade to 0 and the headshot fades to 1 over ~1.2 seconds.
- Hovering or focusing a card before it scrolls in fast-forwards the crossfade.
- Tapping/clicking a card still opens the bio modal.
- Modal still dismisses on Escape and on backdrop click.

- [ ] **Step 4: Commit**

```bash
git add src/app/team/page.tsx
git commit -m "Add initials → headshot crossfade reveal on team page cards"
```

---

### Task 10: Final verification — lint clean, build green, bundle budget

**Files:** none

- [ ] **Step 1: Final lint**

```bash
pnpm lint
```

Expected: `1 problem (0 errors, 1 warning)` — the pre-existing warning on `hero-cinematic.tsx:150`. No new errors or warnings introduced by this branch.

- [ ] **Step 2: Production build**

```bash
pnpm build
```

Expected: build completes successfully. Note the route bundle size for `/` and `/team` reported in the output.

- [ ] **Step 3: Compare bundle delta vs main**

From the project root (not the worktree), check the previous main bundle size by running build on main in a separate worktree or by reading the prior build output. The spec budgets **< 8 KB gzipped** for the home page bundle delta. If the delta is over 8 KB:

1. Check the build output for any accidentally-included large dependency.
2. Confirm `service-mock.tsx` did not import anything unexpected.
3. Move large constant arrays into separate non-default-exported files only if needed.

If under budget, proceed.

- [ ] **Step 4: Run dev server one more time, walk the page**

```bash
pnpm dev
```

Open `http://localhost:3000` in a fresh tab. Walk through:
- Pre-roll intro appears, dismisses on key/click/timeout.
- Hero renders, cursor-halo works, video plays.
- Services tiles grid, each mock animates once on scroll.
- Home brief strip with desk crossfade.
- Testimonials section unchanged.
- Workflow tabs cycle, substeps cascade.
- Booking section unchanged.
- Closing CTA unchanged.
- Navigate to `/team` — initials crossfade to headshots, modal works.
- Navigate to `/about` — unchanged but the paper texture is visible.
- Navigate to `/features`, `/pricing`, `/security`, `/contact`, `/faq`, `/waitlist` — unchanged but the paper texture is visible everywhere.

- [ ] **Step 5: Final summary commit (optional, only if other files changed)**

If pnpm build generated new lockfile entries or any other tracked artifacts:

```bash
git status
git diff
```

Decide whether to commit. Otherwise no commit needed.

---

## After implementation

Worktree state:
- 9 implementation commits on `forthetimes-integration` branch.
- Worktree at `.worktrees/forthetimes-integration/` shares the repo with `main`.
- Dev server proven working.

To preview locally:
```bash
cd .worktrees/forthetimes-integration
pnpm dev
```

To merge to main (after user approval):
```bash
cd /Users/cvv_sylar/Documents/Projects/VakeelOS_Marketing_JosephLaw
git checkout main
git merge --no-ff forthetimes-integration
```

To discard the work:
```bash
git worktree remove .worktrees/forthetimes-integration
git branch -D forthetimes-integration
```

To escalate to Approach A (full cinematic rebuild):
- Keep all six new files.
- Rebuild `hero-cinematic.tsx`, `services-tiles.tsx`, `workflow-section.tsx` against a unified scroll-scrubbed timeline.
- Branch off `forthetimes-integration` into `forthetimes-integration-a` so B remains as a fallback.
