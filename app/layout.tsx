import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://collegarestudio.com"),
  title: {
    default: "Collegare Studio — Build the front end and the back end of your creator career",
    template: "%s — Collegare Studio",
  },
  description:
    "Most creators only have half a business. Collegare Studio teaches the front end — content, voice, positioning — and the back end — entity, payments, deals, deliverables, systems — so you build a career you're proud of.",
  openGraph: {
    title: "Collegare Studio",
    description:
      "The front end and the back end of a creator career, taught together. Join the waitlist for founding-member access.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/*
          Fonts are loaded via <link> rather than next/font so the build never
          depends on network access. Swap to next/font later if you want them
          self-hosted and inlined.
        */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
