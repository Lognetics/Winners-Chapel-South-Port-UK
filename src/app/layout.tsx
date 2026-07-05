import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileNav } from "@/components/layout/MobileNav";
import { Assistant } from "@/components/ai/Assistant";
import { site } from "@/lib/site";

const display = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://winnerschapelsouthport.org.uk"),
  title: {
    default: `${site.fullName} — A Place of Faith. A Family of Love. A Home of Miracles.`,
    template: `%s | ${site.shortName}`,
  },
  description:
    "Winners Chapel International, Southport — a faith-based, Bible-believing church. Join us for worship, experience healing, breakthrough and community. Plan your visit today.",
  keywords: [
    "Winners Chapel Southport",
    "Living Faith Church Southport",
    "church in Southport",
    "Sunday service Southport",
    "WOFBI",
    "prayer",
    "David Oyedepo",
  ],
  openGraph: {
    title: `${site.fullName}`,
    description: "A Place of Faith. A Family of Love. A Home of Miracles.",
    type: "website",
    locale: "en_GB",
    siteName: site.fullName,
  },
  icons: { icon: "/images/site/emblem.png", apple: "/images/site/emblem.png" },
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: site.shortName,
  },
};

export const viewport: Viewport = {
  themeColor: "#060c1f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-GB"
      className={`${display.variable} ${sans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-navy-950 text-cream">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Church",
              name: site.fullName,
              slogan: "A Place of Faith. A Family of Love. A Home of Miracles.",
              url: "https://winnerschapelsouthport.org.uk",
              telephone: site.phones[0],
              email: site.email,
              address: {
                "@type": "PostalAddress",
                streetAddress: `${site.address.venue}, ${site.address.street}`,
                addressLocality: site.address.city,
                postalCode: site.address.postcode,
                addressCountry: "GB",
              },
              sameAs: [site.socials.facebook, site.socials.instagram, site.socials.x, site.socials.youtube],
            }),
          }}
        />
        <Navbar />
        <main className="flex-1 pb-16 lg:pb-0">{children}</main>
        <Footer />
        <MobileNav />
        <Assistant />
      </body>
    </html>
  );
}
