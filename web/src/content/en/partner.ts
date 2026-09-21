import type { PageContent } from "../types";

export const page: PageContent = {
  metaTitle: "VIOF Partner with us",
  metaDescription:
    "Three conversations we want to have with investors, government and operators.",
  sections: [
    {
      eyebrow: "Partner with us",
      title: "Three conversations we want to have.",
      titleAs: "h1",
      paragraphs: [
        "VIOF sits between capital, public institutions and operating companies. Tell us which conversation is yours.",
      ],
      variant: "navy",
    },
    {
      eyebrow: "Who we work with",
      title: "Three kinds of partners, one standard of conduct.",
      titleAs: "h2",
      cards: [
        {
          title: "Investors",
          body: "For institutional investors, family offices and qualified individuals who want considered exposure to Venezuela's industrial recovery, with institutional governance and a compliance-first approach. Investor materials are provided only to qualified investors, on request and subject to verification.",
        },
        {
          title: "Government and state enterprises",
          body: "For ministries, state corporations and public enterprises seeking a serious private counterpart to rehabilitate strategic assets.",
        },
        {
          title: "Strategic and operating partners",
          body: "For industrial operators, commodity traders, engineering firms, lenders and insurers evaluating Venezuela.",
        },
      ],
      variant: "light",
    },
  ],
};
