"use client";

import { motion } from "framer-motion";
import type { howItWorks as HowItWorksContent } from "@/content/improved-home";
import { scrollFade, viewport } from "./motion-config";

export function HowItWorks({ steps }: { steps: typeof HowItWorksContent }) {
  return (
    <section className="section-reduce-jank border-t border-white/5 bg-white/[0.02] px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="mb-16 text-center"
          initial={scrollFade.initial}
          whileInView={scrollFade.visible}
          viewport={viewport}
          transition={scrollFade.transition}
        >
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            How it works
          </h2>
          <p className="mx-auto max-w-2xl text-slate-400">
            From data to sales — three steps to more efficiency
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              className="card-hover-3d relative rounded-2xl border border-white/5 bg-white/[0.02] p-8"
              initial={scrollFade.initial}
              whileInView={scrollFade.visible}
              viewport={viewport}
              transition={scrollFade.transition}
            >
              {i < steps.length - 1 && (
                <div className="absolute right-0 top-1/2 hidden -translate-y-1/2 translate-x-1/2 md:block">
                  <div className="h-px w-8 bg-gradient-to-r from-white/20 to-transparent" />
                </div>
              )}
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f59e0b]/10 text-2xl font-bold text-[#f59e0b]">
                {step.step}
              </div>
              <h3 className="mb-2 text-xl font-semibold text-white">
                {step.title}
              </h3>
              <p className="text-slate-400">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
