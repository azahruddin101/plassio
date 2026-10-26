"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { banquetFeatures, restaurantFeatures } from "@/lib/content";

function FeatureCard({ title, items }) {
  return (
    <article className="rounded-[10px] border border-[#eee] bg-[#fafafa] p-6 sm:p-8">
      <h2 className="mb-5 text-center text-2xl text-[#633633]">{title}</h2>
      <ul className="list-none space-y-1 pl-2.5 text-base leading-[30px] text-[#444]">
        {items.map(([label, value]) => (
          <li key={label}>
            <span aria-hidden="true">✓ </span>
            <b>{label}</b> {value}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function BanquetShowcase({ slides }) {
  const [index, setIndex] = useState(0);
  const [zoom, setZoom] = useState(null);
  const count = slides.length;
  const current = slides[index];

  useEffect(() => {
    if (!zoom) return undefined;
    const onKey = (event) => {
      if (event.key === "Escape") setZoom(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [zoom]);

  return (
    <div className="mx-auto w-[92%] rounded-xl bg-white p-4 shadow-[0_10px_25px_rgba(0,0,0,0.15)] sm:p-8 lg:w-[85%]">
      <div className="relative">
        <button
          type="button"
          aria-label="Previous banquet photograph"
          onClick={() => setIndex((current) => (current - 1 + count) % count)}
          className="absolute top-1/2 left-2.5 z-10 -translate-y-1/2 rounded bg-black/60 px-3 py-2 text-2xl text-white"
        >
          ❮
        </button>
        <button
          type="button"
          className="relative block h-[220px] w-full sm:h-[320px] lg:h-[420px]"
          onClick={() => setZoom(current)}
          aria-label="Enlarge banquet photograph"
        >
          <Image
            key={current.src.src}
            src={current.src}
            alt={current.alt}
            fill
            loading="eager"
            fetchPriority={index === 0 ? "high" : "auto"}
            placeholder="blur"
            sizes="(min-width: 1024px) 80vw, 85vw"
            className="rounded-[10px] object-cover"
          />
        </button>
        <button
          type="button"
          aria-label="Next banquet photograph"
          onClick={() => setIndex((current) => (current + 1) % count)}
          className="absolute top-1/2 right-2.5 z-10 -translate-y-1/2 rounded bg-black/60 px-3 py-2 text-2xl text-white"
        >
          ❯
        </button>
      </div>

      <div className="mt-4 flex flex-wrap justify-center gap-2.5">
        {slides.map((slide, slideIndex) => (
          <button
            key={slide.src.src}
            type="button"
            onClick={() => setIndex(slideIndex)}
            aria-label={`Show photograph ${slideIndex + 1}`}
            aria-pressed={index === slideIndex}
            className={`relative h-[75px] w-[120px] overflow-hidden rounded-md border-2 ${
              index === slideIndex ? "border-[#d4a041]" : "border-transparent"
            }`}
          >
            <Image src={slide.src} alt="" fill quality={60} placeholder="blur" sizes="120px" className="object-cover" />
          </button>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
        <FeatureCard title="Two Grand Banquet Halls" items={banquetFeatures} />
        <FeatureCard title="Awadhi Flavors & Multi-Cuisine" items={restaurantFeatures} />
      </div>

      {zoom ? (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/85"
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged photograph"
          onClick={() => setZoom(null)}
        >
          <button type="button" className="absolute top-6 right-8 text-3xl text-white" aria-label="Close photograph" onClick={() => setZoom(null)}>
            ✕
          </button>
          <Image
            src={zoom.src}
            alt={zoom.alt}
            quality={85}
            loading="eager"
            placeholder="blur"
            sizes="90vw"
            className="max-h-[90vh] w-auto max-w-[90%] rounded-[10px] object-contain"
          />
        </div>
      ) : null}
    </div>
  );
}
