import Image from "next/image";
import Link from "next/link";
import { logoSrc, site } from "@/lib/content";
import { cn } from "@/lib/utils";

export default function Logo({ tone = "dark", compact = false, imageOnly = false }) {
  const light = tone === "light";

  return (
    <Link href="/" className="group flex items-center gap-3 md:gap-4">
      <Image
        src={logoSrc}
        alt=""
        width={112}
        height={112}
        priority
        className={cn(
          "w-auto object-contain",
          compact ? "h-12 sm:h-14" : "h-14 md:h-[4.5rem]",
        )}
      />
      {imageOnly ? null : (
        <span className="leading-tight">
          <span
            className={cn(
              "block font-serif font-bold tracking-wide",
              compact ? "text-3xl sm:text-4xl" : "text-2xl md:text-4xl",
              light ? "text-white" : "text-[#633633]",
            )}
          >
            {site.wordmark}
          </span>
          <span
            className={cn(
              "block font-semibold uppercase text-[#DE9C33]",
              compact
                ? "text-xs tracking-[3px] sm:text-sm sm:tracking-[4px]"
                : "text-xs tracking-[3px] md:text-sm md:tracking-[4px]",
            )}
          >
            {site.wordmarkSub}
          </span>
        </span>
      )}
    </Link>
  );
}
