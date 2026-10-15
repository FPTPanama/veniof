export type Locale = "en" | "es";

export type PageKey =
  | "home"
  | "strategy"
  | "projects"
  | "team"
  | "partner"
  | "contact"
  | "privacy";

export type LegalBlock = {
  id: string;
  title: string;
  intro?: string;
  updated?: string;
  sections: { heading: string; paragraphs: string[] }[];
};

export type PrivacyCopy = {
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  privacy: LegalBlock;
  terms: LegalBlock;
};


export type ContentLink = {
  label: string;
  href: PageKey;
};

export type ContentCard = {
  title: string;
  body?: string;
  bullets?: string[];
};

export type Section = {
  eyebrow?: string;
  title?: string;
  titleAs?: "h1" | "h2";
  /** Secondary line under the title, above the body. */
  subtitle?: string;
  /** Short overlay callout (e.g. hero image caption). */
  callout?: string;
  paragraphs?: string[];
  cards?: ContentCard[];
  ctas?: ContentLink[];
  links?: ContentLink[];
  variant?: "dark" | "light" | "muted" | "navy";
};

export type PageContent = {
  metaTitle: string;
  metaDescription: string;
  sections: Section[];
};

export type PartnerAudience = {
  id: string;
  title: string;
  body: string;
  expectLabel: string;
  bullets: string[];
  ctaLabel: string;
  ctaHref: PageKey;
  disclaimer?: string;
  counselNote?: string;
};

export type PartnerCopy = {
  hero: {
    eyebrow: string;
    title: string;
    body: string;
  };
  audiences: PartnerAudience[];
  start: {
    title: string;
    body: string;
    email: string;
  };
};

export type TeamMember = {
  name: string;
  slug: string;
  role: string;
  portraitLabel: string;
  /** Public path to the portrait, e.g. /img/team/nikola-kedzo.webp */
  imageSrc?: string;
  paragraphs: string[];
  credentials: string[];
};

export type SiteCopy = {
  brand: string;
  brandFull: string;
  nav: { key: PageKey; label: string }[];
  langSwitch: { en: string; es: string };
  footer: {
    blurb: string;
    firmTitle: string;
    firmLinks: { label: string; href: PageKey }[];
    workTitle: string;
    workLinks: { label: string; href: PageKey }[];
    officesTitle: string;
    offices: { country: string; address: string }[];
    email: string;
    legal: string;
    legalNote: string;
    rights: string;
    terms: string;
    privacy: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    subtitle: string;
    fields: {
      fullName: string;
      organization: string;
      email: string;
      country: string;
      role: string;
      rolePlaceholder: string;
      message: string;
      ack: string;
    };
    roleOptions: string[];
    submit: string;
    sending: string;
    success: string;
    error: string;
    officesTitle: string;
    emailTitle: string;
    investorEmailLabel: string;
  };
  ctaBanner: {
    eyebrow: string;
    title: string;
    body: string;
    button: string;
  };
};
