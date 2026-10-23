import { Mail, Phone } from "lucide-react";
import PageBanner from "@/components/layout/PageBanner";
import ContactForm from "@/components/contact/ContactForm";
import { site } from "@/lib/content";

export const metadata = {
  title: "Contact Us",
  description: `Contact ${site.name} at ${site.phoneDisplay} or ${site.email}. ${site.address}.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="font-ui bg-[#f3f4f6] pb-16">
      <PageBanner title="CONTACT US" crumb="CONTACT US" />
      <div className="relative z-0 mt-5 h-[250px] w-full overflow-hidden sm:h-[380px]">
        <iframe
          title={`${site.name} location`}
          src={site.mapsEmbed}
          className="h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <p className="px-5 pt-3 text-center text-sm">
        <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-[#633633] underline">
          Get directions
        </a>
      </p>

      <div className="mx-auto mt-12 grid max-w-[1200px] grid-cols-1 gap-10 px-5 md:mt-20 md:grid-cols-2 md:gap-16">
        <div>
          <h2 className="mb-8 text-3xl font-bold">GET IN TOUCH</h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-8">
            <div className="min-h-[200px] rounded-xl bg-white p-7 shadow-[0_8px_25px_rgba(0,0,0,0.15)]">
              <h3 className="mb-2 text-xl font-bold">Address</h3>
              <p className="leading-7 text-[#4b5563]">
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
            <div className="min-h-[200px] rounded-xl bg-white p-7 shadow-[0_8px_25px_rgba(0,0,0,0.15)]">
              <div className="flex items-center gap-3.5">
                <Phone size={26} aria-hidden="true" />
                <div>
                  <h3 className="text-lg font-bold">Mobile</h3>
                  <p className="text-[#4b5563]">
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
              <div className="my-[18px] h-px bg-[#e5e7eb]" />
              <div className="flex items-center gap-3.5">
                <Mail size={26} aria-hidden="true" />
                <div className="min-w-0">
                  <h3 className="text-lg font-bold">Email</h3>
                  <p className="text-[#4b5563]">
                    <a href={`mailto:${site.email}`} className="break-all hover:underline">
                      {site.email}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 className="mb-6 text-3xl font-bold">FILL OUT THE FORM BELOW</h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
