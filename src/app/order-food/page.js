import ContentPage from "@/components/layout/ContentPage";
import { site } from "@/lib/content";

export const metadata = {
  title: "Order Online",
  description: "Order from Hotel Palassio International through the Swiggy and Zomato links published on the hotel site.",
};

export default function OrderFoodPage() {
  return (
    <ContentPage
      title="ORDER FOOD"
      intro="Authentic Awadhi delicacies and multi-cuisine dishes. These links open the same Swiggy and Zomato destinations published on the hotel website."
    >
      <div className="grid gap-6 md:grid-cols-2">
        <a href={site.swiggy} target="_blank" rel="noopener noreferrer" className="rounded-[14px] border border-[#eee] bg-white p-6 shadow-[0_8px_28px_rgba(0,0,0,0.08)] transition hover:-translate-y-0.5">
          <p className="text-xs font-semibold tracking-[0.18em] text-[#DE9C33] uppercase">Swiggy</p>
          <h2 className="mt-2 text-3xl font-semibold text-[#633633]">Order on Swiggy</h2>
          <p className="mt-2 text-sm text-gray-600">Delivery across Gomti Nagar Extension.</p>
        </a>
        <a href={site.zomato} target="_blank" rel="noopener noreferrer" className="rounded-[14px] border border-[#eee] bg-white p-6 shadow-[0_8px_28px_rgba(0,0,0,0.08)] transition hover:-translate-y-0.5">
          <p className="text-xs font-semibold tracking-[0.18em] text-[#DE9C33] uppercase">Zomato</p>
          <h2 className="mt-2 text-3xl font-semibold text-[#633633]">Order on Zomato</h2>
          <p className="mt-2 text-sm text-gray-600">Dining offers and the published menu listing.</p>
        </a>
      </div>
    </ContentPage>
  );
}
