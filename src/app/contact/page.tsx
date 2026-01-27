"use client"; // 1. BU SATIR ÇOK ÖNEMLİ! (Bunu silersen form çalışmaz)

import { useState } from "react"; // React'in hafızası (State)
import { formGonder } from "@/app/actions"; // Backend fonksiyonunu çağırdık

export default function Contact() {
  // 2. State (Durum) Yönetimi:
  // PHP'de $_POST['name'] yapardın. Burada değişkenleri anlık takip ediyoruz.
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  // Kullanıcı bir tuşa bastığında bu çalışır
  const handleChange = (e: any) => {
    // Mevcut verileri koru (...formData), değişen alanı güncelle
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

// Form gönderilince bu çalışır
const handleSubmit = async (e: any) => {
    e.preventDefault();
    
    // Kullanıcıya "Gönderiliyor..." hissi verelim (İsteğe bağlı)
    alert("Sunucuya gönderiliyor...");

    // 1. Backend fonksiyonunu çağırıyoruz (PHP'ye istek atar gibi)
    const sonuc = await formGonder(formData);

    // 2. Sunucudan gelen cevabı kontrol ediyoruz
    if (sonuc.success) {
      alert("BAŞARILI: " + sonuc.message);
      // Formu temizleyebiliriz
      setFormData({ name: "", email: "", message: "" });
    } else {
      alert("Hata oluştu!");
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Bize Ulaşın</h1>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          
          {/* Ad Soyad */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Ad Soyad</label>
            <input 
              type="text" 
              name="name"
              required
              onChange={handleChange} // Her tuşa basışta hafızayı güncelle
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Ahmet Yılmaz"
            />
          </div>

          {/* E-posta */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">E-posta</label>
            <input 
              type="email" 
              name="email"
              required
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="ornek@morfweb.com"
            />
          </div>

          {/* Mesaj */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Mesajınız</label>
            <textarea 
              name="message"
              rows={4}
              required
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Projenizden bahsedin..."
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition"
          >
            Gönder
          </button>
        </form>
      </div>
    </main>
  );
}