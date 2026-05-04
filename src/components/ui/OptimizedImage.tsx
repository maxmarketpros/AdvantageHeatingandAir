import { buildSrcsets } from "@/lib/imageSrcset";

interface OptimizedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  sizes?: string;
  priority?: boolean;
  className?: string;
  pictureClassName?: string;
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  priority = false,
  className,
  pictureClassName,
}: OptimizedImageProps) {
  const srcsets = buildSrcsets(src);
  const fallbackSrc = srcsets?.fallbackSrc ?? src;

  return (
    <picture className={pictureClassName}>
      {srcsets && <source type="image/avif" srcSet={srcsets.avif} sizes={sizes} />}
      {srcsets && <source type="image/webp" srcSet={srcsets.webp} sizes={sizes} />}
      <img
        src={fallbackSrc}
        srcSet={srcsets?.fallback}
        sizes={sizes}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "sync" : "async"}
        fetchPriority={priority ? "high" : "auto"}
        className={className}
      />
    </picture>
  );
}
