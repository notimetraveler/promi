"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import type { solutions as SolutionsContent } from "@/content/improved-home";
import { scrollFade, viewport } from "./motion-config";

export function SolutionsTabs({ content }: { content: typeof SolutionsContent }) {
  const [activeTab, setActiveTab] = useState<"promotional" | "workwear">(
    "promotional"
  );
  const solutions =
    activeTab === "promotional" ? content.promotional : content.workwear;

  return (
    <section id="solutions" className="section-reduce-jank px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="mb-12 text-center"
          initial={scrollFade.initial}
          whileInView={scrollFade.visible}
          viewport={viewport}
          transition={scrollFade.transition}
        >
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Connecting the industry
          </h2>
          <p className="mx-auto max-w-2xl text-slate-400">
            Promotional or workwear — choose the solutions that fit you
          </p>
        </motion.div>

        <div className="mb-10 flex justify-center">
          <div className="inline-flex rounded-2xl border border-white/10 bg-white/5 p-1">
            <button
              onClick={() => setActiveTab("promotional")}
              className={`rounded-xl px-6 py-2.5 text-sm font-semibold transition-all ${
                activeTab === "promotional"
                  ? "bg-[#f59e0b] text-[#0f1629]"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Promotional
            </button>
            <button
              onClick={() => setActiveTab("workwear")}
              className={`rounded-xl px-6 py-2.5 text-sm font-semibold transition-all ${
                activeTab === "workwear"
                  ? "bg-[#f59e0b] text-[#0f1629]"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Workwear
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {solutions.map((solution) => (
              <motion.div
                key={solution.title}
                className="group card-hover-3d rounded-2xl border border-white/5 bg-white/[0.02] p-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.25 }}
              >
                <span className="mb-2 block text-xs font-medium uppercase tracking-wider text-[#f59e0b]">
                  {activeTab}
                </span>
                <h3 className="mb-3 text-lg font-semibold text-white">
                  {solution.title}
                </h3>
                <p className="mb-4 text-sm text-slate-400">
                  {solution.description}
                </p>
                <ul className="space-y-1">
                  {solution.benefits.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-xs text-slate-500">
                      <span className="h-1 w-1 rounded-full bg-[#f59e0b]" />
                      {b}
                    </li>
                  ))}
                </ul>
                <a
                  href="mailto:info@promidata.com"
                  className="mt-4 inline-block text-sm font-medium text-[#f59e0b] transition-colors hover:text-[#f97316]"
                >
                  More information →
                </a>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
