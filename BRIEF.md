# Brief — Sitio web VIOF

**Proyecto:** Website corporativo del fondo de inversión  
**Dominio público:** [https://veniof.com](https://veniof.com) (con y sin `www`)  
**Deadline de presentación:** antes del jueves  
**Contacto / remitente del encargo:** (email interno)

---

## Contexto

Se recibió el diseño y, posteriormente, el **paquete oficial estático** del sitio VIOF (Venezuela Infrastructure Opportunity Fund).

| Recurso | Detalle |
| --- | --- |
| Paquete oficial | [Carpeta Drive](https://drive.google.com/drive/folders/1fHlFsiASm2PJ-TrLUA0GatskTt3Z_Ai-?usp=sharing) → `260921VIOF_Website_Package.zip` |
| Tipo de sitio | **Estático** (HTML + CSS + JS + imágenes). Sin BD ni servidor de aplicación. |
| Carpeta a publicar | Contenido de `viof-website/` en la **raíz** del hosting |
| Inicio EN | `index.html` |
| Páginas ES | carpeta `es/` |
| README | `README.txt` dentro del paquete (detalle por punto) |

Dominio **veniof.com**: Squarespace Domains (ex-Google Domains).  
> Existe también `viof.com` (GoDaddy/Cloudflare); **no** es el dominio de este proyecto.

---

## Instrucciones del proveedor del paquete (obligatorias)

1. **Subir tal cual.** El contenido de `viof-website` va en la raíz del servidor, conservando carpetas. No reestructurar.
2. **Dominio y HTTPS.** Preparado para `https://veniof.com`. Apuntar apex + `www` y activar HTTPS. Si la URL final fuera otra, buscar/reemplazar en los **12 HTML**.
3. **No tocar registros de correo (MX).** Solo cambiar registros **web** (A/AAAA/CNAME). Los MX que entregan a **info@veniof.com** deben quedar intactos. Ese buzón debe existir y atenderse antes del lanzamiento. Formulario y aviso de privacidad apuntan ahí.
4. **404.** Configurar `404.html` como página “no encontrado” si el hosting lo permite.
5. **Formulario.** Usa **FormSubmit** → `info@veniof.com`. Tras publicar, enviar un mensaje de prueba; llega un mail de **activación** (revisar spam). Un clic en el enlace activa el flujo; si no se activa, el formulario abre el cliente de correo del visitante.
6. **QA post-publish.** EN/ES, selector de idioma, Privacidad y Términos en el pie, vista móvil, envío real del formulario.
7. **No editar HTML a mano.** Cambios de contenido → pedir **paquete nuevo** al proveedor, para mantener EN/ES y las 12 páginas consistentes.
8. **Analítica / cookies.** Si se agregan después, actualizar primero el aviso de privacidad.

---

## Hosting previsto

- Preferencia del cliente: **Netlify** (ya tienen espacio).
- Alternativa válida: cualquier hosting estático (también Vercel).
- **Squarespace** = dominio/DNS, no el lugar donde se “sube” este HTML como sitio Squarespace.

### Pasos recomendados (Netlify + Squarespace)

1. Descargar y descomprimir `260921VIOF_Website_Package.zip`.
2. Crear sitio en Netlify apuntando a la carpeta `viof-website` (o repo con solo ese contenido en raíz / `publish` directory).
3. Configurar **404** → `/404.html`.
4. En Squarespace Domains: apuntar **solo** registros web a Netlify (A/CNAME según indique Netlify). **No modificar MX.**
5. Activar HTTPS en Netlify.
6. Probar formulario → activar FormSubmit en `info@veniof.com`.
7. QA checklist del punto 6.

---

## Credenciales

Credenciales de dominio / hosting / Google se manejan **fuera** de este archivo y del repositorio.

---

## Oficinas

| País | Dirección |
| --- | --- |
| **USA** | 2250 SW 3rd Ave, Suite 201, Miami, FL 33129 |
| **Venezuela** | Torre Las Mercedes, Urbanización Chuao, Municipio Chacao, Miranda |

---

## Pendientes / checklist de lanzamiento

- [ ] Descargar paquete oficial desde Drive y revisar `README.txt`
- [ ] Publicar contenido de `viof-website/` en Netlify (raíz del sitio)
- [ ] Apuntar `veniof.com` + `www` (solo DNS web) a Netlify; HTTPS ON
- [ ] Verificar que **MX** de `info@veniof.com` no se alteraron
- [ ] Confirmar que el buzón **info@veniof.com** existe y se atiende
- [ ] Configurar `404.html`
- [ ] Activar FormSubmit con un envío de prueba
- [ ] QA EN/ES, móvil, Privacidad, Términos, formulario
- [ ] Aclarar con el cliente el trabajo Next.js en `web/` vs paquete estático oficial (el paquete manda para el lanzamiento)

---

## Trabajo paralelo en este repo (referencia)

En `web/` hay una implementación **Next.js** hecha a partir de mocks HTML previos (App Router, i18n, SMTP Workspace a `admin@veniof.com`, etc.).

Según el paquete oficial del **21 Sep**:

- El sitio a publicar es el **estático** del zip.
- Correo del formulario oficial: **info@veniof.com** + FormSubmit (no editar a mano; no sustituir por otra integración sin acuerdo).
- Contenido: no parchear HTML; pedir paquete nuevo al proveedor.

El Next.js puede servir como laboratorio / backup, pero **no reemplaza** el paquete oficial salvo decisión explícita del cliente.

---

## Notas

- Diseño / mocks previos: `260920 VIOF Website - Revised.html`, carpeta `preview/`.
- Prioridad: publicar el paquete estático en `https://veniof.com` con correo y DNS correctos.
