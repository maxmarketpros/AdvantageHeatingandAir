import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePageBody } from "@/components/sections/ServicePageBody";
import { AreaPageBody } from "@/components/sections/AreaPageBody";
import { BlogPostBody } from "@/components/sections/BlogPostBody";
import { services } from "@/config/services";
import { areas } from "@/config/areas";
import { blogPosts } from "@/config/blog";
import { generatePageMetadata } from "@/lib/metadata";

interface CatchAllPageProps {
  params: Promise<{ slug: string }>;
}

// Resolve a single root-level slug to one of: a service, a service-area page,
// or a blog post. All three were at the root in the legacy site, so to preserve
// SEO we keep them at the root here too.
function resolve(slug: string) {
  const service = services.find((s) => s.slug === slug);
  if (service) return { kind: "service" as const, service };

  const area = areas.find((a) => a.slug === slug);
  if (area) return { kind: "area" as const, area };

  const post = blogPosts.find((p) => p.slug === slug);
  if (post) return { kind: "post" as const, post };

  return null;
}

export function generateStaticParams() {
  return [
    ...services.map((s) => ({ slug: s.slug })),
    ...areas.map((a) => ({ slug: a.slug })),
    ...blogPosts.map((p) => ({ slug: p.slug })),
  ];
}

export async function generateMetadata({
  params,
}: CatchAllPageProps): Promise<Metadata> {
  const { slug } = await params;
  const r = resolve(slug);
  if (!r) return {};

  if (r.kind === "service") {
    return generatePageMetadata({
      title: `${r.service.title} in Oklahoma City, OK`,
      description: r.service.excerpt,
      path: `/${r.service.slug}`,
    });
  }
  if (r.kind === "area") {
    return generatePageMetadata({
      title: r.area.title,
      description: r.area.excerpt,
      path: `/${r.area.slug}`,
    });
  }
  return generatePageMetadata({
    title: r.post.title,
    description: r.post.excerpt,
    path: `/${r.post.slug}`,
  });
}

export default async function CatchAllPage({ params }: CatchAllPageProps) {
  const { slug } = await params;
  const r = resolve(slug);

  if (!r) notFound();

  if (r.kind === "service") return <ServicePageBody service={r.service} />;
  if (r.kind === "area") return <AreaPageBody area={r.area} />;
  return <BlogPostBody post={r.post} />;
}
