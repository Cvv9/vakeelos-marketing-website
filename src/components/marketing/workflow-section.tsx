"use client";

import { useEffect, useRef, useState } from "react";
import { CalendarClock, FileSignature, Gavel, Receipt } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { WorkflowSubsteps } from "@/components/marketing/workflow-substeps";

const STEPS: {
  num: string;
  title: string;
  meta: string;
  body: string;
  Icon: LucideIcon;
}[] = [
  {
    num: "01",
    title: "Sync",
    meta: "Tuesday · 06:30 IST",
    body: "Causelist auto-pulls High Courts and district courts. Tick the rows you actually argue today. Everything else stays in the drawer.",
    Icon: CalendarClock,
  },
  {
    num: "02",
    title: "Brief",
    meta: "Tuesday · 09:14 IST",
    body: "Dashboard first — today's hearings, overnight alerts, pending tasks. Open a case, check the stage, fetch the last order. VakeelBrain reads the PDF; you read the four bullets.",
    Icon: Gavel,
  },
  {
    num: "03",
    title: "Draft",
    meta: "Tuesday · 14:02 IST",
    body: "Pick a template — legal notice, bail app, plaint, vakalatnama, writ petition. VakeelBrain seeds it from your case data, queries Indian Kanoon, ILDC, and your own firm library. You refine, export as .docx.",
    Icon: FileSignature,
  },
  {
    num: "04",
    title: "Bill",
    meta: "Tuesday · 18:45 IST",
    body: "Time entries roll up into a draft invoice in two clicks. Your letterhead, a UPI link, sent on WhatsApp. Overdue? The reminder runs itself. Month-end goes to Tally.",
    Icon: Receipt,
  },
];

const AUTO_MS = 6000;

// Each step occupies exactly 1 viewport-height of scroll.
// An extra 0.5 vh lets the user "rest" on the last step before the section scrolls away.
const SCROLL_HEIGHTS_PER_STEP = 1;
const LAST_STEP_PAUSE = 0.5;
const WRAPPER_VH = STEPS.length * SCROLL_HEIGHTS_PER_STEP + LAST_STEP_PAUSE; // 4.5

export function WorkflowSection({ scrollDriven = false }: { scrollDriven?: boolean }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  // Used only in scrollDriven mode — the tall outer div whose scroll position
  // we convert into an active step index.
  const wrapperRef = useRef<HTMLDivElement>(null);

  // ── Auto-timer (homepage, non-scroll-driven) ──────────────────────────────
  useEffect(() => {
    if (paused || scrollDriven) return;
    const id = setInterval(() => {
      setActive((i) => (i + 1) % STEPS.length);
    }, AUTO_MS);
    return () => clearInterval(id);
  }, [paused, scrollDriven]);

  // ── Scroll-driven: purely passive, no event interception ──────────────────
  // The wrapper div is (STEPS.length + 0.5) × 100vh tall. The sticky section
  // inside is pinned to the top of the viewport. We read -wrapper.rect.top
  // (= how many px we've scrolled into the wrapper) and divide by viewport
  // height to get the step index.
  useEffect(() => {
    if (!scrollDriven) return;

    const onScroll = () => {
      const wrapper = wrapperRef.current;
      if (!wrapper) return;
      const scrolled = -wrapper.getBoundingClientRect().top; // px scrolled into wrapper
      const vh = window.innerHeight;
      if (scrolled <= 0) { setActive(0); return; }
      const step = Math.min(
        STEPS.length - 1,
        Math.max(0, Math.floor(scrolled / vh))
      );
      setActive(step);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // sync on mount
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollDriven]);

  const step = STEPS[active];
  const StepIcon = step.Icon;
  const isLast = active === STEPS.length - 1;

  // ── SCROLL-DRIVEN RENDER ──────────────────────────────────────────────────
  // The outer div is the tall scroll rail. The inner <section> is sticky so it
  // stays centered in the viewport while the user scrolls through all steps.
  if (scrollDriven) {
    return (
      <div
        ref={wrapperRef}
        className="relative border-b border-rule"
        style={{ height: `${WRAPPER_VH * 100}vh` }}
      >
        <section
          id="workflow"
          className="sticky top-0 h-screen overflow-hidden bg-paper"
        >
          <div className="bg-rules h-full">
            <div className="mx-auto flex h-full max-w-7xl flex-col px-6 pb-6 pt-8 lg:px-10 lg:pb-8 lg:pt-10">

              {/* ── Headline + description ─────────────────── */}
              <div className="grid shrink-0 grid-cols-1 gap-4 lg:grid-cols-12">
                <div className="lg:col-span-5">
                  <p className="mono text-[11px] uppercase tracking-[0.22em] text-ink-3">
                    Workflow
                  </p>
                  <h2 className="display-tight mt-2 text-[32px] leading-[1.0] tracking-tight text-ink sm:text-[44px]">
                    A Tuesday,
                    <br />
                    <span className="accent">cleanly billed.</span>
                  </h2>
                </div>
                <div className="hidden lg:col-span-6 lg:col-start-7 lg:flex lg:items-end">
                  <p className="text-[15px] leading-[1.6] text-ink-2">
                    Four moves, one workspace. Sync the docket, brief the
                    matter, draft the document, send the invoice. The system
                    does the logistics so you can do the lawyering.
                  </p>
                </div>
              </div>

              {/* ── Step pills ────────────────────────────── */}
              <div className="mt-5 flex shrink-0 flex-wrap items-center gap-2 border-b border-rule pb-4">
                {STEPS.map((s, i) => {
                  const isAct = i === active;
                  return (
                    <button
                      key={s.num}
                      type="button"
                      onClick={() => setActive(i)}
                      aria-pressed={isAct}
                      className={`mono press inline-flex items-center gap-2.5 rounded-full border px-4 py-2 text-[11px] uppercase tracking-[0.22em] transition-all ${
                        isAct
                          ? "border-ink bg-ink text-paper"
                          : "border-rule text-ink-3 hover:border-rule-strong hover:text-ink-2"
                      }`}
                    >
                      <span className="opacity-60">{s.num}</span>
                      <span>{s.title}</span>
                    </button>
                  );
                })}
                <span className="mono ml-auto inline-flex items-center gap-2 text-[10.5px] uppercase tracking-[0.22em] text-ink-3">
                  <span className="float-dot block h-1.5 w-1.5 rounded-full bg-brand-deep" />
                  {String(active + 1).padStart(2, "0")} / 04 · scroll
                </span>
              </div>

              {/* ── Step content + arc ────────────────────── */}
              <div className="mt-6 grid min-h-0 flex-1 grid-cols-1 gap-6 lg:grid-cols-12">
                <div
                  key={`left-${active}`}
                  className="pull-up flex min-h-0 flex-col lg:col-span-7"
                >
                  <p className="mono text-[10.5px] uppercase tracking-[0.22em] text-brand-deep">
                    {step.meta}
                  </p>
                  <h3 className="display-tight mt-3 text-[52px] leading-[0.95] tracking-tight text-ink sm:text-[68px] lg:text-[80px]">
                    {step.title}
                  </h3>
                  <p className="mt-4 max-w-xl text-[15px] leading-[1.6] text-ink-2">
                    {step.body}
                  </p>
                  <WorkflowSubsteps stepNum={step.num} />
                  <div className="mt-5 flex items-center gap-3 text-ink-3">
                    <StepIcon className="h-5 w-5 text-brand-deep" />
                    <span className="mono text-[11px] uppercase tracking-[0.22em]">
                      auto · 0&nbsp;clicks
                    </span>
                  </div>
                  <p className="mono mt-4 flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-ink-4">
                    <span aria-hidden>↓</span>
                    <span>
                      {isLast ? "Continue scrolling" : "Scroll to advance"}
                    </span>
                  </p>
                </div>

                {/* Arc hidden on mobile to save vertical space */}
                <div className="hidden lg:flex lg:col-span-5 lg:items-center lg:justify-center">
                  <WorkflowArc active={active} onSelect={setActive} />
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>
    );
  }

  // ── AUTO-PLAY RENDER (homepage teaser) ─────────────────────────────────────
  return (
    <section
      id="workflow"
      className="relative border-b border-rule bg-paper"
    >
      <div className="bg-rules">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          {/* eyebrow + headline */}
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="mono text-[11px] uppercase tracking-[0.22em] text-ink-3">
                Workflow
              </p>
              <h2 className="display-tight reveal mt-4 text-[40px] leading-[1.02] tracking-tight text-ink sm:text-[60px]">
                A Tuesday,
                <br />
                <span className="accent">cleanly billed.</span>
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <p className="reveal text-[16px] leading-[1.6] text-ink-2">
                Four moves, one workspace. Sync the docket, brief the matter,
                draft the document, send the invoice. The system does the
                logistics so you can do the lawyering.
              </p>
            </div>
          </div>

          {/* segmented pill control + ticker */}
          <div
            className="mt-16 flex flex-wrap items-center gap-2 border-b border-rule pb-5"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {STEPS.map((s, i) => {
              const isAct = i === active;
              return (
                <button
                  key={s.num}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-pressed={isAct}
                  className={`mono press inline-flex items-center gap-2.5 rounded-full border px-4 py-2 text-[11px] uppercase tracking-[0.22em] transition-all ${
                    isAct
                      ? "border-ink bg-ink text-paper"
                      : "border-rule text-ink-3 hover:border-rule-strong hover:text-ink-2"
                  }`}
                >
                  <span className="opacity-60">{s.num}</span>
                  <span>{s.title}</span>
                </button>
              );
            })}
            <span className="mono ml-auto inline-flex items-center gap-2 text-[10.5px] uppercase tracking-[0.22em] text-ink-3">
              <span
                className={`block h-1.5 w-1.5 rounded-full ${
                  paused ? "bg-ink-4" : "float-dot bg-brand-deep"
                }`}
              />
              {String(active + 1).padStart(2, "0")} / 04 ·{" "}
              {paused ? "paused" : "auto"}
            </span>
          </div>

          {/* content panel — keyed so it re-mounts and replays the rise */}
          <div
            className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-12"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
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

            {/* SVG arc timeline */}
            <div className="lg:col-span-5 flex items-center justify-center py-4">
              <WorkflowArc active={active} onSelect={setActive} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── WorkflowArc ──────────────────────────────────────────────────────────────

const ARC_NODES = [
  { x: 45,  y: 110, label: "Sync",  meta: "06:30", isAbove: false },
  { x: 180, y: 50,  label: "Brief", meta: "09:14", isAbove: true  },
  { x: 320, y: 120, label: "Draft", meta: "14:02", isAbove: false },
  { x: 455, y: 62,  label: "Bill",  meta: "18:45", isAbove: true  },
] as const;

const ARC_SEGMENTS = [
  "M 45,110 C 105,110 118,50 180,50",
  "M 180,50 C 242,50 258,120 320,120",
  "M 320,120 C 382,120 395,62 455,62",
] as const;

function WorkflowArc({
  active,
  onSelect,
}: {
  active: number;
  onSelect: (i: number) => void;
}) {
  return (
    <svg
      viewBox="0 0 500 175"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-md"
      style={{ overflow: "visible" }}
      aria-label="A Tuesday at the bar — step timeline"
      role="img"
    >
      {/* Base track */}
      {ARC_SEGMENTS.map((d, i) => (
        <path
          key={`base-${i}`}
          d={d}
          fill="none"
          stroke="var(--rule-strong)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      ))}

      {/* Active / past glow overlay */}
      {ARC_SEGMENTS.map((d, i) =>
        active > i ? (
          <path
            key={`glow-${i}`}
            d={d}
            fill="none"
            stroke="var(--brand)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeOpacity={0.65}
          />
        ) : null
      )}

      {/* Nodes */}
      {ARC_NODES.map((n, i) => {
        const isActive = i === active;
        const isPast   = i < active;
        const labelY   = n.isAbove ? n.y - 24 : n.y + 30;
        const metaY    = n.isAbove ? n.y - 11 : n.y + 44;

        return (
          <g
            key={i}
            tabIndex={0}
            role="button"
            aria-label={`Step ${i + 1}: ${n.label}`}
            aria-pressed={isActive}
            onClick={() => onSelect(i)}
            onKeyDown={(e) => e.key === "Enter" && onSelect(i)}
            style={{ cursor: "pointer" }}
          >
            {isActive && (
              <circle
                cx={n.x}
                cy={n.y}
                r="22"
                fill="none"
                stroke="var(--brand)"
                strokeWidth="1"
                className="workflow-node-pulse"
              />
            )}

            <circle
              cx={n.x}
              cy={n.y}
              r="13"
              fill={
                isActive ? "var(--brand-deep)"
                : isPast  ? "var(--paper-3)"
                :           "var(--paper-2)"
              }
              stroke={isActive || isPast ? "var(--brand)" : "var(--rule-strong)"}
              strokeWidth="1.5"
              style={{ transition: "fill 0.45s, stroke 0.45s" }}
            />

            <text
              x={n.x}
              y={n.y + 4}
              textAnchor="middle"
              fontSize="9"
              fill={isActive ? "var(--ink)" : isPast ? "var(--brand)" : "var(--ink-4)"}
              fontFamily="var(--font-jetbrains-mono, ui-monospace, monospace)"
              letterSpacing="0.05em"
              style={{ userSelect: "none", transition: "fill 0.45s" }}
            >
              {String(i + 1).padStart(2, "0")}
            </text>

            <text
              x={n.x}
              y={labelY}
              textAnchor="middle"
              fontSize="11.5"
              fontWeight="500"
              fill={isActive ? "var(--ink)" : "var(--ink-3)"}
              fontFamily="var(--font-inter, ui-sans-serif, sans-serif)"
              letterSpacing="-0.01em"
              style={{ userSelect: "none", transition: "fill 0.45s" }}
            >
              {n.label}
            </text>

            <text
              x={n.x}
              y={metaY}
              textAnchor="middle"
              fontSize="8.5"
              fill={isActive ? "var(--brand-deep)" : "var(--ink-4)"}
              fontFamily="var(--font-jetbrains-mono, ui-monospace, monospace)"
              letterSpacing="0.08em"
              style={{ userSelect: "none", transition: "fill 0.45s" }}
            >
              {n.meta} IST
            </text>
          </g>
        );
      })}
    </svg>
  );
}
