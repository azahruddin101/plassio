"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

// The site scrolls inside #page-scroll (see app/layout.js), not the window, so
// Lenis is pointed at that element. Touch keeps native momentum scrolling, and
// Lenis honours prefers-reduced-motion by tracking input 1:1.
let lenis = null;

export function scrollPageToTop() {
  if (lenis) {
    lenis.scrollTo(0);
    return;
  }
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.getElementById("page-scroll")?.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
}

export default function SmoothScroll() {
  useEffect(() => {
    const wrapper = document.getElementById("page-scroll");
    const content = document.getElementById("page-content");
    if (!wrapper || !content) return undefined;

    lenis = new Lenis({
      wrapper,
      content,
      eventsTarget: wrapper,
      lerp: 0.1,
      anchors: true,
      // Pauses while the mobile menu sets overflow: hidden on the wrapper.
      autoToggle: true,
      stopInertiaOnNavigate: true,
      autoRaf: true,
    });

    return () => {
      lenis?.destroy();
      lenis = null;
    };
  }, []);

  return null;
}
