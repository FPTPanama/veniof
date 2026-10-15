import { ArrowRight, CirclePlus } from "lucide-react";
import type { Section as SectionData } from "@/content/types";
import type { Locale } from "@/content";
import {
  SectionActions,
  SectionEyebrow,
  SectionShell,
  sectionColors,
  titleSizeClass,
} from "../section-ui";
import { HeroGear } from "./HeroGear";

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

export function HomeHeroSection({ section, locale }: Props) {
  const variant = section.variant ?? "navy";
  const colors = sectionColors(variant);
  const TitleTag = section.titleAs === "h1" ? "h1" : "h2";

  return (
    <SectionShell
      variant={variant}
      className="overflow-hidden min-h-[calc(100dvh-var(--site-header-height,6.5rem))]"
      backdrop={<HeroGear />}
    >
      {section.eyebrow ? (
        <SectionEyebrow colorClass={colors.eyebrow}>
          {section.eyebrow}
        </SectionEyebrow>
      ) : null}

      {section.title ? (
        <TitleTag
          className={`max-w-255 text-balance font-serif font-normal ${titleSizeClass(section.titleAs)} ${colors.title}`}
        >
          {section.title}
        </TitleTag>
      ) : null}

      {section.subtitle ? (
        <p
          className={`mt-2 max-w-205 text-balance font-serif text-[26px] leading-[1.35] sm:text-[32px] md:text-[40px] ${colors.title}`}
        >
          {section.subtitle}
        </p>
      ) : null}

      {section.paragraphs?.length ? (
        <div className="mt-7 max-w-180 space-y-5">
          {section.paragraphs.map((p) => (
            <p
              key={p.slice(0, 40)}
              className={`text-pretty font-serif text-[18px] leading-[1.6] md:text-[19px] ${colors.title}`}
            >
              {withEmphasis(p)}
            </p>
          ))}
        </div>
      ) : null}

      <SectionActions
        locale={locale}
        isDark={colors.isDark}
        ctas={section.ctas}
        links={section.links}
        ctaClassName="hero-cta !justify-between !px-8"
        ctaStartIcon={<CirclePlus aria-hidden className="h-4 w-4 shrink-0" />}
        ctaEndIcon={<ArrowRight aria-hidden className="h-4 w-4 shrink-0" />}
        linkVariant="navy"
        linkClassName="hero-cta !justify-between !border-2 !px-8"
        linkEndIcon={<ArrowRight aria-hidden className="h-4 w-4 shrink-0" />}
      />
    </SectionShell>
  );
}
