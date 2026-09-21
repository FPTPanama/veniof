import type { PageContent } from "../types";

export const page: PageContent = {
  metaTitle: "VIOF Alianzas",
  metaDescription:
    "Tres conversaciones que queremos tener con inversionistas, gobierno y operadores.",
  sections: [
    {
      eyebrow: "Alianzas",
      title: "Tres conversaciones que queremos tener.",
      titleAs: "h1",
      paragraphs: [
        "VIOF se ubica entre el capital, las instituciones públicas y las empresas operadoras. Cuéntenos cuál es su conversación.",
      ],
      variant: "navy",
    },
    {
      eyebrow: "Con quién trabajamos",
      title: "Tres tipos de aliados, un mismo estándar de conducta.",
      titleAs: "h2",
      cards: [
        {
          title: "Inversionistas",
          body: "Para inversionistas institucionales, family offices y personas calificadas que desean una exposición meditada a la recuperación industrial de Venezuela, con gobernanza institucional y el cumplimiento como prioridad. Los materiales para inversionistas se entregan únicamente a inversionistas calificados, previa solicitud y verificación.",
        },
        {
          title: "Gobierno y empresas del Estado",
          body: "Para ministerios, corporaciones y empresas del Estado que buscan una contraparte privada seria para rehabilitar activos estratégicos.",
        },
        {
          title: "Socios estratégicos y operadores",
          body: "Para operadores industriales, comercializadoras de materias primas, firmas de ingeniería, financistas y aseguradoras que evalúan Venezuela.",
        },
      ],
      variant: "light",
    },
  ],
};
