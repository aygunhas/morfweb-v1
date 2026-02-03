# ProcessTimeline — Görsel Alanları Rehberi

Her adımda ne tür içerik kullanmanız gerektiği ve nereden bulacağınız / nasıl oluşturacağınız.

---

## Hareketli görseller (GIF / loop video) — ücretsiz, telif sorunu yok

Aşağıdaki kaynaklar **ticari kullanım** için uygun, **atıf zorunluluğu olmayan** (veya açıkça belirtilen) içerik sunar. Kullanmadan önce her sitenin lisans sayfasını okuyun.

### Loop video (MP4 / WebM)

| Kaynak | Açıklama | Lisans |
|--------|----------|--------|
| **Pexels** | Ücretsiz stok video; "loop", "analytics", "coding", "rocket launch" aramaları. | Ticari kullanım, atıf zorunlu değil. |
| **Pixabay** | 2000+ loop video, HD/4K. "loop", "looping", "data", "deploy" vb. | Royalty-free, ticari kullanım. |
| **Mixkit** | Ücretsiz loop / VJ / neon / 3D animasyon videoları. | Mixkit License, ticari kullanım. |
| **Videezy** | 11.000+ ücretsiz animasyon / loop. | Royalty-free (kategoriye göre değişir, kontrol edin). |
| **Coverr** | Kısa, döngüsel arka plan videoları. | Ücretsiz ticari kullanım. |

**Arama önerileri:** `loop`, `looping`, `data analytics`, `coding`, `rocket launch`, `deploy`, `checklist`, `minimal animation`.

- **Pexels Video:** https://www.pexels.com/search/videos/loop/
- **Pixabay Loop:** https://pixabay.com/videos/search/loop/
- **Mixkit Free Stock Video:** https://mixkit.co/free-stock-video/loop/
- **Videezy Animated Loop:** https://www.videezy.com/free-video/animated-loop
- **Coverr:** https://coverr.co (kısa loop videolar)

### GIF

| Kaynak | Açıklama | Lisans |
|--------|----------|--------|
| **GIPHY** | "GIFs" sekmesinde **Creative Commons** veya **Sticker** filtresi uygulayın; yalnızca ticari kullanıma izin verenleri seçin. | Filtreleyerek "free to use" / CC içerik bulunur. |
| **LottieFiles** | Ücretsiz Lottie (JSON) animasyonlar; web’de gösterilebilir. | Çoğu ücretsiz, lisansı tek tek kontrol edin. |
| **Pixabay** | GIF bölümünde animasyonlu görseller. | Royalty-free. |

- **GIPHY:** https://giphy.com — arama yapın, sonuçlarda "Creative Commons" / ticari kullanım filtresine bakın.
- **Pixabay GIF:** https://pixabay.com/gifs/
- **LottieFiles:** https://lottiefiles.com/free-animations

### Teknik not (ProcessTimeline)

- **Video:** Adım verisine `videoSrc` ekleyin (MP4 veya WebM). Otomatik **loop, muted, autoplay, playsInline** oynatılır (tarayıcı politikası gereği ses kapalı).
- **GIF:** Adım verisine `imageSrc` ile `.gif` URL’i verin; hareketli GIF olarak gösterilir. Harici siteden (Pixabay, GIPHY vb.) GIF kullanıyorsanız, `next.config.ts` içinde `images.remotePatterns`’a o domain’i eklemeniz gerekebilir.
- **Öncelik:** Aynı adımda hem `videoSrc` hem `imageSrc` varsa **video** kullanılır.

---

## 1. Analiz & Strateji

**Önerilen içerik türü:** Veri / analiz / strateji hissi veren görsel  
- Grafik, dashboard, grafik çubukları  
- Beyaz tahta / notlar / roadmap  
- Pazar araştırması, rakip analizi çağrışımı  

**Nereden bulunur:**
- **Unsplash:** "data analytics", "business strategy", "chart dashboard", "whiteboard planning"
- **Örnek arama:** https://unsplash.com/s/photos/data-analytics  
- **Alternatif:** Mevcut placeholder (bar chart) zaten bu adımı iyi temsil ediyor; gerçek bir dashboard ekran görüntüsü veya Miro/Notion wireframe de kullanılabilir.

**Stil:** Sade, kurumsal, hafif koyu veya nötr tonlar.

---

## 2. Tasarım & UI/UX

**Önerilen içerik türü:** Tasarım / estetik / kullanıcı deneyimi  
- Tasarım nesnesi (heykel, tipografi, renk paleti)  
- Wireframe, ekran tasarımı, Figma benzeri arayüz  
- Eller / sketch / tasarım süreci  

**Şu an:** Davud heykeli (Unsplash) — estetik ve “tasarım” mesajı için uygun.

**Nereden bulunur:**
- **Unsplash:** "design", "figma", "ui design", "wireframe", "minimal design"
- **Figma Community:** Ücretsiz UI kit veya ekran görüntüsü alıp statik görsel olarak kullanabilirsiniz.

**Stil:** Minimal, estetik, siyah-beyaz veya tek vurgu renk.

---

## 3. Geliştirme & Kodlama

**Önerilen içerik türü:** Kod / geliştirme ortamı  
- IDE ekran görüntüsü (VS Code, PHPStorm vb.)  
- Terminal, kod satırları  
- Next.js / React projesi açık bir editör  

**Şu an:** Placeholder (sahte kod bloğu) — yeterli; gerçek ekran görüntüsü daha inandırıcı olur.

**Nasıl oluşturulur:**
1. Kendi editörünüzde (VS Code vb.) temiz bir proje açın.  
2. Ekran görüntüsü alın (koyu tema tercih edin).  
3. `public/` veya bir CDN’e yükleyip `imageSrc` ile kullanın.  
- **Alternatif:** https://unsplash.com/s/photos/coding — "coding", "code editor", "developer" aramaları.

**Stil:** Koyu tema, monospace font, az dağınık pencere.

---

## 4. Test & Kalite Güvencesi

**Önerilen içerik türü:** Test / kalite / kontrol  
- Checklist, büyüteç, onay işareti  
- Test ekranı, Lighthouse / DevTools benzeri arayüz  
- Kalite kontrolü yapan insan veya araç  

**Şu an:** SearchCheck ikonu — mesaj doğru; daha “prodüksiyon” bir görünüm için foto veya illüstrasyon eklenebilir.

**Nereden bulunur:**
- **Unsplash:** "quality check", "checklist", "testing", "magnifying glass"
- **İllüstrasyon:** Undraw, Storyset — "quality", "testing", "checklist" (SVG/PNG, marka rengine uyarlanabilir).

**Stil:** Net, güven veren; tek figür veya basit kompozisyon.

---

## 5. Yayına Alma & Canlıya Geçiş

**Önerilen içerik türü:** Launch / deploy / sunucu / dünya  
- Roket, fırlatma  
- Sunucu odası, kablo / veri merkezi  
- Dünya küresi, “global” / “canlı” hissi  
- CI/CD pipeline veya Vercel/Docker ekranı  

**Şu an:** Rocket ikonu — “yayına alma” için uygun; foto ile güçlendirilebilir.

**Nereden bulunur:**
- **Unsplash:** "rocket launch", "server room", "data center", "deploy", "global network"
- **Örnek:** https://unsplash.com/s/photos/rocket-launch

**Stil:** Teknoloji / uzay / “go live” hissi; koyu veya vurgulu renk.

---

## Genel İpuçları

| Kaynak            | Ne için                          | Lisans        |
|-------------------|-----------------------------------|---------------|
| **Unsplash**      | Fotoğraf (analiz, tasarım, test, yayın) | Ücretsiz, ticari |
| **Pexels**        | Alternatif fotoğraf              | Ücretsiz      |
| **Undraw / Storyset** | İllüstrasyon (SVG)            | Ücretsiz      |
| **Kendi ekran görüntüsü** | Kod editörü, dashboard, Figma | Kendi içeriğiniz |
| **Figma Community** | UI ekranı, wireframe           | Ücretsiz (kullanım şartına uygun) |

- **Oran:** Görsel alanı `aspect-[4/3]`; 4:3 veya 16:10 oranında görseller en iyi doldurur.  
- **Boyut:** `max-w-md` kullanıldığı için 800–1200 px genişlik yeterli.  
- **next.config:** `images.unsplash.com` zaten tanımlı; başka domain kullanırsanız `remotePatterns`’a ekleyin.
