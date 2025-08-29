"use client";
import { RESOURCES } from "@/config/resources";
import "./contact.scss";

import { useState } from "react";

const Page = () => {
  const { email, github, linkedin, twitter } = RESOURCES;
  const [status, setStatus] = useState<null | "idle" | "success" | "error">(null);
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const fromEmail = String(formData.get("fromEmail") || "").trim();
    const message = String(formData.get("message") || "").trim();
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fromEmail);
    const newErrors: typeof errors = {};
    if (!name) newErrors.name = "Please enter your name";
    if (!isValidEmail) newErrors.email = "Enter a valid email";
    if (message.length < 10) newErrors.message = "Message should be at least 10 characters";
    setErrors(newErrors);
    if (Object.keys(newErrors).length) { setStatus("error"); return; }
    setStatus("success");
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(
      `${message}\n\nFrom: ${name} <${fromEmail}>`,
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    form.reset();
  };

  return (
    <div className="main-container">
      <section className="content contact py-24">
        <h1 className="text-2xl md:text-3xl font-semibold text-white">
          Contact
        </h1>
        <p className="mt-3 text-slate-300">
          I’m always open to new opportunities, collaboration, or a quick chat.
          Reach me directly at{" "}
          <a
            href={`mailto:${email}`}
            className="text-[var(--color-accent)] underline"
          >
            {email}
          </a>{" "}
          or send a quick message below.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <form
            onSubmit={onSubmit}
            className="rounded-lg border border-[var(--color-border)] bg-[var(--color-card)]/90 p-6 shadow-sm"
          >
            {status === "success" && (
              <div
                role="status"
                className="mb-4 rounded-md bg-emerald-900/30 text-emerald-300 px-3 py-2 border border-emerald-800"
              >
                Opening your email client…
              </div>
            )}
            {status === "error" && (
              <div
                role="alert"
                className="mb-4 rounded-md bg-rose-900/30 text-rose-300 px-3 py-2 border border-rose-800"
              >
                Please provide a valid email and a message of at least 10
                characters.
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-300"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="mt-1 w-full rounded-md border border-borderD bg-slate-800 px-3 py-2 text-sm text-slate-200 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
                  onBlur={(e) => setErrors((prev) => ({ ...prev, name: e.currentTarget.value.trim() ? undefined : 'Please enter your name' }))}
                />
                {errors.name && <p className="mt-1 text-xs text-rose-300">{errors.name}</p>}
              </div>
              <div>
                <label
                  htmlFor="fromEmail"
                  className="block text-sm font-medium text-slate-300"
                >
                  Email
                </label>
                <input
                  id="fromEmail"
                  name="fromEmail"
                  type="email"
                  required
                  className="mt-1 w-full rounded-md border border-borderD bg-slate-800 px-3 py-2 text-sm text-slate-200 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
                  onBlur={(e) => setErrors((prev) => ({ ...prev, email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.currentTarget.value) ? undefined : 'Enter a valid email' }))}
                />
                {errors.email && <p className="mt-1 text-xs text-rose-300">{errors.email}</p>}
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-slate-300"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                minLength={10}
                rows={5}
                className="mt-1 w-full rounded-md border border-borderD bg-slate-800 px-3 py-2 text-sm text-slate-200 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
                onBlur={(e) => setErrors((prev) => ({ ...prev, message: e.currentTarget.value.trim().length >= 10 ? undefined : 'Message should be at least 10 characters' }))}
              />
              {errors.message && <p className="mt-1 text-xs text-rose-300">{errors.message}</p>}
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="inline-flex items-center rounded-md px-4 py-2 text-sm font-medium transition focus:outline-none text-white"
                style={{ backgroundColor: 'var(--accent)' }}
              >
                Send message
              </button>
            </div>
          </form>
          <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-card)]/90 p-6 shadow-sm">
            <div className="space-y-3">
              <div>
                <div className="text-sm font-medium text-white">
                  Email
                </div>
                <a
                  href={`mailto:${email}`}
                  className="text-sm text-[var(--color-accent)] break-words"
                >
                  {email}
                </a>
              </div>
              <div>
                <div className="text-sm font-medium text-white">
                  GitHub
                </div>
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-300 break-words"
                >
                  {github}
                </a>
              </div>
              <div>
                <div className="text-sm font-medium text-white">
                  LinkedIn
                </div>
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-300 break-words"
                >
                  {linkedin}
                </a>
              </div>
              <div>
                <div className="text-sm font-medium text-white">
                  Twitter
                </div>
                <a
                  href={twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-300 break-words"
                >
                  {twitter}
                </a>
              </div>
              <div>
                <div className="text-sm font-medium text-white">Book a call</div>
                <a href={`mailto:${email}?subject=Book%2015m%20intro%20call`} className="text-sm text-slate-300 underline">Book 15m intro call</a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 rounded-lg border border-[var(--color-border)] bg-[var(--color-card)]/90 p-6 shadow-sm">
          <h2 className="text-base font-semibold text-white">FAQ</h2>
          <dl className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-slate-300">
            <div>
              <dt className="font-medium text-white">Response time</dt>
              <dd className="text-slate-300">Typically within 24–48 hours.</dd>
            </div>
            <div>
              <dt className="font-medium text-white">Projects</dt>
              <dd className="text-slate-300">Frontend apps, performance audits, DX tooling.</dd>
            </div>
            <div>
              <dt className="font-medium text-white">Location</dt>
              <dd className="text-slate-300">US (remote-friendly).</dd>
            </div>
          </dl>
        </div>
      </section>
      
    </div>
  );
};

export default Page;
