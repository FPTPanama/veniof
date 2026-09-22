import { SectionShell, titleSizeClass } from "../section-ui";

type Props = {
  title: string;
  body: string;
  email: string;
};

export function PartnerStartSection({ title, body, email }: Props) {
  return (
    <SectionShell variant="muted">
      <h2
        className={`max-w-[720px] text-balance font-serif font-normal ${titleSizeClass("h2")} text-ink`}
      >
        {title}
      </h2>
      <p className="mt-5 text-[17px] text-slate">{body}</p>
      <a
        href={`mailto:${email}`}
        className="mt-8 inline-flex min-h-11 items-center text-[16px] font-semibold text-ink underline decoration-gold decoration-1 underline-offset-4 hover:text-gold-dark"
      >
        {email}
      </a>
    </SectionShell>
  );
}
