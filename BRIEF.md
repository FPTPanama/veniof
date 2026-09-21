# Brief — Sitio web VIOF

**Proyecto:** Website corporativo del fondo de inversión  
**Dominio:** [www.veniof.com](https://www.veniof.com)  
**Deadline de presentación:** antes del jueves  
**Contacto / remitente del encargo:** (email interno)

---

## Contexto

Se recibió el diseño de la web del fondo de inversión (VIOF — Venezuela Infrastructure Opportunity Fund). El objetivo es tener el sitio listo para presentar antes del jueves.

El dominio fue comprado en Google: **www.veniof.com**.

---

## Credenciales

Las credenciales de acceso (dominio / hosting / Google) fueron compartidas por separado y **no se documentan en este archivo**.

> Mantenerlas fuera del repositorio y de cualquier brief versionado.

---

## Oficinas

| País | Dirección |
| --- | --- |
| **USA** | 2250 SW 3rd Ave, Suite 201, Miami, FL 33129 |
| **Venezuela** | Torre Las Mercedes, Urbanización Chuao, Municipio Chacao, Miranda |

---

## Pendientes conocidos

- [ ] **Fotos del team** — aún no disponibles; se recibirán en breve.
- [ ] Integrar fotos en Team/Equipo: colocar archivos en `web/public/team/` (p. ej. `nikola-kedzo.jpg`) y setear `imageSrc` en `src/content/en|es/teamMembers.ts`.
- [ ] Revisar que direcciones de oficinas aparezcan en footer / contacto según diseño.
- [ ] Publicar / apuntar el dominio `www.veniof.com` al deploy final.
- [ ] QA bilingüe EN / ES antes de la presentación.

---

## Alcance actual (referencia técnica)

Sitio Next.js en `web/` con rutas:

| EN | ES |
| --- | --- |
| `/en` | `/es` |
| `/en/strategy` | `/es/strategy` |
| `/en/projects` | `/es/projects` |
| `/en/team` | `/es/team` |
| `/en/partner` | `/es/partner` |

---

## Notas

- Diseño de partida: HTML revisado (`260920 VIOF Website - Revised.html`) + preview en `preview/`.
- Implementación: proyecto Next.js 16 en carpeta `web/`.
- Prioridad: demo presentable antes del jueves; fotos del team son el único bloqueo de contenido visual identificado por el cliente.
