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

/** Text split: title (5) / first paragraphs (7), remaining full-width below. */
export function HomeWhoWeAreSection({ section, locale }: Props) {
  const variant = section.variant ?? "light";
  const colors = sectionColors(variant);
  const paragraphs = section.paragraphs ?? [];
  const sideParagraphs = paragraphs.slice(0, 2);
  const restParagraphs = paragraphs.slice(2);

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
          {sideParagraphs.map((p) => (
            <p
              key={p.slice(0, 40)}
              className={`text-pretty font-serif text-[18px] leading-[1.6] md:text-[19px] ${colors.body}`}
            >
              {p}
            </p>
          ))}
        </div>
      </div>

      {restParagraphs.length ? (
        <div className="mt-8 space-y-5">
          {restParagraphs.map((p) => (
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
    </SectionShell>
  );
}
