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
    },
    {
      icon: CalendarCheck,
      badge: "FRONT DESK",
      title: "Instant Attendance Check-Ins",
      desc: "Search by phone number or unique member code to mark daily attendance with real-time logs and duplicate-check protection.",
      stat: "Under 2s per check-in",
    },
    {
      icon: CreditCard,
      badge: "FINANCE & UPI",
      title: "Payment & Digital Receipts",
      desc: "Log UPI QR transfers, cash payments, cards, and bank settlements with automated sequential receipt numbers.",
      stat: "100% auditable ledger",
    },
    {
      icon: Clock,
      badge: "RETENTION",
      title: "Expiry & Renewal Warning Hub",
      desc: "Filter members expiring in the next 7 to 30 days. Send fast WhatsApp renewal reminders to protect recurring gym cash flow.",
      stat: "+22% renewals saved",
    },
    {
      icon: MessageCircle,
      badge: "LEAD CAPTURE",
      title: "WhatsApp 1-Day Trial Passes",
      desc: "Visitors on your public website tap one button to request a trial day-pass, delivering their name and phone straight to your inbox.",
      stat: "High-intent walk-ins",
    },
    {
      icon: ShieldCheck,
      badge: "SECURITY",
      title: "Role-Based Staff Access & Security",
      desc: "Equip front desk trainers with operational check-in powers while protecting financial collections and owner reports.",
      stat: "PostgreSQL isolated",
    },
  ];

  return (
    <section id="features" className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-cyan-200 bg-cyan-50/80 px-3 py-0.5 text-[10px] font-bold uppercase tracking-widest text-cyan-800 shadow-2xs">
            <Zap className="size-3 text-cyan-600" />
            <span>BUILT FOR DAILY GYM REALITIES</span>
          </div>
          <h2 className="mt-2.5 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900">
            Engineered to Run and Scale Any Fitness Facility.
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
            Every feature was designed in collaboration with active gym owners across India to save hours of manual labor every week.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feat) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.title}
                className="group relative rounded-2xl border border-slate-200 bg-slate-50/60 p-5 sm:p-6 flex flex-col justify-between hover:border-cyan-400 hover:bg-white hover:shadow-lg hover:shadow-cyan-500/10 hover:-translate-y-0.5 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex size-10 items-center justify-center rounded-xl bg-cyan-50 border border-cyan-200 text-cyan-600 shadow-2xs group-hover:bg-gradient-to-br group-hover:from-cyan-500 group-hover:to-blue-600 group-hover:text-white group-hover:border-transparent transition-all duration-300">
                      <Icon className="size-5" />
                    </div>
                    <span className="text-[9px] font-extrabold uppercase tracking-widest text-cyan-700 bg-cyan-100/60 px-2 py-0.5 rounded-full border border-cyan-200">
                      {feat.badge}
                    </span>
                  </div>

                  <h3 className="mt-4 text-base font-bold text-slate-900 group-hover:text-cyan-700 transition-colors">
                    {feat.title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
                    {feat.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-400 text-[11px]">Impact:</span>
                  <span className="font-bold text-cyan-700 bg-cyan-50 px-2 py-0.5 rounded-md border border-cyan-100 text-[10px]">
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
