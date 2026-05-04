import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  icon?: React.ReactNode;
}

const variants = {
  primary:
    "bg-primary-500 text-white hover:bg-primary-600 shadow-sm hover:shadow-md",
  secondary:
    "bg-foreground text-white hover:bg-foreground-light shadow-sm hover:shadow-md",
  outline:
    "border-2 border-foreground text-foreground hover:bg-foreground hover:text-white",
  ghost:
    "text-primary-500 hover:bg-primary-50",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

// Anything that isn't an internal path or anchor we treat as an external URL
// and render with a plain <a target="_blank">.
function isExternal(href: string): boolean {
  return /^(https?:|mailto:|tel:)/i.test(href);
}

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  onClick,
  type = "button",
  icon,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2",
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    if (isExternal(href) && !href.startsWith("mailto:") && !href.startsWith("tel:")) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {children}
          {icon}
        </a>
      );
    }

    if (
      href.startsWith("mailto:") ||
      href.startsWith("tel:") ||
      href.startsWith("#")
    ) {
      return (
        <a href={href} className={classes} onClick={onClick}>
          {children}
          {icon}
        </a>
      );
    }

    return (
      <Link href={href} className={classes}>
        {children}
        {icon}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
      {icon}
    </button>
  );
}
