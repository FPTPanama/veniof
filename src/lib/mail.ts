import nodemailer from "nodemailer";
import {
  EMAIL_SIGNATURE_HTML,
  EMAIL_SIGNATURE_TEXT,
} from "./emailSignature";

export const CONTACT_EMAIL = "info@veniof.com";

export type ContactPayload = {
  fullName: string;
  organization: string;
  email: string;
  country: string;
  role: string;
  message: string;
};

function requireEnv(name: string): string {
  const value = process.env[name]?.trim();
  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }
  return value;
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export function isMailConfigured(): boolean {
  return Boolean(
    process.env.SMTP_USER?.trim() && process.env.SMTP_PASS?.trim(),
  );
}

export function createMailTransport() {
  const user = requireEnv("SMTP_USER");
  const pass = requireEnv("SMTP_PASS");
  const host = process.env.SMTP_HOST?.trim() || "smtp.gmail.com";
  const port = Number(process.env.SMTP_PORT || "465");
  const secure =
    process.env.SMTP_SECURE === "true" ||
    process.env.SMTP_SECURE === "1" ||
    port === 465;

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  });
}

function buildContactHtml(payload: ContactPayload): string {
  const rows: [string, string][] = [
    ["Name", payload.fullName],
    ["Organization", payload.organization || "—"],
    ["Email", payload.email],
    ["Country", payload.country || "—"],
    ["Role", payload.role],
  ];

  const details = rows
    .map(
      ([label, value]) => `
      <tr>
        <td style="padding:4px 16px 4px 0;font-family:Arial,Helvetica,sans-serif;font-size:13px;color:#556276;vertical-align:top;white-space:nowrap;">${label}</td>
        <td style="padding:4px 0;font-family:Arial,Helvetica,sans-serif;font-size:13px;color:#101B2B;">${escapeHtml(value)}</td>
      </tr>`,
    )
    .join("");

  return `<!DOCTYPE html>
<html>
<body style="margin:0;padding:0;background:#EEF0F3;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#EEF0F3;padding:24px 12px;">
    <tr>
      <td align="center">
        <table width="560" cellpadding="0" cellspacing="0" border="0" style="max-width:560px;width:100%;background:#ffffff;border:1px solid #D2D8E0;">
          <tr>
            <td style="padding:20px 24px;background:#0A1A2F;">
              <div style="font-family:Georgia,'Times New Roman',serif;font-size:18px;letter-spacing:0.12em;color:#F4F1E8;">VIOF</div>
              <div style="font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#B9C3D1;margin-top:4px;">New website contact</div>
            </td>
          </tr>
          <tr>
            <td style="padding:24px;">
              <table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
                ${details}
              </table>
              <div style="margin-top:20px;padding-top:16px;border-top:1px solid #D2D8E0;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.6;color:#101B2B;white-space:pre-wrap;">${escapeHtml(payload.message)}</div>
            </td>
          </tr>
          <tr>
            <td style="padding:0 24px 24px 24px;">
              <div style="border-top:1px solid #D2D8E0;padding-top:18px;">
                ${EMAIL_SIGNATURE_HTML}
              </div>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export async function sendContactEmail(payload: ContactPayload) {
  const transport = createMailTransport();
  const to = process.env.CONTACT_TO?.trim() || CONTACT_EMAIL;
  const from = process.env.CONTACT_FROM?.trim() || process.env.SMTP_USER!.trim();

  const subject = `VIOF contact — ${payload.fullName}`;
  const text = [
    `Name: ${payload.fullName}`,
    `Organization: ${payload.organization || "—"}`,
    `Email: ${payload.email}`,
    `Country: ${payload.country || "—"}`,
    `Role: ${payload.role}`,
    "",
    payload.message,
    "",
    "—",
    EMAIL_SIGNATURE_TEXT,
  ].join("\n");

  await transport.sendMail({
    from: `VIOF Website <${from}>`,
    to,
    replyTo: payload.email,
    subject,
    text,
    html: buildContactHtml(payload),
  });
}
