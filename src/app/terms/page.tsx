import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — VakeelOS",
  description: "VakeelOS Terms of Service.",
};

// PLACEHOLDER — replace with actual Terms of Service before public launch.

export default function TermsPage() {
  return (
    <div className="bg-paper text-ink">
      <section className="border-b border-rule">
        <div className="mx-auto max-w-3xl px-6 pt-20 pb-16 lg:px-10 lg:pt-28 lg:pb-24">
          <p className="mono text-[11px] uppercase tracking-[0.22em] text-ink-3">
            Legal
          </p>
          <h1 className="display-tight mt-6 text-[40px] leading-[0.98] tracking-tight text-ink sm:text-[56px]">
            Terms of Service
          </h1>
          <p className="mono mt-4 text-[11px] uppercase tracking-[0.18em] text-saffron">
            Placeholder — content pending
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16 lg:px-10 lg:py-24">
        <div className="rounded-[3px] border border-rule bg-paper-2 px-8 py-10">
          <p className="mono text-[11px] uppercase tracking-[0.22em] text-saffron">
            Coming soon
          </p>
          <p className="mt-4 text-[16px] leading-[1.7] text-ink-2">
            Our Terms of Service are being drafted. This page will be updated
            before VakeelOS opens to the public.
          </p>
          <p className="mt-6 text-[14px] leading-[1.6] text-ink-3">
            In the meantime, if you have questions about how VakeelOS handles
            your data or the terms of use, please reach out at{" "}
            <a
              href="mailto:legal@vakeelos.in?subject=Terms%20of%20Service"
              className="text-ink underline underline-offset-2 hover:text-saffron"
            >
              legal@vakeelos.in
            </a>
            .
          </p>
        </div>

        {/* REPLACE THIS BLOCK with actual ToS sections when ready */}
        <div className="mt-12 space-y-10 opacity-30 pointer-events-none select-none">
          {["Acceptance of Terms", "Use of Service", "Account Responsibilities", "Intellectual Property", "Limitation of Liability", "Governing Law"].map((section) => (
            <div key={section}>
              <h2 className="display-tight text-[20px] font-semibold tracking-tight text-ink">
                {section}
              </h2>
              <div className="mt-3 space-y-2">
                {[1, 2].map((i) => (
                  <div key={i} className="h-4 rounded bg-rule" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
