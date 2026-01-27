import Image from 'next/image';

export default function Home() {
  return (
    // 1. Dış Kutu: Sayfanın tam ortasında, maksimum genişliği sınırlı
    <main className="container mx-auto px-6 py-12">
      
      {/* 2. IZGARA SİSTEMİ (GRID):
         grid-cols-1 : Mobilde tek sütun (alt alta)
         md:grid-cols-2 : Orta boy ekrandan (md) itibaren iki sütun (yan yana)
         gap-12 : Sütunlar arası boşluk
      */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* SOL TARAF (Yazılar) */}
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
            Hayalindeki Web Sitesi <span className="text-blue-600">Bir Tık Uzakta</span>
          </h1>
          <p className="text-lg text-gray-600">
            Morfweb ile işletmenizi dijital dünyaya taşıyın. Modern, hızlı ve
            tamamen size özel çözümler üretiyoruz.
          </p>
          
          <div className="flex gap-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition font-medium">
              Teklif Al
            </button>
            <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition font-medium">
              Referanslar
            </button>
          </div>
        </div>

        {/* SAĞ TARAF (Resim Alanı) */}
        <div className="relative h-64 md:h-96 w-full rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src="/banner.jpg" // public klasöründeki dosya ('/' ile başlar)
            alt="Morfweb Dijital Çözümler"
            fill // Resim kutuyu tamamen doldursun
            className="object-cover" // Resim bozulmadan (sünmeden) alanı kaplasın
          />
        </div>

      </div>
    
    </main>
  );
}