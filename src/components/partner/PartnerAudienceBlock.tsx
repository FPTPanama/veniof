import type { PartnerAudience } from "@/content";
import { pagePath, type Locale } from "@/content";
import { ButtonLink } from "../ButtonLink";

type Props = {
  audience: PartnerAudience;
  locale: Locale;
  bordered?: boolean;
};

export function PartnerAudienceBlock({
  audience,
  locale,
  bordered = false,
}: Props) {
  return (
    <article
      id={audience.id}
      className={`scroll-mt-28 ${
        bordered ? "border-t border-line py-16" : "pb-16"
      }`}
    >
      <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-5">
          <h2 className="text-balance font-serif text-[30px] font-normal leading-[1.2] text-ink md:text-[34px]">
            {audience.title}
          </h2>
          <p className="mt-5 text-pretty text-[16.5px] leading-[1.65] text-slate">
            {audience.body}
          </p>
        </div>

        <div className="md:col-span-6 md:col-start-7">
          <div className="text-[14.5px] font-semibold text-ink">
            {audience.expectLabel}
          </div>
          <ul className="mt-5 space-y-3.5">
            {audience.bullets.map((bullet) => (
              <li
                key={bullet}
                className="flex gap-3 text-[15.5px] leading-[1.55] text-slate"
              >
                <span
                  className="mt-[0.55em] h-px w-3 shrink-0 bg-navy"
                  aria-hidden
                />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <ButtonLink
              href={pagePath(locale, audience.ctaHref)}
              className="min-h-[52px] px-7 text-[16px]"
            >
              {audience.ctaLabel}
            </ButtonLink>
          </div>

          {audience.disclaimer || audience.counselNote ? (
            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-4">
              {audience.disclaimer ? (
                <p className="max-w-[420px] text-[13.5px] leading-[1.5] text-slate">
                  {audience.disclaimer}
                </p>
              ) : null}
              {audience.counselNote ? (
                <span className="inline-block text-[11px] font-semibold tracking-[0.02em] text-slate">
                  {audience.counselNote}
                </span>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </article>
  );
}
