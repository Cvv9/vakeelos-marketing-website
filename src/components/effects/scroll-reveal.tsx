"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollRevealProvider() {
  const pathname = usePathname();

  useEffect(() => {
    // Small delay lets the new page DOM settle before we query it
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
    }, 80);

    return () => window.clearTimeout(timer);
  }, [pathname]);

  return null;
}
