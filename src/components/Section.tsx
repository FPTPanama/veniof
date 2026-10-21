import { ArrowRight, CirclePlus } from "lucide-react";
import type { Section as SectionData } from "@/content/types";
import { type Locale } from "@/content";
import { BridgeGraphic } from "./BridgeGraphic";
import {
  SectionActions,
  SectionEyebrow,
  SectionShell,
  sectionColors,
  titleSizeClass,
} from "./section-ui";

type Props = {
  section: SectionData;
  locale: Locale;
  showBridge?: boolean;
};

function titleWithBreaks(title: string) {
  return title.split("\n").map((line, index, lines) => (
    <span key={`${line}-${index}`}>
      {line}
      {index < lines.length - 1 ? <br /> : null}
    </span>
  ));
}

export function Section({ section, locale, showBridge = false }: Props) {
  const variant = section.variant ?? "light";
  const colors = sectionColors(variant);

  const TitleTag = section.titleAs === "h1" ? "h1" : "h2";
  const titleSize = titleSizeClass(section.titleAs ?? "h2");
  const isHero = section.titleAs === "h1";
  const heroCtaIcons = isHero
    ? {
        ctaStartIcon: (
          <CirclePlus aria-hidden className="h-4 w-4 shrink-0" />
        ),
        ctaEndIcon: <ArrowRight aria-hidden className="h-4 w-4 shrink-0" />,
        linkVariant: "navy" as const,
        linkEndIcon: <ArrowRight aria-hidden className="h-4 w-4 shrink-0" />,
        className:
          "mt-10 w-full flex-col items-stretch sm:w-auto sm:flex-row sm:items-center",
        ctaClassName: "w-full sm:w-auto",
        linkClassName: "w-full sm:w-auto",
      }
    : {};

  const paragraphs = section.paragraphs ?? [];
  const cards = section.cards ?? [];

  const isSplitPanels =
    cards.length === 2 && cards.every((card) => (card.bullets?.length ?? 0) > 0);

  const isNumberedFeatures =
    cards.length === 4 &&
    cards.every((card) => Boolean(card.body) && !card.bullets?.length);

  const useTextSplit =
    !isNumberedFeatures &&
    section.titleAs !== "h1" &&
    Boolean(section.title) &&
    paragraphs.length > 0;

  const splitAt = paragraphs.length >= 3 ? 2 : paragraphs.length;
  const sideParagraphs = useTextSplit ? paragraphs.slice(0, splitAt) : [];
  const fullParagraphs = useTextSplit
    ? paragraphs.slice(splitAt)
    : isNumberedFeatures
      ? []
      : paragraphs;

  const eyebrow = section.eyebrow ? (
    <SectionEyebrow colorClass={colors.eyebrow}>{section.eyebrow}</SectionEyebrow>
  ) : null;

  return (
    <SectionShell variant={variant}>
      {isNumberedFeatures ? (
        <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            {eyebrow}
            {section.title ? (
              <TitleTag
                className={`text-balance font-serif font-normal ${titleSize} ${colors.title}`}
              >
                {titleWithBreaks(section.title)}
              </TitleTag>
            ) : null}
            {paragraphs.length ? (
              <div className="mt-7 space-y-5">
                {paragraphs.map((p) => (
                  <p
                    key={p.slice(0, 40)}
                    className={`text-pretty font-serif text-[18px] leading-[1.6] md:text-[19px] ${colors.body}`}
                  >
                    {p}
                  </p>
                ))}
              </div>
            ) : null}
            <SectionActions
              locale={locale}
              isDark={colors.isDark}
              ctas={section.ctas}
              links={section.links}
              {...heroCtaIcons}
            />
          </div>

          <div className="grid grid-cols-1 gap-0 sm:grid-cols-2 md:col-span-7">
            {cards.map((card, index) => {
              const topRow = index < 2;
              return (
                <article
                  key={card.title}
                  className={`py-7 ${topRow ? `border-b ${colors.itemRule}` : "pt-8"} ${
                    index % 2 === 0 ? "sm:pr-8" : "sm:pl-8"
                  }`}
                >
                  <div className="font-serif text-[18px] text-ink">
                    {index + 1}
                  </div>
                  <h3
                    className={`mt-3 font-serif text-[22px] leading-snug ${colors.itemTitle}`}
                  >
                    {card.title}
                  </h3>
                  {card.body ? (
                    <p
                      className={`mt-3 text-[15.5px] leading-[1.6] ${colors.itemBody}`}
                    >
                      {card.body}
                    </p>
                  ) : null}
                </article>
              );
            })}
          </div>
        </div>
      ) : (
        <>
          {eyebrow}

          {useTextSplit ? (
            <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-12 md:gap-8">
              <TitleTag
                className={`text-balance font-serif font-normal ${titleSize} ${colors.title} md:col-span-5`}
              >
                {section.title ? titleWithBreaks(section.title) : null}
              </TitleTag>
              <div className="space-y-5 md:col-span-7">
                {sideParagraphs.map((p) => (
                  <p
                    key={p.slice(0, 40)}
                    className={`text-pretty font-serif text-[18px] leading-[1.6] md:text-[19px] ${colors.body}`}
                  >
                    {p}
                  </p>
                ))}
              </div>
            </div>
          ) : section.title ? (
            <TitleTag
              className={`max-w-[1020px] text-balance font-serif font-normal ${titleSize} ${colors.title}`}
            >
              {titleWithBreaks(section.title)}
            </TitleTag>
          ) : null}

          {section.subtitle ? (
            <p
              className={`mt-4 max-w-[720px] text-balance font-serif text-[22px] leading-[1.35] sm:text-[26px] md:text-[28px] ${colors.title}`}
            >
              {section.subtitle}
            </p>
          ) : null}

          {fullParagraphs.length ? (
            <div
              className={`space-y-5 ${
                useTextSplit ? "mt-8 max-w-none" : "mt-7 max-w-[720px]"
              }`}
            >
              {fullParagraphs.map((p) => (
                <p
                  key={p.slice(0, 40)}
                  className={`text-pretty font-serif text-[18px] leading-[1.6] md:text-[19px] ${colors.body}`}
                >
                  {p}
                </p>
              ))}
            </div>
          ) : null}

          <SectionActions
            locale={locale}
            isDark={colors.isDark}
            ctas={section.ctas}
            links={section.links}
            {...heroCtaIcons}
          />
        </>
      )}

      {showBridge ? <BridgeGraphic locale={locale} /> : null}

      {cards.length && !isNumberedFeatures ? (
        isSplitPanels ? (
          <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
            {cards.map((card) => (
              <article
                key={card.title}
                className="border-t border-line pt-8 text-ink"
              >
                <h3 className="font-serif text-[24px] text-ink md:text-[28px]">
                  {card.title}
                </h3>
                {card.bullets?.length ? (
                  <ul className="mt-6 space-y-3.5 text-slate">
                    {card.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex gap-3 text-[15px] leading-[1.55]"
                      >
                        <span
                          className="mt-[0.55em] h-px w-3 shrink-0 bg-navy"
                          aria-hidden
                        />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}
          </div>
        ) : (
          <div
            className={`mt-14 grid gap-6 ${
              cards.length >= 4
                ? "md:grid-cols-2 xl:grid-cols-4"
                : cards.length === 3
                  ? "md:grid-cols-3"
                  : "md:grid-cols-2"
            }`}
          >
            {cards.map((card) => (
              <article
                key={card.title}
                className="border-t border-line bg-transparent pt-8"
              >
                <h3 className={`font-serif text-[20px] ${colors.cardTitle}`}>
                  {card.title}
                </h3>
                {card.body ? (
                  <p
                    className={`mt-3 text-[15.5px] leading-[1.6] ${colors.cardBody}`}
                  >
                    {card.body}
                  </p>
                ) : null}
                {card.bullets?.length ? (
                  <ul className={`mt-4 space-y-2.5 ${colors.cardBody}`}>
                    {card.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex gap-3 text-[15px] leading-[1.5]"
                      >
                        <span className="mt-[0.65em] h-px w-3 shrink-0 bg-navy" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}
          </div>
        )
      ) : null}
    </SectionShell>
  );
}
