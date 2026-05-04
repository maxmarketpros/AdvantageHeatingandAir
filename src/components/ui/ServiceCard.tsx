import Link from "next/link";
import { ArrowRight } from "lucide-react";
import * as LucideIcons from "lucide-react";
import { ImageSlot } from "./ImageSlot";
import { cn } from "@/lib/utils";
import type { ServiceConfig } from "@/types";

interface ServiceCardProps {
  service: ServiceConfig;
  className?: string;
}

export function ServiceCard({ service, className }: ServiceCardProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const IconComponent = (LucideIcons as any)[service.icon] || LucideIcons.Wrench;

  return (
    <div
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover",
        className
      )}
    >
      <div className="relative">
        <ImageSlot
          imageKey={service.cardImage}
          aspectRatio="4/3"
          className="rounded-none rounded-t-2xl"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute -bottom-5 right-5 flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-badge">
          <IconComponent className="h-5 w-5 text-primary-500" />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6 pt-8">
        <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
          {service.excerpt}
        </p>
        <Link
          href={`/${service.slug}`}
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wider text-primary-500 transition-colors hover:text-primary-700"
        >
          Explore Service
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
