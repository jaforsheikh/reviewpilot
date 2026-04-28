"use client";

import { motion } from "framer-motion";
import { Building2, Hospital, Hotel, ShoppingBag, Store, Utensils } from "lucide-react";

const brands = [
  { name: "Local Shops", icon: Store },
  { name: "Restaurants", icon: Utensils },
  { name: "Hotels", icon: Hotel },
  { name: "Clinics", icon: Hospital },
  { name: "eCommerce", icon: ShoppingBag },
  { name: "Agencies", icon: Building2 },
];

export default function TrustedBy() {
  return (
    <section className="relative border-y border-white/10 bg-white/[0.02] py-10">
      <div className="container-custom">
        <p className="mb-7 text-center text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
          Built for reputation-driven businesses
        </p>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
          {brands.map((brand, index) => {
            const Icon = brand.icon;

            return (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="group flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-4 text-slate-300 transition hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-white"
              >
                <Icon size={19} className="text-cyan-300" />
                <span className="text-sm font-bold">{brand.name}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}