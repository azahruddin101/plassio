import Image from "next/image";
import Link from "next/link";

export default function HomeServiceRoomCard({ room }) {
  const card = (
    <article className="group h-full w-full overflow-hidden border border-gray-100 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(71,102,70,0.12)]">
      <div className="relative h-52 overflow-hidden">
        <Image
          src={room.image}
          alt={room.name}
          fill
          sizes="(min-width: 640px) 320px, 100vw"
          className="object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />
      </div>
      <div className="p-6 sm:p-7">
        <span className="mb-3 inline-block border border-[#633633]/50 px-2.5 py-0.5 text-xs tracking-[0.18em] text-[#633633] uppercase">
          Accommodation
        </span>
        <h3
          className="mb-5 text-2xl font-semibold text-gray-900"
          style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
        >
          {room.name}
        </h3>
        <ul className="border-t border-gray-100 pt-4">
          {room.amenities.map((item) => (
            <li
              key={item}
              className="flex items-center gap-2.5 border-b border-gray-100 py-1.5 text-sm text-gray-500 last:border-b-0"
            >
              <span className="h-1 w-1 shrink-0 rounded-full bg-[#633633] opacity-70" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );

  if (!room.href) return card;
  return (
    <Link href={room.href} className="block h-full">
      {card}
    </Link>
  );
}
