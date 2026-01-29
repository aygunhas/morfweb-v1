import Navbar from '@/components/Navbar';

export default function Hakkimizda() {
  return (
    <main className="min-h-screen bg-white">
      
      <div className="container mx-auto p-10">
        <h1 className="text-3xl font-bold text-blue-800 mb-4">Hakkımızda</h1>
        <p className="text-gray-700 leading-relaxed">
          Morfweb, freelancer bir geliştiricinin kurumsal dünyaya açılan kapısıdır.
          4 yıllık tecrübemizle modern web teknolojilerini buluşturuyoruz.
        </p>
        
        <div className="mt-8 p-6 bg-gray-100 rounded-lg border-l-4 border-blue-500">
          <h2 className="text-xl font-bold mb-2">Misyonumuz</h2>
          <p>En temiz kodla, en hızlı web sitelerini oluşturmak.</p>
        </div>
      </div>
    </main>
  );
}