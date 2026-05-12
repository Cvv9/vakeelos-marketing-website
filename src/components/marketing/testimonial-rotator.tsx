"use client";

import { useEffect, useState, type ReactNode } from "react";
import Image from "next/image";
import { Quote } from "lucide-react";

const Brand = () => (
  <>
    Vakeel<span className="accent">OS</span>
  </>
);

const TESTIMONIALS: { name: string; role: string; firm: string; photo: string | null; quote: ReactNode }[] = [
  {
    name: "Adv. Sneha Reddy",
    role: "Counsel",
    firm: "Reddy & Associates · Hyderabad",
    photo: "/advocate-female.png",
    quote: (
      <>
        I used to keep three WhatsApp groups, two notebooks, and a printed causelist on my dashboard. <Brand /> replaced all of that with one quiet screen — and the 06:30 sync now wakes me before my clerk does.
      </>
    ),
  },
  {
    name: "Adv. Aarav Mehta",
    role: "Solo Practitioner",
    firm: "Mehta Chambers · Vijayawada",
    photo: "/advocate-male-1.png",
    quote:
      "Drafting a Section 138 notice used to take an evening. With the AI Drafter it’s a coffee. The numbers — both the case numbers and the invoices — finally tally on the first try.",
  },
  {
    name: "Adv. Rohan Khanna",
    role: "Senior Partner",
    firm: "Iyer & Khanna LLP · Visakhapatnam",
    photo: "/advocate-male-2.png",
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
          <p className="mono text-[11px] uppercase tracking-[0.22em] text-paper/75">
            From the bar
          </p>
          <p className="mono text-[11px] uppercase tracking-[0.22em] text-paper/75">
            {String(active + 1).padStart(2, "0")} / {String(TESTIMONIALS.length).padStart(2, "0")}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Portrait column — desktop only */}
          <div className="hidden lg:block lg:col-span-3">
            {t.photo ? (
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[3px] border border-paper/20">
                <Image
                  src={t.photo}
                  fill
                  alt=""
                  aria-hidden
                  className="object-cover object-top"
                  sizes="25vw"
                />
              </div>
            ) : (
              <div className="flex aspect-[3/4] w-full items-center justify-center rounded-[3px] border border-paper/10 bg-paper/5">
                <Quote className="h-10 w-10 text-paper/15" strokeWidth={1} />
              </div>
            )}
          </div>

          {/* Quote + text */}
          <div className="lg:col-span-9">
            <Quote className="h-10 w-10 text-saffron" strokeWidth={1.5} />
            <blockquote
              key={`q-${active}`}
              className="display-tight pull-up mt-6 text-[28px] font-medium leading-[1.18] tracking-tight text-paper sm:text-[40px] lg:text-[50px]"
            >
              &ldquo;{t.quote}&rdquo;
            </blockquote>

            <figcaption
              key={t.name}
              className="pull-up mt-10 flex flex-wrap items-center gap-x-4 gap-y-3 border-t border-paper/15 pt-6"
            >
              {t.photo && (
                <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full border border-paper/25 lg:hidden">
                  <Image
                    src={t.photo}
                    fill
                    alt=""
                    aria-hidden
                    className="object-cover object-top"
                    sizes="36px"
                  />
                </div>
              )}
              <span className="text-[16px] font-semibold tracking-tight text-paper">
                {t.name}
              </span>
              <span className="mono text-[11px] uppercase tracking-[0.22em] text-paper/75">
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
