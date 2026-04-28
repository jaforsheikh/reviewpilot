"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  MessageSquareReply,
  ShieldAlert,
  Sparkles,
  Star,
  TrendingUp,
} from "lucide-react";

const stats = [
  {
    value: "98%",
    label: "AI Reply Accuracy",
  },
  {
    value: "4.9★",
    label: "Average Rating Growth",
  },
  {
    value: "24/7",
    label: "Review Monitoring",
  },
];

const reviewCards = [
  {
    name: "Sarah M.",
    rating: "2.0",
    text: "The service was delayed and nobody responded to my message.",
    status: "Negative Review Detected",
    icon: ShieldAlert,
  },
  {
    name: "ReviewPilot AI",
    rating: "AI",
    text: "We’re sorry for the delay, Sarah. Our team is reviewing this and will contact you shortly.",
    status: "AI Reply Generated",
    icon: MessageSquareReply,
  },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-28">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] top-24 h-72 w-72 rounded-full bg-blue-600/30 blur-[120px]" />
        <div className="absolute right-[-10%] top-40 h-80 w-80 rounded-full bg-cyan-400/20 blur-[130px]" />
        <div className="absolute bottom-[-10%] left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-yellow-400/10 blur-[120px]" />
      </div>

      <div className="container-custom relative z-10 grid min-h-[calc(100vh-112px)] items-center gap-14 py-16 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Left Content */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300"
          >
            <Sparkles size={16} />
            AI Reputation Management SaaS
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1 }}
            className="max-w-4xl text-5xl font-black leading-[1.06] tracking-tight text-white md:text-7xl"
          >
            Turn Customer Reviews Into{" "}
            <span className="gradient-text">Business Growth</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.2 }}
            className="mt-6 max-w-2xl text-lg leading-8 text-slate-300"
          >
            ReviewPilot helps businesses analyze reviews, detect negative
            feedback, generate AI-powered replies, and track reputation score
            from one premium dashboard.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.3 }}
            className="mt-9 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#analyzer"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-sm font-bold text-white shadow-xl shadow-blue-600/30 transition hover:bg-blue-500"
            >
              Try AI Analyzer
              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </a>

            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-8 py-4 text-sm font-bold text-white transition hover:border-cyan-400 hover:text-cyan-300"
            >
              Explore Features
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center gap-4 text-sm text-slate-300"
          >
            {["No credit card required", "AI-powered replies", "Built for agencies"].map(
              (item) => (
                <span key={item} className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-cyan-300" />
                  {item}
                </span>
              )
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.5 }}
            className="mt-12 grid gap-4 sm:grid-cols-3"
          >
            {stats.map((item) => (
              <div key={item.label} className="glass-card rounded-2xl p-5">
                <h3 className="text-3xl font-black text-white">
                  {item.value}
                </h3>
                <p className="mt-1 text-sm text-slate-400">{item.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.25 }}
          className="relative"
        >
          <div className="absolute -inset-4 rounded-[36px] bg-gradient-to-r from-blue-600/30 via-cyan-400/20 to-yellow-400/10 blur-2xl" />

          <div className="glass-card relative overflow-hidden rounded-[32px] p-5">
            {/* Top Bar */}
            <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <p className="text-sm text-slate-400">Live Reputation Score</p>
                <h3 className="mt-1 text-2xl font-black text-white">
                  Dashboard Preview
                </h3>
              </div>

              <div className="flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/10 px-3 py-2 text-xs font-bold text-cyan-300">
                <span className="h-2 w-2 rounded-full bg-cyan-300" />
                Live AI
              </div>
            </div>

            {/* Score */}
            <div className="grid gap-4 sm:grid-cols-[0.8fr_1.2fr]">
              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                <div className="flex items-center justify-between">
                  <Star className="text-yellow-400" />
                  <span className="rounded-full bg-green-400/10 px-3 py-1 text-xs font-bold text-green-300">
                    +18%
                  </span>
                </div>

                <h4 className="mt-6 text-5xl font-black text-white">4.8</h4>
                <p className="mt-2 text-sm text-slate-400">
                  Brand reputation rating
                </p>

                <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "86%" }}
                    transition={{ duration: 1.2, delay: 0.8 }}
                    className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-300"
                  />
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-400">Sentiment Analysis</p>
                    <h4 className="text-xl font-black text-white">
                      This Month
                    </h4>
                  </div>
                  <TrendingUp className="text-cyan-300" />
                </div>

                <div className="space-y-4">
                  {[
                    ["Positive", "72%", "w-[72%]", "bg-cyan-300"],
                    ["Neutral", "18%", "w-[18%]", "bg-blue-500"],
                    ["Negative", "10%", "w-[10%]", "bg-yellow-400"],
                  ].map(([label, value, width, color]) => (
                    <div key={label}>
                      <div className="mb-2 flex justify-between text-sm">
                        <span className="text-slate-300">{label}</span>
                        <span className="font-bold text-white">{value}</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-white/10">
                        <div className={`h-full rounded-full ${width} ${color}`} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* AI Cards */}
            <div className="mt-4 grid gap-4">
              {reviewCards.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.status}
                    initial={{ opacity: 0, x: index === 0 ? -24 : 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.75 + index * 0.15 }}
                    className="rounded-3xl border border-white/10 bg-white/[0.04] p-5"
                  >
                    <div className="mb-3 flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-600/20 text-cyan-300">
                          <Icon size={20} />
                        </span>
                        <div>
                          <h5 className="font-bold text-white">{item.name}</h5>
                          <p className="text-xs text-slate-400">
                            {item.status}
                          </p>
                        </div>
                      </div>

                      <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-bold text-white">
                        {item.rating}
                      </span>
                    </div>

                    <p className="text-sm leading-6 text-slate-300">
                      “{item.text}”
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 1 }}
              className="absolute bottom-6 right-6 hidden rounded-2xl border border-cyan-400/20 bg-[#020617]/90 p-4 shadow-2xl shadow-cyan-400/10 backdrop-blur-xl md:block"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                  <Bot />
                </span>
                <div>
                  <p className="text-xs text-slate-400">AI Assistant</p>
                  <p className="text-sm font-black text-white">
                    Reply ready in 3s
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}