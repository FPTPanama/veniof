import type { SectionVariant } from "./sectionTheme";
import { variantClass } from "./sectionTheme";

type Props = {
  variant?: SectionVariant;
  children: React.ReactNode;
  className?: string;
  /** Full-bleed layer behind the content column. Blends with the section background. */
  backdrop?: React.ReactNode;
};

export function SectionShell({
  variant = "light",
  children,
  className = "",
  backdrop,
}: Props) {
  return (
    <section
      className={`${backdrop ? "relative isolate" : ""} ${variantClass[variant]} px-5 py-14 sm:px-6 sm:py-20 md:px-14 md:py-24 ${className}`}
    >
      {backdrop}
      <div
        className={`${backdrop ? "relative z-10" : ""} mx-auto max-w-[1200px]`}
      >
        {children}
      </div>
    </section>
  );
}
