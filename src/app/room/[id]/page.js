import { Suspense } from "react";
import { notFound } from "next/navigation";
import PageBanner from "@/components/layout/PageBanner";
import RoomDetail from "@/components/rooms/RoomDetail";
import { detailRooms, site } from "@/lib/content";

export function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }, { id: "4" }];
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const room = detailRooms[id];
  if (!room) return { title: "Room" };
  return {
    title: room.title,
    description: `${room.title} at ${site.name}. Occupancy ${room.occupancy}. ${room.amenities}`,
    alternates: { canonical: `/room/${id}` },
  };
}

export default function RoomDetailPage({ params }) {
  return (
    <Suspense fallback={<div className="bg-[#f4f4f4] px-4 py-16 text-center font-arial text-gray-600">Loading room...</div>}>
      <RoomInterior params={params} />
    </Suspense>
  );
}

async function RoomInterior({ params }) {
  const { id } = await params;
  const room = detailRooms[id];
  if (!room) notFound();

  return (
    <div className="font-arial bg-[#f4f4f4]">
      <PageBanner title="DETAIL ROOM INTERIOR" crumb="DETAIL ROOM INTERIOR" />
      <RoomDetail room={room} />
    </div>
  );
}
