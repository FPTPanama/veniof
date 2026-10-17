import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "navy" | "ghost" | "text";
  className?: string;
};

/** Site-standard CTA — same language as the hero buttons. */
export function ButtonLink({
  href,
  children,
  variant = "solid",
  className = "",
}: Props) {
  const base =
    "inline-flex items-center min-h-11 text-[15px] font-semibold tracking-wide transition";

  const variants = {
    solid:
      "hero-cta justify-between gap-2.5 bg-gold px-8 text-navy hover:brightness-105",
    navy:
      "hero-cta justify-between gap-2.5 border-2 border-navy bg-transparent px-8 text-navy hover:bg-navy/5",
    ghost:
      "hero-cta justify-between gap-2.5 border-2 border-navy/25 bg-transparent px-8 text-navy hover:border-navy",
    text: "justify-center gap-2.5 px-0 text-ink underline decoration-gold decoration-1 underline-offset-4 hover:text-gold",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
