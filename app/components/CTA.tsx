"use client";

import { motion } from "framer-motion";
import { ArrowRight, Bot, ShieldCheck, Sparkles } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[40px] border border-cyan-400/20 bg-cyan-400/10 p-8 text-center md:p-14"
        >
          <div className="absolute left-[-10%] top-[-20%] h-80 w-80 rounded-full bg-blue-600/25 blur-[120px]" />
          <div className="absolute right-[-10%] bottom-[-20%] h-80 w-80 rounded-full bg-cyan-400/20 blur-[120px]" />

          <div className="relative z-10 mx-auto max-w-3xl">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-yellow-400/25 bg-yellow-400/10 px-4 py-2 text-sm font-bold text-yellow-300">
              <Sparkles size={17} />
              Start Growing Trust
            </span>

            <h2 className="text-4xl font-black tracking-tight text-white md:text-6xl">
              Ready to turn reviews into{" "}
              <span className="gradient-text">business growth?</span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Analyze customer feedback, generate professional AI replies, and
              protect your brand reputation from one smart dashboard.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="#analyzer"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-sm font-black text-white shadow-xl shadow-blue-600/30 transition hover:bg-blue-500"
              >
                Try AI Analyzer
                <ArrowRight size={18} className="transition group-hover:translate-x-1" />
              </a>

              <a
                href="#pricing"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-8 py-4 text-sm font-black text-white transition hover:border-cyan-400/40 hover:text-cyan-300"
              >
                View Pricing
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-[#020617]/50 p-4">
                <Bot className="mx-auto mb-3 text-cyan-300" />
                <p className="text-sm font-bold text-slate-200">
                  AI-powered reply generation
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#020617]/50 p-4">
                <ShieldCheck className="mx-auto mb-3 text-cyan-300" />
                <p className="text-sm font-bold text-slate-200">
                  Reputation protection workflow
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}