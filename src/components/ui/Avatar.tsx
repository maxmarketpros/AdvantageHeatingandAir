import { cn } from "@/lib/utils";

interface AvatarProps {
  name: string;
  className?: string;
}

// Deterministic gradient avatar built from a person's name — used for review
// cards where we don't have a real profile photo.
const palette = [
  "from-primary-500 to-primary-700",
  "from-accent-500 to-accent-700",
  "from-emerald-500 to-emerald-700",
  "from-amber-500 to-amber-600",
  "from-fuchsia-500 to-fuchsia-700",
  "from-sky-500 to-sky-700",
];

function pickColor(name: string): string {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = (hash * 31 + name.charCodeAt(i)) >>> 0;
  }
  return palette[hash % palette.length];
}

function initials(name: string): string {
  const parts = name.trim().split(/\s+/);
  const first = parts[0]?.[0] ?? "";
  const last = parts.length > 1 ? parts[parts.length - 1][0] : "";
  return (first + last).toUpperCase() || "?";
}

export function Avatar({ name, className }: AvatarProps) {
  return (
    <div
      className={cn(
        "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br text-sm font-bold text-white shadow-sm",
        pickColor(name),
        className
      )}
      aria-hidden="true"
    >
      {initials(name)}
    </div>
  );
}
