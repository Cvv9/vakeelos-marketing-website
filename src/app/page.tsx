import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroScrollExpand } from "@/components/marketing/hero-scroll-expand";
import { HeroWordmarkIntro } from "@/components/marketing/hero-wordmark-intro";
import { ServicesTiles } from "@/components/marketing/services-tiles";
import { TestimonialRotator } from "@/components/marketing/testimonial-rotator";
import { BookingSection } from "@/components/marketing/booking-faq";
import { HomeBriefStrip } from "@/components/marketing/home-brief-strip";

export default function HomePage() {
  return (
    <>
      <HeroWordmarkIntro />
      <HeroScrollExpand />
      <ServicesTiles />
      <HomeBriefStrip />
      <TestimonialRotator />
      <WorkflowTeaser />
      <BookingSection />
      <ClosingCta />
    </>
  );
}

// ─── Workflow teaser ──────────────────────────────────────────────────────────
// Brief synopsis — links to the full /workflow page with scroll-driven steps.

function WorkflowTeaser() {
  const steps = [
    { num: "01", title: "Sync",  meta: "06:30 IST" },
    { num: "02", title: "Brief", meta: "09:14 IST" },
    { num: "03", title: "Draft", meta: "14:02 IST" },
    { num: "04", title: "Bill",  meta: "18:45 IST" },
  ];

  return (
    <section className="relative border-b border-rule bg-paper">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <p className="mono text-[11px] uppercase tracking-[0.22em] text-ink-3">
          Workflow
        </p>
        <div className="mt-6 grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="display-tight reveal text-[40px] leading-[1.02] tracking-tight text-ink sm:text-[52px]">
              A Tuesday,
              <br />
              <span className="accent">cleanly billed.</span>
            </h2>
            <p className="reveal mt-6 max-w-md text-[15.5px] leading-[1.65] text-ink-2">
              Four moves, one workspace. Sync the docket, brief the matter,
              draft the document, send the invoice. The system does the
              logistics so you can do the lawyering.
            </p>
            <div className="mt-8">
              <Link href="/workflow">
                <Button size="lg" variant="outline" className="press">
                  See the full workflow
                  <ArrowUpRight className="ml-1.5 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7 lg:flex lg:items-center">
            <div className="mono grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
              {steps.map((s) => (
                <div
                  key={s.num}
                  className="flex flex-col gap-2 rounded-[3px] border border-rule px-5 py-4"
                >
                  <span className="text-[10px] uppercase tracking-[0.22em] text-ink-3">
                    {s.num}
                  </span>
                  <span className="font-sans text-[20px] font-medium tracking-tight text-ink">
                    {s.title}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.18em] text-brand-deep">
                    {s.meta}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Closing CTA ─────────────────────────────────────────────────────────────

function ClosingCta() {
  return (
    <section className="relative border-t border-rule bg-paper">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid grid-cols-1 items-end gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="mono text-[11px] uppercase tracking-[0.22em] text-ink-3">
              Sign-off
            </p>
            <h2 className="display-tight reveal mt-4 text-[44px] leading-[1.0] tracking-tight text-ink sm:text-[72px] lg:text-[88px]">
              Built for the
              <br />
              <span className="accent">Indian bar.</span>
              <br />
              Shipped from India.
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="reveal max-w-md text-[16.5px] leading-[1.65] text-ink-2">
              Three plans. UPI billing. Hosted in India by default. Bring your CNR
              numbers, leave with a quiet docket.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <span className="btn-glow rounded-[3px]">
                <Link href="/waitlist">
                  <Button size="lg" variant="ink" className="press relative w-full sm:w-auto">
                    Join the waitlist
                    <ArrowUpRight className="ml-1.5 h-4 w-4" />
                  </Button>
                </Link>
              </span>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="press w-full sm:w-auto">
                  Contact us
                </Button>
              </Link>
            </div>

            <div className="mt-10 flex items-center gap-3 border-t border-rule pt-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/badge-made-in-india.png"
                alt=""
                aria-hidden
                className="h-9 w-9 opacity-80"
              />
              <span className="mono text-[10.5px] uppercase tracking-[0.22em] text-ink-3">
                Made in India · Hosted in India
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
