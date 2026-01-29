"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layout, Smartphone, BarChart3, Code2 } from "lucide-react";

const SERVICES = [
  {
    id: "web",
    title: "Web Geliştirme",
    description:
      "Kullanıcı odaklı, hızlı ve modern web siteleri ile UI/UX tasarımı. Markanızı dijitalde doğru yansıtıyoruz.",
    icon: Layout,
  },
  {
    id: "mobil",
    title: "Mobil Uygulama",
    description:
      "iOS ve Android için tek kod tabanıyla performanslı ve native hissi veren uygulamalar. React Native ile çözümler.",
    icon: Smartphone,
  },
  {
    id: "seo",
    title: "SEO & Performans",
    description:
      "Arama motorlarında üst sıralar ve sayfa hızı optimizasyonu ile daha fazla trafik ve dönüşüm.",
    icon: BarChart3,
  },
  {
    id: "ozel",
    title: "Özel Yazılım",
    description:
      "İş süreçlerinize özel yönetim panelleri, API entegrasyonları ve otomasyon sistemleri.",
    icon: Code2,
  },
];

function useActiveSection(
  refs: readonly React.RefObject<HTMLElement | null>[]
) {
  const [activeIndex, setActiveIndex] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const viewportCenter = window.innerHeight / 2;
      let best = 0;
      let bestDistance = Infinity;

      refs.forEach((ref, i) => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const distance = Math.abs(center - viewportCenter);
        if (distance < bestDistance && rect.bottom > 0 && rect.top < window.innerHeight) {
          bestDistance = distance;
          best = i;
        }
      });

      setActiveIndex((prev) => (best !== prev ? best : prev));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [refs]);

  return { activeIndex };
}

function NavItem({
  service,
  isActive,
}: {
  service: (typeof SERVICES)[number];
  isActive: boolean;
  index: number;
}) {
  const Icon = service.icon;
  return (
    <div className="relative flex gap-4">
      {/* Aktif olanın yanında renkli çizgi */}
      <div
        className={`w-0.5 shrink-0 self-stretch rounded-full transition-colors duration-300 ${
          isActive ? "bg-foreground" : "bg-zinc-200 dark:bg-zinc-700"
        }`}
        style={{ minHeight: 24 }}
      />
      <div className="flex-1 py-4 lg:py-5">
        <div
          className={`flex items-center gap-2 transition-colors duration-300 ${
            isActive ? "text-foreground" : "text-zinc-400 dark:text-zinc-500"
          }`}
        >
          <Icon className="h-5 w-5 shrink-0" aria-hidden />
          <span className="text-base font-medium lg:text-lg">{service.title}</span>
        </div>
        <AnimatePresence mode="wait">
          {isActive && (
            <motion.p
              key={service.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="mt-2 text-sm leading-relaxed text-muted-foreground"
            >
              {service.description}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function ContentCard({
  service,
  children,
  cardRef,
}: {
  service: (typeof SERVICES)[number];
  children: React.ReactNode;
  cardRef: React.RefObject<HTMLElement | null>;
}) {
  return (
    <section
      ref={cardRef}
      className="flex min-h-[80vh] flex-col justify-center pt-16 pb-16 first:pt-0 md:pt-24 md:pb-24 md:first:pt-0"
      data-service-id={service.id}
    >
      <div className="rounded-2xl border border-zinc-200 bg-white/80 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/50 overflow-hidden">
        {children}
      </div>
    </section>
  );
}

export function ServicesScroll() {
  const ref0 = React.useRef<HTMLElement>(null);
  const ref1 = React.useRef<HTMLElement>(null);
  const ref2 = React.useRef<HTMLElement>(null);
  const ref3 = React.useRef<HTMLElement>(null);
  const refs = React.useMemo(
    () => [ref0, ref1, ref2, ref3] as const,
    []
  );
  const { activeIndex } = useActiveSection(refs);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  if (isMobile) {
    return (
      <section id="hizmetler" className="mx-auto max-w-3xl px-4 pt-4 pb-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/50 sm:p-8"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-zinc-200 bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800/50">
                  <service.icon className="h-6 w-6 text-zinc-700 dark:text-zinc-300" />
                </div>
                <h3 className="text-xl font-semibold tracking-tight text-foreground">
                  {service.title}
                </h3>
              </div>
              <p className="mt-3 text-muted-foreground">{service.description}</p>
              <div className="mt-6 aspect-video w-full rounded-xl bg-zinc-100 dark:bg-zinc-800/50" />
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section id="hizmetler" className="min-h-screen bg-background">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 pt-4 pb-20 lg:grid-cols-[340px_1fr] lg:px-8 lg:items-start">
        {/* Sol: Hizmet listesi — sticky, ilk kartın tepesiyle hizalı */}
        <aside className="lg:sticky lg:top-20 lg:self-start">
          <nav
            className="flex flex-col rounded-2xl border border-zinc-200 bg-white/50 dark:border-zinc-800 dark:bg-zinc-900/30 lg:min-h-[80vh] lg:overflow-hidden"
            aria-label="Hizmetler"
          >
            {SERVICES.map((service, index) => (
              <div
                key={service.id}
                className={`flex flex-1 flex-col justify-center ${
                  index < SERVICES.length - 1 ? "border-b border-zinc-200 dark:border-zinc-800" : ""
                }`}
              >
                <NavItem
                  service={service}
                  isActive={activeIndex === index}
                  index={index}
                />
              </div>
            ))}
          </nav>
        </aside>

        {/* Sağ: Scroll içerik */}
        <div className="min-h-[300vh]">
          <ContentCard service={SERVICES[0]} cardRef={ref0}>
            <div className="aspect-[16/10] w-full bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-900 flex items-center justify-center">
              <div className="rounded-lg border-2 border-dashed border-zinc-300 dark:border-zinc-600 p-8 text-center text-muted-foreground">
                Web / UI mockup alanı
              </div>
            </div>
          </ContentCard>

          <ContentCard service={SERVICES[1]} cardRef={ref1}>
            <div className="flex items-center justify-center gap-8 p-12">
              <div className="h-[420px] w-[200px] rounded-[2rem] border-4 border-zinc-800 bg-zinc-900 dark:border-zinc-600 dark:bg-zinc-800 shadow-xl" />
              <div className="h-[420px] w-[200px] rounded-[2rem] border-4 border-zinc-800 bg-zinc-900 dark:border-zinc-600 dark:bg-zinc-800 shadow-xl" />
            </div>
          </ContentCard>

          <ContentCard service={SERVICES[2]} cardRef={ref2}>
            <div className="aspect-[16/10] w-full bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-800 flex items-center justify-center p-12">
              <div className="grid grid-cols-3 gap-4 w-full max-w-2xl">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="h-24 rounded-lg bg-zinc-200/80 dark:bg-zinc-700/50"
                    style={{ height: 60 + i * 20 }}
                  />
                ))}
              </div>
            </div>
          </ContentCard>

          <ContentCard service={SERVICES[3]} cardRef={ref3}>
            <div className="aspect-[16/10] w-full bg-zinc-900 dark:bg-zinc-950 p-8 font-mono text-sm text-zinc-400">
              <pre className="overflow-auto">
                {`// Özel yazılım çözümleri
export async function getDashboard() {
  const data = await api.get('/v1/analytics');
  return data;
}`}
              </pre>
            </div>
          </ContentCard>
        </div>
      </div>
    </section>
  );
}
