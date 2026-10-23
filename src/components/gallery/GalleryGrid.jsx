"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { galleryCategories } from "@/lib/content";
import { galleryImages } from "@/lib/images";

export default function GalleryGrid() {
  const [category, setCategory] = useState("all");
  const [active, setActive] = useState(null);

  const photos = useMemo(() => {
    if (category === "all") return galleryImages;
    return galleryImages.filter((photo) => photo.category === category);
  }, [category]);

  useEffect(() => {
    if (active === null) return undefined;
    const onKey = (event) => {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowRight") setActive((current) => (current + 1) % photos.length);
      if (event.key === "ArrowLeft") setActive((current) => (current - 1 + photos.length) % photos.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, photos.length]);

  return (
    <>
      <div className="mt-10 flex flex-wrap justify-center gap-3 px-4" role="toolbar" aria-label="Filter photographs">
        {galleryCategories.map((item) => {
          const selected = category === item.id;
          return (
            <button
              key={item.id}
              type="button"
              aria-pressed={selected}
              onClick={() => {
                setCategory(item.id);
                setActive(null);
              }}
              className={`rounded px-4 py-2 text-sm font-semibold ${
                selected ? "bg-[#633633] text-white" : "border border-[#ddd] bg-white text-[#633633]"
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      <div className="mx-auto mt-10 grid w-[92%] grid-cols-1 gap-5 sm:grid-cols-2 lg:w-[85%] lg:grid-cols-[repeat(auto-fill,minmax(260px,1fr))]">
        {photos.map((photo, index) => (
          <button
            key={`${photo.src}-${photo.category}-${index}`}
            type="button"
            aria-label={photo.alt}
            className="relative h-[230px] overflow-hidden rounded-lg shadow-[0_5px_15px_rgba(0,0,0,0.2)]"
            onClick={() => setActive(index)}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 92vw"
              className="object-cover transition duration-500 hover:scale-105"
            />
          </button>
        ))}
      </div>

      {active !== null && photos[active] ? (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/90" role="dialog" aria-modal="true" aria-label="Photograph">
          <button type="button" className="absolute top-7 right-8 text-3xl text-white" aria-label="Close photograph" onClick={() => setActive(null)}>
            ✕
          </button>
          <button
            type="button"
            className="absolute left-4 text-5xl text-white sm:left-10"
            aria-label="Previous photograph"
            onClick={() => setActive((current) => (current - 1 + photos.length) % photos.length)}
          >
            ❮
          </button>
          <Image
            src={photos[active].src}
            alt={photos[active].alt}
            width={1400}
            height={900}
            className="max-h-[80vh] w-auto max-w-[85%] rounded-lg object-contain"
          />
          <button
            type="button"
            className="absolute right-4 text-5xl text-white sm:right-10"
            aria-label="Next photograph"
            onClick={() => setActive((current) => (current + 1) % photos.length)}
          >
            ❯
          </button>
        </div>
      ) : null}
    </>
  );
}
