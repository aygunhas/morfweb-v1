"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie } from "lucide-react";
import { Link } from "@/i18n/routing";

const STORAGE_KEY = "cookieConsent";

export function CookieConsent() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored !== null) return;

    const timer = window.setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const accept = React.useCallback(() => {
    if (typeof window === "undefined") return;
    localStorage.setItem(STORAGE_KEY, "true");
    setVisible(false);
  }, []);

  const reject = React.useCallback(() => {
    if (typeof window === "undefined") return;
    localStorage.setItem(STORAGE_KEY, "false");
    setVisible(false);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.98 }}
          transition={{
            duration: 0.4,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="fixed bottom-6 left-4 right-4 z-[9998] mx-auto w-full max-w-[400px] sm:left-8 sm:right-auto sm:bottom-8"
        >
          <div className="relative overflow-hidden rounded-2xl border border-zinc-200/60 bg-white/80 shadow-xl shadow-zinc-900/5 ring-1 ring-zinc-900/5 backdrop-blur-xl supports-[backdrop-filter]:bg-white/65 dark:border-zinc-700/50 dark:bg-zinc-900/80 dark:shadow-2xl dark:shadow-black/20 dark:ring-white/5 dark:supports-[backdrop-filter]:dark:bg-zinc-900/65">
            {/* Üst aksan çizgisi */}
            <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-300/80 to-transparent dark:via-zinc-600/50" />

            <div className="relative p-6">
              <div className="flex items-start gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-zinc-100 dark:bg-zinc-800/80">
                  <Cookie className="size-5 text-zinc-600 dark:text-zinc-300" aria-hidden />
                </div>
                <div className="min-w-0 flex-1">
                  <h2 className="text-base font-semibold tracking-tight text-zinc-900 dark:text-white">
                    Gizlilik tercihleriniz
                  </h2>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-zinc-600 dark:text-zinc-400">
                    Deneyiminizi iyileştirmek ve trafiği analiz etmek için
                    çerezleri kullanıyoruz. Tercihinizi aşağıdan seçebilirsiniz.{" "}
                    <Link
                      href="/privacy"
                      className="font-medium text-zinc-900 underline underline-offset-2 transition-colors hover:text-zinc-700 dark:text-white dark:hover:text-zinc-300"
                    >
                      Daha fazla bilgi
                    </Link>
                  </p>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
                <motion.button
                  type="button"
                  onClick={accept}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="rounded-xl bg-zinc-900 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:shadow-sm dark:hover:bg-zinc-100"
                >
                  Tümünü kabul et
                </motion.button>
                <motion.button
                  type="button"
                  onClick={reject}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="rounded-xl border border-zinc-300 bg-white/80 px-4 py-2.5 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-50 hover:border-zinc-400 dark:border-zinc-600 dark:bg-transparent dark:text-zinc-300 dark:hover:bg-zinc-800/80 dark:hover:border-zinc-500"
                >
                  Sadece gerekli
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
