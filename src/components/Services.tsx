"use client";

import {
  Layout,
  Smartphone,
  BarChart3,
  Code2,
} from "lucide-react";

const services = [
  {
    title: "Web Geliştirme & UI/UX Tasarım",
    description:
      "Kullanıcı odaklı, hızlı ve modern web siteleri ile arayüz tasarımı. Markanızı dijitalde doğru yansıtıyoruz.",
    icon: Layout,
    wide: true,
  },
  {
    title: "Mobil Uygulama (React Native)",
    description:
      "iOS ve Android için tek kod tabanıyla performanslı ve native hissi veren uygulamalar.",
    icon: Smartphone,
    wide: false,
  },
  {
    title: "SEO & Performans",
    description:
      "Arama motorlarında üst sıralar ve sayfa hızı optimizasyonu ile daha fazla trafik ve dönüşüm.",
    icon: BarChart3,
    wide: false,
  },
  {
    title: "Özel Yazılım Çözümleri",
    description:
      "İş süreçlerinize özel yönetim panelleri, API entegrasyonları ve otomasyon sistemleri.",
    icon: Code2,
    wide: true,
  },
];

function BentoCard({
  title,
  description,
  icon: Icon,
}: {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <div className="group relative h-full rounded-3xl bg-gradient-to-br from-zinc-300 via-zinc-200 to-zinc-300 p-[1px] opacity-60 transition-all duration-300 hover:opacity-100 hover:shadow-[0_0_28px_-4px_rgba(161,161,170,0.35)] dark:from-zinc-600 dark:via-zinc-500 dark:to-zinc-600 dark:opacity-50 dark:hover:opacity-100 dark:hover:shadow-[0_0_28px_-4px_rgba(113,113,122,0.4)]">
      <div className="relative h-full overflow-hidden rounded-[22px] border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/50 sm:p-8">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-zinc-200 bg-zinc-50 text-zinc-700 dark:border-zinc-700 dark:bg-zinc-800/50 dark:text-zinc-300">
          <Icon className="h-6 w-6" aria-hidden />
        </div>
        <h3 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
          {description}
        </p>
      </div>
    </div>
  );
}

export function Services() {
  return (
    <section
      id="hizmetler"
      className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mb-12">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          Uzmanlık Alanlarımız
        </h2>
        <p className="mt-2 max-w-2xl text-base text-muted-foreground sm:text-lg">
          Tasarımdan geliştirmeye, performanstan özel yazılıma kadar ihtiyacınız olan tüm dijital çözümleri sunuyoruz.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-3">
        {services.map((item) => (
          <div
            key={item.title}
            className={item.wide ? "md:col-span-2" : ""}
          >
            <BentoCard
              title={item.title}
              description={item.description}
              icon={item.icon}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
