import { ArrowRight, CirclePlus } from "lucide-react";
import { getSite, pagePath, type Locale } from "@/content";
import { ButtonLink } from "./ButtonLink";

type Props = {
  locale: Locale;
};

export function CtaBanner({ locale }: Props) {
  const { ctaBanner } = getSite(locale);

  return (
    <section className="bg-surface px-6 py-24 md:px-14">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-7 flex items-center gap-3.5">
          <span className="h-px w-9 bg-gold" aria-hidden />
          <span className="text-[15px] font-semibold text-ink">
            {ctaBanner.eyebrow}
          </span>
        </div>
        <h2 className="max-w-[900px] text-balance font-serif text-[36px] font-normal leading-[1.15] tracking-[-0.01em] text-ink md:text-[42px]">
          {ctaBanner.title}
        </h2>
        <p className="mt-6 max-w-[720px] text-pretty font-serif text-[18px] leading-[1.6] text-muted">
          {ctaBanner.body}
        </p>
        <div className="mt-10">
          <ButtonLink href={pagePath(locale, "contact")}>
            <span className="inline-flex items-center gap-2.5">
              <CirclePlus aria-hidden className="h-4 w-4 shrink-0" />
              {ctaBanner.button}
            </span>
            <ArrowRight aria-hidden className="h-4 w-4 shrink-0" />
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
