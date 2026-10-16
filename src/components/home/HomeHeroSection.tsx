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
import { HeroGirlBackdrop, HeroMobileCallout } from "./HeroGirlBackdrop";
import { HeroTextIntro } from "./HeroTextIntro";

/** Toggle to show the scroll-linked gear (kept behind the hero image). */
const SHOW_HERO_GEAR = true;

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
      className="min-h-[calc(100dvh-var(--site-header-height,6.5rem))]"
      backdrop={
        <>
          {SHOW_HERO_GEAR ? <HeroGear /> : null}
          <HeroGirlBackdrop callout={section.callout} />
        </>
      }
    >
      {section.eyebrow ? (
        <SectionEyebrow colorClass={colors.eyebrow}>
          {section.eyebrow}
        </SectionEyebrow>
      ) : null}

      <HeroTextIntro>
        {section.title ? (
          <TitleTag
            data-hero-intro
            className={`w-full max-w-none font-serif font-normal opacity-0 will-change-transform sm:max-w-[50vw] ${titleSizeClass(section.titleAs)} !leading-[0.98] ${colors.title}`}
          >
            {section.title.split("\n").map((line, index, lines) => (
              <span key={line}>
                {line}
                {index < lines.length - 1 ? <br /> : null}
              </span>
            ))}
          </TitleTag>
        ) : null}

        {section.subtitle ? (
          <p
            data-hero-intro
            className={`mt-2 max-w-205 text-balance font-serif text-[26px] leading-[1.35] opacity-0 will-change-transform sm:text-[32px] md:text-[40px] ${colors.title}`}
          >
            {section.subtitle}
          </p>
        ) : null}

        {section.callout ? (
          <HeroMobileCallout callout={section.callout} />
        ) : null}

        {section.paragraphs?.length ? (
          <div
            data-hero-intro
            className="mt-7 max-w-180 space-y-5 opacity-0 will-change-transform"
          >
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
      </HeroTextIntro>

      <SectionActions
        locale={locale}
        isDark={colors.isDark}
        ctas={section.ctas}
        links={section.links}
        ctaStartIcon={<CirclePlus aria-hidden className="h-4 w-4 shrink-0" />}
        ctaEndIcon={<ArrowRight aria-hidden className="h-4 w-4 shrink-0" />}
        linkVariant="navy"
        linkEndIcon={<ArrowRight aria-hidden className="h-4 w-4 shrink-0" />}
      />
    </SectionShell>
  );
}
