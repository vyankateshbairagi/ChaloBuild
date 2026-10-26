import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "ChaloBuild — One-Time Turnkey Gym Websites & Management Platforms",
    template: "%s | ChaloBuild",
  },
  description:
    "Inspect our live gym demo. We engineer custom-branded websites and connected member management software for gym owners as a flat one-time build. Zero monthly subscriptions, 100% source code ownership, live in 48 hours.",
  applicationName: "ChaloBuild",
  keywords: [
    "Gym Website Builder",
    "One Time Gym Software Build",
    "Gym Management System India",
    "No Subscription Gym Software",
    "ChaloBuild",
    "GymFlow",
    "Fitness Club Operating System",
  ],
  authors: [{ name: "ChaloBuild Studio", url: "/" }],
  openGraph: {
    title: "ChaloBuild — One-Time Turnkey Gym Websites & Management Platforms",
    description:
      "Explore live demos. Own your gym's custom website and member management system with a flat one-time build. Zero monthly subscriptions.",
    siteName: "ChaloBuild",
    type: "website",
    locale: "en_IN",
  },
  icons: {
    icon: "/images/chalobuild-badge.svg",
    apple: "/images/chalobuild-badge.svg",
  },
  twitter: {
    card: "summary_large_image",
    title: "ChaloBuild — One-Time Turnkey Gym Websites & Management Platforms",
    description:
      "Explore live demos. Own your gym's custom website and member management system with a flat one-time build. Zero monthly subscriptions.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className="h-full antialiased dark">
      <body className="min-h-full flex flex-col font-sans bg-[#050811] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
        {children}
      </body>
    </html>
  );
}
