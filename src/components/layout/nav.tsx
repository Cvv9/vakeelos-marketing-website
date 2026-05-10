"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

const LEFT_LINKS = [
  { href: "/#services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/#workflow", label: "Workflow" },
];

const RIGHT_LINKS = [
  { href: "/pricing", label: "Pricing" },
  { href: "/faq", label: "FAQ" },
  { href: "/security", label: "Security" },
];

export function Nav() {
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top utility strip — separate entity, scrolls away naturally */}
      <div className="border-b border-rule/60 bg-paper">
        <div className="mx-auto flex max-w-7xl items-center justify-end px-6 py-2.5 lg:px-10">
          <Link
            href="https://app.vakeelos.com/sign-in"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-1 mono text-[11px] uppercase tracking-[0.22em] text-ink-3 transition-colors hover:text-ink"
          >
            Sign in
            <ArrowUpRight className="h-3 w-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>

      {/* Sticky main nav — naked at top, glassmorphic pill on scroll */}
      <header className="sticky top-0 z-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div
            className={`relative transition-all duration-300 ease-out ${
              stuck
                ? "my-3 rounded-full bg-paper/55 px-6 py-3 ring-1 ring-inset ring-white/15 shadow-[0_10px_40px_-12px_rgba(0,0,0,0.55)] backdrop-blur-2xl backdrop-saturate-150 lg:my-4 lg:px-9 lg:py-3.5"
                : "py-7 lg:py-9"
            }`}
          >
            {/* Desktop — symmetric layout with centered wordmark */}
            <div className="hidden grid-cols-[1fr_auto_1fr] items-center gap-10 md:grid">
              {/* Left links — hug the centre */}
              <nav className="flex items-center justify-self-end gap-7 lg:gap-9">
                {LEFT_LINKS.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="text-[14px] tracking-wide text-ink-2 transition-colors hover:text-ink"
                  >
                    {l.label}
                  </Link>
                ))}
              </nav>

              {/* Center wordmark — big at rest, compact in the pill */}
              <Link
                href="/"
                className="group flex items-center justify-self-center gap-3 transition-all duration-300 ease-out"
              >
                <span
                  aria-hidden
                  className={`block bg-saffron transition-all duration-300 ease-out group-hover:rotate-45 ${
                    stuck ? "h-3 w-3" : "h-4 w-4"
                  }`}
                />
                <span
                  className={`display-tight font-semibold tracking-tight text-ink transition-all duration-300 ease-out ${
                    stuck
                      ? "text-[22px] lg:text-[26px]"
                      : "text-[36px] lg:text-[44px]"
                  }`}
                >
                  Vakeel<span className="accent">OS</span>
                </span>
              </Link>

              {/* Right links — hug the centre */}
              <nav className="flex items-center justify-self-start gap-7 lg:gap-9">
                {RIGHT_LINKS.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="text-[14px] tracking-wide text-ink-2 transition-colors hover:text-ink"
                  >
                    {l.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Mobile fallback — centred wordmark only */}
            <Link
              href="/"
              className="group mx-auto flex w-fit items-center gap-2.5 md:hidden"
            >
              <span aria-hidden className="block h-3.5 w-3.5 bg-saffron" />
              <span
                className={`display-tight font-semibold tracking-tight text-ink transition-all duration-300 ease-out ${
                  stuck ? "text-[20px]" : "text-[26px]"
                }`}
              >
                Vakeel<span className="accent">OS</span>
              </span>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
