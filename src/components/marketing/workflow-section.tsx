"use client";

import { useEffect, useState } from "react";
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
    body: "Causelist auto-pulls APHC + TSHC. Tick the rows you actually argue today. Everything else stays in the drawer.",
    Icon: CalendarClock,
  },
  {
    num: "02",
    title: "Brief",
    meta: "Tuesday · 09:14 IST",
    body: "Open a case, fetch the last order. Claude reads the PDF, you read the directions, your junior reads neither because they don’t need to.",
    Icon: Gavel,
  },
  {
    num: "03",
    title: "Draft",
    meta: "Tuesday · 14:02 IST",
    body: "Pick a template — legal notice, bail app, plaint. VakeelBrain streams a first draft. You refine in TipTap, export as .docx.",
    Icon: FileSignature,
  },
  {
    num: "04",
    title: "Bill",
    meta: "Tuesday · 18:45 IST",
    body: "Net invoice in INR, Razorpay UPI link embedded, dunning runs itself. Your client pays before they reach the hallway.",
    Icon: Receipt,
  },
];

const AUTO_MS = 6000;

export function WorkflowSection() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setActive((i) => (i + 1) % STEPS.length);
    }, AUTO_MS);
    return () => clearInterval(id);
  }, [paused]);

  const step = STEPS[active];
  const StepIcon = step.Icon;

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
              const isActive = i === active;
              return (
                <button
                  key={s.num}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-pressed={isActive}
                  className={`mono press inline-flex items-center gap-2.5 rounded-full border px-4 py-2 text-[11px] uppercase tracking-[0.22em] transition-all ${
                    isActive
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

            {/* progress rail */}
            <ol className="lg:col-span-5">
              {STEPS.map((s, i) => {
                const isActive = i === active;
                return (
                  <li key={s.num}>
                    <button
                      type="button"
                      onClick={() => setActive(i)}
                      aria-current={isActive ? "step" : undefined}
                      className={`group relative flex w-full items-center justify-between border-b border-rule py-5 pl-6 pr-2 text-left transition-colors ${
                        isActive ? "text-ink" : "text-ink-3 hover:text-ink-2"
                      }`}
                    >
                      <span
                        aria-hidden
                        className={`absolute left-0 top-0 h-full w-[2px] transition-colors ${
                          isActive ? "bg-brand" : "bg-transparent"
                        }`}
                      />
                      <div className="flex items-center gap-4">
                        <span className="mono text-[10.5px] uppercase tracking-[0.22em]">
                          Step {s.num}
                        </span>
                        <span className="font-sans text-[16px] font-medium tracking-tight">
                          {s.title}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="mono text-[10.5px] uppercase tracking-[0.16em] opacity-70">
                          {s.meta.split(" · ")[1]}
                        </span>
                        <s.Icon
                          className={`h-4 w-4 transition-colors ${
                            isActive ? "text-brand-deep" : ""
                          }`}
                        />
                      </div>
                    </button>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
