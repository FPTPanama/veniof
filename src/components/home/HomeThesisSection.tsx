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

  return (
    <SectionShell variant={variant}>
      <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-5">
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
          {paragraphs.length ? (
            <div className="mt-7 space-y-5">
              {paragraphs.map((p) => (
                <p
                  key={p.slice(0, 40)}
                  className={`text-pretty font-serif text-[18px] leading-[1.6] md:text-[19px] ${colors.body}`}
                >
                  {p}
                </p>
              ))}
            </div>
          ) : null}
          <SectionActions
            locale={locale}
            isDark={colors.isDark}
            ctas={section.ctas}
            links={section.links}
          />
        </div>

        <div className="grid grid-cols-1 gap-0 sm:grid-cols-2 md:col-span-7">
          {cards.map((card, index) => {
            const topRow = index < 2;
            return (
              <article
                key={card.title}
                className={`py-7 ${topRow ? `border-b ${colors.itemRule}` : "pt-8"} ${
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
