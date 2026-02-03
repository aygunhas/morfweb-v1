"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Monitor,
  ShoppingBag,
  Database,
  Smartphone,
  PenTool,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/button";

export type SpotlightService = {
  id: string;
  icon: LucideIcon;
  title: string;
  tagline: string;
  details: string[];
};

const servicesData: SpotlightService[] = [
  {
    id: "kurumsal-web",
    icon: Monitor,
    title: "Kurumsal Web Tasarım",
    tagline: "Markanızın dijital yüzü.",
    details: ["Responsive Tasarım", "CMS Entegrasyonu", "Hızlı Açılış"],
  },
  {
    id: "e-ticaret",
    icon: ShoppingBag,
    title: "E-Ticaret Çözümleri",
    tagline: "Satış odaklı mağazalar.",
    details: ["Ödeme Sistemleri", "Sepet Yönetimi", "Stok Takibi"],
  },
  {
    id: "ozel-yazilim",
    icon: Database,
    title: "Özel Yazılım & SaaS",
    tagline: "İş süreçlerinize özel.",
    details: ["CRM Panelleri", "Veri Yönetimi", "API Entegrasyonu"],
  },
  {
    id: "mobil",
    icon: Smartphone,
    title: "Mobil Uygulama",
    tagline: "iOS ve Android dünyası.",
    details: ["React Native", "App Store Yayınlama", "Bildirim Sistemleri"],
  },
  {
    id: "uiux",
    icon: PenTool,
    title: "UI/UX Tasarım",
    tagline: "Kullanıcı odaklı deneyim.",
    details: ["Prototipleme", "Wireframe", "Arayüz Tasarımı"],
  },
  {
    id: "bakim",
    icon: Zap,
    title: "Bakım & Performans",
    tagline: "Sürekli güncel ve hızlı.",
    details: ["SEO Optimizasyonu", "Güvenlik Yedekleri", "Hız Artırma"],
  },
];

const TRANSITION = { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] as const };
const STAGGER = 0.04;

function SpotlightCard({
  service,
  index,
}: {
  service: SpotlightService;
  index: number;
}) {
  const cardRef = React.useRef<HTMLDivElement>(null);
  const [spotlight, setSpotlight] = React.useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const showDetails = isMobile || isHovered;

  const handleMouseMove = React.useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const el = cardRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setSpotlight({ x, y });
    },
    []
  );

  const handleMouseLeave = React.useCallback(() => {
    setSpotlight({ x: 50, y: 50 });
    setIsHovered(false);
  }, []);

  const Icon = service.icon;

  return (
    <motion.article
      ref={cardRef}
      className="group relative h-[400px] cursor-pointer overflow-hidden rounded-2xl border border-zinc-200 bg-gradient-to-br from-zinc-50 to-zinc-100/80 p-6 shadow-sm transition-shadow duration-300 dark:border-zinc-800 dark:from-zinc-900 dark:to-zinc-950 dark:shadow-none md:p-8"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setIsHovered(true)}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
      whileHover={{
        y: -6,
        scale: 1.02,
        transition: { duration: 0.3 },
      }}
      style={{
        boxShadow: isHovered
          ? "0 25px 50px -12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.05)"
          : undefined,
      }}
    >
      {/* Spotlight overlay — light: hafif koyu nokta, dark: hafif beyaz nokta */}
      <div
        className="pointer-events-none absolute inset-0 opacity-100 transition-opacity duration-300 dark:opacity-0"
        style={{
          background: `radial-gradient(circle 140px at ${spotlight.x}% ${spotlight.y}%, rgba(0,0,0,0.05) 0%, transparent 65%)`,
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 dark:opacity-100"
        style={{
          background: `radial-gradient(circle 140px at ${spotlight.x}% ${spotlight.y}%, rgba(255,255,255,0.08) 0%, transparent 65%)`,
        }}
        aria-hidden
      />
      {/* Hover'da spotlight biraz daha belirgin (sadece dark) */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 dark:group-hover:opacity-100"
        style={{
          background: `radial-gradient(circle 160px at ${spotlight.x}% ${spotlight.y}%, rgba(255,255,255,0.12) 0%, transparent 60%)`,
        }}
        aria-hidden
      />

      {/* Arka plan ikonu — büyük, soluk, sağ alt köşede gömülü */}
      <div
        className="pointer-events-none absolute right-0 bottom-0 z-0 flex items-end justify-end opacity-[0.07] transition-opacity duration-300 dark:opacity-[0.06] group-hover:opacity-[0.12] dark:group-hover:opacity-[0.1]"
        aria-hidden
      >
        <Icon
          className="h-[180px] w-[180px] -translate-y-4 translate-x-4 text-zinc-900 dark:text-white md:h-[220px] md:w-[220px] md:-translate-y-6 md:translate-x-6"
          strokeWidth={0.75}
          aria-hidden
        />
      </div>

      {/* Üst kenar — hover'da ince çizgi animasyonu */}
      <motion.div
        className="absolute left-0 right-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent dark:via-white/20"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isHovered ? 1 : 0 }}
        transition={TRANSITION}
        style={{ originX: 0 }}
        aria-hidden
      />

      <div className="relative z-10 flex h-full flex-col">
        {/* Başlık + tagline */}
        <div className="flex flex-1 flex-col justify-center">
          <motion.h3
            className={`text-2xl font-bold tracking-tight transition-colors duration-300 ${showDetails ? "text-foreground dark:text-white" : "text-zinc-700 dark:text-zinc-300"}`}
            animate={{ y: showDetails ? -20 : 0 }}
            transition={TRANSITION}
          >
            {service.title}
          </motion.h3>
          <p className="mt-2 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
            {service.tagline}
          </p>

          {/* Detay listesi — masaüstünde hover'da, mobilde her zaman görünür */}
          <motion.ul
            className="mt-4 list-inside list-disc space-y-1.5 text-sm text-zinc-600 dark:text-zinc-400"
            initial={false}
            animate={{ opacity: showDetails ? 1 : 0 }}
            transition={TRANSITION}
          >
            {service.details.map((item, i) => (
              <motion.li
                key={item}
                initial={false}
                animate={{
                  opacity: showDetails ? 1 : 0,
                  x: showDetails ? 0 : -8,
                }}
                transition={{
                  ...TRANSITION,
                  delay: showDetails ? i * STAGGER : 0,
                }}
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </div>

        {/* Butonlar — Teklif Al + Detayları gör (anasayfa hero stili) */}
        <motion.div
          className="mt-auto flex flex-wrap gap-3 pt-4"
          initial={false}
          animate={{
            opacity: showDetails ? 1 : 0,
            y: showDetails ? 0 : 8,
          }}
          transition={TRANSITION}
        >
          <Button asChild size="default">
            <Link href="/contact">Teklif Al</Link>
          </Button>
          <Button asChild variant="outline" size="default">
            <Link href={`/services/${service.id}`}>Detayları gör</Link>
          </Button>
        </motion.div>
      </div>
    </motion.article>
  );
}

export function ServicesSpotlight() {
  return (
    <div className="container mx-auto px-4 pt-12 pb-24 sm:px-6 sm:pt-16 lg:px-8 lg:pt-20">
      <header className="mb-12 md:mb-16">
        <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
          Hizmetlerimiz
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          Markanızı sadece internete taşımıyoruz; onu teknolojiyle yeniden inşa
          ediyoruz. Estetik, performans ve dönüşüm odaklı mühendislik.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {servicesData.map((service, index) => (
          <SpotlightCard key={service.id} service={service} index={index} />
        ))}
      </div>
    </div>
  );
}
