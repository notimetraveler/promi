"use client";

import { motion } from "framer-motion";
import type { metrics as MetricsContent } from "@/content/improved-home";
import { scrollFade, viewport } from "./motion-config";

export function Stats({ metrics }: { metrics: typeof MetricsContent }) {
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
            Measurable benefits
          </h2>
          <p className="mx-auto max-w-2xl text-slate-400">
            Results that move your business forward
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {metrics.map((m) => (
            <motion.div
              key={m.label}
              className="card-hover-3d rounded-2xl border border-white/5 bg-white/[0.02] p-6 text-center"
              initial={scrollFade.initial}
              whileInView={scrollFade.visible}
              viewport={viewport}
              transition={scrollFade.transition}
            >
              <div className="mb-2 text-3xl font-bold text-[#f59e0b] md:text-4xl">
                {m.value}
              </div>
              <p className="mb-1 font-semibold text-white">{m.label}</p>
              <p className="text-sm text-slate-500">{m.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
