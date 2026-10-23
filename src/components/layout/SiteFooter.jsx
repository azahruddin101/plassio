import Link from "next/link";
import Image from "next/image";
import ContactStrip from "./ContactStrip";
import { logoSrc } from "@/lib/images";
import { site } from "@/lib/content";

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

const linkClass = "transition hover:text-black hover:underline";

function LinkColumn({ title, links }) {
  return (
    <div className="text-center">
      <h2 className="mb-6 font-sans text-lg font-semibold tracking-wide sm:text-xl">{title}</h2>
      <ul className="space-y-3 text-sm text-gray-200">
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
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-12 sm:px-6 sm:py-14 md:grid-cols-3 md:gap-12 md:py-16">
        <div className="text-center md:text-left">
          <div className="mb-7 flex items-center justify-center gap-4 md:justify-start">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-xl sm:h-24 sm:w-24">
              <Image src={logoSrc} alt="" width={64} height={64} className="h-14 w-14 object-contain sm:h-16 sm:w-16" />
            </div>
            <div className="leading-tight">
              <p className="font-serif text-3xl font-bold tracking-wide text-white sm:text-4xl">{site.wordmark}</p>
              <span className="text-xs font-semibold tracking-[3px] text-[#DE9C33] uppercase sm:text-sm sm:tracking-[4px]">
                {site.wordmarkSub}
              </span>
            </div>
          </div>
          <p className="mx-auto max-w-sm text-sm leading-relaxed text-gray-200 md:mx-0">
            A contemporary hospitality destination in Lucknow featuring 14 luxury rooms, 2 grand banquet halls, a multi-cuisine restaurant, and an open-air rooftop lounge in Gomti Nagar Extension.
          </p>
        </div>

        <LinkColumn title="Explore Palassio" links={explore} />
        <LinkColumn title="Guest Services" links={services} />
      </div>

      <div className="border-t border-[#35170f]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-10 sm:px-6 md:grid-cols-3 md:gap-12">
          <div className="text-center">
            <h2 className="mb-6 font-sans text-lg font-semibold tracking-wide sm:text-xl">Food Delivery</h2>
            <p className="mb-3 text-sm text-gray-200">Order online from our verified kitchen listings:</p>
            <ul className="space-y-3 text-sm text-gray-200">
              <li>
                <a href={site.swiggy} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  Order on Swiggy
                </a>
              </li>
              <li>
                <a href={site.zomato} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  Order on Zomato
                </a>
              </li>
            </ul>
          </div>
          <LinkColumn title="Hotel Policies" links={policies} />
          <div className="space-y-5 text-center text-sm text-gray-200">
            {notices.map((notice) => (
              <p key={notice.title}>
                <span className="font-semibold text-white">{notice.title}.</span> {notice.copy}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-[#35170f] py-5 text-center text-xs text-gray-200 sm:py-6 sm:text-sm">
        <p className="tracking-wide">{site.copyright}</p>
      </div>
    </footer>
  );
}
