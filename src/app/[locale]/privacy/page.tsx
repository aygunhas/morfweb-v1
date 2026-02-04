import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gizlilik Politikası | Morfweb",
  description:
    "Morfweb gizlilik politikası, çerez politikası ve KVKK aydınlatma metni.",
};

const NAV_ITEMS = [
  { href: "#genel-bakis", label: "Genel Bakış" },
  { href: "#veri-sorumlusu", label: "Veri Sorumlusu" },
  { href: "#toplanan-veriler", label: "Toplanan Veriler" },
  { href: "#hukuki-sebep", label: "Hukuki Sebep" },
  { href: "#cerezler", label: "Çerezler (Cookies)" },
  { href: "#verilerin-kullanimi", label: "Verilerin Kullanımı" },
  { href: "#saklama-suresi", label: "Saklama Süresi" },
  { href: "#veri-guvenligi", label: "Veri Güvenliği" },
  { href: "#haklariniz", label: "Haklarınız (KVKK)" },
  { href: "#iletisim", label: "İletişim" },
] as const;

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-600 dark:bg-zinc-950 dark:text-zinc-400">
      <div className="container mx-auto px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          {/* Mobil: yatay kaydırılabilir nav */}
          <nav
            className="flex lg:hidden"
            aria-label="Gizlilik sayfası bölümleri"
          >
            <div className="flex w-full gap-2 overflow-x-auto pb-2 scrollbar-hide [-webkit-overflow-scrolling:touch]">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="shrink-0 rounded-full border border-zinc-200 bg-white px-4 py-2.5 text-xs font-medium text-zinc-600 transition-colors active:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900/50 dark:text-zinc-400 dark:active:bg-zinc-800"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>

          {/* Sol sütun — navigasyon (sadece desktop) */}
          <aside className="hidden lg:block lg:col-span-4">
            <nav
              className="sticky top-32 flex h-fit flex-col"
              aria-label="Gizlilik sayfası bölümleri"
            >
              <h2 className="text-sm font-bold uppercase tracking-wider text-zinc-900 dark:text-white">
                Yasal Bilgilendirme
              </h2>
              <ul className="mt-6 space-y-2">
                {NAV_ITEMS.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="block py-1.5 text-sm text-zinc-600 transition-colors hover:text-zinc-900 hover:underline dark:text-zinc-400 dark:hover:text-white dark:hover:underline"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* Sağ sütun — doküman */}
          <article className="min-w-0 space-y-10 sm:space-y-12 lg:col-span-8">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-zinc-900 dark:text-white sm:text-3xl lg:text-4xl">
              Gizlilik Politikası ve Aydınlatma Metni
            </h1>

            <section id="genel-bakis" className="scroll-mt-28 space-y-3 sm:scroll-mt-24 sm:space-y-4">
              <h2 className="text-xl font-bold text-zinc-900 dark:text-white sm:text-2xl">
                Genel Bakış
              </h2>
              <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">
                Morfweb (&quot;Şirket&quot;) olarak, kişisel verilerinizin
                güvenliği ve gizliliğine önem veriyoruz. Bu metin, 6698 sayılı
                Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında
                aydınlatma yükümlülüğümüzü yerine getirmek ve morfweb.com
                üzerindeki veri işleme faaliyetlerimizi açıklamak amacıyla
                hazırlanmıştır.
              </p>
            </section>

            <section id="veri-sorumlusu" className="scroll-mt-28 space-y-3 sm:scroll-mt-24 sm:space-y-4">
              <h2 className="text-xl font-bold text-zinc-900 dark:text-white sm:text-2xl">
                Veri Sorumlusu
              </h2>
              <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">
                Kişisel verileriniz, veri sorumlusu sıfatıyla Morfweb tarafından
                işlenmektedir. Şirket unvanı, adres ve iletişim bilgilerinize
                &quot;İletişim&quot; bölümünden ulaşabilirsiniz.
              </p>
            </section>

            <section id="toplanan-veriler" className="scroll-mt-24 space-y-4">
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
                Toplanan Veriler
              </h2>
              <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">
                İletişim formları aracılığıyla ad, soyad, e-posta, telefon ve
                şirket adı; teklif talebi için bütçe aralığı ve mesaj
                içeriğiniz toplanabilir. Site kullanımı sırasında IP adresi,
                tarayıcı türü, cihaz bilgisi ve ziyaret edilen sayfalar gibi
                teknik veriler analitik amaçlı işlenebilir.
              </p>
            </section>

            <section id="hukuki-sebep" className="scroll-mt-28 space-y-3 sm:scroll-mt-24 sm:space-y-4">
              <h2 className="text-xl font-bold text-zinc-900 dark:text-white sm:text-2xl">
                Hukuki Sebep
              </h2>
              <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">
                Verileriniz, KVKK 5. maddesinde sayılan hukuki sebeplere dayanılarak
                işlenmektedir: açık rızanız, sözleşmenin ifası veya sözleşme
                öncesi talebinizin yerine getirilmesi, hukuki yükümlülük ve
                meşru menfaat. Çerezler için siteye girişte bilgilendirme
                yapılmakta ve tercihiniz alınmaktadır.
              </p>
            </section>

            <section id="cerezler" className="scroll-mt-24 space-y-4">
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
                Çerezler (Cookies)
              </h2>
              <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">
                Zorunlu çerezler, sitenin çalışması için gereklidir. Analitik
                çerezler (ör. Google Analytics) trafiği ve kullanımı analiz
                etmemize yardımcı olur; tercihinize bağlıdır. Deneyiminizi
                iyileştirmek için kullanılan çerezleri tarayıcı ayarlarınızdan
                kapatabilir veya silebilirsiniz. Çerez tercihinizi sitedeki
                bildirim üzerinden de yönetebilirsiniz.
              </p>
            </section>

            <section id="verilerin-kullanimi" className="scroll-mt-28 space-y-3 sm:scroll-mt-24 sm:space-y-4">
              <h2 className="text-xl font-bold text-zinc-900 dark:text-white sm:text-2xl">
                Verilerin Kullanımı
              </h2>
              <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">
                Toplanan veriler yalnızca size hizmet sunmak, teklif hazırlamak,
                iletişim taleplerinizi yanıtlamak ve yasal yükümlülükleri
                yerine getirmek için kullanılır. Verileriniz, yasal zorunluluk
                veya açık rızanız olmadan üçüncü taraflarla paylaşılmaz.
                Analitik hizmet sağlayıcıları veri işleyen sıfatıyla sınırlı
                amaçla kullanabilir.
              </p>
            </section>

            <section id="saklama-suresi" className="scroll-mt-24 space-y-4">
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
                Saklama Süresi
              </h2>
              <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">
                Kişisel verileriniz, işleme amacının gerektirdiği süre boyunca
                ve yasal saklama sürelerine uygun olarak tutulur. Amaç ortadan
                kalktığında veya talep etmeniz hâlinde verileriniz silinir,
                yok edilir veya anonim hâle getirilir; aksi yasal zorunluluk
                saklıdır.
              </p>
            </section>

            <section id="veri-guvenligi" className="scroll-mt-28 space-y-3 sm:scroll-mt-24 sm:space-y-4">
              <h2 className="text-xl font-bold text-zinc-900 dark:text-white sm:text-2xl">
                Veri Güvenliği
              </h2>
              <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">
                Verileriniz SSL şifreleme ve güncel güvenlik önlemleri ile
                korunmaktadır. Yetkisiz erişim, kayıp veya değişikliğe karşı
                teknik ve idari tedbirler alınmaktadır.
              </p>
            </section>

            <section id="haklariniz" className="scroll-mt-24 space-y-4">
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
                Haklarınız (KVKK)
              </h2>
              <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">
                KVKK 11. madde kapsamında kişisel verilerinizin işlenip
                işlenmediğini öğrenme, işlenmişse buna ilişkin bilgi talep etme,
                işlenme amacını ve amacına uygun kullanılıp kullanılmadığını
                öğrenme, yurt içinde veya yurt dışında aktarıldığı üçüncü
                kişileri bilme, eksik veya yanlış işlenmişse düzeltilmesini
                isteme, silinmesini veya yok edilmesini talep etme ve bu
                işlemlerin üçüncü kişilere bildirilmesini isteme haklarına
                sahipsiniz. İşlenen verilerin münhasıran otomatik sistemler
                vasıtasıyla analiz edilmesi suretiyle aleyhinize bir sonucun
                ortaya çıkmasına itiraz edebilir ve Kişisel Verileri Koruma
                Kuruluna şikâyette bulunabilirsiniz. Başvurularınızı
                hello@morfweb.com üzerinden iletebilirsiniz; yasal süre
                içinde yanıtlanacaktır.
              </p>
            </section>

            <section id="iletisim" className="scroll-mt-28 space-y-3 sm:scroll-mt-24 sm:space-y-4">
              <h2 className="text-xl font-bold text-zinc-900 dark:text-white sm:text-2xl">
                İletişim
              </h2>
              <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">
                Gizlilik politikası ve kişisel verilerinizle ilgili soru veya
                talepleriniz için veri sorumlusu ile iletişime geçebilirsiniz:{" "}
                <a
                  href="mailto:hello@morfweb.com"
                  className="text-zinc-900 underline underline-offset-2 transition-colors hover:text-zinc-700 dark:text-white dark:hover:text-zinc-300"
                >
                  hello@morfweb.com
                </a>
              </p>
            </section>
          </article>
        </div>
      </div>
    </main>
  );
}
