import Link from "next/link";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Minus } from "lucide-react";

const Brand = () => (
  <>
    Vakeel<span className="accent">OS</span>
  </>
);

type Tier = {
  id: "free" | "solo" | "firm" | "enterprise";
  name: string;
  tag: string;
  price: string;
  unit: string;
  cta: string;
  href: string;
  blurb: string;
  highlight?: boolean;
};

const TIERS: Tier[] = [
  {
    id: "free",
    name: "Free",
    tag: "First habit",
    price: "₹0",
    unit: "/mo · 1 advocate",
    cta: "Open free account",
    href: "/waitlist",
    blurb: "Your first ten cases, organised. Manual hearings. Five drafts. Five invoices a month.",
  },
  {
    id: "solo",
    name: "Solo",
    tag: "Most independent advocates",
    price: "₹999",
    unit: "/mo · per advocate",
    cta: "Join the waitlist",
    href: "/waitlist",
    blurb:
      "Unlimited cases, daily causelist sync, WhatsApp reminders, UPI invoicing, 20 AI drafts/month.",
    highlight: true,
  },
  {
    id: "firm",
    name: "Firm",
    tag: "2 to 20-lawyer chambers",
    price: "₹2,499",
    unit: "/seat/mo · min 2 seats",
    cta: "Join the waitlist",
    href: "/waitlist",
    blurb:
      "Everything in Solo, plus team workflows, unlimited VakeelBrain, client portal, custom invoicing.",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    tag: "Large firms · in-house teams",
    price: "Custom",
    unit: "annual contract",
    cta: "Contact sales",
    href: "mailto:hello@vakeelos.in?subject=Enterprise%20enquiry",
    blurb:
      "Single-tenant DB, on-premise option, API access, custom DPA, Tally integration, SLA, named CSM.",
  },
];

type Row = { label: string; values: (string | boolean)[]; group?: string };

const COMPARE: Row[] = [
  { group: "Cases", label: "Active cases", values: ["10", "Unlimited", "Unlimited", "Unlimited"] },
  {
    group: "Cases",
    label: "eCourts CNR sync",
    values: [false, true, true, true],
  },
  {
    group: "Cases",
    label: "Causelist sync (APHC, TSHC)",
    values: [false, true, true, true],
  },
  {
    group: "Cases",
    label: "Court order auto-fetch + AI summary",
    values: [false, true, true, true],
  },
  {
    group: "AI",
    label: "VakeelBrain drafts / month",
    values: ["5", "20", "Unlimited", "Unlimited"],
  },
  {
    group: "AI",
    label: "VakeelBrain research queries",
    values: ["10", "100", "Unlimited", "Unlimited"],
  },
  {
    group: "AI",
    label: "Zero-training data agreement",
    values: [true, true, true, true],
  },
  {
    group: "Money",
    label: "Razorpay UPI invoice links",
    values: ["5/mo", true, true, true],
  },
  {
    group: "Money",
    label: "Per-case time tracking + Kanban",
    values: [false, true, true, true],
  },
  {
    group: "Money",
    label: "Tally export",
    values: [false, false, true, true],
  },
  {
    group: "Team",
    label: "Seats included",
    values: ["1", "1", "2 minimum", "Unlimited"],
  },
  {
    group: "Team",
    label: "Client portal",
    values: [false, false, true, true],
  },
  {
    group: "Team",
    label: "Roles & granular permissions",
    values: [false, false, true, true],
  },
  {
    group: "Storage",
    label: "Document vault",
    values: ["1 GB", "10 GB", "100 GB", "Unlimited"],
  },
  {
    group: "Support",
    label: "Onboarding",
    values: ["Self-serve", "Email", "Founder-led", "Named CSM"],
  },
  {
    group: "Support",
    label: "Bar Council verification",
    values: [true, true, true, true],
  },
];

const FAQ: { q: string; a: ReactNode }[] = [
  {
    q: "What happens after the 30-day trial?",
    a: "We email you in week 3 to pick a plan. No automatic charges, no surprise bills. If you do nothing, your account moves to the Free tier and your first ten cases stay accessible.",
  },
  {
    q: "Why is Bar Council registration required?",
    a: "Causelist sync, eCourts CNR sync, and the client portal all assume you are a practising advocate. We verify Bar Council enrolment once during onboarding so the integrations stay clean — and so impersonators stay out.",
  },
  {
    q: "Can I switch tiers, or cancel?",
    a: "Yes, both. Upgrade or downgrade in settings; we prorate the difference. Cancel any time and we keep your data live for 30 days, then export it as CSV + ZIP if you don't extend.",
  },
  {
    q: "Where does my data live?",
    a: "Everything — databases, documents, AI logs — sits inside Indian data centres in Mumbai. Encrypted at rest with AES-256, in transit with TLS 1.3, audit-logged, DPDPA-aligned. Read more on the security page.",
  },
  {
    q: "Will VakeelBrain train on my client files?",
    a: "No. We have written zero-data-retention agreements with our LLM providers. Your prompts and uploads are isolated and not used to train any foundational model.",
  },
  {
    q: "Do you support GST invoicing for the bar?",
    a: (
      <>
        <Brand /> issues net invoices in INR/paise. Most advocate fees are exempt under GST law, so we don&rsquo;t apply tax-code automation. Firm and Enterprise tiers can configure a fixed GSTIN line item if needed.
      </>
    ),
  },
];

export default function PricingPage() {
  return (
    <div className="bg-paper text-ink">
      {/* HEADER */}
      <section className="border-b border-rule">
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-16 md:pb-24 md:pt-24 lg:px-10">
          <div className="grid grid-cols-12 items-end gap-10">
            <div className="col-span-12 md:col-span-8">
              <div className="mono text-[11px] uppercase tracking-[0.22em] text-ink-3">
                Pricing · INR-native, no GST surprises
              </div>
              <h1 className="display-tight mt-7 text-[44px] font-semibold leading-[0.98] md:text-[68px]">
                Priced for the bar.{" "}
                <span className="accent text-saffron-deep">Not for an MNC.</span>
              </h1>
            </div>
            <div className="col-span-12 md:col-span-4">
              <p className="text-[15px] leading-relaxed text-ink-2">
                Clio bills in USD. Most Indian-built tools sell on annual contracts. Vakeel<span className="accent">OS</span>{' '}opens
                at ₹999 a month per advocate &mdash; billed monthly, in rupees, with no commitment
                beyond the next hearing cycle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TIERS */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-20 lg:px-10">
        <div className="grid grid-cols-1 gap-px bg-rule md:grid-cols-4">
          {TIERS.map((t) => (
            <div
              key={t.id}
              className={
                "flex flex-col p-7 md:p-8 " +
                (t.highlight ? "bg-ink text-paper" : "bg-paper text-ink")
              }
            >
              <div className="flex items-center justify-between">
                <h3 className="text-[18px] font-medium tracking-tight">{t.name}</h3>
                {t.highlight ? (
                  <span className="mono inline-flex items-center gap-1.5 rounded-full border border-saffron/50 bg-saffron-soft/10 px-2 py-0.5 text-[10px] uppercase tracking-[0.18em] text-saffron">
                    <span className="block h-1.5 w-1.5 rounded-full bg-saffron" /> Recommended
                  </span>
                ) : null}
              </div>
              <p
                className={
                  "mono mt-1.5 text-[11px] font-medium uppercase tracking-[0.18em] " +
                  (t.highlight ? "text-paper/80" : "text-ink-3")
                }
              >
                {t.tag}
              </p>

              <div className="mt-6 flex items-baseline gap-2">
                <span className="display-tight text-[40px] font-semibold leading-none md:text-[44px]">
                  {t.price}
                </span>
                <span className={t.highlight ? "text-[12.5px] text-paper/85" : "text-[12.5px] text-ink-2"}>
                  {t.unit}
                </span>
              </div>

              <p
                className={
                  "mt-5 text-[14px] leading-relaxed " +
                  (t.highlight ? "text-paper/90" : "text-ink-2")
                }
              >
                {t.blurb}
              </p>

              <div className="mt-7">
                <Link href={t.href}>
                  {t.highlight ? (
                    <Button variant="saffron" className="w-full">
                      {t.cta}
                    </Button>
                  ) : (
                    <Button variant="outline" className="w-full">
                      {t.cta}
                    </Button>
                  )}
                </Link>
              </div>
              <p
                className={
                  "mono mt-4 text-[11px] font-medium uppercase tracking-[0.16em] " +
                  (t.highlight ? "text-paper/85" : "text-ink-3")
                }
              >
                30-day trial · cancel any time
              </p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-between gap-6">
          <p className="mono text-[11.5px] font-medium uppercase tracking-[0.18em] text-ink-3">
            Annual plans = 2 months free · Bar association partners get a further 40% off · Founder-led onboarding for Firms
          </p>
          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/razorpay-badge.png" alt="Payments by Razorpay · INR · UPI" className="h-16 w-16 shrink-0" />
            <span className="mono max-w-[160px] text-[11px] font-medium uppercase leading-snug tracking-[0.18em] text-ink-3">
              INR-native checkout · Razorpay UPI
            </span>
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="border-y border-rule bg-paper-2">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24 lg:px-10">
          <div className="mb-10 grid grid-cols-12 items-end gap-10">
            <div className="col-span-12 md:col-span-7">
              <Badge variant="ink" className="mb-6">
                Compare line by line
              </Badge>
              <h2 className="display-tight text-[32px] font-semibold leading-[1.05] md:text-[40px]">
                What&rsquo;s in <span className="accent text-saffron-deep">each plan.</span>
              </h2>
            </div>
            <div className="col-span-12 md:col-span-5">
              <p className="text-[14.5px] leading-relaxed text-ink-2">
                Honest defaults. The Solo plan covers an independent advocate&rsquo;s entire
                practice; Firm starts at two seats because chambers don&rsquo;t scale at one.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-[3px] border border-rule">
            <div className="grid grid-cols-12 border-b border-rule bg-paper">
              <div className="col-span-4 px-5 py-4">
                <div className="mono text-[11.5px] font-semibold uppercase tracking-[0.2em] text-ink-3">
                  Feature
                </div>
              </div>
              {TIERS.map((t) => (
                <div
                  key={t.id}
                  className="col-span-2 px-5 py-4 text-center"
                >
                  <div className="mono text-[11.5px] font-semibold uppercase tracking-[0.2em] text-ink-3">
                    {t.name}
                  </div>
                </div>
              ))}
            </div>

            {COMPARE.map((row, idx) => {
              const showGroup = idx === 0 || COMPARE[idx - 1].group !== row.group;
              return (
                <div key={row.label}>
                  {showGroup && (
                    <div className="mono border-b border-rule-strong bg-paper-3 px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-2">
                      {row.group}
                    </div>
                  )}
                  <div className="grid grid-cols-12 border-b border-rule bg-paper">
                    <div className="col-span-4 px-5 py-3.5 text-[13.5px] text-ink">
                      {row.label}
                    </div>
                    {row.values.map((v, i) => (
                      <div
                        key={i}
                        className="col-span-2 px-5 py-3.5 text-center text-[13.5px] text-ink-2"
                      >
                        {typeof v === "boolean" ? (
                          v ? (
                            <Check className="mx-auto h-4 w-4 text-saffron-deep" />
                          ) : (
                            <Minus className="mx-auto h-4 w-4 text-ink-3/70" />
                          )
                        ) : (
                          <span className="text-ink">{v}</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:py-28 lg:px-10">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 md:col-span-4">
            <Badge variant="saffron" className="mb-6">
              Frequently asked
            </Badge>
            <h2 className="display-tight text-[32px] font-semibold leading-[1.05] md:text-[40px]">
              Six questions, <span className="accent text-saffron-deep">honest answers.</span>
            </h2>
            <p className="mt-5 max-w-sm text-[14px] leading-relaxed text-ink-2">
              Anything else? Email{" "}
              <a
                className="under-reveal text-ink hover:text-saffron-deep"
                href="mailto:hello@vakeelos.in"
              >
                hello@vakeelos.in
              </a>{" "}
              and a founder will reply.
            </p>
          </div>
          <div className="col-span-12 md:col-span-8">
            <dl className="border-t border-rule">
              {FAQ.map((f) => (
                <div
                  key={f.q}
                  className="grid grid-cols-12 gap-6 border-b border-rule py-6"
                >
                  <dt className="col-span-12 text-[15.5px] font-medium leading-snug text-ink md:col-span-5">
                    {f.q}
                  </dt>
                  <dd className="col-span-12 text-[14px] leading-relaxed text-ink-2 md:col-span-7">
                    {f.a}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 lg:px-10">
          <div className="grid grid-cols-12 items-end gap-10">
            <div className="col-span-12 md:col-span-8">
              <h2 className="display-tight text-[36px] font-semibold leading-[1.02] md:text-[52px]">
                Try it for a hearing cycle.{" "}
                <span className="accent text-saffron">No card, no commitment.</span>
              </h2>
              <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-paper/85">
                30 days free. Founder-led setup of your first 25 cases. Cancel without typing in a
                support form.
              </p>
            </div>
            <div className="col-span-12 md:col-span-4 md:text-right">
              <Link href="/waitlist">
                <Button variant="saffron" size="lg">
                  Join the waitlist
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
