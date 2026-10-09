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
  title: `${gymConfig.name} — ${gymConfig.tagline}`,
  description: gymConfig.shortDescription,
  openGraph: {
    title: `${gymConfig.name} — ${gymConfig.tagline}`,
    description: gymConfig.shortDescription,
    type: "website",
  },
};

export default function HomePage() {
  return (
    <PublicPage>
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Why Choose Us */}
      <WhyChooseUs />

      {/* 3. About the Gym */}
      <AboutSection />

      {/* 4. Programs / Training */}
      <ProgramsSection limit={6} />

      {/* 5. Facilities Showcase */}
      <FacilitiesSection />

      {/* 6. Membership Plans */}
      <PricingSection />

      {/* 7. Elite Coaches */}
      <TrainersSection limit={4} />

      {/* 8. Photo Gallery */}
      <GallerySection limit={8} />

      {/* 9. Member Testimonials */}
      <TestimonialsSection />

      {/* 10. Frequently Asked Questions */}
      <FaqSection />

      {/* 11. High Conversion CTA Banner */}
      <CtaSection
        title="Ready to Build Your Strongest Routine?"
        text="Visit our 5,000+ sq ft athletic training floor. Claim your 1-day free guest pass today and experience the difference."
        primary="Claim Free Workout Pass"
        href="#contact"
      />

      {/* 12. Contact, Hours & Location */}
      <ContactSection />
    </PublicPage>
  );
}
