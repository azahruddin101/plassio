import Image from "next/image";
import Link from "next/link";
import ContentPage, { greenButton } from "@/components/layout/ContentPage";
import { photos } from "@/lib/images";

export const metadata = {
  title: "Corporate Stays & Business Conferences",
  description: "Corporate rates, GST invoices, and meeting facilities at Hotel Palassio International, Lucknow.",
};

const points = [
  ["01", "Corporate Stays", "Discounted annual room rates for IT, consulting, engineering, and government executives."],
  ["02", "Meetings & Seminars", "AV-equipped conference halls with projector setups, PA systems, and high-speed Wi-Fi."],
  ["03", "Group Bookings", "Seamless block reservations for corporate teams, sports delegations, and event attendees."],
  ["04", "Events & Product Launches", "Pillarless Grand Ballroom featuring LED backdrop support and stage setups."],
  ["05", "Executive Dining", "Custom corporate breakfast spreads and working lunches."],
];

export default function CorporatePage() {
  return (
    <ContentPage
      title="CORPORATE"
      intro="Tailored corporate room tariff agreements, GST compliant invoicing, high-speed Wi-Fi, ergonomically designed work desks, and AV-equipped conference halls for corporate delegations in Lucknow."
    >
      <div className="mb-8 overflow-hidden rounded-[14px]">
        <Image src={photos.corporate} alt="Corporate meeting space at Hotel Palassio International" width={1400} height={800} className="h-72 w-full object-cover" />
      </div>
      <div className="mb-8 text-center">
        <Link href="/contact" className={greenButton}>Request corporate rates</Link>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {points.map(([n, title, copy]) => (
          <article key={n} className="rounded-[14px] border border-[#eee] bg-white p-6 shadow-[0_8px_28px_rgba(0,0,0,0.08)]">
            <p className="text-xs font-semibold tracking-[0.2em] text-[#DE9C33]">{n}</p>
            <h2 className="mt-2 text-2xl font-semibold text-[#633633]">{title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-600">{copy}</p>
          </article>
        ))}
      </div>
    </ContentPage>
  );
}
