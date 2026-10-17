# Brief — Sitio web VIOF (Next.js)

**Proyecto:** Website corporativo del fondo de inversión  
**Dominio público:** [https://veniof.com](https://veniof.com) (con y sin `www`)  
**Repo de trabajo:** este (`veniof`) — app Next.js en la **raíz** (ya no en `web/`)  
**Referencia de copy/branding:** paquete estático en `../viof-website` (y `_archive/`)

---

## Decisión actual (oct 2026)

- El sitio en producción será el **Next.js** de este repo (sustituye al Drop estático).
- **Antes del cutover a Netlify:** iterar estilo + contenido en **local** (`pnpm dev` → http://localhost:3000).
- Formulario: SMTP Google Workspace → **`info@veniof.com`** (no `admin@`, no FormSubmit en Next).
- i18n: `en` / `es` (`/en/...`, `/es/...`).
- Mobile-first. Tipografía: Gelasio + Libre Franklin. Marca en `public/logo/` (versión para fondo claro).

---

## Paleta — regla 60-30-10

Tres colores. No se introducen fondos oscuros, crema, ni bloques de otro tono. El gris de apoyo y las líneas salen de `#0A1A2F` con transparencia, no de un cuarto color.

| Peso | Rol | Hex | Dónde |
| --- | --- | --- | --- |
| **60%** | Dominante | `#EEF0F3` | Fondo de toda la web: página, cabecera, pie, secciones |
| **30%** | Secundario | `#0A1A2F` | Tipografía, navegación, líneas, ilustración del puente |
| **10%** | Acento | `#C19B61` | Botón principal, estado activo, subrayado de enlace, filete corto del eyebrow |

El 10% no se usa para rellenar tarjetas ni para pintar secciones.

Tokens en `src/app/globals.css`: `--surface`, `--navy`, `--gold`.

---

## Oficinas (paquete oficial)

| País | Dirección |
| --- | --- |
| **USA** | 2250 SW 3rd Ave, Suite 201, Miami, FL 33129 |
| **Venezuela** | Carrera Guri, Torre CEM, Piso 4, Oficina 4-A, Sector Altavista, Municipio Caroní, Puerto Ordaz, Estado Bolívar |

Email público: **info@veniof.com**

---

## DNS / correo (no romper)

- Dominio en **Squarespace Domains**. Solo tocar registros **web** (A/CNAME) al cutover.
- **No tocar MX** (Workspace / `info@veniof.com`).
- Live hoy puede seguir siendo el estático en Netlify Drop hasta que decidamos cutover.

---

## Estado técnico ya hecho en este repo

- App aplanada a la raíz; `netlify.toml` sin `base = "web"`; redirects de HTML legacy.
- Privacy/Terms EN+ES (`/[locale]/privacy`), footer con links.
- Contacto → `info@`; oficinas Puerto Ordaz; assets logo/favicon/OG.
- SEO: indexable, canonical/hreflang helper en `src/lib/seo.ts`.
- Commit en `main` sin coautor Cursor. **No desplegar a prod** hasta afinar UI/copy.

Mocks/zip antiguos: `_archive/` (gitignored).

---

## Pendiente ahora

1. Revisar y mejorar **estilo / branding / mobile** en local.
2. Ajustar **contenido** EN/ES si diverge del paquete estático o del brief del cliente.
3. Cuando esté listo: cutover Netlify (build Next + env SMTP + dominio) y QA live.

---

## Credenciales

Fuera del repo. SMTP en `.env.local` (no commitear). Ver `.env.example`.

---

## Notas

- Referencia estática: `/Users/danielvazquez/Documents/repos/viof-website`
- Drive paquete: carpeta Drive → `260921VIOF_Website_Package.zip`
- `viof.com` (otro dominio) **no** es este proyecto.
