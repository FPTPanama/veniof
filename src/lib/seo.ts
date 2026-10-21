import type { Metadata } from "next";
import { pagePath, type Locale, type PageKey } from "@/content";

const SITE = "https://veniof.com";

export function pageAlternates(locale: Locale, key: PageKey): Metadata["alternates"] {
  const en = pagePath("en", key);
  const es = pagePath("es", key);
  return {
    canonical: `${SITE}${pagePath(locale, key)}`,
    languages: {
      en: `${SITE}${en}`,
      es: `${SITE}${es}`,
      "x-default": `${SITE}${en}`,
    },
  };
}

export function pageMetadata(
  locale: Locale,
  key: PageKey,
  title: string,
  description: string,
): Metadata {
  return {
    title,
    description,
    alternates: pageAlternates(locale, key),
    openGraph: {
      title,
      description,
      url: `${SITE}${pagePath(locale, key)}`,
      locale: locale === "es" ? "es_ES" : "en_US",
      images: [{ url: "/share.png", width: 1200, height: 630 }],
    },
  };
}
