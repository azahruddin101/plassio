import Image from "next/image";
import Link from "next/link";
import ContentPage, { greenButton } from "@/components/layout/ContentPage";
import { rooftopEvents } from "@/lib/content";
import { photos } from "@/lib/images";

export const metadata = {
  title: "Destination Rooftop Lounge",
  description: "Open-air rooftop lounge at Hotel Palassio International, open 5:00 PM to 1:00 AM.",
};

const notes = [
  ["Craft Drinks & Sizzlers", "Exotic mocktails, fresh beverages, and live charcoal tandoori appetizers served fresh to your table."],
  ["Acoustic & DJ Nights", "Friday Acoustic Unplugged sessions and Saturday Rooftop Beats under the open sky."],
  ["Late-Night Dining", "Kitchen operates till 1:00 AM for late diners, corporate teams, and celebration parties."],
];

export default function RooftopPage() {
  return (
    <ContentPage
      title="ROOFTOP LOUNGE"
      intro="Elevate your evening above Gomti Nagar Extension. Enjoy sunset skyline views, live acoustic music, sizzlers, and late-night dining until 1:00 AM."
    >
      <div className="mb-8 flex flex-wrap justify-center gap-3">
        <Link href="/contact" className={greenButton}>Reserve a Rooftop Table</Link>
        <Link href="/rooftop/menu" className="rounded-md border border-[#633633] px-6 py-3 text-sm tracking-wider text-[#633633]">View Rooftop Menu</Link>
      </div>
      <div className="overflow-hidden rounded-[14px]">
        <Image src={photos.rooftop} alt="Rooftop lounge at Hotel Palassio International" width={1400} height={800} className="h-80 w-full object-cover" />
      </div>
      <div className="mt-8 rounded-[14px] border border-[#eee] bg-white p-6 shadow-[0_8px_28px_rgba(0,0,0,0.08)]">
        <h2 className="text-3xl font-semibold text-[#633633]">Lucknow Skyline & Star-lit Evenings</h2>
        <p className="mt-4 max-w-3xl text-gray-700">
          Soft ambient lighting, cool open-air breezes, live acoustic guitar sets on Fridays, and DJ nights on Saturdays. Unwind with friends after matches at Ekana Cricket Stadium.
        </p>
        <dl className="mt-6 grid gap-4 text-sm sm:grid-cols-2">
          <div><dt className="font-semibold text-[#633633]">Hours</dt><dd>5:00 PM – 1:00 AM</dd></div>
          <div><dt className="font-semibold text-[#633633]">Seating</dt><dd>Open Terrace & VIP Lounge</dd></div>
        </dl>
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {notes.map(([title, copy]) => (
          <article key={title} className="rounded-[14px] border border-[#eee] bg-white p-5 shadow-[0_8px_28px_rgba(0,0,0,0.06)]">
            <h3 className="text-xl font-semibold text-[#633633]">{title}</h3>
            <p className="mt-2 text-sm text-gray-600">{copy}</p>
          </article>
        ))}
      </div>
      <div className="mt-10">
        <div className="mb-4 flex items-end justify-between gap-4">
          <h2 className="text-3xl font-semibold text-[#633633]">Rooftop Night Schedule</h2>
          <Link href="/rooftop/events" className="text-sm font-semibold text-[#633633] underline">All events</Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {rooftopEvents.map((event) => (
            <article key={event.title} className="overflow-hidden rounded-[14px] border border-[#eee] bg-white shadow-[0_8px_28px_rgba(0,0,0,0.06)]">
              <Image src={event.image} alt={event.title} width={900} height={500} className="h-48 w-full object-cover" />
              <div className="p-5">
                <p className="text-xs font-semibold tracking-[0.18em] text-[#DE9C33] uppercase">{event.when}</p>
                <h3 className="mt-2 text-2xl font-semibold text-[#633633]">{event.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{event.time} · {event.note}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </ContentPage>
  );
}
