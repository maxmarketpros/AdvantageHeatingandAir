import { Star, ExternalLink } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { GoogleIcon } from "@/components/ui/GoogleIcon";
import { Button } from "@/components/ui/Button";
import { testimonials } from "@/config/testimonials";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

interface TestimonialSectionProps {
  eyebrow?: string;
  heading?: string;
  subtitle?: string;
  bgColor?: "white" | "surface";
  className?: string;
}

export function TestimonialSection({
  eyebrow = "Client Reviews",
  heading = "What Our Clients Say",
  subtitle,
  bgColor = "white",
  className,
}: TestimonialSectionProps) {
  return (
    <section
      className={cn(
        "section-padding",
        bgColor === "surface" && "bg-surface",
        className
      )}
    >
      <Container>
        <SectionHeading
          eyebrow={eyebrow}
          heading={heading}
          subtitle={subtitle}
          align="center"
        />

        {/* Aggregate rating banner */}
        <a
          href={siteConfig.googleReviewUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mx-auto mb-10 flex w-fit items-center gap-3 rounded-full bg-white px-5 py-2.5 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-card-hover"
        >
          <GoogleIcon className="h-6 w-6" />
          <div className="flex items-center gap-2">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-amber-400 text-amber-400"
                />
              ))}
            </div>
            <span className="text-sm font-semibold text-foreground">
              4.8 on Google
            </span>
          </div>
        </a>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <TestimonialCard key={i} testimonial={testimonial} />
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
            href={siteConfig.googleReviewUrl}
            size="lg"
            icon={<ExternalLink className="h-5 w-5" />}
          >
            Write a Google Review
          </Button>
          <Button
            href={siteConfig.googleReviewUrl}
            variant="outline"
            size="lg"
          >
            Read All Reviews
          </Button>
        </div>
      </Container>
    </section>
  );
}
