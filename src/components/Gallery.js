"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";

/*
  Real production stills from Latin Canada's slate.
  Crying at the Dairy Queen is excluded — no stills yet (in post-production).
  To add more: drop files in /public/images/work/<project>/ and list them here.
*/
const TILES = [
  { src: "/images/work/luis-at-home/still-01.jpg", project: "Luis at Home", span: "row-span-2" },
  { src: "/images/work/jouska/still-01.jpg", project: "Jouska", span: "" },
  { src: "/images/work/jouska/still-02.jpg", project: "Jouska", span: "" },
  { src: "/images/work/luis-at-home/still-02.jpg", project: "Luis at Home", span: "" },
  { src: "/images/work/jouska/still-03.jpg", project: "Jouska", span: "row-span-2" },
  { src: "/images/work/luis-at-home/still-03.jpg", project: "Luis at Home", span: "" },
  { src: "/images/work/luis-at-home/still-shower.jpg", project: "Luis at Home", span: "" },
  { src: "/images/work/jouska/still-04.jpg", project: "Jouska", span: "" },
];

export default function Gallery() {
  const { t } = useLanguage();
  const g = t.gallery;

  return (
    <section id="gallery" className="relative bg-navy-950 py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <p className="section-eyebrow text-sky-300">{g.eyebrow}</p>
          <h2 className="font-display text-balance mt-4 text-3xl font-semibold leading-tight text-paper sm:text-5xl">
            {g.title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-paper/70 sm:text-lg">
            {g.subtitle}
          </p>
        </div>

        <div className="mt-14 grid auto-rows-[140px] grid-cols-2 gap-3 sm:auto-rows-[180px] sm:gap-4 lg:grid-cols-4">
          {TILES.map((tile, idx) => (
            <div
              key={tile.src}
              className={`group relative overflow-hidden rounded-xl border border-white/10 bg-navy-900 ${tile.span}`}
            >
              <Image
                src={tile.src}
                alt={`${tile.project} — production still`}
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority={idx < 2}
              />
              <div className="grain-overlay" aria-hidden="true" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/0 to-ink/0 opacity-70 transition-opacity duration-300 group-hover:opacity-90" />
              <div className="absolute inset-0 flex items-end p-4">
                <span className="text-[0.65rem] uppercase tracking-[0.2em] text-paper/70">
                  {tile.project}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
