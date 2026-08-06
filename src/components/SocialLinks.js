"use client";

import { useLanguage } from "@/lib/LanguageContext";

/*
  lucide-react v1 dropped brand/social glyphs, so these four are hand-drawn
  as simple stroke icons (feather-style) to match the rest of the icon set.
*/
function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function YoutubeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
    </svg>
  );
}

function LinkedinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function VimeoIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" {...props}>
      <path d="M22.5 6.75c-.1 2.2-1.64 5.2-4.62 9.02C14.8 19.77 12.1 21.6 9.9 21.6c-1.36 0-2.51-1.26-3.45-3.77L4.6 11.2C3.9 8.7 3.15 7.44 2.35 7.44c-.17 0-.77.36-1.8 1.08L0 7.32c1.13-1 2.24-2 3.33-3 1.5-1.28 2.63-1.96 3.38-2.03 1.78-.17 2.87 1.05 3.28 3.66.44 2.82.75 4.57.92 5.25.5 2.32 1.06 3.48 1.66 3.48.47 0 1.17-.75 2.11-2.24.93-1.5 1.44-2.63 1.5-3.42.13-1.3-.37-1.95-1.5-1.95-.53 0-1.08.12-1.65.37 1.1-3.6 3.2-5.35 6.3-5.25 2.3.07 3.38 1.56 3.24 4.48z" />
    </svg>
  );
}

const LINKS = [
  { key: "instagram", label: "Instagram", href: "https://instagram.com/latincanada", Icon: InstagramIcon },
  { key: "youtube", label: "YouTube", href: "https://youtube.com/@latincanada", Icon: YoutubeIcon },
  { key: "vimeo", label: "Vimeo", href: "https://vimeo.com/latincanada", Icon: VimeoIcon },
  { key: "linkedin", label: "LinkedIn", href: "https://linkedin.com/company/latincanada", Icon: LinkedinIcon },
];

export default function SocialLinks() {
  const { t } = useLanguage();
  const s = t.social;

  return (
    <section className="relative bg-ink py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col items-center gap-8 text-center">
          <div>
            <p className="section-eyebrow text-sky-300">{s.eyebrow}</p>
            <h2 className="font-display mt-3 text-2xl font-semibold text-paper sm:text-3xl">
              {s.title}
            </h2>
          </div>

          <div className="flex items-center gap-4">
            {LINKS.map(({ key, label, href, Icon }) => (
              <a
                key={key}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 text-paper/80 transition-all hover:border-red-500 hover:text-red-500"
              >
                <Icon width={20} height={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
