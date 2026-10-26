import Link from "next/link";
import Image from "next/image";
import ContactStrip from "./ContactStrip";
import { logoSrc, site } from "@/lib/content";

const explore = [
  { href: "/rooms", label: "Luxury Rooms & Suites" },
  { href: "/dining", label: "Multi-Cuisine Dining" },
  { href: "/rooftop", label: "Rooftop Lounge" },
  { href: "/banquets", label: "Banquet Halls" },
  { href: "/weddings", label: "Weddings & Receptions" },
  { href: "/corporate", label: "Corporate Rates" },
  { href: "/offers", label: "Special Offers" },
  { href: "/gallery", label: "Photo Gallery" },
];

const services = [
  { href: "/book", label: "Book Room Online" },
  { href: "/location", label: "Location & Directions" },
  { href: "/guest-club", label: "Palassio Guest Club" },
  { href: "/digital-hub", label: "In-Stay Guest Hub" },
  { href: "/faq", label: "Frequently Asked Questions" },
  { href: "/blog", label: "Lucknow Travel Guide" },
  { href: "/contact", label: "Contact Us" },
];

const policies = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms & Conditions" },
  { href: "/cancellation-policy", label: "Cancellation Policy" },
  { href: "/refund-policy", label: "Refund Policy" },
];

const notices = [
  {
    title: "FSSAI Compliance Notice",
    copy: "FSSAI compliance setup in process for primary hotel dining. (Current certificate on record: The Multicuisine Rasoi / Shraddha Soni - Mobile Food Vendor registration).",
  },
  {
    title: "CCPA Service Charge Policy",
    copy: "In strict compliance with CCPA guidelines, service charge is not automatically added or mandatory; tips/gratuities are purely voluntary.",
  },
  {
    title: "GST Billing Architecture",
    copy: "GST billing structured as per standard Indian hospitality tax regulations. Final GSTIN to be printed on tax invoices.",
  },
];

const linkClass = "transition hover:text-white hover:underline";

function LinkColumn({ title, links, className, listClassName }) {
  return (
    <div className={className}>
      <h2 className="mb-3 font-sans text-xs font-semibold tracking-[0.18em] text-[#DE9C33] uppercase">{title}</h2>
      <ul className={listClassName ?? "space-y-1.5 text-sm text-gray-200"}>
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className={linkClass}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function SiteFooter() {
  return (
    <footer className="relative z-0 bg-[#633633] text-white">
      <ContactStrip />
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-6 gap-y-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:gap-10">
        <div className="col-span-2 lg:col-span-1">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white shadow-lg">
              <Image src={logoSrc} alt="" width={40} height={40} className="h-10 w-10 object-contain" />
            </div>
            <div className="leading-tight">
              <p className="font-serif text-2xl font-bold tracking-wide text-white">{site.wordmark}</p>
              <span className="text-xs font-semibold tracking-[3px] text-[#DE9C33] uppercase">{site.wordmarkSub}</span>
            </div>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-gray-200">
            A contemporary hospitality destination in Lucknow featuring 14 luxury rooms, 2 grand banquet halls, a multi-cuisine restaurant, and an open-air rooftop lounge in Gomti Nagar Extension.
          </p>
          <p className="mt-4 text-sm text-gray-200">
            Food delivery:{" "}
            <a href={site.swiggy} target="_blank" rel="noopener noreferrer" className={`font-semibold text-white ${linkClass}`}>
              Swiggy
            </a>
            <span aria-hidden="true"> · </span>
            <a href={site.zomato} target="_blank" rel="noopener noreferrer" className={`font-semibold text-white ${linkClass}`}>
              Zomato
            </a>
          </p>
        </div>

        <LinkColumn title="Explore Palassio" links={explore} />
        <LinkColumn title="Guest Services" links={services} />
        <LinkColumn
          title="Hotel Policies"
          links={policies}
          className="col-span-2 lg:col-span-1"
          listClassName="grid grid-cols-2 gap-x-6 gap-y-1.5 text-sm text-gray-200 lg:block lg:space-y-1.5"
        />
      </div>

      <div className="border-t border-[#35170f]">
        <div className="mx-auto max-w-7xl px-4 py-5 text-xs leading-relaxed text-gray-300 sm:px-6">
          <div className="grid gap-2 md:grid-cols-3 md:gap-6">
            {notices.map((notice) => (
              <p key={notice.title}>
                <span className="font-semibold text-gray-100">{notice.title}.</span> {notice.copy}
              </p>
            ))}
          </div>
          <p className="mt-4 border-t border-[#35170f] pt-4 text-center tracking-wide text-gray-200">{site.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
