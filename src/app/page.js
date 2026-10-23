import Link from "next/link";
import Image from "next/image";
import HeroCarousel from "@/components/home/HeroCarousel";
import DiscoverSlider from "@/components/home/DiscoverSlider";
import HomeServiceRoomCard from "@/components/home/HomeServiceRoomCard";
import { homeIntro, homeRooms, homeStories, landmarks, testimonials, site } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <HeroCarousel />

      <section className="bg-[#f8f8f8] px-4 py-16 md:py-24">
        <div className="mx-auto flex max-w-6xl flex-col items-center text-center">
          <h2 className="text-2xl font-semibold tracking-wider text-[#633633] sm:text-3xl md:text-4xl">
            {site.fullName}
          </h2>
          <Link
            href="/contact"
            className="mt-8 rounded-md bg-[#633633] px-8 py-3 text-base tracking-wider text-white shadow-lg transition duration-300 hover:scale-105 hover:bg-[#35170f] sm:px-10 sm:py-4 sm:text-lg"
          >
            Book Your Stay
          </Link>
          <div className="mt-10">
            <h3 className="font-sans text-xs tracking-[3px] text-gray-500 sm:text-sm">RESERVATION HOTLINE</h3>
            <p className="mt-2 text-xl font-semibold text-[#633633] sm:text-2xl">
              <a href={`tel:${site.phoneTel}`} className="hover:underline">
                {site.phoneHotline}
              </a>
            </p>
            <p className="mt-2 text-xs text-gray-500 italic sm:text-sm">{site.hotlineNote}</p>
          </div>
        </div>
      </section>

      <section className="py-0">
        <div className="flex flex-col md:flex-row">
          <div className="flex items-center bg-gray-50 p-8 md:w-1/2 md:p-14">
            <div className="max-w-xl">
              <h2 className="mb-8 text-3xl font-semibold tracking-wide text-[#633633] md:text-4xl">{homeIntro.heading}</h2>
              {homeIntro.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 24)} className="mb-6 text-base leading-relaxed text-gray-800">
                  {paragraph}
                </p>
              ))}
              <p className="text-base leading-relaxed text-gray-800">
                {homeIntro.closing}
                <span className="font-semibold text-[#633633]">{homeIntro.closingEmphasis}</span>.
              </p>
            </div>
          </div>
          <DiscoverSlider />
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-2 text-center text-xs tracking-[0.2em] text-gray-400 uppercase">Accommodation</p>
          <h2
            className="mb-4 text-center text-3xl font-medium tracking-wide text-[#633633] sm:text-4xl"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Services During Your Stay
          </h2>
          <div className="mb-12 flex items-center justify-center gap-3" aria-hidden="true">
            <div className="h-px w-14 bg-[#633633] opacity-30" />
            <div className="h-1.5 w-1.5 rotate-45 bg-[#633633] opacity-60" />
            <div className="h-px w-14 bg-[#633633] opacity-30" />
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {homeRooms.map((room) => (
              <HomeServiceRoomCard key={room.name} room={room} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/room-overview" className="text-sm font-semibold tracking-wider text-[#633633] underline">
              View all rooms and rates
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#f8f8f8] px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-2 text-center text-xs tracking-[0.2em] text-gray-400 uppercase">The hotel</p>
          <h2
            className="mb-10 text-center text-3xl font-medium tracking-wide text-[#633633] sm:text-4xl"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Stay. Dine. Celebrate.
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {homeStories.map((story) => (
              <Link key={story.href} href={story.href} className="group overflow-hidden border border-gray-100 bg-white transition hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(71,102,70,0.12)]">
                <div className="relative h-48 overflow-hidden">
                  <Image src={story.image} alt="" fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-[#633633]" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>{story.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{story.copy}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="mb-2 text-xs tracking-[0.2em] text-gray-400 uppercase">Guest notes</p>
            <h2 className="mb-8 text-3xl font-medium tracking-wide text-[#633633]" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
              From recent stays
            </h2>
            <div className="space-y-5">
              {testimonials.map((item) => (
                <blockquote key={item.name} className="border border-gray-100 bg-[#fafafa] p-5">
                  <p className="text-sm leading-relaxed text-gray-700">“{item.quote}”</p>
                  <footer className="mt-3 text-sm font-semibold text-[#633633]">
                    {item.name}
                    <span className="mt-1 block text-xs font-normal text-gray-500">{item.from}</span>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-2 text-xs tracking-[0.2em] text-gray-400 uppercase">Around the hotel</p>
            <h2 className="mb-8 text-3xl font-medium tracking-wide text-[#633633]" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
              Gomti Nagar Extension
            </h2>
            <ul className="divide-y divide-gray-100 border border-gray-100 bg-white">
              {landmarks.map((place) => (
                <li key={place.name} className="flex items-center justify-between gap-4 px-5 py-4 text-sm">
                  <span className="text-[#633633]">{place.name}</span>
                  <span className="shrink-0 text-gray-500">{place.distance} · {place.time}</span>
                </li>
              ))}
            </ul>
            <Link href="/location" className="mt-6 inline-block text-sm font-semibold text-[#633633] underline">Directions and map</Link>
          </div>
        </div>
      </section>
    </>
  );
}
