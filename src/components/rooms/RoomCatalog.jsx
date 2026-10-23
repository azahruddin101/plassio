import Link from "next/link";
import Image from "next/image";
import { Check } from "lucide-react";
import { formatInr, overviewRooms, rooms } from "@/lib/content";

export default function RoomCatalog() {
  return (
    <div className="mx-auto mt-6 grid w-[92%] max-w-[1100px] grid-cols-1 gap-5 md:mt-12 md:grid-cols-2 md:gap-8">
      {overviewRooms.map((room) => {
        const published = rooms.find((item) => item.name === room.title);
        return (
          <article
            key={room.id}
            className="rounded-[14px] border border-[#eee] bg-white p-4 shadow-[0_8px_28px_rgba(0,0,0,0.08)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_48px_rgba(0,0,0,0.14)] sm:p-7"
          >
            <h2 className="m-0 mb-2 border-b-2 border-[#e0a24a] pb-2 text-xl font-bold text-[#633633] md:text-[1.6rem]">
              {room.title}
            </h2>
            {published ? (
              <p className="mb-4 text-sm font-semibold text-[#633633]">
                Starting {formatInr(published.price)} / night · {published.size} · {published.bed}
              </p>
            ) : null}
            {published ? <p className="mb-4 text-sm leading-relaxed text-[#555]">{published.description}</p> : null}
            <div className="flex flex-col items-start gap-4 sm:flex-row">
              <div className="w-full shrink-0 overflow-hidden rounded-[10px] sm:w-[38%] sm:max-w-[240px]">
                <Image
                  src={room.image}
                  alt={room.title}
                  width={480}
                  height={360}
                  className="aspect-[4/3] w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>
              <div className="min-w-0 flex-1 text-sm">
                <p className="mb-2.5 leading-relaxed">
                  <span className="block font-bold text-[#633633]">Maximum Occupancy :</span>
                  <span className="text-[#555]">{room.occupancy}</span>
                </p>
                <p className="mb-2.5 leading-relaxed">
                  <span className="block font-bold text-[#633633]">Included Guests :</span>
                  <span className="text-[#555]">{room.included}</span>
                </p>
                <p className="leading-relaxed">
                  <span className="block font-bold text-[#633633]">Minimum Stay :</span>
                  <span className="text-[#555]">{room.stay}</span>
                </p>
              </div>
            </div>
            <h3 className="mt-6 mb-2.5 text-center text-base font-bold text-[#633633] md:text-lg">Room Amenities</h3>
            <div className="mx-auto grid w-full grid-cols-1 gap-x-4 gap-y-1.5 text-sm text-[#444] min-[400px]:grid-cols-2">
              {room.amenities.map((item) => (
                <div key={item} className="flex items-center gap-1.5">
                  <Check size={12} className="shrink-0 text-[#e0a24a]" aria-hidden="true" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <Link
              href={`/room/${room.id}`}
              className="mx-auto mt-5 block w-fit rounded-lg bg-gradient-to-br from-[#e0a24a] to-[#c8892e] px-7 py-2.5 text-sm font-bold tracking-wide text-white shadow-[0_4px_12px_rgba(224,162,74,0.35)] transition hover:scale-[1.03] hover:opacity-90"
            >
              View Details
            </Link>
          </article>
        );
      })}
    </div>
  );
}
