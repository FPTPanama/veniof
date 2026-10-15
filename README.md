# VIOF — Venezuela Infrastructure Opportunity Fund

Next.js (App Router) site for [veniof.com](https://veniof.com). English and Spanish.

## Stack

- Next.js 16 + React 19 + Tailwind CSS 4
- Content modules in `src/content/en` and `src/content/es`
- Contact form via Google Workspace SMTP → `info@veniof.com`

## Local

```bash
pnpm install
cp .env.example .env.local   # fill SMTP_PASS
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) (redirects to `/en` or `/es`).

## Deploy (Netlify)

- Build: `pnpm run build`
- Plugin: `@netlify/plugin-nextjs`
- Env vars: `SMTP_*`, `CONTACT_TO`, `CONTACT_FROM` (see `.env.example`)
- Legacy static HTML paths redirect in `netlify.toml`

## Brand

60-30-10: `#EEF0F3` ground, `#0A1A2F` type and structure, `#C19B61` accent. Fonts: Gelasio + Libre Franklin. Mark: `public/logo/`.
