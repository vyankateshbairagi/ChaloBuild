import type { Metadata } from "next";
import { Dumbbell } from "lucide-react";
import { PageIntro, CtaSection, PublicPage } from "@/components/public/public-ui";
import { GallerySection } from "@/components/public/gallery-section";
import { gymConfig } from "@/config/gym";

export const metadata: Metadata = {
  title: `Photo Gallery — ${gymConfig.name}`,
  description: `Take a visual tour of ${gymConfig.name}. Explore our Olympic lifting platforms, heavy dumbbell racks, high-tech cardio deck, and luxury lockers.`,
};

export default function GalleryPage() {
  return (
    <PublicPage>
      <PageIntro
        eyebrow="Visual Tour"
        title="A Facility Built for Showing Up."
        text={`Explore the training floor at ${gymConfig.name}. High ceilings, natural ventilation, precision Olympic barbells, and an athletic atmosphere designed to inspire focus.`}
      />

      {/* Full Gallery with Category Filters and Lightbox */}
      <GallerySection showAllLink={false} />

      {/* Equipment Showcase & Brands */}
      <section className="bg-[#0c0c10] py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-rose-500">
              Commercial Grade Gear
            </span>
            <h2 className="mt-2 text-2xl font-black uppercase text-white sm:text-3xl">
              Equipped with Industry-Standard Hardware.
            </h2>
            <p className="mt-3 text-xs text-zinc-400">
              We do not compromise on bar knurling, cable smoothness, or plate tolerances.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Rogue & Eleiko Barbells",
                desc: "Precision knurled 20kg Olympic bars with needle bearings for smooth spin.",
              },
              {
                title: "Calibrated Bumper Plates",
                desc: "Competition drop-tested virgin rubber bumpers accurate to within 10 grams.",
              },
              {
                title: "Concept2 Rowers & Ergs",
                desc: "Gold standard cardio and metabolic testing equipment with PM5 monitors.",
              },
              {
                title: "InBody 270 Body Analyzer",
                desc: "Clinical bio-impedance body composition assessment in under 60 seconds.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-[#121217] p-5 text-center"
              >
                <div className="mx-auto flex size-10 items-center justify-center rounded-xl bg-rose-500/10 text-rose-400 mb-3">
                  <Dumbbell className="size-5" />
                </div>
                <h3 className="text-sm font-bold uppercase text-white">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-xs text-zinc-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Experience the Facility in Real Life"
        text="Photos only show half the story. Claim your 1-day free guest pass and come feel the energy on the training floor."
        primary="Claim Free Workout Pass"
        href="/contact#trial"
      />
    </PublicPage>
  );
}
