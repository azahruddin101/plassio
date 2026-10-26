"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import Logo from "./Logo";
import SocialIcons from "./SocialIcons";
import { headerMenu, logoSrc, site } from "@/lib/content";
import Image from "next/image";
import { scrollPageToTop as scrollToTop } from "@/components/providers/SmoothScroll";

function childActive(pathname, href) {
  return pathname === href;
}

function parentActive(pathname, children) {
  return children.some((child) => pathname === child.href || pathname.startsWith(`${child.href}/`));
}

function DesktopMenu({ pathname }) {
  const [openLabel, setOpenLabel] = useState("");

  return (
    <nav className="hidden min-w-0 items-center gap-x-2 text-[14px] font-bold tracking-wide text-[#633633] uppercase lg:flex xl:gap-x-4 xl:text-[15px] xl:tracking-wider">
      {headerMenu.map((item) => {
        if (!item.children) {
          const active = item.href === "/" ? pathname === "/" : pathname === item.href;
          return (
            <Link
              key={item.label}
              href={item.href}
              aria-current={active ? "page" : undefined}
              onClick={scrollToTop}
              className="group relative shrink-0 py-2 text-[14px] font-bold tracking-wide uppercase whitespace-nowrap xl:text-[15px] xl:tracking-wider"
            >
              <span className={active ? "text-[#DE9C33]" : "transition group-hover:text-[#DE9C33]"}>{item.label}</span>
              <span
                className={`absolute -bottom-0.5 left-0 h-[2px] bg-gradient-to-r from-[#DE9C33] to-[#f7d07a] transition-all duration-300 ${
                  active ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          );
        }

        const open = openLabel === item.label;
        const active = parentActive(pathname, item.children);
        return (
          <div
            key={item.label}
            className="relative shrink-0"
            onMouseEnter={() => setOpenLabel(item.label)}
            onMouseLeave={() => setOpenLabel("")}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) setOpenLabel("");
            }}
          >
            <button
              type="button"
              aria-expanded={open}
              aria-haspopup="true"
              onClick={() => setOpenLabel(open ? "" : item.label)}
              onFocus={() => setOpenLabel(item.label)}
              className={`flex items-center gap-1 py-2 text-[14px] font-bold tracking-wide uppercase whitespace-nowrap transition xl:text-[15px] xl:tracking-wider ${active || open ? "text-[#DE9C33]" : "hover:text-[#DE9C33]"}`}
            >
              {item.label}
              <ChevronDown size={12} className={`text-[#DE9C33] transition ${open ? "rotate-180" : ""}`} aria-hidden="true" />
            </button>
            <div className={`absolute top-full left-0 z-50 pt-2 ${open ? "block" : "hidden"}`}>
              <div className="w-64 rounded-md border border-gray-200 bg-white p-2 shadow-md">
                {item.children.map((child) => {
                  const current = childActive(pathname, child.href);
                  return (
                    <Link
                      key={child.href}
                      href={child.href}
                      aria-current={current ? "page" : undefined}
                      onClick={() => {
                        setOpenLabel("");
                        scrollToTop();
                      }}
                      className={`block rounded px-3 py-2 text-[15px] font-medium tracking-normal normal-case ${
                        child.separated ? "mt-1 border-t border-gray-100 pt-3" : ""
                      } ${current ? "bg-[#f6f6f6] text-[#DE9C33]" : "text-[#633633] hover:bg-[#f6f6f6] hover:text-[#DE9C33]"}`}
                    >
                      {child.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </nav>
  );
}

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [section, setSection] = useState("");

  useEffect(() => {
    const scroller = document.getElementById("page-scroll");
    if (!scroller) return undefined;
    scroller.style.overflow = open ? "hidden" : "";
    return () => {
      scroller.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  function closeAndScroll() {
    setOpen(false);
    scrollToTop();
  }

  return (
    <>
      <header className="relative z-50 w-full shrink-0 border-b border-gray-200 bg-white shadow-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-3 px-4 md:h-24 md:px-6 xl:px-8">
          <div className="flex shrink-0 items-center gap-3 md:gap-4">
            <button
              type="button"
              className="text-[#633633] lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-navigation"
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <X size={30} /> : <Menu size={30} />}
            </button>
            <Logo />
          </div>

          <DesktopMenu pathname={pathname} />
          <SocialIcons />
        </div>
      </header>

      {open ? (
        <div className="fixed inset-0 z-40 lg:hidden">
          <button
            type="button"
            aria-label="Close menu"
            className="absolute inset-0 bg-black/50"
            onClick={() => setOpen(false)}
          />
          <nav
            id="mobile-navigation"
            className="absolute top-0 left-0 h-full w-80 max-w-[85vw] overflow-y-auto bg-[#633633] p-8 pt-24 text-white shadow-2xl"
            aria-label="Mobile"
          >
            <div className="mb-8 flex items-center gap-3">
              <span className="rounded-lg bg-white">
                <Image src={logoSrc} alt="" width={64} height={64} className="h-16 w-auto" />
              </span>
              <span>
                <span className="block font-serif text-xl font-bold">{site.wordmark}</span>
                <span className="text-xs tracking-[3px] text-[#DE9C33] uppercase">{site.wordmarkSub}</span>
              </span>
            </div>
            {headerMenu.map((item) => {
              if (!item.children) {
                const active = item.href === "/" ? pathname === "/" : pathname === item.href;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    onClick={closeAndScroll}
                    className={`block border-b border-white/20 py-4 text-lg hover:text-[#DE9C33] ${active ? "text-[#DE9C33]" : ""}`}
                  >
                    {item.label}
                  </Link>
                );
              }

              const expanded = section === item.label;
              return (
                <div key={item.label} className="border-b border-white/20">
                  <button
                    type="button"
                    aria-expanded={expanded}
                    onClick={() => setSection(expanded ? "" : item.label)}
                    className="flex w-full items-center justify-between py-4 text-left text-lg hover:text-[#DE9C33]"
                  >
                    {item.label}
                    <ChevronDown size={18} className={`text-[#DE9C33] transition ${expanded ? "rotate-180" : ""}`} aria-hidden="true" />
                  </button>
                  {expanded ? (
                    <div className="pb-3">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={closeAndScroll}
                          className={`block py-2 pl-3 text-sm text-white/90 hover:text-[#DE9C33] ${child.separated ? "mt-2 border-t border-white/10 pt-3" : ""}`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              );
            })}
          </nav>
        </div>
      ) : null}
    </>
  );
}
