import type { Metadata } from "next";
import { PageIntro, PublicPage } from "@/components/public/public-ui";
import { ContactSection } from "@/components/public/contact-section";
import { FaqSection } from "@/components/public/faq-section";
import { gymConfig } from "@/config/gym";

export const metadata: Metadata = {
  title: `Contact & Location — ${gymConfig.name} (ChaloBuild Demo)`,
  description: `Get in touch with ${gymConfig.name} in ${gymConfig.contact.city}. Operating hours, location, and free trial pass reservation.`,
};

export default function DemoContactPage() {
  return (
    <PublicPage config={gymConfig} basePath="/demo/ironcore">
      <PageIntro
        eyebrow="Visit & Get in Touch"
        title="We’re Ready to Welcome You."
        text={`Drop by our training floor in ${gymConfig.contact.city}, give us a call, or send a quick WhatsApp message. Our team is available throughout operating hours.`}
      />

      <ContactSection config={gymConfig} slug="demo-gym" />
      <FaqSection config={gymConfig} />
    </PublicPage>
  );
}
