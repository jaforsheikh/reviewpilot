"use client";

import { motion } from "framer-motion";
import { Quote, Star, UsersRound } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Restaurant Owner",
    text: "ReviewPilot helped us respond to reviews faster and improve customer trust. The AI replies feel professional and natural.",
  },
  {
    name: "Michael Carter",
    role: "Local SEO Agency Founder",
    text: "This is exactly the kind of tool agencies need. The dashboard, alerts, and AI response workflow are super useful for clients.",
  },
  {
    name: "Nadia Rahman",
    role: "eCommerce Brand Manager",
    text: "We finally understand customer sentiment clearly. The reputation score and review inbox make everything easier to manage.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="container-custom relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/10 px-4 py-2 text-sm font-bold text-cyan-300"
          >
            <UsersRound size={17} />
            Customer Stories
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-black tracking-tight text-white md:text-6xl"
          >
            Built for businesses that care about{" "}
            <span className="gradient-text">customer trust</span>
          </motion.h2>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="glass-card rounded-[32px] p-7"
            >
              <Quote className="mb-6 text-cyan-300" size={34} />

              <div className="mb-5 flex gap-1 text-yellow-300">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>

              <p className="text-sm leading-7 text-slate-300">“{item.text}”</p>

              <div className="mt-7 border-t border-white/10 pt-5">
                <h3 className="font-black text-white">{item.name}</h3>
                <p className="mt-1 text-sm text-slate-400">{item.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}