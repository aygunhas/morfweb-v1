import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "../globals.css";
import { CookieConsent } from "@/components/CookieConsent";
import { CustomCursor } from "@/components/CustomCursor";
import { Footer } from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { PreloaderGate } from "@/components/PreloaderGate";
import { ScrollProgress } from "@/components/ScrollProgress";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Morfweb - Modern Web Çözümleri",
  description: "Modern Web Çözümleri",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <PreloaderGate>
              <Navbar />
              {children}
              <Footer />
              <CookieConsent />
            </PreloaderGate>
          </ThemeProvider>
        </NextIntlClientProvider>
        <ScrollProgress />
        <CustomCursor />
      </body>
    </html>
  );
}
