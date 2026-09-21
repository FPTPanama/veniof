import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageSections } from "@/components/PageSections";
import { getPage, isLocale, locales, type Locale } from "@/content";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/partner">): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const page = getPage(raw, "partner");
  return {
    title: page.metaTitle,
    description: page.metaDescription,
  };
}

export default async function PartnerPage({
  params,
}: PageProps<"/[locale]/partner">) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;

  return <PageSections locale={locale} pageKey="partner" />;
}
