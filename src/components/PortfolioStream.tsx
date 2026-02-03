"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { BlurReveal } from "@/components/BlurReveal";

export type PortfolioItem = {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
};

const portfolioItems: PortfolioItem[] = [
  {
    id: "1",
    title: "Morfweb",
    category: "Kurumsal Web",
    imageUrl:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
  },
  {
    id: "2",
    title: "TechHub",
    category: "E-Ticaret",
    imageUrl:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
  },
  {
    id: "3",
    title: "Nexus App",
    category: "Mobil Uygulama",
    imageUrl:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
  },
  {
    id: "4",
    title: "Ventura",
    category: "Landing Page",
    imageUrl:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
  },
  {
    id: "5",
    title: "Flow Dashboard",
    category: "Yönetim Paneli",
    imageUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  },
  {
    id: "6",
    title: "Artisan",
    category: "Portfolyo",
    imageUrl:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  },
  {
    id: "7",
    title: "Pulse",
    category: "SaaS",
    imageUrl:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
  },
  {
    id: "8",
    title: "Greenway",
    category: "E-Ticaret",
    imageUrl:
      "https://images.unsplash.com/photo-1556742111-a301172d8d73?w=800&q=80",
  },
  {
    id: "9",
    title: "Stellar",
    category: "Kurumsal Web",
    imageUrl:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80",
  },
];

function PortfolioCard({
  item,
  index,
}: {
  item: PortfolioItem;
  index: number;
}) {
  return (
    <motion.article
      className="portfolio-card group relative flex h-[200px] w-[320px] shrink-0 cursor-pointer overflow-hidden rounded-xl bg-zinc-900 shadow-sm sm:h-[220px] sm:w-[360px] md:h-[250px] md:w-[400px]"
      aria-label={`Proje: ${item.title}, ${item.category}`}
      initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      whileHover={{
        y: -6,
        scale: 1.02,
        boxShadow:
          "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
        transition: { duration: 0.25, ease: [0.25, 0.1, 0.25, 1] },
      }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.04,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      <Image
        src={item.imageUrl}
        alt=""
        fill
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        sizes="(max-width: 640px) 320px, (max-width: 768px) 360px, 400px"
      />
      {/* Hover: hafif koyu overlay */}
      <div
        className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10"
        aria-hidden
      />
      {/* Sol alt köşe — koyu overlay + metin */}
      <div
        className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-4 transition-all duration-300 group-hover:from-black/90"
        aria-hidden
      >
        <p className="text-sm font-medium text-white/90 transition-transform duration-300 group-hover:translate-x-0.5">
          {item.title}
        </p>
        <p className="text-xs text-white/70">{item.category}</p>
      </div>
    </motion.article>
  );
}

type StripDirection = "right" | "left";
type StripSpeed = "normal" | "slow";

function PortfolioStrip({
  items,
  direction,
  speed,
}: {
  items: PortfolioItem[];
  direction: StripDirection;
  speed: StripSpeed;
}) {
  const duplicated = React.useMemo(() => [...items, ...items], [items]);
  const animationClass =
    direction === "right" ? "animate-portfolio-right" : "animate-portfolio-left";

  return (
    <div className="portfolio-strip relative overflow-hidden py-2">
      {/* Sol kenar — bölüm arka planıyla uyumlu fade */}
      <div
        className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-zinc-50 to-transparent dark:from-zinc-950"
        aria-hidden
      />
      {/* Sağ kenar — bölüm arka planıyla uyumlu fade */}
      <div
        className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-zinc-100 to-transparent dark:from-zinc-900"
        aria-hidden
      />
      <div
        className={`portfolio-strip-inner flex w-max gap-6 ${animationClass}`}
      >
        {duplicated.map((item, index) => (
          <PortfolioCard
            key={`${item.id}-${direction}-${index}`}
            item={item}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

/** Alt şerit için sabit sıra (SSR/client eşleşmesi için random kullanılmıyor) */
const portfolioItemsReversed = [...portfolioItems].reverse();

export function PortfolioStream() {
  return (
    <section
      className="border-t border-zinc-200 bg-gradient-to-b from-zinc-100 to-zinc-50 py-16 dark:border-zinc-800 dark:from-zinc-900 dark:to-zinc-950"
      aria-labelledby="portfolio-stream-heading"
    >
      <div className="mx-auto mb-10 max-w-2xl px-4 text-center sm:px-6 lg:px-8">
        <BlurReveal
          text="Fikirden ekrana"
          className="mb-4 block text-[10px] font-semibold uppercase tracking-[0.35em] text-muted-foreground"
          delay={0}
        />
        <h2
          id="portfolio-stream-heading"
          className="relative inline-block text-2xl font-semibold tracking-tight sm:text-3xl"
        >
          <motion.span
            initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
            className="inline-block"
          >
            <span className="bg-gradient-to-r from-foreground via-zinc-600 to-foreground dark:via-zinc-400 bg-clip-text text-transparent">
              Projeler
            </span>
          </motion.span>
          <span
            className="absolute -bottom-1 left-1/2 block h-px w-16 -translate-x-1/2 bg-gradient-to-r from-transparent via-foreground/60 to-transparent"
            aria-hidden
          />
        </h2>
      </div>

      <div className="portfolio-stream flex w-full flex-col gap-8">
        <PortfolioStrip
          items={portfolioItems}
          direction="right"
          speed="normal"
        />
        <PortfolioStrip
          items={portfolioItemsReversed}
          direction="left"
          speed="slow"
        />
      </div>
    </section>
  );
}
