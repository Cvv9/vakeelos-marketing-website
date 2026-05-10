import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const SERVICES: { num: string; title: string; blurb: string; href: string }[] = [
  {
    num: "01",
    title: "Case Management",
    blurb: "CNR-aware register, party graph, document vault, every order in one drawer.",
    href: "/features#cases",
  },
  {
    num: "02",
    title: "Causelist Sync",
    blurb: "APHC + TSHC pulled fresh at 06:30 IST. Tick the rows that matter, the rest stay quiet.",
    href: "/features#causelist",
  },
  {
    num: "03",
    title: "AI Drafter — VakeelBrain",
    blurb: "Legal notice, bail app, plaint, written statement. Streamed by Claude, edited by you.",
    href: "/features#drafter",
  },
  {
    num: "04",
    title: "AI Research",
    blurb: "Indian Kanoon search with citations on every line. Cached for instant repeat lookups.",
    href: "/features#research",
  },
  {
    num: "05",
    title: "Net Invoicing + UPI",
    blurb: "Net invoices in INR, paid by UPI through Razorpay, dunning runs itself.",
    href: "/features#invoicing",
  },
  {
    num: "06",
    title: "Intelligence Dashboard",
    blurb: "A daily brief at sunrise — hearings, conflicts, overdues, written like a junior would.",
    href: "/features#dashboard",
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative border-b border-rule bg-paper"
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
              Vakeel<span className="accent">OS</span> replaces the WhatsApp-screenshot workflow with a calm,
              keyboard-first studio. Each room is independent, every room is
              connected by the same case spine.
            </p>
          </div>
        </div>

        <div className="border-t border-rule">
          {SERVICES.map((s, idx) => (
            <Link
              key={s.num}
              href={s.href}
              className="row-rule group grid grid-cols-12 items-center gap-6 px-1 py-6 sm:py-8"
            >
              <span className="row-rule-num mono col-span-2 text-[11px] uppercase tracking-[0.22em] text-ink-3 transition-colors sm:col-span-1">
                {s.num}
              </span>
              <span className="col-span-9 sm:col-span-4">
                <span className="display-tight block text-[24px] font-medium leading-tight tracking-tight sm:text-[32px]">
                  {s.title}
                </span>
              </span>
              <span className="col-span-12 text-[14px] leading-[1.55] text-ink-3 sm:col-span-6 sm:text-[15px]">
                {s.blurb}
              </span>
              <span
                className="row-rule-arrow col-span-1 hidden justify-end text-ink-3 transition-colors sm:flex"
                style={{ ['--float-delay' as string]: `${idx * 0.35}s` }}
              >
                <ArrowUpRight className="float-icon h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>

        <ServiceMarquee />
      </div>
    </section>
  );
}

function ServiceMarquee() {
  const wordmarks = [
    "APHC",
    "TSHC",
    "Indian Kanoon",
    "Razorpay",
    "WhatsApp",
    "UPI",
    "DPDPA",
    "Bar Council",
    "Mumbai · India",
    "INR-native",
  ];
  const doubled = [...wordmarks, ...wordmarks];

  return (
    <div className="relative -mx-6 mt-20 overflow-hidden border-y border-rule py-6 lg:-mx-10">
      <div className="marquee-track flex w-max items-center gap-12 whitespace-nowrap px-6 lg:px-10">
        {doubled.map((w, i) => (
          <span
            key={`${w}-${i}`}
            className="display-tight text-[28px] font-medium tracking-tight text-ink-3"
          >
            {w}
            <span
              className="float-dot ml-12 inline-block h-1 w-1 translate-y-[-6px] rounded-full bg-ink-4 align-middle"
              style={{ ['--float-delay' as string]: `${(i % 5) * 0.4}s` }}
            />
          </span>
        ))}
      </div>
    </div>
  );
}
