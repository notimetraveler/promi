"use client";

import { motion } from "framer-motion";
import type { testimonials as TestimonialsContent } from "@/content/improved-home";
import { scrollFade, viewport } from "./motion-config";

export function Testimonials({
  testimonials,
}: {
  testimonials: typeof TestimonialsContent;
}) {
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
            What customers say
          </h2>
          <p className="mx-auto max-w-2xl text-slate-400">
            Case studies and experiences from the industry
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <motion.div
              key={t.company}
              className="card-hover-3d rounded-2xl border border-white/5 bg-white/[0.02] p-6"
              initial={scrollFade.initial}
              whileInView={scrollFade.visible}
              viewport={viewport}
              transition={scrollFade.transition}
            >
              <p className="mb-6 text-slate-300">&ldquo;{t.quote}&rdquo;</p>
              <div>
                <p className="font-semibold text-white">{t.author}</p>
                <p className="text-sm text-[#f59e0b]">{t.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
