"use server"; // 1. BU ÇOK ÖNEMLİ! (Bu dosya sadece sunucuda çalışsın demek)

// Bu fonksiyon PHP'deki 'gonder.php' dosyasının aynısıdır.
export async function formGonder(formData: any) {
  
  // Simülasyon: Sanki veritabanına kaydediyormuşuz gibi 1 saniye bekleyelim
  await new Promise(resolve => setTimeout(resolve, 1000));

  console.log("SERVER TARAFINDAN GELEN MESAJ:");
  console.log("Veritabanına kaydedilecek veri:", formData);

  // İşlem başarılıysa geriye bir cevap dönelim
  return {
    success: true,
    message: "Veriler sunucuya ulaştı ve kaydedildi!"
  };
}