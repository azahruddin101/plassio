import ContentPage from "@/components/layout/ContentPage";
import { faqs } from "@/lib/content";

export const metadata = {
  title: "Frequently Asked Questions",
  description: "Answers about stays, dining, rooftop hours, and banquet capacity at Hotel Palassio International.",
};

export default function FaqPage() {
  return (
    <ContentPage title="FAQ" intro="Clear answers regarding room stays, banquet events, food ordering, and hotel policies.">
      <div className="mx-auto max-w-3xl space-y-8">
        {faqs.map((group) => (
          <section key={group.group}>
            <h2 className="text-2xl font-semibold text-[#633633]">{group.group}</h2>
            <div className="mt-3 space-y-3">
              {group.items.map((item) => (
                <details key={item.q} className="rounded-[14px] border border-[#eee] bg-white p-4 shadow-[0_8px_28px_rgba(0,0,0,0.05)]">
                  <summary className="cursor-pointer font-medium text-[#633633]">{item.q}</summary>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.a}</p>
                </details>
              ))}
            </div>
          </section>
        ))}
      </div>
    </ContentPage>
  );
}
