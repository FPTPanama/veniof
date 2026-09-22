import { NextResponse } from "next/server";
import {
  isMailConfigured,
  sendContactEmail,
  type ContactPayload,
} from "@/lib/mail";

export const runtime = "nodejs";

function readString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function validate(payload: ContactPayload): string | null {
  if (!payload.fullName) return "fullName";
  if (!payload.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
    return "email";
  }
  if (!payload.role) return "role";
  if (!payload.message) return "message";
  return null;
}

export async function POST(request: Request) {
  if (!isMailConfigured()) {
    return NextResponse.json(
      { ok: false, error: "mail_not_configured" },
      { status: 503 },
    );
  }

  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  if (!body.ack) {
    return NextResponse.json({ ok: false, error: "ack_required" }, { status: 400 });
  }

  const payload: ContactPayload = {
    fullName: readString(body.fullName),
    organization: readString(body.organization),
    email: readString(body.email),
    country: readString(body.country),
    role: readString(body.role),
    message: readString(body.message),
  };

  const invalid = validate(payload);
  if (invalid) {
    return NextResponse.json(
      { ok: false, error: "validation", field: invalid },
      { status: 400 },
    );
  }

  try {
    await sendContactEmail(payload);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[contact]", error);
    return NextResponse.json({ ok: false, error: "send_failed" }, { status: 500 });
  }
}
