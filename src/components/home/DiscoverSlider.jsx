"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSlideWindow } from "@/lib/use-slide-window";

export default function DiscoverSlider({ slides }) {
  const [index, setIndex] = useState(0);
  const shouldRender = useSlideWindow(index, slides.length);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return undefined;
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const go = (next) => setIndex((next + slides.length) % slides.length);

  return (
    <div className="relative h-[350px] overflow-hidden md:h-[425px] md:w-1/2" aria-roledescription="carousel" aria-label="Resort gallery">
      {slides.map((slide, slideIndex) =>
        shouldRender(slideIndex) ? (
          <Image
            key={slide.src.src}
            src={slide.src}
            alt={index === slideIndex ? slide.alt : ""}
            fill
            placeholder="blur"
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover transition-opacity duration-700"
            style={{ opacity: index === slideIndex ? 1 : 0 }}
            aria-hidden={index !== slideIndex}
          />
        ) : null,
      )}
      <button
        type="button"
        aria-label="Previous photograph"
        className="absolute top-1/2 left-3 -translate-y-1/2 text-white/70 hover:text-white"
        onClick={() => go(index - 1)}
      >
        <ChevronLeft size={30} />
      </button>
      <button
        type="button"
        aria-label="Next photograph"
        className="absolute top-1/2 right-3 -translate-y-1/2 text-white/70 hover:text-white"
        onClick={() => go(index + 1)}
      >
        <ChevronRight size={30} />
      </button>
    </div>
  );
}
