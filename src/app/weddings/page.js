import Image from "next/image";
import Link from "next/link";
import ContentPage, { greenButton } from "@/components/layout/ContentPage";
import { photos } from "@/lib/images";

export const metadata = {
  title: "Royal Weddings & Receptions in Lucknow",
  description: "Weddings at Hotel Palassio International with pillarless ballrooms, Awadhi catering, and 14 guest rooms.",
};

const points = [
  ["01", "Pillarless Ballrooms", "High ceilings, crystal chandeliers, stage setups, and green rooms for up to 400 wedding guests."],
  ["02", "Master Awadhi Catering", "Live tandoor counters, slow-cooked dum biryani, and artisanal dessert spreads."],
  ["03", "Bridal & Guest Stays", "14 luxurious guest rooms right above the venue ensure maximum comfort for wedding families."],
];

export default function WeddingsPage() {
  return (
    <ContentPage
      title="WEDDINGS"
      intro="Pillarless ballroom grandeur, live Awadhi galawati and biryani counters, presidential suite stays for newlyweds, and 14 guest rooms under one roof in Gomti Nagar Extension."
    >
      <div className="mb-8 overflow-hidden rounded-[14px]">
        <Image src={photos.wedding} alt="Wedding reception at Hotel Palassio International" width={1400} height={800} className="h-80 w-full object-cover" />
      </div>
      <div className="mb-8 text-center">
        <Link href="/contact" className={greenButton}>Plan your wedding</Link>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
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
