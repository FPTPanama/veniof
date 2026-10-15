"use client";

import { usePathname } from "next/navigation";
import { SiteHeader } from "@/components/SiteHeader";
import { isLocale, type Locale, type PageKey } from "@/content";

const PAGE_KEYS: PageKey[] = [
  "home",
  "strategy",
  "projects",
  "team",
  "partner",
  "contact",
  "privacy",
];

function activeFromPath(pathname: string): PageKey {
  const segment = pathname.split("/").filter(Boolean)[1];
  if (segment && PAGE_KEYS.includes(segment as PageKey)) {
    return segment as PageKey;
  }
  return "home";
}

export function StickySiteHeader() {
  const pathname = usePathname() || "/en";
  const rawLocale = pathname.split("/").filter(Boolean)[0] ?? "en";
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "en";

  return <SiteHeader locale={locale} active={activeFromPath(pathname)} />;
}
