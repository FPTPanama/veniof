import { getPrivacy, type Locale } from "@/content";

type Props = { locale: Locale };

export function PrivacyPage({ locale }: Props) {
  const copy = getPrivacy(locale);

  return (
    <div className="bg-surface">
      <section className="px-6 pb-16 pt-10 md:px-14 md:pb-24 md:pt-14">
        <div className="mx-auto max-w-[800px]">
          <h1 className="font-serif text-[clamp(2rem,5vw,3.25rem)] leading-[1.15] tracking-[-0.01em] text-ink">
            {copy.heroTitle}
          </h1>
          <p className="mt-5 max-w-[54ch] text-[16px] leading-[1.65] text-muted md:text-[17px]">
            {copy.heroSubtitle}
          </p>
        </div>
      </section>

      <section className="bg-surface px-6 py-16 md:px-14 md:py-24">
        <div className="mx-auto flex max-w-[800px] flex-col gap-16 md:gap-20">
          {[copy.privacy, copy.terms].map((block) => (
            <article key={block.id} id={block.id} className="scroll-mt-28">
              <div className="mb-8 border-b border-line pb-6">
                <h2 className="font-serif text-[clamp(1.6rem,3vw,2.25rem)] text-ink">
                  {block.title}
                </h2>
                {block.intro ? (
                  <p className="mt-2 text-[15px] text-slate">{block.intro}</p>
                ) : null}
                {block.updated ? (
                  <p className="mt-3 text-[13px] tracking-wide text-slate/80">
                    {block.updated}
                  </p>
                ) : null}
              </div>
              <div className="flex flex-col gap-8">
                {block.sections.map((section) => (
                  <div key={section.heading}>
                    <h3 className="text-[15px] font-semibold tracking-[0.02em] text-navy">
                      {section.heading}
                    </h3>
                    <div className="mt-3 space-y-3">
                      {section.paragraphs.map((p) => (
                        <p
                          key={p.slice(0, 40)}
                          className="text-[15px] leading-[1.7] text-slate"
                        >
                          {p}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
