import { siteConfig } from "@/config/site";
import { businessConfig } from "@/config/business";
import type { ServiceConfig, FAQItem } from "@/types";

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
    "@type": "HVACBusiness",
    "@id": `${siteConfig.url}/#business`,
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: businessConfig.phone,
    email: businessConfig.email,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    logo: `${siteConfig.url}/logo.png`,
    priceRange: "$$",
    foundingDate: `${businessConfig.yearEstablished}`,
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
    serviceType: service.title,
    provider: {
      "@type": "HVACBusiness",
      "@id": `${siteConfig.url}/#business`,
      name: siteConfig.name,
      url: siteConfig.url,
      telephone: businessConfig.phone,
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
  heroImage?: string;
}) {
  const url = `${siteConfig.url}/${post.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    image: post.heroImage
      ? `${siteConfig.url}${post.heroImage}`
      : `${siteConfig.url}${siteConfig.ogImage}`,
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
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    url,
  };
}

export function generateFAQSchema(items: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
