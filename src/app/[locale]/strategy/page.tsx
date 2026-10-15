import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageSections } from "@/components/PageSections";
import { getPage, isLocale, locales, type Locale } from "@/content";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/strategy">): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const page = getPage(raw, "strategy");
  return pageMetadata(raw, "strategy", page.metaTitle, page.metaDescription);
}

export default async function StrategyPage({
  params,
}: PageProps<"/[locale]/strategy">) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;

  return <PageSections locale={locale} pageKey="strategy" />;
}
