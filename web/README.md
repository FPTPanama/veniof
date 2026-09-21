# VIOF Website

Sitio corporativo de **Venezuela Infrastructure Opportunity Fund (VIOF)**, migrado a **Next.js 16.3.5** (App Router, React 19, Tailwind CSS 4).

## Arranque

```bash
cd web
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) — redirige a `/en` o `/es` según `Accept-Language`.

## Rutas

| EN | ES |
| --- | --- |
| `/en` | `/es` |
| `/en/strategy` | `/es/strategy` |
| `/en/projects` | `/es/projects` |
| `/en/team` | `/es/team` |
| `/en/partner` | `/es/partner` |

## Estructura

- `src/app/[locale]/…` — páginas por idioma
- `src/content/` — copy EN/ES extraído del borrador HTML
- `src/components/` — header, secciones, CTA, footer
- `src/proxy.ts` — redirección de locale (convención Next.js 16)

Los HTML originales y la carpeta `preview/` quedan en la raíz del repo como referencia.
