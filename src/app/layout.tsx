import type { Metadata } from "next";
import "./globals.css";

// Note: intentionally not using next/font/google here — this build
// environment blocks network access to Google Fonts. System fonts avoid an
// unnecessary build-time network dependency; swap in next/font later if
// you want a custom typeface.

import { gymConfig } from "@/config/gym";

export const metadata: Metadata = {
  title: {
    default: `${gymConfig.name} — ${gymConfig.tagline}`,
    template: `%s | ${gymConfig.name}`,
  },
  description: gymConfig.shortDescription,
  applicationName: gymConfig.name,
  keywords: [
    "Gym",
    "Fitness Club",
    "Strength Training",
    "Bodybuilding",
    "Functional Training",
    "Personal Trainer",
    "Pune Gym",
    "IronCore Fitness",
    "ChaloBuild Gym Website",
  ],
  authors: [{ name: gymConfig.provider.name, url: gymConfig.provider.url }],
  openGraph: {
    title: `${gymConfig.name} — ${gymConfig.tagline}`,
    description: gymConfig.shortDescription,
    siteName: gymConfig.name,
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: `${gymConfig.name} — ${gymConfig.tagline}`,
    description: gymConfig.shortDescription,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
