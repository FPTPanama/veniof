import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PrivacyPage } from "@/components/PrivacyPage";
import { getPage, isLocale, locales, type Locale } from "@/content";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/privacy">): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const page = getPage(raw, "privacy");
  return pageMetadata(raw, "privacy", page.metaTitle, page.metaDescription);
}

export default async function PrivacyRoute({
  params,
}: PageProps<"/[locale]/privacy">) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;

  return <PrivacyPage locale={locale} />;
}
