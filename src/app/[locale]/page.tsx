import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageSections } from "@/components/PageSections";
import { getPage, isLocale, type Locale } from "@/content";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]">): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const page = getPage(raw, "home");
  return pageMetadata(raw, "home", page.metaTitle, page.metaDescription);
}

export default async function HomePage({ params }: PageProps<"/[locale]">) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;

  return <PageSections locale={locale} pageKey="home" />;
}
