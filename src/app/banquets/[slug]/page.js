import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ContentPage, { greenButton } from "@/components/layout/ContentPage";
import { halls } from "@/lib/content";
import { photos } from "@/lib/images";

export function generateStaticParams() {
  return halls.map((hall) => ({ slug: hall.id }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const hall = halls.find((item) => item.id === slug);
  return { title: hall ? hall.name : "Banquet Hall", description: hall?.description };
}

export default function HallPage({ params }) {
  return (
    <Suspense fallback={<ContentPage title="BANQUET HALL"><p className="text-center text-gray-600">Loading hall details...</p></ContentPage>}>
      <HallDetails params={params} />
    </Suspense>
  );
}

async function HallDetails({ params }) {
  const { slug } = await params;
  const hall = halls.find((item) => item.id === slug);
  if (!hall) notFound();

  return (
    <ContentPage title={hall.name.toUpperCase()}>
      <article className="grid gap-8 lg:grid-cols-2">
        <div className="overflow-hidden rounded-[14px]">
          <Image src={photos[hall.image]} alt={hall.name} width={1200} height={800} className="h-full min-h-72 w-full object-cover" />
        </div>
        <div className="rounded-[14px] border border-[#eee] bg-white p-6 shadow-[0_8px_28px_rgba(0,0,0,0.08)]">
          <p className="text-sm"><Link href="/banquets" className="font-semibold text-[#633633] underline">All banquet halls</Link></p>
          <p className="mt-4 text-sm text-gray-700">Area: {hall.area} · Capacity: {hall.capacity}</p>
          <p className="mt-4 leading-relaxed text-gray-700">{hall.description}</p>
          <h2 className="mt-6 text-lg font-semibold text-[#633633]">Features</h2>
          <ul className="mt-2 space-y-1 text-sm text-gray-700">
            {hall.features.map((item) => <li key={item}>{item}</li>)}
          </ul>
          <h2 className="mt-6 text-lg font-semibold text-[#633633]">Ideal events</h2>
          <ul className="mt-2 flex flex-wrap gap-2 text-xs">
            {hall.events.map((event) => (
              <li key={event} className="rounded-full border border-[#633633]/30 px-3 py-1 text-[#633633]">{event}</li>
            ))}
          </ul>
          <Link href="/contact" className={`${greenButton} mt-6`}>Request a quote</Link>
        </div>
      </article>
    </ContentPage>
  );
}
