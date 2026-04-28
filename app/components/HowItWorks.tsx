"use client";

import { motion } from "framer-motion";
import {
  Bot,
  CheckCircle2,
  ClipboardList,
  MessageSquareReply,
  Radar,
  Rocket,
  ShieldCheck,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Connect Review Sources",
    desc: "Connect Google, Facebook, Yelp, Trustpilot, or manually import customer reviews into ReviewPilot.",
    icon: ClipboardList,
  },
  {
    number: "02",
    title: "AI Analyzes Sentiment",
    desc: "ReviewPilot detects customer mood, reputation risk, keywords, rating trends, and urgent issues.",
    icon: Bot,
  },
  {
    number: "03",
    title: "Generate Smart Replies",
    desc: "Create professional, polite, brand-safe replies for positive, neutral, and negative reviews in seconds.",
    icon: MessageSquareReply,
  },
  {
    number: "04",
    title: "Track Growth & Improve",
    desc: "Monitor reputation score, review volume, response speed, and customer satisfaction trends from one dashboard.",
    icon: Rocket,
  },
];

export default function HowItWorks() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-600/10 blur-[140px]" />
        <div className="absolute bottom-20 right-0 h-72 w-72 rounded-full bg-cyan-400/10 blur-[120px]" />
      </div>

      <div className="container-custom relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/10 px-4 py-2 text-sm font-bold text-cyan-300"
          >
            <Radar size={17} />
            Simple Workflow
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-black tracking-tight text-white md:text-6xl"
          >
            Reputation management made{" "}
            <span className="gradient-text">simple & scalable</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="mt-6 text-lg leading-8 text-slate-300"
          >
            ReviewPilot turns customer feedback into a clear workflow: collect,
            analyze, respond, and improve your reputation.
          </motion.p>
        </div>

        <div className="relative mt-16">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent lg:block" />

          <div className="space-y-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isRight = index % 2 !== 0;

              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  className={`relative grid gap-6 lg:grid-cols-2 ${
                    isRight ? "lg:[&>div:first-child]:col-start-2" : ""
                  }`}
                >
                  <div
                    className={`glass-card group relative overflow-hidden rounded-[32px] p-6 md:p-8 ${
                      isRight ? "lg:ml-10" : "lg:mr-10"
                    }`}
                  >
                    <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl transition group-hover:bg-cyan-400/20" />

                    <div className="relative z-10">
                      <div className="mb-6 flex items-center justify-between gap-4">
                        <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600/20 text-cyan-300">
                          <Icon size={26} />
                        </span>

                        <span className="text-5xl font-black text-white/10">
                          {step.number}
                        </span>
                      </div>

                      <h3 className="text-2xl font-black text-white">
                        {step.title}
                      </h3>

                      <p className="mt-4 text-sm leading-7 text-slate-400">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  <div className="absolute left-1/2 top-10 hidden h-5 w-5 -translate-x-1/2 rounded-full border border-cyan-300 bg-[#020617] shadow-[0_0_30px_rgba(56,189,248,0.7)] lg:block" />
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 rounded-[36px] border border-cyan-400/20 bg-cyan-400/10 p-6 md:p-8"
        >
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <span className="mb-5 inline-flex rounded-full border border-yellow-400/25 bg-yellow-400/10 px-4 py-2 text-sm font-bold text-yellow-300">
                Automation Advantage
              </span>

              <h3 className="text-3xl font-black tracking-tight text-white md:text-5xl">
                Reply faster, protect trust, and grow ratings.
              </h3>

              <p className="mt-5 text-base leading-8 text-slate-300">
                A strong reputation system helps businesses save time, reduce
                negative impact, and turn customer feedback into growth.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Instant sentiment detection",
                "Brand-safe AI responses",
                "Negative review alerts",
                "Monthly reputation insights",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#020617]/60 px-5 py-4 text-sm font-bold text-slate-200"
                >
                  <CheckCircle2 className="shrink-0 text-cyan-300" size={20} />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}