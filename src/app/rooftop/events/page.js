import Image from "next/image";
import Link from "next/link";
import ContentPage from "@/components/layout/ContentPage";
import { rooftopEvents } from "@/lib/content";

export const metadata = {
  title: "Rooftop Events & DJ Nights",
  description: "Friday acoustic nights and Saturday DJ nights at the Palassio rooftop lounge.",
};

export default function RooftopEventsPage() {
  return (
    <ContentPage title="LIVE MUSIC & DJ NIGHTS" intro="Join us every weekend for acoustic music, craft beverages, and skyline views.">
      <div className="grid gap-6 md:grid-cols-2">
        {rooftopEvents.map((event) => (
          <article key={event.title} className="overflow-hidden rounded-[14px] border border-[#eee] bg-white shadow-[0_8px_28px_rgba(0,0,0,0.08)]">
            <Image src={event.image} alt={event.title} width={1000} height={640} className="h-56 w-full object-cover" />
            <div className="p-6">
              <p className="text-xs font-semibold tracking-[0.18em] text-[#DE9C33] uppercase">{event.when}</p>
              <p className="mt-2 text-sm text-gray-600">{event.time}</p>
              <h2 className="mt-3 text-2xl font-semibold text-[#633633]">{event.title}</h2>
              <p className="mt-2 text-sm">Artist: {event.artist}</p>
              <p className="mt-3 text-sm text-gray-600">{event.copy}</p>
              <p className="mt-3 text-sm font-medium text-[#633633]">{event.note}</p>
              <Link href="/contact" className="mt-4 inline-block text-sm font-semibold text-[#633633] underline">Reserve a table</Link>
            </div>
          </article>
        ))}
      </div>
    </ContentPage>
  );
}
