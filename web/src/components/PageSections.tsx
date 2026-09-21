import {
  getPage,
  getTeam,
  type Locale,
  type PageKey,
} from "@/content";
import { Section } from "./Section";
import { CtaBanner } from "./CtaBanner";
import { TeamMemberCard } from "./TeamMemberCard";

type Props = {
  locale: Locale;
  pageKey: PageKey;
};

export function PageSections({ locale, pageKey }: Props) {
  const page = getPage(locale, pageKey);
  const team = pageKey === "team" ? getTeam(locale) : [];

  return (
    <>
      {page.sections.map((section, index) => (
        <div key={`${section.title}-${index}`}>
          <Section
            section={section}
            locale={locale}
            showBridge={
              pageKey === "home" && index === 0 && section.titleAs === "h1"
            }
          />
          {pageKey === "team" && index === 0 && team.length > 0 ? (
            <section className="bg-surface-2 px-6 md:px-14">
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
