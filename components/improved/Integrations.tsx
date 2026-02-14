"use client";

import { motion } from "framer-motion";
import type { integrations as IntegrationsContent } from "@/content/improved-home";
import { scrollFade, viewport } from "./motion-config";

export function Integrations({
  integrations,
}: {
  integrations: typeof IntegrationsContent;
}) {
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
            Integrations & ecosystem
          </h2>
          <p className="mx-auto max-w-2xl text-slate-400">
            Connected suppliers, SynQore, FastEditor and more
          </p>
        </motion.div>

        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5"
          initial={scrollFade.initial}
          whileInView={scrollFade.visible}
          viewport={viewport}
          transition={scrollFade.transition}
        >
          {integrations.map((int, i) => (
            <div
              key={int.name}
              className="card-hover-3d flex flex-col items-center rounded-2xl border border-white/5 bg-white/[0.02] p-6 text-center"
            >
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-[#f59e0b]/10">
                <svg
                  className="h-6 w-6 text-[#f59e0b]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                  />
                </svg>
              </div>
              <h3 className="mb-1 font-semibold text-white">{int.name}</h3>
              <p className="text-sm text-slate-500">{int.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
