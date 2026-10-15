import type { Section } from "@/content/types";

export type SectionVariant = NonNullable<Section["variant"]>;

export const variantClass: Record<SectionVariant, string> = {
  navy: "bg-surface text-ink",
  dark: "bg-surface text-ink",
  light: "bg-surface text-ink",
  muted: "bg-surface text-ink",
};

export function isDarkVariant(variant: SectionVariant): boolean {
  switch (variant) {
    case "navy":
    case "dark":
    case "light":
    case "muted":
      return false;
  }
}

export function sectionColors(variant: SectionVariant) {
  switch (variant) {
    case "navy":
    case "dark":
    case "light":
    case "muted":
      return {
        isDark: false,
        eyebrow: "text-ink",
        title: "text-ink",
        body: "text-ink",
        cardBorder: "border-line",
        cardBg: "bg-transparent",
        cardTitle: "text-ink",
        cardBody: "text-ink",
        itemTitle: "text-ink",
        itemBody: "text-ink",
        itemRule: "border-line",
      };
  }
}

export function titleSizeClass(titleAs: "h1" | "h2" = "h2"): string {
  return titleAs === "h1"
    ? "text-[32px] sm:text-[40px] md:text-[70px] leading-[1.08] tracking-[-0.015em]"
    : "text-[26px] sm:text-[32px] md:text-[42px] leading-[1.15] tracking-[-0.01em]";
}
