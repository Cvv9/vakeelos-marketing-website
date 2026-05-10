"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const LEFT_LINKS = [
  { href: "/#services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/#workflow", label: "Workflow" },
];

const RIGHT_LINKS = [
  { href: "/team", label: "Team" },
  { href: "/faq", label: "FAQ" },
  { href: "/security", label: "Security" },
];

export function Nav() {
  const [stuck, setStuck] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/#services") return activeSection === "services";
    if (href === "/#workflow") return activeSection === "workflow";
    return pathname === href;
  };

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (pathname !== "/") { setActiveSection(""); return; }
    const ids = ["services", "workflow"];
    const observers = ids.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.25 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, [pathname]);

  return (
    <>
      {/* Floating waitlist pill — fixed top-right, always visible */}
      <Link
        href="/waitlist"
        className="group mono fixed right-4 top-4 z-[60] inline-flex items-center gap-2 rounded-full border border-ink/20 bg-paper px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-ink shadow-[0_2px_12px_rgba(0,0,0,0.15)] [text-rendering:optimizeLegibility] [-webkit-font-smoothing:antialiased] transition-all duration-200 hover:border-ink/40 hover:shadow-[0_4px_20px_rgba(0,0,0,0.2)] sm:right-5 sm:top-5 sm:px-5 sm:text-[11px] lg:right-8 lg:top-5"
      >
        Join the waitlist
        <ArrowUpRight className="h-3 w-3 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </Link>

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
              <nav className="flex items-center justify-self-end gap-8 lg:gap-10">
                {LEFT_LINKS.map((l, i) => (
                  <span key={l.href} className="flex items-center gap-8 lg:gap-10">
                    {i > 0 && <span aria-hidden className="block h-3 w-px bg-rule-strong opacity-50" />}
                    <Link
                      href={l.href}
                      className={`text-[14px] tracking-wide transition-colors ${
                        isActive(l.href)
                          ? "text-saffron"
                          : "text-ink-2 hover:text-ink"
                      }`}
                    >
                      {l.label}
                    </Link>
                  </span>
                ))}
              </nav>

              {/* Center wordmark — big at rest, compact in the pill */}
              <Link
                href="/"
                className="group flex items-center justify-self-center gap-3 transition-all duration-300 ease-out"
                aria-label="VakeelOS — home"
              >
                <Image
                  src="/logo-monogram-glyph.png"
                  alt=""
                  aria-hidden
                  width={96}
                  height={96}
                  priority
                  className={`block rounded-[3px] transition-all duration-300 ease-out ${
                    stuck ? "h-7 w-7 lg:h-8 lg:w-8" : "h-10 w-10 lg:h-12 lg:w-12"
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
              <nav className="flex items-center justify-self-start gap-8 lg:gap-10">
                {RIGHT_LINKS.map((l, i) => (
                  <span key={l.href} className="flex items-center gap-8 lg:gap-10">
                    {i > 0 && <span aria-hidden className="block h-3 w-px bg-rule-strong opacity-50" />}
                    <Link
                      href={l.href}
                      className={`text-[14px] tracking-wide transition-colors ${
                        isActive(l.href)
                          ? "text-saffron"
                          : "text-ink-2 hover:text-ink"
                      }`}
                    >
                      {l.label}
                    </Link>
                  </span>
                ))}
              </nav>
            </div>

            {/* Mobile fallback — centred wordmark only */}
            <Link
              href="/"
              className="group mx-auto flex w-fit items-center gap-2.5 md:hidden"
              aria-label="VakeelOS — home"
            >
              <Image
                src="/logo-monogram-glyph.png"
                alt=""
                aria-hidden
                width={96}
                height={96}
                priority
                className={`block rounded-[3px] transition-all duration-300 ease-out ${
                  stuck ? "h-6 w-6" : "h-8 w-8"
                }`}
              />
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
