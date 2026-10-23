import { Cormorant_Garamond, Lato, Playfair_Display } from "next/font/google";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import WhatsAppFab from "@/components/layout/WhatsAppFab";
import { site } from "@/lib/content";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL("https://palassio-min.onrender.com"),
  title: {
    default: site.name,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: site.name,
    description: site.description,
    url: "https://palassio-min.onrender.com",
    siteName: site.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/palassio/exterior.jpg",
        width: 1600,
        height: 1067,
        alt: "Hotel Palassio International",
      },
    ],
  },
  icons: { icon: "/images/palassio/logo.jpeg" },
};

const lodgingJsonLd = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: site.name,
  url: "https://palassio-min.onrender.com",
  image: "https://palassio-min.onrender.com/images/palassio/exterior.jpg",
  telephone: site.phoneDisplay,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Plot No. 6/C-921, Sector-6, Gomti Nagar Extension",
    addressLocality: "Lucknow",
    addressRegion: "Uttar Pradesh",
    postalCode: "226010",
    addressCountry: "IN",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${lato.variable} ${cormorant.variable} h-full`}
    >
      <body className="flex h-dvh flex-col overflow-hidden antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(lodgingJsonLd) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[80] focus:bg-white focus:px-4 focus:py-2 focus:text-forest"
        >
          Skip to content
        </a>
        <SiteHeader />
        <div id="page-scroll" className="min-h-0 flex-1 overflow-y-auto">
          <main id="main">{children}</main>
          <SiteFooter />
        </div>
        <WhatsAppFab />
      </body>
    </html>
  );
}
