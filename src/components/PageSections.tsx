import {
  getPage,
  getTeam,
  type Locale,
  type PageKey,
} from "@/content";
import { Section } from "./Section";
import { CtaBanner } from "./CtaBanner";
import { TeamMemberCard } from "./TeamMemberCard";
import { HomePage } from "./home";
import { PartnerPage } from "./partner";

type Props = {
  locale: Locale;
  pageKey: PageKey;
};

export function PageSections({ locale, pageKey }: Props) {
  if (pageKey === "home") {
    return <HomePage locale={locale} />;
  }

  if (pageKey === "partner") {
    return <PartnerPage locale={locale} />;
  }

  const page = getPage(locale, pageKey);
  const team = pageKey === "team" ? getTeam(locale) : [];

  return (
    <>
      {page.sections.map((section, index) => (
        <div key={`${section.title}-${index}`}>
          <Section section={section} locale={locale} />
          {pageKey === "team" && index === 0 && team.length > 0 ? (
            <section className="bg-surface px-6 md:px-14">
              <div className="mx-auto max-w-[1200px]">
                {team.map((member) => (
                  <TeamMemberCard key={member.slug} member={member} />
                ))}
              </div>
            </section>
          ) : null}
        </div>
      ))}
      <CtaBanner locale={locale} />
    </>
  );
}
