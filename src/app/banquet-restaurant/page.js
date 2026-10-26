import PageBanner from "@/components/layout/PageBanner";
import BanquetShowcase from "@/components/banquet/BanquetShowcase";
import { banquetSlides } from "@/lib/images";

export const metadata = {
  title: "Banquet & Restaurant",
  description:
    "Palassio Grand Ballroom and Royal Celebration Hall, plus Awadhi and multi-cuisine dining at Hotel Palassio International, Lucknow.",
  alternates: { canonical: "/banquet-restaurant" },
};

export default function BanquetPage() {
  return (
    <div className="font-ui bg-[#f5f5f5] pb-16">
      <PageBanner title="BANQUET & RESTAURANT" crumb="BANQUET & RESTAURANT" />
      <div className="mt-8 lg:mt-12">
        <BanquetShowcase slides={banquetSlides} />
      </div>
    </div>
  );
}
