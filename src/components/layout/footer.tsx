import Image from "next/image";
import Link from "next/link";

const UTIL_LINKS: { href: string; label: string }[] = [
  { href: "/features", label: "Features" },
  { href: "/team", label: "Team" },
  { href: "/waitlist", label: "Waitlist" },
  { href: "/security", label: "Security" },
  { href: "/contact", label: "Contact" },
  { href: "/contact", label: "Careers" },
  { href: "/terms", label: "Terms" },
  { href: "/privacy", label: "Privacy" },
  { href: "/dpa", label: "DPA" },
];

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-rule bg-paper">
      {/* Billboard — wordmark dominates the upper area */}
      <div className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pt-24 pb-10 lg:px-10 lg:pt-32 lg:pb-14">
          {/* meta strip */}
          <div className="flex items-center justify-between">
            <p className="mono text-[11px] uppercase tracking-[0.22em] text-ink-3">
              Early access · Invite only
            </p>
            <p className="mono text-[11px] uppercase tracking-[0.22em] text-ink-3">
              Est. 2026
            </p>
          </div>

          {/* carved monogram placard — physical brand seal anchored to the billboard */}
          <div className="mt-10 flex">
            <Image
              src="/logo-monogram.png"
              alt="VakeelOS — carved monogram"
              width={96}
              height={96}
              priority={false}
              className="block h-20 w-20 rounded-[3px] sm:h-24 sm:w-24"
            />
          </div>

          {/* wordmark — engraved, massive, edge-to-edge */}
          <Link
            href="/"
            className="display-tight mt-12 block select-none text-ink"
            aria-label="VakeelOS — home"
          >
            <span className="block leading-[0.82] tracking-[-0.05em] text-[88px] sm:text-[156px] md:text-[208px] lg:text-[256px] xl:text-[288px]">
              Vakeel<span className="accent">OS</span>
            </span>
          </Link>

          {/* signature line — script-flavoured accent + thin rule */}
          <div className="mt-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <p className="display-tight max-w-xl text-[22px] leading-[1.2] tracking-tight text-ink-2 sm:text-[26px]">
              Practice management,{" "}
              <span className="accent">for the Indian bar</span>.
            </p>
            <p className="mono text-[10.5px] uppercase tracking-[0.22em] text-ink-3">
              Built and hosted in India
            </p>
          </div>

          {/* wipe-in rule */}
          <div className="mt-12 h-px w-full origin-left bg-rule-strong wipe-in" />
        </div>
      </div>

      {/* Utility strip — demoted to a single horizontal row */}
      <div className="border-t border-rule">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {UTIL_LINKS.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className="under-reveal mono text-[11px] uppercase tracking-[0.22em] text-ink-3 hover:text-ink"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-1 text-[11.5px] text-ink-3 sm:flex-row sm:items-center sm:gap-4">
            <p className="mono text-[10.5px] uppercase tracking-[0.22em]">
              © {new Date().getFullYear()} Vakeel<span className="accent">OS</span>
            </p>
            <span aria-hidden className="hidden h-3 w-px bg-rule sm:block" />
            <p className="mono inline-flex items-center gap-2 text-[10.5px] uppercase tracking-[0.22em]">
              <span className="float-dot block h-1.5 w-1.5 rounded-full bg-emerald-500" />
              All systems operational
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
