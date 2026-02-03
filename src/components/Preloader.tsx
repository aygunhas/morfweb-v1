"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";

const PREMIUM_EASE = [0.76, 0, 0.24, 1] as const;

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.06,
      staggerDirection: -1,
    },
  },
};

const wordVariants = {
  hidden: { y: 20, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: PREMIUM_EASE },
  },
  exit: {
    y: -24,
    opacity: 0,
    transition: { duration: 0.5, ease: PREMIUM_EASE },
  },
};

type Stage = "words" | "wordsOut" | "line" | "text" | "exit" | "done";

const WORD_KEYS = ["word1", "word2", "word3", "word4"] as const;

export function Preloader({ onComplete }: { onComplete?: () => void }) {
  const t = useTranslations("Preloader");
  const [stage, setStage] = React.useState<Stage>("words");

  React.useEffect(() => {
    const t1 = window.setTimeout(() => setStage("wordsOut"), 2200);
    const t2 = window.setTimeout(() => setStage("line"), 2800);
    const t3 = window.setTimeout(() => setStage("text"), 3600);
    const t4 = window.setTimeout(() => setStage("exit"), 6200);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, []);

  const handleExitComplete = React.useCallback(() => {
    setStage("done");
    onComplete?.();
  }, [onComplete]);

  if (stage === "done") return null;

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-zinc-50 dark:bg-zinc-950"
      initial={false}
      animate={stage === "exit" ? { y: "-100%" } : { y: 0 }}
      transition={{ duration: 0.85, ease: PREMIUM_EASE }}
      onAnimationComplete={stage === "exit" ? handleExitComplete : undefined}
    >
      {/* Light modda hafif gradient derinlik */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-zinc-100/50 via-transparent to-zinc-100/30 dark:from-zinc-900/30 dark:via-transparent dark:to-zinc-900/20"
        aria-hidden
      />

      <div className="relative flex flex-col items-center justify-center gap-8">
        {/* Sahne 1 & 2: Kelimeler — tema renkleri */}
        {(stage === "words" || stage === "wordsOut") && (
          <motion.div
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-4"
            variants={containerVariants}
            initial="hidden"
            animate={stage === "words" ? "show" : "exit"}
          >
            {WORD_KEYS.map((key) => (
              <motion.span
                key={key}
                variants={wordVariants}
                className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl md:text-3xl"
              >
                {t(key)}
              </motion.span>
            ))}
          </motion.div>
        )}

        {/* Sahne 3: Çizgi + Final metin */}
        <AnimatePresence mode="wait">
          {(stage === "line" || stage === "text" || stage === "exit") && (
            <motion.div
              key="line-text"
              className="flex flex-col items-center gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <motion.div
                className="h-[2px] bg-primary"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, ease: PREMIUM_EASE }}
                style={{ maxWidth: 320 }}
              />
              <div className="flex flex-col items-center gap-2">
                <motion.p
                  className="text-center text-sm font-medium tracking-[0.2em] text-muted-foreground"
                  initial={{ opacity: 0, y: 8 }}
                  animate={
                    stage === "text" || stage === "exit"
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 8 }
                  }
                  transition={{
                    duration: 0.5,
                    ease: PREMIUM_EASE,
                    delay: stage === "line" ? 0.85 : 0,
                  }}
                >
                  {t("slogan")}
                </motion.p>
                <motion.p
                  className="text-xl font-semibold tracking-[0.4em] text-foreground sm:text-2xl md:text-3xl"
                  initial={{ opacity: 0, y: 6 }}
                  animate={
                    stage === "text" || stage === "exit"
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 6 }
                  }
                  transition={{
                    duration: 0.5,
                    ease: PREMIUM_EASE,
                    delay: stage === "line" ? 1.05 : 0,
                  }}
                >
                  {t("tagline")}
                </motion.p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
