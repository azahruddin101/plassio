import { Suspense } from "react";
import BookingEngine from "@/components/booking/BookingEngine";
import ContentPage from "@/components/layout/ContentPage";

export const metadata = {
  title: "Reserve Stay",
  description: "Request a room at Hotel Palassio International using published rates. The enquiry is sent on WhatsApp and is not a confirmed reservation.",
};

export default function BookPage() {
  return (
    <ContentPage title="BOOK YOUR STAY">
      <Suspense fallback={<p className="py-16 text-center text-gray-600">Loading the reservation form...</p>}>
        <BookingEngine />
      </Suspense>
    </ContentPage>
  );
}
