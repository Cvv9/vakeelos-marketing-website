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
  const [armed, setArmed] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  useEffect(() => {
    const node = wrapRef.current;
    if (!node || armed) return;
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
  }, [armed]);

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
