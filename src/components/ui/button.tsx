import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "ink" | "saffron" | "outline" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "ink", size = "default", asChild = false, ...props },
    ref,
  ) => {
    const Comp = asChild ? "span" : "button";
    return (
      <Comp
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-[3px] font-medium tracking-tight transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron focus-visible:ring-offset-2 focus-visible:ring-offset-paper disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-ink text-paper hover:bg-ink-2": variant === "ink",
            "bg-saffron text-paper hover:bg-saffron-deep": variant === "saffron",
            "border border-ink/15 bg-transparent text-ink hover:border-ink/40 hover:bg-ink/[0.03]":
              variant === "outline",
            "bg-transparent text-ink hover:bg-ink/[0.05]": variant === "ghost",
            "text-ink underline-offset-4 hover:text-saffron-deep p-0":
              variant === "link",
            "h-9 px-4 text-[13.5px]": size === "default",
            "h-8 px-3.5 text-[12.5px]": size === "sm",
            "h-12 px-7 text-[14.5px]": size === "lg",
            "h-9 w-9": size === "icon",
          },
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button };
