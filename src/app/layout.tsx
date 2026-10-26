import type { Metadata } from "next";
import { Barlow_Condensed, Manrope } from "next/font/google";
import "./globals.css";
import { site } from "@/config/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SampleBanner from "@/components/SampleBanner";
import WhatsAppButton from "@/components/WhatsAppButton";
const display = Barlow_Condensed({ subsets: ["latin"], weight: ["600", "700", "800"], variable: "--font-display" });
const body = Manrope({ subsets: ["latin"], variable: "--font-body" });
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} | Gym in ${site.city}`, template: `%s | ${site.name}` },
  description: site.description,
  openGraph: { title: site.name, description: site.description, url: site.url, siteName: site.name, type: "website" },
  twitter: { card: "summary_large_image" },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  const ld = { "@context": "https://schema.org", "@type": "SportsActivityLocation", name: site.name, url: site.url, description: site.description, telephone: site.contact.phone, email: site.contact.email, address: { "@type": "PostalAddress", streetAddress: site.contact.address } };
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}><body>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-lime focus:p-3 focus:text-ink">Skip to content</a>
      <SampleBanner /><Header /><main id="main">{children}</main><Footer /><WhatsAppButton />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
    </body></html>
  );
}
