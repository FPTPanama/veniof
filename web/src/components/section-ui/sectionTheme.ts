import type { Section } from "@/content/types";

export type SectionVariant = NonNullable<Section["variant"]>;

export const variantClass: Record<SectionVariant, string> = {
  navy: "bg-navy text-cream",
  dark: "bg-navy-deep text-cream",
  light: "bg-surface text-ink",
  muted: "bg-surface-2 text-ink",
};

export function isDarkVariant(variant: SectionVariant): boolean {
  return variant === "navy" || variant === "dark";
}

export function sectionColors(variant: SectionVariant) {
  const isDark = isDarkVariant(variant);
  return {
    isDark,
    eyebrow: isDark ? "text-gold-light" : "text-gold-dark",
    title: isDark ? "text-cream" : "text-ink",
    body: isDark ? "text-muted" : "text-slate",
    cardBorder: isDark ? "border-navy-line" : "border-[#D2D8E0]",
    cardBg: isDark ? "bg-navy" : "bg-white",
    cardTitle: isDark ? "text-gold-light" : "text-ink",
    cardBody: isDark ? "text-muted" : "text-slate",
    itemTitle: isDark ? "text-cream" : "text-ink",
    itemBody: isDark ? "text-muted" : "text-slate",
    itemRule: isDark ? "border-navy-line" : "border-[#D2D8E0]",
  };
}

export function titleSizeClass(titleAs: "h1" | "h2" = "h2"): string {
  return titleAs === "h1"
    ? "text-[40px] md:text-[58px] leading-[1.08] tracking-[-0.015em]"
    : "text-[32px] md:text-[42px] leading-[1.15] tracking-[-0.01em]";
}
