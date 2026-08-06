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
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-ink"
    >
      {/*
        Cinematic background video placeholder.
        Replace the <source src> below with the real hero reel at
        /public/videos/hero-reel.mp4. Until then, the poster image and
        gradient wash provide the full-bleed cinematic backdrop.
      */}
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-40"
        autoPlay
        muted
        loop
        playsInline
        poster="/videos/hero-poster.svg"
      >
        <source src="/videos/hero-reel.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-navy-950/70 to-ink" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_var(--color-ink)_85%)]" />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
        <Image
          src="/brand/latincanada-mark.png"
          alt="Latin Canada — swallow enclosed in a postage stamp"
          width={140}
          height={108}
          className="mb-8 h-20 w-auto object-contain drop-shadow-[0_0_30px_rgba(126,203,232,0.25)] sm:h-24"
          priority
        />

        <p className="section-eyebrow mb-5 text-sky-300">{t.hero.eyebrow}</p>

        <h1 className="font-display text-balance text-4xl font-semibold leading-[1.1] text-paper sm:text-6xl lg:text-7xl">
          {t.hero.tagline}
        </h1>

        <p className="mt-6 max-w-xl text-balance text-base text-paper/70 sm:text-lg">
          {t.hero.subtext}
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href="#work"
            className="rounded-full bg-red-600 px-8 py-3.5 text-sm font-semibold tracking-wide text-paper transition-all hover:bg-red-500 hover:shadow-[0_0_24px_rgba(200,30,44,0.4)]"
          >
            {t.hero.ctaPrimary}
          </Link>
          <Link
            href="#contact"
            className="rounded-full border border-white/25 px-8 py-3.5 text-sm font-semibold tracking-wide text-paper transition-colors hover:border-sky-300 hover:text-sky-300"
          >
            {t.hero.ctaSecondary}
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-paper/50">
        <span className="text-[0.65rem] uppercase tracking-[0.3em]">
          {t.hero.scroll}
        </span>
        <ArrowDown size={16} className="animate-bounce" />
      </div>
    </section>
  );
}
