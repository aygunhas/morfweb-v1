"use client";

import * as React from "react";

const RADIUS = 320;
const MASK_BLACK = "black 8%";
const MASK_TRANSPARENT = "transparent 75%";

export type SpotlightTextProps = {
  text: string;
  className?: string;
};

const MOUSE_LEAVE = -9999;

export function SpotlightText({ text, className = "" }: SpotlightTextProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = React.useState({ x: MOUSE_LEAVE, y: MOUSE_LEAVE });
  const [isDesktop, setIsDesktop] = React.useState(false);

  React.useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    setIsDesktop(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const handleMouseMove = React.useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      setMouse({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    },
    []
  );

  const handleMouseLeave = React.useCallback(() => {
    setMouse({ x: MOUSE_LEAVE, y: MOUSE_LEAVE });
  }, []);

  const hasMouse = mouse.x !== MOUSE_LEAVE || mouse.y !== MOUSE_LEAVE;
  const maskStyle =
    isDesktop && hasMouse
      ? {
          maskImage: `radial-gradient(circle ${RADIUS}px at ${mouse.x}px ${mouse.y}px, ${MASK_BLACK}, ${MASK_TRANSPARENT})`,
          WebkitMaskImage: `radial-gradient(circle ${RADIUS}px at ${mouse.x}px ${mouse.y}px, ${MASK_BLACK}, ${MASK_TRANSPARENT})`,
          maskSize: "100% 100%",
          WebkitMaskSize: "100% 100%",
        }
      : isDesktop
        ? {
            maskImage: "radial-gradient(circle 0px at 0 0, transparent, transparent)",
            WebkitMaskImage: "radial-gradient(circle 0px at 0 0, transparent, transparent)",
            maskSize: "100% 100%",
            WebkitMaskSize: "100% 100%",
          }
        : {
            maskImage: "none",
            WebkitMaskImage: "none",
          };

  const baseClass =
    "pointer-events-none select-none text-7xl font-black leading-[0.95] tracking-tighter md:text-9xl";

  return (
    <div
      ref={containerRef}
      className={`relative inline-block cursor-default ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      aria-hidden
    >
      {/* Katman 1 — İskelet (outline), akışta boyut verir, her zaman görünür */}
      <span
        className={`inline-block ${baseClass}`}
        style={{
          color: "transparent",
          WebkitTextStroke: "1px var(--spotlight-stroke)",
        }}
      >
        {text}
      </span>

      {/* Katman 2 — Dolgu, maske ile veya mobilde tam görünür (tema uyumlu) */}
      <span
        className={`absolute left-0 top-0 ${baseClass} text-zinc-900 dark:text-white transition-[mask-image] duration-150`}
        style={maskStyle}
      >
        {text}
      </span>
    </div>
  );
}
