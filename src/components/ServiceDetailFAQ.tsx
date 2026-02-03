"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";

export type FAQItem = { question: string; answer: string };

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

export function ServiceDetailFAQ({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <ul className="divide-y divide-zinc-200 dark:divide-zinc-800">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <li
            key={index}
            className="border-b border-zinc-200 dark:border-zinc-800 last:border-b-0"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition-colors hover:text-zinc-700 dark:hover:text-zinc-200"
              aria-expanded={isOpen}
              aria-controls={`service-faq-answer-${index}`}
              id={`service-faq-question-${index}`}
            >
              <span className="text-lg font-medium tracking-tight text-zinc-900 dark:text-white">
                {item.question}
              </span>
              <span
                className="flex shrink-0 transition-transform duration-300 ease-out text-zinc-500 dark:text-zinc-400"
                style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
                aria-hidden
              >
                <PlusIcon className="h-5 w-5" />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`service-faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`service-faq-question-${index}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{
                    height: { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] },
                    opacity: { duration: 0.25 },
                  }}
                  className="overflow-hidden px-5"
                >
                  <p className="pb-5 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        );
      })}
    </ul>
  );
}
