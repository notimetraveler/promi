"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback, useRef } from "react";

const SLIDES = [
  {
    id: "administration",
    label: "Administration",
    content: (
      <Image
        src="/dashboard-preview.png"
        alt="Promidata Administration - Categories management"
        width={800}
        height={450}
        className="h-full w-full object-contain object-center bg-[#1e3a5f]"
      />
    ),
  },
  {
    id: "videos",
    label: "Video support",
    content: (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src="/videos-preview.jpg"
        alt="Promidata Videos - Shopware 6 & Dashboard tutorials"
        className="h-full w-full object-contain object-center bg-[#0f1629]"
      />
    ),
  },
  {
    id: "freedom",
    label: "Freedom",
    content: (
      <video
        src="/freedom_flight.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="h-full w-full object-contain object-center bg-[#0f1629]"
      />
    ),
  },
];

const CLICK_PAUSE_MS = 6000;

export function DashboardCarousel() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const clickPauseUntilRef = useRef<number | null>(null);

  const goTo = useCallback((i: number) => {
    setIndex(i);
    clickPauseUntilRef.current = Date.now() + CLICK_PAUSE_MS;
  }, []);

  const next = useCallback(() => {
    if (clickPauseUntilRef.current && Date.now() < clickPauseUntilRef.current) return;
    setIndex((i) => (i + 1) % SLIDES.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(next, 4000);
    return () => clearInterval(interval);
  }, [isPaused, next]);

  return (
    <div
      className="flex flex-col"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="rounded-2xl border border-white/10 bg-white/5 p-2 shadow-2xl backdrop-blur">
        <div className="aspect-video overflow-hidden rounded-xl [perspective:1200px]">
          <div className="relative h-full w-full">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={SLIDES[index].id}
                initial={{
                  opacity: 0,
                  x: 100,
                  rotateY: 25,
                  scale: 0.9,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  rotateY: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  x: -100,
                  rotateY: -25,
                  scale: 0.9,
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.32, 0.72, 0, 1],
                }}
                className="absolute inset-0 origin-center"
                style={{ transformStyle: "preserve-3d" }}
              >
                {SLIDES[index].content}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        <div className="mt-2 flex items-center gap-2 px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-green-500/80" />
          <span className="text-xs text-slate-500">{SLIDES[index].label}</span>
        </div>
      </div>

      <div className="mt-4 flex justify-center gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={SLIDES[i].id}
            onClick={() => goTo(i)}
            className="h-2 w-2 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#f59e0b]/50"
            aria-label={`Go to slide ${i + 1}`}
            style={{
              backgroundColor: i === index ? "#22c55e" : "rgba(148, 163, 184, 0.4)",
            }}
          />
        ))}
      </div>
    </div>
  );
}
