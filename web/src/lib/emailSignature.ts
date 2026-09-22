/** Shared VIOF email signature — form notifications + Gmail paste. */

export const EMAIL_SIGNATURE_HTML = `
<table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;font-family:Georgia,'Times New Roman',serif;color:#101B2B;">
  <tr>
    <td style="padding:0;">
      <table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
        <tr>
          <td style="padding:0 0 10px 0;border-bottom:2px solid #B08D57;">
            <div style="font-family:Georgia,'Times New Roman',serif;font-size:22px;letter-spacing:0.14em;color:#0A1A2F;line-height:1.1;">VIOF</div>
            <div style="font-family:Arial,Helvetica,sans-serif;font-size:11px;letter-spacing:0.02em;color:#556276;line-height:1.35;margin-top:6px;">
              Venezuela Infrastructure Opportunity Fund
            </div>
          </td>
        </tr>
        <tr>
          <td style="padding:12px 0 0 0;font-family:Arial,Helvetica,sans-serif;font-size:13px;line-height:1.55;color:#36435A;">
            <a href="mailto:admin@veniof.com" style="color:#0A1A2F;text-decoration:none;font-weight:600;">admin@veniof.com</a>
            <span style="color:#B08D57;">&nbsp;·&nbsp;</span>
            <a href="https://www.veniof.com" style="color:#0A1A2F;text-decoration:none;font-weight:600;">www.veniof.com</a>
          </td>
        </tr>
        <tr>
          <td style="padding:8px 0 0 0;font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:1.5;color:#556276;">
            Miami · Caracas
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
`.trim();

export const EMAIL_SIGNATURE_TEXT = [
  "VIOF — Venezuela Infrastructure Opportunity Fund",
  "admin@veniof.com · https://www.veniof.com",
  "Miami · Caracas",
].join("\n");
