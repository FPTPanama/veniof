"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-navy-line bg-navy/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-6 py-5 md:gap-8 md:px-14 md:py-[26px]">
        <Link
          href={pagePath(locale, "home")}
          className="flex min-h-11 min-w-0 items-center gap-3 md:gap-4"
          aria-label={site.brandFull}
          onClick={() => setOpen(false)}
        >
          {/* Mobile: VIOF + title stacked */}
          <span className="flex flex-col gap-1.5 md:hidden">
            <span className="font-serif text-[26px] leading-none tracking-[0.16em] text-cream">
              {site.brand}
            </span>
            <span className="text-[11px] leading-[1.35] tracking-[0.03em] text-muted">
              Venezuela Infrastructure
              <br />
              Opportunity Fund
            </span>
          </span>

          {/* Desktop: VIOF | title side by side */}
          <span className="hidden items-center gap-4 md:flex">
            <span className="font-serif text-[28px] leading-none tracking-[0.16em] text-cream">
              {site.brand}
            </span>
            <span className="h-[30px] w-px bg-gold" aria-hidden />
            <span className="max-w-[200px] text-[11.5px] leading-[1.35] tracking-[0.03em] text-muted">
              Venezuela Infrastructure
              <br />
              Opportunity Fund
            </span>
          </span>
        </Link>

        <nav
          className="hidden items-center gap-1 md:flex"
          aria-label="Primary"
        >
          {site.nav.map((item) => {
            const isActive = item.key === active;
            return (
              <Link
                key={item.key}
                href={pagePath(locale, item.key)}
                className={`inline-flex min-h-11 items-center px-3 text-[15px] transition ${
                  isActive
                    ? "font-semibold text-cream shadow-[inset_0_-2px_0_#CFB27A]"
                    : "font-medium text-muted hover:text-cream"
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
                      ? "text-gold-light shadow-[inset_0_-2px_0_#CFB27A]"
                      : "text-muted hover:text-cream"
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
            className="inline-flex h-11 w-11 items-center justify-center text-cream md:hidden"
            aria-expanded={open}
            aria-controls={panelId}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Cerrar" : "Menú"}</span>
            <span className="relative block h-3.5 w-5" aria-hidden>
              <span
                className={`absolute left-0 block h-px w-full bg-cream transition ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 block h-px w-full bg-cream transition ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 block h-px w-full bg-cream transition ${
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
        className={`border-t border-navy-line md:hidden ${
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
                  ? "font-semibold text-cream shadow-[inset_3px_0_0_#CFB27A] bg-white/5"
                  : "font-medium text-muted hover:bg-white/5 hover:text-cream"
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
