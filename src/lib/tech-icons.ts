import {
  siNextdotjs,
  siReact,
  siTypescript,
  siTailwindcss,
  siPhp,
  siMysql,
  siHtml5,
  siCss,
  siBootstrap,
  siFigma,
  siVercel,
  siJest,
  siEslint,
  siLighthouse,
  siGoogleanalytics,
  siMiro,
  siNotion,
  siDocker,
  siGithubactions,
  siNodedotjs,
  siPostgresql,
  siStripe,
  siExpo,
} from "simple-icons";
import type { SimpleIcon } from "simple-icons";

/** Slug -> simple-icons icon (ProcessTimeline + service detail sayfası için ortak) */
export const TECH_ICONS_BY_SLUG: Record<string, SimpleIcon> = {
  nextdotjs: siNextdotjs,
  react: siReact,
  typescript: siTypescript,
  tailwindcss: siTailwindcss,
  php: siPhp,
  mysql: siMysql,
  html5: siHtml5,
  css: siCss,
  bootstrap: siBootstrap,
  figma: siFigma,
  vercel: siVercel,
  jest: siJest,
  eslint: siEslint,
  lighthouse: siLighthouse,
  googleanalytics: siGoogleanalytics,
  miro: siMiro,
  notion: siNotion,
  docker: siDocker,
  githubactions: siGithubactions,
  nodedotjs: siNodedotjs,
  postgresql: siPostgresql,
  stripe: siStripe,
  expo: siExpo,
};

/** Marka renkleri yedek (simple-icons hex bazen eksik olabiliyor) */
export const FALLBACK_HEX: Record<string, string> = {
  php: "#777BB4",
  mysql: "#4479A1",
  html5: "#E34F26",
  css: "#1572B6",
  tailwindcss: "#06B6D4",
  bootstrap: "#7952B3",
  nextdotjs: "#000000",
  react: "#61DAFB",
  typescript: "#3178C6",
  figma: "#F24E1E",
  vercel: "#000000",
  jest: "#C21325",
  eslint: "#4B32C3",
  lighthouse: "#F44B21",
  googleanalytics: "#E37400",
  miro: "#050038",
  notion: "#000000",
  docker: "#2496ED",
  githubactions: "#2088FF",
  nodedotjs: "#339933",
  postgresql: "#4169E1",
  stripe: "#635BFF",
  expo: "#000020",
};

export function isLightHex(hex: string): boolean {
  let h = hex.replace(/^#/, "");
  if (h.length === 3) h = h[0] + h[0] + h[1] + h[1] + h[2] + h[2];
  const r = parseInt(h.slice(0, 2), 16) / 255;
  const g = parseInt(h.slice(2, 4), 16) / 255;
  const b = parseInt(h.slice(4, 6), 16) / 255;
  const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  return luminance > 0.6;
}
