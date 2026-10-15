"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrandMark } from "@/components/BrandMark";
import { getSite, pagePath, type Locale, type PageKey } from "@/content";

type Props = {
  locale: Locale;
  active: PageKey;
};

export function SiteHeader({ locale, active }: Props) {
  const site = getSite(locale);
  const other: Locale = locale === "en" ? "es" : "en";
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      data-site-header
      className="sticky top-0 z-50 bg-surface"
    >
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 border-b-2 border-navy px-6 py-5 md:gap-8 md:px-0 md:py-[26px]">
        <Link
          href={pagePath(locale, "home")}
          className="flex min-h-11 min-w-0 items-center gap-3 md:gap-4"
          aria-label={site.brandFull}
          onClick={() => setOpen(false)}
        >
          <BrandMark size={50} className="hidden shrink-0" />

          {/* Mobile: VIOF + title stacked */}
          <span className="flex min-w-0 flex-col gap-1.5 md:hidden">
            <span className="font-serif font-medium text-[24px] leading-none tracking-[0.16em] text-ink">
              {site.brand}
            </span>
            <span className="text-[12.5px] font-medium leading-[1.35] tracking-[0.03em] text-ink">
              Venezuela Infrastructure Opportunity Fund
            </span>
          </span>

          {/* Desktop: VIOF | title side by side */}
          <span className="hidden items-center gap-4 md:flex">
            <span className="font-serif font-medium text-[30px] leading-none tracking-[0.16em] text-ink">
              {site.brand}
            </span>
            <span className="h-[30px] w-0.5 bg-gold" aria-hidden />
            <span className="max-w-[230px] text-[14px] font-medium leading-[1.35] tracking-[0.03em] text-ink">
              Venezuela Infrastructure
              <br />
              Opportunity Fund
            </span>
          </span>
        </Link>

        <nav
          className="nav-primary hidden items-center gap-2 md:flex"
          aria-label="Primary"
        >
          {site.nav.map((item) => {
            const isActive = item.key === active;
            return (
              <Link
                key={item.key}
                href={pagePath(locale, item.key)}
                className={`nav-link relative inline-flex min-h-11 items-center px-2.5 text-[12px] font-bold uppercase tracking-[0.08em] text-ink ${
                  isActive ? "nav-link-active" : ""
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <div role="group" aria-label="Language" className="flex items-center">
            {(["en", "es"] as const).map((lang) => {
              const href =
                lang === locale
                  ? pagePath(locale, active)
                  : pagePath(other, active);
              const selected = lang === locale;
              return (
                <Link
                  key={lang}
                  href={href}
                  className={`px-2 py-1.5 text-[12px] font-semibold tracking-wide ${
                    selected
                      ? "text-ink shadow-[inset_0_-2px_0_#C19B61]"
                      : "text-slate hover:text-ink"
                  }`}
                  hrefLang={lang}
                >
                  {site.langSwitch[lang]}
                </Link>
              );
            })}
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center text-ink md:hidden"
            aria-expanded={open}
            aria-controls={panelId}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Cerrar" : "Menú"}</span>
            <span className="relative block h-3.5 w-5" aria-hidden>
              <span
                className={`absolute left-0 block h-px w-full bg-navy transition ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 block h-px w-full bg-navy transition ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 block h-px w-full bg-navy transition ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <nav
        id={panelId}
        aria-label="Mobile"
        className={`md:hidden ${
          open ? "flex flex-col" : "hidden"
        }`}
      >
        {site.nav.map((item) => {
          const isActive = item.key === active;
          return (
            <Link
              key={item.key}
              href={pagePath(locale, item.key)}
              className={`inline-flex min-h-12 items-center px-6 text-[15px] ${
                isActive
                  ? "font-semibold text-ink shadow-[inset_3px_0_0_#C19B61]"
                  : "font-medium text-slate hover:text-ink"
              }`}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
