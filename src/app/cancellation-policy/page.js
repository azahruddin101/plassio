import ContentPage from "@/components/layout/ContentPage";

export const metadata = { title: "Cancellation Policy", description: "Room and banquet cancellation terms at Hotel Palassio International." };

const sections = [
  ["1. Room Stays", "Free cancellation is available up to 24 hours prior to standard check-in (12:00 PM). Cancellations made within 24 hours of check-in attract a 1-night room charge penalty."],
  ["2. Banquet & Event Bookings", "Banquet hall deposit terms are outlined in individual event contracts. Advance venue block deposits are non-refundable within 30 days of the scheduled event date."],
];

export default function CancellationPage() {
  return (
    <ContentPage title="CANCELLATION POLICY">
      <div className="mx-auto max-w-3xl space-y-6 rounded-[14px] border border-[#eee] bg-white p-6 shadow-[0_8px_28px_rgba(0,0,0,0.08)]">
        {sections.map(([title, copy]) => (
          <section key={title}>
            <h2 className="text-lg font-semibold text-[#633633]">{title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-gray-700">{copy}</p>
          </section>
        ))}
      </div>
    </ContentPage>
  );
}
