"use client";

import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import type { Section as SectionData } from "@/content/types";
import type { Locale } from "@/content";
import {
  SectionActions,
  SectionEyebrow,
  SectionShell,
  sectionColors,
  titleSizeClass,
} from "../section-ui";

type Props = {
  section: SectionData;
  locale: Locale;
};

/** Left intro (5) + numbered 2×2 feature grid (7). */
export function HomeThesisSection({ section, locale }: Props) {
  const variant = section.variant ?? "navy";
  const colors = sectionColors(variant);
  const paragraphs = section.paragraphs ?? [];
  const cards = section.cards ?? [];
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const items = root.querySelectorAll<HTMLElement>("[data-thesis-reveal]");
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
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      if (!alive) return;

      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        gsap.fromTo(
          items,
          { y: 36, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.85,
            ease: "power2.out",
            stagger: 0.1,
            scrollTrigger: {
              trigger: root,
              start: "top 72%",
              end: "bottom top",
              toggleActions: "play reverse play reverse",
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
    <SectionShell variant={variant}>
      <div
        ref={rootRef}
        className="grid grid-cols-1 items-start gap-12 md:grid-cols-12 md:gap-8"
      >
        <div className="md:col-span-5">
          {section.eyebrow ? (
            <div data-thesis-reveal className="opacity-0 will-change-transform">
              <SectionEyebrow colorClass={colors.eyebrow}>
                {section.eyebrow}
              </SectionEyebrow>
            </div>
          ) : null}
          {section.title ? (
            <h2
              data-thesis-reveal
              className={`text-balance font-serif font-normal opacity-0 will-change-transform ${titleSizeClass("h2")} ${colors.title}`}
            >
              {section.title}
            </h2>
          ) : null}
          {paragraphs.length ? (
            <div className="mt-7 space-y-6">
              {paragraphs[0] ? (
                <p
                  data-thesis-reveal
                  className={`text-pretty font-serif text-[18px] leading-[1.6] opacity-0 will-change-transform md:text-[19px] ${colors.body}`}
                >
                  {paragraphs[0]}
                </p>
              ) : null}
              {paragraphs[1] ? (
                <blockquote
                  data-thesis-reveal
                  className="opacity-0 will-change-transform"
                >
                  <p
                    className={`border-l-2 border-gold pl-4 font-serif text-[18px] leading-[1.55] italic md:text-[19px] ${colors.body}`}
                  >
                    “{paragraphs[1]}”
                  </p>
                  {section.callout ? (
                    <footer
                      className={`mt-3 pl-4 text-[13px] font-semibold tracking-[0.04em] uppercase ${colors.eyebrow}`}
                    >
                      — {section.callout}
                    </footer>
                  ) : null}
                </blockquote>
              ) : null}
            </div>
          ) : null}
          <div data-thesis-reveal className="opacity-0 will-change-transform">
            <SectionActions
              locale={locale}
              isDark={colors.isDark}
              ctas={section.ctas}
              links={section.links}
              linkVariant="navy"
              linkClassName="hero-cta !justify-between !border-2 !px-8"
              linkEndIcon={
                <ArrowRight aria-hidden className="h-4 w-4 shrink-0" />
              }
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-0 sm:grid-cols-2 md:col-span-7">
          {cards.map((card, index) => {
            const topRow = index < 2;
            return (
              <article
                key={card.title}
                data-thesis-reveal
                className={`py-7 opacity-0 will-change-transform ${topRow ? `border-b ${colors.itemRule}` : "pt-8"} ${
                  index % 2 === 0 ? "sm:pr-8" : "sm:pl-8"
                }`}
              >
                <div className="font-serif text-[18px] text-ink">
                  {index + 1}
                </div>
                <h3
                  className={`mt-3 font-serif text-[22px] leading-snug ${colors.itemTitle}`}
                >
                  {card.title}
                </h3>
                {card.body ? (
                  <p
                    className={`mt-3 text-[15.5px] leading-[1.6] ${colors.itemBody}`}
                  >
                    {card.body}
                  </p>
                ) : null}
              </article>
            );
          })}
        </div>
      </div>
    </SectionShell>
  );
}
