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
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
        {/* Grid — mobil 2 sütun, md+ 4 sütun */}
        <div className="grid grid-cols-2 gap-10 py-12 sm:gap-12 sm:py-16 md:grid-cols-4 md:py-20">
          {/* Sütun 1 — Marka (mobilde tam genişlik) */}
          <div className="col-span-2 flex flex-col gap-2 md:col-span-1">
            <LocaleLink
              href="/"
              className="inline-block transition-opacity hover:opacity-90 active:opacity-80"
              aria-label="Morfweb Ana Sayfa"
            >
              <Image
                src="/morfweb-logo.svg"
                alt="Morfweb"
                width={240}
                height={62}
                className="h-12 w-auto sm:h-14 dark:brightness-0 dark:invert dark:opacity-90 md:h-16"
              />
            </LocaleLink>
            <p className="max-w-xs text-sm leading-relaxed text-zinc-500 sm:text-base dark:text-zinc-500">
              {t("tagline")}
            </p>
          </div>

          {/* Sütun 2 — Keşfet */}
          <div>
            <h3 className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-zinc-500 sm:mb-4 sm:text-xs dark:text-zinc-500">
              {t("exploreTitle")}
            </h3>
            <nav className="flex flex-col gap-1 sm:gap-3" aria-label={t("exploreTitle")}>
              <LocaleLink
                href="/"
                className="min-h-[44px] py-2.5 text-sm leading-none transition-colors hover:text-zinc-900 active:text-zinc-900 dark:hover:text-white dark:active:text-white sm:min-h-0 sm:py-0"
              >
                {t("home")}
              </LocaleLink>
              <LocaleLink
                href="/services"
                className="min-h-[44px] py-2.5 text-sm leading-none transition-colors hover:text-zinc-900 active:text-zinc-900 dark:hover:text-white dark:active:text-white sm:min-h-0 sm:py-0"
              >
                {t("services")}
              </LocaleLink>
              <LocaleLink
                href="/portfolio"
                className="min-h-[44px] py-2.5 text-sm leading-none transition-colors hover:text-zinc-900 active:text-zinc-900 dark:hover:text-white dark:active:text-white sm:min-h-0 sm:py-0"
              >
                {t("portfolio")}
              </LocaleLink>
            </nav>
          </div>

          {/* Sütun 3 — Bağlantı (Yasal & Sosyal) */}
          <div>
            <h3 className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-zinc-500 sm:mb-4 sm:text-xs dark:text-zinc-500">
              {t("connectTitle")}
            </h3>
            <div className="flex flex-col gap-1 sm:gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-2 py-2.5 text-sm transition-colors hover:text-zinc-900 active:text-zinc-900 dark:hover:text-white dark:active:text-white sm:min-h-0 sm:py-0"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4 shrink-0" />
                LinkedIn
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-2 py-2.5 text-sm transition-colors hover:text-zinc-900 active:text-zinc-900 dark:hover:text-white dark:active:text-white sm:min-h-0 sm:py-0"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4 shrink-0" />
                Twitter
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-2 py-2.5 text-sm transition-colors hover:text-zinc-900 active:text-zinc-900 dark:hover:text-white dark:active:text-white sm:min-h-0 sm:py-0"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4 shrink-0" />
                GitHub
              </a>
              <LocaleLink
                href="/privacy"
                className="min-h-[44px] py-2.5 text-sm leading-none transition-colors hover:text-zinc-900 active:text-zinc-900 dark:hover:text-white dark:active:text-white sm:min-h-0 sm:py-0"
              >
                {t("privacy")}
              </LocaleLink>
            </div>
          </div>

          {/* Sütun 4 — İletişim (mobilde tam genişlik) */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-zinc-500 sm:mb-4 sm:text-xs dark:text-zinc-500">
              {t("helloTitle")}
            </h3>
            <a
              href="mailto:hello@morfweb.com"
              className="block py-2.5 text-base font-medium text-zinc-700 transition-colors hover:text-zinc-900 active:text-zinc-900 dark:text-zinc-200 dark:hover:text-white dark:active:text-white sm:py-0 sm:text-lg md:text-xl"
            >
              hello@morfweb.com
            </a>
            <p className="mt-1 text-sm text-zinc-500 sm:mt-2 dark:text-zinc-500">{t("location")}</p>
          </div>
        </div>

        {/* Alt kısım — copyright */}
        <div className="border-t border-zinc-200 pt-6 pb-6 dark:border-zinc-800/80 sm:pt-8 sm:pb-8">
          <p className="text-center text-[11px] text-zinc-500 sm:text-xs dark:text-zinc-600">
            {t("copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}
