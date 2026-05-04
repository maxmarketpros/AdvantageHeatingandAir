import { Clock, Phone, BadgeCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { businessConfig } from "@/config/business";

// 32 icicle drops with slight pseudo-random height variation. Same primary blue
// as the bar above so they look like the bar is dripping down into the page.
const icicles = [
  6, 14, 9, 18, 11, 22, 8, 15, 26, 10, 17, 13, 24, 9,
  19, 12, 28, 8, 16, 11, 21, 14, 9, 25, 13, 18, 10, 23,
  15, 11, 20, 8,
];

export function InfoBar() {
  return (
    <div className="relative bg-primary-600 text-white">
      <Container>
        <div className="flex flex-col items-center justify-center gap-3 py-3.5 text-sm md:flex-row md:gap-6">
          <div className="flex items-center gap-2">
            <BadgeCheck className="h-4 w-4 text-primary-200" />
            <span>NATE Certified</span>
          </div>
          <div className="hidden h-4 w-px bg-white/20 md:block" />
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-primary-200" />
            <span>{businessConfig.hours.display}</span>
          </div>
          <div className="hidden h-4 w-px bg-white/20 md:block" />
          <a
            href={`tel:${businessConfig.phoneRaw}`}
            className="flex items-center gap-2 transition-colors hover:text-primary-100"
          >
            <Phone className="h-4 w-4 text-primary-200" />
            <span>Call {businessConfig.phone}</span>
          </a>
        </div>
      </Container>

      {/* Icicles hanging from the bottom edge */}
      <svg
        aria-hidden="true"
        viewBox={`0 0 ${icicles.length * 32} 32`}
        preserveAspectRatio="none"
        className="pointer-events-none absolute left-0 right-0 top-full h-7 w-full md:h-9"
      >
        <defs>
          <linearGradient id="icicle-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--color-primary-600)" />
            <stop offset="55%" stopColor="#7dd3fc" />
            <stop offset="100%" stopColor="#bae6fd" />
          </linearGradient>
        </defs>
        {icicles.map((h, i) => {
          const x = i * 32;
          return (
            <polygon
              key={i}
              points={`${x},0 ${x + 32},0 ${x + 16},${h * 1.1}`}
              fill="url(#icicle-grad)"
            />
          );
        })}
        {/* Animated glossy highlight that shimmers up/down each icicle */}
        {icicles.map((h, i) => {
          const x = i * 32;
          return (
            <polygon
              key={`h-${i}`}
              points={`${x + 13},0 ${x + 18},0 ${x + 16},${h * 0.85}`}
              fill="rgba(255,255,255,0.6)"
              style={{
                animation: `icicle-shimmer ${3 + (i % 5) * 0.4}s ease-in-out ${(i % 7) * 0.3}s infinite`,
              }}
            />
          );
        })}
      </svg>
    </div>
  );
}
