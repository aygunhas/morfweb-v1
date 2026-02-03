"use client";

import { motion } from "framer-motion";

const PAGE_TRANSITION = {
  initial: {
    y: 20,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
  transition: {
    duration: 0.75,
    ease: [0.76, 0, 0.24, 1],
  },
} as const;

export default function Template({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <motion.div
      initial={PAGE_TRANSITION.initial}
      animate={PAGE_TRANSITION.animate}
      transition={PAGE_TRANSITION.transition}
    >
      {children}
    </motion.div>
  );
}
