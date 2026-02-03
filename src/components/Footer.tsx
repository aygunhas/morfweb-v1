"use client";

import * as React from "react";
import Image from "next/image";
import { Linkedin, Twitter, Github } from "lucide-react";
import { useTranslations } from "next-intl";

import { Link as LocaleLink } from "@/i18n/routing";

export function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer
      className="border-t border-zinc-200 bg-zinc-100 text-zinc-600 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300"
      role="contentinfo"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Grid — üst kısım */}
        <div className="grid grid-cols-1 gap-12 py-20 md:grid-cols-4">
          {/* Sütun 1 — Marka */}
          <div className="flex flex-col gap-2">
            <LocaleLink
              href="/"
              className="inline-block transition-opacity hover:opacity-90"
              aria-label="Morfweb Ana Sayfa"
            >
              <Image
                src="/morfweb-logo.svg"
                alt="Morfweb"
                width={240}
                height={62}
                className="h-14 w-auto dark:brightness-0 dark:invert dark:opacity-90 sm:h-16"
              />
            </LocaleLink>
            <p className="max-w-xs text-base leading-relaxed text-zinc-500 dark:text-zinc-500">
              {t("tagline")}
            </p>
          </div>

          {/* Sütun 2 — Keşfet */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-500">
              {t("exploreTitle")}
            </h3>
            <nav className="flex flex-col gap-3" aria-label={t("exploreTitle")}>
              <LocaleLink
                href="/"
                className="text-sm transition-colors hover:text-zinc-900 dark:hover:text-white"
              >
                {t("home")}
              </LocaleLink>
              <LocaleLink
                href="/services"
                className="text-sm transition-colors hover:text-zinc-900 dark:hover:text-white"
              >
                {t("services")}
              </LocaleLink>
              <LocaleLink
                href="/portfolio"
                className="text-sm transition-colors hover:text-zinc-900 dark:hover:text-white"
              >
                {t("portfolio")}
              </LocaleLink>
            </nav>
          </div>

          {/* Sütun 3 — Bağlantı (Yasal & Sosyal) */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-500">
              {t("connectTitle")}
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm transition-colors hover:text-zinc-900 dark:hover:text-white"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm transition-colors hover:text-zinc-900 dark:hover:text-white"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
                Twitter
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm transition-colors hover:text-zinc-900 dark:hover:text-white"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
              <LocaleLink
                href="/privacy"
                className="text-sm transition-colors hover:text-zinc-900 dark:hover:text-white"
              >
                {t("privacy")}
              </LocaleLink>
            </div>
          </div>

          {/* Sütun 4 — İletişim */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-500">
              {t("helloTitle")}
            </h3>
            <a
              href="mailto:hello@morfweb.com"
              className="block text-lg font-medium text-zinc-700 transition-colors hover:text-zinc-900 dark:text-zinc-200 dark:hover:text-white md:text-xl"
            >
              hello@morfweb.com
            </a>
            <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-500">{t("location")}</p>
          </div>
        </div>

        {/* Alt kısım — sadece copyright */}
        <div className="border-t border-zinc-200 pt-8 pb-8 dark:border-zinc-800/80">
          <p className="text-center text-xs text-zinc-500 dark:text-zinc-600">
            {t("copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}
