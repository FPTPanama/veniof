"use client";

import { useEffect, useRef, type ReactNode } from "react";

type Props = {
  children: ReactNode;
};

/** Entrance: left → right, staggered for h1 / copy below. */
export function HeroTextIntro({ children }: Props) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const items = root.querySelectorAll<HTMLElement>("[data-hero-intro]");
    if (!items.length) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      items.forEach((el) => {
        el.style.opacity = "1";
        el.style.transform = "none";
      });
      return;
    }

    let alive = true;
    let ctx: { revert: () => void } | undefined;

    (async () => {
      const { gsap } = await import("gsap");
      if (!alive) return;

      ctx = gsap.context(() => {
        gsap.set(items, { x: -40, opacity: 0 });
        gsap.to(items, {
          x: 0,
          opacity: 1,
          duration: 0.95,
          ease: "power2.out",
          stagger: 0.14,
        });
      }, rootRef);
    })();

    return () => {
      alive = false;
      ctx?.revert();
    };
  }, []);

  return <div ref={rootRef}>{children}</div>;
}
