"use client";

import { useRouter } from "next/navigation";
import { useState, useSyncExternalStore } from "react";
import { formatInr, guestOptions, rooms } from "@/lib/content";

function todayISO() {
  const date = new Date();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${date.getFullYear()}-${month}-${day}`;
}

export default function AvailabilityForm() {
  const router = useRouter();
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");
  const [room, setRoom] = useState("deluxe-room");
  const [errors, setErrors] = useState({});
  const today = useSyncExternalStore(() => () => {}, todayISO, () => "");

  function onSubmit(event) {
    event.preventDefault();
    const next = {};
    const today = todayISO();
    if (!checkIn) next.checkIn = "Choose a check-in date.";
    else if (checkIn < today) next.checkIn = "Check-in cannot be before today.";
    if (!checkOut) next.checkOut = "Choose a check-out date.";
    else if (checkIn && checkOut <= checkIn) next.checkOut = "Check-out must be after check-in.";
    if (!guestOptions.some((option) => option.value === guests)) next.guests = "Choose how many guests are staying.";
    if (!rooms.some((item) => item.id === room)) next.room = "Choose a room category.";
    setErrors(next);
    if (Object.keys(next).length) return;
    const params = new URLSearchParams({ checkIn, checkOut, guests, room });
    router.push(`/book?${params.toString()}`);
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-4 border border-espresso/10 bg-ivory p-5 md:grid-cols-2 lg:grid-cols-5">
      <label className="text-sm">
        <span className="mb-1 block text-muted">Check-In</span>
        <input
          type="date"
          required
          min={today || undefined}
          value={checkIn}
          onChange={(event) => setCheckIn(event.target.value)}
          aria-invalid={Boolean(errors.checkIn)}
          className="w-full border border-espresso/15 bg-ivory px-3 py-2"
        />
        {errors.checkIn ? <span className="mt-1 block text-xs text-espresso">{errors.checkIn}</span> : null}
      </label>
      <label className="text-sm">
        <span className="mb-1 block text-muted">Check-Out</span>
        <input
          type="date"
          required
          min={checkIn || today || undefined}
          value={checkOut}
          onChange={(event) => setCheckOut(event.target.value)}
          aria-invalid={Boolean(errors.checkOut)}
          className="w-full border border-espresso/15 bg-ivory px-3 py-2"
        />
        {errors.checkOut ? <span className="mt-1 block text-xs text-espresso">{errors.checkOut}</span> : null}
      </label>
      <label className="text-sm">
        <span className="mb-1 block text-muted">Guests</span>
        <select value={guests} onChange={(event) => setGuests(event.target.value)} className="w-full border border-espresso/15 bg-ivory px-3 py-2">
          {guestOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
      <label className="text-sm">
        <span className="mb-1 block text-muted">Room Category</span>
        <select value={room} onChange={(event) => setRoom(event.target.value)} className="w-full border border-espresso/15 bg-ivory px-3 py-2">
          {rooms.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name} ({formatInr(item.price)}/night)
            </option>
          ))}
        </select>
      </label>
      <button type="submit" className="h-fit self-end rounded-md bg-espresso px-4 py-3 text-xs font-semibold tracking-[0.16em] text-ivory hover:opacity-90">
        CHECK RATES
      </button>
    </form>
  );
}
