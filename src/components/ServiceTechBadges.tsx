"use client";

import * as React from "react";
import {
  TECH_ICONS_BY_SLUG,
  FALLBACK_HEX,
  isLightHex,
} from "@/lib/tech-icons";
import type { TechBadgeItem } from "@/components/TechBadges";

/** ProcessTimeline TechLogos ile aynı yöntem: Client Component + lib/tech-icons */
export function ServiceTechBadges({ items }: { items: TechBadgeItem[] }) {
  const [hoveredSlug, setHoveredSlug] = React.useState<string | null>(null);

  if (!items?.length) return null;

  return (
    <div
      className="flex flex-wrap items-center gap-4"
      aria-label="Kullanılan teknolojiler"
      style={{ isolation: "isolate" as const }}
    >
      {items.map(({ slug, label }, index) => {
        const icon = TECH_ICONS_BY_SLUG[slug];

        if (!icon) {
          return (
            <span
              key={`${slug}-${index}`}
              className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 bg-zinc-100 px-4 py-2.5 text-sm font-medium text-zinc-700 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-300"
            >
              {label || slug}
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
            key={`${slug}-${index}`}
            className="process-timeline-tech-logo group flex h-11 shrink-0 items-center gap-3 rounded-xl border-0 pl-2.5 pr-4 transition-all duration-300 ease-out hover:scale-110"
            style={{
              backgroundColor: hexFull,
              boxShadow: isHovered ? hoverGlow : baseGlow,
              ["--logo-bg" as string]: hexFull,
              ["--logo-glow" as string]: isHovered ? hoverGlow : baseGlow,
            }}
            title={icon.title}
            onMouseEnter={() => setHoveredSlug(slug)}
            onMouseLeave={() => setHoveredSlug(null)}
          >
            <span className="flex h-6 w-6 shrink-0 items-center justify-center">
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
              {label || icon.title || slug}
            </span>
          </span>
        );
      })}
    </div>
  );
}
