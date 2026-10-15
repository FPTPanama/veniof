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

export function HomePartnersSection({ section, locale }: Props) {
  const variant = section.variant ?? "muted";
  const colors = sectionColors(variant);
  const cards = section.cards ?? [];

  return (
    <SectionShell variant={variant}>
      {section.eyebrow ? (
        <SectionEyebrow colorClass={colors.eyebrow}>
          {section.eyebrow}
        </SectionEyebrow>
      ) : null}

      {section.title ? (
        <h2
          className={`max-w-[1020px] text-balance font-serif font-normal ${titleSizeClass("h2")} ${colors.title}`}
        >
          {section.title}
        </h2>
      ) : null}

      <SectionActions
        locale={locale}
        isDark={colors.isDark}
        ctas={section.ctas}
        links={section.links}
      />

      {cards.length ? (
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {cards.map((card) => (
            <article
              key={card.title}
              className="border-t border-line pt-8"
            >
              <h3 className={`font-serif text-[20px] ${colors.cardTitle}`}>
                {card.title}
              </h3>
              {card.body ? (
                <p
                  className={`mt-3 text-[15.5px] leading-[1.6] ${colors.cardBody}`}
                >
                  {card.body}
                </p>
              ) : null}
            </article>
          ))}
        </div>
      ) : null}
    </SectionShell>
  );
}
