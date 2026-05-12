const SUBSTEPS: Record<string, { verb: string; mono: string }[]> = {
  "01": [
    { verb: "Court site polled", mono: "06:30" },
    { verb: "Causelist diffed", mono: "06:31" },
    { verb: "Conflicts flagged", mono: "06:32" },
  ],
  "02": [
    { verb: "Bundle compiled", mono: "09:10" },
    { verb: "Page anchors set", mono: "09:12" },
    { verb: "Read by counsel", mono: "09:14" },
  ],
  "03": [
    { verb: "Template seeded", mono: "13:55" },
    { verb: "Citations resolved", mono: "13:58" },
    { verb: "Sent for review", mono: "14:02" },
  ],
  "04": [
    { verb: "Time captured", mono: "18:30" },
    { verb: "Invoice generated", mono: "18:42" },
    { verb: "Payment requested", mono: "18:45" },
  ],
};

export function WorkflowSubsteps({ stepNum }: { stepNum: string }) {
  const rows = SUBSTEPS[stepNum] ?? [];
  return (
    <ol
      key={stepNum}
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
            <span className="mono text-[10.5px] uppercase tracking-[0.22em] text-ink-3">
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
