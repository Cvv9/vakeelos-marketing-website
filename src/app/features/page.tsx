import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

type Status = "live" | "rolling" | "soon";

const GROUPS: {
  group: string;
  kicker: string;
  intro: string;
  modules: {
    no: string;
    title: string;
    blurb: string;
    bullets: string[];
    status: Status;
    statusLabel: string;
  }[];
}[] = [
  {
    group: "Court-side",
    kicker: "01 — 04",
    intro:
      "The four modules a litigation advocate touches every working day. Designed around CNR numbers, daily causelists, and judge-bench rosters — not generic CRM ideas.",
    modules: [
      {
        no: "01",
        title: "Case Register",
        blurb:
          "One vault for every matter, party, and document. Filter by court, judge, stage, opposing counsel, or last activity.",
        bullets: [
          "CNR-based case identity, populated from eCourts on creation",
          "Parties, advocates, and IAs tracked separately, with WhatsApp/email per party",
          "Document vault with full-text search across PDFs and images",
          "Linked timeline of hearings, orders, drafts, invoices",
        ],
        status: "live",
        statusLabel: "Live",
      },
      {
        no: "02",
        title: "Causelist Sync",
        blurb:
          "Daily APHC and TSHC pulls into a clean inbox. You tick the rows that are yours; only those become tracked cases.",
        bullets: [
          "Selective tracking — your case list never drowns in stranger names",
          "11,200+ entries pulled per month, with quiet drift detection in the background",
          "On recurrence, the same matter auto-links and a hearing is scheduled",
          "More High Courts rolling out: KHC, DHC, BHC, MHC",
        ],
        status: "live",
        statusLabel: "Live",
      },
      {
        no: "03",
        title: "Hearing Tracker",
        blurb:
          "Court-by-court calendar with conflict detection. Reminders go out the night before, on the channel your client actually uses.",
        bullets: [
          "Conflict detection across courts, juniors, and clerks",
          "WhatsApp templates pre-approved with WATI: hearing_reminder, overdue_invoice",
          "Adjournment ladder visible across the case timeline",
          "Court-corridor mobile view for quick item-number lookup",
        ],
        status: "live",
        statusLabel: "Live",
      },
      {
        no: "04",
        title: "Court Order Vault",
        blurb:
          "We pull the latest order from the court portal and let VakeelBrain summarise it into the four bullets you actually need.",
        bullets: [
          "Order PDF auto-fetched within hours of upload",
          "AI summary: result, interim relief, directions, next date",
          "Stored as a Document and a Case Note in one atomic step",
          "Manual override: paste a PDF and ask for the same summary",
        ],
        status: "live",
        statusLabel: "Live",
      },
    ],
  },
  {
    group: "VakeelBrain",
    kicker: "05 — 06",
    intro:
      "Two AI surfaces, both connected to your case. VakeelBrain doesn't replace the advocate — it removes the blank page, the file search, and the repetitive first draft.",
    modules: [
      {
        no: "05",
        title: "VakeelBrain Drafter",
        blurb:
          "Indian court templates filled from your case data: bail applications, plaints, replies, legal notices, and rejoinders.",
        bullets: [
          "Drafted from party names, CNR, prior orders — not a blank chatbot",
          "Streams in your editor, refine inline like a junior's first cut",
          "Export to .docx or PDF, signed by senior in the workflow",
          "20 drafts/month included on Solo, unlimited on Firm",
        ],
        status: "soon",
        statusLabel: "In development",
      },
      {
        no: "06",
        title: "VakeelBrain Research",
        blurb:
          "RAG over Indian Kanoon. Ask in plain English. Get an answer with citations you can verify and cite.",
        bullets: [
          "Citations grounded in retrieved judgment chunks, not invented",
          "Repeat queries cached for instant lookup, scoped to your firm",
          "Manupatra and SCC Online roadmap for Phase 2 (FY27)",
          "Your queries and uploads never train any foundational model",
        ],
        status: "soon",
        statusLabel: "In development",
      },
    ],
  },
  {
    group: "Money & matters",
    kicker: "07 — 08",
    intro:
      "Net invoicing built for the Indian bar — per-appearance fees, retainers, disbursements — and a Kanban board that knows about cases, not generic projects.",
    modules: [
      {
        no: "07",
        title: "Net Invoicing",
        blurb:
          "Send a clean invoice with a Razorpay UPI link over WhatsApp. 60% of invoices are paid within 24 hours in our beta cohort.",
        bullets: [
          "INR/paise net totals — no tax-code automation, no double entry",
          "UPI deep links, embedded payment page, real-time paid status",
          "Overdue reminder cadence with editable copy",
          "Per-case revenue rollup; export to Tally on Firm tier",
        ],
        status: "live",
        statusLabel: "Live",
      },
      {
        no: "08",
        title: "Tasks & Time",
        blurb:
          "Kanban-style follow-ups linked to a case. A billable timer per matter — no separate timesheet to chase at month-end.",
        bullets: [
          "Tasks and time entries are first-class on the case timeline",
          "Assignee, due date, status — visible to senior, junior, clerk",
          "Time entries roll up into a draft invoice in two clicks",
          "Filter by court, judge, or matter type when planning the week",
        ],
        status: "live",
        statusLabel: "Live",
      },
    ],
  },
  {
    group: "Clients & comms",
    kicker: "09",
    intro:
      "Your client checks status without picking up the phone. They see exactly what you publish, nothing more.",
    modules: [
      {
        no: "09",
        title: "Client Portal",
        blurb:
          "A read-only dashboard for your client: matter status, next hearing, invoices, shared documents.",
        bullets: [
          "Login over OTP — no passwords for your client to forget",
          "Per-document publish toggle: shared, private, draft",
          "WhatsApp invite link with an OTP fallback over SMS",
          "Audit log of every client view and download",
        ],
        status: "rolling",
        statusLabel: "Rolling out",
      },
    ],
  },
];

export default function FeaturesPage() {
  return (
    <div className="bg-paper text-ink">
      {/* HEADER */}
      <section className="border-b border-rule">
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-16 md:pb-24 md:pt-24 lg:px-10">
          <div className="grid grid-cols-12 items-end gap-10">
            <div className="col-span-12 md:col-span-8">
              <div className="mono text-[11px] uppercase tracking-[0.22em] text-ink-3">
                Features · the full module list
              </div>
              <h1 className="display-tight mt-7 text-[44px] font-semibold leading-[0.98] md:text-[68px]">
                Nine modules.{" "}
                <span className="accent text-saffron-deep">One operating system.</span>
              </h1>
            </div>
            <div className="col-span-12 md:col-span-4">
              <p className="text-[15px] leading-relaxed text-ink-2">
                Each module reads from the same case object. A hearing, an order, a draft, an
                invoice &mdash; all bound to one matter. No tool-stitching, no Zapier glue, no
                separate billing software.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GROUPS */}
      {GROUPS.map((g, gi) => (
        <section
          key={g.group}
          className={gi % 2 === 0 ? "bg-paper" : "bg-paper-2 border-y border-rule"}
        >
          <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 lg:px-10">
            <div className="grid grid-cols-12 gap-10">
              <div className="col-span-12 md:col-span-4">
                <div className="mono text-[12px] font-semibold uppercase tracking-[0.2em] text-ink-3">
                  {g.kicker}
                </div>
                <h2 className="display-tight mt-4 text-[28px] font-semibold leading-[1.05] md:text-[36px]">
                  {g.group}
                </h2>
                <p className="mt-5 max-w-sm text-[14.5px] leading-relaxed text-ink-2">
                  {g.intro}
                </p>
              </div>
              <div className="col-span-12 md:col-span-8">
                <div className="space-y-px bg-rule">
                  {g.modules.map((m) => (
                    <div key={m.no} className="bg-paper p-7 md:p-9">
                      <div className="grid grid-cols-12 items-baseline gap-4">
                        <div className="mono col-span-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-ink-3 md:col-span-1">
                          {m.no}
                        </div>
                        <h3 className="col-span-7 text-[20px] font-medium text-ink md:col-span-9">
                          {m.title}
                        </h3>
                        <div className="col-span-3 text-right md:col-span-2">
                          <Badge variant={m.status}>{m.statusLabel}</Badge>
                        </div>
                      </div>
                      <p className="mt-4 max-w-2xl text-[14.5px] leading-relaxed text-ink-2">
                        {m.blurb}
                      </p>
                      <ul className="mt-5 grid grid-cols-1 gap-y-2 text-[13px] text-ink-2 md:grid-cols-2 md:gap-x-6">
                        {m.bullets.map((b) => (
                          <li key={b} className="flex gap-3 leading-relaxed">
                            <span className="mt-2 block h-px w-3 shrink-0 bg-saffron" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 lg:px-10">
          <div className="grid grid-cols-12 items-end gap-10">
            <div className="col-span-12 md:col-span-8">
              <h2 className="display-tight text-[36px] font-semibold leading-[1.02] md:text-[52px]">
                Pricing is the <span className="accent text-saffron">simple part.</span>
              </h2>
              <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-paper/85">
                Solo at ₹999. Firm at ₹2,499 per seat. Free tier for your first ten cases. Bar
                Council verification on us.
              </p>
            </div>
            <div className="col-span-12 md:col-span-4 md:text-right">
              <Link href="/pricing">
                <Button variant="saffron" size="lg" className="gap-2">
                  See pricing <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
