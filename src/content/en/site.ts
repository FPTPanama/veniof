import type { SiteCopy } from "../types";

export const site: SiteCopy = {
  brand: "VIOF",
  brandFull: "Venezuela Infrastructure Opportunity Fund",
  nav: [
    { key: "strategy", label: "Strategy" },
    { key: "projects", label: "Projects" },
    { key: "team", label: "Team" },
    { key: "partner", label: "Partner with us" },
    { key: "contact", label: "Contact" },
  ],
  langSwitch: { en: "EN", es: "ES" },
  footer: {
    blurb:
      "A US-managed investment fund rehabilitating Venezuela's essential industrial and infrastructure assets alongside experienced operating partners.",
    firmTitle: "The firm",
    firmLinks: [
      { label: "Home", href: "home" },
      { label: "Strategy", href: "strategy" },
      { label: "Projects", href: "projects" },
      { label: "Team", href: "team" },
    ],
    workTitle: "Work with us",
    workLinks: [
      { label: "Investors", href: "partner" },
      { label: "Government and state enterprises", href: "partner" },
      { label: "Strategic partners", href: "partner" },
      { label: "Contact", href: "contact" },
    ],
    officesTitle: "Offices",
    offices: [
      {
        country: "United States",
        address: "2250 SW 3rd Ave, Suite 201, Miami, FL 33129",
      },
      {
        country: "Venezuela",
        address:
          "Carrera Guri, Torre CEM, Piso 4, Oficina 4-A, Sector Altavista, Municipio Caroní, Puerto Ordaz, Estado Bolívar",
      },
    ],
    email: "info@veniof.com",
    legal:
      "This website is provided for general information only. It is not an offer to sell or a solicitation of an offer to buy any security or any interest in a fund. Any such offer will be made only to qualified investors through definitive offering documents. VIOF conducts its activities in compliance with applicable United States sanctions regulations and the laws of the jurisdictions where it operates.",
    legalNote: "Legal notice: final text to be approved by counsel.",
    rights:
      "© 2026 Venezuela Infrastructure Opportunity Fund. All rights reserved.",
    terms: "Terms of use",
    privacy: "Privacy",
  },
  contact: {
    eyebrow: "Contact",
    title: "Start the conversation.",
    subtitle: "We reply in English or Spanish.",
    fields: {
      fullName: "Full name",
      organization: "Organization",
      email: "Email",
      country: "Country",
      role: "I am contacting VIOF as",
      rolePlaceholder: "Choose one",
      message: "Message",
      ack: "I understand this site is informational and does not constitute an offer of securities.",
    },
    roleOptions: [
      "Investor",
      "Government or state enterprise",
      "Operator or strategic partner",
      "Engineering or services firm",
      "Press",
      "Other",
    ],
    submit: "Send message",
    sending: "Sending…",
    success: "Thank you. We will reply shortly.",
    error: "Something went wrong. Please email info@veniof.com directly.",
    officesTitle: "Offices",
    emailTitle: "Email",
    investorEmailLabel: "Investor relations",
  },
  ctaBanner: {
    eyebrow: "Next step",
    title: "Let us talk about what can be rebuilt.",
    body: "Whether you invest, operate or represent a public institution, we want a serious conversation about specific assets and how to put them back to work.",
    button: "Partner with us",
  },
};
