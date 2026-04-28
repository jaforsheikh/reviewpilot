"use client";

import { motion } from "framer-motion";
import {
  AlertTriangle,
  Clock,
  MessageCircleWarning,
  SearchX,
  TrendingDown,
  UsersRound,
} from "lucide-react";

const problems = [
  {
    title: "Negative reviews damage trust fast",
    desc: "One bad review can reduce buyer confidence and affect new leads before they even contact you.",
    icon: AlertTriangle,
  },
  {
    title: "Slow replies lose customers",
    desc: "Customers expect fast responses. Delayed replies make your brand look inactive or careless.",
    icon: Clock,
  },
  {
    title: "Manual monitoring wastes time",
    desc: "Checking multiple review platforms manually is slow, repetitive, and easy to forget.",
    icon: SearchX,
  },
  {
    title: "No clear reputation insight",
    desc: "Without a dashboard, it is hard to understand rating trends, sentiment, and customer pain points.",
    icon: TrendingDown,
  },
];

export default function ProblemSection() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute right-0 bottom-10 h-72 w-72 rounded-full bg-cyan-400/10 blur-[120px]" />
      </div>

      <div className="container-custom relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-5 inline-flex rounded-full border border-yellow-400/25 bg-yellow-400/10 px-4 py-2 text-sm font-bold text-yellow-300"
          >
            The Problem
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="text-4xl font-black tracking-tight text-white md:text-6xl"
          >
            Your online reputation is your{" "}
            <span className="gradient-text">first impression</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16 }}
            className="mt-6 text-lg leading-8 text-slate-300"
          >
            Businesses lose customers every day because they do not respond to
            reviews, track sentiment, or manage negative feedback properly.
          </motion.p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {problems.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="group glass-card relative overflow-hidden rounded-3xl p-6 transition hover:-translate-y-2 hover:border-cyan-400/35"
              >
                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-blue-600/10 blur-2xl transition group-hover:bg-cyan-400/15" />

                <div className="relative z-10">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-cyan-300">
                    <Icon size={25} />
                  </div>

                  <h3 className="text-xl font-black text-white">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-400">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid gap-5 lg:grid-cols-2"
        >
          <div className="glass-card rounded-[32px] p-7 md:p-8">
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-500/10 text-red-300">
                <MessageCircleWarning />
              </span>
              <div>
                <h3 className="text-2xl font-black text-white">
                  Without ReviewPilot
                </h3>
                <p className="text-sm text-slate-400">Manual, slow, risky</p>
              </div>
            </div>

            <div className="space-y-4">
              {[
                "Reviews checked manually",
                "Generic or late replies",
                "No sentiment tracking",
                "Negative feedback gets missed",
              ].map((text) => (
                <div
                  key={text}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm font-semibold text-slate-300"
                >
                  ❌ {text}
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card rounded-[32px] border-cyan-400/25 p-7 md:p-8">
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                <UsersRound />
              </span>
              <div>
                <h3 className="text-2xl font-black text-white">
                  With ReviewPilot
                </h3>
                <p className="text-sm text-slate-400">AI-powered, fast, scalable</p>
              </div>
            </div>

            <div className="space-y-4">
              {[
                "AI detects sentiment instantly",
                "Professional replies generated in seconds",
                "Reputation score tracked visually",
                "Negative reviews trigger alerts",
              ].map((text) => (
                <div
                  key={text}
                  className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-5 py-4 text-sm font-semibold text-cyan-100"
                >
                  ✅ {text}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}