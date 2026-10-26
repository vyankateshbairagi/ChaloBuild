"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, MessageCircle, Sparkles } from "lucide-react";

export function ChaloBuildFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "How does the 'One-Time Turnkey Build' work?",
      a: "Unlike typical software platforms that charge ₹2,000 to ₹5,000 every single month forever, ChaloBuild is a turnkey software build studio. You pay a single fixed fee upfront. Our engineers design, build, and configure your gym's custom website and staff operations console. Once delivered in 48 hours, you own 100% of your code and database with zero recurring software fees.",
    },
    {
      q: "How fast can our gym website and software go live?",
      a: "Within 48 hours! Once you contact us and send your gym name, logo, membership tiers, facility photos, and trainer credentials via WhatsApp or email, our engineering team sets up your live website, configures your database, and hands over your login credentials.",
    },
    {
      q: "Can we connect our own custom domain like www.mygym.in or .com?",
      a: "Yes, absolutely! On all our turnkey packages, we configure and connect your dedicated custom domain (e.g. www.yourgymname.com or .in) with free automatic SSL certification at zero technical charge.",
    },
    {
      q: "Can I import our existing member records from Excel or paper registers?",
      a: "Yes. Simply share your existing Excel or Google Sheets roster with us during onboarding. Our team will cleanly migrate all member names, phone numbers, active plans, and joining dates directly into your ChaloBuild database so you don't start from scratch.",
    },
    {
      q: "Do you take any percentage or commission on our gym memberships?",
      a: "Zero percent (0%). Aggregator fitness apps often take 15% to 25% of your hard-earned revenue. ChaloBuild takes zero commission. Every rupee paid by your gym members goes 100% directly into your own bank account, UPI QR code, or front-desk cash drawer.",
    },
    {
      q: "Does the system work smoothly on mobile phones and tablets?",
      a: "Yes! Both the public gym website and the GymFlow front-desk console are fully responsive. Your trainers and front desk receptionists can mark attendance, look up member records, and record payments on any smartphone, iPad, tablet, or desktop computer.",
    },
    {
      q: "What kind of ongoing support do we get after the launch?",
      a: "ChaloBuild provides direct WhatsApp and phone support from our dedicated engineers (+91 90750 97235). We include complete staff onboarding, a video tutorial walkthrough, and lifetime warranty against software defects.",
    },
  ];

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#080a10] border-b border-white/[0.08] overflow-hidden text-white font-sans">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[radial-gradient(ellipse_at_center,rgba(0,245,255,0.06),transparent_70%)] pointer-events-none blur-3xl" />

      <div className="relative mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/60 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-cyan-300 shadow-[0_0_12px_rgba(0,245,255,0.15)]">
            <HelpCircle className="size-3 text-cyan-400" />
            <span>FREQUENT QUESTIONS</span>
          </div>
          <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
            Everything You Need To Know.
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed">
            Have questions about how a one-time turnkey build works compared to SaaS subscriptions? Here are honest answers.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="mt-10 space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.q}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "border-cyan-500/40 bg-slate-900/90 shadow-xl shadow-cyan-500/5"
                    : "border-white/[0.08] bg-slate-900/40 hover:border-slate-700 hover:bg-slate-900/60"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="flex w-full items-center justify-between p-4 sm:p-5 text-left transition-colors"
                >
                  <span className="text-sm sm:text-base font-bold text-white pr-4 leading-snug">
                    {faq.q}
                  </span>
                  <div
                    className={`flex size-8 shrink-0 items-center justify-center rounded-xl border transition-transform duration-200 ${
                      isOpen
                        ? "rotate-180 border-cyan-500/40 bg-cyan-950/60 text-cyan-400"
                        : "border-slate-800 bg-slate-800/60 text-slate-400"
                    }`}
                  >
                    <ChevronDown className="size-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-3">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct WhatsApp Contact Callout */}
        <div className="mt-10 p-5 rounded-2xl border border-white/[0.08] bg-slate-900/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 shrink-0">
              <MessageCircle className="size-5 fill-current" />
            </div>
            <div>
              <p className="text-sm font-bold text-white">Have a custom question about your gym?</p>
              <p className="text-xs text-slate-400">Our engineers reply directly on WhatsApp in under 15 minutes.</p>
            </div>
          </div>

          <a
            href="https://wa.me/919075097235?text=Hi%20ChaloBuild!%20I%20have%20a%20question%20about%20building%20software%20for%20my%20gym."
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 px-5 py-2.5 text-xs font-bold text-white shadow-md shadow-emerald-500/20 transition-all shrink-0"
          >
            <MessageCircle className="size-4 fill-current" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
