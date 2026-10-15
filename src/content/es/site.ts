import type { SiteCopy } from "../types";

export const site: SiteCopy = {
  brand: "VIOF",
  brandFull: "Venezuela Infrastructure Opportunity Fund",
  nav: [
    { key: "strategy", label: "Estrategia" },
    { key: "projects", label: "Proyectos" },
    { key: "team", label: "Equipo" },
    { key: "partner", label: "Alianzas" },
    { key: "contact", label: "Contacto" },
  ],
  langSwitch: { en: "EN", es: "ES" },
  footer: {
    blurb:
      "Fondo de inversión administrado desde Estados Unidos que rehabilita activos industriales y de infraestructura esenciales de Venezuela junto a socios operadores con experiencia comprobada.",
    firmTitle: "La firma",
    firmLinks: [
      { label: "Inicio", href: "home" },
      { label: "Estrategia", href: "strategy" },
      { label: "Proyectos", href: "projects" },
      { label: "Equipo", href: "team" },
    ],
    workTitle: "Trabaje con nosotros",
    workLinks: [
      { label: "Inversionistas", href: "partner" },
      { label: "Gobierno y empresas del Estado", href: "partner" },
      { label: "Socios estratégicos", href: "partner" },
      { label: "Contacto", href: "contact" },
    ],
    officesTitle: "Oficinas",
    offices: [
      {
        country: "Estados Unidos",
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
      "Este sitio web se ofrece únicamente con fines informativos. No constituye una oferta de venta ni una solicitud de oferta de compra de valores ni de participaciones en fondo alguno. Cualquier oferta se hará exclusivamente a inversionistas calificados mediante documentos definitivos de oferta. VIOF desarrolla sus actividades en cumplimiento de las regulaciones de sanciones de los Estados Unidos y de las leyes de las jurisdicciones donde opera.",
    legalNote:
      "Aviso legal: texto final sujeto a aprobación de los asesores legales.",
    rights:
      "© 2026 Venezuela Infrastructure Opportunity Fund. Todos los derechos reservados.",
    terms: "Términos de uso",
    privacy: "Privacidad",
  },
  contact: {
    eyebrow: "Contacto",
    title: "Inicie la conversación.",
    subtitle: "Respondemos en español o en inglés.",
    fields: {
      fullName: "Nombre completo",
      organization: "Organización",
      email: "Correo electrónico",
      country: "País",
      role: "Me comunico con VIOF como",
      rolePlaceholder: "Seleccione una opción",
      message: "Mensaje",
      ack: "Entiendo que este sitio es informativo y no constituye una oferta de valores.",
    },
    roleOptions: [
      "Inversionista",
      "Gobierno o empresa del Estado",
      "Operador o socio estratégico",
      "Firma de ingeniería o servicios",
      "Prensa",
      "Otro",
    ],
    submit: "Enviar mensaje",
    sending: "Enviando…",
    success: "Gracias. Le responderemos en breve.",
    error: "Algo salió mal. Escriba directamente a info@veniof.com.",
    officesTitle: "Oficinas",
    emailTitle: "Correo",
    investorEmailLabel: "Relación con inversionistas",
  },
  ctaBanner: {
    eyebrow: "Siguiente paso",
    title: "Hablemos de lo que se puede reconstruir.",
    body: "Ya sea que invierta, opere o represente a una institución pública, queremos una conversación seria sobre activos concretos y cómo volver a ponerlos a producir.",
    button: "Trabaje con nosotros",
  },
};
