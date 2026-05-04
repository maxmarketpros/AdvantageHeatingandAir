import { siteConfig } from "@/config/site";
import { businessConfig } from "@/config/business";
import type { ServiceConfig } from "@/types";

const DAY_ORDER = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"] as const;
const DAY_FULL: Record<string, string> = {
  Mo: "Monday",
  Tu: "Tuesday",
  We: "Wednesday",
  Th: "Thursday",
  Fr: "Friday",
  Sa: "Saturday",
  Su: "Sunday",
};

// Expand a "Mo-Sa" / "Mo-Su" / "Mo" specifier into the full list of days.
function expandDayRange(spec: string): string[] {
  if (!spec.includes("-")) {
    return [DAY_FULL[spec]].filter(Boolean);
  }
  const [from, to] = spec.split("-");
  const start = DAY_ORDER.indexOf(from as typeof DAY_ORDER[number]);
  const end = DAY_ORDER.indexOf(to as typeof DAY_ORDER[number]);
  if (start < 0 || end < 0) return [];
  const out: string[] = [];
  for (let i = start; i <= end; i++) out.push(DAY_FULL[DAY_ORDER[i]]);
  return out;
}

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HVACBusiness"],
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: businessConfig.phone,
    email: businessConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: businessConfig.address.street,
      addressLocality: businessConfig.address.city,
      addressRegion: businessConfig.address.state,
      postalCode: businessConfig.address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: businessConfig.coordinates.lat,
      longitude: businessConfig.coordinates.lng,
    },
    openingHoursSpecification: businessConfig.hours.structured.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: expandDayRange(h.days),
      opens: h.opens,
      closes: h.closes,
    })),
    areaServed: businessConfig.serviceAreas.map((area) => ({
      "@type": "City",
      name: area,
    })),
    sameAs: Object.values(siteConfig.social).filter(Boolean),
  };
}

export function generateServiceSchema(service: ServiceConfig) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.excerpt,
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: businessConfig.serviceAreas.map((area) => ({
      "@type": "City",
      name: area,
    })),
    url: `${siteConfig.url}/${service.slug}`,
  };
}

export function generateBreadcrumbSchema(
  items: { name: string; href: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.href}`,
    })),
  };
}

export function generateBlogPostSchema(post: {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/logo.png`,
      },
    },
    mainEntityOfPage: `${siteConfig.url}/${post.slug}`,
  };
}
