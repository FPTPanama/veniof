import Link from "next/link";
import type { Section as SectionData } from "@/content/types";
import { getTeam, pagePath, type Locale } from "@/content";
import { ButtonLink } from "../ButtonLink";
import {
  SectionEyebrow,
  SectionShell,
  sectionColors,
  titleSizeClass,
} from "../section-ui";

type Props = {
  section: SectionData;
  locale: Locale;
};

export function HomeLeadershipSection({ section, locale }: Props) {
  const variant = section.variant ?? "light";
  const colors = sectionColors(variant);
  const team = getTeam(locale);
  const teamLink = section.links?.[0];

  return (
    <SectionShell variant={variant}>
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between md:gap-8">
        <div className="min-w-0">
          {section.eyebrow ? (
            <SectionEyebrow colorClass={colors.eyebrow}>
              {section.eyebrow}
            </SectionEyebrow>
          ) : null}
          {section.title ? (
            <h2
              className={`text-balance font-serif font-normal ${titleSizeClass("h2")} ${colors.title}`}
            >
              {section.title}
            </h2>
          ) : null}
        </div>

        {teamLink ? (
          <ButtonLink
            href={pagePath(locale, teamLink.href)}
            variant="text"
            className="!text-ink shrink-0 self-start md:self-auto"
          >
            {teamLink.label}
          </ButtonLink>
        ) : null}
      </div>

      {team.length ? (
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          {team.map((member) => (
            <Link
              key={member.slug}
              href={`${pagePath(locale, "team")}#${member.slug}`}
              className="group border-t border-ink pt-5 transition"
            >
              <div className="font-serif text-[23px] text-ink group-hover:text-gold-dark">
                {member.name}
              </div>
              <div className="mt-1.5 text-[15px] leading-[1.45] text-[#556276]">
                {member.role}
              </div>
            </Link>
          ))}
        </div>
      ) : null}
    </SectionShell>
  );
}
