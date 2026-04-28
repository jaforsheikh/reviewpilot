"use client";

import { motion } from "framer-motion";
import {
  BellRing,
  Bot,
  BrainCircuit,
  ChartNoAxesCombined,
  LineChart,
  MessageSquareText,
  SearchCheck,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    title: "AI Review Analyzer",
    desc: "Automatically detects positive, neutral, and negative review sentiment with smart AI scoring.",
    icon: BrainCircuit,
  },
  {
    title: "AI Reply Generator",
    desc: "Generate professional, brand-safe review replies in seconds for Google, Facebook, and more.",
    icon: Bot,
  },
  {
    title: "Negative Review Alerts",
    desc: "Get instant alerts when a customer leaves a risky review so your team can respond faster.",
    icon: BellRing,
  },
  {
    title: "Reputation Score",
    desc: "Track your overall brand reputation with clear score cards, trends, and monthly insights.",
    icon: ChartNoAxesCombined,
  },
  {
    title: "Competitor Monitoring",
    desc: "Compare your reviews, ratings, and sentiment trends against local competitors.",
    icon: SearchCheck,
  },
  {
    title: "Review Inbox",
    desc: "Manage all customer reviews from one clean inbox built for agencies and local businesses.",
    icon: MessageSquareText,
  },
  {
    title: "Analytics Dashboard",
    desc: "Visualize rating growth, response speed, review volume, and customer satisfaction trends.",
    icon: LineChart,
  },
  {
    title: "Brand-Safe Responses",
    desc: "Keep every AI reply polite, professional, and aligned with your business tone.",
    icon: ShieldCheck,
  },
];

export default function Features() {
  return (
    <section id="features" className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-600/10 blur-[140px]" />
      </div>

      <div className="container-custom relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-5 inline-flex rounded-full border border-cyan-400/25 bg-cyan-400/10 px-4 py-2 text-sm font-bold text-cyan-300"
          >
            Powerful Features
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="text-4xl font-black tracking-tight text-white md:text-6xl"
          >
            Everything you need to manage{" "}
            <span className="gradient-text">customer trust</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16 }}
            className="mt-6 text-lg leading-8 text-slate-300"
          >
            ReviewPilot combines AI automation, reputation analytics, and review
            management tools into one premium SaaS experience.
          </motion.p>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: index * 0.06 }}
                whileHover={{ y: -8 }}
                className="group glass-card relative min-h-[260px] overflow-hidden rounded-3xl p-6"
              >
                <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
                  <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-cyan-400/15 blur-3xl" />
                  <div className="absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-blue-600/15 blur-3xl" />
                </div>

                <div className="relative z-10">
                  <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 shadow-lg shadow-cyan-400/10">
                    <Icon size={26} />
                  </div>

                  <h3 className="text-xl font-black text-white">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-400">
                    {item.desc}
                  </p>

                  <div className="mt-7 h-px w-full bg-gradient-to-r from-cyan-400/50 via-white/10 to-transparent" />

                  <p className="mt-4 text-xs font-bold uppercase tracking-[0.2em] text-cyan-300/80">
                    AI Powered
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.035] p-6 md:p-8"
        >
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <span className="mb-5 inline-flex rounded-full border border-yellow-400/25 bg-yellow-400/10 px-4 py-2 text-sm font-bold text-yellow-300">
                Built for real businesses
              </span>

              <h3 className="text-3xl font-black tracking-tight text-white md:text-5xl">
                From review chaos to a clean AI-powered workflow.
              </h3>

              <p className="mt-5 text-base leading-8 text-slate-300">
                Instead of manually checking reviews, guessing customer mood,
                and writing replies from scratch, ReviewPilot gives your team a
                complete command center for reputation growth.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "Fast response workflow",
                  "Agency-ready dashboard",
                  "Clean analytics",
                  "Scalable SaaS structure",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-bold text-slate-200"
                  >
                    ✅ {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-[#020617]/70 p-5">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">Automation Flow</p>
                  <h4 className="text-2xl font-black text-white">
                    ReviewPilot Engine
                  </h4>
                </div>

                <span className="rounded-full bg-cyan-400/10 px-4 py-2 text-xs font-black text-cyan-300">
                  LIVE
                </span>
              </div>

              <div className="space-y-4">
                {[
                  ["01", "Collect reviews from platforms"],
                  ["02", "Analyze sentiment using AI"],
                  ["03", "Generate reply suggestions"],
                  ["04", "Track reputation growth"],
                ].map(([number, title], index) => (
                  <motion.div
                    key={title}
                    initial={{ opacity: 0, x: 22 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-blue-600/20 text-sm font-black text-cyan-300">
                      {number}
                    </span>
                    <p className="font-bold text-slate-200">{title}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}