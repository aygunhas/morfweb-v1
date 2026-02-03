"use client";

import * as React from "react";
import { SpotlightText } from "@/components/SpotlightText";

const HERO_TITLE = "DİJİTAL MİMARİ & ÇÖZÜMLER";

export function ServicesHero() {
  return (
    <section
      className="relative flex min-h-[45vh] flex-col items-center justify-center overflow-hidden bg-zinc-100 dark:bg-zinc-950 sm:min-h-[55vh] md:min-h-[60vh] lg:min-h-[70vh]"
      aria-label="Hizmetler giriş"
    >
      {/* Grid deseni — light: koyu çizgiler, dark: açık çizgiler */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06] dark:hidden"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0,0,0,0.12) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.12) 1px, transparent 1px)
          `,
          backgroundSize: "32px 32px",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 hidden opacity-[0.05] dark:block"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px)
          `,
          backgroundSize: "32px 32px",
        }}
        aria-hidden
      />

      <div className="container relative z-10 mx-auto flex min-h-[45vh] w-full flex-col items-center justify-center px-4 py-12 pb-10 sm:min-h-[55vh] sm:px-6 sm:py-16 sm:pb-12 md:min-h-[60vh] lg:min-h-[70vh] lg:px-8 lg:py-20 lg:pb-14">
        {/* Başlık tüm alanı kaplıyor — tek sütun, ortalanmış */}
        <div className="flex w-full flex-col items-center justify-center text-center">
          <h1 className="w-full max-w-6xl">
            <SpotlightText
              text={HERO_TITLE}
              className="block w-full text-center"
            />
          </h1>
        </div>
      </div>

      {/* Alt kenar — tema arka planına yumuşak geçiş */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-zinc-100 to-transparent dark:from-zinc-950 dark:to-transparent"
        aria-hidden
      />
    </section>
  );
}
