import type { PageContent } from '../types';

export const page: PageContent = {
  metaTitle: "VIOF Inicio",
  metaDescription: "VIOF es un fondo de inversión administrado desde EE. UU. que reconstruye la base industrial de Venezuela.",
  sections: [
  {
    eyebrow: "Un fondo estadounidense con profundas raíces venezolanas",
    title: "Reconstruir la base industrial de\nVenezuela.",
    subtitle: "De la extracción a la exportación.",
    titleAs: "h1",
    callout: "Un puente vital para operaciones seguras",
    paragraphs: [
      "Nos asociamos con operadores de **trayectoria comprobada** e **instituciones venezolanas** para rehabilitar activos esenciales y llevarlos a mercados internacionales.",
    ],
    ctas: [
      { label: "Trabaje con nosotros", href: "partner" as const },
    ],
    links: [
      { label: "Conozca nuestra estrategia", href: "strategy" as const },
    ],
    variant: "navy" as const,
  },
  {
    eyebrow: "Quiénes somos",
    title: "Un fondo creado por quienes han operado los activos.",
    titleAs: "h2",
    paragraphs: [
      "El **Venezuela Infrastructure Opportunity Fund** (VIOF) nació de un equipo que ha sido dueño y operador de empresas de industria pesada, logística y construcción en **Venezuela**, Estados Unidos y **Guyana**. No financiamos activos ajenos: los hemos construido, operado y puesto a producir con criterio propio.",
      "Nuestros socios principales son personas estadounidenses y las entidades del fondo están constituidas en Estados Unidos. Nuestras raíces operativas están en **Venezuela**, donde las empresas del equipo llevan más de sesenta años en el terreno y hoy siguen moviendo acero y carga pesada por el **Orinoco**.",
    ],
    cards: [
      {
        title: "Logística fluvial",
        body: "Transporte fluvial de carga a granel y equipos de izamiento pesado en servicio activo por el **Orinoco**.",
        image: "/gabarra_02.webp",
      },
      {
        title: "Comercialización",
        body: "Comercialización continua de minerales, materias primas y productos terminados hacia mercados regionales e internacionales.",
        image: "/mineral.webp",
      },
      {
        title: "Conocimiento local",
        body: "Conocimiento de primera mano de las industrias que nos interesan, forjado en años de trabajo directo en **Venezuela** y la región.",
        image: "/aluminio.webp",
      },
    ],
    variant: "light" as const,
  },
  {
    eyebrow: "Dos anclajes",
    title: "Un pie en Estados Unidos. Otro en Venezuela.",
    titleAs: "h2",
    paragraphs: [
      "La mayor parte del capital que mira hacia **Venezuela** no tiene relaciones operativas locales profundas. La mayoría de los operadores locales no tiene acceso a **capital de escala institucional**. **VIOF** se creó para reunir ambas cosas en una sola estructura.",
    ],
    cards: [
      {
        title: "El anclaje en Estados Unidos",
        bullets: [
          "Socios principales estadounidenses y entidades del fondo constituidas en Estados Unidos",
          "El cumplimiento de sanciones como requisito previo, revisado por asesores especializados en OFAC",
          "Estándares estadounidenses de banca, reportes y gobernanza desde el primer día",
          "Más de dos décadas de participación a nivel de junta directiva en la fabricación de acero pesado en Estados Unidos",
        ],
      },
      {
        title: "El anclaje en Venezuela",
        bullets: [
          "Empresas activas de distribución y procesamiento de acero y de transporte pesado",
          "Operación de remolcadores y gabarras oceánicas en el Orinoco, el corredor logístico en el centro de nuestra tesis",
          "Relaciones de trabajo de larga data con las empresas básicas de Guayana, sus proveedores y firmas de ingeniería",
          "Dominio propio del entorno legal, laboral y operativo",
        ],
      },
    ],
    variant: "muted" as const,
  },
  {
    eyebrow: "Nuestra tesis",
    title: "Así pensamos la oportunidad.",
    titleAs: "h2",
    paragraphs: [
      "Dos décadas de subinversión dejaron la base industrial de Venezuela operando muy por debajo de su capacidad de diseño.",
      "El capital, bien ejecutado, puede cerrar la mayor parte de esa brecha más rápido y a menor costo que empezar de cero.",
    ],
    callout: "Nikola Kedzo, Socio",
    cards: [
      {
        title: "Eliminación de cuellos de botella",
        body: "Intervenciones puntuales que liberan capacidad detenida en plantas existentes con un capital proporcionalmente bajo.",
      },
      {
        title: "Captura de valor aguas abajo",
        body: "Transformar productos primarios en productos terminados de mayor margen, listos para exportar a precios internacionales.",
      },
      {
        title: "Infraestructura habilitante",
        body: "Energía, logística fluvial, terminales y capacidad de procesamiento de las que depende todo operador de un sector.",
      },
      {
        title: "Plataformas integradas",
        body: "Conectar los activos rehabilitados en plataformas operativas que valen más juntas que por separado.",
      },
    ],
    links: [
      { label: "Explore la estrategia", href: "strategy" as const },
    ],
    variant: "navy" as const,
  },
  {
    title: "De la capacidad detenida al producto que se exporta.",
    paragraphs: [
      "Rehabilitar lo que ya existe — plantas, corredores y terminales — para devolver producción a mercados internacionales.",
    ],
    // Placeholder: swap when a dedicated break image is ready.
    image: "/mineral.webp",
    variant: "navy" as const,
  },
  {
    eyebrow: "Dónde nos enfocamos",
    title: "Sectores cuyos productos se cotizan y se venden en dólares.",
    titleAs: "h2",
    paragraphs: [
      "Miramos hacia tres sectores cuyos productos se cotizan y se venden en dólares: cadenas de valor de la mina al metal, siderurgia y materiales de construcción en metales e industrias básicas; mejora de producción en campos maduros y monetización de gas en petróleo y gas, sin exploración de alto riesgo; y el transporte fluvial, las terminales de exportación y la rehabilitación hidroeléctrica de los que dependen los otros dos.",
    ],
    cards: [
      {
        title: "Varios proyectos en desarrollo activo, junto a socios con los que ya hemos trabajado.",
        body: "Adelantamos procesos de debida diligencia y negociación en múltiples proyectos con operadores industriales, casas de materias primas y firmas de ingeniería de reconocimiento internacional. Los nombres de los proyectos y de los socios se mantienen confidenciales hasta que nuestros acuerdos permitan divulgarlos.",
      },
    ],
    ctas: [
      { label: "Ver proyectos y trayectoria", href: "projects" as const },
    ],
    variant: "light" as const,
  },
  {
    eyebrow: "Con quién trabajamos",
    title: "Tres tipos de aliados, un mismo estándar de conducta.",
    titleAs: "h2",
    cards: [
      {
        title: "Inversionistas",
        body: "Inversionistas institucionales, family offices y personas calificadas que buscan una exposición disciplinada a la recuperación industrial de Venezuela.",
      },
      {
        title: "Gobierno y empresas del Estado",
        body: "Instituciones públicas que buscan una contraparte seria y bien capitalizada, que aporte operadores con experiencia comprobada y respete la propiedad nacional de los activos estratégicos.",
      },
      {
        title: "Socios estratégicos y operadores",
        body: "Operadores, comercializadoras de materias primas, firmas de ingeniería y financistas que desean un socio local confiable con gobernanza de nivel institucional.",
      },
    ],
    links: [
      { label: "Información para inversionistas", href: "partner" as const },
      { label: "Trabajar con el sector público", href: "partner" as const },
      { label: "Alianzas en proyectos", href: "partner" as const },
    ],
    variant: "muted" as const,
  },
  {
    eyebrow: "Liderazgo",
    title: "Ingenieros, operadores e inversionistas.",
    titleAs: "h2",
    links: [
      { label: "Conozca al equipo", href: "team" as const },
    ],
    variant: "light" as const,
  },
  ],
};
