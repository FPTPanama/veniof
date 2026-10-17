"use client";

import { useEffect, useRef } from "react";

const ORIGIN = "903.68 903.73";

const SPINS = [
  { id: "gear-outer", perPixel: 0.07, direction: 1 },
  { id: "gear-gold-outer", perPixel: 0.045, direction: -1 },
  { id: "gear-body", perPixel: 0.11, direction: 1 },
  { id: "gear-ticks", perPixel: 0.16, direction: -1 },
  { id: "gear-gold-inner", perPixel: 0.25, direction: 1 },
] as const;

type Props = {
  /** Desktop stays in the absolute backdrop; mobile sits in-flow under the copy. */
  placement?: "desktop" | "mobile";
};

export function HeroGear({ placement = "desktop" }: Props) {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let alive = true;
    let trigger: { kill: () => void } | undefined;

    (async () => {
      const [markup, { gsap }, { ScrollTrigger }] = await Promise.all([
        fetch("/img/engranaje_home.svg").then((response) => response.text()),
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      if (!alive) return;

      gsap.registerPlugin(ScrollTrigger);

      const parsed = new DOMParser().parseFromString(markup, "image/svg+xml");
      const svg = parsed.documentElement;
      if (!(svg instanceof SVGSVGElement) || !alive) return;

      host.replaceChildren(svg);
      svg.setAttribute("aria-hidden", "true");
      svg.setAttribute("preserveAspectRatio", "xMidYMid slice");
      svg.style.display = "block";
      svg.style.width = "100%";
      svg.style.height = "100%";

      if (reduce) return;

      const parts = SPINS.flatMap((spin) => {
        const node = svg.querySelector(`#${spin.id}`);
        return node ? [{ node, rate: spin.perPixel * spin.direction }] : [];
      });

      trigger = ScrollTrigger.create({
        onUpdate: (self) => {
          const distance = self.scroll();
          for (const part of parts) {
            part.node.setAttribute(
              "transform",
              `rotate(${distance * part.rate} ${ORIGIN})`,
            );
          }
        },
      });

      if (!alive) trigger.kill();
    })();

    return () => {
      alive = false;
      trigger?.kill();
    };
  }, []);

  const className =
    placement === "mobile"
      ? "pointer-events-none absolute bottom-[-8%] left-1/2 z-0 aspect-square w-[min(420px,88%)] -translate-x-1/2 opacity-50 sm:hidden"
      : "pointer-events-none absolute top-1/2 left-full z-0 hidden aspect-square w-[min(980px,60vw)] -translate-x-1/2 -translate-y-1/2 opacity-70 sm:block";

  return <div ref={hostRef} aria-hidden className={className} />;
}
