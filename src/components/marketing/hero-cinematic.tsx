"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight, Play, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroWordmarkIntro } from "@/components/marketing/hero-wordmark-intro";

export function HeroCinematic({ withIntro = false }: { withIntro?: boolean }) {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = wrapRef.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const onMove = (e: PointerEvent) => {
      const rect = node.getBoundingClientRect();
      const mx = ((e.clientX - rect.left) / rect.width) * 100;
      const my = ((e.clientY - rect.top) / rect.height) * 100;
      node.style.setProperty("--mx", `${mx}%`);
      node.style.setProperty("--my", `${my}%`);
    };
    node.addEventListener("pointermove", onMove);
    return () => node.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <section
      ref={wrapRef}
      className="relative isolate overflow-hidden border-b border-rule"
    >
      <div className="cursor-halo absolute inset-0" aria-hidden />

      <div className="mx-auto max-w-7xl px-6 pt-20 pb-12 lg:px-10 lg:pt-28">
        <div className="flex items-center justify-between">
          <p className="mono text-[11px] uppercase tracking-[0.22em] text-ink-3 hero-rise" style={{ ['--delay' as string]: '0s' }}>
            Invite only · Early access
          </p>
          <p className="mono text-[11px] uppercase tracking-[0.22em] text-ink-3 hero-rise" style={{ ['--delay' as string]: '0.05s' }}>
            Est. 2026
          </p>
        </div>

        <h1 className="display-tight mt-12 text-[56px] leading-[0.96] tracking-tight text-ink sm:text-[96px] lg:text-[144px]">
          <span className="block letter-rise">
            {"Practice".split("").map((c, i) => (
              <span key={`p-${i}`} style={{ ['--i' as string]: i }}>
                {c}
              </span>
            ))}
          </span>
          <span className="block letter-rise">
            {"management,".split("").map((c, i) => (
              <span key={`m-${i}`} style={{ ['--i' as string]: i + 8 }}>
                {c}
              </span>
            ))}
          </span>
          <span className="block letter-rise text-ink-3">
            {"for the".split("").map((c, i) => (
              <span key={`s-${i}`} style={{ ['--i' as string]: i + 19 }}>
                {c === " " ? " " : c}
              </span>
            ))}
            <span className="px-3">&nbsp;</span>
            <span className="accent">
              {"Indian bar".split("").map((c, i) => (
                <span key={`a-${i}`} style={{ ['--i' as string]: i + 26 }}>
                  {c === " " ? " " : c}
                </span>
              ))}
            </span>
            <span>.</span>
          </span>
        </h1>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="hero-rise text-[18px] leading-[1.55] text-ink-2" style={{ ['--delay' as string]: '0.6s' }}>
              Vakeel<span className="accent">OS</span>{' '}is a single, calm workspace for India&rsquo;s 1.8 million advocates.
              Causelist sync, AI drafting, and net invoicing — built and developed in India,
              hosted in India, verified at the Bar Council.
            </p>
            <div className="hero-rise mt-8 flex flex-wrap items-center gap-3" style={{ ['--delay' as string]: '0.75s' }}>
              <Link href="/waitlist">
                <Button
                  size="lg"
                  variant="ink"
                  className="float-soft press group rounded-full px-6"
                >
                  Join the waitlist
                  <ArrowUpRight className="ml-1.5 h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Button>
              </Link>
              <Link href="#services">
                <Button
                  size="lg"
                  variant="outline"
                  className="float-soft press rounded-full px-6"
                  style={{ ['--float-delay' as string]: '0.7s' }}
                >
                  Watch the walkthrough
                </Button>
              </Link>
            </div>
            <div className="hero-rise mono mt-10 grid grid-cols-3 gap-6 border-t border-rule pt-6 text-[11px] uppercase tracking-[0.18em] text-ink-3" style={{ ['--delay' as string]: '0.9s' }}>
              <Stat value="1.8M" label="Indian advocates" />
              <Stat value="High Courts" label="Live · all India" />
              <Stat value="06:00 IST" label="Brief on your desk" />
            </div>
          </div>

          <div className="lg:col-span-7">
            <VideoTile />
          </div>
        </div>
      </div>
      {withIntro ? <HeroWordmarkIntro /> : null}
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="font-sans text-[24px] font-semibold tracking-tight text-ink">
        {value}
      </p>
      <p className="mt-1 text-[11px] text-ink-3">{label}</p>
    </div>
  );
}

function VideoTile() {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className="video-tile mask-rise relative aspect-[16/10] w-full overflow-hidden rounded-[3px] border border-rule">
      <video
        ref={videoRef}
        poster="/hero-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label="A Tuesday at the bar — VakeelOS daily loop"
        className="absolute inset-0 z-[1] h-full w-full object-cover"
      >
        <source src="/hero.mp4" type="video/mp4" />
        <img
          src="/hero.gif"
          alt="VakeelOS daily loop — scattered cause-papers, sync, draft, morning brief, calm chambers"
          className="h-full w-full object-cover"
        />
      </video>

      <div className="film-grain" aria-hidden />

      <div className="pointer-events-none absolute inset-0 z-10 flex flex-col">
        <div className="flex items-center justify-between px-5 pt-4">
          <p className="mono text-[10.5px] uppercase tracking-[0.22em] text-ink/75">
            A Tuesday at the bar
          </p>
          <p className="mono text-[10.5px] uppercase tracking-[0.22em] text-ink/75">
            00:10 · Loop, muted
          </p>
        </div>

        <div className="flex-1" />

        <div className="flex items-end justify-between px-5 pb-5">
          <button
            type="button"
            onClick={() => {
              const v = videoRef.current;
              if (!v) return;
              v.currentTime = 0;
              void v.play();
            }}
            className="float-soft press group pointer-events-auto flex items-center gap-3 rounded-full border border-ink/25 bg-ink/10 px-4 py-2 text-ink backdrop-blur-sm transition-colors hover:border-ink/55 hover:bg-ink/15"
          >
            <span className="grid h-7 w-7 place-items-center rounded-full bg-ink text-paper transition-transform group-hover:scale-105">
              <Play className="h-3 w-3 translate-x-[1px]" fill="currentColor" />
            </span>
            <span className="text-[12.5px] font-medium tracking-tight">
              Replay
            </span>
          </button>

          <div
            className="flex items-center gap-2 text-ink/65"
            style={{ ['--float-delay' as string]: '1.2s' }}
          >
            <Volume2 className="float-icon h-3.5 w-3.5" />
            <span className="mono text-[10px] uppercase tracking-[0.22em]">
              ambient
            </span>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 items-center gap-3 text-ink/75">
        <span className="mono text-[10px] uppercase tracking-[0.22em]">
          Causelist · 06:30 IST
        </span>
        <span className="block h-3 w-px bg-ink/30" />
        <span className="mono text-[10px] uppercase tracking-[0.22em]">
          APHC W.P. 4711/2025
        </span>
      </div>
    </div>
  );
}
