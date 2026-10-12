import type { Metadata } from "next";
import { ChaloBuildHeader } from "@/components/home/chalobuild-header";
import { ChaloBuildHero } from "@/components/home/chalobuild-hero";
import { ChaloBuildTrustStrip } from "@/components/home/chalobuild-trust-strip";
import { ChaloBuildInteractiveShowcase } from "@/components/home/chalobuild-interactive-showcase";
import { ChaloBuildComparison } from "@/components/home/chalobuild-comparison";
import { ChaloBuildFeatureGrid } from "@/components/home/chalobuild-feature-grid";
import { ChaloBuildPricing } from "@/components/home/chalobuild-pricing";
import { ChaloBuildTestimonials } from "@/components/home/chalobuild-testimonials";
import { ChaloBuildFAQ } from "@/components/home/chalobuild-faq";
import { ChaloBuildCTA } from "@/components/home/chalobuild-cta";
import { ChaloBuildFooter } from "@/components/home/chalobuild-footer";

export const metadata: Metadata = {
  title: "ChaloBuild by ThinkBuild — Turnkey Gym Websites & Member Management Platform",
  description:
    "Launch a high-converting branded website and connected management software for your gym in 48 hours. Member tracking, payments, attendance, and online leads with 0% commission.",
  keywords: [
    "gym website builder",
    "gym management software India",
    "fitness club CRM",
    "gym attendance tracker",
    "ChaloBuild",
    "ThinkBuild",
    "gym software Nashik Pune Mumbai",
  ],
  authors: [{ name: "ThinkBuild", url: "https://www.thinkbuild.in" }],
  creator: "ThinkBuild",
  openGraph: {
    title: "ChaloBuild by ThinkBuild — Turnkey Gym Websites & Management Platform",
    description:
      "Commercial platform for gym owners: professional public website plus connected member management system.",
    type: "website",
    url: "https://chalobuild.in",
    siteName: "ChaloBuild",
  },
  twitter: {
    card: "summary_large_image",
    title: "ChaloBuild by ThinkBuild — Turnkey Gym Websites & Management Platform",
    description:
      "Get your gym online in 48 hours with a branded website and staff member management dashboard.",
  },
};

export default function ChaloBuildHomePage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-cyan-100 selection:text-cyan-900 scroll-smooth antialiased">
      {/* 1. Header with announcement bar, modern white glass theme, and logo background shadow */}
      <ChaloBuildHeader />

      <main>
        {/* 2. Hero Section: High-converting headline, live preview widgets, dual CTAs */}
        <ChaloBuildHero />

        {/* 3. Social Proof & Trust Strip: Ratings, client gym logos, 48h / 0% commission metrics */}
        <ChaloBuildTrustStrip />

        {/* 4. Interactive 2-in-1 Platform Showcase: Tabs for Public Website vs GymFlow Dashboard */}
        <ChaloBuildInteractiveShowcase />

        {/* 5. Before vs After Comparison: Notebooks/Excel vs Unified ChaloBuild */}
        <ChaloBuildComparison />

        {/* 6. Core Features Grid: 6 high-impact capability cards */}
        <ChaloBuildFeatureGrid />

        {/* 7. Transparent Pricing: Monthly/Annual toggle, 0% commission guarantee */}
        <ChaloBuildPricing />

        {/* 8. Real Gym Owner Testimonials: Quotes, metrics, verified badges */}
        <ChaloBuildTestimonials />

        {/* 9. Interactive FAQ Accordion: Answering key gym owner questions */}
        <ChaloBuildFAQ />

        {/* 10. High-Conversion Consultation & WhatsApp CTA */}
        <ChaloBuildCTA />
      </main>

      {/* 11. Production Enterprise Footer with ThinkBuild corporate backing */}
      <ChaloBuildFooter />
    </div>
  );
}
