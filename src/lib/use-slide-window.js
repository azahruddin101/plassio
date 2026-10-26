import { useState } from "react";

/**
 * Decides which carousel slides to mount. Only the active slide and the one
 * after it are rendered up front, so a page does not download every slide on
 * load; slides stay mounted once shown so revisiting them is instant.
 */
export function useSlideWindow(index, count) {
  const [seen, setSeen] = useState(() => new Set([index]));
  const next = (index + 1) % count;

  if (!seen.has(index) || !seen.has(next)) {
    setSeen(new Set(seen).add(index).add(next));
  }

  return (slideIndex) => slideIndex === index || slideIndex === next || seen.has(slideIndex);
}
