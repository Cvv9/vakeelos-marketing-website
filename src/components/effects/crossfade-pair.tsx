"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export function CrossfadePair({
  from,
  to,
  className,
  duration = 1600,
  hoverFastForward = false,
}: {
  from: ReactNode;
  to: ReactNode;
  className?: string;
  duration?: number;
  hoverFastForward?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || done) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      queueMicrotask(() => setDone(true));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setDone(true);
            io.disconnect();
            return;
          }
        }
      },
      { threshold: 0.35 },
    );
    io.observe(node);
    return () => io.disconnect();
  }, [done]);

  return (
    <div
      ref={ref}
      data-done={done ? "true" : "false"}
      className={`crossfade-pair relative ${className ?? ""}`}
      onMouseEnter={hoverFastForward ? () => setDone(true) : undefined}
      onFocus={hoverFastForward ? () => setDone(true) : undefined}
      style={{ ['--crossfade-duration' as string]: `${duration}ms` }}
    >
      <div className="crossfade-layer crossfade-layer--from absolute inset-0">
        {from}
      </div>
      <div className="crossfade-layer crossfade-layer--to absolute inset-0">
        {to}
      </div>
    </div>
  );
}
