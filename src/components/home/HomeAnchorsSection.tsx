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

/** Intro + two adjacent bullet panels (US / Venezuela). */
export function HomeAnchorsSection({ section, locale }: Props) {
  const variant = section.variant ?? "muted";
  const colors = sectionColors(variant);
  const paragraphs = section.paragraphs ?? [];
  const cards = section.cards ?? [];

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

      <SectionActions
        locale={locale}
        isDark={colors.isDark}
        ctas={section.ctas}
        links={section.links}
      />

      {cards.length === 2 ? (
        <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16 border-t border-line pt-8">
          {cards.map((card) => (
            <article
              key={card.title}
              className="border-t border-line pt-8 text-ink"
            >
              <h3 className="font-serif text-[24px] text-ink md:text-[28px]">
                {card.title}
              </h3>
              {card.bullets?.length ? (
                <ul className="mt-6 space-y-3.5 text-slate">
                  {card.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex gap-3 text-[15px] leading-[1.55]"
                    >
                      <span
                        className="mt-[0.55em] h-px w-3 shrink-0 bg-navy"
                        aria-hidden
                      />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </div>
      ) : null}
    </SectionShell>
  );
}
