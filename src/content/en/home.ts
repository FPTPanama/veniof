import type { PageContent } from '../types';

export const page: PageContent = {
  metaTitle: "VIOF Home",
  metaDescription: "VIOF is a US-managed investment fund rebuilding Venezuela’s industrial backbone.",
  sections: [
  {
    eyebrow: "A US fund with deep Venezuelan roots",
    title: "Rebuilding\nVenezuela's industrial backbone.",
    subtitle: "From extraction to export.",
    titleAs: "h1",
    callout: "A vital bridge for safe operations",
    paragraphs: [
      "We partner with **proven** operators and **Venezuelan institutions** to rehabilitate essential assets and bring them to international markets.",
    ],
    ctas: [
      { label: "Partner with us", href: "partner" as const },
    ],
    links: [
      { label: "Read our strategy", href: "strategy" as const },
    ],
    variant: "navy" as const,
  },
  {
    eyebrow: "Who we are",
    title: "A fund built by people who have run the assets.",
    titleAs: "h2",
    paragraphs: [
      "The **Venezuela Infrastructure Opportunity Fund** (VIOF) was built by a team that has owned and operated heavy industrial, logistics and construction businesses across **Venezuela**, the United States and **Guyana**. We do not only finance assets — we have built them, run them and put them back into production.",
      "Our principals are US persons and our fund entities are organized in the United States. Our operating roots are in **Venezuela**, where the team's companies have worked on the ground for more than sixty years and still move steel and heavy cargo along the **Orinoco** today.",
    ],
    cards: [
      {
        title: "River logistics",
        body: "River bulk transport and heavy lifting equipment in active service on the **Orinoco**.",
        image: "/mineral.webp",
      },
      {
        title: "Trading",
        body: "Ongoing trading in minerals, raw materials and finished products into regional and international markets.",
        image: "/mineral.webp",
      },
      {
        title: "Local knowledge",
        body: "First-hand knowledge of the industries we target, built over years of direct work in **Venezuela** and the region.",
        image: "/aluminio.webp",
      },
    ],
    variant: "light" as const,
  },
  {
    eyebrow: "Two anchors",
    title: "One foot in the United States. One in Venezuela.",
    titleAs: "h2",
    paragraphs: [
      "Most capital that looks at **Venezuela** doesn't have deep local operating relationships. Most local operators don't have access to **institutional-scale capital**. **VIOF** was built to bring both together in one structure.",
    ],
    cards: [
      {
        title: "The US anchor",
        bullets: [
          "US principals and fund entities organized in the United States",
          "Sanctions compliance as a gating requirement, reviewed by specialized OFAC counsel",
          "US banking, reporting and governance standards from day one",
          "More than two decades of board-level involvement in US heavy steel fabrication",
        ],
      },
      {
        title: "The Venezuela anchor",
        bullets: [
          "Active steel distribution, processing and heavy transport businesses",
          "Ocean-going tug and barge operations on the Orinoco, the logistics corridor at the center of our thesis",
          "Long-standing working relationships with Guayana's basic industries, their suppliers and engineering firms",
          "Native command of the legal, labor and operating environment",
        ],
      },
    ],
    variant: "muted" as const,
  },
  {
    eyebrow: "Our thesis",
    title: "How we think about the opportunity.",
    titleAs: "h2",
    paragraphs: [
      "Two decades of underinvestment left Venezuela's industrial base running far below its design capacity.",
      "Capital, well executed, can close most of that gap faster, and more cheaply, than starting over.",
    ],
    callout: "Nikola Kedzo, Partner",
    cards: [
      {
        title: "De-bottlenecking",
        body: "Targeted interventions that unlock stranded capacity in existing plants with proportionately low capital.",
      },
      {
        title: "Downstream value capture",
        body: "Converting raw outputs into higher-margin, export-ready products sold at international prices.",
      },
      {
        title: "Enabling infrastructure",
        body: "Power, river logistics, terminals and processing capacity that every operator in a sector depends on.",
      },
      {
        title: "Integrated platforms",
        body: "Linking rehabilitated assets into operating platforms that are stronger together than apart.",
      },
    ],
    links: [
      { label: "Explore the strategy", href: "strategy" as const },
    ],
    variant: "navy" as const,
  },
  {
    title: "From stranded capacity to product that ships.",
    paragraphs: [
      "Rehabilitate what already exists — plants, corridors and terminals — to return production to international markets.",
    ],
    // Placeholder: swap when a dedicated break image is ready.
    image: "/mineral.webp",
    variant: "navy" as const,
  },
  {
    eyebrow: "Where we focus",
    title: "Sectors whose products are priced and sold in US dollars.",
    titleAs: "h2",
    paragraphs: [
      "We look across three sectors whose products are priced and sold in US dollars.",
    ],
    cards: [
      {
        title: "Metals and basic industries",
        body: "Mine-to-metal value chains, steelmaking and building materials.",
      },
      {
        title: "Oil and gas",
        body: "Brownfield production enhancement and gas monetization, with no high-risk exploration.",
      },
      {
        title: "Logistics and infrastructure",
        body: "River transport, export terminals and hydroelectric rehabilitation that the other two depend on.",
      },
      {
        title: "Several projects in active development, alongside partners we've worked with before.",
        body: "We are in diligence and negotiation on multiple projects with internationally recognized industrial operators, commodity houses and engineering firms. Project and partner names remain confidential until our agreements allow disclosure.",
      },
    ],
    ctas: [
      { label: "See projects and track record", href: "projects" as const },
    ],
    variant: "light" as const,
  },
  {
    eyebrow: "Who we work with",
    title: "Three kinds of partners, one standard of conduct.",
    titleAs: "h2",
    cards: [
      {
        title: "Investors",
        body: "Institutional investors, family offices and qualified individuals seeking disciplined exposure to Venezuela's industrial recovery.",
      },
      {
        title: "Government and state enterprises",
        body: "Public institutions looking for a serious, well-capitalized counterpart that brings experienced operators and respects national ownership of strategic assets.",
      },
      {
        title: "Strategic and operating partners",
        body: "Operators, commodity traders, engineering firms and lenders that want a trusted local partner with institutional-grade governance.",
      },
    ],
    links: [
      { label: "Information for investors", href: "partner" as const },
      { label: "Working with the public sector", href: "partner" as const },
      { label: "Partnering on projects", href: "partner" as const },
    ],
    variant: "muted" as const,
  },
  {
    eyebrow: "Leadership",
    title: "Engineers, operators and investors.",
    titleAs: "h2",
    links: [
      { label: "Meet the team", href: "team" as const },
    ],
    variant: "light" as const,
  },
  ],
};
