"use client";

import * as React from "react";
import {
  Building2,
  Sparkles,
  Box,
  Globe,
  Zap,
  Code2,
  type LucideIcon,
} from "lucide-react";

import { motion } from "framer-motion";
import { BlurReveal } from "@/components/BlurReveal";

const CLIENTS: { name: string; icon: LucideIcon }[] = [
  { name: "TechCorp", icon: Building2 },
  { name: "Solvia", icon: Sparkles },
  { name: "Vexel", icon: Box },
  { name: "Nexus", icon: Globe },
  { name: "Volt", icon: Zap },
  { name: "DevStack", icon: Code2 },
];

function LogoItem({
  name,
  icon: Icon,
}: { name: string; icon: LucideIcon }) {
  return (
    <div
      className="flex shrink-0 items-center gap-3 rounded-xl border border-transparent px-8 py-4 transition-all duration-300 grayscale opacity-50 hover:grayscale-0 hover:opacity-100"
      aria-hidden
    >
      <Icon className="h-8 w-8 text-foreground" strokeWidth={1.5} />
      <span className="text-lg font-semibold tracking-tight text-foreground">
        {name}
      </span>
    </div>
  );
}

export function ClientLogos() {
  const duplicated = [...CLIENTS, ...CLIENTS];

  return (
    <section className="border-t border-zinc-200 bg-gradient-to-b from-zinc-50 to-white py-12 dark:border-zinc-800 dark:from-zinc-950 dark:to-zinc-900">
      <div className="mx-auto max-w-2xl px-4 text-center">
        <BlurReveal
          text="Bize Güvenen"
          className="mb-4 block text-[10px] font-semibold uppercase tracking-[0.35em] text-muted-foreground"
          delay={0}
        />
        <h2 className="relative inline-block text-2xl font-semibold tracking-tight sm:text-3xl">
          <motion.span
            initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
            className="inline-block"
          >
            <span className="bg-gradient-to-r from-foreground via-zinc-600 to-foreground dark:via-zinc-400 bg-clip-text text-transparent">
              Markalar
            </span>
          </motion.span>
          <span
            className="absolute -bottom-1 left-1/2 block h-px w-16 -translate-x-1/2 bg-gradient-to-r from-transparent via-foreground/60 to-transparent"
            aria-hidden
          />
        </h2>
      </div>
      <div className="relative mt-8 overflow-hidden">
        {/* Sol fade-out mask */}
        <div
          className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-background to-transparent"
          aria-hidden
        />
        {/* Sağ fade-out mask */}
        <div
          className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-background to-transparent"
          aria-hidden
        />
        <div className="flex w-max animate-marquee gap-4">
          {duplicated.map((client, i) => (
            <LogoItem key={`${client.name}-${i}`} name={client.name} icon={client.icon} />
          ))}
        </div>
      </div>
    </section>
  );
}
