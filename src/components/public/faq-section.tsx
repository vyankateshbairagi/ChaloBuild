"use client";

import { useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";
import { gymConfig } from "@/config/gym";
import { SectionHeading } from "@/components/public/public-ui";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative bg-[#09090b] py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Got Questions?"
          title="Frequently Asked Questions."
          text="Everything you need to know about starting your fitness journey at IronCore."
          centered
        />

        <div className="mt-12 space-y-3">
          {gymConfig.faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-white/10 bg-[#121216] transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="flex w-full items-center justify-between p-5 sm:p-6 text-left transition hover:bg-white/5"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-bold text-white sm:text-lg pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`flex size-8 shrink-0 items-center justify-center rounded-full bg-white/5 text-zinc-300 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-rose-500/20 text-rose-400" : ""
                    }`}
                  >
                    <ChevronDown className="size-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="border-t border-white/5 px-5 pb-6 pt-3 sm:px-6 text-sm leading-relaxed text-zinc-300">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* WhatsApp assistance note */}
        <div className="mt-10 rounded-2xl border border-white/10 bg-zinc-950/70 p-6 text-center">
          <p className="text-sm text-zinc-300">
            Have a question that isn&apos;t answered here?
          </p>
          <a
            href={`https://wa.me/${gymConfig.contact.whatsappRaw}?text=${encodeURIComponent(
              "Hi IronCore! I have a question about your memberships."
            )}`}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex items-center gap-2 font-bold text-xs uppercase tracking-wider text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            <MessageCircle className="size-4" />
            <span>Ask our team on WhatsApp →</span>
          </a>
        </div>
      </div>
    </section>
  );
}
