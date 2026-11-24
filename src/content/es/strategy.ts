import type { PageContent } from '../types';

export const page: PageContent = {
  metaTitle: "VIOF Estrategia",
  metaDescription: "Primero reparar. Luego crecer. Cómo VIOF aborda la recuperación industrial.",
  sections: [
  {
    eyebrow: "Estrategia",
    title: "Primero reparar.\nLuego crecer.",
    titleAs: "h1",
    paragraphs: [
      "Restablecer la producción de activos esenciales que ya existen en Venezuela.",
      "Necesitamos una alianza con operadores que lo han hecho antes y bajo estructuras que protegen los intereses de todas las partes.",
    ],
    callout: "Tania Murciano, Socia",
    ctas: [
      { label: "Trabaje con nosotros", href: "partner" as const },
    ],
    image: "/industria.webp",
    variant: "navy" as const,
  },
  {
    eyebrow: "Por qué Venezuela, por qué ahora",
    title: "La restricción es el capital, no los recursos.",
    titleAs: "h2",
    cards: [
      {
        title: "Una base de recursos de clase mundial",
        body: "Venezuela posee las mayores reservas probadas de petróleo del mundo, importantes yacimientos de mineral de hierro y bauxita, gas natural abundante y una capacidad hidroeléctrica significativa. Buena parte de la infraestructura que los sirve lleva décadas sin la inversión que necesita, pero es recuperable.",
      },
      {
        title: "Reparar, no construir",
        body: "Rehabilitar activos con historial operativo comprobado implica menos capital por unidad de producción, un camino más corto hasta producir y líneas base de desempeño conocidas frente a un desarrollo desde cero.",
      },
      {
        title: "Un marco estadounidense en evolución",
        body: "La política de sanciones de Estados Unidos hacia Venezuela es dinámica, y licencias generales recientes autorizan actividades definidas en sectores específicos. Actuamos únicamente dentro de esas autorizaciones y estructuramos nuestros acuerdos en consecuencia.",
      },
      {
        title: "Posicionamiento temprano y disciplinado",
        body: "Las alianzas serias toman tiempo. Estar presentes temprano, con operadores creíbles y un trabajo técnico completo, importa más que ser los primeros en anunciar.",
      },
    ],
    variant: "light" as const,
  },
  {
    eyebrow: "El método",
    title: "Cuatro formas repetibles de crear valor.",
    titleAs: "h2",
    cards: [
      {
        title: "Eliminación de cuellos de botella",
        body: "**La base industrial instalada de Venezuela no está obsoleta**: simplemente lleva dos décadas sin la inversión que necesita. Intervenciones puntuales como revestimientos, reparaciones, repuestos y capital de trabajo para insumos críticos liberan capacidad detenida y generan flujo de caja temprano.",
      },
      {
        title: "Captura de valor aguas abajo",
        body: "**Avanzar en la cadena de valor**, de la materia prima al producto terminado listo para exportar: del mineral a productos de hierro y acero, de la bauxita al aluminio, del gas a derivados petroquímicos. El margen está entre el insumo y el precio internacional.",
      },
      {
        title: "Infraestructura habilitante",
        body: "La energía, el transporte fluvial, las terminales y la capacidad de procesamiento compartida sirven a todos los operadores de un sector. **Poseerlas o restaurarlas reduce los costos de nuestros proyectos y genera ingresos estables por servicios a terceros.**",
      },
      {
        title: "Plataformas integradas",
        body: "**A medida que los activos se estabilizan, los conectamos**: producción, logística y energía funcionando como una sola plataforma, atractiva para dueños industriales y de infraestructura de largo plazo. La secuencia importa: el flujo de caja temprano de la eliminación de cuellos de botella financia la paciencia que exigen las inversiones aguas abajo y de plataforma.",
      },
    ],
    variant: "navy" as const,
  },
  {
    eyebrow: "El método por sector",
    title: "Un mismo método en tres sectores.",
    titleAs: "h2",
    cards: [
      {
        eyebrow: "Qué buscamos",
        title: "Cinco pruebas que todo proyecto debe superar.",
        body: "Todo proyecto debe superar las mismas cinco pruebas antes de que nos comprometamos:",
        bullets: [
          "Que sea un activo existente con historial operativo comprobado y un camino claro del capital a la producción.",
          "Que esté asociado con un operador que ya ha manejado activos comparables en otros países, para que el capital no tenga que aprender una industria desde cero.",
          "Que su producto final sea terminado, comercializable internacionalmente y se venda a compradores solventes.",
          "Que sus ingresos se coticen y liquiden en dólares por diseño, de modo que los retornos no dependan de las condiciones monetarias locales.",
          "Que su capital se libere por etapas, contra hitos verificados de forma independiente, nunca en un solo desembolso.",
        ],
        image: "/mineral.webp",
      },
      {
        eyebrow: "Cómo estructuramos las alianzas",
        title: "Estructuras diseñadas para funcionar para el Estado, el operador y el inversionista.",
        body: "Para los activos existentes del Estado, nuestro modelo preferido combina un operador internacional con un contrato de producción compartida, que aporta capital y conocimiento sin transferir la propiedad. En plantas e infraestructura nuevas, la empresa del proyecto puede ser propietaria del activo. Elegimos la estructura que mejor se ajusta a cada proyecto.",
        image: "/industria.webp",
      },
      {
        eyebrow: "Riesgo y cumplimiento",
        title: "La protección es estructural, no un añadido.",
        body: "Ingresos en dólares por diseño, con cuentas independientes y vehículos de proyecto separados. Ningún proyecto avanza sin asesores de sanciones ni autorizaciones estadounidenses, y aplicamos FCPA, anticorrupción y KYC/AML. El capital se libera solo contra hitos verificados de forma independiente.",
        image: "/gabarra_02.webp",
      },
    ],
    variant: "muted" as const,
  },
  ],
};
