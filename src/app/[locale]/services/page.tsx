import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { ServicesHero } from "@/components/ServicesHero";
import { ServicesSpotlight } from "@/components/ServicesSpotlight";

export const metadata = {
  title: "Hizmetlerimiz | Morfweb",
  description:
    "Markanız için uçtan uca dijital çözümler: Kurumsal Web, E-Ticaret, Özel Yazılım, Mobil Uygulama, UI/UX, Bakım & Performans.",
};

export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      {/* Hero ile kartlar arası kısa geçiş bandı */}

      <div className="bg-background">
        <ServicesSpotlight />
      </div>
      <CTA />
    </main>
  );
}
