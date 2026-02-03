"use client";

import * as React from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Hero3DBackground } from "@/components/Hero3DBackground";
import { usePreloader } from "@/components/PreloaderGate";
import { Link } from "@/i18n/routing";

export function Hero() {
  const { isComplete: preloaderComplete } = usePreloader();
  const [is3DReady, set3DReady] = React.useState(false);
  const canShowContent = preloaderComplete && is3DReady;

  return (
    <section className="relative flex min-h-[calc(100vh-64px)] items-center justify-center overflow-hidden">
      <Hero3DBackground onReady={set3DReady} />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent dark:from-zinc-950 dark:to-transparent"
        aria-hidden
      />
      <div
        className={`relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-4 text-center transition-opacity duration-[2000ms] ease-in-out sm:px-6 lg:px-8 ${
          canShowContent ? "opacity-100" : "opacity-0"
        }`}
      >
        <h1 className="text-5xl font-extrabold leading-tight tracking-tight text-foreground md:text-7xl">
          Modern Web ve Mobil
          <br />
          <span className="bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-500 dark:from-white dark:via-zinc-200 dark:to-zinc-400 bg-clip-text text-transparent">
            Uygulama Çözümleri.
          </span>
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          İşletmeniz için hızlı, güvenli ve yönetim panelli web siteleri geliştiriyoruz.
          <br />
          Karmaşık süreçlerle değil, işinize değer katan sonuçlarla ilgileniyoruz.
        </p>
        <div className="mt-8 flex w-full flex-col gap-4 sm:flex-row sm:justify-center">
          <Button asChild size="lg" className="w-full sm:w-auto">
            <Link href="/contact">
              Projeye Başla
              <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
            <Link href="/services">Hizmetlerimiz</Link>
          </Button>
        </div>
      </div>

      {/* Scroll Down indikatörü — ekranın en altında, ortalanmış */}
      <div
        className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 pointer-events-none"
        aria-hidden
      >
        {/* Mouse gövdesi */}
        <div className="flex h-10 w-6 flex-shrink-0 items-start justify-center rounded-full border-2 border-zinc-400/50 pt-2 dark:border-white/30">
          <motion.div
            className="h-2 w-1 rounded-full bg-zinc-600 dark:bg-white/90"
            animate={{ y: [0, 14, 0] }}
            transition={{
              repeat: Infinity,
              duration: 1.8,
              ease: "easeInOut",
            }}
          />
        </div>
        <p className="text-[10px] font-medium tracking-[0.3em] text-zinc-500 animate-pulse dark:text-white/70">
          SCROLL
        </p>
      </div>
    </section>
  );
}
