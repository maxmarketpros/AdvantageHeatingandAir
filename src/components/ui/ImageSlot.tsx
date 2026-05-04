import { imageManifest } from "@/config/images";
import { cn } from "@/lib/utils";
import { buildSrcsets } from "@/lib/imageSrcset";
import { ImageIcon } from "lucide-react";

interface ImageSlotProps {
  imageKey: string;
  aspectRatio?: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
  fill?: boolean;
  overlayClassName?: string;
}

function Placeholder({
  imageKey,
  fill,
  className,
  overlayClassName,
  aspectRatio,
}: {
  imageKey: string;
  fill?: boolean;
  className?: string;
  overlayClassName?: string;
  aspectRatio?: string;
}) {
  const isDarkContext =
    overlayClassName?.includes("bg-black") ||
    overlayClassName?.includes("bg-gradient") ||
    overlayClassName?.includes("foreground");

  if (fill) {
    return (
      <div className={cn("relative overflow-hidden", className)}>
        <div
          className={cn(
            "absolute inset-0 flex flex-col items-center justify-center gap-3",
            isDarkContext ? "bg-foreground" : "bg-surface-dark"
          )}
        >
          <ImageIcon
            className={cn("h-12 w-12", isDarkContext ? "text-white/20" : "text-muted-light")}
            strokeWidth={1.5}
          />
          <span
            className={cn(
              "text-xs font-medium uppercase tracking-wider",
              isDarkContext ? "text-white/20" : "text-muted-light"
            )}
          >
            {imageKey}
          </span>
        </div>
        {overlayClassName && <div className={cn("absolute inset-0", overlayClassName)} />}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-3 rounded-xl bg-surface-dark border border-border",
        className
      )}
      style={{ aspectRatio: aspectRatio || "4/3" }}
    >
      <ImageIcon className="h-10 w-10 text-muted-light" strokeWidth={1.5} />
      <span className="text-xs font-medium uppercase tracking-wider text-muted-light">{imageKey}</span>
    </div>
  );
}

export function ImageSlot({
  imageKey,
  aspectRatio,
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  className,
  fill = false,
  overlayClassName,
}: ImageSlotProps) {
  const config = imageManifest[imageKey];

  if (!config) {
    return (
      <Placeholder
        imageKey={imageKey}
        fill={fill}
        className={className}
        overlayClassName={overlayClassName}
        aspectRatio={aspectRatio}
      />
    );
  }

  const focalX = config.focalPoint?.x ?? 0.5;
  const focalY = config.focalPoint?.y ?? 0.5;
  const objectPosition = `${focalX * 100}% ${focalY * 100}%`;

  const srcsets = buildSrcsets(config.src);
  const fallbackSrc = srcsets?.fallbackSrc ?? config.src;

  const imgEl = (
    <img
      src={fallbackSrc}
      srcSet={srcsets?.fallback}
      sizes={sizes}
      alt={config.alt}
      width={config.width}
      height={config.height}
      loading={priority ? "eager" : "lazy"}
      decoding={priority ? "sync" : "async"}
      fetchPriority={priority ? "high" : "auto"}
      className={fill ? "absolute inset-0 h-full w-full object-cover" : "h-full w-full object-cover"}
      style={{ objectPosition }}
    />
  );

  const picture = (
    <picture>
      {srcsets && <source type="image/avif" srcSet={srcsets.avif} sizes={sizes} />}
      {srcsets && <source type={srcsets.fallbackType === "image/png" ? "image/webp" : "image/webp"} srcSet={srcsets.webp} sizes={sizes} />}
      {imgEl}
    </picture>
  );

  if (fill) {
    return (
      <div className={cn("relative overflow-hidden", className)}>
        {picture}
        {overlayClassName && <div className={cn("absolute inset-0", overlayClassName)} />}
      </div>
    );
  }

  return (
    <div
      className={cn("relative overflow-hidden rounded-xl", className)}
      style={aspectRatio ? { aspectRatio } : undefined}
    >
      {picture}
      {overlayClassName && <div className={cn("absolute inset-0", overlayClassName)} />}
    </div>
  );
}
