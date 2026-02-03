import { notFound } from "next/navigation";
import {
  Monitor,
  ShoppingBag,
  Database,
  Smartphone,
  PenTool,
  Zap,
  ArrowRight,
  Check,
  Layout,
  Gauge,
  Settings,
  type LucideIcon,
} from "lucide-react";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import { ServiceDetailFAQ, type FAQItem } from "@/components/ServiceDetailFAQ";
import { type TechBadgeItem } from "@/components/TechBadges";
import { ServiceTechBadges } from "@/components/ServiceTechBadges";

export type ServiceFeature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type ServicePageData = {
  slug: string;
  title: string;
  summary: string;
  features: ServiceFeature[];
  techStack: TechBadgeItem[];
  faq: FAQItem[];
};

const serviceData: Record<string, ServicePageData> = {
  "kurumsal-web": {
    slug: "kurumsal-web",
    title: "Kurumsal Web Tasarım",
    summary:
      "Markanızın dijital yüzünü güçlü, hızlı ve yönetilebilir bir web sitesiyle oluşturuyoruz. Kurumsal kimliğinize uyumlu, mobil uyumlu ve arama motorlarına uyumlu çözümler sunuyoruz.",
    features: [
      {
        icon: Layout,
        title: "Responsive Tasarım",
        description:
          "Tüm cihazlarda tutarlı deneyim. Mobil, tablet ve masaüstünde optimize edilmiş arayüz.",
      },
      {
        icon: Settings,
        title: "CMS Entegrasyonu",
        description:
          "İçeriğinizi kolayca güncelleyebileceğiniz yönetim paneli. Teknik bilgi gerektirmez.",
      },
      {
        icon: Gauge,
        title: "Hızlı Açılış",
        description:
          "Performans odaklı geliştirme. Sayfa hızı ve çekirdek web vitals hedeflerine uyum.",
      },
      {
        icon: Check,
        title: "SEO Uyumlu",
        description:
          "Arama motorları için yapılandırılmış içerik ve teknik SEO best practice’leri.",
      },
    ],
    techStack: [
      { slug: "nextdotjs", label: "Next.js" },
      { slug: "react", label: "React" },
      { slug: "typescript", label: "TypeScript" },
      { slug: "tailwindcss", label: "Tailwind CSS" },
      { slug: "headlesscms", label: "Headless CMS" },
    ],
    faq: [
      {
        question: "Kurumsal web sitesi ne kadar sürede teslim edilir?",
        answer:
          "Proje kapsamına göre 4–8 hafta arasında teslim ediyoruz. Detaylı zaman çizelgesi teklif aşamasında netleşir.",
      },
      {
        question: "Site yayına aldıktan sonra güncelleme yapabilir miyim?",
        answer:
          "Evet. CMS paneli ile metin, görsel ve sayfa ekleme/çıkarma işlemlerini kendiniz yapabilirsiniz. Teknik güncellemeler için bakım paketleri sunuyoruz.",
      },
      {
        question: "Hosting ve domain dahil mi?",
        answer:
          "Domain ve hosting ayrıca fiyatlandırılır. İsterseniz sizin adınıza satın alıp yapılandırabiliriz.",
      },
    ],
  },
  "e-ticaret": {
    slug: "e-ticaret",
    title: "E-Ticaret Çözümleri",
    summary:
      "Satış odaklı, güvenli ödeme altyapılı ve stok yönetimli e-ticaret siteleri. Mağazanızı büyütmek için gerekli tüm araçları tek çatı altında sunuyoruz.",
    features: [
      {
        icon: Check,
        title: "Ödeme Sistemleri",
        description:
          "Kredi kartı, havale ve kapıda ödeme entegrasyonları. PCI-DSS uyumlu güvenli altyapı.",
      },
      {
        icon: Layout,
        title: "Sepet Yönetimi",
        description:
          "Kullanıcı dostu sepet, kupon ve indirim kuralları. Abandoned cart ve e-posta bildirimleri.",
      },
      {
        icon: Database,
        title: "Stok Takibi",
        description:
          "Ürün varyantları, stok uyarıları ve sipariş yönetimi. Raporlama ve analitik panel.",
      },
      {
        icon: Gauge,
        title: "Hızlı & Güvenli",
        description:
          "SSL, güvenli ödeme ağ geçitleri ve düzenli yedekleme ile güvenli alışveriş deneyimi.",
      },
    ],
    techStack: [
      { slug: "nextdotjs", label: "Next.js" },
      { slug: "react", label: "React" },
      { slug: "stripe", label: "Stripe" },
      { slug: "typescript", label: "TypeScript" },
      { slug: "headlesscms", label: "Headless CMS" },
    ],
    faq: [
      {
        question: "E-ticaret sitesi kurulumu ne kadar sürer?",
        answer:
          "Ürün sayısı ve entegrasyonlara göre 6–12 hafta arasında planlıyoruz. Ödeme ve kargo entegrasyonları süreyi etkiler.",
      },
      {
        question: "Komisyon veya aylık satış payı alıyor musunuz?",
        answer:
          "Hayır. Tek seferlik proje ücreti ve isteğe bağlı bakım paketleri ile çalışıyoruz. Satışınızdan komisyon almıyoruz.",
      },
      {
        question: "Mevcut ürün listemi taşıyabilir miyim?",
        answer:
          "Evet. CSV/Excel ile toplu ürün aktarımı ve mevcut platformlardan migrasyon hizmeti veriyoruz.",
      },
    ],
  },
  "ozel-yazilim": {
    slug: "ozel-yazilim",
    title: "Özel Yazılım & SaaS",
    summary:
      "İş süreçlerinize özel panel, CRM ve veri yönetimi uygulamaları. Ölçeklenebilir, API odaklı ve güvenli çözümler.",
    features: [
      {
        icon: Database,
        title: "CRM Panelleri",
        description:
          "Müşteri, proje ve satış takibi. Özelleştirilebilir pipeline ve raporlama.",
      },
      {
        icon: Settings,
        title: "Veri Yönetimi",
        description:
          "Merkezi veri deposu, rol tabanlı erişim ve audit log. Dış sistemlerle entegrasyon.",
      },
      {
        icon: Check,
        title: "API Entegrasyonu",
        description:
          "REST/GraphQL API ile mevcut yazılımlarınızla konuşan modüler yapı.",
      },
      {
        icon: Gauge,
        title: "Ölçeklenebilir Altyapı",
        description:
          "Bulut tabanlı, yük dengelemeli ve yedekli mimari. Büyümeye hazır.",
      },
    ],
    techStack: [
      { slug: "nextdotjs", label: "Next.js" },
      { slug: "react", label: "React" },
      { slug: "nodedotjs", label: "Node.js" },
      { slug: "postgresql", label: "PostgreSQL" },
      { slug: "typescript", label: "TypeScript" },
    ],
    faq: [
      {
        question: "Özel yazılım projesi nasıl başlar?",
        answer:
          "İhtiyaç görüşmesi ve kapsam belirlemesiyle başlıyoruz. Ardından teklif, zaman çizelgesi ve sprint planı sunuyoruz.",
      },
      {
        question: "Kod ve veri bize mi ait olur?",
        answer:
          "Evet. Teslim sonrası kaynak kod ve dokümantasyon size devredilir. Veri her zaman sizin kontrolünüzdedir.",
      },
      {
        question: "Bakım ve güncelleme nasıl yapılır?",
        answer:
          "İsteğe bağlı SLA paketleri ile öncelikli destek, güvenlik güncellemeleri ve küçük iyileştirmeler sunuyoruz.",
      },
    ],
  },
  mobil: {
    slug: "mobil",
    title: "Mobil Uygulama",
    summary:
      "iOS ve Android için tek kod tabanıyla native hissiyatında uygulamalar. React Native ile hızlı geliştirme ve kolay bakım.",
    features: [
      {
        icon: Smartphone,
        title: "Çapraz Platform",
        description:
          "Tek proje ile iOS ve Android. Native bileşenler ve performans odaklı mimari.",
      },
      {
        icon: Check,
        title: "App Store Yayınlama",
        description:
          "Store listeleme, ekran görüntüleri ve sürüm yönetimi. Yayın süreçlerinde rehberlik.",
      },
      {
        icon: Gauge,
        title: "Bildirim Sistemleri",
        description:
          "Push notification, in-app mesajlaşma ve bildirim stratejisi entegrasyonu.",
      },
      {
        icon: Settings,
        title: "Backend Entegrasyonu",
        description:
          "Mevcut API’lerinizle veya yeni oluşturduğumuz backend ile sorunsuz entegrasyon.",
      },
    ],
    techStack: [
      { slug: "react", label: "React Native" },
      { slug: "typescript", label: "TypeScript" },
      { slug: "expo", label: "Expo" },
      { slug: "nodedotjs", label: "Node.js" },
    ],
    faq: [
      {
        question: "Mobil uygulama ne kadar sürede teslim edilir?",
        answer:
          "Kapsama bağlı olarak 3–6 ay arasında MVP teslimi yapıyoruz. Karmaşık entegrasyonlar süreyi uzatabilir.",
      },
      {
        question: "App Store ve Google Play’e siz mi yüklüyorsunuz?",
        answer:
          "Evet. Hesap oluşturma, store listeleme ve ilk yayın süreçlerinde tam destek veriyoruz.",
      },
      {
        question: "Güncellemeler nasıl yayınlanır?",
        answer:
          "OTA güncellemeler ve store güncellemeleri için süreç ve araçları birlikte belirliyoruz. Bakım paketleri mevcuttur.",
      },
    ],
  },
  uiux: {
    slug: "uiux",
    title: "UI/UX Tasarım",
    summary:
      "Kullanıcı odaklı arayüz ve deneyim tasarımı. Araştırma, wireframe, prototip ve tasarım sistemleri ile ürününüzü kullanılabilir ve ölçeklenebilir hale getiriyoruz.",
    features: [
      {
        icon: PenTool,
        title: "Prototipleme",
        description:
          "Etkileşimli prototipler ile akış ve davranışı erken aşamada test edin.",
      },
      {
        icon: Layout,
        title: "Wireframe",
        description:
          "Bilgi mimarisi ve ekran düzenleri. Hızlı iterasyon ve paydaş onayı.",
      },
      {
        icon: Check,
        title: "Arayüz Tasarımı",
        description:
          "Tutarlı, erişilebilir ve markanıza uygun ekran tasarımları. Figma teslimi.",
      },
      {
        icon: Gauge,
        title: "Tasarım Sistemi",
        description:
          "Bileşen kütüphanesi ve stil rehberi. Ölçeklenebilir ve geliştirici dostu çıktı.",
      },
    ],
    techStack: [
      { slug: "figma", label: "Figma" },
      { slug: "prototyping", label: "Prototyping" },
      { slug: "designsystems", label: "Design Systems" },
      { slug: "accessibility", label: "Accessibility" },
    ],
    faq: [
      {
        question: "UI/UX projesi sadece tasarım mı, kod da dahil mi?",
        answer:
          "İsterseniz sadece tasarım (Figma + spec) teslim edebiliriz; isterseniz tasarım + front-end geliştirme birlikte yürütülür.",
      },
      {
        question: "Kullanıcı araştırması yapıyor musunuz?",
        answer:
          "Evet. Kullanıcı görüşmeleri, anket ve usability testleri proje kapsamına göre teklif edilir.",
      },
      {
        question: "Mevcut ürünümü iyileştirebilir misiniz?",
        answer:
          "Evet. Mevcut arayüzü audit edip, iyileştirme önerileri ve yeni tasarım sunuyoruz.",
      },
    ],
  },
  bakim: {
    slug: "bakim",
    title: "Bakım & Performans",
    summary:
      "Mevcut sitenizi veya uygulamanızı güvenli, güncel ve hızlı tutuyoruz. SEO, güvenlik yamaları ve performans iyileştirmeleri tek pakette.",
    features: [
      {
        icon: Gauge,
        title: "SEO Optimizasyonu",
        description:
          "Teknik SEO, içerik önerileri ve izleme. Sıralama ve trafik raporları.",
      },
      {
        icon: Check,
        title: "Güvenlik Yedekleri",
        description:
          "Düzenli yedekleme, güvenlik taramaları ve güncel bağımlılık yönetimi.",
      },
      {
        icon: Zap,
        title: "Hız Artırma",
        description:
          "Core Web Vitals iyileştirmesi, cache ve CDN yapılandırması.",
      },
      {
        icon: Settings,
        title: "İzleme & Raporlama",
        description:
          "Uptime izleme, hata takibi ve aylık özet raporlar.",
      },
    ],
    techStack: [
      { slug: "monitoring", label: "Monitoring" },
      { slug: "cicd", label: "CI/CD" },
      { slug: "security", label: "Security" },
      { slug: "performance", label: "Performance" },
    ],
    faq: [
      {
        question: "Bakım paketi neleri kapsar?",
        answer:
          "Güvenlik güncellemeleri, yedekleme, uptime izleme ve belirli saatlik küçük güncellemeler. Kapsam pakete göre değişir.",
      },
      {
        question: "Sizin yapmadığımız bir siteyi de bakıma alır mısınız?",
        answer:
          "Evet. Mevcut teknolojiyi inceledikten sonra uyumlu bir bakım planı sunuyoruz. Bazı kısıtlar olabilir.",
      },
      {
        question: "Acil müdahale nasıl çalışır?",
        answer:
          "SLA paketlerinde öncelik seviyesine göre yanıt süreleri tanımlanır. Kritik kesintilerde hızlı müdahale ediyoruz.",
      },
    ],
  },
};

export function getServiceBySlug(slug: string): ServicePageData | undefined {
  return serviceData[slug];
}

const VALID_SLUGS = Object.keys(serviceData);

export function generateStaticParams() {
  return VALID_SLUGS.map((slug) => ({ slug }));
}

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Hizmet Bulunamadı | Morfweb" };
  return {
    title: `${service.title} | Morfweb`,
    description: service.summary,
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) notFound();

  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Sol sütun — sticky */}
          <aside className="lg:col-span-4">
            <div className="sticky top-24 flex h-fit flex-col space-y-8">
              <Link
                href="/services"
                className="text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
              >
                ← Tüm Hizmetler
              </Link>
              <h1 className="text-5xl font-black leading-tight tracking-tight text-zinc-900 dark:text-white">
                {service.title}
              </h1>
              <p className="max-w-sm text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                {service.summary}
              </p>
              <Button asChild size="lg" className="w-fit bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200">
                <Link href="/contact" className="inline-flex items-center gap-2">
                  Projeyi Başlat
                  <ArrowRight className="h-5 w-5" aria-hidden />
                </Link>
              </Button>
              {/* Güven / referans */}
              <div className="flex flex-col gap-2 pt-4 border-t border-zinc-200 dark:border-zinc-800">
                <p className="text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  Bu hizmeti alanlar
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="h-8 w-8 rounded-full border-2 border-white bg-zinc-300 dark:border-zinc-900 dark:bg-zinc-600"
                        aria-hidden
                      />
                    ))}
                  </div>
                  <div className="flex items-center gap-1 text-zinc-700 dark:text-zinc-300">
                    <span className="text-sm font-medium">4.9</span>
                    <span className="text-amber-500">★★★★★</span>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Sağ sütun — scroll içerik */}
          <div className="space-y-24 lg:col-span-8">
            {/* Bölüm 1: Özellikler */}
            <section aria-labelledby="features-heading">
              <h2
                id="features-heading"
                className="mb-10 text-2xl font-bold tracking-tight text-zinc-900 dark:text-white md:text-3xl"
              >
                Neler Sunuyoruz?
              </h2>
              <div className="grid gap-8 sm:grid-cols-2">
                {service.features.map((feature) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={feature.title}
                      className="rounded-xl border border-zinc-200 bg-zinc-50/50 p-6 dark:border-zinc-800 dark:bg-zinc-900/30"
                    >
                      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-200 text-zinc-800 dark:bg-zinc-700 dark:text-zinc-200">
                        <Icon className="h-5 w-5" strokeWidth={1.5} />
                      </div>
                      <h3 className="mb-2 text-lg font-bold text-zinc-900 dark:text-white">
                        {feature.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                        {feature.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Bölüm 2: Teknolojiler */}
            <section aria-labelledby="tech-heading">
              <h2
                id="tech-heading"
                className="mb-8 text-2xl font-bold tracking-tight text-zinc-900 dark:text-white md:text-3xl"
              >
                Kullandığımız Teknolojiler
              </h2>
              <ServiceTechBadges items={service.techStack} />
            </section>

            {/* Bölüm 3: SSS */}
            <section aria-labelledby="faq-heading">
              <h2
                id="faq-heading"
                className="mb-8 text-2xl font-bold tracking-tight text-zinc-900 dark:text-white md:text-3xl"
              >
                Sıkça Sorulan Sorular
              </h2>
              <div className="rounded-xl border border-zinc-200 bg-zinc-50/30 dark:border-zinc-800 dark:bg-zinc-900/20">
                <ServiceDetailFAQ items={service.faq} />
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
