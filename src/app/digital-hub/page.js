import Link from "next/link";
import ContentPage from "@/components/layout/ContentPage";
import { site, whatsappHref } from "@/lib/content";

export const metadata = {
  title: "In-Stay Guest Digital Hub",
  description: "In-stay dining, reception, and housekeeping contacts published by Hotel Palassio International.",
};

export default function DigitalHubPage() {
  const housekeeping = whatsappHref({ type: "general", notes: "Housekeeping request from the in-stay guest hub." });
  const dining = whatsappHref({ type: "food_order" });
  return (
    <ContentPage title="GUEST HUB" intro="Welcome to Hotel Palassio International. Direct guest actions during your stay.">
      <div className="grid gap-4 md:grid-cols-2">
        <article className="rounded-[14px] border border-[#eee] bg-white p-6 shadow-[0_8px_28px_rgba(0,0,0,0.08)]">
          <h2 className="text-xl font-semibold text-[#633633]">In-room high-speed Wi-Fi</h2>
          <p className="mt-2 text-sm leading-relaxed text-gray-600">High-speed Wi-Fi is included in every room. Ask reception for the network name when you check in.</p>
        </article>
        <article className="rounded-[14px] border border-[#eee] bg-white p-6 shadow-[0_8px_28px_rgba(0,0,0,0.08)]">
          <h2 className="text-xl font-semibold text-[#633633]">In-room dining</h2>
          <p className="mt-2 text-sm text-gray-600">Order room service on WhatsApp, or open the restaurant menu.</p>
          <p className="mt-3 space-x-4 text-sm">
            <Link href="/dining" className="font-semibold text-[#633633] underline">View menu</Link>
            <a href={dining} target="_blank" rel="noopener noreferrer" className="font-semibold text-[#633633] underline">WhatsApp</a>
          </p>
        </article>
        <article className="rounded-[14px] border border-[#eee] bg-white p-6 shadow-[0_8px_28px_rgba(0,0,0,0.08)]">
          <h2 className="text-xl font-semibold text-[#633633]">Reception</h2>
          <p className="mt-2 text-sm text-gray-600">Dial 0 on the room phone, or call the desk.</p>
          <a href={`tel:${site.phoneDeskTel}`} className="mt-3 inline-block text-sm font-semibold text-[#633633] underline">{site.phoneDesk}</a>
        </article>
        <article className="rounded-[14px] border border-[#eee] bg-white p-6 shadow-[0_8px_28px_rgba(0,0,0,0.08)]">
          <h2 className="text-xl font-semibold text-[#633633]">Housekeeping</h2>
          <p className="mt-2 text-sm text-gray-600">Extra towels, mineral water, or room refresh.</p>
          <a href={housekeeping} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-sm font-semibold text-[#633633] underline">WhatsApp housekeeping</a>
        </article>
      </div>
    </ContentPage>
  );
}
