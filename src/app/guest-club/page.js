"use client";

import { useState } from "react";
import ContentPage, { greenButton } from "@/components/layout/ContentPage";
import { whatsappHref } from "@/lib/content";

export default function GuestClubPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({});
  const [href, setHref] = useState("");

  function onSubmit(event) {
    event.preventDefault();
    const next = {};
    if (!name.trim()) next.name = "Enter your full name.";
    if (!/^[0-9+\s-]{8,}$/.test(phone.trim())) next.phone = "Enter your WhatsApp number.";
    setErrors(next);
    if (Object.keys(next).length) return;
    const link = whatsappHref({
      type: "general",
      name: name.trim(),
      phone: phone.trim(),
      notes: "Palassio Privilege Club membership request. This website has not created a membership.",
    });
    window.open(link, "_blank", "noopener,noreferrer");
    setHref(link);
  }

  return (
    <ContentPage
      title="GUEST CLUB"
      intro="Member-only room rates, priority rooftop reservations, and personalized hospitality service."
    >
      <form onSubmit={onSubmit} noValidate className="mx-auto max-w-xl space-y-4 rounded-[14px] border border-[#eee] bg-white p-6 shadow-[0_8px_28px_rgba(0,0,0,0.08)]">
        <h2 className="text-2xl font-semibold text-[#633633]">Palassio Privilege Club</h2>
        <label className="block text-sm text-[#633633]">
          Full name
          <input value={name} onChange={(event) => setName(event.target.value)} aria-invalid={Boolean(errors.name)} className="mt-1 w-full rounded-md border border-[#ddd] px-3 py-2" />
          {errors.name ? <span className="mt-1 block text-xs text-red-700">{errors.name}</span> : null}
        </label>
        <label className="block text-sm text-[#633633]">
          WhatsApp number
          <input value={phone} onChange={(event) => setPhone(event.target.value)} aria-invalid={Boolean(errors.phone)} className="mt-1 w-full rounded-md border border-[#ddd] px-3 py-2" />
          {errors.phone ? <span className="mt-1 block text-xs text-red-700">{errors.phone}</span> : null}
        </label>
        <button type="submit" className={greenButton}>Join Privilege Club</button>
        <p className="text-xs text-gray-600">Joining sends a WhatsApp request to the hotel. Membership is not created on this website.</p>
        {href ? <p className="text-sm"><a className="font-semibold text-[#633633] underline" href={href} target="_blank" rel="noopener noreferrer">Open WhatsApp</a></p> : null}
      </form>
    </ContentPage>
  );
}
