import { getPage, type Locale } from "@/content";
import { CtaBanner } from "../CtaBanner";
import { HomeHeroSection } from "./HomeHeroSection";
import { HomeWhoWeAreSection } from "./HomeWhoWeAreSection";
import { HomeAnchorsSection } from "./HomeAnchorsSection";
import { HomeThesisSection } from "./HomeThesisSection";
import { HomeImageBreak } from "./HomeImageBreak";
import { HomeFocusSection } from "./HomeFocusSection";
import { HomePartnersSection } from "./HomePartnersSection";
import { HomeLeadershipSection } from "./HomeLeadershipSection";

type Props = {
  locale: Locale;
};

/**
 * Home composition — each block is an independent component.
 * Content lives in content/{locale}/home.ts; layout lives here.
 */
export function HomePage({ locale }: Props) {
  const { sections } = getPage(locale, "home");

  return (
    <>
      <HomeHeroSection section={sections[0]} locale={locale} />
      <HomeWhoWeAreSection section={sections[1]} locale={locale} />
      <HomeAnchorsSection section={sections[2]} locale={locale} />
      <HomeThesisSection section={sections[3]} locale={locale} />
      <HomeImageBreak section={sections[4]} />
      <HomeFocusSection section={sections[5]} locale={locale} />
      <HomePartnersSection section={sections[6]} locale={locale} />
      <HomeLeadershipSection section={sections[7]} locale={locale} />
      <CtaBanner locale={locale} />
    </>
  );
}
