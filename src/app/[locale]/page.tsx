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

      {/* Slogan alanı — alt boşluk section padding ile; gradient bütünlüğü korunur */}
      <section className="bg-gradient-to-b from-white to-zinc-100 pb-8 pt-4 dark:from-zinc-950 dark:to-black sm:pb-10 lg:pb-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
