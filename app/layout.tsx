import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { TikTokStrip } from "@/components/tiktok-strip";
import { ScrollFX } from "@/components/scroll-fx";

export const metadata: Metadata = {
  metadataBase: new URL("https://collegarestudio.com"),
  title: {
    default: "Collegare Studio — One person. Every department.",
    template: "%s — Collegare Studio",
  },
  description:
    "You didn't quit the job — you quit the company. Collegare Studio hands creators the departments they never got: money, contracts, deals, and systems, so the work can keep going. Join the waitlist.",
  openGraph: {
    title: "Collegare Studio",
    description:
      "The back office creators never got — money, contracts, deals, systems. Work hard, create smarter. Join the waitlist for founding-member access.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/*
          Fonts via <link> (not next/font) so the build never depends on network access.
          Bricolage Grotesque (display) · Hanken Grotesk (body) · Instrument Serif (italic accents).
        */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,500;12..96,700;12..96,800&family=Hanken+Grotesk:wght@400;500;600&family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <SiteHeader />
        {children}
        <TikTokStrip />
        <SiteFooter />
        <ScrollFX />
      </body>
    </html>
  );
}
