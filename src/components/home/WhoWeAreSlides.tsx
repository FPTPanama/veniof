"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import type { ContentCard } from "@/content/types";

type Props = {
  cards: ContentCard[];
  /** Optional shared background override for every slide. */
  backgroundSrc?: string;
};

function withEmphasis(text: string) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, index) => {
    if (!part.startsWith("**")) return part;
    return <strong key={index}>{part.slice(2, -2)}</strong>;
  });
}

const DEFAULT_BACKGROUND = "/mineral.webp";

/**
 * Pinned capability slides: scrub through cards with snap (rubber-band settle).
 */
export function WhoWeAreSlides({ cards, backgroundSrc }: Props) {
  const rootRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const linesRef = useRef<HTMLDivElement>(null);
  const progressFillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const panel = panelRef.current;
    const lines = linesRef.current;
    const progressFill = progressFillRef.current;
    if (!root || !panel || !lines || !progressFill || cards.length < 2) return;

    const mediaSlides = Array.from(
      panel.querySelectorAll<HTMLElement>("[data-capability-media]"),
    );
    const copySlides = Array.from(
      panel.querySelectorAll<HTMLElement>("[data-capability-copy]"),
    );
    if (mediaSlides.length < 2 || copySlides.length < 2) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      showOnlyFirst([...mediaSlides, ...copySlides], mediaSlides.length);
      progressFill.style.transform = "scaleX(1)";
      return;
    }

    let alive = true;
    let ctx: { revert: () => void } | undefined;

    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      if (!alive) return;

      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        gsap.set([mediaSlides[0], copySlides[0]], { autoAlpha: 1, y: 0 });
        gsap.set(mediaSlides.slice(1), { autoAlpha: 0 });
        gsap.set(copySlides.slice(1), { autoAlpha: 0, y: 56 });
        gsap.set(progressFill, { scaleX: 0, transformOrigin: "left center" });

        const scrollLength = () =>
          Math.round(window.innerHeight * (cards.length - 0.15));

        const stConfig = {
          trigger: panel,
          start: "center center",
          end: () => `+=${scrollLength()}`,
          scrub: 0.9,
        } as const;

        const tl = gsap.timeline({
          defaults: { ease: "power1.inOut" },
          scrollTrigger: {
            ...stConfig,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            snap: {
              snapTo: (value) => {
                const steps = cards.length - 1;
                return Math.round(value * steps) / steps;
              },
              duration: { min: 0.35, max: 0.85 },
              delay: 0.06,
              ease: "elastic.out(1, 0.82)",
            },
          },
        });

        gsap.fromTo(
          lines,
          { rotate: -40 },
          {
            rotate: 110,
            ease: "none",
            scrollTrigger: { ...stConfig },
          },
        );

        gsap.to(progressFill, {
          scaleX: 1,
          ease: "none",
          scrollTrigger: { ...stConfig },
        });

        for (let i = 0; i < cards.length - 1; i += 1) {
          tl.to(mediaSlides[i], { autoAlpha: 0, duration: 1 }, i);
          tl.to(mediaSlides[i + 1], { autoAlpha: 1, duration: 1 }, i);
          tl.to(copySlides[i], { autoAlpha: 0, y: -40, duration: 1 }, i);
          tl.to(copySlides[i + 1], { autoAlpha: 1, y: 0, duration: 1 }, i);
        }
      }, root);

      ScrollTrigger.refresh();
    })();

    return () => {
      alive = false;
      ctx?.revert();
    };
  }, [cards.length]);

  if (!cards.length) return null;

  return (
    <div
      ref={rootRef}
      className="relative mx-auto mt-14 w-full max-w-[1200px] sm:mt-16"
    >
      <div
        ref={panelRef}
        className="relative h-[calc(100dvh-2.75*var(--site-header-height,6.5rem))] min-h-[280px] w-full overflow-hidden"
      >
        {cards.map((card, index) => {
          const imageSrc =
            backgroundSrc ?? card.image ?? DEFAULT_BACKGROUND;

          return (
            <div
              key={`media-${card.title}`}
              data-capability-media
              className="absolute inset-0"
              style={{ zIndex: index + 1 }}
            >
              <Image
                src={imageSrc}
                alt=""
                fill
                priority={index === 0}
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-cover object-center"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-r from-navy via-navy/55 to-transparent"
              />
            </div>
          );
        })}

        <div className="pointer-events-none absolute inset-y-0 right-0 z-[5] w-1/3 overflow-hidden">
          <div
            ref={linesRef}
            aria-hidden
            className="absolute top-1/2 left-1/2 h-[220%] w-[220%] -translate-x-1/2 -translate-y-1/2 will-change-transform"
          >
            <Image
              src="/lineas_surface.svg"
              alt=""
              fill
              sizes="40vw"
              className="object-cover object-center"
            />
          </div>
        </div>

        {cards.map((card, index) => (
          <div
            key={`copy-${card.title}`}
            data-capability-copy
            className="absolute inset-0 z-10 flex items-center"
          >
            <div className="relative z-10 w-full px-5 py-12 sm:px-8 sm:py-14 md:px-12 md:py-16">
              <article className="max-w-md">
                <h3 className="font-serif text-[26px] leading-[1.1] tracking-[-0.02em] text-surface sm:text-[30px] md:text-[34px]">
                  {card.title}
                </h3>
                {card.body ? (
                  <p className="mt-3 max-w-md font-serif text-[17px] leading-[1.55] text-surface/90 sm:max-w-lg md:text-[18px] [&_strong]:text-surface">
                    {withEmphasis(card.body)}
                  </p>
                ) : null}
              </article>
            </div>

            <span
              aria-hidden
              className="pointer-events-none absolute top-1/2 right-20 z-20 -translate-y-1/2 translate-x-[10%] select-none font-dm text-[clamp(7rem,42vh,22rem)] leading-none font-normal italic tracking-[-0.06em] text-surface shadow-none drop-shadow-none [text-shadow:none] sm:translate-x-[8%]"
            >
              {index + 1}
            </span>
          </div>
        ))}

        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-30 px-5 pb-5 sm:px-8 sm:pb-6 md:px-12 md:pb-7"
          aria-hidden
        >
          <div className="relative h-[2px] w-full bg-surface/25">
            <div
              ref={progressFillRef}
              className="absolute inset-y-0 left-0 w-full origin-left scale-x-0 bg-surface will-change-transform"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function showOnlyFirst(nodes: HTMLElement[], mediaCount: number) {
  nodes.forEach((node, index) => {
    const isFirstMedia = index === 0;
    const isFirstCopy = index === mediaCount;
    const show = isFirstMedia || isFirstCopy;
    node.style.opacity = show ? "1" : "0";
    node.style.visibility = show ? "visible" : "hidden";
  });
}
