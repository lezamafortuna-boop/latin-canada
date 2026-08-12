"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

const NAV_LINKS = [{ href: "#work", key: "work" }];

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
      className={`fixed inset-x-0 top-0 z-50 border-b bg-white transition-shadow duration-300 ${
        scrolled
          ? "border-navy-900/10 shadow-[0_1px_0_0_rgba(10,21,38,0.04)]"
          : "border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link href="#top" className="flex items-center gap-3 shrink-0">
          <Image
            src="/brand/latincanada-logo.png"
            alt="Latin Canada — swallow enclosed in a postage stamp"
            width={80}
            height={64}
            className="h-10 w-auto object-contain"
            priority
          />
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              className="text-sm font-medium tracking-wide text-navy-900/70 transition-colors hover:text-red-600"
            >
              {t.nav[link.key]}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-4 lg:flex">
          <LangToggle lang={lang} toggleLang={toggleLang} />
          <Link
            href="#contact"
            className="rounded-full bg-red-600 px-4 py-1.5 text-sm font-semibold tracking-wide text-paper transition-colors hover:bg-red-500"
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
            className="rounded-full border border-navy-900/15 p-2 text-navy-950"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-navy-900/10 bg-white lg:hidden">
          <div className="flex flex-col gap-1 px-6 py-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-navy-900/85 transition-colors hover:bg-navy-950/5"
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
      className="flex items-center rounded-full border border-navy-900/20 text-xs font-semibold tracking-wide text-navy-900/80"
    >
      <span
        className={`rounded-full px-3 py-1.5 transition-colors ${
          lang === "en" ? "bg-red-600 text-paper" : "text-navy-900/50"
        }`}
      >
        EN
      </span>
      <span
        className={`rounded-full px-3 py-1.5 transition-colors ${
          lang === "es" ? "bg-red-600 text-paper" : "text-navy-900/50"
        }`}
      >
        ES
      </span>
    </button>
  );
}
