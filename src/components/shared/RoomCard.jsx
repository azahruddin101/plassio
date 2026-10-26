import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import Button from "@/components/ui/Button";
import { roomImage } from "@/lib/images";

export default function RoomCard({ room, showDetails = true }) {
  const amenities = room.overviewAmenities ?? room.amenities;

  return (
    <article className="overflow-hidden rounded-lg border border-brand-green/10 bg-surface shadow-sm dark:border-white/10">
      <div className="relative aspect-[4/3]">
        <Image
          src={roomImage(room.id)}
          alt={room.title}
          fill
          placeholder="blur"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <p className="text-xs uppercase tracking-widest text-brand-gold">{room.subtitle}</p>
        <h3 className="mt-1 font-serif text-2xl text-brand-green dark:text-brand-cream">
          {room.title}
        </h3>
        <p className="mt-2 text-sm text-muted">{room.description}</p>
        {showDetails && (
          <>
            <h4 className="mt-5 text-sm font-semibold uppercase tracking-wider text-brand-green dark:text-brand-gold">
              Room Amenities
            </h4>
            <ul className="mt-3 space-y-2">
              {amenities.slice(0, 7).map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-muted">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href={`/room/${room.id}`} variant="outline">
                View Details
              </Button>
              <Button href="/contact">Book Now</Button>
            </div>
          </>
        )}
        {!showDetails && (
          <Link
            href={`/room/${room.id}`}
            className="mt-4 inline-block text-sm font-semibold uppercase tracking-wider text-brand-gold hover:underline"
          >
            Explore room →
          </Link>
        )}
      </div>
    </article>
  );
}
