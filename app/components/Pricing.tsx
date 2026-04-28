"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Crown, Rocket, ShieldCheck, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$19",
    desc: "Perfect for small local businesses starting reputation management.",
    icon: Rocket,
    badge: "Basic",
    features: [
      "100 reviews/month",
      "AI sentiment analysis",
      "AI reply generator",
      "Basic reputation score",
      "Email support",
    ],
    highlighted: false,
  },
  {
    name: "Growth",
    price: "$49",
    desc: "Best for growing businesses and agencies managing client reviews.",
    icon: Crown,
    badge: "Most Popular",
    features: [
      "1,000 reviews/month",
      "Advanced AI reply styles",
      "Negative review alerts",
      "Competitor comparison",
      "Analytics dashboard",
      "Priority support",
    ],
    highlighted: true,
  },
  {
    name: "Agency",
    price: "$99",
    desc: "Built for agencies managing multiple businesses and clients.",
    icon: ShieldCheck,
    badge: "Scale",
    features: [
      "Unlimited reviews",
      "Multi-client dashboard",
      "Team member access",
      "White-label reports",
      "Custom AI tone",
      "Dedicated support",
    ],
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-600/10 blur-[140px]" />
        <div className="absolute bottom-20 right-[-10%] h-80 w-80 rounded-full bg-cyan-400/10 blur-[130px]" />
      </div>

      <div className="container-custom relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-yellow-400/25 bg-yellow-400/10 px-4 py-2 text-sm font-bold text-yellow-300"
          >
            <Sparkles size={17} />
            Simple Pricing
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-black tracking-tight text-white md:text-6xl"
          >
            Choose a plan that fits your{" "}
            <span className="gradient-text">reputation growth</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="mt-6 text-lg leading-8 text-slate-300"
          >
            Start small, automate your review workflow, and scale reputation
            management as your business grows.
          </motion.p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {plans.map((plan, index) => {
            const Icon = plan.icon;

            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                whileHover={{ y: -10 }}
                className={`relative overflow-hidden rounded-[34px] p-[1px] ${
                  plan.highlighted
                    ? "bg-gradient-to-b from-cyan-400/70 via-blue-600/45 to-yellow-400/25"
                    : "bg-white/10"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -inset-2 rounded-[36px] bg-cyan-400/10 blur-2xl" />
                )}

                <div className="relative h-full rounded-[33px] bg-[#020617]/95 p-7 md:p-8">
                  <div className="mb-8 flex items-center justify-between gap-4">
                    <span
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl ${
                        plan.highlighted
                          ? "bg-cyan-400/15 text-cyan-300"
                          : "bg-blue-600/15 text-blue-300"
                      }`}
                    >
                      <Icon size={26} />
                    </span>

                    <span
                      className={`rounded-full border px-4 py-2 text-xs font-black ${
                        plan.highlighted
                          ? "border-cyan-400/30 bg-cyan-400/10 text-cyan-300"
                          : "border-white/10 bg-white/[0.04] text-slate-300"
                      }`}
                    >
                      {plan.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-white">{plan.name}</h3>

                  <p className="mt-3 min-h-[56px] text-sm leading-7 text-slate-400">
                    {plan.desc}
                  </p>

                  <div className="mt-7 flex items-end gap-2">
                    <span className="text-5xl font-black text-white">
                      {plan.price}
                    </span>
                    <span className="pb-2 text-sm font-bold text-slate-400">
                      /month
                    </span>
                  </div>

                  <a
                    href="#analyzer"
                    className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-6 py-4 text-sm font-black transition ${
                      plan.highlighted
                        ? "bg-blue-600 text-white shadow-xl shadow-blue-600/30 hover:bg-blue-500"
                        : "border border-white/10 text-white hover:border-cyan-400/40 hover:text-cyan-300"
                    }`}
                  >
                    Get Started
                  </a>

                  <div className="my-8 h-px bg-white/10" />

                  <div className="space-y-4">
                    {plan.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-start gap-3 text-sm font-semibold text-slate-300"
                      >
                        <CheckCircle2
                          size={19}
                          className="mt-0.5 shrink-0 text-cyan-300"
                        />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-12 max-w-3xl rounded-3xl border border-white/10 bg-white/[0.035] p-6 text-center"
        >
          <p className="text-sm leading-7 text-slate-300">
            Need a custom plan for agency clients, white-label reporting, or
            enterprise review volume?{" "}
            <a href="#footer" className="font-bold text-cyan-300 hover:text-white">
              Contact our team
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}