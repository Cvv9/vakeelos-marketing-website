import type { Metadata } from "next";
import { WorkflowSection } from "@/components/marketing/workflow-section";

export const metadata: Metadata = {
  title: "Workflow",
  description:
    "Four moves, one workspace. Sync the docket, brief the matter, draft the document, send the invoice — VakeelOS turns a full court day into a closed docket.",
};

export default function WorkflowPage() {
  return (
    <div className="bg-paper">
      {/* Page hero */}
      <section className="border-b border-rule">
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-16 lg:px-10 lg:pt-28 lg:pb-24">
          <p className="mono text-[11px] uppercase tracking-[0.22em] text-ink-3">
            How it works
          </p>
          <h1 className="display-tight mt-6 max-w-4xl text-[44px] leading-[0.96] tracking-tight text-ink sm:text-[72px] lg:text-[96px]">
            A Tuesday,{" "}
            <span className="accent">cleanly billed.</span>
          </h1>
          <p className="mt-8 max-w-xl text-[17px] leading-[1.65] text-ink-2">
            Four moves, one workspace. Scroll through each step to see how
            VakeelOS turns a full court day into a closed docket.
          </p>
        </div>
      </section>

      {/* Full workflow with scroll-driven step advancement */}
      <WorkflowSection scrollDriven />
    </div>
  );
}
