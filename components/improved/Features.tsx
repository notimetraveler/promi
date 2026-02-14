"use client";

import { motion } from "framer-motion";
import type { valuePillars as PillarsContent } from "@/content/improved-home";

const icons: Record<string, React.ReactNode> = {
  chart: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  shop: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
    </svg>
  ),
  search: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  ),
  database: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
    </svg>
  ),
};

import { scrollFade, viewport } from "./motion-config";

export function Features({ pillars }: { pillars: typeof PillarsContent }) {
  return (
    <section className="section-reduce-jank px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="mb-16 text-center"
          initial={scrollFade.initial}
          whileInView={scrollFade.visible}
          viewport={viewport}
          transition={scrollFade.transition}
        >
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Why Promidata?
          </h2>
          <p className="mx-auto max-w-2xl text-slate-400">
            Complete IT solutions for the promotional and workwear industry
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => (
            <motion.div
              key={pillar.title}
              className="group card-hover-3d rounded-2xl border border-white/5 bg-white/[0.02] p-6"
              initial={scrollFade.initial}
              whileInView={scrollFade.visible}
              viewport={viewport}
              transition={scrollFade.transition}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#f59e0b]/10 text-[#f59e0b]">
                {icons[pillar.icon] ?? icons.chart}
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">
                {pillar.title}
              </h3>
              <p className="text-sm text-slate-400">{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
