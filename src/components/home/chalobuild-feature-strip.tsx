import { Settings, Store, Users } from "lucide-react";

export function ChaloBuildFeatureStrip() {
  const features = [
    {
      icon: Users,
      heading: "Bring in more members",
      description:
        "A high-converting website showcases your gym, builds instant athletic credibility, and turns web visitors into committed long-term members.",
    },
    {
      icon: Settings,
      heading: "Simplify daily operations",
      description:
        "Manage members, track attendance, handle subscriptions and record payments — all from one lightning-fast, intuitive staff dashboard.",
    },
    {
      icon: Store,
      heading: "Your brand, your website",
      description:
        "Get a fully tailored, mobile-responsive website reflecting your gym’s signature colors, logo, equipment, and training programs.",
    },
  ];

  return (
    <section className="relative border-y border-slate-200/80 bg-slate-50/80 py-12 sm:py-16 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3 md:gap-8 lg:gap-12">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.heading}
                className="group flex flex-col items-start p-6 rounded-2xl border border-transparent hover:border-slate-200 hover:bg-white hover:shadow-md transition-all duration-300"
              >
                {/* Glowing Electric Cyan Icon Background */}
                <div className="flex size-14 items-center justify-center rounded-2xl bg-cyan-50 border border-cyan-200 text-cyan-600 mb-5 shadow-xs group-hover:scale-105 group-hover:border-cyan-400 group-hover:bg-cyan-100/70 transition-all">
                  <Icon className="size-6 text-cyan-600" />
                </div>

                {/* Bold Dark Heading */}
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight group-hover:text-cyan-700 transition-colors">
                  {feature.heading}
                </h3>

                {/* Muted Slate Description */}
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
