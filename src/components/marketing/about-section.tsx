import { CircleDot } from "lucide-react";

const PILLARS = [
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

const DIFFERENTIATORS = [
  { label: "Solo + small firms", copy: "Built around the independent advocate and the two-partner chamber, not the BigLaw firm." },
  { label: "INR-native billing", copy: "No USD pricing converted badly. Net invoices in rupees and paise, UPI-ready out of the box." },
  { label: "Bar Council verified", copy: "Enrolment verified at onboarding. Not a self-declared checkbox — an actual verification step." },
  { label: "DPDPA-ready logging", copy: "Audit logs and data residency aligned to India's Digital Personal Data Protection Act 2023." },
  { label: "Hindi · English UI", copy: "Toggle between Hindi and English at any time. No language lock-in." },
  { label: "Zero training data", copy: "Your prompts and documents never touch a foundational model's training pipeline. Contractually." },
];

export function AboutSection() {
  return (
    <div className="bg-paper text-ink">

      {/* ── HEADER ─────────────────────────────────────────────── */}
      <section className="border-b border-rule">
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-16 lg:px-10 lg:pt-28 lg:pb-24">
          <p className="mono text-[11px] uppercase tracking-[0.22em] text-ink-3">
            About VakeelOS
          </p>
          <h1 className="display-tight mt-6 max-w-4xl text-[44px] leading-[0.96] tracking-tight text-ink sm:text-[72px] lg:text-[96px]">
            Built for the bar.{" "}
            <span className="accent">By people who listened.</span>
          </h1>
          <p className="mt-8 max-w-xl text-[17px] leading-[1.65] text-ink-2">
            VakeelOS is a practice management suite designed from first principles
            around how Indian advocates actually work — not how Western LegalTech
            assumes they do.
          </p>
        </div>
      </section>

      {/* ── STORY ──────────────────────────────────────────────── */}
      <section className="border-b border-rule bg-paper-2">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">

            <div className="lg:col-span-5">
              <p className="mono text-[11px] uppercase tracking-[0.22em] text-ink-3">
                The brief
              </p>
              <h2 className="display-tight mt-5 text-[32px] leading-[1.05] tracking-tight text-ink sm:text-[40px]">
                Why we built this.
              </h2>
              <div className="mt-6 space-y-5 text-[15.5px] leading-[1.7] text-ink-2">
                <p>
                  We don&rsquo;t resell foreign tools. We don&rsquo;t bolt LegalTech
                  vocabulary onto Western workflows. VakeelOS is built around how a
                  solo or small firm actually files a vakalatnama, tracks an APHC
                  causelist, and bills a client over UPI.
                </p>
                <p>
                  The closest competitor charges 4–10× what we do. We started here
                  because affordability is not an afterthought — it&rsquo;s the
                  brief.
                </p>
                <p>
                  India has 1.8 million advocates. Most of them run their practice
                  on WhatsApp, a register, and memory. VakeelOS gives them a quiet,
                  focused operating system — without requiring them to change how
                  they think about their work.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <figure className="relative aspect-[3/4] w-full overflow-hidden rounded-[3px] border border-rule">
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

              <blockquote className="mt-8 border-l-2 border-saffron pl-6">
                <p className="text-[18px] leading-[1.55] text-ink-2">
                  &ldquo;Affordability is not an afterthought —
                  it&rsquo;s the brief.&rdquo;
                </p>
              </blockquote>
            </div>

          </div>
        </div>
      </section>

      {/* ── THREE PILLARS ──────────────────────────────────────── */}
      <section className="border-b border-rule">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <p className="mono text-[11px] uppercase tracking-[0.22em] text-ink-3">
            Our commitments
          </p>
          <h2 className="display-tight mt-5 text-[32px] leading-[1.05] tracking-tight text-ink sm:text-[44px]">
            Three things we never compromise on.
          </h2>

          <div className="mt-14 grid grid-cols-1 gap-px bg-rule sm:grid-cols-3">
            {PILLARS.map((p) => (
              <article
                key={p.kicker}
                className="bg-paper p-8 transition-colors hover:bg-paper-2"
              >
                <p className="mono text-[10.5px] uppercase tracking-[0.22em] text-ink-3">
                  {p.kicker}
                </p>
                <h3 className="display-tight mt-3 text-[40px] font-medium tracking-tight text-ink sm:text-[48px]">
                  {p.title}
                </h3>
                <p className="mt-4 text-[14.5px] leading-[1.6] text-ink-3">
                  {p.copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── DIFFERENTIATORS ────────────────────────────────────── */}
      <section className="border-b border-rule bg-paper-2">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="mono text-[11px] uppercase tracking-[0.22em] text-ink-3">
                What makes us different
              </p>
              <h2 className="display-tight mt-5 text-[32px] leading-[1.05] tracking-tight text-ink sm:text-[40px]">
                Six things built in, not bolted on.
              </h2>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <ul className="grid grid-cols-1 gap-px bg-rule sm:grid-cols-2">
                {DIFFERENTIATORS.map((d) => (
                  <li key={d.label} className="bg-paper-2 p-6 hover:bg-paper transition-colors">
                    <div className="flex items-start gap-3">
                      <CircleDot className="mt-[3px] h-3 w-3 shrink-0 text-saffron" />
                      <div>
                        <p className="mono text-[11px] font-semibold uppercase tracking-[0.18em] text-ink">
                          {d.label}
                        </p>
                        <p className="mt-2 text-[13.5px] leading-[1.55] text-ink-3">
                          {d.copy}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}
