"use client";

import * as React from "react";
import {
  siNextdotjs,
  siReact,
  siTypescript,
  siTailwindcss,
  siFigma,
  siStripe,
  siNodedotjs,
  siPostgresql,
  siExpo,
} from "simple-icons";
import type { SimpleIcon } from "simple-icons";

export type TechBadgeItem = { slug: string; label: string };

/** Sadece servis sayfasında kullanılan ikonlar — client bundle'da kesin yüklü olsun */
const TECH_ICONS: Record<string, SimpleIcon> = {
  nextdotjs: siNextdotjs,
  react: siReact,
  typescript: siTypescript,
  tailwindcss: siTailwindcss,
  figma: siFigma,
  stripe: siStripe,
  nodedotjs: siNodedotjs,
  postgresql: siPostgresql,
  expo: siExpo,
};

const FALLBACK_HEX: Record<string, string> = {
  nextdotjs: "#000000",
  react: "#61DAFB",
  typescript: "#3178C6",
  tailwindcss: "#06B6D4",
  figma: "#F24E1E",
  stripe: "#635BFF",
  nodedotjs: "#339933",
  postgresql: "#4169E1",
  expo: "#000020",
};

function isLightHex(hex: string): boolean {
  const h = hex.replace(/^#/, "").slice(0, 6);
  if (h.length === 3) {
    const r = parseInt(h[0] + h[0], 16) / 255;
    const g = parseInt(h[1] + h[1], 16) / 255;
    const b = parseInt(h[2] + h[2], 16) / 255;
    return 0.2126 * r + 0.7152 * g + 0.0722 * b > 0.6;
  }
  const r = parseInt(h.slice(0, 2), 16) / 255;
  const g = parseInt(h.slice(2, 4), 16) / 255;
  const b = parseInt(h.slice(4, 6), 16) / 255;
  return 0.2126 * r + 0.7152 * g + 0.0722 * b > 0.6;
}

function TechBadgesInner({ items }: { items: TechBadgeItem[] }) {
  const [hoveredSlug, setHoveredSlug] = React.useState<string | null>(null);

  if (!items?.length) return null;

  return (
    <div
      className="flex flex-wrap items-center gap-3"
      aria-label="Kullanılan teknolojiler"
      style={{ isolation: "isolate" as const }}
    >
      {items.map(({ slug, label }, index) => {
        const icon = TECH_ICONS[slug];
        const hasIcon = !!icon && typeof icon.path === "string";
        const key = `${slug}-${index}`;

        if (!hasIcon) {
          return (
            <span
              key={key}
              className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 bg-zinc-100 px-4 py-2.5 text-sm font-medium text-zinc-700 transition-all duration-300 ease-out dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-300"
            >
              {label ?? slug}
            </span>
          );
        }

        const hex = (icon.hex || FALLBACK_HEX[slug] || "#71717a")
          .replace(/^#/, "")
          .slice(0, 6);
        const hexFull = `#${hex}`;
        const isHovered = hoveredSlug === slug;
        const iconFill = isLightHex(hexFull) ? "#0a0a0a" : "#ffffff";
        const textColor = isLightHex(hexFull) ? "#0a0a0a" : "#ffffff";
        const baseGlow = `0 0 14px #${hex}80, 0 0 28px #${hex}50`;
        const hoverGlow = `0 0 20px #${hex}cc, 0 0 40px #${hex}99, 0 0 60px #${hex}66`;

        return (
          <span
            key={key}
            className="group inline-flex h-11 shrink-0 items-center gap-3 rounded-xl border-0 pl-2.5 pr-4 transition-all duration-300 ease-out hover:scale-105"
            style={{
              backgroundColor: hexFull,
              boxShadow: isHovered ? hoverGlow : baseGlow,
            }}
            title={icon.title}
            onMouseEnter={() => setHoveredSlug(slug)}
            onMouseLeave={() => setHoveredSlug(null)}
          >
            <span className="flex h-7 w-7 shrink-0 items-center justify-center overflow-visible">
              <svg
                role="img"
                viewBox="0 0 24 24"
                className="h-full w-full shrink-0 transition-transform duration-300 group-hover:scale-105"
                fill={iconFill}
                style={{ fill: iconFill }}
                aria-hidden
              >
                <path d={icon.path} />
              </svg>
            </span>
            <span
              className="text-sm font-medium leading-none"
              style={{ color: textColor }}
            >
              {label ?? icon.title ?? slug}
            </span>
          </span>
        );
      })}
    </div>
  );
}

export function TechBadges({ items }: { items: TechBadgeItem[] }) {
  return <TechBadgesInner items={items ?? []} />;
}
