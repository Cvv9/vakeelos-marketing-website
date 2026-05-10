"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const inputClass =
  "w-full rounded-[3px] border border-rule bg-paper px-3 py-2.5 text-[14px] text-ink placeholder:text-ink-3 focus:outline-none focus:ring-1 focus:ring-saffron/50";

const labelClass =
  "mono mb-1.5 block text-[11px] uppercase tracking-[0.18em] text-ink-3";

type Fields = {
  name: string;
  email: string;
  firm: string;
  city: string;
  phone: string;
};

function FieldGroup({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className={labelClass}>
        {label}
      </label>
      {children}
    </div>
  );
}

const BULLETS = [
  "Invite-only early access",
  "Dedicated onboarding support",
  "Locked early adopter pricing",
];

export function WaitlistSection() {
  const [fields, setFields] = useState<Fields>({
    name: "",
    email: "",
    firm: "",
    city: "",
    phone: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fields.name,
          email: fields.email,
          firm: fields.firm || undefined,
          city: fields.city || undefined,
          phone: fields.phone || undefined,
        }),
      });

      if (res.ok) {
        setSuccess(true);
      } else {
        const data: unknown = await res.json();
        const msg =
          data &&
          typeof data === "object" &&
          "error" in data &&
          typeof (data as { error: unknown }).error === "string"
            ? (data as { error: string }).error
            : "Something went wrong. Please try again.";
        setError(msg);
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          {/* Left column */}
          <div className="lg:col-span-5">
            <p className="mono text-[11px] uppercase tracking-[0.22em] text-ink-3">
              Early access
            </p>
            <h1 className="display-tight mt-4 text-[44px] leading-[1.02] tracking-tight text-ink sm:text-[56px]">
              Be among the first.
            </h1>
            <p className="mt-5 text-[16px] leading-[1.6] text-ink-2">
              VakeelOS is rolling out to select advocates and firms first. Join
              the waitlist &mdash; we&rsquo;ll reach out personally when your
              spot is ready.
            </p>

            <ul className="mt-10 space-y-4">
              {BULLETS.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <span
                    className="mt-[5px] h-2 w-2 shrink-0 rounded-full bg-saffron"
                    aria-hidden
                  />
                  <span className="text-[15px] leading-[1.5] text-ink-2">
                    {bullet}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right column — form card */}
          <div className="lg:col-span-6 lg:col-start-7">
            <div className="rounded-[3px] border border-rule bg-paper-2 p-8">
              {success ? (
                <div className="space-y-3">
                  <p className="mono text-[11px] uppercase tracking-[0.22em] text-saffron">
                    You&rsquo;re on the list
                  </p>
                  <p className="display-tight text-[22px] tracking-tight text-ink">
                    We&rsquo;ll be in touch soon.
                  </p>
                  <p className="text-[14px] leading-[1.6] text-ink-3">
                    We review the waitlist weekly and reach out personally. Keep
                    an eye on your inbox.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <FieldGroup label="Name *" htmlFor="waitlist-name">
                    <input
                      id="waitlist-name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Your name"
                      value={fields.name}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </FieldGroup>

                  <FieldGroup label="Email *" htmlFor="waitlist-email">
                    <input
                      id="waitlist-email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="you@example.com"
                      value={fields.email}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </FieldGroup>

                  <FieldGroup
                    label="Law firm / Practice"
                    htmlFor="waitlist-firm"
                  >
                    <input
                      id="waitlist-firm"
                      name="firm"
                      type="text"
                      autoComplete="organization"
                      placeholder="e.g. Mehta & Associates, or Solo practice"
                      value={fields.firm}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </FieldGroup>

                  <FieldGroup label="City" htmlFor="waitlist-city">
                    <input
                      id="waitlist-city"
                      name="city"
                      type="text"
                      autoComplete="address-level2"
                      placeholder="e.g. Hyderabad"
                      value={fields.city}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </FieldGroup>

                  <FieldGroup label="Phone" htmlFor="waitlist-phone">
                    <input
                      id="waitlist-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="+91 —"
                      value={fields.phone}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </FieldGroup>

                  {error && (
                    <p className="text-[13px] text-red-500">{error}</p>
                  )}

                  <Button
                    type="submit"
                    variant="ink"
                    size="lg"
                    disabled={loading}
                    className="group w-full"
                  >
                    {loading ? (
                      "Joining..."
                    ) : (
                      <>
                        Join the waitlist
                        <ArrowUpRight className="ml-1.5 h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </>
                    )}
                  </Button>

                  <p className="mono text-center text-[11px] uppercase tracking-[0.18em] text-ink-3">
                    Currently invite-only &middot; Rolling out to verified
                    advocates
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
