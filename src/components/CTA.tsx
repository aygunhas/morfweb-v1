"use client";

import * as React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

const MASK_RADIUS = 150; // ~300px çap

export function CTA() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [maskPos, setMaskPos] = React.useState({ x: 0, y: 0 });
  const t = useTranslations("CTA");

  const handleMouseMove = React.useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      setMaskPos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    },
    []
  );

  const handleMouseLeave = React.useCallback(() => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setMaskPos({
      x: rect.width / 2,
      y: rect.height / 2,
    });
  }, []);

  React.useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setMaskPos({ x: rect.width / 2, y: rect.height / 2 });
  }, []);

  const maskStyle = React.useMemo(
    () => ({
      maskImage: `radial-gradient(circle ${MASK_RADIUS}px at ${maskPos.x}px ${maskPos.y}px, transparent, white)`,
      WebkitMaskImage: `radial-gradient(circle ${MASK_RADIUS}px at ${maskPos.x}px ${maskPos.y}px, transparent, white)`,
    }),
    [maskPos.x, maskPos.y]
  );

  return (
    <section
      ref={containerRef}
      className="relative flex h-[80vh] w-full items-center justify-center overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      aria-label={t("heading")}
    >
      {/* En alt katman — Gizli dünya (soyut, teknolojik, renkli placeholder) */}
      <div
        className="absolute inset-0 bg-[#0a0a0f]"
        aria-hidden
      >
        <div
          className="absolute inset-0 opacity-90"
          style={{
            background: `
              radial-gradient(ellipse 80% 50% at 50% 120%, rgba(6, 182, 212, 0.35), transparent 50%),
              radial-gradient(ellipse 60% 40% at 80% 20%, rgba(139, 92, 246, 0.4), transparent 45%),
              radial-gradient(ellipse 50% 30% at 20% 80%, rgba(236, 72, 153, 0.25), transparent 40%),
              linear-gradient(180deg, #0a0a0f 0%, #1e1b4b 40%, #0f172a 100%)
            `,
          }}
        />
        {/* İnce grid overlay — teknolojik his */}
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      {/* Üst katman — light: açık, dark: koyu; fare ile delinen maske */}
      <div
        className="absolute inset-0 bg-zinc-100 transition-[mask-image] duration-100 ease-out dark:bg-zinc-950"
        style={{
          ...maskStyle,
          maskSize: "100% 100%",
          maskRepeat: "no-repeat",
          maskPosition: "0 0",
          WebkitMaskSize: "100% 100%",
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskPosition: "0 0",
        }}
        aria-hidden
      />

      {/* İçerik — her zaman üstte, tıklanabilir */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-8 px-4 text-center">
        <h2 className="text-6xl font-black tracking-tighter text-zinc-900 md:text-8xl dark:text-white">
          {t("heading")}
        </h2>
        <Link
          href="/contact"
          className="group inline-flex items-center gap-2 text-xl font-medium text-zinc-700 transition-colors hover:text-zinc-900 dark:text-white/90 dark:hover:text-white"
        >
          {t("button")}
          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
