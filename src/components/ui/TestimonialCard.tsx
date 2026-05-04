import { Star } from "lucide-react";
import { Avatar } from "./Avatar";
import { GoogleIcon } from "./GoogleIcon";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import type { TestimonialItem } from "@/types";

interface TestimonialCardProps {
  testimonial: TestimonialItem;
  className?: string;
}

export function TestimonialCard({
  testimonial,
  className,
}: TestimonialCardProps) {
  return (
    <a
      href={siteConfig.googleReviewUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group flex flex-col rounded-2xl bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover md:p-8",
        className
      )}
    >
      <div className="mb-4 flex items-center justify-between">
        <div className="flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={cn(
                "h-4 w-4",
                i < testimonial.rating
                  ? "fill-amber-400 text-amber-400"
                  : "fill-border text-border"
              )}
            />
          ))}
        </div>
        <GoogleIcon className="h-5 w-5" />
      </div>

      <blockquote className="flex-1 text-sm leading-relaxed text-foreground-light md:text-base">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>

      <div className="mt-6 flex items-center gap-3 border-t border-border pt-4">
        <Avatar name={testimonial.name} />
        <div className="flex-1">
          <p className="text-sm font-semibold text-foreground">
            {testimonial.name}
          </p>
          <p className="text-xs text-muted">{testimonial.title}</p>
        </div>
        <span className="text-xs font-medium uppercase tracking-wider text-muted opacity-0 transition-opacity group-hover:opacity-100">
          View on Google →
        </span>
      </div>
    </a>
  );
}
