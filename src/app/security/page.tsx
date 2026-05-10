import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Database,
  FileLock2,
  Lock,
  Server,
  ShieldCheck,
  KeyRound,
  ScrollText,
  Eye,
} from "lucide-react";

const PILLARS = [
  {
    icon: <Server className="h-4 w-4" />,
    kicker: "Region",
    title: "India, only.",
    body:
      "Every database, every file, every AI log sits inside Indian data centres in Mumbai. Backup replication stays inside India too. No data leaves Indian soil — not for a CDN, not for analytics, not for the model.",
    facts: [
      "Primary region: Mumbai · India",
      "Document vault hosted in India",
      "Vector search hosted alongside the database",
      "Sessions and rate limits stay in-region",
    ],
  },
  {
    icon: <Lock className="h-4 w-4" />,
    kicker: "Encryption",
    title: "AES-256 at rest. TLS 1.3 in transit.",
    body:
      "Document files, database columns, audit logs, and backups are encrypted at rest with AES-256. Every connection — UI, API, mobile — is TLS 1.3 only, with HSTS and certificate pinning for the mobile clients.",
    facts: [
      "Managed customer master keys, per firm",
      "Per-firm key rotation on a 90-day schedule",
      "TLS 1.3, HSTS preload, certificate pinning",
      "Backups encrypted, 30-day point-in-time recovery",
    ],
  },
  {
    icon: <ShieldCheck className="h-4 w-4" />,
    kicker: "Your data, your model",
    title: "VakeelBrain never trains on you.",
    body:
      "We have written zero-data-retention agreements with our LLM providers. Your prompts and uploaded case files are isolated, never logged for training, and never shared across firms. The model is a cost line — your work is the moat.",
    facts: [
      "Zero-retention contract with Anthropic",
      "Per-firm tenant isolation in vector store",
      "Prompts redacted before any error telemetry",
      "Opt-out of model improvement is the default",
    ],
  },
  {
    icon: <FileLock2 className="h-4 w-4" />,
    kicker: "Compliance",
    title: "DPDPA-aligned. DPA on request.",
    body: (
      <>
        Vakeel<span className="accent">OS</span>{' '}is built to the Digital Personal Data Protection Act, 2023. We provide a Data Processing Agreement on request, run quarterly penetration tests, and publish a deletion SLA. Privileged communication is treated as a first-class category.
      </>
    ),
    facts: [
      "DPA available for Firm and Enterprise plans",
      "Annual penetration test by an empanelled CERT-In firm",
      "Right-to-erasure honoured within 30 days",
      "Sub-processor list published and notified before changes",
    ],
  },
];

const FACTS: { stat: string; label: string; source: string }[] = [
  {
    stat: "AES-256",
    label: "encryption at rest, managed keys",
    source: "FIPS 140-2 validated module",
  },
  {
    stat: "TLS 1.3",
    label: "in transit, HSTS preload",
    source: "Default for all subdomains",
  },
  {
    stat: "India",
    label: "primary region — Mumbai",
    source: "Backup stays in-region",
  },
  {
    stat: "30 days",
    label: "deletion SLA on closed accounts",
    source: "Right-to-erasure honoured",
  },
];

const PRACTICE = [
  {
    icon: <KeyRound className="h-4 w-4" />,
    title: "OTP & SSO sign-in",
    body: "OTP over Indian phone via Clerk. SAML SSO for Enterprise. No password resets to lose.",
  },
  {
    icon: <Eye className="h-4 w-4" />,
    title: "Granular role permissions",
    body: "Senior, junior, clerk, accountant. Roles map to per-case visibility, not just module flags.",
  },
  {
    icon: <ScrollText className="h-4 w-4" />,
    title: "Tamper-evident audit log",
    body: "Every read, edit, draft, send, payment status — appended to a per-firm audit trail.",
  },
  {
    icon: <Database className="h-4 w-4" />,
    title: "Single-tenant on Enterprise",
    body: "Dedicated database, dedicated document storage, optional private network peering for in-house teams.",
  },
];

export default function SecurityPage() {
  return (
    <div className="bg-paper text-ink">
      {/* HEADER */}
      <section className="border-b border-rule">
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-16 md:pb-24 md:pt-24 lg:px-10">
          <div className="grid grid-cols-12 items-end gap-10">
            <div className="col-span-12 md:col-span-8">
              <div className="mono text-[11px] uppercase tracking-[0.22em] text-ink-3">
                Security · privileged communication, treated as such
              </div>
              <h1 className="display-tight mt-7 text-[44px] font-semibold leading-[0.98] md:text-[68px]">
                Built for files{" "}
                <span className="accent text-saffron-deep">that matter.</span>
              </h1>
            </div>
            <div className="col-span-12 md:col-span-4">
              <p className="text-[15px] leading-relaxed text-ink-2">
                Legal data isn&rsquo;t SaaS data. We treat your case files, draft notes, and client
                contacts the way a senior treats a brief: locked, logged, and never seen by
                anyone who didn&rsquo;t need to.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FACT STRIP */}
      <section className="border-b border-rule bg-paper-2">
        <div className="mx-auto max-w-7xl px-6 py-12 md:py-16 lg:px-10">
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
            {FACTS.map((f) => (
              <div key={f.stat} className="border-l border-rule pl-5 md:pl-7">
                <div className="display-tight text-[28px] font-semibold leading-[1.1] text-ink md:text-[36px]">
                  {f.stat}
                </div>
                <div className="mt-3 max-w-[200px] text-[13.5px] leading-snug text-ink-2">
                  {f.label}
                </div>
                <div className="mono mt-3 text-[11px] font-medium uppercase tracking-[0.16em] text-ink-3">
                  {f.source}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28 lg:px-10">
        <div className="space-y-px bg-rule">
          {PILLARS.map((p, i) => (
            <div key={p.title} className="bg-paper">
              <div className="grid grid-cols-12 gap-6 px-2 py-12 md:px-8">
                <div className="col-span-12 md:col-span-1">
                  <div className="mono text-[12px] font-semibold uppercase tracking-[0.18em] text-ink-3">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                </div>
                <div className="col-span-12 md:col-span-4">
                  <div className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-rule">
                    {p.icon}
                  </div>
                  <div className="mono mt-5 text-[11.5px] font-medium uppercase tracking-[0.2em] text-ink-3">
                    {p.kicker}
                  </div>
                  <h2 className="display-tight mt-3 text-[26px] font-semibold leading-[1.08] text-ink md:text-[32px]">
                    {p.title}
                  </h2>
                </div>
                <div className="col-span-12 md:col-span-7">
                  <p className="text-[15px] leading-relaxed text-ink-2">{p.body}</p>
                  <ul className="mt-6 grid grid-cols-1 gap-y-2 text-[13px] text-ink-2 md:grid-cols-2 md:gap-x-6">
                    {p.facts.map((b) => (
                      <li key={b} className="flex gap-3 leading-relaxed">
                        <span className="mt-2 block h-px w-3 shrink-0 bg-saffron" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PRACTICE STRIP */}
      <section className="border-y border-rule bg-paper-2">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24 lg:px-10">
          <div className="mb-10 grid grid-cols-12 items-end gap-10">
            <div className="col-span-12 md:col-span-7">
              <Badge variant="ink" className="mb-6">
                The practical layer
              </Badge>
              <h2 className="display-tight text-[32px] font-semibold leading-[1.05] md:text-[40px]">
                Day-to-day controls,{" "}
                <span className="accent text-saffron-deep">no checklist theatre.</span>
              </h2>
            </div>
            <div className="col-span-12 md:col-span-5">
              <p className="text-[14.5px] leading-relaxed text-ink-2">
                Compliance posture is one thing. The other is what your senior junior actually
                touches at 4 PM. These are the controls that keep a chamber tidy.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-px bg-rule">
            {PRACTICE.map((p) => (
              <div key={p.title} className="bg-paper p-7">
                <div className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-rule">
                  {p.icon}
                </div>
                <h3 className="mt-5 text-[15.5px] font-medium text-ink">{p.title}</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-ink-2">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="mx-auto max-w-5xl px-6 py-20 text-center md:py-24 lg:px-10">
        <p className="accent text-[24px] leading-[1.2] text-ink md:text-[34px]">
          &ldquo;A clerk&rsquo;s memory is the original audit log. Ours just doesn&rsquo;t walk
          out at five o&rsquo;clock.&rdquo;
        </p>
        <p className="mono mt-7 text-[12px] font-semibold uppercase tracking-[0.2em] text-ink-3">
          &mdash; Founding principle
        </p>
      </section>

      {/* CTA */}
      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 lg:px-10">
          <div className="grid grid-cols-12 items-end gap-10">
            <div className="col-span-12 md:col-span-8">
              <div className="mono text-[11.5px] font-medium uppercase tracking-[0.22em] text-paper/75">
                Enterprise · single-tenant deployments
              </div>
              <h2 className="display-tight mt-6 text-[36px] font-semibold leading-[1.02] md:text-[52px]">
                Need a custom DPA, private network peering,{" "}
                <span className="accent text-saffron">or on-premise?</span>
              </h2>
              <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-paper/85">
                Our security team will walk a corporate panel through architecture, audit logs,
                sub-processor lists, and the deletion SLA &mdash; on a call, in writing, before
                you sign.
              </p>
            </div>
            <div className="col-span-12 md:col-span-4 md:text-right">
              <div className="flex flex-wrap gap-3 md:justify-end">
                <Link href="mailto:security@vakeelos.in">
                  <Button variant="saffron" size="lg" className="gap-2">
                    Talk to security <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/pricing">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-paper/25 text-paper hover:border-paper/50 hover:bg-paper/10"
                  >
                    See enterprise
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
