"use client";

import Link from "next/link";

export function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0f1629]/95">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-semibold lowercase tracking-tight text-[#f59e0b]">
            promidata
          </span>
        </Link>
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="text-sm text-slate-400 transition-colors hover:text-white"
          >
            Original site
          </Link>
          <Link
            href="#solutions"
            className="hidden text-sm text-slate-400 transition-colors hover:text-white md:block"
          >
            Solutions
          </Link>
          <Link
            href="#contact"
            className="hidden text-sm text-slate-400 transition-colors hover:text-white md:block"
          >
            Contact
          </Link>
          <Link
            href="#contact"
            className="rounded-xl bg-[#f59e0b] px-4 py-2.5 text-sm font-semibold text-[#0f1629] transition-colors hover:bg-[#f97316]"
          >
            Plan a demo
          </Link>
        </div>
      </div>
    </nav>
  );
}
