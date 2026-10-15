import type { PageContent, PartnerCopy } from "../types";

export const page: PageContent = {
  metaTitle: "VIOF Partner with us",
  metaDescription:
    "Three conversations we want to have with investors, government and operators.",
  sections: [],
};

export const partner: PartnerCopy = {
  hero: {
    eyebrow: "Partner with us",
    title: "Three conversations we want to have.",
    body: "VIOF sits between capital, public institutions and operating companies. Tell us which conversation is yours.",
  },
  audiences: [
    {
      id: "investors",
      title: "Investors",
      body: "For institutional investors, family offices and qualified individuals who want considered exposure to Venezuela's industrial recovery, with institutional governance and a compliance-first approach.",
      expectLabel: "What you can expect",
      bullets: [
        "A clear thesis and a pipeline you can examine under confidentiality",
        "Staged capital deployment tied to verified milestones",
        "Co-investment alongside the principals and our operating partners",
        "Institutional reporting and direct access to the partners",
      ],
      ctaLabel: "Request investor materials",
      ctaHref: "contact",
      disclaimer:
        "Investor materials are provided only to qualified investors, on request and subject to verification.",
      counselNote: "[CONFIRM ELIGIBILITY LANGUAGE WITH SECURITIES COUNSEL]",
    },
    {
      id: "government",
      title: "Government and state enterprises",
      body: "For ministries, state corporations and public enterprises seeking a serious private counterpart to rehabilitate strategic assets.",
      expectLabel: "What you can expect",
      bullets: [
        "Operators with proven experience in comparable assets",
        "Structures that keep existing strategic assets under national ownership",
        "Transparent valuation of production against international benchmarks",
        "Complete technical work before commitments are requested",
        "Bilingual teams and documentation in Spanish and English",
      ],
      ctaLabel: "Request our institutional presentation",
      ctaHref: "contact",
    },
    {
      id: "operators",
      title: "Strategic and operating partners",
      body: "For industrial operators, commodity traders, engineering firms, lenders and insurers evaluating Venezuela.",
      expectLabel: "What you can expect",
      bullets: [
        "Proprietary origination from an operating network inside the country",
        "On-the-ground logistics, including river and heavy transport",
        "Deal structuring and the public-sector interface",
        "A US-based counterpart with institutional governance from day one",
      ],
      ctaLabel: "Discuss a project",
      ctaHref: "contact",
    },
  ],
  start: {
    title: "Start the conversation.",
    body: "We reply in English or Spanish.",
    email: "info@veniof.com",
  },
};
