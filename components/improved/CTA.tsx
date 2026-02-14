"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { finalCta as CTAContent } from "@/content/improved-home";
import { scrollFade, viewport } from "./motion-config";

export function CTA({ content }: { content: typeof CTAContent }) {
  return (
    <section className="section-reduce-jank px-6 py-20 md:py-28">
      <div className="mx-auto max-w-4xl">
        <motion.div
          className="rounded-3xl border border-[#f59e0b]/20 bg-gradient-to-br from-[#f59e0b]/10 to-transparent p-12 text-center shadow-2xl shadow-[#f59e0b]/5 md:p-16"
          initial={scrollFade.initial}
          whileInView={scrollFade.visible}
          viewport={viewport}
          transition={scrollFade.transition}
        >
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            {content.headline}
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-slate-400">
            {content.subcopy}
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href={content.ctaHref}
              className="inline-flex rounded-2xl bg-[#f59e0b] px-8 py-4 font-semibold text-[#0f1629] shadow-lg shadow-[#f59e0b]/25 transition-all hover:bg-[#f97316] hover:shadow-xl"
            >
              {content.ctaText}
            </Link>
            <p className="text-sm text-slate-500">{content.secondaryText}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
