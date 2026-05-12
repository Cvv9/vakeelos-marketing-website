"use client";

import { useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";

const Brand = () => (
  <>
    Vakeel<span className="accent">OS</span>
  </>
);

const FAQS: { q: ReactNode; a: ReactNode }[] = [
  {
    q: "How long does onboarding take for a solo practice?",
    a: "Most advocates are live within forty minutes. We import a CSV of cases or you start from scratch. The Bar Council verification step takes a single OTP.",
  },
  {
    q: <>Does <Brand /> keep up with the court portals?</>,
    a: "Yes. Causelist and CNR pulls run on a schedule with automatic retries and drift checks. When a court portal is flaky, the failure surfaces quietly in the dashboard, never in your inbox.",
  },
  {
    q: <>Can I use <Brand /> in Hindi?</>,
    a: "The UI ships in English with a Hindi locale toggle. AI Drafter accepts Hindi prompts and produces Devanagari + Roman scripts side-by-side for hybrid filings.",
  },
  {
    q: "What happens to my data if I cancel?",
    a: "You receive a one-click ZIP export — cases, hearings, documents, invoices, and the AI conversation history — within 60 seconds. We then purge it from our Indian data centres within 30 days.",
  },
  {
    q: <>Is <Brand /> GST-compliant for invoicing?</>,
    a: <><Brand /> issues net invoices in INR. Advocates can attach their own tax line items as needed. We don’t auto-apply GST because most advocates are below the threshold and prefer to opt-in manually.</>,
  },
  {
    q: "Where is my data stored?",
    a: "All data lives in Indian data centres in Mumbai. Documents are stored encrypted; audit logs sit beside them. We never replicate to non-Indian regions.",
  },
  {
    q: "Can my clerk and junior log in too?",
    a: "Yes — on the Firm plan. Roles map to how a chamber actually moves: senior, junior, clerk. Each role sees a different default dashboard and can be scoped per case.",
  },
];

export function FaqSection() {
  return (
    <section className="relative bg-paper">
      <div className="mx-auto max-w-4xl px-6 py-24 lg:px-10 lg:py-32">
        <p className="mono text-[11px] uppercase tracking-[0.22em] text-ink-3">
          Frequently asked
        </p>
        <h1 className="display-tight reveal mt-4 text-[44px] leading-[1.02] tracking-tight text-ink sm:text-[64px]">
          Before you
          <br />
          <span className="accent">brief us.</span>
        </h1>
        <p className="reveal mt-6 max-w-xl text-[16px] leading-[1.6] text-ink-3">
          Plain answers about onboarding, eCourts reliability, language support,
          data residency, and net invoicing — written for advocates at every scale.
        </p>

        <ul className="mt-16 divide-y divide-rule border-y border-rule">
          {FAQS.map((f, i) => (
            <FaqItem key={i} q={f.q} a={f.a} index={i} />
          ))}
        </ul>
      </div>
    </section>
  );
}

function FaqItem({ q, a, index }: { q: ReactNode; a: ReactNode; index: number }) {
  const [open, setOpen] = useState(index === 0);
  return (
    <li>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-start justify-between gap-6 py-6 text-left"
        aria-expanded={open}
      >
        <span className="flex items-baseline gap-4">
          <span className="mono text-[11px] uppercase tracking-[0.22em] text-ink-3">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="display-tight text-[19px] font-medium leading-snug tracking-tight text-ink">
            {q}
          </span>
        </span>
        <span
          className={`grid h-7 w-7 shrink-0 place-items-center rounded-full border border-rule text-ink-2 transition-transform ${
            open ? "rotate-180 bg-ink text-paper" : ""
          }`}
        >
          <ChevronDown className="h-3.5 w-3.5" />
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ease-out ${
          open ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="ml-12 max-w-xl text-[14.5px] leading-[1.6] text-ink-3">
            {a}
          </p>
        </div>
      </div>
    </li>
  );
}
