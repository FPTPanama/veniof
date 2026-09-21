import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "ghost" | "text";
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "solid",
  className = "",
}: Props) {
  const base =
    "inline-flex items-center justify-center min-h-11 px-6 text-[15px] font-semibold tracking-wide transition";

  const variants = {
    solid: "bg-gold text-navy-deep hover:brightness-110",
    ghost:
      "border border-navy-line text-cream hover:border-gold-light hover:text-gold-light",
    text: "px-0 text-gold-light underline underline-offset-4 decoration-gold/70 hover:text-cream hover:decoration-cream",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
