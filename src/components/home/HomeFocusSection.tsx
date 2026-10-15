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

/**
 * "Where we focus" — title/paragraph split + navy project banner.
 * Edit layout here without affecting other home sections.
 */
export function HomeFocusSection({ section, locale }: Props) {
  const variant = section.variant ?? "light";
  const colors = sectionColors(variant);
  const paragraphs = section.paragraphs ?? [];
  const card = section.cards?.[0];
  const cta = section.ctas?.[0];

  return (
    <SectionShell variant={variant}>
      {section.eyebrow ? (
        <SectionEyebrow colorClass={colors.eyebrow}>
          {section.eyebrow}
        </SectionEyebrow>
      ) : null}

      <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-12 md:gap-8">
        <h2
          className={`text-balance font-serif font-normal ${titleSizeClass("h2")} ${colors.title} md:col-span-5`}
        >
          {section.title}
        </h2>
        <div className="space-y-5 md:col-span-7">
          {paragraphs.map((p) => (
            <p
              key={p.slice(0, 40)}
              className={`text-pretty font-serif text-[18px] leading-[1.6] md:text-[19px] ${colors.body}`}
            >
              {p}
            </p>
          ))}
        </div>
      </div>

      {card ? (
        <div className="mt-14 border-t border-line pt-10 md:mt-[88px]">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-8">
              <h3 className="text-balance font-serif text-[26px] font-normal leading-[1.25] text-ink md:text-[30px]">
                {card.title}
              </h3>
              {card.body ? (
                <p className="mt-[18px] max-w-[640px] text-pretty text-[16.5px] leading-[1.6] text-slate">
                  {card.body}
                </p>
              ) : null}
            </div>

            {cta ? (
              <div className="md:col-span-4 md:flex md:justify-end">
                <ButtonLink
                  href={pagePath(locale, cta.href)}
                  className="min-h-[52px] px-7"
                >
                  {cta.label}
                </ButtonLink>
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </SectionShell>
  );
}
