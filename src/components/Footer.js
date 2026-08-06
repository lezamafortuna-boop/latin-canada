"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const f = t.footer;
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-ink py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <div className="flex items-center gap-3">
            <Image
              src="/brand/latincanada-mark.png"
              alt="Latin Canada"
              width={36}
              height={28}
              className="h-7 w-auto object-contain"
            />
            <div>
              <p className="font-display text-paper">
                Latin<span className="text-red-500">Canada</span>
              </p>
              <p className="text-xs text-paper/50">{f.tagline}</p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-2 text-xs text-paper/45 sm:items-end">
            <p>
              © {year} Latin Canada. {f.rights}
            </p>
            <p>{f.builtWith}</p>
            <Link
              href="https://latin-canada-portfolio.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-paper/60 underline decoration-white/20 underline-offset-4 transition-colors hover:text-sky-300"
            >
              {f.portfolio}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
