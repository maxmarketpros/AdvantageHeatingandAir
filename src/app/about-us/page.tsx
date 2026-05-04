import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { SplitSection } from "@/components/sections/SplitSection";
import { StatsRow } from "@/components/sections/StatsRow";
import { TestimonialSection } from "@/components/sections/TestimonialSection";
import { CTASection } from "@/components/sections/CTASection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { aboutContent } from "@/config/about";
import { aboutStats } from "@/config/stats";
import { businessConfig } from "@/config/business";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "About Us — 25+ Years of Family-Owned HVAC Service in Oklahoma City",
  description:
    "Advantage Heating & Air Conditioning has served Oklahoma City for more than 25 years. NATE-certified, BBB-accredited, family-owned, and on call 24/7.",
  path: "/about-us",
});

const phoneCta = {
  label: `Call ${businessConfig.phone}`,
  href: `tel:${businessConfig.phoneRaw}`,
};

export default function AboutPage() {
  const c = aboutContent;

  return (
    <>
      <PageHero
        heading="About Us"
        subtitle={c.hero.subtitle}
        imageKey="about-hero"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us" },
        ]}
        primaryCta={{ label: "Get a Free Estimate", href: "#contact" }}
        secondaryCta={phoneCta}
      />

      <SplitSection imageKey={c.story.image} imagePosition="right" imageAspect="4/5">
        <SectionHeading eyebrow={c.story.eyebrow} heading={c.story.heading} />
        {c.story.paragraphs.map((p, i) => (
          <p
            key={i}
            className="mb-4 text-base leading-relaxed text-muted md:text-lg"
          >
            {p}
          </p>
        ))}
      </SplitSection>

      <StatsRow stats={aboutStats} bgColor="surface" />

      <section className="section-padding">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow={c.values.eyebrow}
            heading={c.values.heading}
            align="center"
          />
          <div className="grid gap-6 md:grid-cols-2">
            {c.values.items.map((v, i) => (
              <div
                key={i}
                className="rounded-2xl bg-white p-6 shadow-card md:p-8"
              >
                <h3 className="text-lg font-bold text-foreground">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SplitSection
        imageKey={c.team.image}
        imagePosition="left"
        bgColor="surface"
        imageAspect="4/5"
      >
        <SectionHeading eyebrow={c.team.eyebrow} heading={c.team.heading} />
        {c.team.paragraphs.map((p, i) => (
          <p
            key={i}
            className="mb-4 text-base leading-relaxed text-muted md:text-lg"
          >
            {p}
          </p>
        ))}
        <div className="mt-6 flex flex-wrap gap-4">
          <Button
            href="#contact"
            icon={<ArrowRight className="h-5 w-5" />}
          >
            Get a Free Estimate
          </Button>
        </div>
      </SplitSection>

      <TestimonialSection
        eyebrow="What Our Neighbors Say"
        heading="Real Reviews from OKC Customers"
      />

      <CTASection
        heading="Ready for Reliable HVAC Service?"
        text="Same-day appointments across the OKC metro. 24/7 emergency dispatch. Honest pricing every time."
        primaryCta={{ label: "Get a Free Estimate", href: "#contact" }}
        secondaryCta={phoneCta}
      />
    </>
  );
}
