import { getPartner, type Locale } from "@/content";
import { PartnerHeroSection } from "./PartnerHeroSection";
import { PartnerAudiencesSection } from "./PartnerAudiencesSection";
import { PartnerStartSection } from "./PartnerStartSection";

type Props = {
  locale: Locale;
};

export function PartnerPage({ locale }: Props) {
  const { hero, audiences, start } = getPartner(locale);

  return (
    <>
      <PartnerHeroSection
        eyebrow={hero.eyebrow}
        title={hero.title}
        body={hero.body}
      />
      <PartnerAudiencesSection audiences={audiences} locale={locale} />
      <PartnerStartSection
        title={start.title}
        body={start.body}
        email={start.email}
      />
    </>
  );
}
