"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

const MEMBERS = [
  {
    initials: "CEO",
    name: "Vikram Tantravahi",
    role: "CEO & Co-Founder",
    bio: "Details coming soon.",
    linkedin: "https://www.linkedin.com/in/vtantra/",
    site: null,
    photo: null,
  },
  {
    initials: "CTO",
    name: "Varun Cumbamangalam",
    role: "CTO & Co-Founder",
    bio: "Senior IoT & Edge AI Engineer and AI Product Manager with 7+ years building end-to-end products across healthcare, wearables, and fintech in four countries. Architects VakeelOS from embedded systems thinking: every layer owned, no black boxes.",
    linkedin: "https://www.linkedin.com/in/varuncumbamangalam/",
    site: "https://varunc.com",
    photo: "/varun-headshot.jpg",
  },
];

export default function TeamPage() {
  const [active, setActive] = useState<number | null>(null);

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

      {/* Grid */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid grid-cols-2 gap-x-5 gap-y-12 sm:grid-cols-3 lg:grid-cols-4 lg:gap-x-8">
          {MEMBERS.map((m, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(active === i ? null : i)}
              className="group text-left"
            >
              {/* Portrait */}
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[3px] border border-rule bg-paper-2 transition-colors duration-200 group-hover:border-ink-3">
                {m.photo ? (
                  <Image
                    src={m.photo}
                    alt={m.name}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                    <span className="mono text-[11px] uppercase tracking-[0.22em] text-ink-3">
                      Photo TBD
                    </span>
                    <span aria-hidden className="block h-px w-8 bg-rule-strong" />
                  </div>
                )}
                <span className="absolute bottom-3 right-3 mono text-[10px] uppercase tracking-[0.22em] text-paper/60 drop-shadow">
                  0{i + 1}
                </span>
              </div>

              {/* Name + role */}
              <div className="mt-4">
                <p className="text-[15px] font-medium tracking-tight text-ink">
                  {m.name}
                </p>
                <p className="mono mt-1 text-[11px] uppercase tracking-[0.18em] text-saffron">
                  {m.role}
                </p>
              </div>

              {/* Expandable bio */}
              {active === i && (
                <div className="mt-4 rounded-[3px] border border-rule bg-paper-2 px-4 py-5">
                  <p className="text-[13.5px] leading-[1.6] text-ink-3">
                    {m.bio}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-4 border-t border-rule pt-4">
                    {m.linkedin && (
                      <a
                        href={m.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="mono text-[10.5px] uppercase tracking-[0.18em] text-ink-3 underline underline-offset-2 hover:text-saffron transition-colors"
                      >
                        LinkedIn ↗
                      </a>
                    )}
                    {m.site && (
                      <a
                        href={m.site}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="mono text-[10.5px] uppercase tracking-[0.18em] text-ink-3 underline underline-offset-2 hover:text-saffron transition-colors"
                      >
                        Website ↗
                      </a>
                    )}
                  </div>
                </div>
              )}
            </button>
          ))}

          {/* You? — open position card */}
          <Link href="/contact" className="group text-left">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[3px] border border-rule bg-paper-2 transition-all duration-200 group-hover:border-saffron/60 group-hover:bg-paper">
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                <span className="mono text-[28px] font-light text-saffron transition-transform duration-200 group-hover:scale-110">
                  +
                </span>
                <span className="mono text-[10px] uppercase tracking-[0.22em] text-ink-3">
                  Join us
                </span>
              </div>
              <ArrowUpRight className="absolute right-3 top-3 h-3.5 w-3.5 text-ink-3 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
            </div>
            <div className="mt-4">
              <p className="text-[15px] font-medium tracking-tight text-ink">
                You?
              </p>
              <p className="mono mt-1 text-[11px] uppercase tracking-[0.18em] text-saffron">
                Open position
              </p>
            </div>
          </Link>
        </div>

        <p className="mono mt-16 text-[11px] uppercase tracking-[0.18em] text-ink-3">
          Team details and photos coming soon.
        </p>
      </section>

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
