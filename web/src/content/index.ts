import type { Locale, PageContent, PageKey, SiteCopy, TeamMember, PartnerCopy, PartnerAudience } from "./types";
import { site as siteEn } from "./en/site";
import { site as siteEs } from "./es/site";
import { page as homeEn } from "./en/home";
import { page as strategyEn } from "./en/strategy";
import { page as projectsEn } from "./en/projects";
import { page as teamEn } from "./en/team";
import { page as partnerEn, partner as partnerCopyEn } from "./en/partner";
import { page as contactEn } from "./en/contact";
import { page as homeEs } from "./es/home";
import { page as strategyEs } from "./es/strategy";
import { page as projectsEs } from "./es/projects";
import { page as teamEs } from "./es/team";
import { page as partnerEs, partner as partnerCopyEs } from "./es/partner";
import { page as contactEs } from "./es/contact";
import { team as teamMembersEn } from "./en/teamMembers";
import { team as teamMembersEs } from "./es/teamMembers";

export type { Locale, PageKey, PageContent, SiteCopy, TeamMember, PartnerCopy, PartnerAudience };

const pages: Record<Locale, Record<PageKey, PageContent>> = {
  en: {
    home: homeEn,
    strategy: strategyEn,
    projects: projectsEn,
    team: teamEn,
    partner: partnerEn,
    contact: contactEn,
  },
  es: {
    home: homeEs,
    strategy: strategyEs,
    projects: projectsEs,
    team: teamEs,
    partner: partnerEs,
    contact: contactEs,
  },
};

const sites: Record<Locale, SiteCopy> = { en: siteEn, es: siteEs };
const teams: Record<Locale, TeamMember[]> = {
  en: teamMembersEn,
  es: teamMembersEs,
};

export const locales: Locale[] = ["en", "es"];
export const defaultLocale: Locale = "en";

export function isLocale(value: string): value is Locale {
  return value === "en" || value === "es";
}

export function getSite(locale: Locale): SiteCopy {
  return sites[locale];
}

export function getPage(locale: Locale, key: PageKey): PageContent {
  return pages[locale][key];
}

export function getTeam(locale: Locale): TeamMember[] {
  return teams[locale];
}

const partners: Record<Locale, PartnerCopy> = {
  en: partnerCopyEn,
  es: partnerCopyEs,
};

export function getPartner(locale: Locale): PartnerCopy {
  return partners[locale];
}

export function pagePath(locale: Locale, key: PageKey): string {
  if (key === "home") return `/${locale}`;
  return `/${locale}/${key}`;
}
