import { CircleDot } from "lucide-react";

const PILLARS: { kicker: string; title: string; copy: string }[] = [
  {
    kicker: "Made in",
    title: "India",
    copy: "Drafted around real Indian causelists. Tested on APHC and TSHC. Built by engineers who briefed before they shipped.",
  },
  {
    kicker: "Hosted in",
    title: "India",
    copy: "Indian data centres by default. Data residency is a checkbox we already ticked, and a clause we already wrote.",
  },
  {
    kicker: "Verified at",
    title: "the Bar",
    copy: "Bar Council–verified onboarding. Clerks register too. Roles map to how a chamber actually moves.",
  },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative border-b border-rule bg-paper-2"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="mono text-[11px] uppercase tracking-[0.22em] text-ink-3">
              About the studio
            </p>
            <h2 className="display-tight reveal mt-4 text-[40px] leading-[1.02] tracking-tight text-ink sm:text-[64px]">
              An <span className="accent">independent</span>
              <br />
              software studio
              <br />
              for the Indian bar.
            </h2>

            <RedStringFile />
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <p className="reveal text-[18px] leading-[1.6] text-ink-2">
              We don&rsquo;t resell foreign tools. We don&rsquo;t bolt LegalTech
              vocabulary onto Western workflows. Vakeel<span className="accent">OS</span> is built around how a
              solo or small firm actually files a vakalatnama, tracks an APHC
              causelist, and bills a client over UPI.
            </p>
            <p className="reveal mt-6 text-[16px] leading-[1.6] text-ink-3">
              The closest competitor charges 4–10× what we do. We started here
              because affordability is not an afterthought — it&rsquo;s the
              brief.
            </p>

            <div className="mt-12 grid grid-cols-1 gap-px bg-rule sm:grid-cols-3">
              {PILLARS.map((p) => (
                <article
                  key={p.kicker}
                  className="bg-paper-2 p-6 transition-colors hover:bg-paper"
                >
                  <p className="mono text-[10.5px] uppercase tracking-[0.22em] text-ink-3">
                    {p.kicker}
                  </p>
                  <h3 className="display-tight mt-2 text-[26px] font-medium tracking-tight text-ink">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-[13.5px] leading-[1.55] text-ink-3">
                    {p.copy}
                  </p>
                </article>
              ))}
            </div>

            <ul className="mono mt-10 grid grid-cols-2 gap-y-3 gap-x-6 text-[12px] uppercase tracking-[0.18em] text-ink-3 sm:grid-cols-3">
              {[
                "Solo + small firms",
                "Bar Council verified",
                "DPDP-ready logging",
                "INR-native billing",
                "Hindi · English UI",
                "Hosted in India",
              ].map((t, idx) => (
                <li
                  key={t}
                  className="flex items-start gap-2"
                  style={{ ['--float-delay' as string]: `${idx * 0.3}s` }}
                >
                  <CircleDot className="float-icon mt-[3px] h-3 w-3 shrink-0 text-saffron" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function RedStringFile() {
  return (
    <figure className="video-tile mask-rise reveal relative mt-12 aspect-[3/4] w-full overflow-hidden rounded-[3px] border border-rule">
      <video
        className="absolute inset-0 z-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/about-file-poster.jpg"
        aria-hidden
      >
        <source src="/about-file.mp4" type="video/mp4" />
      </video>
      <div className="film-grain" aria-hidden />

      <figcaption className="absolute inset-x-0 top-0 z-10 flex items-center justify-between px-5 pt-4">
        <span className="mono text-[10.5px] uppercase tracking-[0.22em] text-paper/65">
          The brief — opening
        </span>
        <span className="mono text-[10.5px] uppercase tracking-[0.22em] text-paper/65">
          08 s · loop
        </span>
      </figcaption>

      <div className="absolute inset-x-0 bottom-0 z-10 flex items-end justify-between px-5 pb-5">
        <span className="mono text-[10px] uppercase tracking-[0.22em] text-paper/55">
          APHC · W.P. 4711/2025
        </span>
        <span className="block h-1.5 w-1.5 rounded-full bg-saffron" aria-hidden />
      </div>
    </figure>
  );
}
