import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";
import { getSite, pagePath, type Locale } from "@/content";

type Props = {
  locale: Locale;
};

export function SiteFooter({ locale }: Props) {
  const site = getSite(locale);
  const { footer } = site;

  return (
    <footer className="bg-surface">
      <div className="mx-auto grid max-w-[1200px] gap-10 border-t-2 border-navy px-6 py-14 sm:grid-cols-2 md:px-14 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <Link
            href={pagePath(locale, "home")}
            className="inline-flex items-center gap-3 md:gap-4"
            aria-label={site.brandFull}
          >
            <BrandMark size={44} className="shrink-0" />
            <span className="font-serif text-[28px] leading-none tracking-[0.16em] text-ink">
              {site.brand}
            </span>
            <span className="hidden h-[30px] w-px bg-gold sm:block" aria-hidden />
            <span className="hidden text-[11.5px] leading-[1.35] tracking-[0.03em] text-muted sm:block">
              Venezuela Infrastructure
              <br />
              Opportunity Fund
            </span>
          </Link>
          <p className="mt-6 max-w-sm text-[14px] leading-[1.6] text-navy/75">
            {footer.blurb}
          </p>
        </div>

        <div>
          <div className="text-[14px] font-bold text-navy">
            {footer.firmTitle}
          </div>
          <ul className="mt-4 space-y-2.5">
            {footer.firmLinks.map((item) => (
              <li key={item.label}>
                <Link
                  href={pagePath(locale, item.href)}
                  className="text-[14px] text-navy/80 hover:text-navy"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-[14px] font-bold text-navy">
            {footer.workTitle}
          </div>
          <ul className="mt-4 space-y-2.5">
            {footer.workLinks.map((item) => (
              <li key={item.label}>
                <Link
                  href={pagePath(locale, item.href)}
                  className="text-[14px] text-navy/80 hover:text-navy"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-[14px] font-bold text-navy">
            {footer.officesTitle}
          </div>
          <div className="mt-4 space-y-5">
            {footer.offices.map((office) => (
              <div key={office.country}>
                <div className="text-[14px] font-bold text-navy">
                  {office.country}
                </div>
                <div className="mt-1 text-[13.5px] leading-[1.5] text-navy/75">
                  {office.address}
                </div>
              </div>
            ))}
            <a
              href={`mailto:${footer.email}`}
              className="inline-block text-[14px] font-semibold text-navy underline decoration-gold underline-offset-4 hover:text-gold"
            >
              {footer.email}
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1200px] border-t-2 border-navy px-6 pt-8 pb-14 md:px-14 md:pb-16">
        <p className="max-w-[980px] text-[12.5px] leading-[1.65] text-navy/70">
          {footer.legal}{" "}
          {/* <span className="text-gold-light/90">{footer.legalNote}</span> */}
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 text-[13px] text-navy">
          <span className="font-semibold">{footer.rights}</span>
          <div className="flex gap-6">
            <Link
              href={`${pagePath(locale, "privacy")}#privacy`}
              className="font-semibold hover:text-gold"
            >
              {footer.privacy}
            </Link>
            <Link
              href={`${pagePath(locale, "privacy")}#terms`}
              className="font-semibold hover:text-gold"
            >
              {footer.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
