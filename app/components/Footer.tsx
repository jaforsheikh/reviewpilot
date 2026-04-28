"use client";

import { Mail, MapPin, Phone, Rocket } from "lucide-react";

const links = {
  Product: ["Features", "Analyzer", "Pricing", "FAQ"],
  Company: ["About", "Contact", "Careers", "Blog"],
  Resources: ["Documentation", "Case Studies", "Help Center", "API"],
};

const socialLinks = [
  { name: "Facebook", label: "f" },
  { name: "Instagram", label: "◎" },
  { name: "Twitter", label: "𝕏" },
  { name: "LinkedIn", label: "in" },
];

export default function Footer() {
  return (
    <footer id="footer" className="border-t border-white/10 bg-[#020617]">
      <div className="container-custom py-16">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div>
            <a href="#" className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600 blue-glow">
                <Rocket size={22} />
              </span>
              <span className="text-xl font-bold tracking-tight text-white">
                Review<span className="text-cyan-400">Pilot</span>
              </span>
            </a>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
              ReviewPilot is an AI-powered reputation management SaaS that helps
              businesses analyze reviews, generate smart replies, and grow
              customer trust.
            </p>

            <div className="mt-6 flex gap-3">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href="#"
                  aria-label={item.name}
                  className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 text-sm font-black text-slate-300 transition hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-300"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h3 className="mb-5 text-sm font-black uppercase tracking-[0.2em] text-white">
                {title}
              </h3>

              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase().replace(" ", "-")}`}
                      className="text-sm font-medium text-slate-400 transition hover:text-cyan-300"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-4 border-t border-white/10 pt-8 md:grid-cols-3">
          <div className="flex items-center gap-3 text-sm text-slate-400">
            <Mail size={18} className="text-cyan-300" />
            support@reviewpilot.ai
          </div>

          <div className="flex items-center gap-3 text-sm text-slate-400">
            <Phone size={18} className="text-cyan-300" />
            +1 (555) 123-4567
          </div>

          <div className="flex items-center gap-3 text-sm text-slate-400">
            <MapPin size={18} className="text-cyan-300" />
            Built for global businesses
          </div>
        </div>

        <div className="mt-8 flex flex-col justify-between gap-4 border-t border-white/10 pt-8 md:flex-row md:items-center">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} ReviewPilot. All rights reserved.
          </p>

          <div className="flex gap-5 text-sm">
            <a href="#" className="text-slate-500 transition hover:text-cyan-300">
              Privacy Policy
            </a>
            <a href="#" className="text-slate-500 transition hover:text-cyan-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}