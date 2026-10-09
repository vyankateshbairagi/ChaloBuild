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
      <section className="bg-slate-50 py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-200">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
              Commercial Grade Gear
            </span>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
              Equipped with Industry-Standard Hardware.
            </h2>
            <p className="mt-3 text-xs text-slate-600">
              We do not compromise on bar knurling, cable smoothness, or plate tolerances.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Precision Barbells",
                desc: "Precision knurled 20kg Olympic bars with needle bearings for smooth, safe rotation.",
              },
              {
                title: "Calibrated Bumper Plates",
                desc: "Competition drop-tested virgin rubber bumpers accurate to rigorous tolerances.",
              },
              {
                title: "Ergometers & Rowers",
                desc: "Industry-standard cardio and metabolic testing equipment with performance monitors.",
              },
              {
                title: "Body Composition Analyzer",
                desc: "Clinical bio-impedance body composition assessment in under 60 seconds.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-xs hover:border-blue-300 hover:shadow-md transition-all"
              >
                <div className="mx-auto flex size-10 items-center justify-center rounded-xl border border-blue-200 bg-blue-50 text-blue-600 mb-3">
                  <Dumbbell className="size-5" />
                </div>
                <h3 className="text-sm font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
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
