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
    <section id="about" className="relative bg-[#090b11] py-20 px-4 sm:px-6 lg:px-8 border-b border-white/[0.08] text-white font-sans overflow-hidden">
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[350px] bg-[radial-gradient(ellipse_at_center,rgba(239,68,68,0.06),transparent_70%)] pointer-events-none blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Visual Collage */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-white/[0.08] bg-slate-950 shadow-2xl group">
              <Image
                src="/images/strength-zone.jpg"
                alt={`${config.name} Training Floor`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090b11] via-transparent to-black/30" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-[10px] font-black uppercase tracking-wider text-red-400">
                  Built For Real Lifters
                </span>
                <p className="text-base font-bold text-white">
                  Heavy iron, calibrated bumpers &amp; competition power racks.
                </p>
              </div>
            </div>

            {/* Stat Callout Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-white/[0.08] bg-slate-900/60 backdrop-blur-xl p-5 shadow-xl">
                <p className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">5,000+</p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Sq Ft Training Arena
                </p>
              </div>
              <div className="rounded-2xl border border-white/[0.08] bg-slate-900/60 backdrop-blur-xl p-5 shadow-xl">
                <p className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">100%</p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  CSCS-Certified Coaches
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
                  className="rounded-2xl border border-white/[0.08] bg-slate-900/50 backdrop-blur-xl p-5 transition-all hover:border-red-500/40 hover:bg-slate-900/80"
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="size-4 text-red-400 shrink-0" />
                    <h4 className="text-sm font-black uppercase tracking-tight text-white">
                      {s.title}
                    </h4>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-slate-400">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Button
                asChild
                className="bg-gradient-to-r from-red-600 via-rose-600 to-red-700 font-bold uppercase text-xs tracking-wider text-white shadow-lg shadow-red-600/30 hover:from-red-500 hover:to-red-600 border border-red-500/40 py-6 px-6"
              >
                <Link href={`${prefix}/contact#trial`}>
                  <span>Book Free Trial Tour</span>
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="border-white/[0.12] bg-slate-900/80 text-slate-200 hover:bg-slate-800 hover:text-white hover:border-red-500/40 py-6 px-6 text-xs font-bold uppercase tracking-wider"
              >
                <Link href={`${prefix}/trainers`}>
                  <span>Meet Our Coaching Team</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
