"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { faqs, getFaqsByKeys } from "@/config/faqs";
import { generateFAQSchema } from "@/lib/structured-data";
import { cn } from "@/lib/utils";
import type { FAQItem } from "@/types";

interface FAQSectionProps {
  eyebrow?: string;
  heading?: string;
  subtitle?: string;
  faqKeys?: string[];
  items?: FAQItem[];
  bgColor?: "white" | "surface";
  className?: string;
  id?: string;
}

export function FAQSection({
  eyebrow = "FAQ",
  heading = "Frequently Asked Questions",
  subtitle,
  faqKeys,
  items,
  bgColor = "white",
  className,
  id,
}: FAQSectionProps) {
  const displayFaqs = items || (faqKeys ? getFaqsByKeys(faqKeys) : faqs);

  return (
    <section
      id={id}
      className={cn(
        "section-padding",
        bgColor === "surface" && "bg-surface",
        className
      )}
    >
      {displayFaqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateFAQSchema(displayFaqs)),
          }}
        />
      )}
      <Container>
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            eyebrow={eyebrow}
            heading={heading}
            subtitle={subtitle}
            align="center"
          />

          <div className="divide-y divide-border rounded-2xl bg-white p-6 shadow-card md:p-8">
            {displayFaqs.map((faq) => (
              <FAQAccordion key={faq.id} item={faq} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
