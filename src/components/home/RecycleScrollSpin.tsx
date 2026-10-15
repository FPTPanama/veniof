"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

/** Recycle mark behind the bridge — spins with scroll; clipped below the deck. */
export function RecycleScrollSpin() {
  const spinRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const spin = spinRef.current;
    if (!spin) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    let alive = true;
    let trigger: { kill: () => void } | undefined;

    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      if (!alive) return;

      gsap.registerPlugin(ScrollTrigger);

      trigger = ScrollTrigger.create({
        onUpdate: (self) => {
          gsap.set(spin, { rotation: self.scroll() * 0.3 });
        },
      });

      if (!alive) trigger.kill();
    })();

    return () => {
      alive = false;
      trigger?.kill();
    };
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 top-[calc(18/300*100%)] z-0 flex justify-center"
    >
      <div
        ref={spinRef}
        className="w-[min(22rem,58vw)] opacity-85 will-change-transform sm:w-[min(26rem,42vw)] md:w-[30rem]"
      >
        <Image
          src="/recycle.svg"
          alt=""
          width={642}
          height={558}
          className="block h-auto w-full select-none"
          sizes="480px"
        />
      </div>
    </div>
  );
}
