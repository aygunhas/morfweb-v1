import { notFound } from "next/navigation";

/**
 * [locale] altında tanımlı olmayan tüm yolları yakalar ve notFound() ile
 * özel 404 sayfamızı (not-found.tsx) tetikler.
 * Ör: /tr/olmayan, /en/foo/bar → bu sayfa çalışır, notFound() → not-found.tsx
 */
export default function NotFoundCatchAll() {
  notFound();
}
