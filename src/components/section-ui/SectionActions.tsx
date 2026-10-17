import type { ContentLink } from "@/content/types";
import { pagePath, type Locale } from "@/content";
import { ButtonLink } from "../ButtonLink";

type Props = {
  locale: Locale;
  isDark: boolean;
  ctas?: ContentLink[];
  links?: ContentLink[];
  className?: string;
  ctaClassName?: string;
  ctaStartIcon?: React.ReactNode;
  ctaEndIcon?: React.ReactNode;
  linkVariant?: "solid" | "navy" | "ghost" | "text";
  linkClassName?: string;
  linkEndIcon?: React.ReactNode;
};

export function SectionActions({
  locale,
  ctas,
  links,
  className = "mt-10",
  ctaClassName = "",
  ctaStartIcon,
  ctaEndIcon,
  linkVariant = "text",
  linkClassName = "",
  linkEndIcon,
}: Props) {
  if (!ctas?.length && !links?.length) return null;

  return (
    <div className={`flex flex-wrap items-center gap-7 ${className}`}>
      {ctas?.map((cta) => (
        <ButtonLink
          key={cta.label}
          href={pagePath(locale, cta.href)}
          className={ctaClassName}
        >
          {ctaStartIcon || ctaEndIcon ? (
            <>
              <span className="inline-flex items-center gap-2.5">
                {ctaStartIcon}
                {cta.label}
              </span>
              {ctaEndIcon}
            </>
          ) : (
            cta.label
          )}
        </ButtonLink>
      ))}
      {links?.map((link) => (
        <ButtonLink
          key={link.label}
          href={pagePath(locale, link.href)}
          variant={linkVariant}
          className={linkClassName}
        >
          {linkEndIcon ? (
            <>
              <span>{link.label}</span>
              {linkEndIcon}
            </>
          ) : (
            link.label
          )}
        </ButtonLink>
      ))}
    </div>
  );
}
