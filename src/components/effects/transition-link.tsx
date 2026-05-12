"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { type ComponentProps, useCallback } from "react";

type Props = ComponentProps<typeof Link>;

export function TransitionLink({ href, onClick, children, ...props }: Props) {
  const router = useRouter();

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      const url = href.toString();
      // Let the browser handle external links, hash-only jumps, and modifier-key clicks
      if (
        url.startsWith("http") ||
        url.startsWith("mailto:") ||
        url.startsWith("tel:") ||
        e.ctrlKey ||
        e.metaKey ||
        e.shiftKey ||
        e.altKey ||
        (props as { target?: string }).target === "_blank"
      ) {
        onClick?.(e);
        return;
      }

      e.preventDefault();
      onClick?.(e);

      if (typeof document.startViewTransition !== "function") {
        router.push(url);
        return;
      }

      document.startViewTransition(() => {
        router.push(url);
      });
    },
    [href, onClick, props, router]
  );

  return (
    <Link href={href} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}
