import Link from "next/link";
import { ArrowUpRight, Clock, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function BookingSection() {
  return (
    <section id="booking" className="relative border-b border-rule bg-paper-2">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="mono text-[11px] uppercase tracking-[0.22em] text-ink-3">
              Book a walkthrough
            </p>
            <h2 className="display-tight reveal mt-4 text-[40px] leading-[1.02] tracking-tight text-ink sm:text-[56px]">
              Bring a CNR.
              <br />
              <span className="accent">Leave with a synced docket.</span>
            </h2>
            <p className="reveal mt-6 max-w-md text-[16px] leading-[1.6] text-ink-3">
              Twenty-minute screen-share. Bring one CNR number and we&rsquo;ll
              show you a live causelist sync, an AI-drafted vakalatnama, and a
              UPI-ready net invoice — all from your own data.
            </p>
            <p className="mono reveal mt-8 text-[11px] uppercase tracking-[0.22em] text-ink-3">
              Have a question first?{" "}
              <Link
                href="/faq"
                className="under-reveal text-ink-2 hover:text-ink"
              >
                Read the FAQ →
              </Link>
            </p>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <BookingCard />
          </div>
        </div>
      </div>
    </section>
  );
}

function BookingCard() {
  return (
    <div className="reveal rounded-[3px] border border-rule bg-paper p-8">
      <p className="mono text-[11px] uppercase tracking-[0.22em] text-ink-3">
        06A — Open slots · this week
      </p>

      <div className="mt-8 grid grid-cols-1 gap-px bg-rule">
        {[
          { label: "Wed", date: "8 May", slot: "10:30 — 11:00 IST", taken: false },
          { label: "Thu", date: "9 May", slot: "14:00 — 14:30 IST", taken: false },
          { label: "Fri", date: "10 May", slot: "16:30 — 17:00 IST", taken: true },
          { label: "Mon", date: "13 May", slot: "11:00 — 11:30 IST", taken: false },
        ].map((s) => (
          <button
            key={`${s.label}-${s.date}`}
            type="button"
            disabled={s.taken}
            className="group flex items-center justify-between bg-paper px-4 py-3.5 text-left transition-colors hover:bg-paper-2 disabled:cursor-not-allowed disabled:opacity-45"
          >
            <span className="flex items-center gap-4">
              <span className="grid h-9 w-9 place-items-center rounded-[3px] border border-rule bg-paper-2">
                <span className="mono text-[10px] uppercase tracking-[0.22em] text-ink-3">
                  {s.label}
                </span>
              </span>
              <span>
                <span className="block text-[13.5px] font-medium tracking-tight text-ink">
                  {s.date}
                </span>
                <span className="mono mt-0.5 block text-[10.5px] uppercase tracking-[0.18em] text-ink-3">
                  {s.slot}
                </span>
              </span>
            </span>
            <span className="mono text-[10.5px] uppercase tracking-[0.22em] text-ink-3 group-hover:text-saffron-deep">
              {s.taken ? "filled" : "book →"}
            </span>
          </button>
        ))}
      </div>

      <Link
        href="https://app.vakeelos.com/sign-up"
        target="_blank"
        rel="noreferrer"
      >
        <Button size="lg" variant="ink" className="press mt-8 w-full">
          Reserve a walkthrough
          <ArrowUpRight className="ml-1.5 h-4 w-4" />
        </Button>
      </Link>

      <ul className="mono mt-6 space-y-2 border-t border-rule pt-6 text-[11px] uppercase tracking-[0.18em] text-ink-3">
        <li className="flex items-center gap-2">
          <Clock className="h-3 w-3 text-saffron" />
          <span>20 minutes — screen share</span>
        </li>
        <li className="flex items-center gap-2">
          <MapPin className="h-3 w-3 text-saffron" />
          <span>Across India · remote</span>
        </li>
        <li className="flex items-center gap-2">
          <Phone className="h-3 w-3 text-saffron" />
          <span>WhatsApp +91 — request via form</span>
        </li>
      </ul>
    </div>
  );
}
