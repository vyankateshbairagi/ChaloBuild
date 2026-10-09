import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { gymConfig } from "@/config/gym";
import { SectionHeading } from "@/components/public/public-ui";
import { Button } from "@/components/ui/button";

export function AboutSection() {
  const standards = [
    {
      title: "Science-Backed Programming",
      desc: "Workouts structured with progressive overload, not random exhausting circuits.",
    },
    {
      title: "Zero-Ego Athletic Atmosphere",
      desc: "Every lifter, from beginners to national powerlifters, is respected and supported.",
    },
    {
      title: "Cleanliness & Air Quality",
      desc: "HEPA filtration, commercial air conditioning, and continuous floor sanitization.",
    },
    {
      title: "Equipment Availability",
      desc: "Multiple power racks and dedicated platforms so you never wait for a squat rack.",
    },
  ];

  return (
    <section id="about" className="relative bg-[#09090b] py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Visual Collage */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-white/15 bg-zinc-900 shadow-2xl group">
              <Image
                src="/images/strength-zone.jpg"
                alt="IronCore Fitness Gym Training Floor"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-rose-400">
                  Built For Lifters
                </span>
                <p className="text-base font-bold text-white">
                  Heavy iron, calibrated bumpers & precision racks.
                </p>
              </div>
            </div>

            {/* Stat callout card */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-white/10 bg-[#141418] p-5">
                <p className="text-3xl font-black text-rose-500">5,000+</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  Sq Ft Training Floor
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-[#141418] p-5">
                <p className="text-3xl font-black text-amber-500">100%</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  Certified Coaches
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Mission & Narrative */}
          <div className="lg:col-span-7 space-y-6 lg:pl-6">
            <SectionHeading
              eyebrow="About IronCore"
              title="A Dedicated Training Space Built for Real Lifters."
              text={gymConfig.detailedAbout}
            />

            <div className="grid gap-4 sm:grid-cols-2 pt-2">
              {standards.map((s) => (
                <div
                  key={s.title}
                  className="rounded-xl border border-white/5 bg-white/[0.02] p-4 transition-colors hover:border-white/10"
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="size-4 text-rose-500 shrink-0" />
                    <h4 className="text-sm font-bold text-white">
                      {s.title}
                    </h4>
                  </div>
                  <p className="mt-1.5 text-xs leading-relaxed text-zinc-400">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Button
                asChild
                className="bg-rose-600 px-6 py-6 font-bold uppercase tracking-wider text-white hover:bg-rose-500"
              >
                <Link href="/pricing">
                  <span>Explore Membership Options</span>
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="border-white/15 bg-white/5 px-6 py-6 font-bold uppercase tracking-wider text-zinc-300 hover:text-white"
              >
                <Link href="/trainers">
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
