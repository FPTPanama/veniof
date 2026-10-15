import Link from "next/link";

export default function LocaleNotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-navy px-6 py-24 text-center">
      <h1 className="font-serif text-[clamp(2rem,5vw,3rem)] text-cream">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-[15px] text-muted">
        The page you requested is not available. Return home in English or
        Spanish.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/en"
          className="inline-flex min-h-11 items-center bg-gold-light px-5 text-[14px] font-semibold text-navy hover:brightness-105"
        >
          Home (EN)
        </Link>
        <Link
          href="/es"
          className="inline-flex min-h-11 items-center border border-gold/50 px-5 text-[14px] font-semibold text-cream hover:border-gold-light"
        >
          Inicio (ES)
        </Link>
      </div>
    </div>
  );
}
