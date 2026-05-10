"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_CONTACT_ID;
const FORMSPREE_URL = `https://formspree.io/f/${FORMSPREE_ID}`;

const inputClass =
  "w-full rounded-[3px] border border-rule bg-paper px-3 py-2.5 text-[14px] text-ink placeholder:text-ink-3 focus:outline-none focus:ring-1 focus:ring-saffron/50";

const labelClass = "mono block text-[11px] uppercase tracking-[0.18em] text-ink-3";

type FormField = {
  name: string;
  email: string;
  message: string;
};

type WalkthroughField = {
  name: string;
  email: string;
  phone: string;
  preferredTime: string;
  message: string;
};

function SuccessState() {
  return (
    <div className="rounded-[3px] border border-rule bg-paper-2 px-5 py-6">
      <p className="mono text-[11px] uppercase tracking-[0.22em] text-saffron">Sent</p>
      <p className="mt-2 text-[15px] text-ink">We&rsquo;ll be in touch.</p>
    </div>
  );
}

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
    <div className="flex flex-col gap-1.5">
      <label htmlFor={htmlFor} className={labelClass}>
        {label}
      </label>
      {children}
    </div>
  );
}

function GeneralForm() {
  const [fields, setFields] = useState<FormField>({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: "VakeelOS — General Inquiry",
          name: fields.name,
          email: fields.email,
          message: fields.message,
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

  if (success) return <SuccessState />;

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <FieldGroup label="Name" htmlFor="general-name">
        <input
          id="general-name"
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

      <FieldGroup label="Email" htmlFor="general-email">
        <input
          id="general-email"
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

      <FieldGroup label="Message" htmlFor="general-message">
        <textarea
          id="general-message"
          name="message"
          required
          rows={5}
          placeholder="What's on your mind?"
          value={fields.message}
          onChange={handleChange}
          className={`${inputClass} resize-none`}
        />
      </FieldGroup>

      {error && (
        <p className="text-[13px] text-red-500">{error}</p>
      )}

      <div>
        <Button type="submit" variant="ink" disabled={loading}>
          {loading ? "Sending…" : "Send message"}
        </Button>
      </div>
    </form>
  );
}

function WalkthroughForm() {
  const [fields, setFields] = useState<WalkthroughField>({
    name: "",
    email: "",
    phone: "",
    preferredTime: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: "VakeelOS — Walkthrough Request",
          name: fields.name,
          email: fields.email,
          phone: fields.phone || undefined,
          preferred_time: fields.preferredTime || undefined,
          message: fields.message,
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

  if (success) return <SuccessState />;

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <FieldGroup label="Name" htmlFor="walkthrough-name">
        <input
          id="walkthrough-name"
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

      <FieldGroup label="Email" htmlFor="walkthrough-email">
        <input
          id="walkthrough-email"
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

      <FieldGroup label="Phone (optional)" htmlFor="walkthrough-phone">
        <input
          id="walkthrough-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder="+91 98765 43210"
          value={fields.phone}
          onChange={handleChange}
          className={inputClass}
        />
      </FieldGroup>

      <FieldGroup label="Preferred time" htmlFor="walkthrough-time">
        <input
          id="walkthrough-time"
          name="preferredTime"
          type="text"
          placeholder="e.g. weekday afternoons"
          value={fields.preferredTime}
          onChange={handleChange}
          className={inputClass}
        />
      </FieldGroup>

      <FieldGroup label="Message" htmlFor="walkthrough-message">
        <textarea
          id="walkthrough-message"
          name="message"
          required
          rows={4}
          placeholder="Tell us about your practice."
          value={fields.message}
          onChange={handleChange}
          className={`${inputClass} resize-none`}
        />
      </FieldGroup>

      {error && (
        <p className="text-[13px] text-red-500">{error}</p>
      )}

      <div>
        <Button type="submit" variant="ink" disabled={loading}>
          {loading ? "Requesting…" : "Request a walkthrough"}
        </Button>
      </div>
    </form>
  );
}

type ActivePanel = "question" | "walkthrough";

export function ContactSection() {
  const [activePanel, setActivePanel] = useState<ActivePanel>("question");

  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        {/* Header */}
        <div className="mb-16">
          <p className="mono text-[11px] uppercase tracking-[0.22em] text-ink-3">
            Contact
          </p>
          <h1 className="display-tight mt-4 text-[44px] leading-[1.02] tracking-tight text-ink sm:text-[64px]">
            Let&rsquo;s talk.
          </h1>
          <p className="mt-4 max-w-md text-[16px] leading-[1.6] text-ink-3">
            Get in touch &mdash; we respond within one business day.
          </p>
        </div>

        {/* Mobile tab switcher */}
        <div className="mb-8 flex gap-px rounded-[3px] border border-rule bg-rule lg:hidden">
          <button
            type="button"
            onClick={() => setActivePanel("question")}
            className={`mono flex-1 rounded-[2px] px-4 py-2.5 text-[11px] uppercase tracking-[0.18em] transition-colors ${
              activePanel === "question"
                ? "bg-ink text-paper"
                : "bg-paper text-ink-3 hover:text-ink"
            }`}
          >
            Have a question?
          </button>
          <button
            type="button"
            onClick={() => setActivePanel("walkthrough")}
            className={`mono flex-1 rounded-[2px] px-4 py-2.5 text-[11px] uppercase tracking-[0.18em] transition-colors ${
              activePanel === "walkthrough"
                ? "bg-ink text-paper"
                : "bg-paper text-ink-3 hover:text-ink"
            }`}
          >
            Book a walkthrough
          </button>
        </div>

        {/* Panels */}
        <div className="flex flex-col gap-0 lg:flex-row">
          {/* Panel 1: General question */}
          <div
            className={`min-w-0 flex-1 lg:block lg:pr-14 ${activePanel === "question" ? "block" : "hidden"}`}
          >
            <p className="mono mb-1 text-[11px] uppercase tracking-[0.22em] text-ink-3">
              01
            </p>
            <h2 className="display-tight mb-8 text-[24px] font-medium leading-snug tracking-tight text-ink">
              Have a question?
            </h2>
            <GeneralForm />
          </div>

          {/* Vertical divider (desktop only) */}
          <div className="hidden w-px shrink-0 self-stretch bg-rule lg:block" />

          {/* Panel 2: Walkthrough */}
          <div
            className={`min-w-0 flex-1 lg:block lg:pl-14 ${activePanel === "walkthrough" ? "block" : "hidden"}`}
          >
            <p className="mono mb-1 text-[11px] uppercase tracking-[0.22em] text-ink-3">
              02
            </p>
            <h2 className="display-tight mb-8 text-[24px] font-medium leading-snug tracking-tight text-ink">
              Book a walkthrough
            </h2>
            <WalkthroughForm />
          </div>
        </div>

        {/* Footer note */}
        <div className="mt-20 border-t border-rule pt-8">
          <p className="mono text-[11px] uppercase tracking-[0.22em] text-ink-3">
            We&rsquo;re a small team. Every message is read personally.
          </p>
        </div>
      </div>
    </section>
  );
}
