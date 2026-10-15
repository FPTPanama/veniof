import type { SectionVariant } from "./sectionTheme";
import { variantClass } from "./sectionTheme";

type Props = {
  variant?: SectionVariant;
  children: React.ReactNode;
  className?: string;
};

export function SectionShell({
  variant = "light",
  children,
  className = "",
}: Props) {
  return (
    <section
      className={`${variantClass[variant]} px-5 py-14 sm:px-6 sm:py-20 md:px-14 md:py-24 ${className}`}
    >
      <div className="mx-auto max-w-[1200px]">{children}</div>
    </section>
  );
}
