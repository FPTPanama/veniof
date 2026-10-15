import type { PageContent } from '../types';

export const page: PageContent = {
  metaTitle: "VIOF Proyectos",
  metaDescription: "Hoy, proyectos en desarrollo. Un portafolio a medida que cierren.",
  sections: [
  {
    eyebrow: "Proyectos",
    title: "Hoy, proyectos en desarrollo. Un portafolio a medida que cierren.",
    titleAs: "h1",
    paragraphs: [
      "VIOF está en etapa de desarrollo. Nuestros primeros proyectos avanzan en debida diligencia y negociación con socios de esta escala, y esta página crecerá a medida que alcancen su cierre.",
    ],
    variant: "navy" as const,
  },
  {
    eyebrow: "Proyectos activos",
    title: "En qué estamos trabajando.",
    titleAs: "h2",
    paragraphs: [
      "Las descripciones son deliberadamente generales. Los nombres de los proyectos, las contrapartes y los socios son confidenciales.",
    ],
    cards: [
      {
        title: "Cadena de valor integrada de metales",
        body: "Rehabilitación integral de una cadena productiva de la mina al metal, con un operador industrial de primer nivel y un socio global de materias primas. Debida diligencia técnica",
      },
      {
        title: "Programa de producción de acero",
        body: "Un programa por ciclos que financia y suministra los insumos críticos para reactivar la producción de acero líquido en una planta existente, con comercialización del producto y capital liberado contra hitos verificados. Propuesta comercial",
      },
      {
        title: "Derivados a partir de gas",
        body: "Nueva capacidad aguas abajo para convertir materia prima nacional en productos químicos de mayor valor listos para exportar. Estudio de factibilidad en curso con una firma internacional de ingeniería. Estudio de factibilidad",
      },
      {
        title: "Industrias básicas y logística fluvial",
        body: "Rehabilitación o culminación de plantas e infraestructura logística existentes que sirven a las industrias básicas de Venezuela, bajo esquemas con socio operador.",
      },
    ],
    variant: "light" as const,
  },
  {
    eyebrow: "Cómo avanza un proyecto",
    title: "De la primera conversación a la primera producción.",
    titleAs: "h2",
    paragraphs: [
      "Empieza con la originación: oportunidades que provienen de nuestra propia red operativa y de socios que conocen los activos. Sigue la debida diligencia: visitas a planta, auditorías técnicas y modelos comerciales liderados por ingenieros y operadores, con solicitudes formales de información a cada entidad. Una vez que el acuerdo de alianza fija roles, producción compartida, precios y gobernanza con el dueño del activo y el operador, los acuerdos se condicionan a las aprobaciones estadounidenses y venezolanas que cada proyecto requiere. El capital se libera entonces por tramos o ciclos contra hitos verificados, y la relación continúa con gobernanza conjunta, reportes transparentes y mejora continua durante toda la vida del acuerdo.",
    ],
    variant: "navy" as const,
  },
  {
    eyebrow: "Trayectoria de los socios",
    title: "Lo que nuestros socios han ejecutado.",
    titleAs: "h2",
    paragraphs: [
      "Lo siguiente describe el trabajo previo y actual de los socios de VIOF a través de sus propias empresas. No son inversiones del fondo.",
    ],
    cards: [
      {
        title: "Más de US$600 MM en proyectos de acero pesado",
        body: "Puentes, estructuras industriales, recipientes a presión y estructuras costa afuera vendidos y gestionados en un negocio de manufactura pesada de acero para clientes industriales y comerciales, incluida la infraestructura de las industrias básicas. Uno de los socios de VIOF supervisó la fabricación, el transporte, la instalación y la puesta en marcha de la primera plataforma costa afuera construida en Venezuela.",
      },
      {
        title: "Distribución de acero y logística fluvial",
        body: "Un distribuidor líder de materias primas de acero con centro de servicio para planchas y perfiles preprocesados, una línea de transporte pesado y operación de remolcador y gabarra oceánicos con base en Puerto Ordaz.",
      },
      {
        title: "Suministro industrial y procura",
        body: "Cerca de veinte años atendiendo a operadores industriales y energéticos mediante empresas de procura, logística y comercio con operaciones en Caracas, Puerto Ordaz, Panamá y Estados Unidos.",
      },
      {
        title: "Hotel y centro comercial",
        body: "Un hotel Four Points by Sheraton de 172 habitaciones, salón de eventos y centro comercial en Georgetown, con un préstamo de construcción de BID Invest.",
      },
      {
        title: "Complejo de oficinas gubernamentales",
        body: "Diseño y construcción llave en mano de un complejo central de oficinas diseñado para 6.000 empleados públicos en Georgetown.",
      },
      {
        title: "Estadio de críquet",
        body: "Diseño y construcción llave en mano de un estadio de 7.350 asientos en Berbice.",
      },
      {
        title: "Fabricación de acero pesado",
        body: "Cargos de alta dirección en Owen Steel Company, en Columbia, Carolina del Sur, desde 2004, entre ellos director financiero, director de operaciones, director y asesor de la junta directiva. Entre los proyectos de la empresa en ese período figuran la Bank of America Tower, en Midtown Manhattan, y el Memorial y Museo del 11 de Septiembre.",
      },
      {
        title: "Desarrollo residencial",
        body: "Una empresa de inversión inmobiliaria liderada por socios de VIOF, con ventas de viviendas unifamiliares de alta gama en el sur de Florida superiores a US$150 millones.",
      },
    ],
    variant: "muted" as const,
  },
  {
    eyebrow: "Portafolio del fondo",
    title: "Aquí se publicarán los casos.",
    titleAs: "h2",
    paragraphs: [
      "A medida que los proyectos cierren y nuestros socios autoricen su divulgación, cada uno se publicará con su alcance, socios, estructura y resultados.",
    ],
    variant: "light" as const,
  },
  ],
};
