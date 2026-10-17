"use client";

import {
  ArrowRight,
  Briefcase,
  Building2,
  Factory,
  Handshake,
  Landmark,
  Scale,
  Shield,
  Ship,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useRef } from "react";
import type { Section as SectionData } from "@/content/types";
import { pagePath, type Locale } from "@/content";
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

/** Three icons per ally type — investors / public sector / operating partners. */
const partnerIcons: LucideIcon[][] = [
  [Landmark, Briefcase, TrendingUp],
  [Building2, Scale, Shield],
  [Handshake, Factory, Ship],
];

export function HomePartnersSection({ section, locale }: Props) {
  const variant = section.variant ?? "muted";
  const colors = sectionColors(variant);
  const cards = section.cards ?? [];
  const links = section.links ?? [];
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const items = root.querySelectorAll<HTMLElement>("[data-partners-reveal]");
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
      <div ref={rootRef}>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-x-12 lg:gap-x-16">
          <div>
            {section.eyebrow ? (
              <div
                data-partners-reveal
                className="opacity-0 will-change-transform"
              >
                <SectionEyebrow colorClass={colors.eyebrow}>
                  {section.eyebrow}
                </SectionEyebrow>
              </div>
            ) : null}
            {section.title ? (
              <h2
                data-partners-reveal
                className={`text-balance font-serif font-normal opacity-0 will-change-transform ${titleSizeClass("h2")} ${colors.title}`}
              >
                {section.title}
              </h2>
            ) : null}
          </div>
        </div>

        {links.length === 3 ? (
          <div className="mt-12 grid grid-cols-1 gap-8 sm:mt-14 md:mt-16 md:grid-cols-3 md:gap-6">
            {links.map((link, index) => {
              const card = cards[index];

              return (
                <div
                  key={link.label}
                  data-partners-reveal
                  className="flex flex-col gap-6 p-5 opacity-0 will-change-transform sm:p-6 md:p-7"
                >
                  {card ? (
                    <div>
                      <h3
                        className={`font-serif text-[22px] leading-snug sm:text-[24px] md:text-[26px] ${colors.cardTitle}`}
                      >
                        {card.title}
                      </h3>
                      {card.body ? (
                        <p
                          className={`mt-3 text-[15.5px] leading-[1.6] ${colors.cardBody}`}
                        >
                          {card.body}
                        </p>
                      ) : null}
                    </div>
                  ) : null}

                  {partnerIcons[index] ? (
                    <div
                      aria-hidden
                      className="flex items-center gap-5 text-navy"
                    >
                      {partnerIcons[index].map((Icon, iconIndex) => (
                        <Icon
                          key={iconIndex}
                          className="h-6 w-6 shrink-0 stroke-[1.5]"
                        />
                      ))}
                    </div>
                  ) : null}

                  <ButtonLink
                    href={pagePath(locale, link.href)}
                    variant="navy"
                    className="mt-auto w-full"
                  >
                    <span>{link.label}</span>
                    <ArrowRight aria-hidden className="h-4 w-4 shrink-0" />
                  </ButtonLink>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
    </SectionShell>
  );
}
