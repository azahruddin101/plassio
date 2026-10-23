import ContentPage from "@/components/layout/ContentPage";
import { landmarks, site } from "@/lib/content";

export const metadata = {
  title: "Location & Directions",
  description: "Hotel Palassio International, Plot No. 6/C-921, Sector-6, Gomti Nagar Extension, Lucknow 226010.",
};

export default function LocationPage() {
  return (
    <ContentPage title="LOCATION" intro="Sector-6, Gomti Nagar Extension, Lucknow.">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-[14px] border border-[#eee] bg-white p-6 shadow-[0_8px_28px_rgba(0,0,0,0.08)]">
          <h2 className="text-sm font-semibold tracking-[0.14em] text-[#633633]">Property address</h2>
          <p className="mt-3 leading-relaxed">{site.addressLine}</p>
          <h2 className="mt-8 text-sm font-semibold tracking-[0.14em] text-[#633633]">Proximity landmarks</h2>
          <ul className="mt-3 divide-y divide-[#eee]">
            {landmarks.map((place) => (
              <li key={place.name} className="flex justify-between gap-4 py-3 text-sm">
                <span>{place.name}</span>
                <span className="shrink-0 text-gray-600">{place.distance} · {place.time}</span>
              </li>
            ))}
          </ul>
          <h2 className="mt-8 text-sm font-semibold tracking-[0.14em] text-[#633633]">Reception desk</h2>
          <p className="mt-3 text-sm">Phone: <a className="font-semibold text-[#633633] underline" href={`tel:${site.phoneDeskTel}`}>{site.phoneDesk}</a></p>
          <p className="mt-1 break-all text-sm">Email: <a className="font-semibold text-[#633633] underline" href={`mailto:${site.email}`}>{site.email}</a></p>
          <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="mt-6 inline-block text-sm font-semibold text-[#633633] underline">Open directions in Google Maps</a>
        </div>
        <div className="relative z-0 h-96 overflow-hidden rounded-[14px]">
          <iframe title="Map to Hotel Palassio International" src={site.mapsEmbed} className="h-full w-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
      </div>
    </ContentPage>
  );
}
