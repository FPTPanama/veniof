import type { PartnerAudience } from "@/content";
import type { Locale } from "@/content";
import { SectionShell } from "../section-ui";
import { PartnerAudienceBlock } from "./PartnerAudienceBlock";

type Props = {
  audiences: PartnerAudience[];
  locale: Locale;
};

export function PartnerAudiencesSection({ audiences, locale }: Props) {
  return (
    <SectionShell variant="light">
      {audiences.map((audience, index) => (
        <PartnerAudienceBlock
          key={audience.id}
          audience={audience}
          locale={locale}
          bordered={index > 0}
        />
      ))}
    </SectionShell>
  );
}
