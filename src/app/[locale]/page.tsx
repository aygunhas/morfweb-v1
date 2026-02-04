"use client";

import { BlurReveal } from "@/components/BlurReveal";
import { CTA } from "@/components/CTA";
import { ClientLogos } from "@/components/ClientLogos";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { PortfolioStream } from "@/components/PortfolioStream";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { ServicesScroll } from "@/components/ServicesScroll";

export default function Home() {
  return (
    <main>
      <Hero />

      {/* Slogan alanı — mobilde daha küçük tipografi */}
      <section className="bg-gradient-to-b from-white to-zinc-100 pb-8 pt-6 dark:from-zinc-950 dark:to-black sm:px-6 sm:pb-10 sm:pt-8 lg:px-8 lg:pb-12">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="text-left font-medium leading-[1.1] tracking-tight text-zinc-900 dark:text-white text-[clamp(2rem,8vw,3.875rem)] sm:text-[clamp(2.5rem,6vw,62px)]">
            <BlurReveal
              text="Tasarla. Geliştir. Yayınla."
              block
              accentClassName="text-foreground"
              delay={0.2}
            />
          </div>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Sürecin her adımında yanınızdayız. Fikirden yayına, uçtan uca dijital partneriniz.
          </p>
        </div>
      </section>

      <ServicesScroll />
      <PortfolioStream />
      <ClientLogos />
      <ProcessTimeline />
      <FAQ />
      <CTA />
    </main>
  );
}
