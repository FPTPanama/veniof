import type { Section as SectionData } from "@/content/types";
import { pagePath, type Locale } from "@/content";
import { ButtonLink } from "./ButtonLink";
import { BridgeGraphic } from "./BridgeGraphic";

type Props = {
  section: SectionData;
  locale: Locale;
  showBridge?: boolean;
};

const variantClass: Record<NonNullable<SectionData["variant"]>, string> = {
  navy: "bg-navy text-cream",
  dark: "bg-navy-deep text-cream",
  light: "bg-surface text-ink",
  muted: "bg-surface-2 text-ink",
};

export function Section({ section, locale, showBridge = false }: Props) {
  const variant = section.variant ?? "light";
  const isDark = variant === "navy" || variant === "dark";
  const eyebrowColor = isDark ? "text-gold-light" : "text-gold-dark";
  const titleColor = isDark ? "text-cream" : "text-ink";
  const bodyColor = isDark ? "text-muted" : "text-slate";
  const cardBorder = isDark ? "border-navy-line" : "border-[#D2D8E0]";
  const cardBg = isDark ? "bg-navy" : "bg-white";
  const cardTitle = isDark ? "text-gold-light" : "text-ink";
  const cardBody = isDark ? "text-muted" : "text-slate";

  const TitleTag = section.titleAs === "h1" ? "h1" : "h2";
  const titleSize =
    section.titleAs === "h1"
      ? "text-[40px] md:text-[58px] leading-[1.08] tracking-[-0.015em]"
      : "text-[32px] md:text-[42px] leading-[1.15] tracking-[-0.01em]";

  return (
    <section className={`${variantClass[variant]} px-6 py-20 md:px-14 md:py-24`}>
      <div className="mx-auto max-w-[1200px]">
        {section.eyebrow ? (
          <div className="mb-7 flex items-center gap-3.5">
            <span className="h-px w-9 bg-gold" aria-hidden />
            <span className={`text-[15px] font-semibold ${eyebrowColor}`}>
              {section.eyebrow}
            </span>
          </div>
        ) : null}

        {section.title ? (
          <TitleTag
            className={`max-w-[1020px] text-balance font-serif font-normal ${titleSize} ${titleColor}`}
          >
            {section.title}
          </TitleTag>
        ) : null}

        {section.paragraphs?.length ? (
          <div className="mt-7 max-w-[720px] space-y-5">
            {section.paragraphs.map((p) => (
              <p
                key={p.slice(0, 40)}
                className={`text-pretty font-serif text-[18px] leading-[1.6] md:text-[19px] ${bodyColor}`}
              >
                {p}
              </p>
            ))}
          </div>
        ) : null}

        {section.ctas?.length || section.links?.length ? (
          <div className="mt-10 flex flex-wrap items-center gap-7">
            {section.ctas?.map((cta) => (
              <ButtonLink key={cta.label} href={pagePath(locale, cta.href)}>
                {cta.label}
              </ButtonLink>
            ))}
            {section.links?.map((link) => (
              <ButtonLink
                key={link.label}
                href={pagePath(locale, link.href)}
                variant="text"
                className={isDark ? "" : "!text-gold-dark hover:!text-ink"}
              >
                {link.label}
              </ButtonLink>
            ))}
          </div>
        ) : null}

        {showBridge ? <BridgeGraphic locale={locale} /> : null}

        {section.cards?.length ? (
          <div
            className={`mt-14 grid gap-6 ${
              section.cards.length >= 4
                ? "md:grid-cols-2 xl:grid-cols-4"
                : section.cards.length === 3
                  ? "md:grid-cols-3"
                  : "md:grid-cols-2"
            }`}
          >
            {section.cards.map((card) => (
              <article
                key={card.title}
                className={`border ${cardBorder} ${cardBg} border-t-[3px] border-t-gold p-8`}
              >
                <h3 className={`font-serif text-[20px] ${cardTitle}`}>
                  {card.title}
                </h3>
                {card.body ? (
                  <p
                    className={`mt-3 text-[15.5px] leading-[1.6] ${cardBody}`}
                  >
                    {card.body}
                  </p>
                ) : null}
                {card.bullets?.length ? (
                  <ul className={`mt-4 space-y-2.5 ${cardBody}`}>
                    {card.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex gap-3 text-[15px] leading-[1.5]"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
