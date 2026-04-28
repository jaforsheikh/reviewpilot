"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BellRing,
  ChartNoAxesCombined,
  MessageSquareText,
  Star,
  TrendingUp,
  Users,
} from "lucide-react";

const metrics = [
  {
    label: "Average Rating",
    value: "4.8",
    change: "+12.4%",
    icon: Star,
  },
  {
    label: "Total Reviews",
    value: "12.4K",
    change: "+28.6%",
    icon: MessageSquareText,
  },
  {
    label: "Reputation Score",
    value: "91%",
    change: "+18.2%",
    icon: ChartNoAxesCombined,
  },
  {
    label: "New Customers",
    value: "2.8K",
    change: "+9.7%",
    icon: Users,
  },
];

const reviews = [
  {
    name: "Michael Carter",
    text: "Amazing support and very fast response. Highly recommended!",
    type: "Positive",
    rating: "5.0",
  },
  {
    name: "Nadia Rahman",
    text: "Good service overall, but delivery time can be improved.",
    type: "Neutral",
    rating: "4.0",
  },
  {
    name: "James Wilson",
    text: "I waited too long for a reply. This needs improvement.",
    type: "Negative",
    rating: "2.0",
  },
];

const bars = [
  { label: "Positive", value: "78%", width: "w-[78%]" },
  { label: "Neutral", value: "16%", width: "w-[16%]" },
  { label: "Negative", value: "6%", width: "w-[6%]" },
];

export default function DashboardPreview() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] top-20 h-96 w-96 rounded-full bg-blue-600/10 blur-[140px]" />
        <div className="absolute right-[-10%] bottom-20 h-96 w-96 rounded-full bg-cyan-400/10 blur-[140px]" />
      </div>

      <div className="container-custom relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-400/25 bg-blue-400/10 px-4 py-2 text-sm font-bold text-blue-300"
          >
            <TrendingUp size={17} />
            Analytics Dashboard
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-black tracking-tight text-white md:text-6xl"
          >
            Track your reputation from one{" "}
            <span className="gradient-text">smart dashboard</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="mt-6 text-lg leading-8 text-slate-300"
          >
            See ratings, review trends, sentiment breakdown, negative alerts,
            and customer feedback insights in one clean SaaS dashboard.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 35, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.75 }}
          className="mt-16 overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.035] p-4 shadow-2xl shadow-black/40 md:p-6"
        >
          <div className="rounded-[28px] border border-white/10 bg-[#020617]/80 p-5 md:p-7">
            <div className="mb-7 flex flex-col justify-between gap-4 border-b border-white/10 pb-6 md:flex-row md:items-center">
              <div>
                <p className="text-sm font-bold text-cyan-300">
                  ReviewPilot Control Center
                </p>
                <h3 className="mt-2 text-3xl font-black text-white">
                  Business Reputation Overview
                </h3>
              </div>

              <div className="flex items-center gap-3 rounded-2xl border border-cyan-400/25 bg-cyan-400/10 px-4 py-3 text-sm font-bold text-cyan-300">
                <span className="h-2.5 w-2.5 rounded-full bg-cyan-300" />
                Live Monitoring
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {metrics.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.06 }}
                    className="rounded-3xl border border-white/10 bg-white/[0.04] p-5"
                  >
                    <div className="mb-6 flex items-center justify-between">
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600/20 text-cyan-300">
                        <Icon size={22} />
                      </span>

                      <span className="flex items-center gap-1 rounded-full bg-green-400/10 px-3 py-1 text-xs font-black text-green-300">
                        {item.change}
                        <ArrowUpRight size={13} />
                      </span>
                    </div>

                    <h4 className="text-3xl font-black text-white">
                      {item.value}
                    </h4>
                    <p className="mt-1 text-sm text-slate-400">{item.label}</p>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-5 grid gap-5 xl:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-[30px] border border-white/10 bg-white/[0.04] p-5 md:p-6">
                <div className="mb-7 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-400">Review Growth</p>
                    <h4 className="mt-1 text-2xl font-black text-white">
                      Monthly Performance
                    </h4>
                  </div>

                  <ChartNoAxesCombined className="text-cyan-300" />
                </div>

                <div className="flex h-72 items-end gap-3">
                  {[45, 58, 42, 70, 64, 82, 76, 90, 86, 94, 88, 98].map(
                    (height, index) => (
                      <motion.div
                        key={index}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${height}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.8,
                          delay: index * 0.04,
                        }}
                        className="flex-1 rounded-t-2xl bg-gradient-to-t from-blue-600 to-cyan-300 shadow-lg shadow-cyan-400/10"
                      />
                    )
                  )}
                </div>

                <div className="mt-4 grid grid-cols-6 gap-2 text-center text-xs font-bold text-slate-500 md:grid-cols-12">
                  {[
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec",
                  ].map((month) => (
                    <span key={month}>{month}</span>
                  ))}
                </div>
              </div>

              <div className="grid gap-5">
                <div className="rounded-[30px] border border-white/10 bg-white/[0.04] p-5 md:p-6">
                  <div className="mb-6 flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-400">
                        Sentiment Breakdown
                      </p>
                      <h4 className="mt-1 text-2xl font-black text-white">
                        Customer Mood
                      </h4>
                    </div>

                    <BellRing className="text-yellow-300" />
                  </div>

                  <div className="space-y-5">
                    {bars.map((item, index) => (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.08 }}
                      >
                        <div className="mb-2 flex justify-between text-sm">
                          <span className="font-bold text-slate-300">
                            {item.label}
                          </span>
                          <span className="font-black text-white">
                            {item.value}
                          </span>
                        </div>

                        <div className="h-3 overflow-hidden rounded-full bg-white/10">
                          <div
                            className={`h-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-300 ${item.width}`}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[30px] border border-white/10 bg-white/[0.04] p-5 md:p-6">
                  <div className="mb-5">
                    <p className="text-sm text-slate-400">Latest Reviews</p>
                    <h4 className="mt-1 text-2xl font-black text-white">
                      Review Inbox
                    </h4>
                  </div>

                  <div className="space-y-3">
                    {reviews.map((review) => (
                      <div
                        key={review.name}
                        className="rounded-2xl border border-white/10 bg-[#020617]/70 p-4"
                      >
                        <div className="mb-2 flex items-center justify-between gap-3">
                          <h5 className="text-sm font-black text-white">
                            {review.name}
                          </h5>

                          <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-black text-cyan-300">
                            {review.rating}
                          </span>
                        </div>

                        <p className="text-xs leading-5 text-slate-400">
                          {review.text}
                        </p>

                        <p className="mt-2 text-xs font-black text-cyan-300">
                          {review.type}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}