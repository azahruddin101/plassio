import PageBanner from "@/components/layout/PageBanner";
import GalleryGrid from "@/components/gallery/GalleryGrid";

export const metadata = {
  title: "Gallery",
  description: "Photographs of guest rooms, dining, the rooftop lounge, and banquet halls at Hotel Palassio International.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <div className="font-ui bg-[#f5f5f5] pb-16">
      <PageBanner title="GALLERY" crumb="GALLERY" />
      <GalleryGrid />
    </div>
  );
}
