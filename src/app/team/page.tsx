"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, X } from "lucide-react";
import { CrossfadePair } from "@/components/effects/crossfade-pair";
import { useEffect, useState } from "react";

const MEMBERS = [
  {
    initials: "CEO",
    name: "Vikram Tantravahi",
    role: "CEO & Co-Founder",
    bio: "Engineer, product designer, and entrepreneur with 14+ years building enterprise software and workflow systems at IBM, Synopsys, and Salesforce. Returned to India and, from inside his father's law office, saw the opportunity to modernise one of the country's largest underserved professional industries.",
    linkedin: "https://www.linkedin.com/in/vtantra/",
    site: null,
    photo: "/vikram-headshot.jpeg",
  },
  {
    initials: "CTO",
    name: "Varun Cumbamangalam",
    role: "CTO & Co-Founder",
    bio: "Varun brings 15+ years of experience across academic research, product management, and hands-on engineering. He spent over 8 years in university research before moving into industry, where he has spent the last 7+ years building and shipping IoT, Edge AI, and AI-native products across healthcare and wearables in four countries. At VakeelOS, he applies the same first-principles, end-to-end discipline to build trustworthy legal technology—with no black boxes between the advocate and the law.",
    linkedin: "https://www.linkedin.com/in/varuncumbamangalam/",
    site: "https://varunc.com",
    photo: "/varun-headshot.jpg",
  },
];

function nameInitials(name: string): string {
  return name
    .split(/\s+/)
    .map((p) => p[0] ?? "")
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function TeamPage() {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    document.addEventListener("keydown", onKey);
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
    };
  }, [active]);

  const activeMember = active !== null ? MEMBERS[active] : null;

  return (
    <div className="bg-paper text-ink">
      {/* Header */}
      <section className="border-b border-rule">
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-16 lg:px-10 lg:pt-28 lg:pb-24">
          <p className="mono text-[11px] uppercase tracking-[0.22em] text-ink-3">
            Core team
          </p>
          <h1 className="display-tight mt-6 text-[44px] leading-[0.96] tracking-tight text-ink sm:text-[68px] lg:text-[88px]">
            The people
            <br />
            <span className="accent">building VakeelOS.</span>
          </h1>
          <p className="mt-8 max-w-lg text-[16px] leading-[1.6] text-ink-3">
            A small, focused studio building legal infrastructure for India&rsquo;s
            1.8 million advocates. Every role matters.
          </p>
        </div>
      </section>

      {/* Mission strip */}
      <section className="border-b border-rule bg-paper-2">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="mono text-[11px] uppercase tracking-[0.22em] text-ink-3">
                Why we&rsquo;re here
              </p>
              <h2 className="display-tight mt-5 text-[30px] leading-[1.05] tracking-tight text-ink sm:text-[38px]">
                Small team.<br />
                <span className="accent">Serious problem.</span>
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <div className="space-y-5 text-[15px] leading-[1.7] text-ink-2">
                <p>
                  India has 1.8 million advocates. Most of them run their practice on WhatsApp, a register, and memory. No software built for them exists — only foreign tools ported badly.
                </p>
                <p>
                  VakeelOS is built by a small founding team that decided to do something about it. We&rsquo;re not a large organisation with a legal vertical. We&rsquo;re engineers who listened first, then built.
                </p>
                <p>
                  Every role on this team is load-bearing. We move fast, own our decisions, and ship things that actually work in a courtroom — not just in a demo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Decorative dot-wave separator */}
      <div aria-hidden className="relative border-b border-rule overflow-hidden bg-paper">
        <svg
          className="block h-20 w-full text-saffron/35"
          viewBox="0 0 1200 80"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="team-dots" x="0" y="0" width="14" height="14" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.1" fill="currentColor" />
            </pattern>
            <mask id="team-dots-mask">
              <rect width="1200" height="80" fill="black" />
              <path
                d="M0,40 C200,10 400,70 600,40 C800,10 1000,70 1200,40 L1200,80 L0,80 Z"
                fill="white"
              />
            </mask>
          </defs>
          <rect width="1200" height="80" fill="url(#team-dots)" mask="url(#team-dots-mask)" />
        </svg>
      </div>

      {/* Grid */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="mb-12 flex items-end justify-between gap-6 lg:mb-16">
          <div>
            <p className="mono text-[11px] uppercase tracking-[0.22em] text-saffron">
              Our team
            </p>
            <h2 className="display-tight mt-4 text-[34px] leading-[1.02] tracking-tight text-ink sm:text-[44px]">
              Two founders. <span className="accent">One mission.</span>
            </h2>
          </div>
          <p className="hidden max-w-xs text-[14px] leading-[1.6] text-ink-3 sm:block">
            Tap a portrait to read more.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-x-5 gap-y-12 sm:grid-cols-3 lg:grid-cols-4 lg:gap-x-8">
          {MEMBERS.map((m, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              aria-haspopup="dialog"
              aria-expanded={active === i}
              className="group text-left"
            >
              {/* Portrait */}
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[6px] border border-rule bg-paper-2 transition-colors duration-300 group-hover:border-saffron/60">
                <CrossfadePair
                  className="h-full w-full"
                  duration={1200}
                  hoverFastForward
                  from={
                    <div className="team-initials flex h-full w-full items-center justify-center bg-paper-2">
                      <span className="display-tight text-[88px] font-medium leading-none tracking-tight text-ink-3">
                        {nameInitials(m.name)}
                      </span>
                    </div>
                  }
                  to={
                    m.photo ? (
                      <Image
                        src={m.photo}
                        alt={m.name}
                        fill
                        className="object-cover object-top transition-transform duration-[1200ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-[1.04]"
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      />
                    ) : (
                      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                        <span className="mono text-[11px] uppercase tracking-[0.22em] text-ink-3">
                          Photo TBD
                        </span>
                        <span aria-hidden className="block h-px w-8 bg-rule-strong" />
                      </div>
                    )
                  }
                />

                {/* Index number */}
                <span className="pointer-events-none absolute top-3 left-3 z-20 mono text-[10px] uppercase tracking-[0.22em] text-paper/70 drop-shadow">
                  0{i + 1}
                </span>

                {/* Hover overlay reveal */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 bottom-0 z-20 translate-y-full bg-gradient-to-t from-saffron via-saffron/95 to-saffron/0 px-4 pb-4 pt-12 opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100"
                >
                  <span className="mono inline-flex items-center gap-1.5 text-[10.5px] uppercase tracking-[0.22em] text-paper">
                    View bio
                    <ArrowUpRight className="h-3 w-3" />
                  </span>
                </div>
              </div>

              {/* Name + role */}
              <div className="mt-4">
                <p className="text-[15.5px] font-medium tracking-tight text-ink">
                  {m.name}
                </p>
                <p className="mono mt-1.5 text-[11.5px] uppercase tracking-[0.2em] text-saffron">
                  {m.role}
                </p>
              </div>
            </button>
          ))}

          {/* You? — open position card */}
          <Link href="/contact" className="group text-left">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[6px] border border-rule bg-paper-2 transition-all duration-300 group-hover:border-saffron/60 group-hover:bg-paper">
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                <span className="mono text-[28px] font-light text-saffron transition-transform duration-300 group-hover:scale-110">
                  +
                </span>
                <span className="mono text-[10px] uppercase tracking-[0.22em] text-ink-3">
                  Join us
                </span>
              </div>
              <ArrowUpRight className="absolute right-3 top-3 h-3.5 w-3.5 text-ink-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
            <div className="mt-4">
              <p className="text-[15.5px] font-medium tracking-tight text-ink">
                You?
              </p>
              <p className="mono mt-1.5 text-[11.5px] uppercase tracking-[0.2em] text-saffron">
                Open position
              </p>
            </div>
          </Link>
        </div>
      </section>

      {/* Member modal */}
      {activeMember && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeMember.name}
          className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8 sm:px-6"
          onClick={() => setActive(null)}
        >
          <div className="absolute inset-0 bg-ink/70 backdrop-blur-sm" aria-hidden />
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl overflow-hidden rounded-[4px] border border-rule bg-paper shadow-2xl"
          >
            <button
              type="button"
              onClick={() => setActive(null)}
              aria-label="Close"
              className="absolute right-3 top-3 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full border border-rule bg-paper/90 text-ink-3 transition-colors hover:border-ink-3 hover:text-ink"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="grid grid-cols-1 sm:grid-cols-5">
              <div className="relative aspect-[3/4] sm:col-span-2 sm:aspect-auto sm:min-h-[420px] bg-paper-2">
                {activeMember.photo ? (
                  <Image
                    src={activeMember.photo}
                    alt={activeMember.name}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 100vw, 40vw"
                    priority
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                    <span className="mono text-[11px] uppercase tracking-[0.22em] text-ink-3">
                      Photo TBD
                    </span>
                    <span aria-hidden className="block h-px w-8 bg-rule-strong" />
                  </div>
                )}
              </div>
              <div className="flex flex-col gap-5 px-6 py-8 sm:col-span-3 sm:px-8 sm:py-10">
                <div>
                  <p className="mono text-[11px] uppercase tracking-[0.22em] text-saffron">
                    {activeMember.role}
                  </p>
                  <h3 className="display-tight mt-3 text-[26px] leading-[1.05] tracking-tight text-ink sm:text-[30px]">
                    {activeMember.name}
                  </h3>
                </div>
                <p className="text-[14.5px] leading-[1.7] text-ink-2">
                  {activeMember.bio}
                </p>
                <div className="mt-auto flex flex-wrap gap-5 border-t border-rule pt-5">
                  {activeMember.linkedin && (
                    <a
                      href={activeMember.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="mono text-[10.5px] uppercase tracking-[0.18em] text-ink-3 underline underline-offset-2 transition-colors hover:text-saffron"
                    >
                      LinkedIn ↗
                    </a>
                  )}
                  {activeMember.site && (
                    <a
                      href={activeMember.site}
                      target="_blank"
                      rel="noreferrer"
                      className="mono text-[10.5px] uppercase tracking-[0.18em] text-ink-3 underline underline-offset-2 transition-colors hover:text-saffron"
                    >
                      Website ↗
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Studio credit */}
      <section className="border-t border-rule bg-paper-2">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10 flex items-end justify-between gap-8">
          <p className="text-[15px] leading-relaxed text-ink-2">
            VakeelOS is built by a small team that believes India&rsquo;s
            advocates deserve software as precise as the law itself.
          </p>
          <p className="mono shrink-0 text-[11px] uppercase tracking-[0.22em] text-ink-3">
            A VarVik Studios product
          </p>
        </div>
      </section>
    </div>
  );
}
