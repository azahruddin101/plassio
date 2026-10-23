"use client";

import { useEffect } from "react";
import { useThemeStore } from "@/stores/theme-store";

export default function ThemeProvider({ children }) {
  const theme = useThemeStore((s) => s.theme);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
  }, [theme]);

  return children;
}
