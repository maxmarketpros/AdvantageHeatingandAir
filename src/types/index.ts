export interface ImageSlotConfig {
  src: string;
  alt: string;
  width: number;
  height: number;
  focalPoint?: { x: number; y: number };
}

export interface ServiceSubTopic {
  title: string;
  description: string;
  icon: string;
}

export interface ServiceConfig {
  slug: string;
  title: string;
  excerpt: string;
  icon: string;
  cardImage: string;
  heroImage: string;
  description: string[];
  benefits: BenefitItem[];
  benefitSection: {
    eyebrow: string;
    heading: string;
    subtitle: string;
  };
  features: string[];
  scopeSection: {
    eyebrow: string;
    heading: string;
    subtitle: string;
  };
  detailFeatures: {
    title: string;
    description: string;
    imageKey: string;
  }[];
  faqKeys: string[];
  ctaHeading: string;
  ctaText: string;
  topicSectionA: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    items: ServiceSubTopic[];
  };
  topicSectionB: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    items: ServiceSubTopic[];
  };
}

export interface BenefitItem {
  title: string;
  description: string;
  icon: string;
}

export interface TestimonialItem {
  name: string;
  title: string;
  quote: string;
  rating: number;
  image?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon?: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface FooterGroup {
  title: string;
  links: { label: string; href: string }[];
}

// ===== AREA PAGES =====
export interface AreaConfig {
  slug: string;
  city: string;
  cityFull: string; // e.g. "Edmond, OK"
  title: string; // page H1 — e.g. "Air Conditioning Contractor in Edmond, OK"
  excerpt: string; // ~1 sentence intro under hero
  heroImageKey: string; // unique hero image per area
  featureImageKey: string; // unique feature image per area
  intro: string[]; // 2–3 paragraphs of unique local copy
  localHook: string; // 1 sentence local-flavor reference (neighborhoods, landmarks, weather)
  localSection: {
    eyebrow: string;
    heading: string;
    body: string[]; // 1–2 paragraphs about a city-specific HVAC concern
  };
  topServices: string[]; // 4–6 service slugs/labels relevant to this area
  faqKeys: string[];
}

// ===== BLOG POSTS =====
export interface BlogPostConfig {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO date, e.g. "2024-08-15"
  readTime: string; // e.g. "5 min read"
  heroImage: string; // imageManifest key
  body: BlogBlock[];
}

export type BlogBlock =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "quote"; text: string };
