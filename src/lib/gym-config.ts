import { cache } from "react";
import { db } from "@/lib/db";
import { gymConfig as defaultGymConfig, type GymConfig } from "@/config/gym";

export { type GymConfig, defaultGymConfig };

/**
 * Resolves gym configuration based on an organization slug.
 * Priority:
 * 1. Persisted WebsiteConfig in PostgreSQL for the matching slug (if isPublished)
 * 2. Default GymConfig (IronCore Fitness sample demo)
 */
export const resolveGymConfig = cache(
  async (slug?: string): Promise<GymConfig> => {
    if (!slug || slug === "ironcore" || slug === "demo") {
      return defaultGymConfig;
    }

    try {
      const persisted = await db.websiteConfig.findUnique({
        where: { slug },
      });

      if (!persisted || !persisted.isPublished) {
        return defaultGymConfig;
      }

      // Safely parse JSON or fall back to defaults
      const programs = (persisted.programs as unknown as GymConfig["programs"]) || defaultGymConfig.programs;
      const plans = (persisted.plans as unknown as GymConfig["plans"]) || defaultGymConfig.plans;
      const trainers = (persisted.trainers as unknown as GymConfig["trainers"]) || defaultGymConfig.trainers;
      const facilities = (persisted.facilities as unknown as GymConfig["facilities"]) || defaultGymConfig.facilities;
      const gallery = (persisted.gallery as unknown as GymConfig["gallery"]) || defaultGymConfig.gallery;
      const testimonials = (persisted.testimonials as unknown as GymConfig["testimonials"]) || defaultGymConfig.testimonials;
      const faqs = (persisted.faqs as unknown as GymConfig["faqs"]) || defaultGymConfig.faqs;
      const openingHours = (persisted.openingHours as unknown as GymConfig["openingHours"]) || defaultGymConfig.openingHours;
      const socialLinks = (persisted.socialLinks as unknown as GymConfig["socialLinks"]) || defaultGymConfig.socialLinks;

      return {
        ...defaultGymConfig,
        name: persisted.gymName || defaultGymConfig.name,
        legalName: persisted.legalName || defaultGymConfig.legalName,
        tagline: persisted.tagline || defaultGymConfig.tagline,
        logo: {
          ...defaultGymConfig.logo,
          svg: persisted.logoUrl || defaultGymConfig.logo.svg,
          alt: persisted.gymName || defaultGymConfig.logo.alt,
        },
        contact: {
          ...defaultGymConfig.contact,
          phoneFormatted: persisted.phoneFormatted || defaultGymConfig.contact.phoneFormatted,
          phoneRaw: persisted.phoneRaw || defaultGymConfig.contact.phoneRaw,
          whatsappFormatted: persisted.phoneFormatted || defaultGymConfig.contact.whatsappFormatted,
          whatsappRaw: persisted.whatsappRaw || defaultGymConfig.contact.whatsappRaw,
          whatsappMessage: persisted.whatsappMessage || defaultGymConfig.contact.whatsappMessage,
          email: persisted.email || defaultGymConfig.contact.email,
          address: persisted.address || defaultGymConfig.contact.address,
          city: persisted.city || defaultGymConfig.contact.city,
          state: persisted.state || defaultGymConfig.contact.state,
          pincode: persisted.pincode || defaultGymConfig.contact.pincode,
          googleMapsUrl: persisted.googleMapsUrl || defaultGymConfig.contact.googleMapsUrl,
        },
        hero: {
          ...defaultGymConfig.hero,
          headlineHighlight: persisted.heroHeadline || defaultGymConfig.hero.headlineHighlight,
          subheadline: persisted.heroSubheadline || defaultGymConfig.hero.subheadline,
          description: persisted.heroDescription || defaultGymConfig.hero.description,
          image: persisted.heroImage || defaultGymConfig.hero.image,
        },
        detailedAbout: persisted.aboutText || defaultGymConfig.detailedAbout,
        programs,
        plans,
        trainers,
        facilities,
        gallery,
        testimonials,
        faqs,
        openingHours,
        socialLinks,
        provider: {
          ...defaultGymConfig.provider,
          name: "ChaloBuild",
          url: "https://chalobuild.in",
          poweredByText: "Powered by ChaloBuild",
          footerText: "Crafted with ChaloBuild",
          badgeText: "ChaloBuild Partner Gym",
        },
      };
    } catch (error) {
      console.error("Error resolving gym config, falling back to default:", error);
      return defaultGymConfig;
    }
  }
);
