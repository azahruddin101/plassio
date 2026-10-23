"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { heroSlides } from "@/lib/images";
import { site } from "@/lib/content";

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return undefined;
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const go = (next) => {
    setIndex((next + heroSlides.length) % heroSlides.length);
  };

  return (
    <section className="hero-section" aria-roledescription="carousel" aria-label="Resort photographs">
      {heroSlides.map((slide, slideIndex) => (
        <div
          key={slide.src}
          className="hero-slide"
          style={{ opacity: index === slideIndex ? 1 : 0 }}
          aria-hidden={index !== slideIndex}
        >
          <Image
            src={slide.src}
            alt={index === slideIndex ? slide.alt : ""}
            fill
            priority={slideIndex === 0}
            sizes="100vw"
            className="object-cover object-center"
          />
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
        {heroSlides.map((slide, slideIndex) => (
          <button
            key={slide.src}
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
