"use client";

import * as React from "react";
import { motion, useScroll, useSpring, useTransform, useMotionValueEvent } from "framer-motion";
import { ArrowUp } from "lucide-react";

const SIZE = 60;
const CENTER = SIZE / 2;
const RADIUS = 22;
const STROKE_WIDTH = 3;

const SPRING_CONFIG = {
  stiffness: 100,
  damping: 30,
  restDelta: 0.001,
};

export function ScrollProgress() {
  const [visible, setVisible] = React.useState(false);
  const { scrollYProgress } = useScroll();
  const scrollProgressSpring = useSpring(scrollYProgress, SPRING_CONFIG);

  const opacity = useTransform(scrollYProgress, [0, 0.05], [0, 1]);
  const opacitySpring = useSpring(opacity, SPRING_CONFIG);

  useMotionValueEvent(opacitySpring, "change", (v) => {
    setVisible(v > 0.01);
  });

  const handleClick = React.useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <motion.button
      type="button"
      onClick={handleClick}
      className="fixed bottom-8 right-8 z-50 flex size-14 items-center justify-center rounded-full border-0 bg-white/10 shadow-lg backdrop-blur-sm transition-colors hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2 focus:ring-offset-transparent dark:bg-zinc-900/30 dark:hover:bg-zinc-900/50 dark:focus:ring-zinc-500"
      style={{
        opacity: opacitySpring,
        width: SIZE,
        height: SIZE,
        pointerEvents: visible ? "auto" : "none",
      }}
      initial={false}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Yukarı çık"
    >
      <svg
        className="-rotate-90 size-full"
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        aria-hidden
      >
        {/* Katman 1 — Track (silik gri halka) */}
        <circle
          cx={CENTER}
          cy={CENTER}
          r={RADIUS}
          fill="none"
          strokeWidth={STROKE_WIDTH}
          className="stroke-zinc-200 dark:stroke-zinc-800"
        />
        {/* Katman 2 — İlerleme halkası */}
        <motion.circle
          cx={CENTER}
          cy={CENTER}
          r={RADIUS}
          fill="none"
          strokeWidth={STROKE_WIDTH}
          strokeLinecap="round"
          className="stroke-zinc-900 dark:stroke-white"
          style={{
            pathLength: scrollProgressSpring,
          }}
        />
      </svg>
      <span className="absolute inset-0 flex items-center justify-center">
        <ArrowUp className="h-5 w-5 text-zinc-700 dark:text-zinc-200" strokeWidth={2.5} />
      </span>
    </motion.button>
  );
}
