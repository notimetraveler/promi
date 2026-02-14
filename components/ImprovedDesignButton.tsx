"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function ImprovedDesignButton({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/improved-design"
      className={`group relative inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-300 hover:scale-105 active:scale-100 ${className}`}
      aria-label="View the redesigned Promidata website"
    >
      {/* Outer glow - behind the button */}
      <span className="pointer-events-none absolute -inset-1 rounded-2xl bg-gradient-to-r from-amber-400 via-[#f59e0b] to-orange-500 opacity-40 blur-md transition-all duration-300 group-hover:opacity-70 group-hover:blur-lg" />

      {/* Solid gradient background */}
      <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-amber-400 via-[#f59e0b] to-orange-500 transition-all duration-300 group-hover:from-amber-300 group-hover:via-amber-400 group-hover:to-orange-400" />

      {/* NEW badge */}
      <motion.span
        className="relative z-10 -mr-0.5 rounded-md bg-white/90 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#0f1629]"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 4 }}
      >
        New
      </motion.span>

      {/* Button content */}
      <span className="relative z-10 flex items-center gap-1.5 text-[#0f1629]">
        <span className="opacity-90">✨</span>
        New site
      </span>

      {/* Arrow - slides on hover */}
      <span className="relative z-10 ml-0.5 transition-transform duration-200 group-hover:translate-x-0.5">
        →
      </span>
    </Link>
  );
}
