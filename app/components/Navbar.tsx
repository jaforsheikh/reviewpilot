"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, Rocket, X } from "lucide-react";

const navItems = [
  { label: "Features", href: "#features" },
  { label: "Analyzer", href: "#analyzer" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#020617]/80 backdrop-blur-xl"
    >
      <nav className="container-custom flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600 blue-glow">
            <Rocket size={22} />
          </span>
          <span className="text-xl font-bold tracking-tight text-white">
            Review<span className="text-cyan-400">Pilot</span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-slate-300 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/login"
            className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-300"
          >
            Sign In
          </Link>

          <Link
            href="/register"
            className="rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition hover:bg-blue-500"
          >
            Sign Up
          </Link>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-white md:hidden"
          aria-label="Open menu"
        >
          <Menu />
        </button>
      </nav>

      {open && (
        <div className="fixed inset-0 z-[999] bg-[#020617] px-5 py-6 md:hidden">
          <div className="mb-8 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600">
                <Rocket size={22} />
              </span>
              <span className="text-xl font-bold text-white">
                Review<span className="text-cyan-400">Pilot</span>
              </span>
            </Link>

            <button
              onClick={() => setOpen(false)}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-white"
              aria-label="Close menu"
            >
              <X />
            </button>
          </div>

          <div className="space-y-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-sm font-bold text-slate-200"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="mt-6 grid gap-3">
            <Link
              href="/login"
              onClick={() => setOpen(false)}
              className="rounded-full border border-white/15 px-5 py-4 text-center text-sm font-bold text-white"
            >
              Sign In
            </Link>

            <Link
              href="/register"
              onClick={() => setOpen(false)}
              className="rounded-full bg-blue-600 px-5 py-4 text-center text-sm font-bold text-white"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </motion.header>
  );
}