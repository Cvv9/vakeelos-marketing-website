import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WorkflowSection } from "@/components/marketing/workflow-section";

export const metadata: Metadata = {
  title: "Workflow",
  description:
    "Four moves, one workspace. Sync the docket, brief the matter, draft the document, send the invoice — VakeelOS turns a full court day into a closed docket.",
};

const MODULE_CARDS = [
  {
    step: "01 · Sync",
    title: "Causelist Sync",
    body: "Your High Court causelist pulled fresh at 06:30 IST. Tick the rows that matter — 11,200+ entries/month, with quiet drift detection in the background.",
    href: "/features#causelist",
  },
  {
    step: "02 · Brief",
    title: "Court Order Vault",
    body: "Order PDF auto-fetched from the portal. VakeelBrain surfaces four bullets: result, interim relief, directions, next date. You walk in knowing.",
    href: "/features#orders",
  },
  {
    step: "03 · Draft",
    title: "VakeelBrain Drafter",
    body: "Seven court-ready templates seeded from your case data — parties, CNR, last order already filled. You refine, export .docx. Not a blank chatbot.",
    href: "/features#drafter",
  },
  {
    step: "04 · Bill",
    title: "Net Invoicing + UPI",
    body: "Time entries roll into a draft invoice in two clicks. Your letterhead, a Razorpay UPI link, WhatsApp delivery. 60 % paid within 24 hours in beta.",
    href: "/features#invoicing",
  },
];

const STATS = [
  { value: "06:30", unit: "IST", label: "Causelist ready every morning" },
  { value: "11.2K+", unit: "entries", label: "Pulled per month across courts" },
  { value: "60 %", unit: "UPI", label: "Invoices paid within 24 hours" },
  { value: "0", unit: "clicks", label: "To deliver a hearing reminder" },
];

export default function WorkflowPage() {
  return (
    <div className="bg-paper">
      {/* ── PAGE HERO ─────────────────────────────────────────────── */}
      <section className="border-b border-rule">
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-16 lg:px-10 lg:pt-28 lg:pb-24">
          <p className="mono text-[11px] uppercase tracking-[0.22em] text-ink-3">
            How it works
          </p>
          <div className="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <h1 className="display-tight text-[44px] leading-[0.96] tracking-tight text-ink sm:text-[72px] lg:text-[88px]">
                A Tuesday,{" "}
                <span className="accent">cleanly billed.</span>
              </h1>
            </div>
            <div className="lg:col-span-5 lg:flex lg:flex-col lg:justify-end">
              <p className="text-[17px] leading-[1.65] text-ink-2">
                Four moves, one workspace. Scroll through each step below to see
                how VakeelOS turns a full court day into a closed docket.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <span className="btn-glow rounded-full">
                  <Link href="/waitlist">
                    <Button
                      size="lg"
                      variant="ink"
                      className="float-soft press group relative rounded-full px-6"
                    >
                      Join the waitlist
                      <ArrowUpRight className="ml-1.5 h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </Button>
                  </Link>
                </span>
                <Link href="/features">
                  <Button
                    size="lg"
                    variant="outline"
                    className="float-soft press rounded-full px-6"
                  >
                    All modules
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INTERACTIVE WORKFLOW ────────────────────────────────── */}
      <WorkflowSection scrollDriven />

      {/* ── MODULE SPOTLIGHT ────────────────────────────────────── */}
      <section className="border-b border-rule bg-paper-2">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <p className="mono text-[11px] uppercase tracking-[0.22em] text-ink-3">
            What powers each step
          </p>
          <h2 className="display-tight reveal mt-4 text-[36px] leading-[1.02] tracking-tight text-ink sm:text-[48px]">
            Four steps. Four modules.
          </h2>

          <div className="mt-14 grid grid-cols-1 gap-px bg-rule sm:grid-cols-2 lg:grid-cols-4">
            {MODULE_CARDS.map((m) => (
              <Link
                key={m.step}
                href={m.href}
                className="group flex flex-col gap-5 bg-paper-2 p-7 transition-colors hover:bg-paper"
              >
                <span className="mono text-[10px] uppercase tracking-[0.22em] text-brand-deep">
                  {m.step}
                </span>
                <div className="flex-1">
                  <h3 className="display-tight text-[20px] font-medium tracking-tight text-ink">
                    {m.title}
                  </h3>
                  <p className="mt-3 text-[13.5px] leading-[1.6] text-ink-3">
                    {m.body}
                  </p>
                </div>
                <span className="mono flex items-center gap-1.5 text-[10.5px] uppercase tracking-[0.22em] text-ink-3 transition-colors group-hover:text-ink-2">
                  Explore module
                  <ArrowUpRight className="h-3 w-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ─────────────────────────────────────────── */}
      <section className="border-b border-rule bg-ink text-paper">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
          <div className="grid grid-cols-2 gap-10 lg:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label}>
                <p className="display-tight text-[40px] font-medium leading-none tracking-tight text-paper sm:text-[52px]">
                  {s.value}
                  <span className="ml-1 font-sans text-[18px] font-normal text-paper/50">
                    {s.unit}
                  </span>
                </p>
                <p className="mono mt-3 text-[10.5px] uppercase tracking-[0.18em] text-paper/55">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLOSING CTA ─────────────────────────────────────────── */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="grid grid-cols-1 items-end gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="mono text-[11px] uppercase tracking-[0.22em] text-ink-3">
                Early access
              </p>
              <h2 className="display-tight reveal mt-4 text-[40px] leading-[1.02] tracking-tight text-ink sm:text-[60px]">
                Bring a CNR.
                <br />
                <span className="accent">Leave with a synced docket.</span>
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="reveal max-w-md text-[16px] leading-[1.65] text-ink-2">
                Twenty-minute screen-share. Bring one CNR and we&rsquo;ll show
                you a live causelist sync, an AI-drafted vakalatnama, and a
                UPI-ready invoice — all from your own data.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <span className="btn-glow rounded-full">
                  <Link href="/waitlist">
                    <Button
                      size="lg"
                      variant="ink"
                      className="float-soft press group relative rounded-full px-6 w-full sm:w-auto"
                    >
                      Join the waitlist
                      <ArrowUpRight className="ml-1.5 h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </Button>
                  </Link>
                </span>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="press rounded-full px-6 w-full sm:w-auto"
                  >
                    Book a walkthrough
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
