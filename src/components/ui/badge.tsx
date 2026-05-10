import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "live" | "rolling" | "soon" | "ink" | "saffron";
}

function Badge({ className, variant = "ink", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "mono inline-flex items-center gap-1.5 rounded-full border border-rule bg-paper px-2.5 py-0.5 text-[10px] uppercase tracking-[0.18em]",
        "before:block before:h-1.5 before:w-1.5 before:rounded-full",
        {
          "text-ink-2": variant === "ink",
          "text-saffron-deep before:bg-saffron border-saffron/35 bg-saffron-soft":
            variant === "saffron",
          "text-ink-2 before:bg-emerald-500": variant === "live",
          "text-ink-2 before:bg-saffron": variant === "rolling",
          "text-ink-3 before:bg-ink-4": variant === "soon",
        },
        className,
      )}
      {...props}
    />
  );
}

export { Badge };
