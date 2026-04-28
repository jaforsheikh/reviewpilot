"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "What is ReviewPilot?",
    a: "ReviewPilot is an AI-powered reputation management SaaS that helps businesses analyze customer reviews, generate professional replies, and track reputation growth.",
  },
  {
    q: "Can ReviewPilot generate replies automatically?",
    a: "Yes. ReviewPilot can generate polite, brand-safe AI replies for positive, neutral, and negative reviews.",
  },
  {
    q: "Is this project connected with real AI now?",
    a: "Currently this version uses frontend demo logic. Later we can connect OpenAI API to make the analyzer and reply generator fully dynamic.",
  },
  {
    q: "Can agencies use this for clients?",
    a: "Yes. The product direction is agency-ready with dashboard, client monitoring, competitor comparison, and white-label reporting ideas.",
  },
  {
    q: "Is the website responsive?",
    a: "Yes. Every section is designed for desktop, tablet, and mobile screens using Tailwind CSS responsive classes.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState(0);

  return (
    <section id="faq" className="relative overflow-hidden py-24">
      <div className="container-custom">
        <div className="mx-auto max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-yellow-400/25 bg-yellow-400/10 px-4 py-2 text-sm font-bold text-yellow-300"
          >
            <HelpCircle size={17} />
            FAQ
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-black tracking-tight text-white md:text-6xl"
          >
            Questions before trying{" "}
            <span className="gradient-text">ReviewPilot?</span>
          </motion.h2>
        </div>

        <div className="mx-auto mt-14 max-w-4xl space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = active === index;

            return (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035]"
              >
                <button
                  onClick={() => setActive(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left"
                >
                  <span className="text-base font-black text-white md:text-lg">
                    {faq.q}
                  </span>

                  <ChevronDown
                    className={`shrink-0 text-cyan-300 transition ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="border-t border-white/10 px-6 pb-6 pt-4">
                    <p className="text-sm leading-7 text-slate-300">
                      {faq.a}
                    </p>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}