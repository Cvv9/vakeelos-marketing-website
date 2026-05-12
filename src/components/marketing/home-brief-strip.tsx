import { CrossfadePair } from "@/components/effects/crossfade-pair";

export function HomeBriefStrip() {
  return (
    <section
      className="relative border-b border-rule bg-paper"
      data-paper="deep"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="mono text-[11px] uppercase tracking-[0.22em] text-ink-3">
              The brief
            </p>
            <h2 className="display-tight reveal mt-4 text-[40px] leading-[1.02] tracking-tight text-ink sm:text-[52px]">
              Affordability is not
              <br />
              <span className="accent">an afterthought.</span>
            </h2>
            <p className="mt-6 max-w-md text-[15.5px] leading-[1.65] text-ink-2">
              We don&rsquo;t resell foreign tools. VakeelOS is built around how
              a solo or small firm actually files a vakalatnama, tracks an
              APHC causelist, and bills a client over UPI. Hosted in India,
              priced for India.
            </p>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <figure className="relative aspect-[4/3] w-full overflow-hidden rounded-[3px] border border-rule">
              <CrossfadePair
                className="h-full w-full"
                duration={1800}
                from={
                  <div className="brief-strip-cold absolute inset-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/about-desk.png"
                      alt="A lawyer's desk — lamp, documents, pen"
                      className="absolute inset-0 h-full w-full object-cover object-center"
                    />
                  </div>
                }
                to={
                  <div className="brief-strip-warm absolute inset-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/about-desk.png"
                      alt=""
                      aria-hidden
                      className="absolute inset-0 h-full w-full object-cover object-center"
                    />
                    <div
                      aria-hidden
                      className="absolute inset-0"
                      style={{
                        background:
                          "radial-gradient(120% 80% at 70% 30%, oklch(0.72 0.105 70 / 0.22), transparent 60%)",
                      }}
                    />
                  </div>
                }
              />
              <figcaption className="pointer-events-none absolute inset-x-0 top-0 z-10 flex items-center justify-between px-5 pt-4">
                <span className="mono text-[10.5px] uppercase tracking-[0.22em] text-paper/65">
                  The brief — opening
                </span>
                <span className="mono text-[10.5px] uppercase tracking-[0.22em] text-paper/65">
                  Late night · in chambers
                </span>
              </figcaption>
              <div className="film-grain pointer-events-none absolute inset-0 z-10" aria-hidden />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
