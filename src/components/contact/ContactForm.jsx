"use client";

import { useState } from "react";
import { site, whatsappHref } from "@/lib/content";

const empty = { name: "", phone: "", email: "", Address: "", Message: "" };

function buildMailto(values) {
  const body = [
    `Name: ${values.name}`,
    `Mobile: ${values.phone}`,
    `Email: ${values.email}`,
    `Address: ${values.Address || "—"}`,
    "",
    values.Message,
  ].join("\n");
  return `mailto:${site.email}?subject=${encodeURIComponent(`Room inquiry — ${site.name}`)}&body=${encodeURIComponent(body)}`;
}

export default function ContactForm() {
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState({});
  const [draft, setDraft] = useState(null);

  const onChange = (event) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
  };

  const validate = () => {
    const next = {};
    if (!values.name.trim()) next.name = "Enter your name.";
    const digits = values.phone.replace(/\D/g, "");
    if (digits.length < 10) next.phone = "Enter a mobile number with at least 10 digits.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) next.email = "Enter a valid email address.";
    if (!values.Message.trim()) next.Message = "Enter a message.";
    return next;
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length) return;
    const href = buildMailto(values);
    setDraft(href);
    window.setTimeout(() => {
      window.location.href = href;
    }, 50);
  };

  if (draft) {
    return (
      <div className="rounded-xl bg-white p-8 text-center shadow-[0_8px_25px_rgba(0,0,0,0.12)]">
        <h3 className="mb-3 text-2xl font-bold text-[#633633]">Email draft ready</h3>
        <p className="text-base leading-7 text-[#4b5563]">
          Your email app should open with this inquiry addressed to {site.email}. The hotel has not received it until you send that email.
        </p>
        <div className="mt-6 flex flex-col gap-3">
          <a href={draft} className="rounded-md bg-[#e0a24a] px-4 py-3 font-bold text-white">
            Open the email again
          </a>
          <a href={whatsappHref()} target="_blank" rel="noopener noreferrer" className="rounded-md bg-[#25D366] px-4 py-3 font-bold text-white">
            Book on WhatsApp
          </a>
          <a href={`tel:${site.phoneTel}`} className="font-semibold text-[#633633] underline">
            Call {site.phoneDisplay}
          </a>
        </div>
      </div>
    );
  }

  return (
    <form className="flex flex-col gap-5" onSubmit={onSubmit} noValidate>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <Field id="name" name="name" placeholder="Your Name" value={values.name} onChange={onChange} error={errors.name} autoComplete="name" />
        <Field id="phone" name="phone" placeholder="Mobile Number" value={values.phone} onChange={onChange} error={errors.phone} autoComplete="tel" inputMode="tel" />
        <Field id="email" name="email" type="email" placeholder="Email Address" value={values.email} onChange={onChange} error={errors.email} autoComplete="email" />
        <Field id="Address" name="Address" placeholder="Address" value={values.Address} onChange={onChange} autoComplete="street-address" />
      </div>
      <div>
        <label htmlFor="Message" className="sr-only">
          Your Message
        </label>
        <textarea
          id="Message"
          name="Message"
          rows={5}
          placeholder="Your Message"
          value={values.Message}
          onChange={onChange}
          className="w-full rounded-md border border-[#d1d5db] px-3 py-3 outline-none"
        />
        {errors.Message ? <p className="mt-1 text-sm text-red-700">{errors.Message}</p> : null}
      </div>
      <button type="submit" className="rounded-md bg-[#e0a24a] px-4 py-4 text-base font-bold text-white">
        SEND INQUIRY
      </button>
    </form>
  );
}

function Field({ id, error, ...props }) {
  return (
    <div>
      <label htmlFor={id} className="sr-only">
        {props.placeholder}
      </label>
      <input id={id} {...props} className="w-full rounded-md border border-[#d1d5db] px-3 py-3 outline-none" />
      {error ? <p className="mt-1 text-sm text-red-700">{error}</p> : null}
    </div>
  );
}
