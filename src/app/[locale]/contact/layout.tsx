import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "İletişim | Morfweb",
  description:
    "Markanızın dijital dönüşümünü başlatın. Formu doldurun, 24 saat içinde dönüş yapalım.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
