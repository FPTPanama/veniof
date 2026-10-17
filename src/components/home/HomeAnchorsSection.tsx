import type { Section as SectionData } from "@/content/types";
import type { Locale } from "@/content";
import { BridgeGraphic } from "../BridgeGraphic";
import {
  SectionActions,
  SectionEyebrow,
  SectionShell,
  sectionColors,
  titleSizeClass,
} from "../section-ui";

const centerTagline = {
  en: ["One firm.", "Two anchors."],
  es: ["Una firma.", "Dos anclajes."],
} as const;

const countryLabels = {
  en: {
    leftTitle: "United States",
    leftSub: "Capital, governance and compliance",
    rightTitle: "Venezuela",
    rightSub: "Operations, relationships and execution",
  },
  es: {
    leftTitle: "Estados Unidos",
    leftSub: "Capital, gobernanza y cumplimiento",
    rightTitle: "Venezuela",
    rightSub: "Operaciones, relaciones y ejecución",
  },
} as const;

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

function FlagDivider() {
  return (
    <div className="flex w-full items-center gap-2" aria-hidden>
      <span className="h-[11px] w-px shrink-0 bg-navy" />
      {/* US — red / white / blue */}
      <span
        className="h-[2px] min-w-0 flex-1"
        style={{
          background:
            "linear-gradient(to right, #b22234 0% 33.33%, #eef0f3 33.33% 66.66%, #0a1a2f 66.66% 100%)",
        }}
      />
      {/* Venezuela — yellow / blue / red */}
      <span
        className="h-[2px] min-w-0 flex-1"
        style={{
          background:
            "linear-gradient(to right, #f7d117 0% 33.33%, #0037a2 33.33% 66.66%, #cf142b 66.66% 100%)",
        }}
      />
      <span className="h-[11px] w-px shrink-0 bg-navy" />
    </div>
  );
}

/** Intro + two adjacent bullet panels (US / Venezuela). */
export function HomeAnchorsSection({ section, locale }: Props) {
  const variant = section.variant ?? "muted";
  const colors = sectionColors(variant);
  const paragraphs = section.paragraphs ?? [];
  const cards = section.cards ?? [];
  const labels = countryLabels[locale];

  return (
    <SectionShell variant={variant}>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-x-12 md:gap-y-10 lg:gap-x-16">
        <div className="md:col-start-1 md:row-start-1">
          {section.eyebrow ? (
            <SectionEyebrow colorClass={colors.eyebrow}>
              {section.eyebrow}
            </SectionEyebrow>
          ) : null}
          <h2
            className={`text-balance font-serif font-normal ${titleSizeClass("h2")} ${colors.title}`}
          >
            {section.title}
          </h2>
        </div>

        <div className="space-y-5 md:col-start-2 md:row-start-2">
          {paragraphs.map((p) => (
            <p
              key={p.slice(0, 40)}
              className={`text-pretty font-serif text-[18px] leading-[1.6] md:text-[19px] [&_strong]:font-semibold ${colors.body}`}
            >
              {withEmphasis(p)}
            </p>
          ))}
        </div>
      </div>

      <BridgeGraphic locale={locale} />

      {cards.length === 2 ? (
        <div className="mt-8 grid grid-cols-1 items-start gap-10 md:mt-5 md:grid-cols-3 md:gap-8">
          <article className="text-ink md:col-start-1">
            <h3 className="font-serif text-2xl text-ink md:text-4xl">
              <span className="bg-surface box-decoration-clone px-[0.12em] [box-decoration-break:clone]">
                {labels.leftTitle}
              </span>
            </h3>
            <p className="mt-1.5 text-[15px] leading-snug text-muted">
              <span className="bg-surface box-decoration-clone px-[0.15em] [box-decoration-break:clone]">
                {labels.leftSub}
              </span>
            </p>
            {cards[0]?.bullets?.length ? (
              <ul className="mt-6 space-y-4 text-slate md:mt-8">
                {cards[0].bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="text-[17px] leading-[1.55] md:text-[18px]"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
            ) : null}
          </article>

          <div className="flex flex-col items-center gap-6 md:col-start-2 md:gap-8 md:pt-2.5">
            <FlagDivider />
            <p className="text-center font-serif text-[28px] font-medium italic leading-[1.2] text-navy sm:text-[32px] md:text-[36px] lg:text-[40px]">
              {centerTagline[locale].map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
          </div>

          <article className="text-ink md:col-start-3 md:text-right">
            <h3 className="font-serif text-2xl text-ink md:text-4xl">
              <span className="bg-surface box-decoration-clone px-[0.12em] [box-decoration-break:clone]">
                {labels.rightTitle}
              </span>
            </h3>
            <p className="mt-1.5 text-[15px] leading-snug text-muted">
              <span className="bg-surface box-decoration-clone px-[0.15em] [box-decoration-break:clone]">
                {labels.rightSub}
              </span>
            </p>
            {cards[1]?.bullets?.length ? (
              <ul className="mt-6 space-y-4 text-slate md:mt-8">
                {cards[1].bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="text-[17px] leading-[1.55] md:text-[18px]"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
            ) : null}
          </article>
        </div>
      ) : null}

      <SectionActions
        locale={locale}
        isDark={colors.isDark}
        ctas={section.ctas}
        links={section.links}
      />
    </SectionShell>
  );
}
