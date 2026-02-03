"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";

import { BlurReveal } from "@/components/BlurReveal";

const FAQ_IDS = [
  "duration",
  "process",
  "technologies",
  "pricing",
  "revisions",
  "support",
  "hosting",
  "confidentiality",
  "ownership",
  "maintenance",
] as const;

export function FAQ() {
  const [openId, setOpenId] = React.useState<string | null>(null);
  const t = useTranslations("FAQ");

  return (
    <section
      className="relative w-full bg-gradient-to-b from-zinc-100 to-zinc-50 py-24 text-zinc-900 dark:bg-gradient-to-b dark:from-black dark:to-zinc-950 dark:text-white"
      aria-label={t("title")}
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Küçük başlık — minimalist, Swiss Style */}
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-500">
          {t("title")}
        </p>

        {/* Büyük başlık — BlurReveal ile kelime kelime blur animasyonu */}
        <div
          className="mb-16 text-zinc-900 dark:text-white"
          style={{
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}
        >
          <BlurReveal
            text={t("heading")}
            block
            accentClassName="text-zinc-500 dark:text-zinc-400"
            delay={0.1}
          />
        </div>

        {/* Akordeon listesi — alttan yukarı sırayla giriş animasyonu */}
        <motion.ul
          className="divide-y divide-zinc-200 dark:divide-zinc-800"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ visible: {}, hidden: {} }}
        >
          {FAQ_IDS.map((id, index) => {
            const isOpen = openId === id;
            // Alttan yukarı: son öğe önce görünsün (ters sıra delay)
            const staggerDelay = (FAQ_IDS.length - 1 - index) * 0.06;
            return (
              <motion.li
                key={id}
                className="border-b border-zinc-200 dark:border-zinc-800"
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 28,
                    filter: "blur(8px)",
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    transition: {
                      duration: 0.45,
                      ease: [0.25, 0.1, 0.25, 1],
                      delay: staggerDelay,
                    },
                  },
                }}
              >
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : id)}
                  className="flex w-full items-center justify-between gap-4 py-6 text-left transition-colors hover:text-zinc-700 dark:hover:text-zinc-200"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${id}`}
                  id={`faq-question-${id}`}
                >
                  <span className="text-xl font-medium tracking-tight text-zinc-900 sm:text-2xl dark:text-white">
                    {t(`items.${id}.question`)}
                  </span>
                  <span
                    className="flex shrink-0 transition-transform duration-300 ease-out"
                    style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
                    aria-hidden
                  >
                    <PlusIcon className="h-6 w-6 text-zinc-500 dark:text-zinc-400" />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${id}`}
                      role="region"
                      aria-labelledby={`faq-question-${id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        height: { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] },
                        opacity: { duration: 0.25 },
                      }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 pr-12 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                        {t(`items.${id}.answer`)}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
}

function PlusIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}
