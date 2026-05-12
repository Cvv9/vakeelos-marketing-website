"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroScrollExpand() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mediaFullyExpanded, setMediaFullyExpanded] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [touchStartY, setTouchStartY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (mediaFullyExpanded && e.deltaY < 0 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        e.preventDefault();
        return;
      }
      if (mediaFullyExpanded) return;
      e.preventDefault();
      const next = Math.min(Math.max(scrollProgress + e.deltaY * 0.0009, 0), 1);
      setScrollProgress(next);
      if (next >= 1) { setMediaFullyExpanded(true); setShowContent(true); }
      else if (next < 0.75) setShowContent(false);
    };

    const handleTouchStart = (e: TouchEvent) => setTouchStartY(e.touches[0].clientY);

    const handleTouchMove = (e: TouchEvent) => {
      if (!touchStartY) return;
      const deltaY = touchStartY - e.touches[0].clientY;
      if (mediaFullyExpanded && deltaY < -20 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        e.preventDefault();
        return;
      }
      if (mediaFullyExpanded) return;
      e.preventDefault();
      const factor = deltaY < 0 ? 0.008 : 0.005;
      const next = Math.min(Math.max(scrollProgress + deltaY * factor, 0), 1);
      setScrollProgress(next);
      if (next >= 1) { setMediaFullyExpanded(true); setShowContent(true); }
      else if (next < 0.75) setShowContent(false);
      setTouchStartY(e.touches[0].clientY);
    };

    const handleTouchEnd = () => setTouchStartY(0);
    const handleScroll = () => { if (!mediaFullyExpanded) window.scrollTo(0, 0); };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("touchstart", handleTouchStart, { passive: false });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("touchend", handleTouchEnd);
    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [scrollProgress, mediaFullyExpanded, touchStartY]);

  const mediaW = 300 + scrollProgress * (isMobile ? 650 : 1250);
  const mediaH = 400 + scrollProgress * (isMobile ? 200 : 400);
  const textX = scrollProgress * (isMobile ? 180 : 150);

  return (
    <div className="overflow-x-hidden bg-paper">
      <section className="relative flex flex-col items-center min-h-[100dvh]">
        <div className="relative w-full flex flex-col items-center min-h-[100dvh]">

          {/* Background chambers image — fades out as video expands */}
          <motion.div
            className="absolute inset-0 z-0 h-full"
            animate={{ opacity: 1 - scrollProgress }}
            transition={{ duration: 0.05 }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/about-desk.png"
              alt=""
              aria-hidden
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-paper/60" />
          </motion.div>

          <div className="w-full flex flex-col items-center relative z-10">
            <div className="flex flex-col items-center justify-center w-full h-[100dvh] relative gap-2">

              {/* Expanding hero video — absolutely centered */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[3px] overflow-hidden"
                style={{
                  width: `${mediaW}px`,
                  height: `${mediaH}px`,
                  maxWidth: "95vw",
                  maxHeight: "85vh",
                  boxShadow: "0 0 60px rgba(0,0,0,0.5)",
                  zIndex: 0,
                }}
              >
                <video
                  src="/hero.mp4"
                  poster="/hero-poster.jpg"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  className="w-full h-full object-cover"
                />
                <div className="film-grain absolute inset-0" aria-hidden />
                <motion.div
                  className="absolute inset-0 bg-paper/40 rounded-[3px]"
                  animate={{ opacity: 0.5 - scrollProgress * 0.35 }}
                  transition={{ duration: 0.1 }}
                />
              </div>

              {/* Hint line — flies apart horizontally on scroll */}
              <div className="flex items-center gap-8 relative z-10">
                <p
                  className="mono text-[10.5px] uppercase tracking-[0.22em] text-ink/55"
                  style={{ transform: `translateX(-${textX}vw)` }}
                >
                  A Tuesday at the bar
                </p>
                <span className="block h-3 w-px bg-ink/20" />
                <p
                  className="mono text-[10.5px] uppercase tracking-[0.22em] text-ink/55"
                  style={{ transform: `translateX(${textX}vw)` }}
                >
                  Scroll to expand
                </p>
              </div>

              {/* Title — splits apart on scroll */}
              <div className="flex flex-col items-center text-center w-full relative z-10">
                <h1
                  className="display-tight text-[40px] sm:text-[68px] lg:text-[96px] font-medium tracking-tight leading-[0.96] text-ink"
                  style={{ transform: `translateX(-${textX}vw)` }}
                >
                  Practice management,
                </h1>
                <h1
                  className="display-tight text-[40px] sm:text-[68px] lg:text-[96px] font-medium tracking-tight leading-[0.96] text-ink"
                  style={{ transform: `translateX(${textX}vw)` }}
                >
                  for the <span className="accent">Indian bar.</span>
                </h1>
              </div>

            </div>

            {/* Hero CTA — fades in once video is fully expanded */}
            <motion.div
              className="w-full border-b border-rule bg-paper"
              initial={{ opacity: 0 }}
              animate={{ opacity: showContent ? 1 : 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
                <p className="mono text-[11px] uppercase tracking-[0.22em] text-ink-3">
                  Invite only · Early access
                </p>
                <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-12">
                  <div className="lg:col-span-5">
                    <p className="text-[18px] leading-[1.55] text-ink-2">
                      VakeelOS is a single, calm workspace for India&rsquo;s 1.8 million
                      advocates. Causelist sync, AI drafting, and net invoicing — built and
                      developed in India, hosted in India, verified at the Bar Council.
                    </p>
                    <div className="mt-8 flex flex-wrap items-center gap-3">
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
                        >
                          Explore features
                        </Button>
                      </Link>
                    </div>
                  </div>

                  <div className="lg:col-span-7">
                    <div className="mono grid grid-cols-3 gap-6 border-t border-rule pt-6 text-[11px] uppercase tracking-[0.18em] text-ink-3">
                      <HeroStat value="1.8M" label="Indian advocates" />
                      <HeroStat value="All Courts" label="HC · DC · Local" />
                      <HeroStat value="Brief ready" label="Before you start" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}

function HeroStat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="font-sans text-[22px] font-semibold tracking-tight text-ink">{value}</p>
      <p className="mt-1 text-[11px] text-ink-3">{label}</p>
    </div>
  );
}
