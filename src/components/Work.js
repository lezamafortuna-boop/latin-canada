"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";

const FEATURED_IMAGE = {
  "luis-at-home": "/images/work/luis-at-home/featured.jpg",
  jouska: "/images/work/jouska/featured.jpg",
  "crying-at-dairy-queen": "/images/work/crying-at-the-dairy-queen/catdq.png",
};

export default function Work() {
  const { t } = useLanguage();
  const w = t.work;
  const projects = t.projects;

  return (
    <section id="work" className="relative bg-ink py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <p className="section-eyebrow text-sky-300">{w.eyebrow}</p>
          <h2 className="font-display text-balance mt-4 text-3xl font-semibold leading-tight text-paper sm:text-5xl">
            {w.title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-paper/70 sm:text-lg">
            {w.subtitle}
          </p>
        </div>

        <div className="mt-16 flex flex-col gap-16 lg:gap-20">
          {projects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              w={w}
              reversed={idx % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, w, reversed }) {
  const image = FEATURED_IMAGE[project.id];

  return (
    <div
      className={`flex flex-col gap-8 lg:flex-row lg:gap-12 ${
        reversed ? "lg:flex-row-reverse" : ""
      }`}
    >
      <div className="lg:w-[62%]">
        <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-navy-900">
          {image ? (
            <Image
              src={image}
              alt={`${project.title} — featured still`}
              width={1800}
              height={1012}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-navy-800 via-navy-900 to-ink text-center">
              <div className="grain-overlay" aria-hidden="true" />
              <p className="text-xs uppercase tracking-[0.3em] text-paper/40">
                {w.comingSoonLabel}
              </p>
              <p className="max-w-xs px-6 text-sm text-paper/55">
                {w.comingSoonNote}
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col justify-center lg:w-[38%]">
        <p className="section-eyebrow text-red-500">{project.type}</p>
        <h3 className="font-display mt-3 text-2xl text-paper sm:text-3xl">
          {project.title}
        </h3>
        {project.subtitle && (
          <p className="mt-1 text-sm italic text-paper/50">
            {project.subtitle}
          </p>
        )}
        <p className="mt-4 text-base leading-relaxed text-paper/70">
          {project.description}
        </p>

        <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-white/10 pt-6">
          <MetaItem label={w.directorLabel} value={project.director} />
          <MetaItem label={w.producerLabel} value={project.producer} />
          <MetaItem
            label={w.cinematographyLabel}
            value={project.cinematography}
          />
          <MetaItem label={w.yearLabel} value={project.year} />
        </div>
      </div>
    </div>
  );
}

function MetaItem({ label, value }) {
  return (
    <div>
      <p className="text-[0.65rem] uppercase tracking-[0.2em] text-paper/40">
        {label}
      </p>
      <p className="mt-1 text-sm text-paper/85">{value}</p>
    </div>
  );
}
