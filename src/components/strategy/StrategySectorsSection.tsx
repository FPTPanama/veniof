"use client";

import { useEffect, useRef } from "react";
import type { Section as SectionData } from "@/content/types";
import {
  SectionEyebrow,
  sectionColors,
  titleSizeClass,
  variantClass,
} from "../section-ui";
import { WhoWeAreSlides } from "../home/WhoWeAreSlides";

type Props = {
  section: SectionData;
};

/**
 * "El método por sector" — centered title + pinned slides with large numbers.
 */
export function StrategySectorsSection({ section }: Props) {
  const headerRef = useRef<HTMLDivElement>(null);
  const variant = section.variant ?? "muted";
  const colors = sectionColors(variant);
  const titleSize = titleSizeClass(section.titleAs ?? "h2");
  const cards = section.cards ?? [];

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const items = header.querySelectorAll<HTMLElement>(
      "[data-sectors-reveal]",
    );
    if (!items.length) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
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
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      if (!alive) return;

      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        gsap.fromTo(
          items,
          { y: 28, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.85,
            ease: "power2.out",
            stagger: 0.1,
            scrollTrigger: {
              trigger: header,
              start: "top 78%",
              end: "bottom top",
              toggleActions: "play reverse play reverse",
            },
          },
        );
      }, header);

      ScrollTrigger.refresh();
    })();

    return () => {
      alive = false;
      ctx?.revert();
    };
  }, []);

  if (!cards.length) return null;

  return (
    <section
      className={`${variantClass[variant]} overflow-x-clip px-5 py-14 sm:px-6 sm:py-20 md:px-14 md:py-24`}
    >
      <div
        ref={headerRef}
        className="mx-auto flex w-full max-w-[1200px] flex-col items-center text-center"
      >
        {section.eyebrow ? (
          <div
            data-sectors-reveal
            className="opacity-0 will-change-transform"
          >
            <SectionEyebrow
              colorClass={colors.eyebrow}
              className="justify-center"
            >
              {section.eyebrow}
            </SectionEyebrow>
          </div>
        ) : null}
        {section.title ? (
          <h2
            data-sectors-reveal
            className={`w-full max-w-[36rem] text-balance font-serif font-normal opacity-0 will-change-transform ${titleSize} ${colors.title}`}
          >
            {section.title.split("\n").map((line, index, lines) => (
              <span key={`${line}-${index}`}>
                {line}
                {index < lines.length - 1 ? <br /> : null}
              </span>
            ))}
          </h2>
        ) : null}
      </div>

      <WhoWeAreSlides cards={cards} tone="ink" />
    </section>
  );
}
