"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Mail, Lock, Rocket } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(e: any) {
    e.preventDefault();

    const res = await fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) router.push("/dashboard");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#020617] px-4">

      {/* CENTER WRAPPER (IMPORTANT) */}
      <div style={{ width: "100%", maxWidth: "420px" }}>

        <div className="border border-white/10 rounded-3xl p-8 bg-white/5 backdrop-blur-xl shadow-2xl">

          <Link href="/" className="flex items-center gap-2 mb-6">
            <Rocket size={20} />
            <span className="font-bold text-white">ReviewPilot</span>
          </Link>

          <h1 className="text-2xl font-bold text-white mb-4">
            Welcome back
          </h1>

          <form onSubmit={handleLogin} className="space-y-4">

            <div className="flex items-center gap-2 border border-white/10 rounded-xl p-3">
              <Mail size={16} />
              <input
                className="bg-transparent w-full outline-none text-white"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="flex items-center gap-2 border border-white/10 rounded-xl p-3">
              <Lock size={16} />
              <input
                type="password"
                className="bg-transparent w-full outline-none text-white"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button className="w-full bg-blue-600 py-3 rounded-full text-white font-bold">
              Login
            </button>
          </form>

          <p className="text-center mt-5 text-sm text-gray-400">
            No account?{" "}
            <Link href="/register" className="text-cyan-400">
              Register
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
}