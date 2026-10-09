import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { resolveGymConfig } from "@/lib/gym-config";
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

interface GymPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: GymPageProps): Promise<Metadata> {
  const { slug } = await params;
  const config = await resolveGymConfig(slug);

  return {
    title: `${config.name} — ${config.tagline}`,
    description: config.shortDescription,
    openGraph: {
      title: `${config.name} — ${config.tagline}`,
      description: config.shortDescription,
      type: "website",
    },
  };
}

export default async function DynamicGymPage({ params }: GymPageProps) {
  const { slug } = await params;
  const config = await resolveGymConfig(slug);

  if (!config) {
    notFound();
  }

  const basePath = `/gym/${slug}`;

  return (
    <PublicPage config={config} basePath={basePath}>
      {/* 1. Hero Section */}
      <HeroSection config={config} basePath={basePath} />

      {/* 2. Why Choose Us */}
      <WhyChooseUs config={config} />

      {/* 3. About the Gym */}
      <AboutSection config={config} basePath={basePath} />

      {/* 4. Programs / Services */}
      <ProgramsSection limit={6} config={config} basePath={basePath} />

      {/* 5. Facilities Showcase */}
      <FacilitiesSection config={config} />

      {/* 6. Membership Plans */}
      <PricingSection config={config} basePath={basePath} />

      {/* 7. Elite Coaches */}
      <TrainersSection limit={4} config={config} basePath={basePath} />

      {/* 8. Photo Gallery */}
      <GallerySection limit={8} config={config} basePath={basePath} />

      {/* 9. Member Testimonials (Hidden if empty) */}
      <TestimonialsSection config={config} />

      {/* 10. Frequently Asked Questions */}
      <FaqSection config={config} />

      {/* 11. High Conversion CTA Banner */}
      <CtaSection
        title={`Ready to Start Training at ${config.name}?`}
        text="Visit our training floor and experience our coaching first-hand. Claim your complimentary 1-day guest pass today."
        primary="Claim Free Workout Pass"
        href="#contact"
        config={config}
      />

      {/* 12. Contact, Hours & Location */}
      <ContactSection config={config} slug={slug} />
    </PublicPage>
  );
}
