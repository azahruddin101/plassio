import ContentPage from "@/components/layout/ContentPage";

export const metadata = { title: "Terms & Conditions", description: "Stay rules for Hotel Palassio International." };

const sections = [
  ["1. Check-in & Identification", "Standard Check-in is 12:00 PM and Check-out is 11:00 AM. Original Government-issued Photo ID (Aadhaar, Passport, Driving License) is mandatory for all guests upon check-in."],
  ["2. Service Charge Disclaimer", "In strict compliance with CCPA guidelines, service charge is not automatically added or mandatory; tips/gratuities are purely voluntary."],
  ["3. Property Rules", "Smoking inside guest rooms is strictly prohibited except in designated smoking areas. Damage to hotel assets will be charged to the guest billing account."],
];

export default function TermsPage() {
  return (
    <ContentPage title="TERMS & CONDITIONS">
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
