import { Settings, Store, Users } from "lucide-react";

export function ChaloBuildFeatureStrip() {
  const features = [
    {
      icon: Users,
      heading: "Bring in more members",
      description:
        "A professional website helps you showcase your gym, build trust and turn visitors into long-term members.",
    },
    {
      icon: Settings,
      heading: "Simplify daily operations",
      description:
        "Manage members, track attendance, handle subscriptions and process payments — all from one easy-to-use dashboard.",
    },
    {
      icon: Store,
      heading: "Your brand, your website",
      description:
        "Get a fully customisable, mobile-friendly website that reflects your gym’s unique identity and style.",
    },
  ];

  return (
    <section className="border-y border-slate-200/80 bg-slate-50/70 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3 md:gap-8 lg:gap-12">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.heading} className="flex flex-col items-start">
                {/* Circular Pale-Blue Icon Background */}
                <div className="flex size-12 items-center justify-center rounded-full bg-blue-100/90 text-blue-600 mb-5">
                  <Icon className="size-6 text-blue-600" />
                </div>

                {/* Bold Dark Navy Heading */}
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                  {feature.heading}
                </h3>

                {/* Muted Blue-Grey Description */}
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
