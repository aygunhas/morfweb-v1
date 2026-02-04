"use client";

import * as React from "react";

const HIZMETLER = [
  "Web Geliştirme",
  "Mobil Uygulama",
  "UI/UX Tasarım",
  "Özel Yazılım",
  "Diğer",
] as const;

const BUTCE_SECENEKLERI = ["10-50K", "50-100K", "100-250K", "250K+"] as const;

export type ContactFormData = {
  ad: string;
  email: string;
  sirket: string;
  hizmetler: string[];
  butce: string | null;
  mesaj: string;
  kvkkOnay: boolean;
};

const initialFormData: ContactFormData = {
  ad: "",
  email: "",
  sirket: "",
  hizmetler: [],
  butce: null,
  mesaj: "",
  kvkkOnay: false,
};

export function ContactForm() {
  const [formData, setFormData] = React.useState<ContactFormData>(initialFormData);

  const update = (
    key: keyof ContactFormData,
    value: string | string[] | null | boolean
  ) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const toggleHizmet = (h: string) => {
    setFormData((prev) => ({
      ...prev,
      hizmetler: prev.hizmetler.includes(h)
        ? prev.hizmetler.filter((x) => x !== h)
        : [...prev.hizmetler, h],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.kvkkOnay) return;
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-xl space-y-10">
      {/* Giriş alanları */}
      <div className="space-y-8">
        <label className="block">
          <span className="sr-only">Ad Soyad</span>
          <input
            type="text"
            placeholder="Ad Soyad"
            value={formData.ad}
            onChange={(e) => update("ad", e.target.value)}
            className="w-full border-b border-zinc-300 bg-transparent py-3 text-zinc-900 placeholder:text-zinc-500 focus:border-zinc-900 focus:outline-none dark:border-zinc-700 dark:text-white dark:placeholder:text-zinc-500 dark:focus:border-white"
          />
        </label>
        <label className="block">
          <span className="sr-only">E-posta</span>
          <input
            type="email"
            placeholder="E-posta"
            value={formData.email}
            onChange={(e) => update("email", e.target.value)}
            className="w-full border-b border-zinc-300 bg-transparent py-3 text-zinc-900 placeholder:text-zinc-500 focus:border-zinc-900 focus:outline-none dark:border-zinc-700 dark:text-white dark:placeholder:text-zinc-500 dark:focus:border-white"
          />
        </label>
        <label className="block">
          <span className="sr-only">Şirket Adı</span>
          <input
            type="text"
            placeholder="Şirket Adı"
            value={formData.sirket}
            onChange={(e) => update("sirket", e.target.value)}
            className="w-full border-b border-zinc-300 bg-transparent py-3 text-zinc-900 placeholder:text-zinc-500 focus:border-zinc-900 focus:outline-none dark:border-zinc-700 dark:text-white dark:placeholder:text-zinc-500 dark:focus:border-white"
          />
        </label>
      </div>

      {/* Hizmet seçimi */}
      <div>
        <p className="mb-4 text-sm font-medium text-zinc-600 dark:text-zinc-400">
          Hangi hizmete ihtiyacınız var?
        </p>
        <div className="flex flex-wrap gap-3">
          {HIZMETLER.map((h) => {
            const selected = formData.hizmetler.includes(h);
            return (
              <button
                key={h}
                type="button"
                onClick={() => toggleHizmet(h)}
                className={`rounded border px-4 py-2.5 text-sm font-medium transition-colors ${
                  selected
                    ? "border-white bg-white text-black"
                    : "border-zinc-700 bg-transparent text-zinc-400 hover:border-zinc-500 hover:text-zinc-300 dark:border-zinc-600 dark:text-zinc-400 dark:hover:border-zinc-500 dark:hover:text-zinc-300"
                }`}
              >
                {h}
              </button>
            );
          })}
        </div>
      </div>

      {/* Bütçe aralığı */}
      <div>
        <p className="mb-4 text-sm font-medium text-zinc-600 dark:text-zinc-400">
          Tahmini Bütçeniz?
        </p>
        <div className="flex flex-wrap gap-3">
          {BUTCE_SECENEKLERI.map((b) => {
            const selected = formData.butce === b;
            return (
              <button
                key={b}
                type="button"
                onClick={() => update("butce", formData.butce === b ? null : b)}
                className={`rounded border px-4 py-2.5 text-sm font-medium transition-colors ${
                  selected
                    ? "border-white bg-white text-black"
                    : "border-zinc-700 bg-transparent text-zinc-400 hover:border-zinc-500 hover:text-zinc-300 dark:border-zinc-600 dark:text-zinc-400 dark:hover:border-zinc-500 dark:hover:text-zinc-300"
                }`}
              >
                {b}
              </button>
            );
          })}
        </div>
      </div>

      {/* Mesaj */}
      <div>
        <label className="block">
          <span className="sr-only">Projenizden bahsedin</span>
          <textarea
            placeholder="Projenizden bahsedin..."
            value={formData.mesaj}
            onChange={(e) => update("mesaj", e.target.value)}
            rows={5}
            className="w-full resize-y border-b border-zinc-300 bg-transparent py-3 text-zinc-900 placeholder:text-zinc-500 focus:border-zinc-900 focus:outline-none dark:border-zinc-700 dark:text-white dark:placeholder:text-zinc-500 dark:focus:border-white"
          />
        </label>
      </div>

      {/* Yasal onay — KVKK / iletişim metni */}
      <label className="flex cursor-pointer items-start gap-3">
        <input
          type="checkbox"
          checked={Boolean(formData.kvkkOnay)}
          onChange={(e) => update("kvkkOnay", e.target.checked)}
          className="mt-1 size-4 shrink-0 rounded border-zinc-400 bg-transparent text-zinc-900 focus:ring-2 focus:ring-zinc-500 focus:ring-offset-0 dark:border-zinc-600 dark:accent-white dark:focus:ring-zinc-400"
          required
        />
        <span className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          <a
            href="/gizlilik"
            className="underline decoration-zinc-500 underline-offset-2 hover:decoration-zinc-900 dark:decoration-zinc-400 dark:hover:decoration-white"
          >
            KVKK aydınlatma metni
          </a>
          {" ve "}
          <a
            href="/iletisim-metni"
            className="underline decoration-zinc-500 underline-offset-2 hover:decoration-zinc-900 dark:decoration-zinc-400 dark:hover:decoration-white"
          >
            iletişim metnini
          </a>
          {" okudum, anladım, onaylıyorum."}
        </span>
      </label>

      {/* Gönder butonu */}
      <button
        type="submit"
        disabled={!formData.kvkkOnay}
        className="flex h-14 w-full items-center justify-center bg-zinc-900 text-white transition-colors hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-white dark:text-black dark:hover:bg-zinc-200 dark:disabled:opacity-50"
      >
        <span className="text-sm font-medium tracking-wide">
          TEKLİFİ GÖNDER -&gt;
        </span>
      </button>
    </form>
  );
}
