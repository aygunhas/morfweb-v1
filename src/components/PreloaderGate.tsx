"use client";

import * as React from "react";
import { usePathname } from "@/i18n/routing";
import { AnimatePresence } from "framer-motion";

import { Preloader } from "@/components/Preloader";

const PreloaderContext = React.createContext<{ isComplete: boolean }>({
  isComplete: false,
});

export function usePreloader() {
  return React.useContext(PreloaderContext);
}

export function PreloaderGate({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isLoading, setIsLoading] = React.useState(isHome);

  const isComplete = !isLoading;

  return (
    <PreloaderContext.Provider value={{ isComplete }}>
      <AnimatePresence mode="wait">
        {isHome && isLoading && (
          <Preloader onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>
      {children}
    </PreloaderContext.Provider>
  );
}
