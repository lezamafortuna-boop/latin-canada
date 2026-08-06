"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function FounderBio() {
  const { t } = useLanguage();
  const f = t.founder;

  return (
    <section id="founder" className="relative bg-ink py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <p className="section-eyebrow text-sky-300">{f.eyebrow}</p>
            <h2 className="font-display text-balance mt-4 text-3xl font-semibold leading-tight text-paper sm:text-5xl">
              {f.title}
            </h2>

            {/*
              Founder portrait placeholder.
              Replace the image below with /public/images/founder-portrait.jpg
              (recommend a 4:5 documentary-style portrait, natural light).
            */}
            <div className="relative mt-10 aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-navy-800 via-navy-900 to-ink">
              <div className="grain-overlay" aria-hidden="true" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-center px-6">
                <Image
                  src="/brand/latincanada-mark.png"
                  alt=""
                  width={64}
                  height={49}
                  className="h-10 w-auto object-contain opacity-70"
                  aria-hidden="true"
                />
                <p className="text-xs uppercase tracking-[0.25em] text-paper/40">
                  Founder Portrait — Placeholder
                </p>
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 to-transparent p-6">
                <p className="font-display text-lg text-paper">{f.name}</p>
              </div>
            </div>

            <Link
              href="https://latin-canada-portfolio.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-sky-300 transition-colors hover:text-sky-200"
            >
              {f.portfolioLabel}
              <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="lg:col-span-7 lg:pt-16">
            <div className="space-y-6">
              {f.bioParagraphs.map((paragraph, idx) => (
                <p
                  key={idx}
                  className="text-base leading-relaxed text-paper/70 sm:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-10 rounded-2xl border border-white/10 bg-navy-900 p-6 sm:p-8">
              <h3 className="section-eyebrow text-red-500">
                {f.roleTitle}
              </h3>
              <p className="mt-3 text-base text-paper/80 sm:text-lg">
                {f.role}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
