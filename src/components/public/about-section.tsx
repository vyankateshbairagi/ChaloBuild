import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { gymConfig, type GymConfig } from "@/config/gym";
import { SectionHeading } from "@/components/public/public-ui";
import { Button } from "@/components/ui/button";

export function AboutSection({
  config = gymConfig,
  basePath = "",
}: {
  config?: GymConfig;
  basePath?: string;
}) {
  const prefix = basePath ? basePath : "";

  const standards = [
    {
      title: "Science-Backed Programming",
      desc: "Workouts structured with progressive overload, not random exhausting circuits.",
    },
    {
      title: "Zero-Ego Athletic Atmosphere",
      desc: "Every lifter, from beginners to experienced athletes, is respected and supported.",
    },
    {
      title: "Cleanliness & Air Quality",
      desc: "HEPA filtration, commercial air conditioning, and continuous floor sanitization.",
    },
    {
      title: "Equipment Availability",
      desc: "Multiple power racks and dedicated platforms so you rarely wait for equipment.",
    },
  ];

  return (
    <section id="about" className="relative bg-white py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Visual Collage */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-xl shadow-slate-900/5 group">
              <Image
                src="/images/strength-zone.jpg"
                alt={`${config.name} Training Floor`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-[11px] font-bold uppercase tracking-wider text-rose-300">
                  Built For Lifters
                </span>
                <p className="text-base font-bold">
                  Heavy iron, calibrated bumpers &amp; precision racks.
                </p>
              </div>
            </div>

            {/* Stat Callout Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-3xl font-extrabold text-red-600">5,000+</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Sq Ft Training Floor
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-3xl font-extrabold text-red-600">100%</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Certified Coaches
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Mission & Narrative */}
          <div className="lg:col-span-7 space-y-6 lg:pl-6">
            <SectionHeading
              eyebrow={`About ${config.name}`}
              title="A Dedicated Training Space Built for Real Progression."
              text={config.detailedAbout}
            />

            <div className="grid gap-4 sm:grid-cols-2 pt-2">
              {standards.map((s) => (
                <div
                  key={s.title}
                  className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 transition-colors hover:border-slate-300 hover:bg-slate-50"
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="size-4 text-red-600 shrink-0" />
                    <h4 className="text-sm font-bold text-slate-900">
                      {s.title}
                    </h4>
                  </div>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Button
                asChild
                className="bg-red-600 px-6 py-6 font-semibold uppercase tracking-wider text-white hover:bg-red-700 shadow-sm"
              >
                <Link href={`${prefix}/pricing`}>
                  <span>Explore Membership Options</span>
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="border-slate-300 bg-white px-6 py-6 font-semibold uppercase tracking-wider text-slate-700 hover:bg-slate-50 shadow-xs"
              >
                <Link href={`${prefix}/trainers`}>
                  <span>Meet Our Coaches</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
