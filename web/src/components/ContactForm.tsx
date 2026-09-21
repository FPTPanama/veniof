"use client";

import { FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";
import { getSite, type Locale } from "@/content";

type Props = {
  locale: Locale;
};

type Status = "idle" | "sending" | "success" | "error";

const inputClass =
  "mt-2 w-full border border-[#D2D8E0] bg-white px-3 py-3 text-[15px] text-ink outline-none transition focus:border-gold";

export function ContactForm({ locale }: Props) {
  const site = getSite(locale);
  const { contact, footer } = site;
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    if (!data.get("ack")) {
      setStatus("error");
      return;
    }

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    const payload = {
      full_name: String(data.get("fullName") || ""),
      organization: String(data.get("organization") || ""),
      email: String(data.get("email") || ""),
      country: String(data.get("country") || ""),
      role: String(data.get("role") || ""),
      message: String(data.get("message") || ""),
      to_email: "info@veniof.com",
    };

    if (!serviceId || !templateId || !publicKey) {
      // Fallback until EmailJS keys are configured
      window.location.href = `mailto:info@veniof.com?subject=${encodeURIComponent(
        `VIOF contact — ${payload.full_name}`,
      )}&body=${encodeURIComponent(
        `Name: ${payload.full_name}\nOrganization: ${payload.organization}\nEmail: ${payload.email}\nCountry: ${payload.country}\nRole: ${payload.role}\n\n${payload.message}`,
      )}`;
      return;
    }

    setStatus("sending");
    try {
      await emailjs.send(serviceId, templateId, payload, { publicKey });
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="bg-white px-6 py-20 md:px-14 md:py-24">
      <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[minmax(0,1.6fr)_minmax(280px,0.85fr)] lg:gap-16">
        <div>
          <div className="mb-7 flex items-center gap-3.5">
            <span className="h-px w-9 bg-gold" aria-hidden />
            <span className="text-[15px] font-semibold text-gold-dark">
              {contact.eyebrow}
            </span>
          </div>
          <h1 className="font-serif text-[36px] font-normal leading-[1.15] tracking-[-0.01em] text-ink md:text-[42px]">
            {contact.title}
          </h1>
          <p className="mt-3 text-[16px] text-slate">{contact.subtitle}</p>

          <form className="mt-10" onSubmit={onSubmit} noValidate>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block text-[13px] font-semibold text-ink">
                {contact.fields.fullName}
                <input
                  className={inputClass}
                  name="fullName"
                  type="text"
                  required
                  autoComplete="name"
                />
              </label>
              <label className="block text-[13px] font-semibold text-ink">
                {contact.fields.organization}
                <input
                  className={inputClass}
                  name="organization"
                  type="text"
                  autoComplete="organization"
                />
              </label>
              <label className="block text-[13px] font-semibold text-ink">
                {contact.fields.email}
                <input
                  className={inputClass}
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                />
              </label>
              <label className="block text-[13px] font-semibold text-ink">
                {contact.fields.country}
                <input
                  className={inputClass}
                  name="country"
                  type="text"
                  autoComplete="country-name"
                />
              </label>
            </div>

            <label className="mt-5 block text-[13px] font-semibold text-ink">
              {contact.fields.role}
              <select
                className={inputClass}
                name="role"
                required
                defaultValue=""
              >
                <option value="" disabled>
                  {contact.fields.rolePlaceholder}
                </option>
                {contact.roleOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>

            <label className="mt-5 block text-[13px] font-semibold text-ink">
              {contact.fields.message}
              <textarea
                className={`${inputClass} min-h-[140px] resize-y`}
                name="message"
                required
                rows={6}
              />
            </label>

            <label className="mt-6 flex items-start gap-3 text-[13.5px] leading-[1.5] text-slate">
              <input
                className="mt-1 h-4 w-4 shrink-0 accent-gold"
                name="ack"
                type="checkbox"
                required
              />
              <span>{contact.fields.ack}</span>
            </label>

            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-8 inline-flex min-h-11 items-center bg-navy px-7 text-[15px] font-semibold text-cream transition hover:brightness-110 disabled:opacity-60"
            >
              {status === "sending" ? contact.sending : contact.submit}
            </button>

            {status === "success" ? (
              <p className="mt-4 text-[14px] text-gold-dark" role="status">
                {contact.success}
              </p>
            ) : null}
            {status === "error" ? (
              <p className="mt-4 text-[14px] text-red-700" role="alert">
                {contact.error}
              </p>
            ) : null}
          </form>
        </div>

        <aside className="h-fit border border-[#D2D8E0] border-t-[3px] border-t-gold bg-surface-2 p-7">
          <div className="text-[13px] font-semibold text-gold-dark">
            {contact.officesTitle}
          </div>
          <div className="mt-5 space-y-6">
            {footer.offices.map((office) => (
              <div key={office.country}>
                <div className="font-serif text-[20px] text-ink">
                  {office.country}
                </div>
                <p className="mt-1.5 text-[14px] leading-[1.55] text-slate">
                  {office.address}
                </p>
              </div>
            ))}
          </div>

          <div className="my-7 h-px bg-[#D2D8E0]" />

          <div className="text-[13px] font-semibold text-gold-dark">
            {contact.emailTitle}
          </div>
          <a
            href={`mailto:${footer.email}`}
            className="mt-3 inline-block text-[15px] text-ink underline decoration-gold underline-offset-4 hover:text-gold-dark"
          >
            {footer.email}
          </a>
        </aside>
      </div>
    </section>
  );
}
