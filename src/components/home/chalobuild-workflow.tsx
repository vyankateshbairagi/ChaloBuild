import Link from "next/link";
import {
  Globe,
  LayoutDashboard,
  MessageCircle,
  Rocket,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Clock,
  ShieldCheck,
} from "lucide-react";

export function ChaloBuildWorkflow() {
  const steps = [
    {
      step: "01",
      badge: "EXPLORE & VERIFY",
      title: "View Website & Explore Capabilities",
      description:
        "Browse our modern showcase. Learn how our athletic layouts, WhatsApp lead magnets, and real-time attendance consoles solve front-desk chaos.",
      icon: Globe,
      color: "from-cyan-500 to-sky-600",
      cta: { text: "Browse Platform Below", link: "#platform" },
    },
    {
      step: "02",
      badge: "HANDS-ON TEST DRIVE",
      title: "Test the Real Live Demos",
      description:
        "No signup or credit card required. Test-drive the real IronCore fitness website and open the live front-desk management dashboard with full mock data.",
      icon: LayoutDashboard,
      color: "from-sky-500 to-blue-600",
      cta: { text: "Launch Live Demo", link: "/demo/ironcore" },
    },
    {
      step: "03",
      badge: "DIRECT CONSULTATION",
      title: "Contact Us With Your Gym Scope",
      description:
        "If you like the live demo, contact our engineering team via 1-click WhatsApp or Phone. Tell us your gym name, colors, and membership plans.",
      icon: MessageCircle,
      color: "from-emerald-500 to-teal-600",
      cta: {
        text: "WhatsApp Us (+91 90750 97235)",
        link: "https://wa.me/919075097235?text=Hi%20ChaloBuild!%20I%20tested%20your%20gym%20demo%20and%20want%20to%20get%20a%20one-time%20turnkey%20build.",
      },
    },
    {
      step: "04",
      badge: "TURNKEY DELIVERY",
      title: "We Build & Launch in 48 Hours",
      description:
        "We build your custom-branded website, configure your database, link your custom domain, and train your staff. 100% lifetime ownership, zero monthly fees.",
      icon: Rocket,
      color: "from-blue-600 to-indigo-600",
      cta: { text: "View One-Time Packages", link: "#pricing" },
    },
  ];

  return (
    <section id="workflow" className="relative py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#080a10] border-b border-white/[0.08] overflow-hidden text-white font-sans">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[380px] bg-[radial-gradient(ellipse_at_center,rgba(0,245,255,0.06),transparent_70%)] pointer-events-none blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/60 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-cyan-300 shadow-[0_0_12px_rgba(0,245,255,0.15)]">
            <Sparkles className="size-3 text-cyan-400" />
            <span>THE CHALOBUILD CLIENT WORKFLOW</span>
          </div>
          <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
            Inspect the Demo. Own Your Build.{" "}
            <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">
              Zero Subscriptions. Just Pure Results.
            </span>
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed max-w-2xl mx-auto">
            We don&apos;t lock you into monthly SaaS fees. You inspect our live product in action, contact our engineers directly, and get your custom turnkey platform built and delivered in 48 hours.
          </p>
        </div>

        {/* 4-Step Interactive Workflow Cards Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((item, index) => {
            const Icon = item.icon;
            const isExternal = item.cta.link.startsWith("http");

            return (
              <div
                key={item.step}
                className="group relative rounded-2xl border border-white/[0.08] bg-slate-900/60 backdrop-blur-xl p-6 flex flex-col justify-between hover:border-cyan-400/50 hover:bg-slate-900/90 hover:shadow-xl hover:shadow-cyan-500/10 hover:-translate-y-1 transition-all duration-300"
              >
                {/* Connecting subtle line on desktop */}
                {index < 3 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-slate-600">
                    <ArrowRight className="size-4" />
                  </div>
                )}

                <div>
                  {/* Top Step Number & Icon */}
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-black text-slate-700 group-hover:text-cyan-400/80 transition-colors">
                      {item.step}
                    </span>
                    <div
                      className={`flex size-11 items-center justify-center rounded-xl bg-gradient-to-br ${item.color} text-white shadow-md shadow-black/40 group-hover:scale-105 transition-transform`}
                    >
                      <Icon className="size-5" />
                    </div>
                  </div>

                  <div className="mt-4">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-cyan-400 bg-cyan-950/60 border border-cyan-500/30 px-2 py-0.5 rounded-md">
                      {item.badge}
                    </span>
                    <h3 className="mt-2.5 text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Card CTA Trigger */}
                <div className="mt-6 pt-4 border-t border-slate-800/80">
                  {isExternal ? (
                    <a
                      href={item.cta.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex w-full items-center justify-between text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
                    >
                      <span>{item.cta.text}</span>
                      <ArrowRight className="size-3.5" />
                    </a>
                  ) : (
                    <a
                      href={item.cta.link}
                      className="inline-flex w-full items-center justify-between text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <span>{item.cta.text}</span>
                      <ArrowRight className="size-3.5" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Workflow Guarantees Bar */}
        <div className="mt-10 rounded-2xl border border-white/[0.08] bg-[#0c101c]/80 p-5 flex flex-wrap items-center justify-around gap-4 text-xs font-medium text-slate-300">
          <div className="flex items-center gap-2">
            <Clock className="size-4 text-cyan-400" />
            <span>48-Hour Live Deployment Guarantee</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="size-4 text-emerald-400" />
            <span>Zero Pushy Sales • Speak Directly to Engineers</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="size-4 text-sky-400" />
            <span>100% Full Codebase &amp; Database Handover</span>
          </div>
        </div>
      </div>
    </section>
  );
}
