"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export function ChaloBuildFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "How fast can our gym website and software go live?",
      a: "Within 48 hours! Once you send us your gym name, logo, membership tiers, facility photos, and trainer details via WhatsApp or email, our engineering team sets up your website, configures your database, and hands over your login credentials.",
    },
    {
      q: "Can we connect our own custom domain like www.mygym.in or .com?",
      a: "Yes, absolutely! On our Growth and Multi-Branch plans, we assist you in linking your custom domain (.in, .com, .fitness) at zero extra technical fee, or we can provide you with your dedicated gym slug on chalobuild.in.",
    },
    {
      q: "Can I import our existing member records from Excel or paper registers?",
      a: "Yes. Simply share your Excel or Google Sheets file with us during onboarding, and our team will cleanly migrate all member profiles, joining dates, and plan details directly into your ChaloBuild database.",
    },
    {
      q: "Do you take any percentage or commission on our gym memberships?",
      a: "Zero percent (0%). Unlike marketplace aggregator apps that take 15% to 25% of your membership fees, ChaloBuild is pure software. Every rupee paid by your gym members goes 100% directly into your own bank account or UPI QR code.",
    },
    {
      q: "Does the system work easily on mobile phones and tablets?",
      a: "Yes! Both the public gym website and the GymFlow staff dashboard are fully responsive. Your front desk staff can mark attendance, log payments, and search member profiles smoothly on any smartphone, iPad, tablet, or desktop computer.",
    },
    {
      q: "Who is behind ChaloBuild and what kind of technical support do we receive?",
      a: "ChaloBuild is built and backed by ThinkBuild (www.thinkbuild.in), a premier software and technology company based in Nashik, Maharashtra. You receive direct phone and WhatsApp support from dedicated engineers.",
    },
  ];

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 border-b border-slate-200 overflow-hidden">
      <div className="mx-auto max-w-3xl">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-cyan-200 bg-cyan-100/70 px-3 py-0.5 text-[10px] font-bold uppercase tracking-widest text-cyan-800 shadow-2xs">
            <HelpCircle className="size-3 text-cyan-600" />
            <span>GOT QUESTIONS?</span>
          </div>
          <h2 className="mt-2.5 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900">
            Frequently Asked Questions.
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600">
            Everything you need to know about setting up your gym&apos;s digital platform.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="mt-8 space-y-2.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.q}
                className={`rounded-xl border transition-all duration-200 ${
                  isOpen
                    ? "border-cyan-300 bg-white shadow-sm ring-1 ring-cyan-100"
                    : "border-slate-200 bg-white hover:border-slate-300"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="flex w-full items-center justify-between p-4 sm:p-4.5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900 pr-3">
                    {faq.q}
                  </span>
                  <div
                    className={`flex size-6 shrink-0 items-center justify-center rounded-md transition-transform duration-200 ${
                      isOpen
                        ? "bg-cyan-50 text-cyan-600 rotate-180"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    <ChevronDown className="size-3.5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-4.5 pb-4 pt-0.5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
