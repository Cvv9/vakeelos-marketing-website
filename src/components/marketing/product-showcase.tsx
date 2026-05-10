"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  ArrowUpRight,
  Check,
  CircleDot,
  FileText,
  Gavel,
  Quote,
  ScrollText,
  Sparkles,
} from "lucide-react";

const Brand = () => (
  <>
    Vakeel<span className="accent">OS</span>
  </>
);

type Scene = {
  id: string;
  kicker: string;
  time: string;
  title: string;
  body: ReactNode;
};

const SCENES: Scene[] = [
  {
    id: "causelist",
    kicker: "Module 02 · Causelist Sync",
    time: "8:14 AM · Tuesday",
    title: "11,234 entries hit the high court portal. Three of them are yours.",
    body: (
      <>
        <Brand /> pulls APHC and TSHC every morning, then waits for you to tick the rows that matter. Untracked rows live in the inbox, never in your case manager.
      </>
    ),
  },
  {
    id: "drafter",
    kicker: "Module 04 · VakeelBrain Drafter",
    time: "11:32 AM · Tuesday",
    title: "A rejoinder, drafted from your reply and the 22 April order.",
    body:
      "VakeelBrain reads the case object — parties, CNR, prior orders — and streams a first cut into your editor. Refine inline. Export to .docx, signed by senior.",
  },
  {
    id: "order",
    kicker: "Module 08 · Court Order Vault",
    time: "5:48 PM · Tuesday",
    title: "Today's order is on the portal. Four bullets before chambers.",
    body:
      "We fetch the latest order PDF and ask VakeelBrain for the four lines you need: result, interim relief, directions, next date. The PDF lands in your vault, fully searchable.",
  },
];

export function ProductShowcase() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      if (total <= 0) return;
      const progress = Math.max(0, Math.min(1, -rect.top / total));
      const idx = Math.min(
        SCENES.length - 1,
        Math.floor(progress * SCENES.length * 0.999),
      );
      setActive(idx);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-paper h-[220vh] md:h-[300vh]"
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden border-y border-rule">
        <div
          className="bg-rules pointer-events-none absolute inset-0 opacity-40"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-[55%] opacity-50"
          aria-hidden
          style={{
            background:
              "radial-gradient(700px 500px at 80% 50%, oklch(0.96 0.04 70 / 0.45), transparent 70%)",
          }}
        />
        <div className="relative mx-auto grid w-full max-w-7xl grid-cols-12 items-center gap-6 px-6 py-6 md:gap-10 md:py-10 lg:px-10">
          {/* Left — narrative */}
          <div className="col-span-12 md:col-span-5">
            <div className="mono inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.22em] text-ink-3">
              <span className="block h-1.5 w-1.5 bg-saffron" aria-hidden />
              The platform · in three moments
            </div>

            {/* mobile compact progress — three dots */}
            <div className="mt-5 flex items-center gap-2 md:hidden" aria-hidden>
              {SCENES.map((s, i) => (
                <span
                  key={s.id}
                  className={`block h-1.5 rounded-full transition-all duration-500 ${
                    i === active
                      ? "w-7 bg-saffron-deep"
                      : i < active
                        ? "w-3 bg-ink-3"
                        : "w-3 bg-rule-strong"
                  }`}
                />
              ))}
              <span className="mono ml-2 text-[10.5px] font-semibold uppercase tracking-[0.18em] text-ink-3">
                {SCENES[active].kicker}
              </span>
            </div>

            {/* progress rail — desktop full, mobile compact dots */}
            <ol className="mt-7 hidden space-y-3 md:block">
              {SCENES.map((s, i) => {
                const isActive = i === active;
                const isPast = i < active;
                return (
                  <li
                    key={s.id}
                    className="grid grid-cols-[20px_1fr] items-start gap-3"
                  >
                    <div className="relative mt-2 flex h-3 w-3 items-center justify-center">
                      <span
                        className={`block h-2 w-2 rounded-full transition-all duration-500 ${
                          isActive
                            ? "scale-110 bg-saffron-deep"
                            : isPast
                              ? "bg-ink-3"
                              : "bg-rule-strong"
                        }`}
                      />
                      {i < SCENES.length - 1 ? (
                        <span
                          className={`absolute left-1/2 top-3 h-7 w-px -translate-x-1/2 transition-colors duration-500 ${
                            isPast ? "bg-ink-3" : "bg-rule"
                          }`}
                        />
                      ) : null}
                    </div>
                    <div>
                      <div
                        className={`mono text-[11px] font-semibold uppercase tracking-[0.18em] transition-colors duration-300 ${
                          isActive ? "text-ink" : "text-ink-3"
                        }`}
                      >
                        {s.kicker}
                      </div>
                      <div
                        className={`mt-1 text-[12.5px] transition-colors duration-300 ${
                          isActive ? "text-ink-2" : "text-ink-3"
                        }`}
                      >
                        {s.time}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ol>

            <div className="relative mt-5 min-h-[140px] md:mt-9 md:min-h-[200px]">
              {SCENES.map((s, i) => (
                <div
                  key={s.id}
                  aria-hidden={i !== active}
                  className={`absolute inset-0 transition-all duration-700 ${
                    i === active
                      ? "translate-y-0 opacity-100"
                      : i < active
                        ? "-translate-y-3 opacity-0"
                        : "translate-y-3 opacity-0"
                  }`}
                >
                  <h2 className="display-tight text-[20px] font-semibold leading-[1.1] text-ink md:text-[36px] md:leading-[1.04]">
                    {s.title}
                  </h2>
                  <p className="mt-3 max-w-md text-[13px] leading-relaxed text-ink-2 md:mt-5 md:text-[14.5px]">
                    {s.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — stacked mocks */}
          <div className="col-span-12 md:col-span-7">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-[360px] md:ml-auto md:mr-0 md:aspect-[5/6] md:max-w-[640px]">
              {SCENES.map((s, i) => (
                <div
                  key={s.id}
                  aria-hidden={i !== active}
                  className={`absolute inset-0 transition-all duration-700 ease-out ${
                    i === active
                      ? "translate-y-0 scale-100 opacity-100"
                      : i < active
                        ? "-translate-y-4 scale-[0.97] opacity-0"
                        : "translate-y-6 scale-[0.97] opacity-0"
                  }`}
                  style={{ pointerEvents: i === active ? "auto" : "none" }}
                >
                  {s.id === "causelist" ? <CauselistMock /> : null}
                  {s.id === "drafter" ? <DrafterMock /> : null}
                  {s.id === "order" ? <OrderMock /> : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- mock 1: causelist ---------- */

function CauselistMock() {
  const rows: {
    item: string;
    case: string;
    parties: string;
    bench: string;
    tracked: boolean;
  }[] = [
    {
      item: "12",
      case: "WP/4421/2025",
      parties: "Sridhar Reddy vs. State of A.P.",
      bench: "Court 12 · J. Manmadha Rao",
      tracked: true,
    },
    {
      item: "27",
      case: "CRLP/8102/2025",
      parties: "Lakshmi Devi vs. State of A.P.",
      bench: "Court 7 · J. Naidu",
      tracked: false,
    },
    {
      item: "33",
      case: "WP/3917/2024",
      parties: "Aurobindo Industries vs. APIIC",
      bench: "Court 12 · J. Manmadha Rao",
      tracked: true,
    },
    {
      item: "41",
      case: "CRLA/2207/2024",
      parties: "Ravi Kumar vs. State of A.P.",
      bench: "Court 5 · J. Sastri",
      tracked: false,
    },
    {
      item: "58",
      case: "WP/9821/2025",
      parties: "Greenfield Builders vs. APUDC",
      bench: "Court 12 · J. Manmadha Rao",
      tracked: true,
    },
  ];
  return (
    <div className="flex h-full flex-col rounded-[6px] border border-rule bg-paper shadow-[0_30px_60px_-30px_rgba(20,15,5,0.22)]">
      {/* chrome */}
      <div className="flex items-center justify-between border-b border-rule px-5 py-3">
        <div className="flex items-center gap-2">
          <Gavel className="h-3.5 w-3.5 text-ink-3" />
          <div className="mono text-[10.5px] font-semibold uppercase tracking-[0.2em] text-ink-2">
            APHC · Causelist · 2026-05-06
          </div>
        </div>
        <div className="mono inline-flex items-center gap-1.5 text-[10.5px] font-medium uppercase tracking-[0.18em] text-ink-3">
          <span className="block h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Live · 11,234 entries
        </div>
      </div>

      {/* filter chips */}
      <div className="flex flex-wrap items-center gap-2 border-b border-rule px-5 py-3 text-[11.5px]">
        {[
          { l: "My matters", on: true },
          { l: "Court 12", on: true },
          { l: "J. Manmadha Rao", on: false },
          { l: "Fresh", on: false },
        ].map((c) => (
          <span
            key={c.l}
            className={`mono rounded-full border px-2.5 py-0.5 font-medium uppercase tracking-[0.14em] ${
              c.on
                ? "border-saffron/60 bg-saffron-soft/60 text-ink"
                : "border-rule text-ink-3"
            }`}
          >
            {c.l}
          </span>
        ))}
      </div>

      {/* rows */}
      <div className="flex-1 divide-y divide-rule overflow-hidden">
        {rows.map((r) => (
          <div
            key={r.case}
            className={`grid grid-cols-12 items-center gap-3 px-5 py-3 text-[12.5px] ${
              r.tracked
                ? "border-l-[3px] border-l-saffron bg-saffron-soft/35"
                : "border-l-[3px] border-l-transparent"
            }`}
          >
            <div className="mono col-span-1 text-[11px] font-semibold text-ink-3">
              #{r.item}
            </div>
            <div className="col-span-4">
              <div className="mono text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-2">
                {r.case}
              </div>
            </div>
            <div className="col-span-5 truncate text-[12.5px] text-ink">
              {r.parties}
            </div>
            <div className="col-span-2 text-right">
              {r.tracked ? (
                <span className="mono inline-flex items-center gap-1 text-[10.5px] font-semibold uppercase tracking-[0.16em] text-saffron-deep">
                  <Check className="h-3 w-3" /> Tracked
                </span>
              ) : (
                <span className="mono text-[10.5px] uppercase tracking-[0.16em] text-ink-3">
                  Skip
                </span>
              )}
            </div>
            <div className="col-span-12 -mt-1 ml-[42px] text-[11.5px] text-ink-3">
              {r.bench}
            </div>
          </div>
        ))}
      </div>

      {/* footer */}
      <div className="flex items-center justify-between border-t border-rule bg-paper-2 px-5 py-3 text-[11.5px]">
        <div className="mono uppercase tracking-[0.16em] text-ink-3">
          3 ticked · added to case manager
        </div>
        <div className="inline-flex items-center gap-1 text-[12px] font-medium text-ink">
          Open all <ArrowUpRight className="h-3 w-3" />
        </div>
      </div>
    </div>
  );
}

/* ---------- mock 2: drafter ---------- */

function DrafterMock() {
  return (
    <div className="flex h-full flex-col rounded-[6px] border border-rule bg-paper shadow-[0_30px_60px_-30px_rgba(20,15,5,0.22)]">
      <div className="flex items-center justify-between border-b border-rule px-5 py-3">
        <div className="flex items-center gap-2">
          <Sparkles className="h-3.5 w-3.5 text-saffron-deep" />
          <div className="mono text-[10.5px] font-semibold uppercase tracking-[0.2em] text-ink-2">
            VakeelBrain · Rejoinder · WP/4421/2025
          </div>
        </div>
        <div className="mono inline-flex items-center gap-1.5 text-[10.5px] font-medium uppercase tracking-[0.18em] text-saffron-deep">
          <CircleDot className="h-3 w-3 animate-pulse" />
          Streaming
        </div>
      </div>

      {/* citations row */}
      <div className="flex flex-wrap items-center gap-2 border-b border-rule px-5 py-3">
        <span className="mono text-[10.5px] font-semibold uppercase tracking-[0.18em] text-ink-3">
          Pulling from
        </span>
        {["Reply · 14 Mar", "Order · 22 Apr", "Maneka Gandhi (1978)"].map(
          (c) => (
            <span
              key={c}
              className="mono rounded-full border border-rule bg-paper-2 px-2.5 py-0.5 text-[10.5px] font-medium uppercase tracking-[0.14em] text-ink-2"
            >
              {c}
            </span>
          ),
        )}
      </div>

      {/* doc area */}
      <div className="flex-1 overflow-hidden px-7 py-6 text-[12.5px] leading-[1.7] text-ink">
        <div className="mono mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-3">
          IN THE HIGH COURT OF ANDHRA PRADESH
        </div>
        <div className="text-[12.5px] font-medium text-ink-2">
          Rejoinder filed on behalf of the Petitioner
        </div>
        <p className="mt-4">
          <span className="mono text-[11px] font-semibold text-ink-3">¶ 1.</span>{" "}
          The Petitioner reiterates the averments made in the Writ Petition and
          the Reply dated 14 March 2026, and humbly prays this Hon&rsquo;ble
          Court take note of the developments since the interim order dated 22
          April 2026.
        </p>
        <p className="mt-3">
          <span className="mono text-[11px] font-semibold text-ink-3">¶ 2.</span>{" "}
          That the Respondent&rsquo;s reply, filed on 28 April 2026, fails to
          address the substantive question of jurisdictional overreach raised
          in <span className="font-medium">paragraphs 7 to 11</span> of the
          original petition.
        </p>
        <p className="mt-3">
          <span className="mono text-[11px] font-semibold text-ink-3">¶ 3.</span>{" "}
          It is further submitted, in line with the principle laid down in{" "}
          <span className="accent text-saffron-deep">
            Maneka Gandhi v. Union of India (1978) 1 SCC 248
          </span>
          , that procedural due process cannot be waived by administrative
          convenience.
        </p>
        <p className="mt-3 text-ink-3">
          <span className="mono text-[11px] font-semibold text-ink-3">¶ 4.</span>{" "}
          <span className="bg-saffron-soft/70 px-1 text-ink">
            Drafting paragraph four
          </span>
          <span className="ml-1 inline-block h-3 w-1.5 translate-y-0.5 animate-pulse bg-ink" />
        </p>
      </div>

      {/* footer */}
      <div className="flex items-center justify-between border-t border-rule bg-paper-2 px-5 py-3 text-[11.5px]">
        <div className="mono uppercase tracking-[0.16em] text-ink-3">
          ~ 8 min to refine · Editable inline
        </div>
        <div className="inline-flex items-center gap-1 text-[12px] font-medium text-ink">
          Send to senior <ArrowUpRight className="h-3 w-3" />
        </div>
      </div>
    </div>
  );
}

/* ---------- mock 3: order vault ---------- */

function OrderMock() {
  const bullets: { label: string; value: string }[] = [
    { label: "Result", value: "Stay continued · No coercive action" },
    { label: "Interim relief", value: "Status quo on land possession" },
    {
      label: "Directions",
      value: "Respondents to file counter by 22 May 2026",
    },
    { label: "Next date", value: "23 May 2026 · Court 12" },
  ];
  return (
    <div className="grid h-full grid-rows-[auto_1fr] gap-3">
      {/* AI summary card */}
      <div className="rounded-[6px] border border-rule bg-paper shadow-[0_30px_60px_-30px_rgba(20,15,5,0.22)]">
        <div className="flex items-center justify-between border-b border-rule px-5 py-3">
          <div className="flex items-center gap-2">
            <Sparkles className="h-3.5 w-3.5 text-saffron-deep" />
            <div className="mono text-[10.5px] font-semibold uppercase tracking-[0.2em] text-ink-2">
              VakeelBrain · Order summary
            </div>
          </div>
          <div className="mono text-[10.5px] font-medium uppercase tracking-[0.18em] text-ink-3">
            WP/4421/2025
          </div>
        </div>

        <ul className="divide-y divide-rule">
          {bullets.map((b, i) => (
            <li
              key={b.label}
              className="grid grid-cols-12 items-baseline gap-4 px-5 py-3.5"
            >
              <div className="mono col-span-1 text-[11px] font-semibold text-ink-3">
                0{i + 1}
              </div>
              <div className="mono col-span-3 text-[10.5px] font-semibold uppercase tracking-[0.16em] text-ink-3">
                {b.label}
              </div>
              <div className="col-span-8 text-[13px] font-medium leading-snug text-ink">
                {b.value}
              </div>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-between border-t border-rule bg-paper-2 px-5 py-3 text-[11.5px]">
          <div className="mono uppercase tracking-[0.16em] text-ink-3">
            Pulled from APHC · 5:42 PM today
          </div>
          <div className="inline-flex items-center gap-1 text-[12px] font-medium text-ink">
            Open PDF <ArrowUpRight className="h-3 w-3" />
          </div>
        </div>
      </div>

      {/* Order PDF strip */}
      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-7 flex items-stretch overflow-hidden rounded-[6px] border border-rule bg-paper-2">
          <div className="flex items-center justify-center border-r border-rule bg-paper px-4">
            <FileText className="h-5 w-5 text-ink-3" />
          </div>
          <div className="flex flex-1 flex-col justify-center px-4 py-3">
            <div className="mono text-[10.5px] font-semibold uppercase tracking-[0.18em] text-ink-3">
              Order · 6 May 2026 · 4 pages
            </div>
            <div className="mt-1 text-[12.5px] font-medium text-ink">
              4421-2025_Order_06May.pdf
            </div>
            <div className="mono mt-1 text-[10.5px] font-medium uppercase tracking-[0.16em] text-ink-3">
              Indexed · searchable · secure
            </div>
          </div>
        </div>
        <div className="col-span-5 flex flex-col justify-between rounded-[6px] border border-rule bg-ink p-4 text-paper">
          <div>
            <Quote className="h-4 w-4 text-saffron" />
            <p className="mt-3 text-[12px] leading-relaxed text-paper/85">
              &ldquo;Stay granted on 22 April stands continued. Counter to be
              filed on or before 22 May.&rdquo;
            </p>
          </div>
          <div className="mono mt-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-paper/70">
            <ScrollText className="mr-1 inline h-3 w-3" /> Verbatim · pp. 3
          </div>
        </div>
      </div>
    </div>
  );
}
