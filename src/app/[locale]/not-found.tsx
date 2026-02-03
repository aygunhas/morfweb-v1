import { getLocale, getTranslations } from "next-intl/server";

import { NotFoundView } from "@/components/NotFoundView";
import { routing } from "@/i18n/routing";

export default async function NotFound() {
  let locale: string;
  try {
    locale = await getLocale();
  } catch {
    locale = routing.defaultLocale;
  }
  if (!routing.locales.includes(locale as "tr" | "en")) {
    locale = routing.defaultLocale;
  }

  const t = await getTranslations({ locale, namespace: "NotFound" });

  return (
    <NotFoundView
      title={t("title")}
      code={t("code")}
      message={t("message")}
      backHome={t("backHome")}
      goBack={t("goBack")}
    />
  );
}
