type Props = {
  children: React.ReactNode;
  colorClass: string;
  className?: string;
};

export function SectionEyebrow({
  children,
  colorClass,
  className = "",
}: Props) {
  return (
    <div className={`mb-7 flex items-center gap-3.5 ${className}`}>
      <span className="h-px w-9 bg-gold" aria-hidden />
      <span className={`text-[15px] font-semibold ${colorClass}`}>
        {children}
      </span>
    </div>
  );
}
