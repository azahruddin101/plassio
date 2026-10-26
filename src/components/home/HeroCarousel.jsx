"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { site } from "@/lib/content";
import { useSlideWindow } from "@/lib/use-slide-window";

export default function HeroCarousel({ slides }) {
  const [index, setIndex] = useState(0);
  const shouldRender = useSlideWindow(index, slides.length);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return undefined;
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const go = (next) => {
    setIndex((next + slides.length) % slides.length);
  };

  return (
    <section className="hero-section" aria-roledescription="carousel" aria-label="Resort photographs">
      {slides.map((slide, slideIndex) => (
        <div
          key={slide.src.src}
          className="hero-slide"
          style={{ opacity: index === slideIndex ? 1 : 0 }}
          aria-hidden={index !== slideIndex}
        >
          {shouldRender(slideIndex) ? (
            <Image
              src={slide.src}
              alt={index === slideIndex ? slide.alt : ""}
              fill
              preload={slideIndex === 0}
              fetchPriority={slideIndex === 0 ? undefined : "low"}
              placeholder="blur"
              sizes="100vw"
              className="object-cover object-center"
            />
          ) : null}
        </div>
      ))}
      <div className="hero-overlay">
        <h1 className="hero-title">
          <span className="block text-[#faf0e8]">{site.heroLead}</span>
          <span className="block text-[#DE9C33]">{site.heroAccent}</span>
        </h1>
        <p className="hero-tagline">{site.tagline}</p>
      </div>
      <button type="button" className="hero-arrow hero-arrow-left" aria-label="Previous slide" onClick={() => go(index - 1)}>
        <ChevronLeft className="h-1/2 w-1/2" />
      </button>
      <button type="button" className="hero-arrow hero-arrow-right" aria-label="Next slide" onClick={() => go(index + 1)}>
        <ChevronRight className="h-1/2 w-1/2" />
      </button>
      <div className="hero-dots">
        {slides.map((slide, slideIndex) => (
          <button
            key={slide.src.src}
            type="button"
            className="hero-dot"
            aria-label={`Show slide ${slideIndex + 1}`}
            aria-current={index === slideIndex ? "true" : undefined}
            style={{ background: index === slideIndex ? "white" : "transparent" }}
            onClick={() => setIndex(slideIndex)}
          />
        ))}
      </div>
    </section>
  );
}
