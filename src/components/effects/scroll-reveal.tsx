"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollRevealProvider() {
  const pathname = usePathname();

  useEffect(() => {
    // Small delay lets the new page DOM settle before we query it
    // 600ms > page-transition enter duration (550ms) — ensures reveals
    // start only after the page is fully opaque, not mid-fade.
    const timer = window.setTimeout(() => {
      const els = document.querySelectorAll<Element>(".reveal:not(.in-view)");
      if (!els.length) return;

      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in-view");
              obs.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -48px 0px" }
      );

      els.forEach((el) => obs.observe(el));
      return () => obs.disconnect();
    }, 600);

    return () => window.clearTimeout(timer);
  }, [pathname]);

  return null;
}
