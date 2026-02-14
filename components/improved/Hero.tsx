"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { DashboardCarousel } from "./DashboardCarousel";
import type { hero as HeroContent } from "@/content/improved-home";

export function Hero({ content }: { content: typeof HeroContent }) {
  return (
    <section className="relative overflow-hidden px-6 pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="absolute inset-0 -z-10">
        <div className="gradient-orb-improved gradient-orb-1-improved" aria-hidden />
        <div className="gradient-orb-improved gradient-orb-2-improved" aria-hidden />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <motion.h1
              className="mb-6 text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {content.headline}
            </motion.h1>

            <motion.p
              className="mb-4 max-w-xl text-lg text-slate-300 md:text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {content.subcopy}
            </motion.p>

            <motion.p
              className="mb-10 text-slate-500"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              {content.secondaryText}
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link
                href={content.ctaPrimaryHref}
                className="inline-flex items-center rounded-2xl bg-[#f59e0b] px-6 py-3.5 font-semibold text-[#0f1629] shadow-lg shadow-[#f59e0b]/25 transition-all hover:bg-[#f97316] hover:shadow-xl hover:shadow-[#f59e0b]/30"
              >
                {content.ctaPrimary}
              </Link>
              <Link
                href={content.ctaSecondaryHref}
                className="inline-flex items-center rounded-2xl border border-white/20 bg-white/5 px-6 py-3.5 font-semibold text-white backdrop-blur transition-colors hover:bg-white/10 hover:border-white/30"
              >
                {content.ctaSecondary}
              </Link>
              <Link
                href={content.ctaTertiaryHref}
                className="inline-flex items-center text-[#f59e0b] transition-colors hover:text-[#f97316]"
              >
                {content.ctaTertiary} →
              </Link>
            </motion.div>
          </div>

          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <DashboardCarousel />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
