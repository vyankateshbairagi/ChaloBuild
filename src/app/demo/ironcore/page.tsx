import type { Metadata } from "next";
import { PublicPage, CtaSection } from "@/components/public/public-ui";
import { HeroSection } from "@/components/public/hero-section";
import { WhyChooseUs } from "@/components/public/why-choose-us";
import { AboutSection } from "@/components/public/about-section";
import { ProgramsSection } from "@/components/public/programs-section";
import { FacilitiesSection } from "@/components/public/facilities-section";
import { PricingSection } from "@/components/public/pricing-section";
import { TrainersSection } from "@/components/public/trainers-section";
import { GallerySection } from "@/components/public/gallery-section";
import { TestimonialsSection } from "@/components/public/testimonials-section";
import { FaqSection } from "@/components/public/faq-section";
import { ContactSection } from "@/components/public/contact-section";
import { gymConfig } from "@/config/gym";

export const metadata: Metadata = {
  title: `Live Demo: ${gymConfig.name} — Powered by ChaloBuild`,
  description: `Interactive preview of a commercial gym website engineered by ChaloBuild. Features membership plans, trainer profiles, photo gallery, and connected management tools.`,
  openGraph: {
    title: `Live Demo: ${gymConfig.name} — Powered by ChaloBuild`,
    description: gymConfig.shortDescription,
    type: "website",
  },
};

export default function IronCoreDemoPage() {
  return (
    <PublicPage config={gymConfig} basePath="/demo/ironcore">
      {/* 1. Hero Section */}
      <HeroSection config={gymConfig} basePath="/demo/ironcore" />

      {/* 2. Why Choose Us */}
      <WhyChooseUs config={gymConfig} />

      {/* 3. About the Gym */}
      <AboutSection config={gymConfig} basePath="/demo/ironcore" />

      {/* 4. Programs / Training */}
      <ProgramsSection limit={6} config={gymConfig} basePath="/demo/ironcore" />

      {/* 5. Facilities Showcase */}
      <FacilitiesSection config={gymConfig} />

      {/* 6. Membership Plans */}
      <PricingSection config={gymConfig} basePath="/demo/ironcore" />

      {/* 7. Elite Coaches */}
      <TrainersSection limit={4} config={gymConfig} basePath="/demo/ironcore" />

      {/* 8. Photo Gallery */}
      <GallerySection limit={8} config={gymConfig} basePath="/demo/ironcore" />

      {/* 9. Member Testimonials */}
      <TestimonialsSection config={gymConfig} />

      {/* 10. Frequently Asked Questions */}
      <FaqSection config={gymConfig} />

      {/* 11. High Conversion CTA Banner */}
      <CtaSection
        title="Ready to Build Your Strongest Routine?"
        text="Visit our 5,000+ sq ft athletic training floor. Claim your 1-day free guest pass today and experience the difference."
        primary="Claim Free Workout Pass"
        href="#contact"
        config={gymConfig}
      />

      {/* 12. Contact, Hours & Location with lead persistence */}
      <ContactSection config={gymConfig} slug="demo-gym" />
    </PublicPage>
  );
}
