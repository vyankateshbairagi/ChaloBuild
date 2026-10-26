import type { Metadata } from "next";
import { ChaloBuildHeader } from "@/components/home/chalobuild-header";
import { ChaloBuildHero } from "@/components/home/chalobuild-hero";
import { ChaloBuildTrustStrip } from "@/components/home/chalobuild-trust-strip";
import { ChaloBuildWorkflow } from "@/components/home/chalobuild-workflow";
import { ChaloBuildInteractiveShowcase } from "@/components/home/chalobuild-interactive-showcase";
import { ChaloBuildComparison } from "@/components/home/chalobuild-comparison";
import { ChaloBuildFeatureGrid } from "@/components/home/chalobuild-feature-grid";
import { ChaloBuildPricing } from "@/components/home/chalobuild-pricing";
import { ChaloBuildContactSection } from "@/components/home/chalobuild-contact-section";
import { ChaloBuildTestimonials } from "@/components/home/chalobuild-testimonials";
import { ChaloBuildFAQ } from "@/components/home/chalobuild-faq";
import { ChaloBuildFooter } from "@/components/home/chalobuild-footer";

export const metadata: Metadata = {
  title: "ChaloBuild — Turnkey Gym Websites & Member Management Operating Platforms",
  description:
    "Test our live demo. Launch a custom-branded website and connected front-desk management software for your gym in 48 hours. One-time build, 100% code ownership, zero monthly subscriptions.",
  keywords: [
    "gym website builder",
    "one time gym software build",
    "gym management software India",
    "fitness club CRM",
    "gym attendance tracker",
    "ChaloBuild",
    "turnkey gym software",
    "no subscription gym management",
  ],
  authors: [{ name: "ChaloBuild Studio", url: "/" }],
  creator: "ChaloBuild",
  openGraph: {
    title: "ChaloBuild — Turnkey Gym Websites & Management Platforms",
    description:
      "One-time custom software build for gym owners: professional public website plus connected member management system with 100% code ownership.",
    type: "website",
    siteName: "ChaloBuild",
  },
  twitter: {
    card: "summary_large_image",
    title: "ChaloBuild — Turnkey Gym Websites & Management Platforms",
    description:
      "Get your gym online in 48 hours with a branded website and staff member management dashboard. Zero monthly subscriptions.",
  },
};

export default function ChaloBuildHomePage() {
  return (
    <div className="min-h-screen bg-[#080a10] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200 scroll-smooth antialiased">
      {/* 1. Header with announcement bar, modern dark glass theme, and ChaloBuild logo */}
      <ChaloBuildHeader />

      <main>
        {/* 2. Hero Section: High-converting headline, live preview consoles, dual CTAs */}
        <ChaloBuildHero />

        {/* 3. Social Proof & Trust Strip: Ratings, client gym logos, 48h / 0% commission / 0 SaaS fee metrics */}
        <ChaloBuildTrustStrip />

        {/* 4. Client Journey & Workflow: View -> Test Live Demo -> Contact via WhatsApp -> 48h Launch */}
        <ChaloBuildWorkflow />

        {/* 5. Interactive 2-in-1 Platform Showcase: Tabs for Public Website vs GymFlow Dashboard */}
        <ChaloBuildInteractiveShowcase />

        {/* 6. Comparison: One-Time ChaloBuild vs Monthly SaaS Trap vs Unreliable Freelancers */}
        <ChaloBuildComparison />

        {/* 7. Core Features Grid: 6 high-impact capability cards in dark glass styling */}
        <ChaloBuildFeatureGrid />

        {/* 8. Transparent Pricing: One-Time Fixed Build Packages (Zero Monthly Subscriptions) */}
        <ChaloBuildPricing />

        {/* 9. Interactive Contact & Direct WhatsApp Quote Generator */}
        <ChaloBuildContactSection />

        {/* 10. Real Gym Owner Testimonials: Quotes, metrics, verified badges */}
        <ChaloBuildTestimonials />

        {/* 11. Interactive FAQ Accordion: Explaining one-time build, domain, and client workflow */}
        <ChaloBuildFAQ />
      </main>

      {/* 12. Modern Dark Footer with ChaloBuild Studio branding */}
      <ChaloBuildFooter />
    </div>
  );
}
