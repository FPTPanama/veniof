"use client";

import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import type { Section as SectionData } from "@/content/types";
import { pagePath, type Locale } from "@/content";
import { ButtonLink } from "../ButtonLink";
import { SectionEyebrow, titleSizeClass } from "../section-ui";

type Props = {
  section: SectionData;
  locale: Locale;
};

/**
 * Light interstitial — projects in diligence, between image break and focus.
 */
export function HomeProjectsTeaser({ section, locale }: Props) {
  const rootRef = useRef<HTMLElement>(null);
  const project = section.cards?.[3];
  const cta = section.ctas?.[0];

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const items = root.querySelectorAll<HTMLElement>("[data-projects-reveal]");
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
        if (items.length) {
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
                trigger: root,
                start: "top 70%",
                end: "bottom top",
                toggleActions: "play reverse play reverse",
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

  if (!project) return null;

  return (
    <section
      ref={rootRef}
      className="relative w-full overflow-hidden"
    >
      <div className="mx-auto w-full max-w-[1200px] px-5 py-16 sm:px-8 sm:py-20 md:px-12 md:py-24">
        <div
          data-projects-reveal
          className="grid grid-cols-1 gap-8 opacity-0 will-change-transform md:grid-cols-2 md:gap-x-12 lg:gap-x-16"
        >
          <div>
            {project.eyebrow ? (
              <SectionEyebrow colorClass="text-ink">
                {project.eyebrow}
              </SectionEyebrow>
            ) : null}
            <h2
              className={`text-balance font-serif font-normal text-ink ${titleSizeClass("h2")}`}
            >
              {project.title}
            </h2>
            {project.subtitle ? (
              <p
                className={`mt-3 text-balance font-serif font-normal text-slate ${titleSizeClass("h2")}`}
              >
                {project.subtitle}
              </p>
            ) : null}
          </div>

          <div className="space-y-6">
            {project.body ? (
              <p className="text-pretty font-serif text-[18px] leading-[1.6] text-slate md:text-[19px]">
                {project.body}
              </p>
            ) : null}
            {cta ? (
              <ButtonLink href={pagePath(locale, cta.href)} variant="navy">
                <span>{cta.label}</span>
                <ArrowRight aria-hidden className="h-4 w-4 shrink-0" />
              </ButtonLink>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
