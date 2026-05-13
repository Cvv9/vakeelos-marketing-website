const SUBSTEPS: Record<string, { verb: string; mono: string }[]> = {
  "01": [
    { verb: "High Court & district courts polled", mono: "06:30" },
    { verb: "Causelist diffed, conflicts flagged", mono: "06:31" },
    { verb: "Your rows ticked, hearings scheduled", mono: "06:32" },
  ],
  "02": [
    { verb: "Dashboard checked — alerts cleared", mono: "09:10" },
    { verb: "Last order fetched, PDF summarised", mono: "09:12" },
    { verb: "Case stage and directions briefed", mono: "09:14" },
  ],
  "03": [
    { verb: "Case data seeded into template", mono: "13:55" },
    { verb: "Kanoon, ILDC & firm library queried", mono: "13:58" },
    { verb: "Draft streamed, sent for review", mono: "14:02" },
  ],
  "04": [
    { verb: "Time entries rolled up", mono: "18:30" },
    { verb: "Invoice branded, UPI link embedded", mono: "18:42" },
    { verb: "Sent on WhatsApp, Tally export queued", mono: "18:45" },
  ],
};

export function WorkflowSubsteps({ stepNum }: { stepNum: string }) {
  const rows = SUBSTEPS[stepNum] ?? [];
  return (
    <ol
      className="workflow-substeps mt-8 flex flex-col gap-2 border-t border-rule pt-6"
      data-step={stepNum}
    >
      {rows.map((s, i) => (
        <li
          key={s.verb}
          className="substep flex items-center justify-between"
          style={{ ['--i' as string]: i }}
        >
          <div className="flex items-center gap-4">
            <span aria-hidden="true" className="mono text-[10.5px] uppercase tracking-[0.22em] text-ink-3">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="text-[14px] tracking-tight text-ink-2">
              {s.verb}
            </span>
          </div>
          <span className="mono text-[10.5px] uppercase tracking-[0.22em] text-ink-3">
            {s.mono} IST
          </span>
        </li>
      ))}
    </ol>
  );
}
