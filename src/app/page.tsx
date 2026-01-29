import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, BriefcaseBusiness, Gauge, ShieldCheck } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <Badge variant="secondary" className="rounded-full">
              Minimal • Kurumsal • Güven Veren
            </Badge>
          </div>

          <h1 className="text-pretty text-4xl font-semibold tracking-tight text-foreground md:text-6xl">
            Hayalindeki web sitesi{" "}
            <span className="text-muted-foreground">bir tık uzağında.</span>
          </h1>

          <p className="text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            Morfweb ile işletmenizi dijital dünyaya taşıyın. Modern, hızlı ve
            ölçeklenebilir çözümlerle güven veren bir marka deneyimi tasarlıyoruz.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button asChild size="lg">
              <Link href="/contact">
                Teklif Al
                <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="#hizmetler">Hizmetler</Link>
            </Button>
          </div>

          <div className="grid gap-3 pt-4 sm:grid-cols-3">
            <Card className="bg-card/60">
              <CardHeader className="space-y-1">
                <CardTitle className="flex items-center gap-2 text-sm font-semibold">
                  <Gauge className="h-4 w-4" aria-hidden="true" />
                  Hızlı
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Performans odaklı mimari ve modern Next.js altyapısı.
              </CardContent>
            </Card>

            <Card className="bg-card/60">
              <CardHeader className="space-y-1">
                <CardTitle className="flex items-center gap-2 text-sm font-semibold">
                  <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                  Güvenli
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Kurumsal standartlara uygun, temiz ve sürdürülebilir kod.
              </CardContent>
            </Card>

            <Card className="bg-card/60">
              <CardHeader className="space-y-1">
                <CardTitle className="flex items-center gap-2 text-sm font-semibold">
                  <BriefcaseBusiness className="h-4 w-4" aria-hidden="true" />
                  Kurumsal
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Minimal tasarım diliyle güven veren bir arayüz.
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="relative">
          <div className="relative h-72 w-full overflow-hidden rounded-2xl border bg-card shadow-sm md:h-[26rem]">
            <Image
              src="/banner.jpg"
              alt="Morfweb Dijital Çözümler"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/10 to-transparent" />
          </div>
        </div>
      </div>

      <section id="hizmetler" className="pt-16">
        <div className="flex items-end justify-between gap-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold tracking-tight">Hizmetler</h2>
            <p className="max-w-2xl text-sm text-muted-foreground">
              İhtiyacınıza göre tasarım, geliştirme ve bakım süreçlerini uçtan uca
              yönetiyoruz.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}