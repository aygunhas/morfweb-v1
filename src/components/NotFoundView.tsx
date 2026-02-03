"use client";

import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Link as LocaleLink } from "@/i18n/routing";

interface NotFoundViewProps {
  title: string;
  code: string;
  message: string;
  backHome: string;
  goBack: string;
}

export function NotFoundView({ title, code, message, backHome, goBack }: NotFoundViewProps) {
  return (
    <main className="relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-background to-zinc-100 px-4 dark:to-zinc-950 sm:px-6 lg:px-8">
      {/* Arka plan — hafif grid / derinlik */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
        aria-hidden
      />

      <div className="relative z-10 flex max-w-2xl flex-col items-center text-center">
        {/* 404 — büyük, gradient, hafif animasyon */}
        <motion.p
          className="text-[clamp(6rem,18vw,12rem)] font-black leading-none tracking-tighter text-foreground/90"
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          aria-hidden
        >
          <span className="bg-gradient-to-b from-foreground via-zinc-600 to-foreground bg-clip-text text-transparent dark:via-zinc-400">
            {code}
          </span>
        </motion.p>

        <motion.h1
          className="mt-4 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {title}
        </motion.h1>

        <motion.p
          className="mt-3 max-w-md text-base leading-relaxed text-muted-foreground"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {message}
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <Button asChild size="lg" className="gap-2">
            <LocaleLink href="/" className="inline-flex items-center gap-2">
              <Home className="h-4 w-4" aria-hidden />
              {backHome}
            </LocaleLink>
          </Button>
          <Button asChild variant="outline" size="lg" className="gap-2">
            <Link
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.history.back();
              }}
              className="inline-flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden />
              {goBack}
            </Link>
          </Button>
        </motion.div>
      </div>
    </main>
  );
}
