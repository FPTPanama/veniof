"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import type { Section as SectionData } from "@/content/types";

type Props = {
  section: SectionData;
};

function withEmphasis(text: string) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, index) => {
    if (!part.startsWith("**")) return part;
    return <strong key={index}>{part.slice(2, -2)}</strong>;
  });
}

/** Full-bleed image band — same overlay language as the who-we-are slides. */
export function HomeImageBreak({ section }: Props) {
  const rootRef = useRef<HTMLElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);
  const image = section.image ?? "/mineral.webp";
  const body = section.paragraphs?.[0];

  useEffect(() => {
    const root = rootRef.current;
    const parallax = parallaxRef.current;
    if (!root) return;

    const items = root.querySelectorAll<HTMLElement>("[data-break-reveal]");
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
      const [{ gsap }, { ScrollTrigger }, { ScrollSmoother }] =
        await Promise.all([
          import("gsap"),
          import("gsap/ScrollTrigger"),
          import("gsap/ScrollSmoother"),
        ]);
      if (!alive) return;

      gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

      ctx = gsap.context(() => {
        if (items.length) {
          gsap.fromTo(
            items,
            { y: 28, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.85,
              ease: "power2.out",
              stagger: 0.12,
              scrollTrigger: {
                trigger: root,
                start: "top 70%",
                end: "bottom top",
                toggleActions: "play reverse play reverse",
              },
            },
          );
        }

        if (parallax) {
          const smoother = ScrollSmoother.get();
          if (smoother) {
            smoother.effects(parallax, { speed: 0.72 });
          } else {
            gsap.fromTo(
              parallax,
              { yPercent: -12 },
              {
                yPercent: 12,
                ease: "none",
                scrollTrigger: {
                  trigger: root,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: true,
                },
              },
            );
          }
        }
      }, root);

      ScrollTrigger.refresh();
    })();

    return () => {
      alive = false;
      ctx?.revert();
    };
  }, []);

  if (!section.title && !body) return null;

  return (
    <section ref={rootRef} className="relative w-full overflow-hidden">
      <div className="relative mx-auto h-[min(72vh,560px)] min-h-[320px] w-full max-w-[1200px] overflow-hidden sm:h-[min(68vh,600px)]">
        <div
          ref={parallaxRef}
          data-break-parallax
          data-speed="0.72"
          className="absolute inset-x-0 -top-[22%] h-[144%] scale-[1.12] will-change-transform"
        >
          <Image
            src={image}
            alt=""
            fill
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="object-cover object-center"
            priority={false}
          />
        </div>
        <div
          aria-hidden
          className="absolute inset-0 z-[1] bg-gradient-to-r from-navy via-navy/55 to-transparent"
        />

        <div className="absolute inset-0 z-10 flex items-center">
          <div className="w-full px-5 py-12 sm:px-8 sm:py-14 md:px-12 md:py-16">
            <article className="max-w-md sm:max-w-lg">
              {section.title ? (
                <h2
                  data-break-reveal
                  className="font-serif text-[26px] leading-[1.1] tracking-[-0.02em] text-surface opacity-0 will-change-transform sm:text-[30px] md:text-[34px]"
                >
                  {section.title}
                </h2>
              ) : null}
              {body ? (
                <p
                  data-break-reveal
                  className="mt-3 max-w-md font-serif text-[17px] leading-[1.55] text-surface/90 opacity-0 will-change-transform sm:max-w-lg md:text-[18px] [&_strong]:text-surface"
                >
                  {withEmphasis(body)}
                </p>
              ) : null}
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
