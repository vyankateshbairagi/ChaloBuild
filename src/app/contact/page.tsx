import type { Metadata } from "next";
import { PageIntro, PublicPage } from "@/components/public/public-ui";
import { ContactSection } from "@/components/public/contact-section";
import { FaqSection } from "@/components/public/faq-section";
import { gymConfig } from "@/config/gym";

export const metadata: Metadata = {
  title: `Contact & Location — ${gymConfig.name}`,
  description: `Get in touch with ${gymConfig.name} in ${gymConfig.contact.city}. Location address, operating hours, WhatsApp front desk, and free trial pass request.`,
};

export default function ContactPage() {
  return (
    <PublicPage>
      <PageIntro
        eyebrow="Visit & Get in Touch"
        title="We’re Ready to Welcome You."
        text={`Drop by our training floor in ${gymConfig.contact.city}, give us a call, or send a quick WhatsApp message. Our front desk team is available throughout our operating hours.`}
      />

      {/* Main Interactive Contact Section & Map */}
      <ContactSection />

      {/* Common Visiting FAQs */}
      <FaqSection />
    </PublicPage>
  );
}
