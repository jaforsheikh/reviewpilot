"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, FormEvent } from "react";
import { User, Mail, Lock, Rocket } from "lucide-react";

export default function RegisterPage() {
  const router = useRouter();
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [loading,setLoading]=useState(false);

  async function handleRegister(e:FormEvent){
    e.preventDefault();
    setLoading(true);

    await fetch("/api/auth/register",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({name,email,password})
    });

    router.push("/dashboard");
  }

  return (
    <main className="min-h-screen cyber-bg px-4 py-16">
      <div className="mx-auto flex min-h-[calc(100vh-128px)] w-full max-w-[480px] items-center justify-center">
        <div className="w-full rounded-[32px] border border-white/10 bg-white/[0.04] p-8 shadow-2xl">

          <Link href="/" className="mb-8 flex items-center gap-3">
            <Rocket />
            <span className="text-white font-bold">ReviewPilot</span>
          </Link>

          <h1 className="text-3xl font-black text-white">Create account</h1>

          <form onSubmit={handleRegister} className="mt-6 space-y-5">

            <div>
              <div className="flex gap-3 border p-3 rounded-xl">
                <User />
                <input
                  placeholder="Full Name"
                  onChange={(e)=>setName(e.target.value)}
                  className="bg-transparent w-full outline-none"
                />
              </div>
            </div>

            <div>
              <div className="flex gap-3 border p-3 rounded-xl">
                <Mail />
                <input
                  placeholder="Email"
                  onChange={(e)=>setEmail(e.target.value)}
                  className="bg-transparent w-full outline-none"
                />
              </div>
            </div>

            <div>
              <div className="flex gap-3 border p-3 rounded-xl">
                <Lock />
                <input
                  type="password"
                  placeholder="Password"
                  onChange={(e)=>setPassword(e.target.value)}
                  className="bg-transparent w-full outline-none"
                />
              </div>
            </div>

            <button className="w-full bg-blue-600 py-3 rounded-full">
              {loading ? "Creating..." : "Create Account"}
            </button>
          </form>

        </div>
      </div>
    </main>
  );
}