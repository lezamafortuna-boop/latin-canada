"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";

export default function About() {
  const { t } = useLanguage();
  const a = t.about;

  const pillars = [
    { title: a.missionTitle, body: a.mission },
    { title: a.philosophyTitle, body: a.philosophy },
    { title: a.approachTitle, body: a.approach },
  ];

  return (
    <section id="about" className="relative bg-navy-950 py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <p className="section-eyebrow text-sky-300">{a.eyebrow}</p>
            <h2 className="font-display text-balance mt-4 text-3xl font-semibold leading-tight text-paper sm:text-5xl">
              {a.title}
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-paper/70 sm:text-lg">
              {a.intro}
            </p>

            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
              {pillars.map((pillar) => (
                <div key={pillar.title} className="border-t border-white/15 pt-5">
                  <h3 className="font-display text-lg text-sky-300">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-paper/65">
                    {pillar.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-navy-900 p-8 sm:p-10">
              <div className="grain-overlay" aria-hidden="true" />
              <Image
                src="/brand/latincanada-mark.png"
                alt="The blue swallow enclosed within a postage stamp"
                width={80}
                height={62}
                className="h-12 w-auto object-contain opacity-90"
              />
              <h3 className="font-display mt-6 text-xl text-paper sm:text-2xl">
                {a.symbolTitle}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-paper/70 sm:text-base">
                {a.symbol}
              </p>

              <div className="mt-8 border-t border-white/10 pt-8">
                <h3 className="font-display text-xl text-paper sm:text-2xl">
                  {a.identityTitle}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-paper/70 sm:text-base">
                  {a.identity}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
