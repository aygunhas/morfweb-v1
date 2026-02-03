"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { BarChart3, SearchCheck, Rocket } from "lucide-react";
import {
  TECH_ICONS_BY_SLUG,
  FALLBACK_HEX,
  isLightHex,
} from "@/lib/tech-icons";

const STEPS_COUNT = 5;
const VH_PER_STOP = 100; // her durak 100vh
/** Bir durak değiştirdikten sonra bu süre boyunca yeni durak değişimi yok (aynı hareketin diğer wheel'leri yutulur) */
const LOCKOUT_AFTER_STEP_MS = 280;

type ProcessStep = {
  id: string;
  title: string;
  description: string;
  techSlugs?: string[];
  visual?: "chart" | "code" | "checklist" | "rocket";
  /** Statik görsel (JPG/PNG veya hareketli GIF) */
  imageSrc?: string;
  imageAlt?: string;
  /** Loop video (MP4/WebM) — imageSrc varsa video öncelikli oynatılır */
  videoSrc?: string;
};

const PROCESS_STEPS: ProcessStep[] = [
  {
    id: "analiz",
    title: "Analiz & Strateji",
    description:
      "Projenizin rotasını birlikte çiziyoruz. Pazar ve rakip analizi, hedef kitle araştırması ve veri odaklı strateji ile doğru temeli atıyoruz. Nereye gideceğinizi netleştiriyoruz.",
    techSlugs: ["googleanalytics", "miro", "notion"],
    videoSrc: "/analiz-video.mp4",
    imageAlt: "Analiz ve strateji",
    visual: "chart",
  },
  {
    id: "tasarim",
    title: "Tasarım & UI/UX",
    description:
      "Estetik ile işlevi bir arada düşünüyoruz. Kullanıcı deneyimini ön planda tutan arayüz tasarımı, wireframe’den prototipe kadar tüm süreçte markanızı doğru yansıtıyoruz.",
    videoSrc: "/tasarım-video.mp4",
    imageAlt: "Tasarım ve UI/UX",
    techSlugs: ["figma"],
  },
  {
    id: "kod",
    title: "Geliştirme & Kodlama",
    description:
      "Next.js ve modern mimari ile ölçeklenebilir, okunabilir ve sürdürülebilir kod yazıyoruz. Performans ve SEO’yu gözeten, bakımı kolay bir altyapı kuruyoruz.",
    techSlugs: ["php", "mysql", "html5", "css", "tailwindcss", "bootstrap", "nextdotjs", "react", "typescript"],
    videoSrc: "/kodlama-video.mp4",
    imageAlt: "Geliştirme ve kodlama",
    visual: "code",
  },
  {
    id: "test",
    title: "Test & Kalite Güvencesi",
    description:
      "Sıfır hata hedefiyle çalışıyoruz. Performans testleri, güvenlik taramaları ve çapraz tarayıcı kontrolleri ile ürününüzün yayına hazır olduğundan emin oluyoruz.",
    techSlugs: ["jest", "eslint", "lighthouse"],
    videoSrc: "/test-video.mp4",
    imageAlt: "Test ve kalite güvencesi",
    visual: "checklist",
  },
  {
    id: "yayin",
    title: "Yayına Alma & Canlıya Geçiş",
    description:
      "Sunucu kurulumu, domain ve SSL yapılandırması, CI/CD ile kesintisiz entegrasyon. Projenizi güvenle canlıya alıyoruz ve gerekirse sonrasında da yanınızda oluyoruz.",
    techSlugs: ["vercel", "githubactions", "docker"],
    visual: "rocket",
    videoSrc: "/yayin-video.mp4",
  },
];

function StepVisual({ step }: { step: ProcessStep }) {
  if (step.videoSrc) {
    return (
      <div className="relative aspect-[4/3] w-full max-w-md overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900">
        <video
          src={step.videoSrc}
          className="h-full w-full object-cover grayscale-[20%]"
          loop
          muted
          autoPlay
          playsInline
          aria-label={step.imageAlt ?? step.title}
        />
      </div>
    );
  }
  if (step.imageSrc) {
    return (
      <div className="relative aspect-[4/3] w-full max-w-md overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900">
        <Image
          src={step.imageSrc}
          alt={step.imageAlt ?? step.title}
          fill
          className="object-cover grayscale-[20%]"
          sizes="50vw"
          unoptimized={step.imageSrc.endsWith(".gif")}
        />
      </div>
    );
  }
  if (step.visual === "chart") {
    return (
      <div className="flex aspect-[4/3] w-full max-w-md items-end justify-center gap-2 rounded-2xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900/50">
        <BarChart3 className="absolute right-6 top-6 h-8 w-8 text-zinc-400/60" />
        <div className="flex flex-1 items-end gap-2">
          {[40, 65, 45, 80, 55, 70, 50].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t bg-zinc-300 dark:bg-zinc-600"
              style={{ height: `${h}%`, minHeight: 24 }}
            />
          ))}
        </div>
      </div>
    );
  }
  if (step.visual === "code") {
    return (
      <div className="aspect-[4/3] w-full max-w-md overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-900 dark:border-zinc-800">
        <div className="flex h-full flex-col p-4 font-mono text-sm">
          <div className="mb-3 flex gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-zinc-500" />
            <span className="h-2.5 w-2.5 rounded-full bg-zinc-500" />
            <span className="h-2.5 w-2.5 rounded-full bg-zinc-500" />
          </div>
          <pre className="text-zinc-400">
            <code>{`// Next.js — ölçeklenebilir mimari\nexport default function Page() { ... }`}</code>
          </pre>
        </div>
      </div>
    );
  }
  if (step.visual === "checklist") {
    return (
      <div className="flex aspect-[4/3] w-full max-w-md items-center justify-center rounded-2xl border border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/50">
        <SearchCheck className="h-24 w-24 text-zinc-400 dark:text-zinc-500" strokeWidth={1} />
      </div>
    );
  }
  if (step.visual === "rocket") {
    return (
      <div className="flex aspect-[4/3] w-full max-w-md items-center justify-center rounded-2xl border border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/50">
        <Rocket className="h-24 w-24 text-zinc-400 dark:text-zinc-500" strokeWidth={1} />
      </div>
    );
  }
  return null;
}

function TechLogos({ slugs }: { slugs: string[] }) {
  const [hoveredSlug, setHoveredSlug] = React.useState<string | null>(null);
  if (!slugs?.length) return null;
  return (
    <div
      className="mt-4 flex flex-wrap items-center gap-4"
      aria-label="Kullanılan teknolojiler"
      style={{ isolation: "isolate" as const }}
    >
      {slugs.map((slug) => {
        const icon = TECH_ICONS_BY_SLUG[slug];
        if (!icon) return null;
        const hex = (icon.hex || FALLBACK_HEX[slug] || "#71717a").replace(/^#/, "").slice(0, 6);
        const hexFull = `#${hex}`;
        const isHovered = hoveredSlug === slug;
        const iconFill = isLightHex(hexFull) ? "#0a0a0a" : "#ffffff";
        const baseGlow = `0 0 14px #${hex}80, 0 0 28px #${hex}50`;
        const hoverGlow = `0 0 20px #${hex}cc, 0 0 40px #${hex}99, 0 0 60px #${hex}66`;
        return (
          <span
            key={slug}
            className="process-timeline-tech-logo group flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border-0 p-2.5 transition-all duration-300 ease-out hover:scale-110"
            style={{
              backgroundColor: hexFull,
              boxShadow: isHovered ? hoverGlow : baseGlow,
              ["--logo-bg" as string]: hexFull,
              ["--logo-glow" as string]: isHovered ? hoverGlow : baseGlow,
            }}
            title={icon.title}
            onMouseEnter={() => setHoveredSlug(slug)}
            onMouseLeave={() => setHoveredSlug(null)}
          >
            <svg
              role="img"
              viewBox="0 0 24 24"
              className="h-full w-full shrink-0 transition-transform duration-300 group-hover:scale-105"
              fill={iconFill}
              style={{ fill: iconFill }}
              aria-hidden
            >
              <path d={icon.path} />
            </svg>
          </span>
        );
      })}
    </div>
  );
}

export function ProcessTimeline() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const isScrollingToStopRef = React.useRef(false);
  const lockoutUntilRef = React.useRef(0);

  // Scroll pozisyonundan hangi durakta olduğumuzu senkronize et (bölüme dışarıdan scroll ile girildiğinde)
  React.useEffect(() => {
    const syncActiveIndex = () => {
      if (isScrollingToStopRef.current || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const containerTop = rect.top + window.scrollY;
      const scrollIntoSection = window.scrollY - containerTop;
      const vhPx = window.innerHeight * (VH_PER_STOP / 100);
      const raw = scrollIntoSection / vhPx;
      const index = Math.max(0, Math.min(STEPS_COUNT - 1, Math.round(raw)));
      setActiveIndex(index);
    };
    window.addEventListener("scroll", syncActiveIndex, { passive: true });
    syncActiveIndex();
    return () => window.removeEventListener("scroll", syncActiveIndex);
  }, []);

  // Wheel: sadece bir sonraki veya bir önceki durağa git, atlama yok
  React.useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onWheel = (e: WheelEvent) => {
      const now = Date.now();
      if (isScrollingToStopRef.current) {
        e.preventDefault();
        return;
      }
      const rect = container.getBoundingClientRect();
      const inView =
        rect.top <= window.innerHeight * 0.5 && rect.bottom >= window.innerHeight * 0.5;
      if (!inView) return;

      const containerTop = rect.top + window.scrollY;
      const vhPx = window.innerHeight * (VH_PER_STOP / 100);
      const currentStop = Math.round((window.scrollY - containerTop) / vhPx);
      const clampedStop = Math.max(0, Math.min(STEPS_COUNT - 1, currentStop));

      if (e.deltaY > 0) {
        if (clampedStop >= STEPS_COUNT - 1) return;
        e.preventDefault();
        if (now < lockoutUntilRef.current) return;
        lockoutUntilRef.current = now + LOCKOUT_AFTER_STEP_MS;
        isScrollingToStopRef.current = true;
        const targetScroll = containerTop + (clampedStop + 1) * vhPx;
        setActiveIndex(clampedStop + 1);
        window.scrollTo({ top: targetScroll, behavior: "smooth" });
        setTimeout(() => {
          isScrollingToStopRef.current = false;
        }, 550);
      } else if (e.deltaY < 0) {
        if (clampedStop <= 0) return;
        e.preventDefault();
        if (now < lockoutUntilRef.current) return;
        lockoutUntilRef.current = now + LOCKOUT_AFTER_STEP_MS;
        isScrollingToStopRef.current = true;
        const targetScroll = containerTop + (clampedStop - 1) * vhPx;
        setActiveIndex(clampedStop - 1);
        window.scrollTo({ top: targetScroll, behavior: "smooth" });
        setTimeout(() => {
          isScrollingToStopRef.current = false;
        }, 550);
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, []);

  const progressLineHeight = `${(activeIndex / (STEPS_COUNT - 1)) * 100}%`;

  return (
    <section className="relative border-t border-zinc-200 bg-gradient-to-b from-white to-zinc-100 dark:border-zinc-800 dark:from-zinc-900 dark:to-black">
      {/* Ana kapsayıcı — adım başı ~100vh (500vh toplam), her içerikte tek tek durur */}
      <div ref={containerRef} className="h-[500vh]">
        {/* Sticky görünüm alanı — tüm aksiyon burada */}
        <div className="sticky top-0 left-0 h-screen w-full overflow-hidden">
          <div className="relative flex h-full w-full items-center justify-center">
          {/* Merkezi çizgi — arka plan (tam yol) */}
          <div
            className="absolute left-1/2 top-0 h-full w-[1px] -translate-x-1/2 bg-zinc-200 dark:bg-zinc-800"
            aria-hidden
          />
          {/* Progress line — durağa göre dolan kısım */}
          <div
            className="absolute left-1/2 top-0 w-[1px] -translate-x-1/2 bg-gradient-to-b from-primary/90 via-primary/60 to-primary/30 transition-[height] duration-500 ease-out dark:from-primary/70 dark:via-primary/50 dark:to-primary/30"
            style={{ height: progressLineHeight }}
            aria-hidden
          />

          {/* Kartlar — absolute, üst üste, sadece aktif olan görünür */}
          <div className="relative mx-auto flex h-full w-full max-w-6xl items-center justify-center px-4">
            {PROCESS_STEPS.map((step, i) => {
              const isActive = activeIndex === i;
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={step.id}
                  className="absolute inset-0 flex items-center justify-center"
                  style={{
                    opacity: isActive ? 1 : 0,
                    filter: isActive ? "blur(0px)" : "blur(20px)",
                    scale: isActive ? 1 : 0.8,
                    pointerEvents: isActive ? "auto" : "none",
                    transition: "opacity 500ms ease, filter 500ms ease, transform 500ms ease",
                  }}
                >
                  <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
                    {/* Zig-Zag: Çift (0,2,4) → metin solda, görsel sağda; Tek (1,3) → görsel solda, metin sağda */}
                    {isEven ? (
                      <>
                        <div className="flex flex-col justify-center pr-4 text-left md:pr-12 md:justify-center">
                          <h3 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl lg:text-4xl">
                            {step.title}
                          </h3>
                          <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                            {step.description}
                          </p>
                          <TechLogos slugs={step.techSlugs ?? []} />
                        </div>
                        <div className="flex items-center justify-center">
                          <StepVisual step={step} />
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="flex items-center justify-center order-2 md:order-1">
                          <StepVisual step={step} />
                        </div>
                        <div className="flex flex-col justify-center pl-4 text-left order-1 md:order-2 md:pl-12 md:justify-center">
                          <h3 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl lg:text-4xl">
                            {step.title}
                          </h3>
                          <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                            {step.description}
                          </p>
                          <TechLogos slugs={step.techSlugs ?? []} />
                        </div>
                      </>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
