import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/sections/CTASection";
import { businessConfig } from "@/config/business";
import { blogPosts } from "@/config/blog";
import { generateBlogPostSchema, generateBreadcrumbSchema } from "@/lib/structured-data";
import type { BlogPostConfig, BlogBlock } from "@/types";

interface BlogPostBodyProps {
  post: BlogPostConfig;
}

function renderBlock(block: BlogBlock, i: number) {
  switch (block.type) {
    case "h2":
      return <h2 key={i}>{block.text}</h2>;
    case "h3":
      return <h3 key={i}>{block.text}</h3>;
    case "p":
      return <p key={i}>{block.text}</p>;
    case "ul":
      return (
        <ul key={i}>
          {block.items.map((item, j) => (
            <li key={j}>{item}</li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol key={i}>
          {block.items.map((item, j) => (
            <li key={j}>{item}</li>
          ))}
        </ol>
      );
    case "quote":
      return <blockquote key={i}>{block.text}</blockquote>;
  }
}

export function BlogPostBody({ post }: BlogPostBodyProps) {
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Show 2 related posts (next + previous in the array, wrapping)
  const idx = blogPosts.findIndex((p) => p.slug === post.slug);
  const related = [
    blogPosts[(idx + 1) % blogPosts.length],
    blogPosts[(idx + 2) % blogPosts.length],
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBlogPostSchema(post)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: "Home", href: "/" },
              { name: "Blog", href: "/blog" },
              { name: post.title, href: `/${post.slug}` },
            ])
          ),
        }}
      />

      <PageHero
        heading={post.title}
        subtitle={post.excerpt}
        imageKey={post.heroImage}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: post.title },
        ]}
      />

      <article className="section-padding">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="mb-8 flex items-center gap-4 text-sm text-muted">
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                {formattedDate}
              </span>
              <span className="h-1 w-1 rounded-full bg-muted-light" />
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </span>
            </div>

            <div className="prose-blog">
              {post.body.map((block, i) => renderBlock(block, i))}
            </div>

            <div className="mt-12 rounded-2xl bg-surface p-6 md:p-8">
              <h3 className="text-xl font-bold text-foreground">
                Need HVAC help in the OKC metro?
              </h3>
              <p className="mt-2 text-muted">
                Same-day service, 24/7 emergency dispatch, and honest written quotes — that's how Advantage runs.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Button href="/contact" icon={<ArrowRight className="h-5 w-5" />}>
                  Get a Free Estimate
                </Button>
                <Button
                  href={`tel:${businessConfig.phoneRaw}`}
                  variant="outline"
                >
                  Call {businessConfig.phone}
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </article>

      {/* Related */}
      <section className="bg-surface section-padding">
        <Container>
          <h2 className="mb-8 text-center text-2xl font-bold text-foreground md:text-3xl">
            More from Our Blog
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/${r.slug}`}
                className="group block rounded-2xl bg-white p-6 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-card-hover md:p-8"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-primary-500">
                  Read Next
                </p>
                <h3 className="mt-3 text-xl font-bold text-foreground transition-colors group-hover:text-primary-700">
                  {r.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{r.excerpt}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary-500">
                  Read more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        heading="Comfort Trouble? We'll Be There."
        text="24/7 emergency service across the OKC metro. Call now or request a free estimate online."
        primaryCta={{ label: "Get a Free Estimate", href: "/contact" }}
        secondaryCta={{
          label: `Call ${businessConfig.phone}`,
          href: `tel:${businessConfig.phoneRaw}`,
        }}
      />
    </>
  );
}
