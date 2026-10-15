import type { ContentLink } from "@/content/types";
import { pagePath, type Locale } from "@/content";
import { ButtonLink } from "../ButtonLink";

type Props = {
  locale: Locale;
  isDark: boolean;
  ctas?: ContentLink[];
  links?: ContentLink[];
  className?: string;
};

export function SectionActions({
  locale,
  ctas,
  links,
  className = "mt-10",
}: Props) {
  if (!ctas?.length && !links?.length) return null;

  return (
    <div className={`flex flex-wrap items-center gap-7 ${className}`}>
      {ctas?.map((cta) => (
        <ButtonLink key={cta.label} href={pagePath(locale, cta.href)}>
          {cta.label}
        </ButtonLink>
      ))}
      {links?.map((link) => (
        <ButtonLink
          key={link.label}
          href={pagePath(locale, link.href)}
          variant="text"
        >
          {link.label}
        </ButtonLink>
      ))}
    </div>
  );
}
