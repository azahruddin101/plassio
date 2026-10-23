"use client";

import { useSearchParams } from "next/navigation";
import { useMemo, useState, useSyncExternalStore } from "react";
import { formatInr, guestOptions, roomById, rooms, whatsappHref } from "@/lib/content";

function todayISO() {
  const date = new Date();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${date.getFullYear()}-${month}-${day}`;
}

function nightsBetween(checkIn, checkOut) {
  const [ay, am, ad] = checkIn.split("-").map(Number);
  const [by, bm, bd] = checkOut.split("-").map(Number);
  return Math.round((Date.UTC(by, bm - 1, bd) - Date.UTC(ay, am - 1, ad)) / 86400000);
}

export default function BookingEngine() {
  const params = useSearchParams();
  const [step, setStep] = useState(1);
  const [checkIn, setCheckIn] = useState(params.get("checkIn") || "");
  const [checkOut, setCheckOut] = useState(params.get("checkOut") || "");
  const [guests, setGuests] = useState(params.get("guests") || "2");
  const [roomId, setRoomId] = useState(params.get("room") || "deluxe-room");
  const [promo, setPromo] = useState(params.get("promo") || "");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [requests, setRequests] = useState("");
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState({});
  const [handoff, setHandoff] = useState("");
  const today = useSyncExternalStore(() => () => {}, todayISO, () => "");

  const room = roomById(rooms.some((item) => item.id === roomId) ? roomId : "deluxe-room");
  const nights = checkIn && checkOut && checkOut > checkIn ? nightsBetween(checkIn, checkOut) : 0;
  const promoApplied = promo.trim().toUpperCase() === "PALASSIO15";
  const estimate = useMemo(() => {
    if (!nights) return null;
    const base = room.price * nights;
    const discount = promoApplied ? base * 0.15 : 0;
    const taxable = base - discount;
    const gst = taxable * 0.12;
    return { base, discount, gst, total: taxable + gst };
  }, [nights, promoApplied, room.price]);

  function validateDates() {
    const next = {};
    const today = todayISO();
    if (!checkIn) next.checkIn = "Choose a check-in date.";
    else if (checkIn < today) next.checkIn = "Check-in cannot be before today.";
    if (!checkOut) next.checkOut = "Choose a check-out date.";
    else if (checkIn && checkOut <= checkIn) next.checkOut = "Check-out must be after check-in.";
    if (!guestOptions.some((option) => option.value === guests)) next.guests = "Choose how many guests are staying.";
    if (!rooms.some((item) => item.id === roomId)) next.room = "Choose a published room category.";
    if (promo.trim() && !promoApplied) next.promo = "That code is not applied. PALASSIO15 is the published direct-stay code.";
    return next;
  }

  function continueToGuest(event) {
    event.preventDefault();
    const next = validateDates();
    setErrors(next);
    if (Object.keys(next).length) return;
    setStep(2);
  }

  function sendEnquiry(event) {
    event.preventDefault();
    const next = {};
    if (!name.trim()) next.name = "Enter the guest name.";
    if (!/^[0-9+\s-]{8,}$/.test(phone.trim())) next.phone = "Enter a reachable phone or WhatsApp number.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) next.email = "Enter an email address.";
    setErrors(next);
    if (Object.keys(next).length || !estimate) return;
    const guestLabel = guestOptions.find((option) => option.value === guests)?.label || guests;
    const notes = [
      requests.trim(),
      `Email: ${email.trim()}`,
      promoApplied ? "Promo: PALASSIO15" : "",
      `Published rate estimate ${formatInr(estimate.total)} for ${nights} night(s), including estimated 12% GST. This website has not confirmed a room.`,
      consent ? "Guest agreed to reservation notifications and Palassio Guest Club updates." : "",
    ]
      .filter(Boolean)
      .join(" ");
    const href = whatsappHref({
      type: "room_booking",
      name: name.trim(),
      phone: phone.trim(),
      roomName: room.name,
      checkIn,
      checkOut,
      guests: guestLabel,
      notes,
    });
    const opened = window.open(href, "_blank", "noopener,noreferrer");
    setHandoff(opened ? href : href);
  }

  return (
    <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 lg:grid-cols-[1.4fr_0.8fr]">
      <div>
        <p className="text-xs font-semibold tracking-[0.2em] text-[#633633] uppercase">Direct reservation</p>
        <h2 className="mt-2 text-4xl text-[#633633]">Reserve Stay</h2>
        <p className="mt-3 text-gray-600">Best Rate Guarantee · Complimentary Wi-Fi · Direct Verification</p>
        <p className="mt-4 text-sm text-gray-600">
          Published rates only. Sending this enquiry opens WhatsApp. It does not check live inventory or confirm a reservation.
        </p>
        <ol className="mt-6 flex gap-6 text-xs tracking-[0.16em]">
          <li className={step === 1 ? "text-[#DE9C33]" : "text-gray-600"}>01 DATES & ROOM</li>
          <li className={step === 2 ? "text-[#DE9C33]" : "text-gray-600"}>02 GUEST INFO</li>
        </ol>

        {step === 1 ? (
          <form onSubmit={continueToGuest} noValidate className="mt-8 space-y-5">
            <h2 className="font-sans text-lg font-semibold">01. Travel Dates & Category</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="text-sm">
                Check-in Date
                <input type="date" min={today || undefined} value={checkIn} onChange={(event) => setCheckIn(event.target.value)} aria-invalid={Boolean(errors.checkIn)} className="mt-1 w-full border border-[#ddd] px-3 py-2" />
                {errors.checkIn ? <span className="mt-1 block text-xs">{errors.checkIn}</span> : null}
              </label>
              <label className="text-sm">
                Check-out Date
                <input type="date" min={checkIn || today || undefined} value={checkOut} onChange={(event) => setCheckOut(event.target.value)} aria-invalid={Boolean(errors.checkOut)} className="mt-1 w-full border border-[#ddd] px-3 py-2" />
                {errors.checkOut ? <span className="mt-1 block text-xs">{errors.checkOut}</span> : null}
              </label>
            </div>
            <label className="block text-sm">
              Guests
              <select value={guests} onChange={(event) => setGuests(event.target.value)} className="mt-1 w-full border border-[#ddd] px-3 py-2">
                {guestOptions.map((option) => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
            </label>
            <fieldset>
              <legend className="text-sm">Select Room Category</legend>
              <div className="mt-3 grid gap-3">
                {rooms.map((item) => (
                  <label key={item.id} className={`flex items-center justify-between gap-3 border p-4 ${roomId === item.id ? "border-[#633633]" : "border-[#eee]"}`}>
                    <span>
                      <input type="radio" name="room" value={item.id} checked={roomId === item.id} onChange={() => setRoomId(item.id)} className="mr-2" />
                      <span className="font-medium">{item.name}</span>
                      <span className="mt-1 block text-xs text-gray-600">{item.size} · {item.bed}</span>
                    </span>
                    <span className="text-sm">{formatInr(item.price)} <span className="text-xs text-gray-600">per night</span></span>
                  </label>
                ))}
              </div>
            </fieldset>
            <label className="block text-sm">
              Promo Code (Try: PALASSIO15)
              <input value={promo} onChange={(event) => setPromo(event.target.value)} placeholder="PROMO CODE" className="mt-1 w-full border border-[#ddd] px-3 py-2 uppercase" />
              {errors.promo ? <span className="mt-1 block text-xs">{errors.promo}</span> : null}
            </label>
            <button type="submit" className="rounded-md bg-[#633633] px-5 py-3 text-xs font-semibold tracking-[0.14em] text-white">
              PROCEED TO GUEST DETAILS
            </button>
          </form>
        ) : (
          <form onSubmit={sendEnquiry} noValidate className="mt-8 space-y-4">
            <h2 className="font-sans text-lg font-semibold">02. Guest Contact Information</h2>
            <label className="block text-sm">
              Full Guest Name *
              <input value={name} onChange={(event) => setName(event.target.value)} placeholder="Full Name" aria-invalid={Boolean(errors.name)} className="mt-1 w-full border border-[#ddd] px-3 py-2" />
              {errors.name ? <span className="mt-1 block text-xs">{errors.name}</span> : null}
            </label>
            <label className="block text-sm">
              Mobile / WhatsApp Number *
              <input value={phone} onChange={(event) => setPhone(event.target.value)} placeholder="+91 91234 56789" aria-invalid={Boolean(errors.phone)} className="mt-1 w-full border border-[#ddd] px-3 py-2" />
              {errors.phone ? <span className="mt-1 block text-xs">{errors.phone}</span> : null}
            </label>
            <label className="block text-sm">
              Email Address *
              <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="name@example.com" aria-invalid={Boolean(errors.email)} className="mt-1 w-full border border-[#ddd] px-3 py-2" />
              {errors.email ? <span className="mt-1 block text-xs">{errors.email}</span> : null}
            </label>
            <label className="block text-sm">
              Special Requests
              <textarea value={requests} onChange={(event) => setRequests(event.target.value)} placeholder="High floor preference, early check-in, twin beds..." className="mt-1 min-h-28 w-full border border-[#ddd] px-3 py-2" />
            </label>
            <label className="flex items-start gap-2 text-sm text-gray-600">
              <input type="checkbox" checked={consent} onChange={(event) => setConsent(event.target.checked)} className="mt-1" />
              Agree to receive reservation notifications and Palassio Guest Club updates.
            </label>
            <div className="flex flex-wrap gap-3">
              <button type="button" onClick={() => setStep(1)} className="rounded-md border border-[#633633] px-5 py-3 text-xs tracking-[0.14em]">
                BACK
              </button>
              <button type="submit" className="rounded-md bg-[#633633] px-5 py-3 text-xs font-semibold tracking-[0.14em] text-white">
                SEND ENQUIRY ON WHATSAPP
              </button>
            </div>
            {handoff ? (
              <p className="text-sm text-gray-600">
                WhatsApp should open with this enquiry. Send it yourself — nothing is confirmed until the hotel replies.{" "}
                <a href={handoff} target="_blank" rel="noopener noreferrer" className="text-[#633633] underline">
                  Open WhatsApp
                </a>
              </p>
            ) : null}
          </form>
        )}
      </div>
      <aside className="h-fit border border-[#eee] bg-[#fafafa] p-5">
        <h2 className="font-sans text-lg font-semibold">Rate Breakdown</h2>
        <dl className="mt-4 space-y-2 text-sm">
          <div className="flex justify-between gap-4"><dt>Selected</dt><dd>{room.name}</dd></div>
          <div className="flex justify-between gap-4"><dt>Duration</dt><dd>{nights ? `${nights} Night(s)` : "—"}</dd></div>
          {estimate ? (
            <>
              <div className="flex justify-between gap-4"><dt>Base Rate</dt><dd>{formatInr(estimate.base)}</dd></div>
              {estimate.discount ? (
                <div className="flex justify-between gap-4"><dt>Direct Promo (15%)</dt><dd>-{formatInr(estimate.discount)}</dd></div>
              ) : null}
              <div className="flex justify-between gap-4"><dt>GST Tax (12%)</dt><dd>{formatInr(estimate.gst)}</dd></div>
              <div className="flex justify-between gap-4 border-t border-[#eee] pt-3 font-semibold text-[#633633]">
                <dt>Estimated total</dt><dd>{formatInr(estimate.total)}</dd>
              </div>
            </>
          ) : (
            <p className="text-gray-600">Enter valid dates to see the published-rate estimate.</p>
          )}
        </dl>
        <p className="mt-4 text-xs leading-relaxed text-gray-600">
          Estimate uses the nightly rates published on the hotel site and the same 12% GST figure shown on the reference booking screen. PALASSIO15 takes 15% off that base. This is not a bill and not a held room.
        </p>
      </aside>
    </div>
  );
}
