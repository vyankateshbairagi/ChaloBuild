import type { Metadata } from "next";
import { PageIntro, CtaSection, PublicPage } from "@/components/public/public-ui";
import { ProgramsSection } from "@/components/public/programs-section";
import { gymConfig } from "@/config/gym";

export const metadata: Metadata = {
  title: `Training Programs — ${gymConfig.name} (ChaloBuild Demo)`,
  description: `Explore specialized workout programs at ${gymConfig.name}: Strength & Hypertrophy, Functional Turf, and 1-on-1 Coaching.`,
};

export default function DemoProgramsPage() {
  return (
    <PublicPage config={gymConfig} basePath="/demo/ironcore">
      <PageIntro
        eyebrow="Specialized Coaching & Routines"
        title="Training Programs Engineered for Progress."
        text="Whether you want to build lean muscle mass, improve cardiovascular conditioning, or prepare for athletic performance, our coaches design structured, periodized training cycles tailored to you."
      />

      <ProgramsSection showAllLink={false} config={gymConfig} basePath="/demo/ironcore" />

      <CtaSection
        title="Need Advice on Which Program Fits Best?"
        text="Book a 1-on-1 assessment with our head coach. We will evaluate your movement, strength, and lifestyle to recommend the ideal routine."
        primary="Claim Free Assessment"
        href="/demo/ironcore/contact#trial"
        config={gymConfig}
      />
    </PublicPage>
  );
}
