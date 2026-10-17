"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { HeroGear } from "./HeroGear";

type Props = {
  showGear?: boolean;
};

/**
 * Mobile-only: gear + portrait in document flow, before the CTAs.
 * Parallax uses native ScrollTrigger scrub (ScrollSmoother is desktop-only).
 */
export function HeroMobileVisual({ showGear = true }: Props) {
  const rootRef = useRef<HTMLDivElement>(null);
  const imageLayerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const imageLayer = imageLayerRef.current;
    if (!root || !imageLayer) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const section = root.closest("section") ?? root;
    let alive = true;
    let ctx: { revert: () => void } | undefined;

    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      if (!alive) return;

      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        gsap.fromTo(
          imageLayer,
          { yPercent: -4 },
          {
            yPercent: 8,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          },
        );
      }, root);

      ScrollTrigger.refresh();
    })();

    return () => {
      alive = false;
      ctx?.revert();
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className="relative z-10 mt-3 -mx-5 min-h-0 flex-1 overflow-visible sm:hidden"
    >
      {showGear ? <HeroGear placement="mobile" /> : null}
      <div
        ref={imageLayerRef}
        className="absolute inset-0 z-[1] will-change-transform"
      >
        <Image
          src="/hero_girl_2.webp"
          alt="chica con casco de seguridad"
          fill
          priority
          sizes="100vw"
          className="object-contain object-bottom"
        />
      </div>
    </div>
  );
}
