"use client";

import { useState } from "react";
import Image from "next/image";

export default function RoomDetail({ room, photos }) {
  const [active, setActive] = useState(0);
  const current = photos[active];

  return (
    <div className="mx-auto flex w-[92%] max-w-6xl flex-col items-start gap-8 py-10 lg:w-[85%] lg:flex-row lg:gap-12 lg:py-16">
      <div className="w-full min-w-0 lg:flex-1">
        <div className="relative mb-4 h-[240px] overflow-hidden rounded-[10px] shadow-[0_12px_30px_rgba(0,0,0,0.25)] sm:h-[360px] lg:h-[450px]">
          <Image
            key={current.src.src}
            src={current.src}
            alt={current.alt}
            fill
            loading="eager"
            fetchPriority={active === 0 ? "high" : "auto"}
            placeholder="blur"
            sizes="(min-width: 1360px) 690px, (min-width: 1024px) 45vw, 92vw"
            className="object-cover"
          />
        </div>
        <div className="flex gap-3 overflow-x-auto pb-1">
          {photos.map((photo, photoIndex) => (
            <button
              key={photo.src.src}
              type="button"
              onClick={() => setActive(photoIndex)}
              aria-label={`Show photograph ${photoIndex + 1}: ${photo.alt}`}
              aria-pressed={active === photoIndex}
              className={`relative h-20 w-[110px] shrink-0 overflow-hidden rounded-md border-2 ${
                active === photoIndex ? "border-[#e0a24a]" : "border-[#ddd]"
              }`}
            >
              <Image src={photo.src} alt="" fill quality={60} placeholder="blur" sizes="110px" className="object-cover" />
            </button>
          ))}
        </div>
      </div>

      <aside className="w-full rounded-[10px] border border-[#eee] bg-white p-6 shadow-[0_10px_25px_rgba(0,0,0,0.1)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.25)] lg:w-[420px] lg:p-9">
        <h2 className="mb-5 text-3xl font-extrabold text-[#633633]">{room.title}</h2>
        <p className="mb-3 text-base">
          <b>Maximum Occupancy :</b> {room.occupancy}
        </p>
        <p className="mb-3 text-base">
          <b>Included Guests :</b> {room.included}
        </p>
        <p className="mb-3 text-base">
          <b>Minimum Stay :</b> {room.stay}
        </p>
        <p className="mb-2.5 text-base">
          <b>Amenities :</b>
        </p>
        <p className="leading-7 text-[#555]">{room.amenities}</p>
      </aside>
    </div>
  );
}
