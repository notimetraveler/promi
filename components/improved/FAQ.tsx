"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import type { faq as FAQContent } from "@/content/improved-home";
import { scrollFade, viewport } from "./motion-config";

export function FAQ({ items }: { items: typeof FAQContent }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-reduce-jank border-t border-white/5 bg-white/[0.02] px-6 py-20 md:py-28">
      <div className="mx-auto max-w-3xl">
        <motion.div
          className="mb-16 text-center"
          initial={scrollFade.initial}
          whileInView={scrollFade.visible}
          viewport={viewport}
          transition={scrollFade.transition}
        >
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Frequently asked questions
          </h2>
          <p className="text-slate-400">
            Answers to the most common questions
          </p>
        </motion.div>

        <div className="space-y-3">
          {items.map((item, i) => (
            <motion.div
              key={item.question}
              className="card-hover-3d rounded-2xl border border-white/5 bg-white/[0.02] overflow-hidden"
              initial={scrollFade.initial}
              whileInView={scrollFade.visible}
              viewport={viewport}
              transition={scrollFade.transition}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between px-6 py-4 text-left"
                aria-expanded={openIndex === i}
                aria-controls={`faq-answer-${i}`}
                id={`faq-question-${i}`}
              >
                <span className="font-semibold text-white">{item.question}</span>
                <svg
                  className={`ml-4 h-5 w-5 shrink-0 text-[#f59e0b] transition-transform ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    id={`faq-answer-${i}`}
                    role="region"
                    aria-labelledby={`faq-question-${i}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <p className="border-t border-white/5 px-6 py-4 text-slate-400">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
