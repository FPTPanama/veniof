import {
  SectionEyebrow,
  SectionShell,
  sectionColors,
  titleSizeClass,
} from "../section-ui";

type Props = {
  eyebrow: string;
  title: string;
  body: string;
};

export function PartnerHeroSection({ eyebrow, title, body }: Props) {
  const colors = sectionColors("navy");

  return (
    <SectionShell variant="navy">
      <SectionEyebrow colorClass={colors.eyebrow}>{eyebrow}</SectionEyebrow>
      <h1
        className={`max-w-[1020px] text-balance font-serif font-normal ${titleSizeClass("h1")} ${colors.title}`}
      >
        {title}
      </h1>
      <p
        className={`mt-7 max-w-[720px] text-pretty font-serif text-[18px] leading-[1.6] md:text-[19px] ${colors.body}`}
      >
        {body}
      </p>
    </SectionShell>
  );
}
