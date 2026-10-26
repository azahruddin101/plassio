"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { galleryCategories } from "@/lib/content";

export default function GalleryGrid({ images }) {
  const [category, setCategory] = useState("all");
  const [active, setActive] = useState(null);

  const photos = useMemo(() => {
    if (category === "all") return images;
    return images.filter((photo) => photo.category === category);
  }, [category, images]);

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

  // Warm the cache for the photos the lightbox arrows lead to, so paging is instant.
  const neighbors =
    active === null
      ? []
      : [...new Set([(active + 1) % photos.length, (active - 1 + photos.length) % photos.length])]
          .filter((neighbor) => neighbor !== active)
          .map((neighbor) => photos[neighbor]);

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
            key={`${photo.src.src}-${photo.category}`}
            type="button"
            aria-label={photo.alt}
            className="relative h-[230px] overflow-hidden rounded-lg shadow-[0_5px_15px_rgba(0,0,0,0.2)]"
            onClick={() => setActive(index)}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              quality={60}
              placeholder="blur"
              loading={index < 4 ? "eager" : "lazy"}
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
            key={photos[active].src.src}
            src={photos[active].src}
            alt={photos[active].alt}
            quality={85}
            loading="eager"
            placeholder="blur"
            sizes="85vw"
            className="max-h-[80vh] w-auto max-w-[85%] rounded-lg object-contain"
          />
          {neighbors.map((photo) => (
            <Image
              key={`preload-${photo.src.src}`}
              src={photo.src}
              alt=""
              aria-hidden="true"
              quality={85}
              loading="eager"
              fetchPriority="low"
              sizes="85vw"
              className="hidden"
            />
          ))}
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
