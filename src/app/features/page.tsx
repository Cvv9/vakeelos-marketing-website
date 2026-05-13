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
    slug: string;
    title: string;
    blurb: string;
    bullets: string[];
    status: Status;
    statusLabel: string;
  }[];
}[] = [
  {
    group: "Command centre",
    kicker: "00",
    intro:
      "The first screen every morning. Before you open a brief, you need to know where you stand — hearings, tasks, and pending money surface in one view before you touch a single file.",
    modules: [
      {
        no: "00",
        slug: "dashboard",
        title: "Practice Dashboard",
        blurb:
          "One screen at login. Every matter that needs attention today — hearings, overdue invoices, pending tasks — without opening a single file.",
        bullets: [
          "KPI strip: active cases, week's hearings, pending tasks, pending invoices — updated live",
          "Upcoming 24-hour alerts so nothing blindsides you in the corridor",
          "Monthly calendar shows all hearing dates and task deadlines on one grid",
          "One search bar — CNR number, client name, task keyword — finds it wherever it lives in the system",
        ],
        status: "live",
        statusLabel: "Live",
      },
    ],
  },
  {
    group: "Court-side",
    kicker: "01 — 04",
    intro:
      "The four modules a litigation advocate touches every working day. Designed around CNR numbers, daily causelists, and judge-bench rosters — not generic CRM ideas.",
    modules: [
      {
        no: "01",
        slug: "cases",
        title: "Case Register",
        blurb:
          "One vault for every matter, party, and document. Filter by court, judge, stage, opposing counsel, or last activity.",
        bullets: [
          "CNR-based case identity, populated from eCourts on creation",
          "Case moves through ten stages — Filing to Execution — so the register shows where each matter sits in the litigation lifecycle, not just open or closed",
          "Appeals link back to the original matter; related cases cross-reference each other — the full dispute family tree, navigable from any node",
          "One tap sends a WhatsApp status update to the client — case number, firm name, and your message, delivered to their phone without leaving the case view",
        ],
        status: "live",
        statusLabel: "Live",
      },
      {
        no: "02",
        slug: "causelist",
        title: "Causelist Sync",
        blurb:
          "Daily causelist pulls from every integrated court into a clean inbox. You tick the rows that are yours; only those become tracked cases.",
        bullets: [
          "Selective tracking — your case list never drowns in stranger names",
          "District court causelists pulled alongside High Courts — same clean inbox, same selective-tracking model",
          "11,200+ entries pulled per month, with quiet drift detection in the background",
          "More High Courts rolling out: KHC, DHC, BHC, MHC",
        ],
        status: "live",
        statusLabel: "Live",
      },
      {
        no: "03",
        slug: "hearings",
        title: "Hearing Tracker",
        blurb:
          "Court-by-court calendar with conflict detection. Reminders go out the day before, on the channel your client actually uses.",
        bullets: [
          "Conflict detection across courts, juniors, and clerks",
          "WhatsApp reminder delivered at 1:30 PM IST the day before — pre-approved templates, zero setup, lands on the channel your client already uses",
          "Overdue invoice nudge runs at 2:30 PM IST on the same channel — legal update and billing reminder in one thread",
          "Court-corridor mobile view for quick item-number lookup",
        ],
        status: "live",
        statusLabel: "Live",
      },
      {
        no: "04",
        slug: "orders",
        title: "Court Order Vault",
        blurb:
          "We pull the latest order from the court portal and let VakeelBrain summarise it into the four bullets you actually need.",
        bullets: [
          "Order PDF auto-fetched within hours of upload to the court portal",
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
    group: "The client",
    kicker: "09 — 10",
    intro:
      "Behind every CNR is a person. VakeelOS holds the full client record — identity, matter history, and billing — and gives them a window into their own case when you choose to open it.",
    modules: [
      {
        no: "10",
        slug: "clients",
        title: "Client Register",
        blurb:
          "One record per client. Identity documents, matter history, and billing in one place — not spread across a spreadsheet and a WhatsApp chat.",
        bullets: [
          "Store PAN, Aadhaar, address, phone, and email alongside every client record",
          "Individual or company — both supported, with the same linked matter and invoice history",
          "Every case, invoice, and document links back to the client automatically",
          "Search by name, phone, or PAN — find anyone in the practice in under two seconds",
        ],
        status: "live",
        statusLabel: "Live",
      },
      {
        no: "09",
        slug: "portal",
        title: "Client Portal",
        blurb:
          "A read-only dashboard for your client: matter status, next hearing, invoices, shared documents.",
        bullets: [
          "Login over OTP — no passwords for your client to forget",
          "Per-document publish toggle: shared, private, draft",
          "WhatsApp invite link with OTP fallback over SMS",
          "Every advocate on the team is Bar Council–verified at onboarding — not just the account owner",
        ],
        status: "rolling",
        statusLabel: "Rolling out",
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
        slug: "drafter",
        title: "VakeelBrain Drafter",
        blurb:
          "Seven court-ready document types, each seeded from your case data. Not a blank chatbot — a junior's first cut that already knows the parties, the CNR, and the last order.",
        bullets: [
          "Seven templates: Legal Notice, Bail Application, Plaint, Written Statement, Affidavit, Vakalatnama, Writ Petition",
          "Drafted from party names, CNR, and prior orders — context is already filled in before you read the first line",
          "Refine iteratively — give VakeelBrain a specific instruction and it rewrites the relevant section only",
          "Export to .docx or PDF, signed by senior in the workflow; 20 drafts/month on Solo, unlimited on Firm",
        ],
        status: "soon",
        statusLabel: "In development",
      },
      {
        no: "06",
        slug: "research",
        title: "VakeelBrain Research",
        blurb:
          "Ask in plain English. Get an answer grounded in three Indian legal corpora — and your own firm's documents.",
        bullets: [
          "Searches Indian Kanoon, ILDC, and India Code in one query — three corpora, one result set",
          "Search your own firm's uploaded documents the same way — past plaints, precedents, client memos alongside the public corpus",
          "Citations verified before they surface — only judgments that exist in the retrieved source are cited, never invented",
          "Your queries and uploads never train any foundational model — contractually",
        ],
        status: "soon",
        statusLabel: "In development",
      },
    ],
  },
  {
    group: "The work",
    kicker: "08",
    intro:
      "Kanban-style task management built around cases, not projects. With subtasks, comment threads, and a billable timer per matter — no separate timesheet to reconcile at month-end.",
    modules: [
      {
        no: "08",
        slug: "tasks",
        title: "Tasks & Time",
        blurb:
          "Kanban-style follow-ups linked to a case. Subtasks, comment threads, and file attachments keep the brief trail on the card — not in a WhatsApp group.",
        bullets: [
          "Subtasks for multi-step follow-ups — brief the junior, review the draft, file the application — each tracked separately under one parent",
          "Comment threads on each task — questions, decisions, and attachments stored on the card, not lost in a group chat",
          "Assign a task to a junior, associate, or clerk and they get a WhatsApp notification instantly — no separate ping, no group chat, no missed follow-up",
          "Time entries roll up into a draft invoice in two clicks — the month closes itself",
        ],
        status: "live",
        statusLabel: "Live",
      },
    ],
  },
  {
    group: "Close of matter",
    kicker: "07",
    intro:
      "Net invoicing built for the Indian bar — per-appearance fees, retainers, disbursements — with your firm's letterhead, UPI links, WhatsApp reminders, and a clean Tally export.",
    modules: [
      {
        no: "07",
        slug: "invoicing",
        title: "Net Invoicing",
        blurb:
          "Send a clean invoice with your firm's letterhead and a Razorpay UPI link over WhatsApp. 60% of invoices are paid within 24 hours in our beta cohort.",
        bullets: [
          "Invoices carry your logo, brand colour, footer, and payment terms — they go out looking like your firm, not a SaaS template",
          "Log cash, cheque, and bank transfers alongside UPI — every payment method tracked, every rupee accounted for",
          "Overdue reminder runs on WhatsApp automatically — a nudge on the channel your client already uses, no awkward phone call",
          "Month's invoices export to Tally in one step — no double entry, no reconciliation ritual",
        ],
        status: "live",
        statusLabel: "Live",
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
              <h1 className="reveal display-tight mt-7 text-[44px] font-semibold leading-[0.98] md:text-[68px]">
                Eleven modules.{" "}
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
                <h2 className="reveal display-tight mt-4 text-[28px] font-semibold leading-[1.05] md:text-[36px]">
                  {g.group}
                </h2>
                <p className="reveal mt-5 max-w-sm text-[14.5px] leading-relaxed text-ink-2">
                  {g.intro}
                </p>
              </div>
              <div className="col-span-12 md:col-span-8">
                <div className="space-y-px bg-rule">
                  {g.modules.map((m) => (
                    <div key={m.no} id={m.slug} className="reveal scroll-mt-28 bg-paper p-7 md:p-9">
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
                Early access is <span className="accent text-saffron">invite only.</span>
              </h2>
              <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-paper/85">
                Join the waitlist and we&rsquo;ll reach out when your spot opens. Bar Council
                verification on us.
              </p>
            </div>
            <div className="col-span-12 md:col-span-4 md:text-right">
              <Link href="/waitlist">
                <Button variant="saffron" size="lg" className="gap-2">
                  Join the waitlist <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
