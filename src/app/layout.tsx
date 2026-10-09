import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "ChaloBuild — Turnkey Gym Websites & Management Platform",
    template: "%s | ChaloBuild",
  },
  description:
    "Commercial platform for gym owners. Launch a high-converting branded website and an all-in-one gym management system in 48 hours.",
  applicationName: "ChaloBuild",
  keywords: [
    "Gym Website",
    "Gym Management System",
    "Gym Software",
    "Fitness Club Website",
    "ChaloBuild",
    "GymFlow",
    "Gym Attendance Software",
    "Gym Membership Management",
  ],
  authors: [{ name: "ChaloBuild", url: "https://chalobuild.in" }],
  openGraph: {
    title: "ChaloBuild — Turnkey Gym Websites & Management Platform",
    description:
      "Commercial platform for gym owners: professional public website plus connected member management software.",
    siteName: "ChaloBuild",
    type: "website",
    locale: "en_IN",
    url: "https://chalobuild.in",
  },
  twitter: {
    card: "summary_large_image",
    title: "ChaloBuild — Turnkey Gym Websites & Management Platform",
    description:
      "Commercial platform for gym owners: professional public website plus connected member management software.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans bg-white text-slate-900">{children}</body>
    </html>
  );
}
