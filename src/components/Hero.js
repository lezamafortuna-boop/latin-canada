"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white"
    >
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
        <Image
          src="/brand/latincanada-mark.png"
          alt="Latin Canada — swallow enclosed in a postage stamp"
          width={238}
          height={184}
          className="mb-8 h-[408px] w-auto object-contain sm:h-[489px]"
          priority
        />

        <p className="section-eyebrow mb-5 text-navy-600">{t.hero.eyebrow}</p>

        <h1 className="font-display text-balance text-4xl font-semibold leading-[1.1] text-navy-950 sm:text-6xl lg:text-7xl">
          {t.hero.tagline}
        </h1>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href="#contact"
            className="rounded-full bg-red-600 px-8 py-3.5 text-sm font-semibold tracking-wide text-paper transition-all hover:bg-red-500 hover:shadow-[0_0_24px_rgba(200,30,44,0.35)]"
          >
            {t.hero.ctaSecondary}
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-navy-900/40">
        <span className="text-[0.65rem] uppercase tracking-[0.3em]">
          {t.hero.scroll}
        </span>
        <ArrowDown size={16} className="animate-bounce" />
      </div>
    </section>
  );
}
