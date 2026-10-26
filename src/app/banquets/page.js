import Image from "next/image";
import Link from "next/link";
import ContentPage, { goldButton } from "@/components/layout/ContentPage";
import { halls } from "@/lib/content";
import { photos } from "@/lib/images";

export const metadata = {
  title: "Banquet Halls & Event Venues",
  description: "Palassio Grand Ballroom and Royal Celebration Hall at Hotel Palassio International, Lucknow.",
};

export default function BanquetsPage() {
  return (
    <ContentPage
      title="BANQUET HALLS"
      intro="Pillarless architectural spaces equipped with high ceilings, sound systems, green rooms, and dedicated dining zones for weddings, conventions, and private celebrations."
    >
      <div className="space-y-8">
        {halls.map((hall, hallIndex) => (
          <article key={hall.id} className="grid overflow-hidden rounded-[14px] border border-[#eee] bg-white shadow-[0_8px_28px_rgba(0,0,0,0.08)] md:grid-cols-2">
            <Image src={photos[hall.image]} alt={hall.name} loading={hallIndex === 0 ? "eager" : "lazy"} placeholder="blur" sizes="(min-width: 1152px) 560px, (min-width: 768px) 50vw, 100vw" className="h-full min-h-64 w-full object-cover" />
            <div className="space-y-3 p-6">
              <p className="text-sm font-semibold text-[#DE9C33]">Capacity: {hall.capacity}</p>
              <h2 className="text-3xl font-semibold text-[#633633]">{hall.name}</h2>
              <p className="text-sm">Floor area: {hall.area}</p>
              <p className="text-sm leading-relaxed text-gray-600">{hall.description}</p>
              <h3 className="text-sm font-semibold text-[#633633]">Ideal events</h3>
              <ul className="flex flex-wrap gap-2 text-xs">
                {hall.events.map((event) => (
                  <li key={event} className="rounded-full border border-[#633633]/30 px-3 py-1 text-[#633633]">{event}</li>
                ))}
              </ul>
              <ul className="text-sm text-gray-600">
                {hall.specs.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <div className="flex flex-wrap gap-3 pt-2">
                <Link href={`/banquets/${hall.id}`} className={goldButton}>Hall details</Link>
                <Link href="/contact" className="self-center text-sm font-semibold text-[#633633] underline">Request a quote</Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </ContentPage>
  );
}
