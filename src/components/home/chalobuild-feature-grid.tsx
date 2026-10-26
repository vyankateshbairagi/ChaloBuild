import {
  CalendarCheck,
  Clock,
  CreditCard,
  MessageCircle,
  ShieldCheck,
  Users,
  Zap,
} from "lucide-react";

export function ChaloBuildFeatureGrid() {
  const features = [
    {
      icon: Users,
      badge: "MEMBER CRM",
      title: "Comprehensive Member Profiles",
      desc: "Store emergency contacts, joining dates, medical notes, phone numbers, and active membership plans in one unified database.",
      stat: "Zero lost contacts",
      color: "from-cyan-500 to-sky-600",
    },
    {
      icon: CalendarCheck,
      badge: "FRONT DESK",
      title: "Instant Attendance Check-Ins",
      desc: "Search by phone number or unique member code to mark daily attendance with real-time logs and duplicate-check protection.",
      stat: "Under 2s per check-in",
      color: "from-sky-500 to-blue-600",
    },
    {
      icon: CreditCard,
      badge: "FINANCE & UPI",
      title: "Payment & Digital Receipts",
      desc: "Log UPI QR transfers, cash payments, cards, and bank settlements with automated sequential receipt numbers and PDF generation.",
      stat: "100% auditable ledger",
      color: "from-emerald-500 to-teal-600",
    },
    {
      icon: Clock,
      badge: "RETENTION",
      title: "Expiry & Renewal Warning Hub",
      desc: "Filter members expiring in the next 7 to 30 days. Send fast WhatsApp renewal reminders to protect recurring gym cash flow.",
      stat: "+22% renewals saved",
      color: "from-amber-500 to-rose-600",
    },
    {
      icon: MessageCircle,
      badge: "LEAD CAPTURE",
      title: "WhatsApp 1-Day Trial Passes",
      desc: "Visitors on your public website tap one button to request a trial day-pass, delivering their name and phone straight to your inbox.",
      stat: "High-intent walk-ins",
      color: "from-teal-500 to-emerald-600",
    },
    {
      icon: ShieldCheck,
      badge: "SECURITY",
      title: "Role-Based Staff Access & Isolation",
      desc: "Equip front desk trainers with operational check-in powers while protecting financial collections and owner reports.",
      stat: "PostgreSQL isolated",
      color: "from-blue-600 to-indigo-600",
    },
  ];

  return (
    <section id="features" className="relative py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#090b12] border-b border-white/[0.08] overflow-hidden text-white font-sans">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/60 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-cyan-300 shadow-[0_0_12px_rgba(0,245,255,0.15)]">
            <Zap className="size-3 text-cyan-400" />
            <span>BUILT FOR DAILY GYM REALITIES</span>
          </div>
          <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
            Engineered to Run and Scale Any Fitness Facility.
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed">
            Every feature was engineered to replace manual paperwork with seamless digital efficiency. Built once, owned forever.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feat) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.title}
                className="group relative rounded-2xl border border-white/[0.08] bg-slate-900/60 backdrop-blur-xl p-6 flex flex-col justify-between hover:border-cyan-400/50 hover:bg-slate-900/90 hover:shadow-xl hover:shadow-cyan-500/10 hover:-translate-y-1 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div
                      className={`flex size-11 items-center justify-center rounded-xl bg-gradient-to-br ${feat.color} text-white shadow-md shadow-black/40 group-hover:scale-105 transition-transform`}
                    >
                      <Icon className="size-5" />
                    </div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded-md border border-cyan-500/30">
                      {feat.badge}
                    </span>
                  </div>

                  <h3 className="mt-5 text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {feat.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-400">
                    {feat.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3.5 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-500 text-[11px]">Advantage:</span>
                  <span className="font-bold text-cyan-300 bg-cyan-950/80 px-2 py-0.5 rounded-md border border-cyan-500/30 text-[10px]">
                    {feat.stat}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
