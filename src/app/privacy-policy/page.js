import ContentPage from "@/components/layout/ContentPage";
import { site } from "@/lib/content";

export const metadata = { title: "Privacy Policy", description: "How Hotel Palassio International uses guest information." };

const sections = [
  ["1. Data Collection & Purpose", "Hotel Palassio International collects customer information solely for reservation fulfillment, guest verification, GST invoicing, and optional consent-based communications."],
  ["2. Direct Booking Consent", "In accordance with Indian privacy regulations, marketing consent checkboxes are never pre-selected. OTA guest data is not converted automatically into unsolicited marketing databases."],
];

export default function PrivacyPage() {
  return (
    <ContentPage title="PRIVACY POLICY">
      <div className="mx-auto max-w-3xl space-y-6 rounded-[14px] border border-[#eee] bg-white p-6 shadow-[0_8px_28px_rgba(0,0,0,0.08)]">
        {sections.map(([title, copy]) => (
          <section key={title}>
            <h2 className="text-lg font-semibold text-[#633633]">{title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-gray-700">{copy}</p>
          </section>
        ))}
        <section>
          <h2 className="text-lg font-semibold text-[#633633]">3. Data Removal Request</h2>
          <p className="mt-2 text-sm leading-relaxed text-gray-700">
            Guests may request removal of their stored contact information at any time by emailing{" "}
            <a className="break-all font-semibold text-[#633633] underline" href={`mailto:${site.privacyEmail}`}>{site.privacyEmail}</a>.
          </p>
        </section>
      </div>
    </ContentPage>
  );
}
