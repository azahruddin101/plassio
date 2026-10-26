import PageBanner from "@/components/layout/PageBanner";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import { galleryImages } from "@/lib/images";

export const metadata = {
  title: "Gallery",
  description: "Photographs of the hotel exterior, lobby, guest rooms, bathrooms, restaurant, rooftop lounge, and banquet halls at Hotel Palassio International.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <div className="font-ui bg-[#f5f5f5] pb-16">
      <PageBanner title="GALLERY" crumb="GALLERY" />
      <GalleryGrid images={galleryImages} />
    </div>
  );
}
