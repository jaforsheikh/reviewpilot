"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Bell,
  Bot,
  ChartNoAxesCombined,
  Home,
  LogOut,
  Menu,
  MessageSquareText,
  Search,
  Settings,
  Star,
  TrendingUp,
  Users,
  X,
} from "lucide-react";

type User = {
  id: string;
  name: string;
  email: string;
};

const stats = [
  { title: "Average Rating", value: "4.8", icon: Star, change: "+12%" },
  { title: "Total Reviews", value: "12,480", icon: MessageSquareText, change: "+28%" },
  { title: "Reputation Score", value: "91%", icon: ChartNoAxesCombined, change: "+18%" },
  { title: "AI Replies", value: "3,240", icon: Bot, change: "+42%" },
];

const reviews = [
  {
    name: "Sarah Johnson",
    rating: "5.0",
    type: "Positive",
    text: "Amazing service! The team replied quickly and solved my issue.",
  },
  {
    name: "Nadia Rahman",
    rating: "4.0",
    type: "Neutral",
    text: "Good service overall, but delivery time can be improved.",
  },
  {
    name: "James Wilson",
    rating: "2.0",
    type: "Negative",
    text: "I waited too long for a reply. This needs improvement.",
  },
];

const navItems = [
  { label: "Overview", icon: Home },
  { label: "Reviews", icon: MessageSquareText },
  { label: "AI Replies", icon: Bot },
  { label: "Customers", icon: Users },
  { label: "Settings", icon: Settings },
];

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    async function getUser() {
      const res = await fetch("/api/auth/me");

      if (!res.ok) {
        router.push("/login");
        return;
      }

      const data = await res.json();
      setUser(data.user);
    }

    getUser();
  }, [router]);

  async function handleLogout() {
    await fetch("/api/auth/logout", {
      method: "POST",
    });

    router.push("/login");
    router.refresh();
  }

  const Sidebar = () => (
    <aside className="h-full border-r border-white/10 bg-[#020617] p-6">
      <Link href="/" className="mb-10 flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600 blue-glow">
          <Bot size={22} />
        </span>
        <span className="text-xl font-bold">
          Review<span className="text-cyan-400">Pilot</span>
        </span>
      </Link>

      <nav className="space-y-3">
        {navItems.map((item) => {
          const Icon = item.icon;

          return (
            <a
              key={item.label}
              href="#"
              className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-bold text-slate-300 transition hover:bg-cyan-400/10 hover:text-cyan-300"
            >
              <Icon size={19} />
              {item.label}
            </a>
          );
        })}
      </nav>

      <button
        onClick={handleLogout}
        className="mt-10 flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-sm font-bold text-slate-400 transition hover:bg-red-500/10 hover:text-red-300"
      >
        <LogOut size={19} />
        Logout
      </button>
    </aside>
  );

  return (
    <main className="min-h-screen bg-[#020617] text-white">
      <div className="grid min-h-screen lg:grid-cols-[280px_1fr]">
        <div className="hidden lg:block">
          <Sidebar />
        </div>

        {sidebarOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <button
              onClick={() => setSidebarOpen(false)}
              className="absolute inset-0 bg-black/60"
              aria-label="Close sidebar overlay"
            />
            <div className="relative h-full w-[280px]">
              <Sidebar />
            </div>
          </div>
        )}

        <section className="p-4 md:p-8">
          <header className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div className="flex items-start gap-4">
              <button
                onClick={() => setSidebarOpen(true)}
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] lg:hidden"
              >
                <Menu size={22} className="text-cyan-300" />
              </button>

              <div>
                <p className="text-sm font-bold text-cyan-300">
                  Welcome back, {user?.name || "User"} 👋
                </p>
                <h1 className="mt-2 text-3xl font-black md:text-5xl">
                  Reputation Dashboard
                </h1>
                <p className="mt-2 text-sm text-slate-400">
                  {user?.email || "Loading account..."}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="hidden items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 md:flex">
                <Search size={18} className="text-cyan-300" />
                <input
                  placeholder="Search reviews..."
                  className="bg-transparent text-sm outline-none placeholder:text-slate-500"
                />
              </div>

              <button className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
                <Bell size={19} className="text-cyan-300" />
              </button>
            </div>
          </header>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6"
                >
                  <div className="mb-6 flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                      <Icon size={22} />
                    </span>
                    <span className="rounded-full bg-green-400/10 px-3 py-1 text-xs font-black text-green-300">
                      {item.change}
                    </span>
                  </div>
                  <h3 className="text-3xl font-black">{item.value}</h3>
                  <p className="mt-1 text-sm text-slate-400">{item.title}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-6 grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-6">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">Performance</p>
                  <h2 className="text-2xl font-black">Review Growth</h2>
                </div>
                <TrendingUp className="text-cyan-300" />
              </div>

              <div className="flex h-80 items-end gap-3">
                {[45, 70, 55, 82, 64, 90, 76, 95, 88, 98, 84, 100].map(
                  (height, index) => (
                    <div
                      key={index}
                      style={{ height: `${height}%` }}
                      className="flex-1 rounded-t-2xl bg-gradient-to-t from-blue-600 to-cyan-300"
                    />
                  )
                )}
              </div>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-6">
              <div className="mb-6">
                <p className="text-sm text-slate-400">Latest Reviews</p>
                <h2 className="text-2xl font-black">Review Inbox</h2>
              </div>

              <div className="space-y-4">
                {reviews.map((review) => (
                  <div
                    key={review.name}
                    className="rounded-2xl border border-white/10 bg-[#020617]/70 p-4"
                  >
                    <div className="mb-2 flex justify-between gap-3">
                      <h3 className="text-sm font-black">{review.name}</h3>
                      <span className="rounded-full border border-cyan-400/20 px-3 py-1 text-xs font-black text-cyan-300">
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
        </section>
      </div>
    </main>
  );
}