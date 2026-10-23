import Image from "next/image";
import Link from "next/link";
import ContentPage, { goldButton, greenButton } from "@/components/layout/ContentPage";
import { formatInr, menu, site } from "@/lib/content";
import { photos } from "@/lib/images";

export const metadata = {
  title: "Multi-Cuisine Restaurant & Fine Dining",
  description: "Awadhi and multi-cuisine dining at Hotel Palassio International, open 7:00 AM to 11:00 PM.",
};

export default function DiningPage() {
  return (
    <ContentPage
      title="DINING"
      intro="From legendary melt-in-mouth Lucknowi Galawati Kebabs to rich Mughlai curries, fragrant biryanis, and oriental delicacies. Experience culinary mastery in Gomti Nagar Extension."
    >
      <div className="mb-8 flex flex-wrap justify-center gap-3">
        <Link href="/contact" className={greenButton}>Reserve a Table</Link>
        <a href={site.swiggy} target="_blank" rel="noopener noreferrer" className={goldButton}>Swiggy</a>
        <a href={site.zomato} target="_blank" rel="noopener noreferrer" className={goldButton}>Zomato</a>
      </div>
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="overflow-hidden rounded-[14px]">
          <Image src={photos.dining} alt="Dining at Hotel Palassio International" width={1200} height={800} className="h-80 w-full object-cover lg:h-full" />
        </div>
        <div className="rounded-[14px] border border-[#eee] bg-white p-6 shadow-[0_8px_28px_rgba(0,0,0,0.08)]">
          <h2 className="text-3xl font-semibold text-[#633633]">Signature Culinary Menu</h2>
          <p className="mt-2 text-sm text-gray-600">Timings: 7:00 AM – 11:00 PM</p>
          <ul className="mt-4 divide-y divide-[#eee]">
            {menu.map((item) => (
              <li key={item.name} className="flex items-start justify-between gap-4 py-4">
                <div>
                  <h3 className="font-semibold text-[#633633]">
                    {item.name}
                    {item.bestseller ? <span className="ml-2 text-xs tracking-[0.14em] text-[#DE9C33]">BESTSELLER</span> : null}
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">{item.description}</p>
                  <p className="mt-1 text-xs text-gray-500">{item.category}</p>
                </div>
                <p className="shrink-0 text-sm font-semibold text-[#633633]">{formatInr(item.price)}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-8 overflow-hidden rounded-[14px]">
        <Image src={photos.biryani} alt="Awadhi Dum Biryani and Galawati Kebabs" width={1400} height={800} className="h-72 w-full object-cover" />
      </div>
    </ContentPage>
  );
}
