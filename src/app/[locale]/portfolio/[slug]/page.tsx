import { notFound } from "next/navigation";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { ArrowRight, ExternalLink } from "lucide-react";

type GalleryItem = { url: string; aspect: "video" | "square" };

type ProjectDetail = {
  slug: string;
  title: string;
  category: string;
  year: string;
  client: string;
  services: string[];
  liveUrl?: string;
  coverImage: string;
  challenge: string;
  solution: string;
  gallery: GalleryItem[];
};

const projectsData: Record<string, ProjectDetail> = {
  morfweb: {
    slug: "morfweb",
    title: "Morfweb",
    category: "Web",
    year: "2025",
    client: "Morfweb",
    services: ["UI/UX", "Frontend", "Backend", "SEO"],
    liveUrl: "https://morfweb.com",
    coverImage: "https://picsum.photos/seed/morfweb/1600/900",
    challenge:
      "Kurumsal kimliği yansıtan, hızlı ve mobil uyumlu bir kurumsal site ihtiyacı. Eski yapı güncel teknolojilerden uzaktı.",
    solution:
      "Next.js ile SSG/SSR hibrit mimari, Tailwind ile tutarlı tasarım sistemi ve performans odaklı optimizasyon. CMS entegrasyonu ile içerik yönetimi kolaylaştırıldı.",
    gallery: [
      { url: "https://picsum.photos/seed/m1/1200/675", aspect: "video" },
      { url: "https://picsum.photos/seed/m2/800/800", aspect: "square" },
      { url: "https://picsum.photos/seed/m3/1200/675", aspect: "video" },
    ],
  },
  techhub: {
    slug: "techhub",
    title: "TechHub",
    category: "Web",
    year: "2025",
    client: "TechHub A.Ş.",
    services: ["E-Ticaret", "Frontend", "Ödeme Entegrasyonu"],
    liveUrl: "https://techhub.example.com",
    coverImage: "https://picsum.photos/seed/techhub/1600/900",
    challenge:
      "Yüksek trafik alan bir e-ticaret sitesinde dönüşüm oranlarının artırılması ve ödeme sürecinin sadeleştirilmesi gerekiyordu.",
    solution:
      "Headless commerce mimarisi, Stripe entegrasyonu ve A/B test altyapısı. Sepet ve checkout akışı yeniden tasarlandı.",
    gallery: [
      { url: "https://picsum.photos/seed/t1/1200/675", aspect: "video" },
      { url: "https://picsum.photos/seed/t2/800/800", aspect: "square" },
    ],
  },
  "nexus-app": {
    slug: "nexus-app",
    title: "Nexus App",
    category: "Mobil",
    year: "2024",
    client: "Nexus Labs",
    services: ["Mobil Uygulama", "UI/UX", "API Entegrasyonu"],
    coverImage: "https://picsum.photos/seed/nexus/1600/900",
    challenge:
      "iOS ve Android’de tutarlı deneyim sunan, bildirim ve offline destekli bir mobil uygulama ihtiyacı.",
    solution:
      "React Native ile tek kod tabanı, push notification ve yerel önbellekleme. App Store ve Play Store yayın süreçleri yönetildi.",
    gallery: [
      { url: "https://picsum.photos/seed/n1/1200/675", aspect: "video" },
      { url: "https://picsum.photos/seed/n2/800/800", aspect: "square" },
      { url: "https://picsum.photos/seed/n3/800/800", aspect: "square" },
    ],
  },
  ventura: {
    slug: "ventura",
    title: "Ventura",
    category: "Tasarım",
    year: "2024",
    client: "Ventura Brand",
    services: ["UI/UX", "Marka Tasarımı", "Prototipleme"],
    coverImage: "https://picsum.photos/seed/ventura/1600/900",
    challenge:
      "Yeni marka kimliği ve ürün arayüzü için sıfırdan tasarım dili ve kullanıcı akışları oluşturulması gerekiyordu.",
    solution:
      "Figma ile tasarım sistemi ve etkileşimli prototipler. Kullanıcı testleri ile iterasyon yapıldı.",
    gallery: [
      { url: "https://picsum.photos/seed/v1/1200/675", aspect: "video" },
      { url: "https://picsum.photos/seed/v2/800/800", aspect: "square" },
    ],
  },
  "flow-dashboard": {
    slug: "flow-dashboard",
    title: "Flow Dashboard",
    category: "Web",
    year: "2025",
    client: "Flow Inc.",
    services: ["Frontend", "Backend", "Veri Görselleştirme"],
    liveUrl: "https://flow.example.com",
    coverImage: "https://picsum.photos/seed/flow/1600/900",
    challenge:
      "Karmaşık iş metriklerinin tek bir panelde anlaşılır ve hızlı şekilde görüntülenmesi gerekiyordu.",
    solution:
      "React tabanlı dashboard, gerçek zamanlı veri akışı ve özelleştirilebilir widget’lar. Export ve raporlama özellikleri eklendi.",
    gallery: [
      { url: "https://picsum.photos/seed/f1/1200/675", aspect: "video" },
      { url: "https://picsum.photos/seed/f2/800/800", aspect: "square" },
    ],
  },
  artisan: {
    slug: "artisan",
    title: "Artisan",
    category: "Tasarım",
    year: "2024",
    client: "Artisan Studio",
    services: ["Portfolyo", "UI/UX", "Frontend"],
    coverImage: "https://picsum.photos/seed/artisan/1600/900",
    challenge:
      "Sanatçı ve tasarımcıların işlerini sergileyebileceği, görsel odaklı bir portfolyo platformu.",
    solution:
      "Minimal grid layout, büyük görsel alanları ve hafif animasyonlar. CMS ile kolay içerik güncellemesi.",
    gallery: [
      { url: "https://picsum.photos/seed/a1/1200/675", aspect: "video" },
      { url: "https://picsum.photos/seed/a2/800/800", aspect: "square" },
    ],
  },
  pulse: {
    slug: "pulse",
    title: "Pulse",
    category: "Mobil",
    year: "2024",
    client: "Pulse Health",
    services: ["Mobil Uygulama", "Sağlık Teknolojileri", "Backend"],
    coverImage: "https://picsum.photos/seed/pulse/1600/900",
    challenge:
      "Kullanıcıların sağlık verilerini takip edebileceği, cihazlarla senkronize çalışan bir mobil uygulama.",
    solution:
      "React Native, Bluetooth sensör entegrasyonu ve güvenli bulut yedekleme. HIPAA uyumlu veri işleme.",
    gallery: [
      { url: "https://picsum.photos/seed/p1/1200/675", aspect: "video" },
      { url: "https://picsum.photos/seed/p2/800/800", aspect: "square" },
    ],
  },
  greenway: {
    slug: "greenway",
    title: "Greenway",
    category: "Web",
    year: "2025",
    client: "Greenway E-Ticaret",
    services: ["E-Ticaret", "Frontend", "Backend"],
    liveUrl: "https://greenway.example.com",
    coverImage: "https://picsum.photos/seed/greenway/1600/900",
    challenge:
      "Sürdürülebilir ürün odaklı e-ticaret sitesinde dönüşüm ve müşteri güveni artırılması hedeflendi.",
    solution:
      "Modern checkout akışı, stok ve kargo entegrasyonu, yeşil sertifika vurgusu. Performans ve erişilebilirlik iyileştirmeleri.",
    gallery: [
      { url: "https://picsum.photos/seed/g1/1200/675", aspect: "video" },
      { url: "https://picsum.photos/seed/g2/800/800", aspect: "square" },
      { url: "https://picsum.photos/seed/g3/1200/675", aspect: "video" },
    ],
  },
};

const PROJECT_SLUGS = Object.keys(projectsData);

function getProjectBySlug(slug: string): ProjectDetail | undefined {
  return projectsData[slug];
}

function getNextSlug(currentSlug: string): string | null {
  const i = PROJECT_SLUGS.indexOf(currentSlug);
  if (i < 0 || i >= PROJECT_SLUGS.length - 1) return null;
  return PROJECT_SLUGS[i + 1];
}

export function generateStaticParams() {
  return PROJECT_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Proje Bulunamadı | Morfweb" };
  return {
    title: `${project.title} | Portfolyo | Morfweb`,
    description: project.challenge.slice(0, 160),
  };
}

type PageProps = { params: Promise<{ slug: string }> };

export default async function PortfolioProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const nextSlug = getNextSlug(slug);
  const nextProject = nextSlug ? getProjectBySlug(nextSlug) : null;

  return (
    <main className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-white">
      {/* Hero görseli */}
      <header className="relative h-[60vh] w-full overflow-hidden">
        <Image
          src={project.coverImage}
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-black/40"
          aria-hidden
        />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 lg:p-12">
          <h1 className="text-4xl font-bold tracking-tight text-white drop-shadow-lg sm:text-5xl md:text-6xl">
            {project.title}
          </h1>
        </div>
      </header>

      {/* İçerik ızgarası */}
      <div className="container mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Sol sütun — proje künyesi */}
          <aside className="lg:col-span-4">
            <div className="sticky top-32 flex h-fit flex-col space-y-6">
              <div>
                <p className="text-sm font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  {project.category}
                </p>
                <p className="mt-1 text-zinc-600 dark:text-zinc-500">{project.year}</p>
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-500">
                  Müşteri
                </p>
                <p className="mt-1 text-zinc-900 dark:text-white">{project.client}</p>
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-500">
                  Hizmetler
                </p>
                <ul className="mt-2 space-y-1 text-zinc-900 dark:text-white">
                  {project.services.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-fit items-center gap-2 rounded border border-zinc-900 px-4 py-2.5 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-900 hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black"
                >
                  Siteyi Ziyaret Et
                  <ExternalLink className="h-4 w-4" aria-hidden />
                </a>
              ) : (
                <span
                  className="inline-flex w-fit cursor-not-allowed items-center gap-2 rounded border border-zinc-400 px-4 py-2.5 text-sm font-medium text-zinc-500 dark:border-zinc-600 dark:text-zinc-500"
                  aria-disabled
                >
                  Demo Yok
                </span>
              )}
            </div>
          </aside>

          {/* Sağ sütun — hikaye & galeri */}
          <div className="space-y-16 lg:col-span-8">
            <section>
              <h2 className="mb-4 text-xl font-bold tracking-tight text-zinc-900 dark:text-white">
                Challenge — Müşterinin problemi neydi?
              </h2>
              <p className="max-w-2xl leading-relaxed text-zinc-600 dark:text-zinc-400">
                {project.challenge}
              </p>
            </section>
            <section>
              <h2 className="mb-4 text-xl font-bold tracking-tight text-zinc-900 dark:text-white">
                Solution — Biz nasıl çözdük?
              </h2>
              <p className="max-w-2xl leading-relaxed text-zinc-600 dark:text-zinc-400">
                {project.solution}
              </p>
            </section>
            <section className="space-y-8">
              <h2 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white">
                Galeri
              </h2>
              <div className="grid gap-6 sm:grid-cols-2">
                {project.gallery.map((item, i) => (
                  <div
                    key={i}
                    className={`relative overflow-hidden rounded-lg border border-zinc-200 transition-transform duration-300 hover:scale-[1.02] dark:border-zinc-800 ${
                      item.aspect === "video" ? "aspect-video" : "aspect-square"
                    }`}
                  >
                    <Image
                      src={item.url}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Sıradaki proje */}
      {nextProject && (
        <Link
          href={`/portfolio/${nextProject.slug}`}
          className="group relative flex h-[40vh] w-full items-center justify-center overflow-hidden bg-zinc-100 dark:bg-zinc-900"
          aria-label={`Sıradaki proje: ${nextProject.title}`}
        >
          <Image
            src={nextProject.coverImage}
            alt=""
            fill
            className="object-cover opacity-40 blur-sm transition-opacity duration-300 group-hover:opacity-60"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/30" aria-hidden />
          <span className="relative flex items-center gap-2 text-lg font-medium text-white drop-shadow-md">
            Sıradaki: {nextProject.title}
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden />
          </span>
        </Link>
      )}
    </main>
  );
}
