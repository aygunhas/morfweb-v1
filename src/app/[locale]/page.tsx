"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { BlurReveal } from "@/components/BlurReveal";
import { Hero3DBackground } from "@/components/Hero3DBackground";
import { ServicesScroll } from "@/components/ServicesScroll";

export default function Home() {
  const [isReady, setIsReady] = React.useState(false);

  return (
    <>
      {/* Hero Section */}
      <section className="relative flex min-h-[calc(100vh-64px)] items-center justify-center overflow-hidden">
        <Hero3DBackground onReady={setIsReady} />
        <div
          className={`relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-4 text-center transition-opacity duration-[2000ms] ease-in-out sm:px-6 lg:px-8 ${
            isReady ? "opacity-100" : "opacity-0"
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
              <Link href="#hizmetler">Hizmetlerimiz</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Slogan alanı — BlurReveal ile Chronicle HQ tarzı animasyon */}
      <div className="mx-auto max-w-7xl px-4 pt-4 pb-2 sm:px-6 lg:px-8 mb-2 lg:mb-6 sm:mb-4">
        <div
          className="text-left font-medium text-zinc-900 dark:text-white"
          style={{
            fontSize: "62px",
            lineHeight: "62px",
            letterSpacing: "-3.1px",
          }}
        >
          <BlurReveal
            text="Tasarla. Geliştir. Yayınla."
            block
            accentClassName="text-foreground"
            delay={0.2}
          />
        </div>
        <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">
          Sürecin her adımında yanınızdayız. Fikirden yayına, uçtan uca dijital partneriniz.
        </p>
      </div>

      <ServicesScroll />
    </>
  );
}
