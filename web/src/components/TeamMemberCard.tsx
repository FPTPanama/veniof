import type { TeamMember } from "@/content";

type Props = {
  member: TeamMember;
};

export function TeamMemberCard({ member }: Props) {
  return (
    <article className="grid gap-8 border-b border-[#D2D8E0] py-12 last:border-b-0 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.6fr)] md:gap-12 md:py-14">
      <div className="relative aspect-[4/5] w-full overflow-hidden border border-[#D2D8E0] bg-[repeating-linear-gradient(-45deg,#EEF0F3,#EEF0F3_8px,#F8F9FB_8px,#F8F9FB_16px)]">
        {member.imageSrc ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={member.imageSrc}
            alt={member.name}
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-end justify-center p-4">
            <span className="border border-dashed border-gold bg-white px-3 py-1.5 text-[11px] font-semibold tracking-[0.04em] text-gold-dark">
              {member.portraitLabel}
            </span>
          </div>
        )}
      </div>

      <div>
        <h3 className="font-serif text-[34px] leading-tight text-ink md:text-[40px]">
          {member.name}
        </h3>
        <div className="mt-2 text-[15px] font-semibold text-gold">{member.role}</div>

        <div className="mt-6 space-y-4">
          {member.paragraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 48)}
              className="font-serif text-[17px] leading-[1.65] text-slate"
            >
              {paragraph}
            </p>
          ))}
        </div>

        {member.credentials.length > 0 ? (
          <>
            <div className="mt-8 h-px w-full bg-[#D2D8E0]" aria-hidden />
            <ul className="mt-6 space-y-3">
              {member.credentials.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 font-serif text-[16px] leading-[1.5] text-slate"
                >
                  <span
                    className="mt-[0.45em] h-2 w-2 shrink-0 bg-gold"
                    aria-hidden
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </>
        ) : null}
      </div>
    </article>
  );
}
