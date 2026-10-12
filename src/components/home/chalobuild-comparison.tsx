import { Check, X, Sparkles } from "lucide-react";

export function ChaloBuildComparison() {
  const comparisons = [
    {
      feature: "Custom Branded Gym Website",
      oldWay: "Generic Wix template or no website at all",
      chaloBuild: "Athletic, conversion-focused website deployed in 48 hours",
    },
    {
      feature: "WhatsApp 1-Day Pass Lead Magnet",
      oldWay: "Manual phone calls or walk-ins slipping away",
      chaloBuild: "Instant 1-tap pass generation sent directly to gym's WhatsApp",
    },
    {
      feature: "Daily Attendance Tracking",
      oldWay: "Paper register notebook or lost biometric punch card",
      chaloBuild: "1-Tap search & check-in with duplicate protection per day",
    },
    {
      feature: "Membership Expiry Follow-ups",
      oldWay: "Forgot to check, leading to missed subscription renewals",
      chaloBuild: "Automated alert dashboard highlighting 7d & 30d expiries",
    },
    {
      feature: "Payment Recording & Invoicing",
      oldWay: "Scattered UPI screenshots and paper receipt books",
      chaloBuild: "Digital payment logs (UPI, Cash, Card) with sequential receipts",
    },
    {
      feature: "Ongoing Technical Support",
      oldWay: "Freelancer disappears after delivering buggy code",
      chaloBuild: "Direct support from ThinkBuild engineering team in Nashik",
    },
  ];

  return (
    <section className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 border-b border-slate-200 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-cyan-200 bg-cyan-100/70 px-3 py-0.5 text-[10px] font-bold uppercase tracking-widest text-cyan-800 shadow-2xs">
            <Sparkles className="size-3 text-cyan-600" />
            <span>THE REALITY CHECK</span>
          </div>
          <h2 className="mt-2.5 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900">
            Why Modern Gyms Upgrade to ChaloBuild.
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600">
            See how ChaloBuild eliminates operational headaches and protects recurring gym revenue compared to old-school methods.
          </p>
        </div>

        {/* Comparison Table / Cards */}
        <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg shadow-slate-900/5">
          <div className="grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-slate-200">
            {/* Left Header: Old Way */}
            <div className="md:col-span-5 bg-slate-50/80 p-4 sm:p-5 flex items-center justify-between">
              <div>
                <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-rose-600">
                  <X className="size-3.5" />
                  The Old Fragmented Way
                </span>
                <h3 className="text-base font-bold text-slate-900 mt-0.5">
                  Notebooks, Excel Sheets &amp; Disjointed Tools
                </h3>
              </div>
            </div>

            {/* Right Header: ChaloBuild */}
            <div className="md:col-span-7 bg-gradient-to-r from-cyan-50/70 to-blue-50/70 p-4 sm:p-5 flex items-center justify-between border-t md:border-t-0">
              <div>
                <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-cyan-700">
                  <Sparkles className="size-3.5 text-cyan-600" />
                  The ChaloBuild Way
                </span>
                <h3 className="text-base font-bold text-slate-900 mt-0.5">
                  All-in-One Turnkey Growth Platform
                </h3>
              </div>
            </div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-slate-100 text-xs sm:text-sm">
            {comparisons.map((item, index) => (
              <div
                key={item.feature}
                className={`grid grid-cols-1 md:grid-cols-12 items-center divide-y md:divide-y-0 md:divide-x divide-slate-100 ${
                  index % 2 === 0 ? "bg-white" : "bg-slate-50/40"
                } hover:bg-cyan-50/30 transition-colors`}
              >
                {/* Feature Name & Old Way */}
                <div className="md:col-span-5 p-3.5 sm:p-4 space-y-0.5">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    {item.feature}
                  </p>
                  <div className="flex items-start gap-2 text-slate-600">
                    <X className="size-3.5 text-rose-500 shrink-0 mt-0.5" />
                    <span className="text-xs">{item.oldWay}</span>
                  </div>
                </div>

                {/* ChaloBuild Way */}
                <div className="md:col-span-7 p-3.5 sm:p-4 bg-cyan-50/20">
                  <div className="flex items-start gap-2 text-slate-900 font-semibold">
                    <Check className="size-3.5 text-cyan-600 shrink-0 mt-0.5 font-bold" />
                    <span className="text-xs">{item.chaloBuild}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
