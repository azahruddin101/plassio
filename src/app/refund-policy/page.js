import ContentPage from "@/components/layout/ContentPage";

export const metadata = { title: "Refund Policy", description: "Refund timing for cancelled room reservations at Hotel Palassio International." };

export default function RefundPage() {
  return (
    <ContentPage title="REFUND POLICY">
      <div className="mx-auto max-w-3xl rounded-[14px] border border-[#eee] bg-white p-6 shadow-[0_8px_28px_rgba(0,0,0,0.08)]">
        <h2 className="text-lg font-semibold text-[#633633]">Refund Processing Timeline</h2>
        <p className="mt-2 text-sm leading-relaxed text-gray-700">
          Eligible refunds for cancelled room reservations are credited back to the original payment source (UPI, Credit Card, Bank Transfer) within 5 to 7 business banking days.
        </p>
      </div>
    </ContentPage>
  );
}
