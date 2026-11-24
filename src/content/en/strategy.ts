import type { PageContent } from '../types';

export const page: PageContent = {
  metaTitle: "VIOF Strategy",
  metaDescription: "Repair first. Then grow. How VIOF approaches industrial recovery in Venezuela.",
  sections: [
  {
    eyebrow: "Strategy",
    title: "Repair first.\nThen grow.",
    titleAs: "h1",
    paragraphs: [
      "Restore production at essential assets that already exist in Venezuela.",
      "We need a partnership with operators that have done it before, under structures that protect every party's interests.",
    ],
    callout: "Tania Murciano, Partner",
    ctas: [
      { label: "Partner with us", href: "partner" as const },
    ],
    image: "/industria.webp",
    variant: "navy" as const,
  },
  {
    eyebrow: "Why Venezuela, why now",
    title: "The constraint is capital, not resources.",
    titleAs: "h2",
    cards: [
      {
        title: "A world-class resource base",
        body: "Venezuela holds the world's largest proven oil reserves, major iron ore and bauxite deposits, abundant natural gas and significant hydroelectric capacity. Much of the infrastructure that serves them has gone without investment for decades, but remains recoverable.",
      },
      {
        title: "Repair, not build",
        body: "Rehabilitating assets with proven operating histories means less capital per unit of output, a shorter path to production and known performance baselines compared with greenfield development.",
      },
      {
        title: "An evolving US framework",
        body: "US sanctions policy toward Venezuela is dynamic, and recent general licenses authorize defined activities in specific sectors. We act only within those authorizations and structure our agreements accordingly.",
      },
      {
        title: "Early, disciplined positioning",
        body: "Serious partnerships take time to build. Being present early, with credible operators and complete technical work, matters more than being first to announce.",
      },
    ],
    variant: "light" as const,
  },
  {
    eyebrow: "The playbook",
    title: "Four repeatable ways we create value.",
    titleAs: "h2",
    cards: [
      {
        title: "De-bottlenecking",
        body: "**Venezuela's installed industrial base isn't obsolete** — it has simply gone two decades without the investment it needs. Targeted interventions such as relining, repairs, spare parts and working capital for critical inputs unlock stranded capacity and generate early cash flow.",
      },
      {
        title: "Downstream value capture",
        body: "**Moving up the value chain** from raw material to finished, export-ready product: ore to iron and steel products, bauxite to aluminum, gas to petrochemical derivatives. The margin sits between feedstock and international price.",
      },
      {
        title: "Enabling infrastructure",
        body: "Power, river transport, terminals and shared processing capacity serve every operator in a sector. **Owning or restoring them lowers costs across our projects and earns steady, service-based revenue from third parties.**",
      },
      {
        title: "Integrated platforms",
        body: "**As assets stabilize, we connect them**: production, logistics and energy working as one platform, attractive to long-term industrial and infrastructure owners. The sequence matters: early cash flow from de-bottlenecking funds the patience that downstream and platform investments require.",
      },
    ],
    variant: "navy" as const,
  },
  {
    eyebrow: "The playbook by sector",
    title: "One playbook across three sectors.",
    titleAs: "h2",
    cards: [
      {
        eyebrow: "What we look for",
        title: "Five tests every project must pass.",
        body: "Every project has to clear the same five tests before we commit:",
        bullets: [
          "It's a brownfield asset with a proven operating history and a clear path from capital to production.",
          "It's paired with an operator that has run comparable assets elsewhere, so capital isn't learning an industry from scratch.",
          "Its output is a finished, internationally tradeable product sold to creditworthy buyers.",
          "Its revenue is priced and settled in US dollars by design, so returns don't depend on local monetary conditions.",
          "Its capital is released in stages, against independently verified milestones, never in one commitment.",
        ],
        image: "/mineral.webp",
      },
      {
        eyebrow: "How we structure partnerships",
        title: "Structures designed to work for the State, the operator and the investor.",
        body: "For existing state assets, our preferred model pairs an international operator with a production-sharing agreement, which brings capital and know-how without transferring ownership. For new plants and infrastructure, the project company may own the asset outright. We choose the structure that fits each project.",
        image: "/industria.webp",
      },
      {
        eyebrow: "Risk and compliance",
        title: "Protection is structural, not an afterthought.",
        body: "US dollar revenue by design, through independent accounts and ring-fenced project vehicles. No project advances without sanctions counsel or the US authorizations it requires, and FCPA, anti-corruption and KYC/AML standards apply. Capital is released only against independently verified milestones.",
        image: "/gabarra_02.webp",
      },
    ],
    variant: "muted" as const,
  },
  ],
};
