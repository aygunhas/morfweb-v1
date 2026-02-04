"use client";

import * as React from "react";
import Image from "next/image";
import { Menu, ArrowUpRight, Mail, Instagram, Linkedin, Twitter } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/routing";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ModeToggle";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);
  const t = useTranslations("Navbar");
  const pathname = usePathname();

  React.useEffect(() => setMounted(true), []);

  const links = [
    { href: "/", label: t("home") },
    { href: "/services", label: t("services") },
    { href: "/portfolio", label: t("portfolio") },
    { href: "/contact", label: t("contact") },
  ] as const;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-5 sm:h-16 sm:px-6 md:px-8 lg:px-16">
        {/* Logo */}
        <Link
          href="/"
          className="flex shrink-0 items-center transition-opacity hover:opacity-80"
          aria-label="Morfweb Ana Sayfa"
        >
          <Image
            src="/morfweb-logo.svg"
            alt="Morfweb Logo"
            width={180}
            height={44}
            className="h-9 w-auto sm:h-10 md:h-11 lg:h-12"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden items-center gap-4 lg:flex lg:gap-8"
          aria-label="Ana menü"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative inline-block text-[13px] leading-[19.5px] tracking-[0.5px] bg-gradient-to-r from-foreground via-zinc-600 to-foreground bg-clip-text text-transparent dark:via-zinc-400 [color:transparent]"
              onClick={() => {
                if (link.href.startsWith("#")) {
                  const element = document.querySelector(link.href);
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }
              }}
            >
              {link.label}
              <span
                className="absolute -bottom-0.5 left-1/2 h-px w-12 -translate-x-1/2 bg-gradient-to-r from-transparent via-foreground/60 to-transparent opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
                aria-hidden
              />
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 lg:flex">
          <ModeToggle />
          <Button
            asChild
            variant="outline"
            className="rounded-md border border-border px-3 md:px-4 lg:px-5 text-muted-foreground hover:text-foreground transition-colors dark:bg-[#e6e6e6] dark:text-[#1a202c] dark:hover:text-[#0a0a0a]"
            size="default"
          >
            <Link href="/contact" className="flex items-center gap-2">
              <span>{t("offer")}</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
          <LanguageSwitcher />
        </div>

        {/* Mobile & Tablet Menu — Radix Sheet sadece mount sonrası (hydration uyumu) */}
        <div className="flex items-center gap-2 lg:hidden">
          {mounted ? (
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9"
                aria-label="Menüyü aç"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Menüyü aç</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full sm:w-[500px] border-0 p-0 bg-zinc-50/95 dark:bg-zinc-950/90 backdrop-blur-xl"
            >
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <SheetDescription className="sr-only">
                Main navigation menu with links to all pages
              </SheetDescription>
              <div className="flex h-full flex-col">
                {/* Main Content - Centered */}
                <div className="flex flex-1 flex-col items-center justify-center px-8 py-16">
                  <motion.nav
                    className="flex flex-col items-center gap-8"
                    initial="closed"
                    animate={open ? "open" : "closed"}
                    aria-label="Mobil menü"
                  >
                    {links.map((link, index) => {
                      const isActive = pathname === link.href;
                      return (
                        <motion.div
                          key={link.href}
                          variants={{
                            open: {
                              opacity: 1,
                              y: 0,
                              transition: {
                                delay: index * 0.1,
                                duration: 0.5,
                                ease: [0.16, 1, 0.3, 1],
                              },
                            },
                            closed: {
                              opacity: 0,
                              y: -20,
                            },
                          }}
                        >
                          <Link
                            href={link.href}
                            className={`group relative text-4xl sm:text-5xl font-light text-zinc-900/70 dark:text-white/70 transition-all duration-300 ${
                              isActive
                                ? "font-semibold bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-500 dark:from-white dark:via-zinc-200 dark:to-zinc-500 bg-clip-text text-transparent"
                                : "hover:font-semibold hover:bg-gradient-to-r hover:from-zinc-900 hover:via-zinc-700 hover:to-zinc-500 dark:hover:from-white dark:hover:via-zinc-200 dark:hover:to-zinc-500 hover:bg-clip-text hover:text-transparent"
                            }`}
                            onClick={() => {
                              setOpen(false);
                              if (link.href.startsWith("#")) {
                                setTimeout(() => {
                                  const element = document.querySelector(link.href);
                                  if (element) {
                                    element.scrollIntoView({ behavior: "smooth" });
                                  }
                                }, 100);
                              }
                            }}
                          >
                            {link.label}
                          </Link>
                        </motion.div>
                      );
                    })}
                    
                    {/* Teklif Al Button - After Links */}
                    <motion.div
                      variants={{
                        open: {
                          opacity: 1,
                          y: 0,
                          transition: {
                            delay: links.length * 0.1 + 0.1,
                            duration: 0.5,
                            ease: [0.16, 1, 0.3, 1],
                          },
                        },
                        closed: {
                          opacity: 0,
                          y: -20,
                        },
                      }}
                      className="mt-8"
                    >
                      <Button
                        asChild
                        className="rounded-full border-2 border-zinc-900 dark:border-white bg-zinc-900 dark:bg-white px-8 py-6 text-white dark:text-zinc-900 text-lg font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-all shadow-lg hover:shadow-xl hover:scale-105"
                        size="lg"
                      >
                        <Link
                          href="/contact"
                          onClick={() => setOpen(false)}
                          className="flex items-center gap-2"
                        >
                          <span>{t("offer")}</span>
                          <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
                        </Link>
                      </Button>
                    </motion.div>
                  </motion.nav>
                </div>

                {/* Footer - Controls & Social Media */}
                <motion.div
                  className="border-t border-zinc-300/20 dark:border-white/10 px-8 py-6"
                  initial="closed"
                  animate={open ? "open" : "closed"}
                  variants={{
                    open: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        delay: links.length * 0.1 + 0.3,
                        duration: 0.5,
                        ease: [0.16, 1, 0.3, 1],
                      },
                    },
                    closed: {
                      opacity: 0,
                      y: 20,
                    },
                  }}
                >
                  <div className="flex flex-col items-center gap-6">
                    {/* Controls: Mode Toggle, Language Switcher */}
                    <div className="flex items-center gap-4">
                      <ModeToggle />
                      <LanguageSwitcher />
                    </div>

                    {/* Social Media Icons */}
                    <div className="flex items-center gap-6">
                      <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-600 dark:text-white/60 hover:text-zinc-900 dark:hover:text-white transition-colors"
                        aria-label="Instagram"
                      >
                        <Instagram className="h-5 w-5" />
                      </a>
                      <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-600 dark:text-white/60 hover:text-zinc-900 dark:hover:text-white transition-colors"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                      <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-600 dark:text-white/60 hover:text-zinc-900 dark:hover:text-white transition-colors"
                        aria-label="Twitter"
                      >
                        <Twitter className="h-5 w-5" />
                      </a>
                      <a
                        href="mailto:info@morfweb.com"
                        className="text-zinc-600 dark:text-white/60 hover:text-zinc-900 dark:hover:text-white transition-colors"
                        aria-label="Email"
                      >
                        <Mail className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            </SheetContent>
          </Sheet>
          ) : (
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9"
              aria-label="Menüyü aç"
              type="button"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Menüyü aç</span>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
