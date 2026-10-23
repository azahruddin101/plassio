"use client";

import { Moon, Sun } from "lucide-react";
import { useThemeStore } from "@/stores/theme-store";
import { cn } from "@/lib/utils";

export default function ThemeToggle({ className }) {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
      className={cn(
        "flex h-10 w-10 items-center justify-center rounded-full border border-brand-green/20 text-brand-green transition hover:bg-brand-green/10 dark:border-brand-cream/20 dark:text-brand-cream dark:hover:bg-white/10",
        className,
      )}
    >
      {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
    </button>
  );
}
