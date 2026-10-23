import { Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/lib/content";

export default function ContactStrip() {
  return (
    <div className="bg-[#E6B84C] py-10 sm:py-12 md:py-14">
      <div className="mx-auto grid max-w-7xl grid-cols-1 justify-items-center gap-8 px-4 sm:px-6 md:grid-cols-2 md:gap-10">
        <div className="w-full max-w-md rounded-lg bg-[#633633] p-6 text-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
          <div className="mb-4 flex items-center gap-3">
            <MapPin className="h-5 w-5" aria-hidden="true" />
            <h2 className="font-sans text-lg font-semibold sm:text-xl">Address</h2>
          </div>
          <p className="text-sm leading-relaxed text-gray-200">
            <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
              {site.contactAddress.map((line) => (
                <span key={line}>
                  {line}
                  <br />
                </span>
              ))}
            </a>
          </p>
        </div>

        <div className="w-full max-w-md rounded-lg bg-[#633633] p-6 text-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
          <div className="mb-5 flex items-start gap-4">
            <Phone className="mt-1 h-6 w-6" aria-hidden="true" />
            <div>
              <h2 className="font-sans text-lg font-semibold">Mobile</h2>
              <p className="text-sm text-gray-200">
                <a href={`tel:${site.phoneTel}`} className="hover:underline">
                  {site.phoneDisplay}
                </a>
                <br />
                <a href={`tel:${site.phoneDeskTel}`} className="hover:underline">
                  {site.phoneDesk}
                </a>
              </p>
            </div>
          </div>
          <div className="my-4 border-t border-[#faf0e8]/30" />
          <div className="flex items-start gap-4">
            <Mail className="mt-1 h-6 w-6" aria-hidden="true" />
            <div className="min-w-0">
              <h2 className="font-sans text-lg font-semibold">Email</h2>
              <p className="text-sm text-gray-200">
                <a href={`mailto:${site.email}`} className="break-all hover:underline">
                  {site.email}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
