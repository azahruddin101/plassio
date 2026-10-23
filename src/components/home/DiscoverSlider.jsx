"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { discoverSlides } from "@/lib/images";

export default function DiscoverSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return undefined;
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % discoverSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const go = (next) => setIndex((next + discoverSlides.length) % discoverSlides.length);

  return (
    <div className="relative h-[350px] overflow-hidden md:h-[425px] md:w-1/2" aria-roledescription="carousel" aria-label="Resort gallery">
      {discoverSlides.map((slide, slideIndex) => (
        <Image
          key={slide.src}
          src={slide.src}
          alt={index === slideIndex ? slide.alt : ""}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover transition-opacity duration-700"
          style={{ opacity: index === slideIndex ? 1 : 0 }}
          aria-hidden={index !== slideIndex}
        />
      ))}
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
