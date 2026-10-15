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

type Props = {
  section: SectionData;
  locale: Locale;
};

export function HomeHeroSection({ section, locale }: Props) {
  const variant = section.variant ?? "navy";
  const colors = sectionColors(variant);
  const TitleTag = section.titleAs === "h1" ? "h1" : "h2";

  return (
    <SectionShell variant={variant}>
      {section.eyebrow ? (
        <SectionEyebrow colorClass={colors.eyebrow}>
          {section.eyebrow}
        </SectionEyebrow>
      ) : null}

      {section.title ? (
        <TitleTag
          className={`max-w-[1020px] text-balance font-serif font-normal ${titleSizeClass(section.titleAs)} ${colors.title}`}
        >
          {section.title}
        </TitleTag>
      ) : null}

      {section.paragraphs?.length ? (
        <div className="mt-7 max-w-[720px] space-y-5">
          {section.paragraphs.map((p) => (
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

      <BridgeGraphic locale={locale} />
    </SectionShell>
  );
}
