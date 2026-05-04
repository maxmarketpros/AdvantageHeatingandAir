import { cn } from "@/lib/utils";

// Animated, drifting snowflakes scattered across a section background.
// The outer wrapper hosts the falling animation (`snow-fall`); an inner span
// adds a side-to-side drift (`snow-drift`) so the path looks natural rather
// than perfectly vertical. Static config — no JS, no state.

type Variant = "ice" | "light";

interface SnowflakeBackgroundProps {
  className?: string;
  /** "ice" = pale blue on light bg; "light" = white on dark bg. */
  variant?: Variant;
  /** Use bigger snowflakes for hero / standalone sections. */
  large?: boolean;
}

const flakes: {
  left: string;
  size: number;
  fallDuration: number;
  driftDuration: number;
  delay: number;
  opacity: number;
}[] = [
  { left: "4%", size: 22, fallDuration: 18, driftDuration: 5, delay: 0, opacity: 0.55 },
  { left: "11%", size: 14, fallDuration: 26, driftDuration: 7, delay: -8, opacity: 0.4 },
  { left: "18%", size: 28, fallDuration: 22, driftDuration: 6, delay: -14, opacity: 0.6 },
  { left: "25%", size: 18, fallDuration: 30, driftDuration: 8, delay: -3, opacity: 0.45 },
  { left: "32%", size: 24, fallDuration: 20, driftDuration: 5.5, delay: -10, opacity: 0.55 },
  { left: "39%", size: 12, fallDuration: 28, driftDuration: 7, delay: -18, opacity: 0.35 },
  { left: "46%", size: 30, fallDuration: 24, driftDuration: 6.5, delay: -6, opacity: 0.6 },
  { left: "53%", size: 16, fallDuration: 32, driftDuration: 8.5, delay: -20, opacity: 0.4 },
  { left: "60%", size: 22, fallDuration: 19, driftDuration: 5, delay: -2, opacity: 0.55 },
  { left: "67%", size: 26, fallDuration: 23, driftDuration: 6, delay: -12, opacity: 0.6 },
  { left: "74%", size: 14, fallDuration: 27, driftDuration: 7.5, delay: -16, opacity: 0.4 },
  { left: "81%", size: 20, fallDuration: 21, driftDuration: 5.5, delay: -7, opacity: 0.5 },
  { left: "88%", size: 28, fallDuration: 25, driftDuration: 6.5, delay: -22, opacity: 0.6 },
  { left: "94%", size: 16, fallDuration: 29, driftDuration: 7, delay: -4, opacity: 0.45 },
  { left: "8%", size: 18, fallDuration: 23, driftDuration: 6, delay: -11, opacity: 0.5 },
  { left: "57%", size: 12, fallDuration: 31, driftDuration: 8, delay: -15, opacity: 0.35 },
];

const palette: Record<Variant, { color: string; glow: string }> = {
  ice: {
    color: "#7dd3fc", // sky-300 — reads as ice on white
    glow: "rgba(125, 211, 252, 0.4)",
  },
  light: {
    color: "#ffffff", // pure white — reads cleanly on the dark blue panel
    glow: "rgba(255, 255, 255, 0.55)",
  },
};

export function SnowflakeBackground({
  className,
  variant = "ice",
  large = false,
}: SnowflakeBackgroundProps) {
  const { color, glow } = palette[variant];
  const sizeBoost = large ? 2.4 : 1; // make "big" snowflakes much chunkier
  const opacityBoost = variant === "light" ? 1.15 : 1;

  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className
      )}
    >
      {flakes.map((f, i) => (
        <span
          key={i}
          className="absolute top-0 animate-snow-fall"
          style={{
            left: f.left,
            animationDuration: `${f.fallDuration}s`,
            animationDelay: `${f.delay}s`,
          }}
        >
          <span
            className="block animate-snow-drift select-none"
            style={{
              fontSize: f.size * sizeBoost,
              color,
              opacity: Math.min(0.95, f.opacity * opacityBoost),
              animationDuration: `${f.driftDuration}s`,
              textShadow: `0 0 ${large ? 16 : 6}px ${glow}`,
              lineHeight: 1,
            }}
          >
            ❄
          </span>
        </span>
      ))}
    </div>
  );
}
