"use client";

import { useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";
import { gymConfig, type GymConfig } from "@/config/gym";
import { SectionHeading } from "@/components/public/public-ui";

export function FaqSection({
  config = gymConfig,
}: {
  config?: GymConfig;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative bg-[#090b11] py-20 px-4 sm:px-6 lg:px-8 border-b border-white/[0.08] text-white font-sans overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[radial-gradient(ellipse_at_center,rgba(239,68,68,0.06),transparent_70%)] pointer-events-none blur-3xl" />

      <div className="relative mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Got Questions?"
          title="Frequently Asked Questions."
          text={`Everything you need to know about starting your fitness journey at ${config.name}.`}
          centered
        />

        <div className="mt-12 space-y-3">
          {config.faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-2xl border transition-all duration-200 ${
                  isOpen
                    ? "border-red-500/40 bg-slate-900/90 shadow-xl shadow-red-500/5"
                    : "border-white/[0.08] bg-slate-900/50 hover:border-slate-700 hover:bg-slate-900/70"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="flex w-full items-center justify-between p-5 sm:p-6 text-left transition"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-bold text-white sm:text-lg pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`flex size-8 shrink-0 items-center justify-center rounded-xl border transition-transform duration-200 ${
                      isOpen
                        ? "rotate-180 border-red-500/40 bg-red-950/60 text-red-400"
                        : "border-slate-800 bg-slate-800 text-slate-400"
                    }`}
                  >
                    <ChevronDown className="size-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="border-t border-slate-800/80 px-5 pb-6 pt-3 sm:px-6 text-xs sm:text-sm leading-relaxed text-slate-300">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* WhatsApp assistance note */}
        <div className="mt-10 rounded-2xl border border-white/[0.08] bg-slate-900/60 p-6 text-center backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <p className="text-sm font-bold text-white">
              Have a question that isn&apos;t covered here?
            </p>
            <p className="text-xs text-slate-400">
              Our front-desk team replies on WhatsApp within 10 minutes during facility hours.
            </p>
          </div>
          <a
            href={`https://wa.me/${config.contact.whatsappRaw}?text=${encodeURIComponent(
              `Hi ${config.name}! I have a question about your facility and memberships.`
            )}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 px-5 py-2.5 font-bold text-xs uppercase tracking-wider text-white shadow-md shadow-emerald-600/20 transition-all shrink-0"
          >
            <MessageCircle className="size-4 fill-current" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
