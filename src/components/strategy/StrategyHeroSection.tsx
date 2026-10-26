"use client";

import { ArrowRight, CirclePlus } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import type { Section as SectionData } from "@/content/types";
import type { Locale } from "@/content";
import { HeroGear } from "../home/HeroGear";
import { SectionActions } from "../section-ui";

type Props = {
  section: SectionData;
  locale: Locale;
};

const WORKER_IMAGE = "/obrero_dorado.webp";

/**
 * Strategy page hero — fills the first screen; HeroGear is clipped
 * inside this viewport so it never bleeds into the next section.
 */
export function StrategyHeroSection({ section, locale }: Props) {
  const rootRef = useRef<HTMLElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);
  const body = section.paragraphs?.[0];

  useEffect(() => {
    const root = rootRef.current;
    const parallax = parallaxRef.current;
    if (!root || !parallax) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduce) return;

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
        const smoother = ScrollSmoother.get();
        if (smoother) {
          smoother.effects(parallax, { speed: 0.7 });
        } else {
          gsap.fromTo(
            parallax,
            { yPercent: -10 },
            {
              yPercent: 10,
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
      }, root);

      ScrollTrigger.refresh();
    })();

    return () => {
      alive = false;
      ctx?.revert();
    };
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative h-[calc(100dvh-var(--site-header-height,6.5rem))] min-h-105 w-full overflow-hidden px-5 md:px-0"
    >
      <div className="relative mx-auto h-full w-full max-w-300 overflow-hidden ">
        <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
          <div className="relative h-[80%] w-[min(88%,640px)] sm:w-[min(72%,700px)] md:w-[min(62%,760px)]">
            <div
              ref={parallaxRef}
              data-speed="0.7"
              className="absolute inset-0 will-change-transform border-b-2 border-gold"
            >
              <Image
                src={WORKER_IMAGE}
                alt=""
                fill
                priority
                sizes="(max-width: 640px) 88vw, 760px"
                className="object-contain object-center"
              />
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-0 z-2 flex flex-col items-stretch justify-center overflow-hidden">
          {section.title ? (
            <h1 className="relative z-1 self-center text-center text-[40px] leading-[0.98] tracking-[-0.015em] font-serif font-light text-navy sm:text-[80px] md:text-[140px]">
              {section.title.split("\n").map((line, index, lines) => (
                <span key={`${line}-${index}`}>
                  {line}
                  {index < lines.length - 1 ? <br /> : null}
                </span>
              ))}
            </h1>
          ) : null}

          {body ? (
            <div className="relative z-1 mt-5 w-full max-w-136 self-start sm:mt-6 bg-surface p-4 border-b-2 border-gold">
              <p className="text-left font-serif text-[17px] leading-[1.55] text-navy sm:text-[18px] md:text-[19px]">
                {body}
              </p>
            </div>
          ) : null}

          <div className="pointer-events-auto relative z-1 mt-8 w-full max-w-136 self-start sm:mt-10">
            <SectionActions
              locale={locale}
              isDark={false}
              ctas={section.ctas}
              links={section.links}
              className="flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-7"
              ctaClassName="w-full sm:w-auto"
              linkClassName="w-full sm:w-auto"
              ctaStartIcon={
                <CirclePlus aria-hidden className="h-4 w-4 shrink-0" />
              }
              ctaEndIcon={
                <ArrowRight aria-hidden className="h-4 w-4 shrink-0" />
              }
              linkVariant="navy"
              linkEndIcon={
                <ArrowRight aria-hidden className="h-4 w-4 shrink-0" />
              }
            />
          </div>

          <HeroGear
            tone="surface"
            className="absolute top-1/2 left-1/2 z-0 aspect-square w-[min(780px,85vw)] -translate-x-1/2 -translate-y-[10%]"
          />
        </div>
      </div>
    </section>
  );
}
