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

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  return (
    <>
      <header
        data-site-header
        className="sticky top-0 z-50 bg-surface"
      >
        <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-3 border-b-2 border-navy px-5 py-5 md:gap-8 md:px-0 md:py-[26px]">
          <Link
            href={pagePath(locale, "home")}
            className="flex min-h-11 min-w-0 flex-1 items-center gap-3 md:gap-4"
            aria-label={site.brandFull}
            onClick={() => setOpen(false)}
          >
            <BrandMark size={50} className="hidden shrink-0" />

            <span className="flex min-w-0 items-center gap-2.5 md:gap-4">
              <span className="shrink-0 font-logo font-medium text-[24px] leading-none tracking-[0.16em] text-ink md:text-[30px]">
                {site.brand}
              </span>
              <span
                className="h-[22px] w-0.5 shrink-0 bg-gold md:h-[30px]"
                aria-hidden
              />
              <span className="min-w-0 text-[11.5px] font-medium leading-[1.3] tracking-[0.03em] text-ink md:max-w-[230px] md:text-[14px] md:leading-[1.35]">
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
            <Link
              href={pagePath(other, active)}
              className="px-2 py-1.5 text-[12px] font-semibold tracking-wide text-ink shadow-[inset_0_-2px_0_#C19B61]"
              hrefLang={other}
              aria-label={`Switch to ${site.langSwitch[other]}`}
              title={site.langSwitch[other]}
            >
              {site.langSwitch[locale]}
            </Link>

            <button
              type="button"
              className="relative z-[60] inline-flex h-11 w-11 items-center justify-center text-ink md:hidden"
              aria-expanded={open}
              aria-controls={panelId}
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              onClick={() => setOpen((value) => !value)}
            >
              <span className="sr-only">{open ? "Cerrar" : "Menú"}</span>
              <span className="relative block h-3.5 w-5" aria-hidden>
                <span
                  className={`absolute left-0 block h-px w-full bg-navy transition duration-300 ease-in-out ${
                    open ? "top-1.5 rotate-45" : "top-0"
                  }`}
                />
                <span
                  className={`absolute left-0 top-1.5 block h-px w-full bg-navy transition duration-300 ease-in-out ${
                    open ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 block h-px w-full bg-navy transition duration-300 ease-in-out ${
                    open ? "top-1.5 -rotate-45" : "top-3"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      <div
        id={panelId}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile"
        aria-hidden={!open}
        className={`fixed inset-0 z-40 bg-surface/90 md:hidden transition-transform duration-300 ease-in-out ${
          open
            ? "translate-x-0 pointer-events-auto"
            : "translate-x-full pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      >
        <nav
          className="flex h-full flex-col items-end justify-center px-8"
          onClick={(event) => event.stopPropagation()}
        >
          {site.nav.map((item) => {
            const isActive = item.key === active;
            return (
              <Link
                key={item.key}
                href={pagePath(locale, item.key)}
                tabIndex={open ? 0 : -1}
                className={`inline-flex min-h-14 items-center text-right text-[18px] uppercase tracking-[0.08em] ${
                  isActive
                    ? "font-semibold text-ink shadow-[inset_-3px_0_0_#C19B61]"
                    : "font-medium text-ink/80"
                }`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
}
