import { getPage, type Locale } from "@/content";
import { CtaBanner } from "../CtaBanner";
import { HomeHeroSection } from "./HomeHeroSection";
import { HomeWhoWeAreSection } from "./HomeWhoWeAreSection";
import { HomeAnchorsSection } from "./HomeAnchorsSection";
import { HomeThesisSection } from "./HomeThesisSection";
import { HomeImageBreak } from "./HomeImageBreak";
import { HomeProjectsTeaser } from "./HomeProjectsTeaser";
import { HomeFocusSection } from "./HomeFocusSection";
import { HomePartnersSection } from "./HomePartnersSection";
import { HomeLeadershipSection } from "./HomeLeadershipSection";

type Props = {
  locale: Locale;
};

/**
 * Home composition — each block is an independent component.
 * Content lives in content/{locale}/home.ts; layout lives here.
 *
 * Mobile responsive pass: only one section visible at a time.
 * Uncomment the next block when the current one is done.
 */
export function HomePage({ locale }: Props) {
  const { sections } = getPage(locale, "home");

  return (
    <>
      {/* 1 — Hero */}
      <HomeHeroSection section={sections[0]} locale={locale} />

      {/* 2 — Quiénes somos */}
      <HomeWhoWeAreSection section={sections[1]} locale={locale} />

      {/* 3 — Dos anclajes
      <HomeAnchorsSection section={sections[2]} locale={locale} />
      */}

      {/* 4 — Tesis
      <HomeThesisSection section={sections[3]} locale={locale} />
      */}

      {/* 5 — Image break
      <HomeImageBreak section={sections[4]} />
      */}

      {/* 6 — Proyectos teaser
      <HomeProjectsTeaser section={sections[5]} locale={locale} />
      */}

      {/* 7 — Foco / sectores
      <HomeFocusSection section={sections[5]} locale={locale} />
      */}

      {/* 8 — Aliados
      <HomePartnersSection section={sections[6]} locale={locale} />
      */}

      {/* 9 — Liderazgo / team
      <HomeLeadershipSection section={sections[7]} locale={locale} />
      */}

      {/* 10 — CTA banner
      <CtaBanner locale={locale} />
      */}
    </>
  );
}
