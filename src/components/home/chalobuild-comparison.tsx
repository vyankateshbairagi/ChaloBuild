import { Check, X, Sparkles } from "lucide-react";

export function ChaloBuildComparison() {
  const comparisons = [
    {
      feature: "Cost Over 2 Years",
      saas: "₹72,000 – ₹1,20,000 (Locked into endless monthly bills)",
      freelancer: "₹50,000+ with surprise bugfix invoices",
      chaloBuild: "₹24,999 One-Time Fixed (Save ₹50,000+)",
      highlight: true,
    },
    {
      feature: "Code & Data Ownership",
      saas: "Zero ownership. Cancel subscription and lose all your data",
      freelancer: "Scattered code on personal laptop, no documentation",
      chaloBuild: "100% Full Codebase & PostgreSQL Database Handover",
      highlight: true,
    },
    {
      feature: "Launch Turnaround",
      saas: "Immediate generic template with clunky manual setup",
      freelancer: "3 to 6 months of endless delays and missed dates",
      chaloBuild: "Live on your custom domain in 48 Hours turnkey",
      highlight: false,
    },
    {
      feature: "Commission on Member Dues",
      saas: "Often 2% to 15% aggregator cuts on payment transactions",
      freelancer: "Varies, often broken payment gateways",
      chaloBuild: "0% Commission. Direct UPI / Cash into your bank",
      highlight: false,
    },
    {
      feature: "Front-Desk + Website Sync",
      saas: "Either website builder without attendance, or CRM without modern site",
      freelancer: "Separate disjointed tools that don't talk to each other",
      chaloBuild: "2-in-1 Unified System: Athletic Website + Connected Dashboard",
      highlight: false,
    },
    {
      feature: "Engineering Support",
      saas: "Slow automated ticket bot or endless email back-and-forth",
      freelancer: "Disappears after payment or charges for every simple edit",
      chaloBuild: "Direct WhatsApp & Phone support from dedicated engineers",
      highlight: false,
    },
  ];

  return (
    <section className="relative py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#080a10] border-b border-white/[0.08] overflow-hidden text-white font-sans">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/60 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-cyan-300 shadow-[0_0_12px_rgba(0,245,255,0.15)]">
            <Sparkles className="size-3 text-cyan-400" />
            <span>THE REALITY CHECK</span>
          </div>
          <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
            Why Smart Gym Owners Choose One-Time Builds.
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-slate-400">
            Compare ChaloBuild against recurring subscription traps and unreliable freelance developers.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0c101c] shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-slate-800 text-xs font-bold uppercase tracking-wider">
            <div className="md:col-span-3 bg-slate-900/90 p-4 text-slate-300">
              Capability
            </div>
            <div className="md:col-span-3 bg-rose-950/30 p-4 text-rose-300">
              Monthly SaaS Platforms
            </div>
            <div className="md:col-span-3 bg-slate-900/60 p-4 text-slate-400">
              Unreliable Freelancers
            </div>
            <div className="md:col-span-3 bg-gradient-to-r from-cyan-950/80 to-blue-950/80 p-4 text-cyan-300 border-l border-cyan-500/30 flex items-center gap-1.5">
              <Sparkles className="size-3.5 text-cyan-400" />
              <span>ChaloBuild (One-Time)</span>
            </div>
          </div>

          <div className="divide-y divide-slate-800/80 text-xs sm:text-sm">
            {comparisons.map((row, index) => (
              <div
                key={row.feature}
                className={`grid grid-cols-1 md:grid-cols-12 items-center divide-y md:divide-y-0 md:divide-x divide-slate-800/80 ${
                  index % 2 === 0 ? "bg-[#0c101c]" : "bg-slate-900/30"
                } hover:bg-slate-800/40 transition-colors`}
              >
                {/* Feature Name */}
                <div className="md:col-span-3 p-3.5 sm:p-4 text-xs font-bold text-white">
                  {row.feature}
                </div>

                {/* SaaS Way */}
                <div className="md:col-span-3 p-3.5 sm:p-4 text-slate-400">
                  <div className="flex items-start gap-2">
                    <X className="size-4 text-rose-500 shrink-0 mt-0.5" />
                    <span className="text-xs">{row.saas}</span>
                  </div>
                </div>

                {/* Freelancer Way */}
                <div className="md:col-span-3 p-3.5 sm:p-4 text-slate-400">
                  <div className="flex items-start gap-2">
                    <X className="size-4 text-amber-500 shrink-0 mt-0.5" />
                    <span className="text-xs">{row.freelancer}</span>
                  </div>
                </div>

                {/* ChaloBuild Way */}
                <div className="md:col-span-3 p-3.5 sm:p-4 bg-cyan-950/20 text-white font-medium">
                  <div className="flex items-start gap-2">
                    <Check className="size-4 text-emerald-400 shrink-0 mt-0.5 font-bold" />
                    <span className={`text-xs ${row.highlight ? "text-cyan-300 font-bold" : "text-slate-100"}`}>
                      {row.chaloBuild}
                    </span>
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
