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
    if (pathname !== "/") return pathname === href;
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
    if (pathname !== "/") return;
    const ids = ["services", "workflow"];
    const observers = ids.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
          else setActiveSection((curr) => (curr === id ? "" : curr));
        },
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

      {/* Sticky main nav — naked at top, glassmorphic pill on scroll.
          Outer slot height is locked so the pill can shrink without
          reflowing the page (prevents CLS). pointer-events-none on the
          slot lets the user click underlying content where the pill isn't. */}
      <header className="pointer-events-none sticky top-0 z-50">
        <div className="pointer-events-none mx-auto flex h-[136px] max-w-7xl items-center justify-center px-6 md:h-[168px] lg:h-[200px] lg:px-10">
          <div
            className={`pointer-events-auto relative transition-all duration-300 ease-out ${
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
                    <Link
                      href={l.href}
                      className={`text-[15px] tracking-wide transition-colors ${
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

              {/* Center V logo — generous at rest, still readable in the pill */}
              <Link
                href="/"
                className="group flex items-center justify-self-center transition-all duration-300 ease-out"
                aria-label="VakeelOS — home"
              >
                <Image
                  src="/logo-glyph.png"
                  alt="VakeelOS"
                  width={256}
                  height={256}
                  priority
                  className={`block rounded-[3px] transition-all duration-300 ease-out ${
                    stuck ? "h-9 w-9 lg:h-10 lg:w-10" : "h-28 w-28 lg:h-32 lg:w-32"
                  }`}
                />
              </Link>

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
                    <Link
                      href={l.href}
                      className={`text-[15px] tracking-wide transition-colors ${
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

            {/* Mobile fallback — centred V logo only */}
            <Link
              href="/"
              className="group mx-auto flex w-fit items-center md:hidden"
              aria-label="VakeelOS — home"
            >
              <Image
                src="/logo-glyph.png"
                alt="VakeelOS"
                width={256}
                height={256}
                priority
                className={`block rounded-[3px] transition-all duration-300 ease-out ${
                  stuck ? "h-9 w-9" : "h-20 w-20"
                }`}
              />
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
