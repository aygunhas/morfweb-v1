"use client";

import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { Link } from "@/i18n/routing";

const CATEGORIES = ["Tümü", "Web", "Mobil", "Tasarım"] as const;
type Category = (typeof CATEGORIES)[number];

type PortfolioProject = {
  id: string;
  slug: string;
  title: string;
  category: Category;
  imageUrl: string;
  aspect: "4/3" | "3/4";
};

const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  { id: "1", slug: "morfweb", title: "Morfweb", category: "Web", imageUrl: "https://picsum.photos/seed/morfweb/800/600", aspect: "4/3" },
  { id: "2", slug: "techhub", title: "TechHub", category: "Web", imageUrl: "https://picsum.photos/seed/techhub/800/600", aspect: "3/4" },
  { id: "3", slug: "nexus-app", title: "Nexus App", category: "Mobil", imageUrl: "https://picsum.photos/seed/nexus/800/600", aspect: "4/3" },
  { id: "4", slug: "ventura", title: "Ventura", category: "Tasarım", imageUrl: "https://picsum.photos/seed/ventura/800/600", aspect: "3/4" },
  { id: "5", slug: "flow-dashboard", title: "Flow Dashboard", category: "Web", imageUrl: "https://picsum.photos/seed/flow/800/600", aspect: "4/3" },
  { id: "6", slug: "artisan", title: "Artisan", category: "Tasarım", imageUrl: "https://picsum.photos/seed/artisan/800/600", aspect: "3/4" },
  { id: "7", slug: "pulse", title: "Pulse", category: "Mobil", imageUrl: "https://picsum.photos/seed/pulse/800/600", aspect: "4/3" },
  { id: "8", slug: "greenway", title: "Greenway", category: "Web", imageUrl: "https://picsum.photos/seed/greenway/800/600", aspect: "3/4" },
];

function filterProjects(projects: PortfolioProject[], category: Category) {
  if (category === "Tümü") return projects;
  return projects.filter((p) => p.category === category);
}

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = React.useState<Category>("Tümü");
  const filtered = React.useMemo(
    () => filterProjects(PORTFOLIO_PROJECTS, activeCategory),
    [activeCategory]
  );

  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950">
      {/* Hero — minimalist */}
      <header className="px-4 pt-32 pb-16 text-center sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-5xl md:text-6xl">
          SEÇİLMİŞ İŞLER
        </h1>
        <p className="mt-3 text-lg italic text-zinc-500">
          Dijital dünyada bıraktığımız izler.
        </p>
      </header>

      {/* Filtre — tab menü, ortalanmış */}
      <nav
        className="flex flex-wrap items-center justify-center gap-8 px-4 pb-12 sm:px-6 lg:px-8"
        aria-label="Proje kategorileri"
      >
        <LayoutGroup>
          <ul className="flex items-center gap-8">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <li key={cat}>
                  <button
                    type="button"
                    onClick={() => setActiveCategory(cat)}
                    className={`relative py-2 text-sm font-medium transition-colors ${
                      isActive ? "text-zinc-900 dark:text-white" : "text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300"
                    }`}
                  >
                    {cat}
                    {isActive && (
                      <motion.span
                        layoutId="underline"
                        className="absolute left-0 right-0 bottom-0 h-px bg-zinc-900 dark:bg-white"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </LayoutGroup>
      </nav>

      {/* Proje ızgarası */}
      <div className="container mx-auto px-4 pb-24 sm:px-6 lg:px-8">
        <LayoutGroup>
          <motion.div
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
            layout
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((project, index) => (
                <PortfolioCard key={project.id} project={project} index={index} />
              ))}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>
      </div>
    </main>
  );
}

function PortfolioCard({
  project,
  index,
}: {
  project: PortfolioProject;
  index: number;
}) {
  const aspectClass =
    project.aspect === "4/3" ? "aspect-[4/3]" : "aspect-[3/4]";

  return (
    <Link href={`/portfolio/${project.slug}`} className="block">
      <motion.div
        layout
        data-cursor="view"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{
          duration: 0.35,
          delay: index * 0.05,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        className="group relative cursor-pointer overflow-hidden rounded-xl"
      >
        <div className={`relative w-full ${aspectClass} overflow-hidden rounded-xl`}>
          <Image
            src={project.imageUrl}
            alt=""
            fill
            className="object-cover transition-all duration-500 ease-out group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Overlay — sol alt, sadece hover'da görünür */}
          <div
            className="absolute inset-0 flex items-end justify-start bg-gradient-to-t from-black/80 via-transparent to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            aria-hidden
          >
            <div>
              <p className="text-lg font-semibold text-white">{project.title}</p>
              <p className="mt-0.5 text-sm text-white/80">{project.category}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
