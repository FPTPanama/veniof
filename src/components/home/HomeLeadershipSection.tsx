"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import type { Section as SectionData } from "@/content/types";
import { getTeam, pagePath, type Locale } from "@/content";
import { ButtonLink } from "../ButtonLink";
import {
  SectionEyebrow,
  SectionShell,
  sectionColors,
  titleSizeClass,
} from "../section-ui";

type Props = {
  section: SectionData;
  locale: Locale;
};

export function HomeLeadershipSection({ section, locale }: Props) {
  const variant = section.variant ?? "light";
  const colors = sectionColors(variant);
  const team = getTeam(locale);
  const teamLink = section.links?.[0];
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const cards = grid.querySelectorAll<HTMLElement>("[data-team-card]");
    if (!cards.length) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      grid
        .querySelectorAll<HTMLElement>(
          "[data-team-photo], [data-team-tag], [data-team-name]",
        )
        .forEach((el) => {
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
        cards.forEach((card) => {
          const panel = card.querySelector<HTMLElement>("[data-gold-panel]");
          const photo = card.querySelector<HTMLElement>("[data-team-photo]");
          const tag = card.querySelector<HTMLElement>("[data-team-tag]");
          const name = card.querySelector<HTMLElement>("[data-team-name]");

          if (panel) {
            gsap.fromTo(
              panel,
              { yPercent: 28 },
              {
                yPercent: 0,
                ease: "none",
                scrollTrigger: {
                  trigger: card,
                  start: "top 70%",
                  end: "top 25%",
                  scrub: true,
                },
              },
            );
          }

          const tl = gsap.timeline({
            defaults: { ease: "power2.out" },
            scrollTrigger: {
              trigger: card,
              start: "top 58%",
              end: "bottom top",
              toggleActions: "play reverse play reverse",
            },
          });

          if (photo) {
            tl.fromTo(
              photo,
              { opacity: 0 },
              { opacity: 1, duration: 0.85 },
              0,
            );
          }
          if (tag) {
            tl.fromTo(
              tag,
              { x: -28, opacity: 0 },
              { x: 0, opacity: 1, duration: 0.65 },
              0.2,
            );
          }
          if (name) {
            tl.fromTo(
              name,
              { y: 22, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.7 },
              0.35,
            );
          }
        });
      }, grid);

      ScrollTrigger.refresh();
    })();

    return () => {
      alive = false;
      ctx?.revert();
    };
  }, [team.length]);

  return (
    <SectionShell variant={variant}>
      <div className="grid grid-cols-1 items-end gap-8 md:grid-cols-2 md:gap-x-12 lg:gap-x-16">
        <div className="min-w-0">
          {section.eyebrow ? (
            <SectionEyebrow colorClass={colors.eyebrow}>
              {section.eyebrow}
            </SectionEyebrow>
          ) : null}
          {section.title ? (
            <h2
              className={`text-balance font-serif font-normal ${titleSizeClass("h2")} ${colors.title}`}
            >
              {section.title}
            </h2>
          ) : null}
        </div>

        {teamLink ? (
          <div className="md:justify-self-end">
            <ButtonLink
              href={pagePath(locale, teamLink.href)}
              variant="navy"
              className="w-full sm:w-auto"
            >
              <span>{teamLink.label}</span>
              <ArrowRight aria-hidden className="h-4 w-4 shrink-0" />
            </ButtonLink>
          </div>
        ) : null}
      </div>

      {team.length ? (
        <div
          ref={gridRef}
          className="mt-12 flex flex-col gap-6 sm:mt-14 md:flex-row md:items-stretch md:gap-5 lg:gap-6"
        >
          {team.map((member) => {
            const perfilSrc = member.imagePerfilSrc ?? member.imageSrc;
            const frontSrc = member.imageFrontSrc ?? member.imageSrc;
            const canHoverSwap = Boolean(
              member.imagePerfilSrc &&
                member.imageFrontSrc &&
                member.imagePerfilSrc !== member.imageFrontSrc,
            );
            const summary = member.paragraphs[0];

            return (
              <Link
                key={member.slug}
                data-team-card
                href={`${pagePath(locale, "team")}#${member.slug}`}
                className="group flex min-w-0 flex-1 basis-0 flex-col transition-[flex-grow] duration-300 ease-out md:hover:flex-[1.2]"
              >
                <div className="relative aspect-[2/3] overflow-hidden bg-surface">
                  <div
                    data-gold-panel
                    aria-hidden
                    className="absolute inset-x-0 bottom-0 z-0 h-1/2 bg-gold will-change-transform transition-[height] duration-300 ease-out group-hover:h-[65%]"
                  />

                  <span
                    data-team-tag
                    className="absolute bottom-[20%] left-3 z-10 bg-surface px-2.5 py-1 text-[12px] font-semibold tracking-wide text-navy opacity-0 will-change-transform sm:left-4"
                  >
                    {member.role}
                  </span>

                  <div
                    data-team-photo
                    className="absolute inset-0 z-[1] opacity-0"
                  >
                    {perfilSrc ? (
                      <Image
                        src={perfilSrc}
                        alt={member.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
                        className={`object-contain object-bottom ${
                          canHoverSwap ? "group-hover:opacity-0" : ""
                        }`}
                      />
                    ) : null}

                    {canHoverSwap && frontSrc ? (
                      <Image
                        src={frontSrc}
                        alt=""
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
                        className="object-contain object-bottom opacity-0 group-hover:opacity-100"
                      />
                    ) : null}
                  </div>
                </div>

                <div className="pt-4 sm:pt-5">
                  <h3
                    data-team-name
                    className="font-serif text-[26px] leading-snug text-ink opacity-0 will-change-transform sm:text-[28px]"
                  >
                    {member.name}
                  </h3>
                  {summary ? (
                    <p className="mt-2 line-clamp-3 text-[14.5px] leading-[1.55] text-slate">
                      {summary}
                    </p>
                  ) : null}
                </div>
              </Link>
            );
          })}
        </div>
      ) : null}
    </SectionShell>
  );
}
