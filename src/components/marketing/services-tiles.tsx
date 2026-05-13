import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ServiceMock } from "@/components/marketing/service-mock";

type Kind =
  | "case"
  | "causelist"
  | "drafter"
  | "research"
  | "invoicing"
  | "dashboard"
  | "hearings"
  | "orders"
  | "tasks"
  | "clients"
  | "portal";

// Six highest-impact modules in day-to-day workflow order.
// Remaining five (Hearing Tracker, Case Management, Tasks & Time,
// Client Register, Client Portal) are detailed at /features.
const SERVICES: {
  num: string;
  title: string;
  blurb: string;
  href: string;
  kind: Kind;
}[] = [
  {
    num: "00",
    title: "Intelligence Dashboard",
    blurb:
      "A daily brief at sunrise — hearings, conflicts, overdues, written like a junior would. One screen at login.",
    href: "/features#dashboard",
    kind: "dashboard",
  },
  {
    num: "02",
    title: "Causelist Sync",
    blurb:
      "Your High Court causelist pulled fresh at 06:30 IST. Tick the rows that matter, the rest stay quiet.",
    href: "/features#causelist",
    kind: "causelist",
  },
  {
    num: "04",
    title: "Court Order Vault",
    blurb:
      "Order PDF auto-fetched. VakeelBrain surfaces four bullets: result, relief, directions, next date.",
    href: "/features#orders",
    kind: "orders",
  },
  {
    num: "05",
    title: "AI Drafter — VakeelBrain",
    blurb:
      "Legal notice, bail app, plaint, written statement. Streamed by Claude, edited by you.",
    href: "/features#drafter",
    kind: "drafter",
  },
  {
    num: "06",
    title: "AI Research",
    blurb:
      "Indian Kanoon search with citations on every line. Cached for instant repeat lookups.",
    href: "/features#research",
    kind: "research",
  },
  {
    num: "07",
    title: "Net Invoicing + UPI",
    blurb:
      "Net invoices in INR, paid by UPI through Razorpay, dunning runs itself.",
    href: "/features#invoicing",
    kind: "invoicing",
  },
];

// The five modules not shown in the homepage grid
const REMAINING = [
  "Hearing Tracker",
  "Case Management",
  "Tasks & Time",
  "Client Register",
  "Client Portal",
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
              Eleven modules.
              <br />
              <span className="accent">One operating system.</span>
            </h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <p className="reveal max-w-xl text-[16px] leading-[1.6] text-ink-2">
              Vakeel<span className="accent">OS</span>{" "}replaces the
              WhatsApp-screenshot workflow with a calm, keyboard-first studio.
              Every module reads from the same case spine — no tool-stitching,
              no Zapier glue, no double entry.
            </p>
          </div>
        </div>

        {/* Six feature tiles */}
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

        {/* "See all 11" CTA — spans the full grid width */}
        <Link
          href="/features"
          className="group flex items-center justify-between gap-6 border-t border-rule bg-paper px-6 py-6 transition-colors hover:bg-paper-2 lg:px-8"
        >
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className="mono text-[10.5px] uppercase tracking-[0.22em] text-ink-3">
              +5 more
            </span>
            <span className="text-[13.5px] text-ink-3">
              {REMAINING.join(" · ")}
            </span>
          </div>
          <span className="mono inline-flex shrink-0 items-center gap-1.5 text-[11px] uppercase tracking-[0.22em] text-ink-2 transition-colors group-hover:text-ink">
            See all 11 modules
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
        </Link>
      </div>
    </section>
  );
}
