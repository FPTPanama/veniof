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
import { HeroGirlBackdrop } from "./HeroGirlBackdrop";
import { HeroMobileVisual } from "./HeroMobileVisual";
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
      className="flex h-[calc(100dvh-var(--site-header-height,6.5rem))] flex-col !py-5 sm:block sm:h-auto sm:min-h-[calc(100dvh-var(--site-header-height,6.5rem))] sm:!py-20 md:!py-24"
      contentClassName="flex min-h-0 flex-1 flex-col sm:block"
      backdrop={
        <>
          {SHOW_HERO_GEAR ? <HeroGear placement="desktop" /> : null}
          <HeroGirlBackdrop callout={section.callout} />
        </>
      }
    >
      <div className="shrink-0 sm:contents">
        {section.eyebrow ? (
          <SectionEyebrow
            colorClass={colors.eyebrow}
            className="!mb-2 w-full max-w-none sm:!mb-7"
          >
            {section.eyebrow}
          </SectionEyebrow>
        ) : null}

        <HeroTextIntro>
          {section.title ? (
            <TitleTag
              data-hero-intro
              className={`relative z-10 w-full max-w-none font-serif font-normal opacity-0 will-change-transform sm:max-w-[50vw] ${titleSizeClass(section.titleAs)} !leading-[0.98] ${colors.title}`}
            >
              {section.title.split("\n").map((line, index, lines) => (
                <span key={line}>
                  {line}
                  {index < lines.length - 1 ? (
                    <>
                      <span className="sm:hidden"> </span>
                      <br className="hidden sm:block" />
                    </>
                  ) : null}
                </span>
              ))}
            </TitleTag>
          ) : null}

          {section.subtitle ? (
            <p
              data-hero-intro
              className={`relative z-10 mt-1.5 w-full max-w-none font-serif text-[20px] leading-[1.3] opacity-0 will-change-transform sm:mt-2 sm:max-w-205 sm:text-balance sm:text-[32px] sm:leading-[1.35] md:text-[40px] ${colors.title}`}
            >
              {section.subtitle}
            </p>
          ) : null}

          {section.paragraphs?.length ? (
            <div
              data-hero-intro
              className="relative z-10 mt-3 w-full max-w-none space-y-5 opacity-0 will-change-transform sm:mt-7 sm:max-w-180"
            >
              {section.paragraphs.map((p) => (
                <p
                  key={p.slice(0, 40)}
                  className={`w-full max-w-none text-pretty font-serif text-[15px] leading-[1.45] sm:text-[18px] sm:leading-[1.6] md:text-[19px] ${colors.title}`}
                >
                  {withEmphasis(p)}
                </p>
              ))}
            </div>
          ) : null}
        </HeroTextIntro>
      </div>

      <HeroMobileVisual showGear={SHOW_HERO_GEAR} />

      <div className="relative z-20 -mx-5 -mt-10 shrink-0 bg-surface px-5 pt-4 sm:mx-0 sm:mt-0 sm:bg-transparent sm:px-0 sm:pt-0 sm:contents">
        <SectionActions
          locale={locale}
          isDark={colors.isDark}
          ctas={section.ctas}
          links={section.links}
          className="relative z-10 mt-0 w-full flex-col items-stretch gap-2.5 sm:mt-10 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:gap-7"
          ctaClassName="w-full sm:w-auto"
          linkClassName="w-full sm:w-auto"
          ctaStartIcon={<CirclePlus aria-hidden className="h-4 w-4 shrink-0" />}
          ctaEndIcon={<ArrowRight aria-hidden className="h-4 w-4 shrink-0" />}
          linkVariant="navy"
          linkEndIcon={<ArrowRight aria-hidden className="h-4 w-4 shrink-0" />}
        />
      </div>
    </SectionShell>
  );
}
