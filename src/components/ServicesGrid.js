"use client";

import {
  Clapperboard,
  Film,
  Video,
  BookOpen,
  Timer,
  Music,
  Camera,
  Megaphone,
  FileText,
  PenTool,
  Scissors,
  SlidersHorizontal,
  Users,
  Projector,
  Drama,
  Mic2,
  Compass,
} from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

const ICONS = [
  Clapperboard,
  Film,
  Video,
  BookOpen,
  Timer,
  Music,
  Camera,
  Megaphone,
  FileText,
  PenTool,
  Scissors,
  SlidersHorizontal,
  Users,
  Projector,
  Drama,
  Mic2,
  Compass,
];

export default function ServicesGrid() {
  const { t } = useLanguage();
  const s = t.services;

  return (
    <section id="services" className="relative bg-navy-950 py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <p className="section-eyebrow text-sky-300">{s.eyebrow}</p>
          <h2 className="font-display text-balance mt-4 text-3xl font-semibold leading-tight text-paper sm:text-5xl">
            {s.title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-paper/70 sm:text-lg">
            {s.subtitle}
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {s.items.map((service, idx) => {
            const Icon = ICONS[idx] ?? Film;
            return (
              <div
                key={service.title}
                className="group relative flex flex-col gap-4 bg-navy-950 p-7 transition-colors duration-300 hover:bg-navy-900"
              >
                <Icon
                  size={26}
                  strokeWidth={1.5}
                  className="text-sky-300 transition-colors group-hover:text-red-500"
                />
                <h3 className="font-display text-lg text-paper">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-paper/65">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
