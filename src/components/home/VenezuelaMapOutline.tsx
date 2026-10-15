"use client";

import { useEffect, useRef } from "react";

type Props = {
  className?: string;
};

/** Northern Venezuela outline; draws with scroll and drifts slower than the page. */
export function VenezuelaMapOutline({ className = "" }: Props) {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    const layer = parallaxRef.current;
    if (!host || !layer) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let alive = true;
    let ctx: { revert: () => void } | undefined;

    (async () => {
      const [markup, { gsap }, { ScrollTrigger }, { ScrollSmoother }] =
        await Promise.all([
          fetch("/venezuela_norte.svg").then((response) => response.text()),
          import("gsap"),
          import("gsap/ScrollTrigger"),
          import("gsap/ScrollSmoother"),
        ]);
      if (!alive) return;

      gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

      const parsed = new DOMParser().parseFromString(markup, "image/svg+xml");
      const svg = parsed.documentElement;
      if (!(svg instanceof SVGSVGElement) || !alive) return;

      const path = svg.querySelector("path");
      if (!(path instanceof SVGPathElement)) return;

      svg.setAttribute("aria-hidden", "true");
      svg.setAttribute("preserveAspectRatio", "xMidYMid meet");
      svg.style.display = "block";
      svg.style.width = "100%";
      svg.style.height = "100%";
      path.setAttribute("fill", "none");
      path.setAttribute("stroke", "var(--navy)");
      path.setAttribute("stroke-width", "1.25");
      path.setAttribute("stroke-linecap", "round");
      path.setAttribute("stroke-linejoin", "round");

      host.replaceChildren(svg);

      // Path data runs east→west; negative offset reveals west→east (left→right).
      const length = path.getTotalLength();
      path.style.strokeDasharray = `${length}`;
      path.style.strokeDashoffset = `${-length}`;

      if (reduce) {
        path.style.strokeDashoffset = "0";
        return;
      }

      const section = host.closest("section") ?? host;

      ctx = gsap.context(() => {
        gsap.fromTo(
          path,
          { strokeDashoffset: -length },
          {
            strokeDashoffset: 0,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top 75%",
              end: "top 15%",
              scrub: 0.6,
            },
          },
        );

        const smoother = ScrollSmoother.get();
        if (smoother) {
          smoother.effects(layer, { speed: 0.78 });
        } else {
          gsap.to(layer, {
            y: 64,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          });
        }
      }, parallaxRef);
    })();

    return () => {
      alive = false;
      ctx?.revert();
    };
  }, []);

  return (
    <div
      ref={parallaxRef}
      data-speed="0.78"
      aria-hidden
      className={`pointer-events-none will-change-transform ${className}`}
    >
      <div ref={hostRef} className="h-full w-full" />
    </div>
  );
}
