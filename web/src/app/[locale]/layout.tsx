import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/SiteFooter";
import { StickySiteHeader } from "@/components/StickySiteHeader";
import { isLocale, locales, type Locale } from "@/content";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;

  return (
    <div lang={locale} className="flex min-h-full flex-col bg-navy">
      <StickySiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter locale={locale} />
    </div>
  );
}
