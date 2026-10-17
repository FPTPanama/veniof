"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

type Props = {
  callout?: string;
};

export function HeroGirlBackdrop({ callout }: Props) {
  const rootRef = useRef<HTMLDivElement>(null);
  const imageParallaxRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const calloutParallaxRef = useRef<HTMLDivElement>(null);
  const calloutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const image = imageRef.current;
    const imageLayer = imageParallaxRef.current;
    const calloutEl = calloutRef.current;
    const calloutLayer = calloutParallaxRef.current;
    if (!image || !imageLayer) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      image.style.opacity = "1";
      image.style.transform = "none";
      if (calloutEl) {
        calloutEl.style.opacity = "1";
        calloutEl.style.transform = "translateY(-50%)";
      }
      return;
    }

    let alive = true;
    let ctx: { revert: () => void } | undefined;

    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      const { ScrollSmoother } = await import("gsap/ScrollSmoother");
      if (!alive) return;

      gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

      ctx = gsap.context(() => {
        gsap.set(image, { x: 48, opacity: 0 });
        if (calloutEl) gsap.set(calloutEl, { x: 36, opacity: 0, yPercent: -50 });

        const tl = gsap.timeline({
          defaults: { ease: "power2.out" },
          onComplete: () => {
            const smoother = ScrollSmoother.get();
            if (smoother) {
              // Re-bind data-speed nodes mounted after ScrollSmoother.create
              smoother.effects("[data-hero-parallax]");
            }
          },
        });

        tl.to(image, {
          x: 0,
          opacity: 1,
          duration: 1.05,
        });

        if (calloutEl) {
          tl.to(
            calloutEl,
            {
              x: 0,
              opacity: 1,
              yPercent: -50,
              duration: 0.85,
            },
            "-=0.55",
          );
        }

        const section =
          rootRef.current?.closest("section") ?? rootRef.current ?? undefined;
        const smoother = ScrollSmoother.get();

        if (smoother) {
          smoother.effects("[data-hero-parallax]");
        } else if (section) {
          // Native scroll (mobile): scrubbed y gives the same depth read
          gsap.to(imageLayer, {
            y: 72,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          });
          if (calloutLayer) {
            gsap.to(calloutLayer, {
              y: -56,
              ease: "none",
              scrollTrigger: {
                trigger: section,
                start: "top top",
                end: "bottom top",
                scrub: true,
              },
            });
          }
        }
      }, rootRef);
    })();

    return () => {
      alive = false;
      ctx?.revert();
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className="pointer-events-none absolute inset-y-0 right-0 z-[1] hidden w-[min(1120px,68vw)] sm:block md:w-[min(1240px,62vw)]"
    >
      <div
        ref={imageParallaxRef}
        data-hero-parallax
        data-speed="0.78"
        className="absolute inset-0"
      >
        <div
          ref={imageRef}
          className="absolute inset-0 opacity-0 will-change-transform"
        >
          <Image
            src="/hero_girl_2.webp"
            alt="chica con casco de seguridad"
            fill
            priority
            sizes="(max-width: 768px) 68vw, 62vw"
            className="origin-bottom-right object-contain object-bottom-right scale-[1.12]"
            aria-hidden
          />
        </div>
      </div>
      {callout ? (
        <div
          ref={calloutParallaxRef}
          data-hero-parallax
          data-speed="1.22"
          className="absolute top-1/2 right-0 z-[1] hidden sm:block"
        >
          <div
            ref={calloutRef}
            className="flex items-center bg-gold pr-20 opacity-0 will-change-transform"
          >
            <p className="px-4 py-3.5 font-serif text-[16px] leading-snug text-navy md:text-[18px] lg:text-[20px]">
              {callout}
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export function HeroMobileCallout({ callout }: { callout: string }) {
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      el.style.opacity = "1";
      el.style.transform = "none";
      return;
    }

    let alive = true;
    let ctx: { revert: () => void } | undefined;

    (async () => {
      const { gsap } = await import("gsap");
      if (!alive) return;

      ctx = gsap.context(() => {
        gsap.fromTo(
          el,
          { x: 28, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.85,
            delay: 0.35,
            ease: "power2.out",
          },
        );
      }, ref);
    })();

    return () => {
      alive = false;
      ctx?.revert();
    };
  }, []);

  return (
    <p
      ref={ref}
      className="mt-5 w-fit max-w-[18rem] bg-gold px-3.5 py-2.5 font-serif text-[15px] leading-snug text-pretty text-navy opacity-0 will-change-transform sm:hidden"
    >
      {callout}
    </p>
  );
}
