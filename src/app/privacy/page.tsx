import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — VakeelOS",
  description: "VakeelOS Privacy Policy.",
};

// PLACEHOLDER — replace with actual Privacy Policy before public launch.
// Must comply with India's Digital Personal Data Protection Act (DPDPA) 2023.

export default function PrivacyPage() {
  return (
    <div className="bg-paper text-ink">
      <section className="border-b border-rule">
        <div className="mx-auto max-w-3xl px-6 pt-20 pb-16 lg:px-10 lg:pt-28 lg:pb-24">
          <p className="mono text-[11px] uppercase tracking-[0.22em] text-ink-3">
            Legal
          </p>
          <h1 className="display-tight mt-6 text-[40px] leading-[0.98] tracking-tight text-ink sm:text-[56px]">
            Privacy Policy
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
            Our Privacy Policy is being drafted in compliance with India&rsquo;s
            Digital Personal Data Protection Act (DPDPA) 2023. This page will be
            updated before VakeelOS opens to the public.
          </p>
          <p className="mt-6 text-[14px] leading-[1.6] text-ink-3">
            Questions about your data? Write to{" "}
            <a
              href="mailto:legal@vakeelos.in?subject=Privacy%20Policy"
              className="text-ink underline underline-offset-2 hover:text-saffron"
            >
              legal@vakeelos.in
            </a>
            .
          </p>
        </div>

        {/* REPLACE THIS BLOCK with actual Privacy Policy sections when ready */}
        <div className="mt-12 space-y-10 opacity-30 pointer-events-none select-none">
          {["Data We Collect", "How We Use Your Data", "Data Storage & Residency", "Your Rights Under DPDPA", "Cookies", "Contact the Data Fiduciary"].map((section) => (
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
