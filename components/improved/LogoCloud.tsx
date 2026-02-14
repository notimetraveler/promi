"use client";

import Image from "next/image";
import { useState } from "react";
import { SUPPLIER_LOGOS_BASE } from "@/content/improved-home";
import type { socialProof as SocialProofContent } from "@/content/improved-home";

function getLogoUrl(filename: string) {
  return `${SUPPLIER_LOGOS_BASE}/${encodeURIComponent(filename)}`;
}

export function LogoCloud({ content }: { content: typeof SocialProofContent }) {
  const suppliers = [...content.suppliers, ...content.suppliers];

  return (
    <section className="border-y border-white/5 bg-white/[0.02] py-10 md:py-14">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-8 text-center text-sm font-medium text-slate-400">
          {content.claim}
        </p>

        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex gap-6 animate-marquee pointer-events-none select-none">
            {suppliers.map((supplier, i) => (
              <LogoItem
                key={`${supplier.name}-${i}`}
                supplier={supplier}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function LogoItem({ supplier }: { supplier: { name: string; logo: string } }) {
  const [error, setError] = useState(false);
  const logoUrl = getLogoUrl(supplier.logo);

  if (error) {
    return (
      <div className="flex min-w-[140px] shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3">
        <span className="text-center text-xs font-medium text-slate-300">
          {supplier.name}
        </span>
      </div>
    );
  }

  return (
    <div className="flex min-w-[160px] shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white px-4 py-3 [contain:layout]">
      <Image
        src={logoUrl}
        alt={supplier.name}
        width={120}
        height={48}
        className="h-8 w-auto max-w-[120px] object-contain object-center"
        onError={() => setError(true)}
        unoptimized
      />
    </div>
  );
}
