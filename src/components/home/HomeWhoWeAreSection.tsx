import type { Section as SectionData } from "@/content/types";
import type { Locale } from "@/content";
import {
  SectionActions,
  sectionColors,
  variantClass,
} from "../section-ui";
import { VenezuelaMapOutline } from "./VenezuelaMapOutline";
import { WhoWeAreSlides } from "./WhoWeAreSlides";

const SHOW_VENEZUELA_MAP = true;

type Props = {
  section: SectionData;
  locale: Locale;
};

function withEmphasis(text: string) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, index) => {
    if (!part.startsWith("**")) return part;
    return <strong key={index}>{part.slice(2, -2)}</strong>;
  });
}

/** Map band (full width) + centered title, then body copy. */
export function HomeWhoWeAreSection({ section, locale }: Props) {
  const variant = section.variant ?? "light";
  const colors = sectionColors(variant);
  const paragraphs = section.paragraphs ?? [];
  const cards = section.cards ?? [];

  return (
    <section
      className={`${variantClass[variant]} px-5 py-14 sm:px-6 sm:py-20 md:px-14 md:py-24`}
    >
      <div className="relative isolate mx-auto flex min-h-[min(52vw,420px)] w-full max-w-[1200px] items-center justify-center pt-10 sm:min-h-[min(42vw,460px)] sm:pt-12">
        {SHOW_VENEZUELA_MAP ? (
          <VenezuelaMapOutline className="absolute inset-x-0 top-[30%] w-full -translate-y-1/2 opacity-90" />
        ) : null}

        <div className="relative z-10 mx-auto mt-[4%] flex w-full max-w-[640px] flex-col items-center text-center sm:mt-[2%] sm:max-w-[720px]">
          {section.eyebrow ? (
            <div className="mb-2 flex items-center justify-center gap-3.5">
              <span className="h-px w-9 shrink-0 bg-gold" aria-hidden />
              <span
                className={`bg-surface px-[0.2em] text-[15px] font-semibold box-decoration-clone [box-decoration-break:clone] ${colors.eyebrow}`}
              >
                {section.eyebrow}
              </span>
            </div>
          ) : null}

          {section.title ? (
            <h2
              className={`text-balance font-serif font-normal text-[34px] leading-[1.05] tracking-[-0.02em] sm:text-[48px] md:text-[68px] ${colors.title}`}
            >
              <span className="bg-surface box-decoration-clone px-[0.12em] [box-decoration-break:clone]">
                {section.title}
              </span>
            </h2>
          ) : null}
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-[1200px] sm:mt-12 md:mt-14">
        {paragraphs.length ? (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
            {paragraphs.map((p) => (
              <p
                key={p.slice(0, 40)}
                className={`text-pretty font-serif bg-surface z-1 text-[18px] leading-[1.6] md:text-[19px] ${colors.body}`}
              >
                <span className="bg-surface box-decoration-clone px-[0.15em] [box-decoration-break:clone]">
                  {withEmphasis(p)}
                </span>
              </p>
            ))}
          </div>
        ) : null}

      </div>

      {cards.length ? <WhoWeAreSlides cards={cards} /> : null}

      <div className="mx-auto max-w-[1200px]">
        <SectionActions
          locale={locale}
          isDark={colors.isDark}
          ctas={section.ctas}
          links={section.links}
        />
      </div>
    </section>
  );
}
