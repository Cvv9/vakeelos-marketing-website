"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { TransitionLink } from "@/components/effects/transition-link";

const LEFT_LINKS = [
  { href: "/features", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/workflow", label: "Workflow" },
];

const RIGHT_LINKS = [
  { href: "/team", label: "Team" },
  { href: "/faq", label: "FAQ" },
  { href: "/security", label: "Security" },
];

export function Nav() {
  const [stuck, setStuck] = useState(false);
  const [navVisible, setNavVisible] = useState(false);
  const hideTimerRef = useRef<number | null>(null);
  const pathname = usePathname();

  // Show nav on scroll, then auto-hide after 2.5 s of inactivity.
  // Also reveal on mouse entering the header area.
  const showNav = useCallback(() => {
    setNavVisible(true);
    if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    hideTimerRef.current = window.setTimeout(() => setNavVisible(false), 2500);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", showNav, { passive: true });
    return () => {
      window.removeEventListener("scroll", showNav);
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    };
  }, [showNav]);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  useEffect(() => {
    // On inner pages, always show the compact pill — no scroll needed.
    // On the homepage, shrink into the pill once the user scrolls past the hero.
    if (pathname !== "/") {
      setStuck(true);
      return;
    }
    const onScroll = () => setStuck(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);


  return (
    <>
      {/* Floating waitlist pill — fixed top-right, always visible */}
      <TransitionLink
        href="/waitlist"
        className="group mono fixed right-4 top-4 z-[60] inline-flex items-center gap-2 rounded-full border border-ink/20 bg-paper px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-ink shadow-[0_2px_12px_rgba(0,0,0,0.15)] [text-rendering:optimizeLegibility] [-webkit-font-smoothing:antialiased] transition-all duration-200 hover:border-ink/40 hover:shadow-[0_4px_20px_rgba(0,0,0,0.2)] sm:right-5 sm:top-5 sm:px-5 sm:text-[11px] lg:right-8 lg:top-5"
      >
        Join the waitlist
        <ArrowUpRight className="h-3 w-3 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </TransitionLink>

      {/* Sticky main nav — naked at top, glassmorphic pill on scroll.
          Outer slot height is locked so the pill can shrink without
          reflowing the page (prevents CLS). pointer-events-none on the
          slot lets the user click underlying content where the pill isn't. */}
      <header
        className="pointer-events-none sticky top-0 z-50"
        onMouseEnter={showNav}
      >
        <div className="pointer-events-none mx-auto flex h-[136px] max-w-7xl items-center justify-center px-6 md:h-[168px] lg:h-[200px] lg:px-10">
          <div
            className={`pointer-events-auto relative transition-all duration-300 ease-out ${
              navVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
            } ${
              stuck
                ? "mx-auto w-fit rounded-full bg-paper/55 px-5 py-2 ring-1 ring-inset ring-white/15 shadow-[0_10px_40px_-12px_rgba(0,0,0,0.55)] backdrop-blur-2xl backdrop-saturate-150 lg:px-7 lg:py-2"
                : "w-full"
            }`}
          >
            {/* Desktop — symmetric layout with centered V logo (no wordmark) */}
            <div
              className={`hidden md:grid items-center grid-cols-[auto_auto_auto] ${
                stuck ? "gap-7 lg:gap-9" : "gap-12"
              }`}
            >
              {/* Left links */}
              <nav
                className={`flex items-center justify-self-end ${
                  stuck ? "gap-5 lg:gap-6" : "gap-7 lg:gap-9"
                }`}
              >
                {LEFT_LINKS.map((l, i) => (
                  <span
                    key={l.href}
                    className={`flex items-center ${stuck ? "gap-5 lg:gap-6" : "gap-7 lg:gap-9"}`}
                  >
                    {i > 0 && <span aria-hidden className="block h-3 w-px bg-rule-strong opacity-50" />}
                    <TransitionLink
                      href={l.href}
                      className={`text-[15px] tracking-wide transition-colors ${
                        isActive(l.href)
                          ? "text-saffron"
                          : "text-ink-2 hover:text-ink"
                      }`}
                    >
                      {l.label}
                    </TransitionLink>
                  </span>
                ))}
              </nav>

              {/* Center V logo — generous at rest, still readable in the pill */}
              <TransitionLink
                href="/"
                className="group flex items-center justify-self-center transition-all duration-300 ease-out"
                aria-label="VakeelOS — home"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/logo-glyph.png"
                  alt="VakeelOS"
                  width={256}
                  height={256}
                  className={`block rounded-[3px] transition-all duration-300 ease-out ${
                    stuck ? "h-9 w-9 lg:h-10 lg:w-10" : "h-28 w-28 lg:h-32 lg:w-32"
                  }`}
                />
              </TransitionLink>

              {/* Right links */}
              <nav
                className={`flex items-center justify-self-start ${
                  stuck ? "gap-5 lg:gap-6" : "gap-7 lg:gap-9"
                }`}
              >
                {RIGHT_LINKS.map((l, i) => (
                  <span
                    key={l.href}
                    className={`flex items-center ${stuck ? "gap-5 lg:gap-6" : "gap-7 lg:gap-9"}`}
                  >
                    {i > 0 && <span aria-hidden className="block h-3 w-px bg-rule-strong opacity-50" />}
                    <TransitionLink
                      href={l.href}
                      className={`text-[15px] tracking-wide transition-colors ${
                        isActive(l.href)
                          ? "text-saffron"
                          : "text-ink-2 hover:text-ink"
                      }`}
                    >
                      {l.label}
                    </TransitionLink>
                  </span>
                ))}
              </nav>
            </div>

            {/* Mobile fallback — centred V logo only */}
            <TransitionLink
              href="/"
              className="group mx-auto flex w-fit items-center md:hidden"
              aria-label="VakeelOS — home"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo-glyph.png"
                alt="VakeelOS"
                width={256}
                height={256}
                className={`block rounded-[3px] transition-all duration-300 ease-out ${
                  stuck ? "h-9 w-9" : "h-20 w-20"
                }`}
              />
            </TransitionLink>
          </div>
        </div>
      </header>
    </>
  );
}
