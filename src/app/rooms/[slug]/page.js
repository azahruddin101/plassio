import { Suspense } from "react";
import { notFound } from "next/navigation";
import PageBanner from "@/components/layout/PageBanner";
import RoomDetail from "@/components/rooms/RoomDetail";
import { detailRooms, rooms, site } from "@/lib/content";

const slugToId = {
  "deluxe-room": "1",
  "executive-suite": "2",
  "presidential-suite": "3",
  "standard-room": "4",
};

export function generateStaticParams() {
  return Object.keys(slugToId).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const room = rooms.find((item) => item.id === slug);
  if (!room) return { title: "Room" };
  return { title: room.name, description: room.description };
}

export default function PublishedRoomPage({ params }) {
  return (
    <Suspense fallback={<div className="bg-[#f4f4f4] px-4 py-16 text-center font-arial text-gray-600">Loading room...</div>}>
      <PublishedRoom params={params} />
    </Suspense>
  );
}

async function PublishedRoom({ params }) {
  const { slug } = await params;
  const detail = detailRooms[slugToId[slug]];
  if (!detail) notFound();

  return (
    <div className="bg-[#f4f4f4] font-arial">
      <PageBanner title={detail.title} crumb="ROOMS" />
      <RoomDetail room={detail} />
      <p className="px-5 pb-12 text-center text-sm text-[#555]">
        Reservations: <a className="font-semibold text-[#633633] underline" href={`tel:${site.phoneTel}`}>{site.phoneDisplay}</a>
      </p>
    </div>
  );
}
