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
    "inline-flex items-center justify-center gap-2.5 min-h-11 text-[15px] font-semibold tracking-wide transition";

  const variants = {
    solid: "bg-gold px-6 text-navy hover:brightness-105",
    navy: "border border-navy bg-transparent px-6 text-navy hover:bg-navy/5",
    ghost: "border border-navy/25 px-6 text-navy hover:border-navy",
    text: "px-0 text-ink underline decoration-gold decoration-1 underline-offset-4 hover:text-gold",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
