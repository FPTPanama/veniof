import type { PageContent, PartnerCopy } from "../types";

export const page: PageContent = {
  metaTitle: "VIOF Alianzas",
  metaDescription:
    "Tres conversaciones que queremos tener con inversionistas, gobierno y operadores.",
  sections: [],
};

export const partner: PartnerCopy = {
  hero: {
    eyebrow: "Alianzas",
    title: "Tres conversaciones que queremos tener.",
    body: "VIOF se ubica entre el capital, las instituciones públicas y las empresas operadoras. Cuéntenos cuál es su conversación.",
  },
  audiences: [
    {
      id: "investors",
      title: "Inversionistas",
      body: "Para inversionistas institucionales, family offices y personas calificadas que desean una exposición meditada a la recuperación industrial de Venezuela, con gobernanza institucional y el cumplimiento como prioridad.",
      expectLabel: "Qué puede esperar",
      bullets: [
        "Una tesis clara y una cartera de proyectos que puede examinar bajo confidencialidad",
        "Despliegue de capital por etapas, atado a hitos verificados",
        "Coinversión junto a los socios y a nuestros operadores aliados",
        "Reportes institucionales y acceso directo a los socios",
      ],
      ctaLabel: "Solicitar materiales para inversionistas",
      ctaHref: "contact",
      disclaimer:
        "Los materiales para inversionistas se entregan únicamente a inversionistas calificados, previa solicitud y verificación.",
      counselNote:
        "[CONFIRMAR LENGUAJE DE ELEGIBILIDAD CON ASESORES DE VALORES]",
    },
    {
      id: "government",
      title: "Gobierno y empresas del Estado",
      body: "Para ministerios, corporaciones y empresas del Estado que buscan una contraparte privada seria para rehabilitar activos estratégicos.",
      expectLabel: "Qué puede esperar",
      bullets: [
        "Operadores con experiencia comprobada en activos comparables",
        "Estructuras que mantienen los activos estratégicos existentes bajo propiedad nacional",
        "Valoración transparente de la producción frente a marcadores internacionales",
        "Trabajo técnico completo antes de solicitar compromisos",
        "Equipos bilingües y documentación en español e inglés",
      ],
      ctaLabel: "Solicitar nuestra presentación institucional",
      ctaHref: "contact",
    },
    {
      id: "operators",
      title: "Socios estratégicos y operadores",
      body: "Para operadores industriales, comercializadoras de materias primas, firmas de ingeniería, financistas y aseguradoras que evalúan Venezuela.",
      expectLabel: "Qué puede esperar",
      bullets: [
        "Originación propia desde una red operativa dentro del país",
        "Logística en sitio, incluido transporte fluvial y pesado",
        "Estructuración de acuerdos e interlocución con el sector público",
        "Una contraparte con base en Estados Unidos, con gobernanza institucional desde el inicio",
      ],
      ctaLabel: "Conversar sobre un proyecto",
      ctaHref: "contact",
    },
  ],
  start: {
    title: "Inicie la conversación.",
    body: "Respondemos en español o en inglés.",
    email: "info@veniof.com",
  },
};
