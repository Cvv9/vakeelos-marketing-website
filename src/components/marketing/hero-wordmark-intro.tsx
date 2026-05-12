"use client";

import { useEffect, useRef, useState } from "react";

const SESSION_KEY = "vakeelos.intro.seen";

export function HeroWordmarkIntro() {
  const [visible, setVisible] = useState(false);
  const [dismissing, setDismissing] = useState(false);
  const exitTimerRef = useRef<ReturnType<typeof window.setTimeout> | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.sessionStorage.getItem(SESSION_KEY) === "1") return;

    queueMicrotask(() => setVisible(true));
    window.sessionStorage.setItem(SESSION_KEY, "1");

    const onAny = () => dismiss();
    const onKey = (e: KeyboardEvent) => {
      if (e.key) dismiss();
    };
    const timer = window.setTimeout(dismiss, 4500);

    window.addEventListener("pointerdown", onAny, { once: true });
    window.addEventListener("keydown", onKey, { once: true });

    function dismiss() {
      setDismissing(true);
      exitTimerRef.current = window.setTimeout(() => setVisible(false), 700);
      window.removeEventListener("pointerdown", onAny);
      window.removeEventListener("keydown", onKey);
      window.clearTimeout(timer);
    }

    return () => {
      window.removeEventListener("pointerdown", onAny);
      window.removeEventListener("keydown", onKey);
      window.clearTimeout(timer);
      if (exitTimerRef.current) window.clearTimeout(exitTimerRef.current);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      aria-label="VakeelOS intro"
      data-dismissing={dismissing}
      className="hero-intro fixed inset-0 z-[60] flex items-center justify-center bg-paper"
    >
      <div className="flex flex-col items-center gap-8">
        <span className="hero-intro-mono mono text-[10.5px] uppercase tracking-[0.32em] text-ink-3">
          VakeelOS · A studio launch
        </span>
        <h2 className="display-tight hero-intro-wordmark text-[44px] font-medium leading-[0.92] tracking-tight text-ink sm:text-[88px] lg:text-[120px]">
          {"For the".split("").map((c, i) => (
            <span key={`a-${i}`} style={{ ['--i' as string]: i }}>
              {c === " " ? " " : c}
            </span>
          ))}
          <br />
          <span className="accent">
            {"Indian bar".split("").map((c, i) => (
              <span key={`b-${i}`} style={{ ['--i' as string]: i + 8 }}>
                {c === " " ? " " : c}
              </span>
            ))}
          </span>
        </h2>
        <span className="hero-intro-hint mono text-[10.5px] uppercase tracking-[0.32em] text-ink-3">
          Press any key, or wait
        </span>
      </div>
    </div>
  );
}
