import type { Locale } from "@/content";

const copy = {
  en: {
    ariaLabel:
      "Line drawing of a suspension bridge joining the United States and Venezuela",
    leftTitle: "United States",
    leftSub: "Capital, governance and compliance",
    center: "One firm. Two anchors.",
    rightTitle: "Venezuela",
    rightSub: "Operations, relationships and execution",
  },
  es: {
    ariaLabel:
      "Dibujo lineal de un puente colgante que une a Estados Unidos y Venezuela",
    leftTitle: "Estados Unidos",
    leftSub: "Capital, gobernanza y cumplimiento",
    center: "Una firma. Dos anclajes.",
    rightTitle: "Venezuela",
    rightSub: "Operaciones, relaciones y ejecución",
  },
} as const;

type Props = {
  locale?: Locale;
};

export function BridgeGraphic({ locale = "en" }: Props) {
  const t = copy[locale];

  return (
    <div className="mt-16 md:mt-20">
      <svg
        viewBox="0 0 1200 280"
        className="block h-auto w-full overflow-visible"
        role="img"
        aria-label={t.ariaLabel}
        xmlns="http://www.w3.org/2000/svg"
      >
      <line x1="300" x2="300" y1="67.4" y2="218" fill="none" stroke="#0A1A2F" strokeWidth="1" opacity="0.55" vectorEffect="non-scaling-stroke" />
      <line x1="330" x2="330" y1="92.2" y2="218" fill="none" stroke="#0A1A2F" strokeWidth="1" opacity="0.55" vectorEffect="non-scaling-stroke" />
      <line x1="360" x2="360" y1="114.4" y2="218" fill="none" stroke="#0A1A2F" strokeWidth="1" opacity="0.55" vectorEffect="non-scaling-stroke" />
      <line x1="390" x2="390" y1="134.0" y2="218" fill="none" stroke="#0A1A2F" strokeWidth="1" opacity="0.55" vectorEffect="non-scaling-stroke" />
      <line x1="420" x2="420" y1="151.0" y2="218" fill="none" stroke="#0A1A2F" strokeWidth="1" opacity="0.55" vectorEffect="non-scaling-stroke" />
      <line x1="450" x2="450" y1="165.4" y2="218" fill="none" stroke="#0A1A2F" strokeWidth="1" opacity="0.55" vectorEffect="non-scaling-stroke" />
      <line x1="480" x2="480" y1="177.1" y2="218" fill="none" stroke="#0A1A2F" strokeWidth="1" opacity="0.55" vectorEffect="non-scaling-stroke" />
      <line x1="510" x2="510" y1="186.2" y2="218" fill="none" stroke="#0A1A2F" strokeWidth="1" opacity="0.55" vectorEffect="non-scaling-stroke" />
      <line x1="540" x2="540" y1="192.8" y2="218" fill="none" stroke="#0A1A2F" strokeWidth="1" opacity="0.55" vectorEffect="non-scaling-stroke" />
      <line x1="570" x2="570" y1="196.7" y2="218" fill="none" stroke="#0A1A2F" strokeWidth="1" opacity="0.55" vectorEffect="non-scaling-stroke" />
      <line x1="600" x2="600" y1="198.0" y2="218" fill="none" stroke="#0A1A2F" strokeWidth="1" opacity="0.55" vectorEffect="non-scaling-stroke" />
      <line x1="630" x2="630" y1="196.7" y2="218" fill="none" stroke="#0A1A2F" strokeWidth="1" opacity="0.55" vectorEffect="non-scaling-stroke" />
      <line x1="660" x2="660" y1="192.8" y2="218" fill="none" stroke="#0A1A2F" strokeWidth="1" opacity="0.55" vectorEffect="non-scaling-stroke" />
      <line x1="690" x2="690" y1="186.2" y2="218" fill="none" stroke="#0A1A2F" strokeWidth="1" opacity="0.55" vectorEffect="non-scaling-stroke" />
      <line x1="720" x2="720" y1="177.1" y2="218" fill="none" stroke="#0A1A2F" strokeWidth="1" opacity="0.55" vectorEffect="non-scaling-stroke" />
      <line x1="750" x2="750" y1="165.4" y2="218" fill="none" stroke="#0A1A2F" strokeWidth="1" opacity="0.55" vectorEffect="non-scaling-stroke" />
      <line x1="780" x2="780" y1="151.0" y2="218" fill="none" stroke="#0A1A2F" strokeWidth="1" opacity="0.55" vectorEffect="non-scaling-stroke" />
      <line x1="810" x2="810" y1="134.0" y2="218" fill="none" stroke="#0A1A2F" strokeWidth="1" opacity="0.55" vectorEffect="non-scaling-stroke" />
      <line x1="840" x2="840" y1="114.4" y2="218" fill="none" stroke="#0A1A2F" strokeWidth="1" opacity="0.55" vectorEffect="non-scaling-stroke" />
      <line x1="870" x2="870" y1="92.2" y2="218" fill="none" stroke="#0A1A2F" strokeWidth="1" opacity="0.55" vectorEffect="non-scaling-stroke" />
      <line x1="900" x2="900" y1="67.4" y2="218" fill="none" stroke="#0A1A2F" strokeWidth="1" opacity="0.55" vectorEffect="non-scaling-stroke" />
      <line x1="60" x2="60" y1="188.5" y2="218" fill="none" stroke="#0A1A2F" strokeWidth="1" opacity="0.55" vectorEffect="non-scaling-stroke" />
      <line x1="1140" x2="1140" y1="188.5" y2="218" fill="none" stroke="#0A1A2F" strokeWidth="1" opacity="0.55" vectorEffect="non-scaling-stroke" />
      <line x1="90" x2="90" y1="171.9" y2="218" fill="none" stroke="#0A1A2F" strokeWidth="1" opacity="0.55" vectorEffect="non-scaling-stroke" />
      <line x1="1110" x2="1110" y1="171.9" y2="218" fill="none" stroke="#0A1A2F" strokeWidth="1" opacity="0.55" vectorEffect="non-scaling-stroke" />
      <line x1="120" x2="120" y1="153.9" y2="218" fill="none" stroke="#0A1A2F" strokeWidth="1" opacity="0.55" vectorEffect="non-scaling-stroke" />
      <line x1="1080" x2="1080" y1="153.9" y2="218" fill="none" stroke="#0A1A2F" strokeWidth="1" opacity="0.55" vectorEffect="non-scaling-stroke" />
      <line x1="150" x2="150" y1="134.5" y2="218" fill="none" stroke="#0A1A2F" strokeWidth="1" opacity="0.55" vectorEffect="non-scaling-stroke" />
      <line x1="1050" x2="1050" y1="134.5" y2="218" fill="none" stroke="#0A1A2F" strokeWidth="1" opacity="0.55" vectorEffect="non-scaling-stroke" />
      <line x1="180" x2="180" y1="113.5" y2="218" fill="none" stroke="#0A1A2F" strokeWidth="1" opacity="0.55" vectorEffect="non-scaling-stroke" />
      <line x1="1020" x2="1020" y1="113.5" y2="218" fill="none" stroke="#0A1A2F" strokeWidth="1" opacity="0.55" vectorEffect="non-scaling-stroke" />
      <line x1="210" x2="210" y1="90.9" y2="218" fill="none" stroke="#0A1A2F" strokeWidth="1" opacity="0.55" vectorEffect="non-scaling-stroke" />
      <line x1="990" x2="990" y1="90.9" y2="218" fill="none" stroke="#0A1A2F" strokeWidth="1" opacity="0.55" vectorEffect="non-scaling-stroke" />
      <line x1="240" x2="240" y1="66.4" y2="218" fill="none" stroke="#0A1A2F" strokeWidth="1" opacity="0.55" vectorEffect="non-scaling-stroke" />
      <line x1="960" x2="960" y1="66.4" y2="218" fill="none" stroke="#0A1A2F" strokeWidth="1" opacity="0.55" vectorEffect="non-scaling-stroke" />
      <path d="M0,218 Q150,150 270,40" fill="none" stroke="#0A1A2F" strokeWidth="1.6" vectorEffect="non-scaling-stroke" />
      <path d="M270,40 Q600,356 930,40" fill="none" stroke="#0A1A2F" strokeWidth="1.6" vectorEffect="non-scaling-stroke" />
      <path d="M930,40 Q1050,150 1200,218" fill="none" stroke="#0A1A2F" strokeWidth="1.6" vectorEffect="non-scaling-stroke" />
      <rect height="228" width="14" x="263" y="34" fill="none" stroke="#0A1A2F" strokeWidth="1.4" opacity="0.9" vectorEffect="non-scaling-stroke" />
      <line x1="263" x2="277" y1="120" y2="120" fill="none" stroke="#0A1A2F" strokeWidth="1.4" opacity="0.9" vectorEffect="non-scaling-stroke" />
      <line x1="254" x2="286" y1="262" y2="262" fill="none" stroke="#0A1A2F" strokeWidth="1.4" opacity="0.9" vectorEffect="non-scaling-stroke" />
      <rect height="228" width="14" x="923" y="34" fill="none" stroke="#0A1A2F" strokeWidth="1.4" opacity="0.9" vectorEffect="non-scaling-stroke" />
      <line x1="923" x2="937" y1="120" y2="120" fill="none" stroke="#0A1A2F" strokeWidth="1.4" opacity="0.9" vectorEffect="non-scaling-stroke" />
      <line x1="914" x2="946" y1="262" y2="262" fill="none" stroke="#0A1A2F" strokeWidth="1.4" opacity="0.9" vectorEffect="non-scaling-stroke" />
      <line x1="0" x2="1200" y1="218" y2="218" fill="none" stroke="#0A1A2F" strokeWidth="1.4" opacity="0.9" vectorEffect="non-scaling-stroke" />
      <line x1="0" x2="1200" y1="226" y2="226" fill="none" stroke="#0A1A2F" strokeWidth="1.4" opacity="0.9" vectorEffect="non-scaling-stroke" />
      <rect height="36" width="26" x="0" y="208" fill="none" stroke="#0A1A2F" strokeWidth="1.4" opacity="0.9" vectorEffect="non-scaling-stroke" />
      <rect height="36" width="26" x="1174" y="208" fill="none" stroke="#0A1A2F" strokeWidth="1.4" opacity="0.9" vectorEffect="non-scaling-stroke" />
      <line x1="40" x2="1160" y1="270" y2="270" fill="none" stroke="#0A1A2F" strokeWidth="1" opacity="0.35" vectorEffect="non-scaling-stroke" />
      </svg>

      <div className="mt-5 grid grid-cols-1 items-start gap-8 md:grid-cols-[1fr_2fr_1fr]">
        <div className="text-left">
          <div className="font-serif text-2xl text-ink">{t.leftTitle}</div>
          <div className="mt-1.5 text-[15px] leading-snug text-muted">
            {t.leftSub}
          </div>
        </div>

        <div className="flex items-center gap-0 pt-2.5">
          <span className="h-[13px] w-px shrink-0 bg-gold" />
          <span className="h-px flex-1 bg-gold/60" />
          <span className="px-[18px] font-serif text-[17px] italic text-gold">
            {t.center}
          </span>
          <span className="h-px flex-1 bg-gold/60" />
          <span className="h-[13px] w-px shrink-0 bg-gold" />
        </div>

        <div className="text-left md:text-right">
          <div className="font-serif text-2xl text-ink">{t.rightTitle}</div>
          <div className="mt-1.5 text-[15px] leading-snug text-muted">
            {t.rightSub}
          </div>
        </div>
      </div>
    </div>
  );
}
