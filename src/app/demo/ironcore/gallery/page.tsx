import type { Metadata } from "next";
import { PageIntro, CtaSection, PublicPage } from "@/components/public/public-ui";
import { GallerySection } from "@/components/public/gallery-section";
import { gymConfig } from "@/config/gym";

export const metadata: Metadata = {
  title: `Photo Gallery — ${gymConfig.name} (ChaloBuild Demo)`,
  description: `Take a visual tour of ${gymConfig.name}. Explore our Olympic lifting platforms, heavy dumbbell racks, and cardio equipment.`,
};

export default function DemoGalleryPage() {
  return (
    <PublicPage config={gymConfig} basePath="/demo/ironcore">
      <PageIntro
        eyebrow="Visual Tour"
        title="A Facility Built for Showing Up."
        text={`Explore the training floor at ${gymConfig.name}. High ceilings, natural ventilation, precision Olympic barbells, and an athletic atmosphere designed to inspire focus.`}
      />

      <GallerySection showAllLink={false} config={gymConfig} basePath="/demo/ironcore" />

      <CtaSection
        title="Experience the Facility in Real Life"
        text="Photos only show half the story. Claim your 1-day free guest pass and come feel the energy on the training floor."
        primary="Claim Free Workout Pass"
        href="/demo/ironcore/contact#trial"
        config={gymConfig}
      />
    </PublicPage>
  );
}
