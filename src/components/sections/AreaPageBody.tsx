import Link from "next/link";
import { ArrowRight, Phone, MapPin, Star } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { MapEmbed } from "@/components/ui/MapEmbed";
import { TestimonialSection } from "@/components/sections/TestimonialSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { businessConfig } from "@/config/business";
import { services } from "@/config/services";
import { generateBreadcrumbSchema } from "@/lib/structured-data";
import type { AreaConfig } from "@/types";

interface AreaPageBodyProps {
  area: AreaConfig;
}

export function AreaPageBody({ area }: AreaPageBodyProps) {
  const ctaProps = {
    primary: { label: "Get a Free Estimate", href: "/contact" },
    secondary: {
      label: `Call ${businessConfig.phone}`,
      href: `tel:${businessConfig.phoneRaw}`,
    },
  };

  const otherCities = businessConfig.serviceAreaCities
    .filter((c) => c.name !== area.city)
    .slice(0, 8);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: "Home", href: "/" },
              { name: "Service Areas", href: "/#service-areas" },
              { name: area.city, href: `/${area.slug}` },
            ])
          ),
        }}
      />

      <PageHero
        heading={area.title}
        subtitle={area.excerpt}
        imageKey="area-hero"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Service Areas", href: "/#service-areas" },
          { label: area.city },
        ]}
        primaryCta={ctaProps.primary}
        secondaryCta={ctaProps.secondary}
      />

      {/* Local intro */}
      <section className="section-padding">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeading
                eyebrow={`Serving ${area.cityFull}`}
                heading={`Trusted HVAC Service in ${area.city}`}
              />
              {area.intro.map((p, i) => (
                <p
                  key={i}
                  className="mb-4 text-base leading-relaxed text-muted md:text-lg"
                >
                  {p}
                </p>
              ))}
              <div className="mt-6 flex flex-wrap gap-4">
                <Button
                  href="/contact"
                  icon={<ArrowRight className="h-5 w-5" />}
                >
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
            </div>
            <div className="relative">
              <ImageSlot
                imageKey="area-feature"
                aspectRatio="4/3"
                className="rounded-2xl"
              />
              <div className="mt-6 rounded-2xl border-l-4 border-accent-500 bg-surface p-5">
                <p className="flex gap-2 text-base italic text-foreground">
                  <Star className="mt-0.5 h-5 w-5 shrink-0 fill-accent-500 text-accent-500" />
                  <span>{area.localHook}</span>
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Top services in this area */}
      <section className="section-padding bg-surface">
        <Container>
          <SectionHeading
            eyebrow="What We Do Here"
            heading={`Services Most Requested in ${area.city}`}
            align="center"
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {area.topServices.map((label, i) => (
              <div
                key={i}
                className="flex items-center gap-3 rounded-xl border border-border bg-white p-5 shadow-card"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-50">
                  <MapPin className="h-5 w-5 text-primary-500" />
                </div>
                <span className="text-sm font-semibold text-foreground">
                  {label}
                </span>
              </div>
            ))}
          </div>

          {/* All service shortcuts */}
          <div className="mt-12">
            <h3 className="mb-4 text-center text-sm font-semibold uppercase tracking-wider text-muted">
              All Services Available in {area.city}
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {services.map((s) => (
                <Link
                  key={s.slug}
                  href={`/${s.slug}`}
                  className="rounded-full bg-white px-4 py-2 text-sm font-medium text-foreground-light shadow-card transition-all hover:bg-primary-500 hover:text-white"
                >
                  {s.title}
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Map */}
      <section className="section-padding-sm">
        <Container>
          <div className="overflow-hidden rounded-2xl shadow-card-hover">
            <MapEmbed className="h-[400px] w-full md:h-[480px]" />
          </div>
        </Container>
      </section>

      <TestimonialSection
        eyebrow="Real Reviews"
        heading={`What ${area.city}-Area Customers Say`}
        bgColor="surface"
      />

      <FAQSection
        eyebrow="Common Questions"
        heading={`HVAC Service in ${area.city} — FAQ`}
        faqKeys={area.faqKeys}
      />

      {/* Nearby areas */}
      <section className="section-padding-sm bg-surface">
        <Container>
          <h2 className="mb-6 text-center text-2xl font-bold text-foreground">
            Other Cities We Serve
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {otherCities.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="rounded-full bg-white px-4 py-2 text-sm font-medium text-foreground-light shadow-card transition-all hover:bg-primary-500 hover:text-white"
              >
                {c.name}
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        heading={`Need HVAC Service in ${area.city}?`}
        text="Same-day appointments and 24/7 emergency dispatch — call now or request a free estimate online."
        primaryCta={ctaProps.primary}
        secondaryCta={ctaProps.secondary}
      />
    </>
  );
}
