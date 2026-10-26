import { Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/lib/content";

const itemClass = "flex min-w-0 items-start gap-2.5";
const iconClass = "mt-0.5 h-4 w-4 shrink-0";

export default function ContactStrip() {
  return (
    <div className="bg-[#E6B84C] text-[#35170f]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-3 px-4 py-4 text-sm sm:px-6 md:grid-cols-3 md:gap-6">
        <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className={`${itemClass} hover:underline`}>
          <MapPin className={iconClass} aria-hidden="true" />
          <span>{site.contactAddress.join(" ")}</span>
        </a>
        <p className={itemClass}>
          <Phone className={iconClass} aria-hidden="true" />
          <span>
            <a href={`tel:${site.phoneTel}`} className="font-semibold hover:underline">
              {site.phoneDisplay}
            </a>
            <span aria-hidden="true"> · </span>
            <a href={`tel:${site.phoneDeskTel}`} className="hover:underline">
              {site.phoneDesk}
            </a>
          </span>
        </p>
        <p className={itemClass}>
          <Mail className={iconClass} aria-hidden="true" />
          <a href={`mailto:${site.email}`} className="break-all hover:underline">
            {site.email}
          </a>
        </p>
      </div>
    </div>
  );
}
