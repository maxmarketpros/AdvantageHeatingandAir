import { ArrowRight, Phone } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { SplitSection } from "@/components/sections/SplitSection";
import { BenefitGrid } from "@/components/sections/BenefitGrid";
import { ServiceScopeSection } from "@/components/sections/ServiceScopeSection";
import { TopicCardGrid } from "@/components/sections/TopicCardGrid";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { FeatureList } from "@/components/sections/FeatureList";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { businessConfig } from "@/config/business";
import {
  generateServiceSchema,
  generateBreadcrumbSchema,
} from "@/lib/structured-data";
import type { ServiceConfig } from "@/types";

interface ServicePageBodyProps {
  service: ServiceConfig;
}

export function ServicePageBody({ service }: ServicePageBodyProps) {
  const ctaProps = {
    primary: { label: "Get a Free Estimate", href: "/contact" },
    secondary: {
      label: `Call ${businessConfig.phone}`,
      href: `tel:${businessConfig.phoneRaw}`,
    },
  };

  const featureListItems = service.detailFeatures.map((f) => ({
    title: f.title,
    description: f.description,
    imageKey: f.imageKey,
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateServiceSchema(service)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: "Home", href: "/" },
              { name: service.title, href: `/${service.slug}` },
            ])
          ),
        }}
      />

      <PageHero
        heading={`${service.title} in Oklahoma City, OK`}
        subtitle={service.excerpt}
        imageKey={service.heroImage}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/#services" },
          { label: service.title },
        ]}
        primaryCta={ctaProps.primary}
        secondaryCta={ctaProps.secondary}
      />

      <SplitSection
        imageKey={service.cardImage}
        imagePosition="right"
        imageAspect="4/3"
      >
        <SectionHeading
          eyebrow="Overview"
          heading={`Why Advantage for ${service.title}`}
        />
        {service.description.map((p, i) => (
          <p
            key={i}
            className="mb-4 text-base leading-relaxed text-muted md:text-lg"
          >
            {p}
          </p>
        ))}
        <div className="mt-6 flex flex-wrap gap-4">
          <Button href="/contact" icon={<ArrowRight className="h-5 w-5" />}>
            Get a Free Estimate
          </Button>
          <Button
            href={`tel:${businessConfig.phoneRaw}`}
            variant="outline"
            icon={<Phone className="h-5 w-5" />}
          >
            {businessConfig.phone}
          </Button>
        </div>
      </SplitSection>

      <BenefitGrid
        benefits={service.benefits}
        eyebrow={service.benefitSection.eyebrow}
        heading={service.benefitSection.heading}
        subtitle={service.benefitSection.subtitle}
        bgColor="surface"
        primaryCta={ctaProps.primary}
        secondaryCta={ctaProps.secondary}
      />

      <FeatureList features={featureListItems} />

      <TopicCardGrid
        eyebrow={service.topicSectionA.eyebrow}
        heading={service.topicSectionA.heading}
        subtitle={service.topicSectionA.subtitle}
        items={service.topicSectionA.items}
        bgColor="white"
      />

      <ServiceScopeSection
        items={service.features}
        eyebrow={service.scopeSection.eyebrow}
        heading={service.scopeSection.heading}
        subtitle={service.scopeSection.subtitle}
        primaryCta={ctaProps.primary}
        secondaryCta={ctaProps.secondary}
      />

      <TopicCardGrid
        eyebrow={service.topicSectionB.eyebrow}
        heading={service.topicSectionB.heading}
        subtitle={service.topicSectionB.subtitle}
        items={service.topicSectionB.items}
        bgColor="surface"
      />

      <FAQSection
        eyebrow="Common Questions"
        heading={`${service.title} FAQ`}
        faqKeys={service.faqKeys}
      />

      <CTASection
        heading={service.ctaHeading}
        text={service.ctaText}
        primaryCta={ctaProps.primary}
        secondaryCta={ctaProps.secondary}
      />
    </>
  );
}
