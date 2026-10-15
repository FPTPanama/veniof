import type { Section as SectionData } from "@/content/types";
import type { Locale } from "@/content";
import { BridgeGraphic } from "../BridgeGraphic";
import {
  SectionActions,
  SectionEyebrow,
  SectionShell,
  sectionColors,
  titleSizeClass,
} from "../section-ui";

const centerTagline = {
  en: ["One firm.", "Two anchors."],
  es: ["Una firma.", "Dos anclajes."],
} as const;

type Props = {
  section: SectionData;
  locale: Locale;
};

function withEmphasis(text: string) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, index) => {
    if (!part.startsWith("**")) return part;
    return <strong key={index}>{part.slice(2, -2)}</strong>;
  });
}

/** Intro + two adjacent bullet panels (US / Venezuela). */
export function HomeAnchorsSection({ section, locale }: Props) {
  const variant = section.variant ?? "muted";
  const colors = sectionColors(variant);
  const paragraphs = section.paragraphs ?? [];
  const cards = section.cards ?? [];

  return (
    <SectionShell variant={variant}>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-x-12 md:gap-y-10 lg:gap-x-16">
        <div className="md:col-start-1 md:row-start-1">
          {section.eyebrow ? (
            <SectionEyebrow colorClass={colors.eyebrow}>
              {section.eyebrow}
            </SectionEyebrow>
          ) : null}
          <h2
            className={`text-balance font-serif font-normal ${titleSizeClass("h2")} ${colors.title}`}
          >
            {section.title}
          </h2>
        </div>

        <div className="space-y-5 md:col-start-2 md:row-start-2">
          {paragraphs.map((p) => (
            <p
              key={p.slice(0, 40)}
              className={`text-pretty font-serif text-[18px] leading-[1.6] md:text-[19px] [&_strong]:font-semibold ${colors.body}`}
            >
              {withEmphasis(p)}
            </p>
          ))}
        </div>
      </div>

      <BridgeGraphic locale={locale} />

      {cards.length === 2 ? (
        <div className="mt-10 grid grid-cols-1 items-start gap-10 md:mt-8 md:grid-cols-3 md:gap-8">
          <article className="text-ink md:col-start-1">
            {cards[0]?.bullets?.length ? (
              <ul className="space-y-4 text-slate">
                {cards[0].bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="text-[17px] leading-[1.55] md:text-[18px]"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
            ) : null}
          </article>

          <p className="text-center font-serif text-[28px] font-medium italic leading-[1.2] text-navy sm:text-[32px] md:col-start-2 md:text-[36px] lg:text-[40px]">
            {centerTagline[locale].map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>

          <article className="text-ink md:col-start-3 md:text-right">
            {cards[1]?.bullets?.length ? (
              <ul className="space-y-4 text-slate">
                {cards[1].bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="text-[17px] leading-[1.55] md:text-[18px]"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
            ) : null}
          </article>
        </div>
      ) : null}

      <SectionActions
        locale={locale}
        isDark={colors.isDark}
        ctas={section.ctas}
        links={section.links}
      />
    </SectionShell>
  );
}
