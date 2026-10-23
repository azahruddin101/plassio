import ContentPage from "@/components/layout/ContentPage";
import { formatInr, menu } from "@/lib/content";

export const metadata = {
  title: "Rooftop Menu",
  description: "Signature dishes served at the Palassio rooftop lounge and restaurant.",
};

export default function RooftopMenuPage() {
  return (
    <ContentPage
      title="ROOFTOP MENU"
      intro="The rooftop kitchen serves the hotel’s signature Awadhi and multi-cuisine menu, with late service until 1:00 AM."
    >
      <ul className="mx-auto max-w-3xl divide-y divide-[#eee] rounded-[14px] border border-[#eee] bg-white px-6 shadow-[0_8px_28px_rgba(0,0,0,0.08)]">
        {menu.map((item) => (
          <li key={item.name} className="flex items-start justify-between gap-4 py-4">
            <div>
              <h2 className="font-semibold text-[#633633]">{item.name}</h2>
              <p className="mt-1 text-sm text-gray-600">{item.description}</p>
              <p className="mt-1 text-xs text-gray-500">{item.category}</p>
            </div>
            <p className="shrink-0 text-sm font-semibold text-[#633633]">{formatInr(item.price)}</p>
          </li>
        ))}
      </ul>
    </ContentPage>
  );
}
