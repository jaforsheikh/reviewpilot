"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Bot,
  BrainCircuit,
  Clipboard,
  MessageSquareText,
  RefreshCcw,
  Sparkles,
  Star,
  WandSparkles,
} from "lucide-react";

type Sentiment = "Positive" | "Neutral" | "Negative";

const sampleReviews = [
  "Amazing service! The team replied quickly and solved my issue. Highly recommended.",
  "The product is okay, but delivery was late and communication could be better.",
  "Very bad experience. Nobody answered my message and the service was delayed.",
];

function analyzeReview(text: string) {
  const lower = text.toLowerCase();

  const positiveWords = ["amazing", "good", "great", "excellent", "recommended", "quickly", "love", "best", "happy"];
  const negativeWords = ["bad", "late", "delayed", "poor", "worst", "angry", "issue", "problem", "nobody"];

  const positiveScore = positiveWords.filter((word) => lower.includes(word)).length;
  const negativeScore = negativeWords.filter((word) => lower.includes(word)).length;

  if (negativeScore > positiveScore) {
    return {
      sentiment: "Negative" as Sentiment,
      score: 38,
      tone: "Frustrated customer",
      color: "text-yellow-300",
      bg: "bg-yellow-400/10",
      border: "border-yellow-400/25",
    };
  }

  if (positiveScore > negativeScore) {
    return {
      sentiment: "Positive" as Sentiment,
      score: 91,
      tone: "Happy customer",
      color: "text-cyan-300",
      bg: "bg-cyan-400/10",
      border: "border-cyan-400/25",
    };
  }

  return {
    sentiment: "Neutral" as Sentiment,
    score: 64,
    tone: "Mixed feedback",
    color: "text-blue-300",
    bg: "bg-blue-400/10",
    border: "border-blue-400/25",
  };
}

function generateReply(sentiment: Sentiment) {
  if (sentiment === "Positive") {
    return "Thank you so much for your kind feedback! We’re happy to hear you had a great experience. Your support means a lot to our team.";
  }

  if (sentiment === "Negative") {
    return "We’re really sorry to hear about your experience. This is not the level of service we aim to provide. Please contact our team so we can review the issue and make it right.";
  }

  return "Thank you for sharing your feedback. We appreciate your honest review and will use it to improve our service experience.";
}

export default function AIAnalyzer() {
  const [review, setReview] = useState(sampleReviews[1]);

  const result = useMemo(() => analyzeReview(review), [review]);
  const reply = useMemo(() => generateReply(result.sentiment), [result.sentiment]);

  return (
    <section id="analyzer" className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-8%] top-20 h-96 w-96 rounded-full bg-cyan-400/10 blur-[140px]" />
        <div className="absolute right-[-8%] bottom-20 h-96 w-96 rounded-full bg-blue-600/10 blur-[140px]" />
      </div>

      <div className="container-custom relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/10 px-4 py-2 text-sm font-bold text-cyan-300"
          >
            <BrainCircuit size={17} />
            AI Review Analyzer
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-black tracking-tight text-white md:text-6xl"
          >
            Analyze reviews & generate{" "}
            <span className="gradient-text">smart replies</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="mt-6 text-lg leading-8 text-slate-300"
          >
            Paste any customer review and ReviewPilot will detect sentiment,
            customer tone, reputation risk, and generate a professional reply.
          </motion.p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="glass-card rounded-[32px] p-6 md:p-8"
          >
            <div className="mb-6 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-cyan-300">Input</p>
                <h3 className="mt-1 text-2xl font-black text-white">
                  Customer Review
                </h3>
              </div>

              <MessageSquareText className="text-cyan-300" />
            </div>

            <textarea
              value={review}
              onChange={(e) => setReview(e.target.value)}
              className="min-h-[220px] w-full resize-none rounded-3xl border border-white/10 bg-white/[0.04] p-5 text-sm leading-7 text-slate-200 outline-none transition placeholder:text-slate-500 focus:border-cyan-400/50"
              placeholder="Paste customer review here..."
            />

            <div className="mt-5 grid gap-3">
              {sampleReviews.map((item, index) => (
                <button
                  key={item}
                  onClick={() => setReview(item)}
                  className="rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3 text-left text-sm text-slate-300 transition hover:border-cyan-400/35 hover:bg-cyan-400/10 hover:text-white"
                >
                  Sample {index + 1}: {item.slice(0, 58)}...
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="space-y-6"
          >
            <div className="glass-card rounded-[32px] p-6 md:p-8">
              <div className="mb-6 flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-cyan-300">Result</p>
                  <h3 className="mt-1 text-2xl font-black text-white">
                    Sentiment Report
                  </h3>
                </div>

                <span
                  className={`rounded-full border px-4 py-2 text-sm font-black ${result.bg} ${result.border} ${result.color}`}
                >
                  {result.sentiment}
                </span>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                  <Star className="mb-5 text-yellow-300" />
                  <h4 className="text-3xl font-black text-white">
                    {result.score}%
                  </h4>
                  <p className="mt-1 text-sm text-slate-400">
                    Reputation Score
                  </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                  <Bot className="mb-5 text-cyan-300" />
                  <h4 className="text-lg font-black text-white">
                    {result.tone}
                  </h4>
                  <p className="mt-1 text-sm text-slate-400">Customer Tone</p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                  <RefreshCcw className="mb-5 text-blue-300" />
                  <h4 className="text-lg font-black text-white">
                    {result.sentiment === "Negative" ? "High" : "Low"}
                  </h4>
                  <p className="mt-1 text-sm text-slate-400">Response Need</p>
                </div>
              </div>

              <div className="mt-6">
                <div className="mb-2 flex justify-between text-sm">
                  <span className="text-slate-300">Confidence</span>
                  <span className="font-bold text-white">{result.score}%</span>
                </div>

                <div className="h-3 overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    key={result.score}
                    initial={{ width: 0 }}
                    animate={{ width: `${result.score}%` }}
                    transition={{ duration: 0.8 }}
                    className="h-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-300"
                  />
                </div>
              </div>
            </div>

            <div className="glass-card rounded-[32px] border-cyan-400/25 p-6 md:p-8">
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                  <WandSparkles />
                </span>
                <div>
                  <p className="text-sm font-semibold text-cyan-300">
                    Generated Reply
                  </p>
                  <h3 className="text-2xl font-black text-white">
                    AI Response
                  </h3>
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-[#020617]/70 p-5">
                <p className="text-sm leading-7 text-slate-300">“{reply}”</p>
              </div>

              <button
                onClick={() => navigator.clipboard.writeText(reply)}
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-black text-white shadow-lg shadow-blue-600/25 transition hover:bg-blue-500"
              >
                <Clipboard size={17} />
                Copy Reply
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}