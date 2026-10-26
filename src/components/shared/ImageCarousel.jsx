"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useSlideWindow } from "@/lib/use-slide-window";

export default function ImageCarousel({
  slides,
  className,
  aspectClass = "aspect-[16/10]",
  autoPlay = true,
  intervalMs = 5000,
  sizes = "100vw",
}) {
  const [index, setIndex] = useState(0);
  const shouldRender = useSlideWindow(index, slides.length);

  useEffect(() => {
    if (!autoPlay || slides.length <= 1) return;
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, intervalMs);
    return () => clearInterval(timer);
  }, [autoPlay, intervalMs, slides.length]);

  return (
    <div className={cn("relative overflow-hidden rounded-sm shadow-md", className)}>
      <div className={cn("relative w-full", aspectClass)}>
        {slides.map((item, i) =>
          shouldRender(i) ? (
            <Image
              key={item.src.src ?? item.src}
              src={item.src}
              alt={i === index ? item.alt : ""}
              fill
              placeholder={typeof item.src === "object" ? "blur" : "empty"}
              sizes={sizes}
              className={cn(
                "object-cover transition-opacity duration-700",
                i === index ? "opacity-100" : "opacity-0",
              )}
            />
          ) : null,
        )}
      </div>

      {slides.length > 1 && (
        <>
          <button
            type="button"
            aria-label="Previous slide"
            onClick={() => setIndex((i) => (i - 1 + slides.length) % slides.length)}
            className="absolute left-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-white hover:bg-black/60"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Next slide"
            onClick={() => setIndex((i) => (i + 1) % slides.length)}
            className="absolute right-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-white hover:bg-black/60"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
          <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Slide ${i + 1}`}
                onClick={() => setIndex(i)}
                className={cn(
                  "h-2 rounded-full transition-all",
                  i === index ? "w-5 bg-brand-gold" : "w-2 bg-white/70",
                )}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
