import type { Metadata } from "next";
import { CheckCircle2, Phone, ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { businessConfig } from "@/config/business";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = {
  ...generatePageMetadata({
    title: "Thank You — We'll Be in Touch",
    description:
      "Thanks for reaching out to Advantage Heating & Air Conditioning. We'll respond within one business hour.",
    path: "/thank-you",
  }),
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <section className="section-padding">
      <Container>
        <div className="mx-auto max-w-2xl rounded-2xl bg-surface p-8 text-center shadow-card md:p-12">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary-100">
            <CheckCircle2 className="h-9 w-9 text-primary-600" />
          </div>
          <h1 className="text-3xl font-bold text-foreground md:text-4xl">
            Thanks — Your Message Was Sent
          </h1>
          <p className="mt-4 text-base text-muted md:text-lg">
            One of our team will follow up within the hour during business hours, or first thing the
            next morning if it&apos;s late. For 24/7 emergency dispatch, please call us directly.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              href={`tel:${businessConfig.phoneRaw}`}
              icon={<Phone className="h-5 w-5" />}
              size="lg"
            >
              Call {businessConfig.phone}
            </Button>
            <Button
              href="/"
              variant="outline"
              size="lg"
              icon={<ArrowLeft className="h-5 w-5" />}
            >
              Back to Home
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
