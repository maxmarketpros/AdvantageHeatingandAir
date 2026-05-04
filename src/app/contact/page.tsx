import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { FAQSection } from "@/components/sections/FAQSection";
import { Container } from "@/components/ui/Container";
import { MapEmbed } from "@/components/ui/MapEmbed";
import { businessConfig } from "@/config/business";
import { contactFaqKeys } from "@/config/faqs";
import { generatePageMetadata } from "@/lib/metadata";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = generatePageMetadata({
  title: "Contact Us — 24/7 HVAC Service in Oklahoma City",
  description:
    "Call (405) 549-1652 for 24/7 HVAC service in Oklahoma City — or send us a message and we'll respond within one business hour.",
  path: "/contact",
});

const phoneCta = {
  label: `Call ${businessConfig.phone}`,
  href: `tel:${businessConfig.phoneRaw}`,
};

const directContact = [
  {
    icon: Phone,
    label: "24/7 Phone",
    value: businessConfig.phone,
    href: `tel:${businessConfig.phoneRaw}`,
  },
  {
    icon: Mail,
    label: "Email",
    value: businessConfig.email,
    href: `mailto:${businessConfig.email}`,
  },
  {
    icon: MapPin,
    label: "Office",
    value: businessConfig.address.full,
    href: undefined,
  },
  {
    icon: Clock,
    label: "Hours",
    value: businessConfig.hours.display,
    href: undefined,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        heading="Contact Advantage Heating & Air"
        subtitle="Call us 24/7 or use the form below. Same-day service across the Oklahoma City metro."
        imageKey="contact-hero"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
        primaryCta={phoneCta}
      />

      <section className="section-padding">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {directContact.map((item, i) => {
              const Icon = item.icon;
              const inner = (
                <>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50">
                    <Icon className="h-6 w-6 text-primary-500" />
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                    {item.label}
                  </p>
                  <p className="mt-1 break-words text-base font-bold text-foreground md:text-lg">
                    {item.value}
                  </p>
                </>
              );
              return item.href ? (
                <a
                  key={i}
                  href={item.href}
                  className="rounded-2xl border border-border bg-white p-6 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-card-hover md:p-8"
                >
                  {inner}
                </a>
              ) : (
                <div
                  key={i}
                  className="rounded-2xl border border-border bg-white p-6 shadow-card md:p-8"
                >
                  {inner}
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-surface section-padding-sm">
        <Container>
          <div className="overflow-hidden rounded-2xl shadow-card-hover">
            <MapEmbed className="h-[420px] w-full md:h-[500px]" />
          </div>
        </Container>
      </section>

      <FAQSection
        eyebrow="Common Questions"
        heading="Quick Answers"
        faqKeys={contactFaqKeys}
        bgColor="white"
      />
    </>
  );
}
