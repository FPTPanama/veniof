VIOF WEBSITE: PUBLISHING PACKAGE
=================================

What this is
------------
A complete static website: plain HTML, CSS and JavaScript. It needs no database,
no server code and no build step. Upload the CONTENTS of this folder to the web
root of any host and it works.

  index.html, strategy.html, projects.html, team.html, partner.html, privacy.html   English
  es/index.html, es/estrategia.html, es/proyectos.html, es/equipo.html,
  es/alianzas.html, es/privacidad.html                                              Spanish
  assets/site.css, assets/site.js                                                   styles and behaviour
  assets/img/share.png                                                              link-preview image
  assets/logo/                                                                      the logo mark as SVG
  assets/favicon.svg, robots.txt, 404.html

To preview before publishing, open index.html in a browser. All links are relative.

How to publish
--------------
Any of these works. Keep the folder structure exactly as it is.
  1. Netlify or Cloudflare Pages: create a site and drag this folder in. Then point
     the domain at it and turn on HTTPS (both do this automatically).
  2. Traditional hosting (cPanel, GoDaddy, etc.): upload the contents to public_html.
  3. Amazon S3 + CloudFront, Azure Static Web Apps, GitHub Pages: upload as a static site.
Set 404.html as the custom not-found page if the host asks for one.

Domain
------
The pages assume the site will live at https://veniof.com. That address appears
only in the <head> of each page (canonical, hreflang and link-preview tags). If
the final address is different, find and replace "https://veniof.com" in the
twelve .html files.

Contact form (one step required)
--------------------------------
The form on partner.html and es/alianzas.html sends submissions to
info@veniof.com through FormSubmit (formsubmit.co), a free form-to-email relay.
No account is needed, but it must be activated once:
  1. After the site is live, send one test message through the form.
  2. FormSubmit emails an activation link to info@veniof.com. Click it.
  3. From then on every submission arrives in that inbox. Replying to the email
     replies to the person who wrote.
If a submission cannot be delivered, the form opens the visitor's email program
with the message addressed to info@veniof.com, so nothing is lost.
The form requires the visitor to tick the acknowledgment that the site is
informational and not an offer of securities.
To use a different service (Formspree, Netlify Forms, your own endpoint), change
the single fetch() address in assets/site.js. To change the destination address,
edit data-to="info@veniof.com" in partner.html and es/alianzas.html.

Editing content
---------------
Text is ordinary HTML inside each page and can be edited with any text editor.
The same header and footer are repeated in every page, so a change to the menu,
the addresses or the footer notice has to be made in all twelve files (or ask
for a regenerated package). The team page shows names, titles and biographies
only, without photographs.

Notes
-----
  * Fonts load from Google Fonts. Georgia is used where it is installed.
  * No cookies, analytics or trackers are included. If analytics are added later,
    update privacy.html and es/privacidad.html.
  * privacy.html / es/privacidad.html hold the privacy notice and terms of use.
  * Animations are disabled automatically for visitors who ask their device to
    reduce motion.
