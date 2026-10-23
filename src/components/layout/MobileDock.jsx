import Link from "next/link";
import { site } from "@/lib/content";

export default function MobileDock() {
  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-4 border-t border-espresso/10 bg-ivory text-center text-sm tracking-wide text-espresso lg:hidden"
      aria-label="Quick actions"
    >
      <a href={`tel:${site.phoneMobileTel}`} className="px-2 py-3">
        Call
      </a>
      <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer" className="px-2 py-3">
        WhatsApp
      </a>
      <Link href="/book" className="bg-espresso px-2 py-3 text-ivory">
        BOOK
      </Link>
      <Link href="/rooftop" className="px-2 py-3">
        Rooftop
      </Link>
    </nav>
  );
}
