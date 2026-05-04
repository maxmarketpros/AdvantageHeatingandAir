import { imageVariants, type ImageVariantInfo } from "./imageVariants.generated";

const OPT_BASE = "/images/_opt";

export type Srcsets = {
  avif: string;
  webp: string;
  fallback: string;
  fallbackSrc: string;
  fallbackType: "image/jpeg" | "image/png";
  largestWidth: number;
};

function deriveBasename(src: string): string {
  const file = src.split("/").pop() ?? "";
  return file.replace(/\.[^.]+$/, "");
}

function joinSrcset(basename: string, ext: string, widths: number[]): string {
  return widths.map((w) => `${OPT_BASE}/${basename}-${w}.${ext} ${w}w`).join(", ");
}

export function getVariantInfo(src: string): ImageVariantInfo | null {
  const basename = deriveBasename(src);
  return imageVariants[basename] ?? null;
}

export function buildSrcsets(src: string): Srcsets | null {
  const basename = deriveBasename(src);
  const info = imageVariants[basename];
  if (!info) return null;

  const widths = info.widths;
  const largestWidth = widths[widths.length - 1];
  const fallbackExt = info.fallbackExt;

  return {
    avif: joinSrcset(basename, "avif", widths),
    webp: joinSrcset(basename, "webp", widths),
    fallback: joinSrcset(basename, fallbackExt, widths),
    fallbackSrc: `${OPT_BASE}/${basename}-${largestWidth}.${fallbackExt}`,
    fallbackType: fallbackExt === "png" ? "image/png" : "image/jpeg",
    largestWidth,
  };
}
