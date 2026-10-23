import Link from "next/link";
import ContentPage from "@/components/layout/ContentPage";
import { offers } from "@/lib/content";

export const metadata = {
  title: "Offers & Privileges",
  description: "Direct booking benefits and seasonal privileges published by Hotel Palassio International.",
};

export default function OffersPage() {
  return (
    <ContentPage title="OFFERS" intro="Direct booking benefits, promotional codes, and seasonal dining privileges.">
      <div className="grid gap-6 md:grid-cols-3">
        {offers.map((offer) => (
          <article key={offer.code} className="flex flex-col rounded-[14px] border border-[#eee] bg-white p-6 shadow-[0_8px_28px_rgba(0,0,0,0.08)]">
            <p className="text-xs font-semibold tracking-[0.18em] text-[#DE9C33] uppercase">{offer.kicker}</p>
            <p className="mt-3 text-xs tracking-[0.14em] text-gray-500 uppercase">{offer.group}</p>
            <h2 className="mt-2 text-2xl font-semibold text-[#633633]">{offer.title}</h2>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-600">{offer.description}</p>
            <p className="mt-4 text-sm font-semibold text-[#633633]">Code: {offer.code}</p>
            <p className="text-xs text-gray-500">{offer.validity}</p>
            <Link href={offer.href} className="mt-4 text-sm font-semibold text-[#633633] underline">Details</Link>
          </article>
        ))}
      </div>
    </ContentPage>
  );
}
