"use client";

import * as React from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

const DOT_SIZE = 8;
const RING_SIZE = 40;
const RING_OFFSET = RING_SIZE / 2;
const DOT_OFFSET = DOT_SIZE / 2;

const SPRING_CONFIG = { stiffness: 150, damping: 15 };

const RING_VARIANTS = {
  default: { scale: 1, backgroundColor: "transparent", borderWidth: 2 },
  hover: { scale: 1.5, backgroundColor: "transparent", borderWidth: 2 },
  view: { scale: 2, backgroundColor: "white", borderWidth: 0 },
};

export function CustomCursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const ringX = useSpring(mouseX, SPRING_CONFIG);
  const ringY = useSpring(mouseY, SPRING_CONFIG);

  const dotX = useTransform(mouseX, (v) => v - DOT_OFFSET);
  const dotY = useTransform(mouseY, (v) => v - DOT_OFFSET);
  const ringTranslateX = useTransform(ringX, (v) => v - RING_OFFSET);
  const ringTranslateY = useTransform(ringY, (v) => v - RING_OFFSET);

  const [isHover, setHover] = React.useState(false);
  const [cursorText, setCursorText] = React.useState("");
  const dotOpacity = useSpring(1, SPRING_CONFIG);

  React.useEffect(() => {
    const hideDot = cursorText || isHover;
    dotOpacity.set(hideDot ? 0 : 1);
  }, [cursorText, isHover, dotOpacity]);

  React.useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      const target = document.elementFromPoint(e.clientX, e.clientY);
      const viewElement = target?.closest('[data-cursor="view"]');
      if (viewElement) {
        setCursorText("İNCELE");
      } else {
        setCursorText("");
      }
      setHover(!!target?.closest("a, button, .cursor-hover"));
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [mouseX, mouseY]);

  const ringVariant = cursorText ? "view" : isHover ? "hover" : "default";

  return (
    <div
      className="pointer-events-none fixed left-0 top-0 z-[9999] hidden md:block"
      aria-hidden
    >
      {/* Küçük nokta — anlık takip */}
      <motion.div
        className="absolute size-2 rounded-full bg-zinc-900 dark:bg-white"
        style={{
          x: dotX,
          y: dotY,
          opacity: dotOpacity,
        }}
      />
      {/* Büyük halka — default / hover / view varyantları */}
      <motion.div
        className="absolute rounded-full border-2 border-zinc-900 dark:border-white"
        style={{
          width: RING_SIZE,
          height: RING_SIZE,
          x: ringTranslateX,
          y: ringTranslateY,
        }}
        animate={ringVariant}
        variants={RING_VARIANTS}
        transition={{ type: "spring", stiffness: 150, damping: 15 }}
      >
        {/* Hover (view değilken): içi dolu */}
        {!cursorText && isHover && (
          <span className="absolute inset-[2px] rounded-full bg-zinc-900 dark:bg-white" />
        )}
        {/* View: içinde "İNCELE" metni */}
        <AnimatePresence>
          {cursorText && (
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="absolute inset-0 flex select-none items-center justify-center px-1.5 text-[7px] font-bold tracking-widest text-black"
            >
              {cursorText}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
