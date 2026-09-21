import type { PageContent } from '../types';

export const page: PageContent = {
  metaTitle: "VIOF Projects",
  metaDescription: "A pipeline today. A portfolio as projects close.",
  sections: [
  {
    eyebrow: "Projects",
    title: "A pipeline today. A portfolio as projects close.",
    titleAs: "h1",
    paragraphs: [
      "VIOF is in its development stage. Our first projects are advancing through diligence and negotiation with partners who operate at this scale, and this page will grow as they reach close.",
    ],
    variant: "navy" as const,
  },
  {
    eyebrow: "Active pipeline",
    title: "What we are working on now.",
    titleAs: "h2",
    paragraphs: [
      "Descriptions are intentionally general. Project names, counterparties and partners are confidential.",
    ],
    cards: [
      {
        title: "Integrated metals value chain",
        body: "Comprehensive rehabilitation of a mine-to-metal production chain, with a major industrial operator and a global commodities partner. Technical due diligence",
      },
      {
        title: "Steel production program",
        body: "A cycle-based program that finances and supplies critical inputs to restart liquid steel production at an existing mill, with product offtake and capital released against verified milestones. Commercial proposal",
      },
      {
        title: "Gas-based derivatives",
        body: "New downstream capacity converting domestic feedstock into higher-value, export-ready chemical products. Feasibility work is under way with an international engineering firm. Feasibility study",
      },
      {
        title: "Basic industries and river logistics",
        body: "Rehabilitation or completion of existing plants and logistics infrastructure that serve Venezuela's basic industries, under operator-partner structures. Under evaluation",
      },
    ],
    variant: "light" as const,
  },
  {
    eyebrow: "How a project advances",
    title: "From first conversation to first production.",
    titleAs: "h2",
    paragraphs: [
      "It starts with origination — opportunities from our own operating network and from partners who know the assets — then diligence: site visits, technical audits and commercial models led by engineers and operators, with formal information requests to each entity. Once a partnership agreement sets roles, production sharing, pricing and governance with the asset owner and operator, agreements are made contingent on the US and Venezuelan authorizations each project requires. Capital is then released in tranches or cycles against verified milestones, and the relationship continues through joint governance, transparent reporting and continuous improvement for the life of the agreement.",
    ],
    variant: "muted" as const,
  },
  {
    eyebrow: "Principals' track record",
    title: "What our principals have delivered.",
    titleAs: "h2",
    paragraphs: [
      "The following describes prior and ongoing work of VIOF's principals through their own companies. These are not investments of the fund.",
    ],
    cards: [
      {
        title: "US$600MM+ in heavy steel projects",
        body: "Bridges, industrial structures, pressure vessels and offshore structures sold and managed in a heavy steel manufacturing business serving industrial and commercial clients, including the infrastructure of the basic industries. One of VIOF's partners oversaw the fabrication, transport, installation and commissioning of the first offshore platform built in Venezuela.",
      },
      {
        title: "Steel distribution and river logistics",
        body: "A leading distributor of steel raw materials with a service center for pre-processed plate and shapes, a heavy transport line and ocean-going tug and barge operations based in Puerto Ordaz.",
      },
      {
        title: "Industrial supply and procurement",
        body: "Close to twenty years serving industrial and energy operators through procurement, logistics and trading companies with operations in Caracas, Puerto Ordaz, Panama and the United States.",
      },
      {
        title: "Hotel and retail development",
        body: "A 172-room Four Points by Sheraton hotel, event hall and retail center in Georgetown, with a construction loan from IDB Invest.",
      },
      {
        title: "Government office complex",
        body: "Turnkey design-build of a central office complex designed for 6,000 public employees in Georgetown.",
      },
      {
        title: "Cricket stadium",
        body: "Turnkey design-build of a 7,350-seat stadium in Berbice.",
      },
      {
        title: "Heavy steel fabrication",
        body: "Senior roles at Owen Steel Company in Columbia, South Carolina, since 2004, including chief financial officer, chief operating officer, director and board advisor. Company projects in that period include the Bank of America Tower in Midtown Manhattan and the 9/11 Memorial and Museum.",
      },
      {
        title: "Residential development",
        body: "A real estate investment company led by VIOF partners, with sales of high-end single-family homes in South Florida in excess of US$150 million.",
      },
    ],
    variant: "light" as const,
  },
  {
    eyebrow: "Fund portfolio",
    title: "Case studies will appear here.",
    titleAs: "h2",
    paragraphs: [
      "As projects reach close and our partners authorize disclosure, each will be published with its scope, partners, structure and results.",
    ],
    variant: "muted" as const,
  },
  ],
};
