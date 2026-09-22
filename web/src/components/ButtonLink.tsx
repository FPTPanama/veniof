import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "navy" | "ghost" | "text";
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
    navy: "bg-navy text-cream border border-navy hover:brightness-110",
    ghost:
      "border border-navy-line text-cream hover:border-gold-light hover:text-gold-light",
    text: "px-0 text-cream underline decoration-gold decoration-1 underline-offset-4 hover:decoration-gold-light",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
