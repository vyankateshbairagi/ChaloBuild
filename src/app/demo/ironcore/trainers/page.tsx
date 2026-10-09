import type { Metadata } from "next";
import { PageIntro, CtaSection, PublicPage } from "@/components/public/public-ui";
import { TrainersSection } from "@/components/public/trainers-section";
import { gymConfig } from "@/config/gym";

export const metadata: Metadata = {
  title: `Elite Coaches — ${gymConfig.name} (ChaloBuild Demo)`,
  description: `Meet the certified personal trainers and strength coaches at ${gymConfig.name}.`,
};

export default function DemoTrainersPage() {
  return (
    <PublicPage config={gymConfig} basePath="/demo/ironcore">
      <PageIntro
        eyebrow="Certified Strength Coaches"
        title="Guidance for the Work You Want to Do."
        text={`Every coach at ${gymConfig.name} is thoroughly certified, continually educated, and dedicated to teaching proper technique and building resilient lifters.`}
      />

      <TrainersSection showAllLink={false} config={gymConfig} basePath="/demo/ironcore" />

      <CtaSection
        title="Ready to Work 1-on-1 With an Elite Coach?"
        text="Book a private movement consultation. We'll identify mobility restrictions, assess your baseline strength, and build your custom roadmap."
        primary="Book Coach Consultation"
        href="/demo/ironcore/contact#trial"
        config={gymConfig}
      />
    </PublicPage>
  );
}
