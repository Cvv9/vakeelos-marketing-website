import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroCinematic } from "@/components/marketing/hero-cinematic";
import { ServicesSection } from "@/components/marketing/services-section";
import { TestimonialRotator } from "@/components/marketing/testimonial-rotator";
import { WorkflowSection } from "@/components/marketing/workflow-section";
import { BookingSection } from "@/components/marketing/booking-faq";

export default function HomePage() {
  return (
    <>
      <HeroCinematic />
      <ServicesSection />
      <TestimonialRotator />
      <WorkflowSection />
      <BookingSection />
      <ClosingCta />
    </>
  );
}

function ClosingCta() {
  return (
    <section className="relative bg-paper">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <p className="mono text-[11px] uppercase tracking-[0.22em] text-ink-3">
              Sign-off
            </p>
            <h2 className="display-tight reveal mt-4 text-[44px] leading-[1.0] tracking-tight text-ink sm:text-[72px] lg:text-[96px]">
              Built for the
              <br />
              <span className="accent">Indian bar.</span>
              <br />
              Shipped from India.
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="reveal text-[16px] leading-[1.6] text-ink-3">
              Three plans. UPI billing. Hosted in India by default. Bring your CNR
              numbers, leave with a quiet docket.
            </p>
            <div className="mt-6 flex items-center gap-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/badge-made-in-india.png"
                alt="Made in India · Hosted in India"
                className="h-16 w-16 opacity-85"
              />
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link href="/waitlist">
                <Button size="lg" variant="ink" className="press w-full sm:w-auto">
                  Join the waitlist
                  <ArrowUpRight className="ml-1.5 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="press w-full sm:w-auto">
                  Contact us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
