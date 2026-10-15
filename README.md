# VIOF — Venezuela Infrastructure Opportunity Fund

Next.js (App Router) site for [veniof.com](https://veniof.com). English and Spanish.

## Stack

- Next.js 16 + React 19 + Tailwind CSS 4
- Content modules in `src/content/en` and `src/content/es`
- Contact form via Google Workspace SMTP → `info@veniof.com`

## Local

```bash
npm install
cp .env.example .env.local   # fill SMTP_PASS
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) (redirects to `/en` or `/es`).

## Deploy (Netlify)

- Build: `npm run build`
- Plugin: `@netlify/plugin-nextjs`
- Env vars: `SMTP_*`, `CONTACT_TO`, `CONTACT_FROM` (see `.env.example`)
- Legacy static HTML paths redirect in `netlify.toml`

## Brand

Navy `#0A1A2F`, gold `#CFB27A`, cream `#F4F1E8`. Fonts: Gelasio + Libre Franklin. Mark: `public/logo/`.
