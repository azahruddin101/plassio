import PageBanner from "@/components/layout/PageBanner";
import RoomCatalog from "@/components/rooms/RoomCatalog";

export const metadata = {
  title: "Luxury Rooms & Suites",
  description:
    "14 guest rooms and suites at Hotel Palassio International, Gomti Nagar Extension, with published nightly rates.",
};

export default function RoomsPage() {
  return (
    <div className="bg-[#f6f6f6] pb-16 font-arial">
      <PageBanner title="ROOMS & SUITES" crumb="ROOMS" />
      <RoomCatalog />
    </div>
  );
}
