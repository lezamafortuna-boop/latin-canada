"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

const NAV_LINKS = [
  { href: "#about", key: "about" },
  { href: "#founder", key: "founder" },
  { href: "#services", key: "services" },
  { href: "#work", key: "work" },
  { href: "#gallery", key: "gallery" },
];

export default function Navbar() {
  const { lang, toggleLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled
          ? "bg-navy-950/90 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link href="#top" className="flex items-center gap-3 shrink-0">
          <Image
            src="/brand/latincanada-mark.png"
            alt="Latin Canada — swallow mark"
            width={40}
            height={31}
            className="h-8 w-auto object-contain"
            priority
          />
          <span className="font-display text-lg tracking-wide text-paper">
            Latin<span className="text-red-500">Canada</span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              className="text-sm font-medium tracking-wide text-paper/80 transition-colors hover:text-sky-300"
            >
              {t.nav[link.key]}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-4 lg:flex">
          <LangToggle lang={lang} toggleLang={toggleLang} />
          <Link
            href="#contact"
            className="rounded-full bg-red-600 px-5 py-2 text-sm font-semibold tracking-wide text-paper transition-colors hover:bg-red-500"
          >
            {t.nav.cta}
          </Link>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <LangToggle lang={lang} toggleLang={toggleLang} />
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="rounded-full border border-white/15 p-2 text-paper"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-navy-950/95 backdrop-blur-md lg:hidden">
          <div className="flex flex-col gap-1 px-6 py-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-paper/90 transition-colors hover:bg-white/5"
              >
                {t.nav[link.key]}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-red-600 px-5 py-3 text-center text-sm font-semibold text-paper"
            >
              {t.nav.cta}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

function LangToggle({ lang, toggleLang }) {
  return (
    <button
      type="button"
      onClick={toggleLang}
      aria-label="Toggle language"
      className="flex items-center rounded-full border border-white/20 text-xs font-semibold tracking-wide text-paper/90"
    >
      <span
        className={`rounded-full px-3 py-1.5 transition-colors ${
          lang === "en" ? "bg-red-600 text-paper" : "text-paper/60"
        }`}
      >
        EN
      </span>
      <span
        className={`rounded-full px-3 py-1.5 transition-colors ${
          lang === "es" ? "bg-red-600 text-paper" : "text-paper/60"
        }`}
      >
        ES
      </span>
    </button>
  );
}
