"use client";

import { motion } from "framer-motion";
import { Linkedin, Instagram, Github } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-white text-zinc-900 dark:bg-zinc-950 dark:text-white">
      {/* Arka plan gradyan — light: hafif gri, dark: silik beyaz */}
      <div
        className="pointer-events-none absolute -left-[20%] -top-[20%] h-[80vmax] w-[80vmax] rounded-full bg-zinc-200/40 blur-3xl dark:bg-white/5"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-[30%] bottom-[10%] h-[60vmax] w-[60vmax] rounded-full bg-zinc-100/60 blur-3xl dark:bg-white/[0.03]"
        aria-hidden
      />

      <div className="relative container mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-16">
          {/* Sol sütun — bilgi alanı */}
          <div className="flex flex-col justify-center">
            <h1 className="text-5xl font-black tracking-tighter text-zinc-900 sm:text-6xl dark:text-white">
              <span className="block">BİRLİKTE</span>
              <span className="block">YARATALIM.</span>
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
              Markanızın dijital dönüşümünü başlatmaya hazır mısınız? Formu
              doldurun, 24 saat içinde dönüş yapalım.
            </p>

            {/* İletişim detayları */}
            <div className="mt-10 space-y-5 sm:mt-12 sm:space-y-6">
              <div>
                <p className="mb-1 text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-500">
                  E-posta
                </p>
                <a
                  href="mailto:hello@morfweb.com"
                  className="inline-block border-b border-zinc-400 text-lg font-medium text-zinc-900 transition-colors hover:border-zinc-900 hover:text-zinc-900 dark:border-zinc-600 dark:text-white dark:hover:border-white dark:hover:text-white"
                >
                  hello@morfweb.com
                </a>
              </div>
              <div>
                <p className="mb-1 text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-500">
                  Telefon
                </p>
                <a
                  href="tel:+905550000000"
                  className="text-lg text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                >
                  +90 (555) 000 00 00
                </a>
              </div>
              <div>
                <p className="mb-3 text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-500">
                  Sosyal Medya
                </p>
                <div className="flex items-center gap-4">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Sağ sütun — form (animasyonlu) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="flex w-full items-start justify-center lg:justify-end"
          >
            <div className="w-full min-w-0 max-w-xl">
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
