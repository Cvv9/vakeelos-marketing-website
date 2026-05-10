"use client";

import { useEffect, useState, type ReactNode } from "react";
import { Quote } from "lucide-react";

const Brand = () => (
  <>
    Vakeel<span className="accent">OS</span>
  </>
);

const TESTIMONIALS: { name: string; role: string; firm: string; quote: ReactNode }[] = [
  {
    name: "Adv. Sneha Reddy",
    role: "Counsel",
    firm: "Reddy & Associates · Hyderabad",
    quote: (
      <>
        I used to keep three WhatsApp groups, two notebooks, and a printed causelist on my dashboard. <Brand /> replaced all of that with one quiet screen — and the 06:30 sync now wakes me before my clerk does.
      </>
    ),
  },
  {
    name: "Adv. Aarav Mehta",
    role: "Solo Practitioner",
    firm: "Mehta Chambers · Mumbai",
    quote:
      "Drafting a Section 138 notice used to take an evening. With the AI Drafter it’s a coffee. The numbers — both the case numbers and the invoices — finally tally on the first try.",
  },
  {
    name: "Adv. Priya Iyer",
    role: "Partner",
    firm: "Iyer & Khanna LLP · Bengaluru",
    quote: (
      <>
        What I needed was a system that respected how Indian courts actually work. <Brand /> is the first software I’ve seen that doesn’t make me translate my practice into someone else’s vocabulary.
      </>
    ),
  },
];

export function TestimonialRotator() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      setActive((a) => (a + 1) % TESTIMONIALS.length);
    }, 7000);
    return () => clearInterval(id);
  }, []);

  const t = TESTIMONIALS[active];

  return (
    <section
      id="testimonials"
      className="relative border-b border-rule bg-ink text-paper"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="flex items-center justify-between">
          <p className="mono text-[11px] uppercase tracking-[0.22em] text-paper/55">
            From the bar
          </p>
          <p className="mono text-[11px] uppercase tracking-[0.22em] text-paper/55">
            {String(active + 1).padStart(2, "0")} / {String(TESTIMONIALS.length).padStart(2, "0")}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-2">
            <Quote className="h-12 w-12 text-saffron" strokeWidth={1.5} />
          </div>
          <div className="lg:col-span-10">
            <blockquote
              key={`q-${active}`}
              className="display-tight pull-up text-[28px] font-medium leading-[1.18] tracking-tight text-paper sm:text-[40px] lg:text-[52px]"
            >
              &ldquo;{t.quote}&rdquo;
            </blockquote>

            <figcaption
              key={t.name}
              className="pull-up mt-12 flex flex-wrap items-baseline gap-x-4 gap-y-1 border-t border-paper/15 pt-6"
            >
              <span className="text-[16px] font-semibold tracking-tight text-paper">
                {t.name}
              </span>
              <span className="mono text-[11px] uppercase tracking-[0.22em] text-paper/55">
                {t.role} — {t.firm}
              </span>
            </figcaption>
          </div>
        </div>

        <div className="mt-12 flex items-center gap-2.5">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Show testimonial ${i + 1}`}
              onClick={() => setActive(i)}
              className={`h-1 rounded-full transition-all ${
                i === active ? "w-12 bg-saffron" : "w-6 bg-paper/20 hover:bg-paper/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
