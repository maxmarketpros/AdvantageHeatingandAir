import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { businessConfig } from "@/config/business";
import { blogPosts } from "@/config/blog";
import { imageManifest } from "@/config/images";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "HVAC Tips & Resources — Advantage Heating & Air Blog",
  description:
    "Practical HVAC advice for Oklahoma City homeowners — buying guides, maintenance tips, energy efficiency, and what to expect from a service call.",
  path: "/blog",
});

const phoneCta = {
  label: `Call ${businessConfig.phone}`,
  href: `tel:${businessConfig.phoneRaw}`,
};

export default function BlogIndexPage() {
  // Sort newest first
  const sorted = [...blogPosts].sort((a, b) => (a.date < b.date ? 1 : -1));
  const [featured, ...rest] = sorted;
  const featuredImg = imageManifest[featured.heroImage];

  return (
    <>
      <PageHero
        heading="HVAC Tips & Resources"
        subtitle="Honest, practical advice from a 25+ year Oklahoma City HVAC contractor — no fluff, no upsell."
        imageKey="blog-hero"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]}
        primaryCta={{ label: "Get a Free Estimate", href: "/contact" }}
        secondaryCta={phoneCta}
      />

      <section className="section-padding">
        <Container>
          {/* Featured */}
          <Link
            href={`/${featured.slug}`}
            className="group mb-12 grid overflow-hidden rounded-2xl bg-white shadow-card transition-all hover:-translate-y-0.5 hover:shadow-card-hover lg:grid-cols-2"
          >
            <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto">
              <Image
                src={featuredImg?.src || "/images/hvac-component-closeup.jpg"}
                alt={featuredImg?.alt || featured.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col justify-center p-8 md:p-12">
              <span className="inline-block w-fit rounded-full bg-accent-500 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white">
                Featured
              </span>
              <h2 className="mt-4 text-2xl font-bold text-foreground transition-colors group-hover:text-primary-700 md:text-3xl">
                {featured.title}
              </h2>
              <p className="mt-3 text-base text-muted">{featured.excerpt}</p>
              <div className="mt-5 flex items-center gap-4 text-sm text-muted">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  {new Date(featured.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
                <span className="h-1 w-1 rounded-full bg-muted-light" />
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  {featured.readTime}
                </span>
              </div>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wider text-primary-500">
                Read article
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Link>

          {/* Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => {
              const img = imageManifest[post.heroImage];
              return (
                <Link
                  key={post.slug}
                  href={`/${post.slug}`}
                  className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-card transition-all hover:-translate-y-1 hover:shadow-card-hover"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={img?.src || "/images/hvac-component-closeup.jpg"}
                      alt={img?.alt || post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-lg font-bold text-foreground transition-colors group-hover:text-primary-700">
                      {post.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm text-muted">
                      {post.excerpt}
                    </p>
                    <div className="mt-4 flex items-center gap-3 text-xs text-muted">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        {new Date(post.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                      <span className="h-1 w-1 rounded-full bg-muted-light" />
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
