import PageBanner from "@/components/layout/PageBanner";
import RoomCatalog from "@/components/rooms/RoomCatalog";

export const metadata = {
  title: "Room Overview",
  description:
    "Deluxe Executive Room, Palassio Royal Suite, Presidential Luxury Suite, and Standard Comfort Room at Hotel Palassio International, Gomti Nagar Extension.",
  alternates: { canonical: "/room-overview" },
};

export default function RoomOverviewPage() {
  return (
    <div className="bg-[#f6f6f6] pb-16 font-arial">
      <PageBanner title="ROOM OVERVIEW" crumb="ROOM OVERVIEW" />
      <RoomCatalog />
    </div>
  );
}
