"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import type { Section as SectionData } from "@/content/types";
import { pagePath, type Locale } from "@/content";
import { ButtonLink } from "../ButtonLink";

const sectorCtaLabel = {
  en: "Explore",
  es: "Explorar",
} as const;

type Props = {
  section: SectionData;
  locale: Locale;
};

/**
 * "Where we focus" — navy band with lineas zoom-out; 3-sector grid below.
 */
export function HomeFocusSection({ section, locale }: Props) {
  const rootRef = useRef<HTMLElement>(null);
  const linesRef = useRef<HTMLDivElement>(null);
  const cards = section.cards ?? [];
  const sectors = cards.slice(0, 3);
  const project = cards[3];
  const cta = section.ctas?.[0];
  const sectorsLead = section.paragraphs?.[0];
  const projectsHref = pagePath(locale, "projects");

  useEffect(() => {
    const root = rootRef.current;
    const lines = linesRef.current;
    if (!root) return;

    const items = root.querySelectorAll<HTMLElement>("[data-focus-reveal]");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce) {
      items.forEach((el) => {
        el.style.opacity = "1";
        el.style.transform = "none";
      });
      if (lines) lines.style.transform = "translate(-50%, -50%) scale(1)";
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

        if (lines) {
          gsap.fromTo(
            lines,
            { scale: 1 },
            {
              scale: 3,
              ease: "none",
              scrollTrigger: {
                trigger: root,
                start: "top bottom",
                end: "bottom top",
                scrub: 0.6,
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
      className="relative mt-10 w-full overflow-hidden sm:mt-14 md:mt-16"
    >
      <div className="relative mx-auto w-full max-w-[1200px] overflow-hidden bg-navy">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
        >
          <div
            ref={linesRef}
            className="absolute top-1/2 left-1/2 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 will-change-transform"
          >
            <Image
              src="/lineas_04.svg"
              alt=""
              fill
              sizes="1200px"
              className="object-cover object-center"
            />
          </div>
        </div>

        <div className="relative z-10 px-5 py-12 sm:px-8 sm:py-14 md:px-12 md:py-16">
          <div
            data-focus-reveal
            className="mx-auto mt-6 flex w-full max-w-[560px] flex-col items-center text-center opacity-0 will-change-transform sm:mt-8 sm:max-w-[640px] md:mt-10 md:max-w-[720px]"
          >
            {section.eyebrow ? (
              <div className="mb-1.5 flex items-center justify-center gap-3.5">
                <span className="h-px w-9 shrink-0 bg-surface" aria-hidden />
                <span className="bg-navy px-[0.2em] text-[15px] font-semibold text-surface">
                  {section.eyebrow}
                </span>
              </div>
            ) : null}

            {section.title ? (
              <h2 className="text-balance font-serif font-normal text-[28px] leading-[1.05] tracking-[-0.02em] text-surface sm:text-[36px] md:text-[48px]">
                <span className="inline-block bg-navy px-[0.12em] py-[0.06em]">
                  {section.title}
                </span>
              </h2>
            ) : null}
          </div>

          {sectors.length === 3 ? (
            <div className="mt-10 sm:mt-12 md:mt-14">
              {sectorsLead ? (
                <p
                  data-focus-reveal
                  className="mb-8 max-w-3xl text-balance font-serif text-[22px] leading-[1.25] text-surface opacity-0 will-change-transform sm:mb-10 sm:text-[26px] md:text-[30px]"
                >
                  <span className="inline-block bg-navy px-[0.12em] py-[0.06em]">
                    {sectorsLead}
                  </span>
                </p>
              ) : null}

              <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
                {sectors.map((sector, index) => (
                  <article
                    key={sector.title}
                    data-focus-reveal
                    className="flex flex-col bg-navy p-5 opacity-0 will-change-transform sm:p-6 md:p-7"
                  >
                    <div className="font-serif text-[18px] text-surface">
                      {index + 1}
                    </div>
                    <h3 className="mt-3 font-serif text-[26px] leading-snug text-surface sm:text-[28px] md:text-[30px]">
                      {sector.title}
                    </h3>
                    {sector.body ? (
                      <p className="mt-3 flex-1 text-[15.5px] leading-[1.6] text-surface/85">
                        {sector.body}
                      </p>
                    ) : null}
                    <ButtonLink
                      href={projectsHref}
                      className="hero-cta mt-7 !inline-flex min-h-11 w-full cursor-pointer !justify-between !border-2 !border-surface !bg-navy !px-6 !text-surface hover:!bg-navy/90 hover:!brightness-100"
                    >
                      <span>{sectorCtaLabel[locale]}</span>
                      <ArrowRight aria-hidden className="h-4 w-4 shrink-0" />
                    </ButtonLink>
                  </article>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>

      {project ? (
        <div className="mx-auto mt-10 w-full max-w-[1200px] border-t border-line px-5 pt-10 sm:mt-12 sm:px-8 md:mt-14 md:px-12">
          <div
            data-focus-reveal
            className="grid grid-cols-1 items-end gap-6 opacity-0 will-change-transform md:grid-cols-12 md:gap-8"
          >
            <div className="md:col-span-8">
              <h3 className="text-balance font-serif text-[22px] font-normal leading-[1.25] text-ink md:text-[26px]">
                {project.title}
              </h3>
              {project.body ? (
                <p className="mt-3 max-w-[640px] text-pretty text-[15.5px] leading-[1.6] text-slate">
                  {project.body}
                </p>
              ) : null}
            </div>

            {cta ? (
              <div className="md:col-span-4 md:flex md:justify-end">
                <ButtonLink
                  href={pagePath(locale, cta.href)}
                  className="hero-cta min-h-[52px] cursor-pointer !justify-between !border-2 !border-navy !bg-transparent !px-8 !text-navy"
                >
                  <span>{cta.label}</span>
                  <ArrowRight aria-hidden className="h-4 w-4 shrink-0" />
                </ButtonLink>
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </section>
  );
}
