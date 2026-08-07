"use client";

import { useState } from "react";
import { Mail, MapPin, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

const EMPTY_FORM = { name: "", email: "", subject: "", message: "" };

export default function ContactForm() {
  const { t } = useLanguage();
  const c = t.contact;

  const [form, setForm] = useState(EMPTY_FORM);
  const [status, setStatus] = useState("idle"); // idle | submitting | success

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");

    // NOTE: this is a placeholder submit handler. Wire it up to a real
    // endpoint (e.g. an /api/contact route backed by Resend, SendGrid,
    // or Formspree) before going live.
    await new Promise((resolve) => setTimeout(resolve, 700));

    setStatus("success");
    setForm(EMPTY_FORM);
  }

  return (
    <section id="contact" className="relative bg-navy-950 py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <p className="section-eyebrow text-sky-300">{c.eyebrow}</p>

            <div className="mt-10 space-y-5">
              <InfoRow
                icon={Mail}
                label={c.emailLabel}
                value="franciscopassuelo@gmail.com"
                href="mailto:franciscopassuelo@gmail.com"
              />
              <InfoRow icon={MapPin} label={c.locationLabel} value={c.location} />
            </div>
          </div>

          <div className="lg:col-span-7">
            {status === "success" ? (
              <div className="flex flex-col items-start gap-4 rounded-2xl border border-sky-300/30 bg-navy-900 p-10">
                <CheckCircle2 size={36} className="text-sky-300" />
                <h3 className="font-display text-2xl text-paper">
                  {c.formSuccessTitle}
                </h3>
                <p className="text-paper/70">{c.formSuccessBody}</p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-2 text-sm font-semibold tracking-wide text-red-500 hover:text-red-400"
                >
                  ←
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <Field
                    label={c.formNameLabel}
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder={c.formNamePlaceholder}
                    required
                  />
                  <Field
                    label={c.formEmailLabel}
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder={c.formEmailPlaceholder}
                    required
                  />
                </div>
                <Field
                  label={c.formSubjectLabel}
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder={c.formSubjectPlaceholder}
                />
                <Field
                  label={c.formMessageLabel}
                  name="message"
                  as="textarea"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder={c.formMessagePlaceholder}
                  required
                />

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="rounded-full bg-red-600 px-8 py-3.5 text-sm font-semibold tracking-wide text-paper transition-colors hover:bg-red-500 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "submitting" ? "..." : c.formSubmit}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoRow({ icon: Icon, label, value, href }) {
  const content = (
    <>
      <p className="text-xs uppercase tracking-[0.2em] text-paper/45">
        {label}
      </p>
      <p className="mt-1 text-paper/85">{value}</p>
    </>
  );

  return (
    <div className="flex items-start gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 text-sky-300">
        <Icon size={17} />
      </div>
      {href ? (
        <a href={href} className="transition-colors hover:text-sky-300">
          {content}
        </a>
      ) : (
        <div>{content}</div>
      )}
    </div>
  );
}

function Field({ label, name, as = "input", ...props }) {
  const Component = as;
  return (
    <label className="block">
      <span className="mb-2 block text-xs uppercase tracking-[0.2em] text-paper/50">
        {label}
      </span>
      <Component
        id={name}
        name={name}
        className="w-full rounded-xl border border-white/15 bg-navy-900 px-4 py-3 text-paper placeholder:text-paper/35 outline-none transition-colors focus:border-sky-300"
        {...props}
      />
    </label>
  );
}
