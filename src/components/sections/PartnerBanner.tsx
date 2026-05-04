import { ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";

export function PartnerBanner() {
  return (
    <section className="bg-surface py-12 md:py-16">
      <Container>
        <div className="relative overflow-hidden rounded-2xl bg-white shadow-card">
          {/* Subtle accent stripe */}
          <div className="absolute inset-y-0 left-0 w-1.5 bg-accent-500" />

          <div className="grid items-center gap-8 px-6 py-8 md:grid-cols-[auto_1fr] md:gap-12 md:px-12 md:py-10">
            {/* Logo */}
            <div className="flex shrink-0 items-center justify-center md:justify-start">
              <img
                src="/amana-logo.jpg"
                alt="Amana Heating & Air Conditioning logo"
                width={500}
                height={185}
                loading="lazy"
                decoding="async"
                className="h-16 w-auto md:h-20 lg:h-24"
              />
            </div>

            {/* Text */}
            <div className="text-center md:text-left">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary-700">
                <ShieldCheck className="h-3.5 w-3.5" />
                Certified Installer
              </span>
              <h2 className="mt-3 text-2xl font-bold text-foreground md:text-3xl">
                Proudly Partnered with Amana Heating &amp; Air Conditioning
              </h2>
              <p className="mt-2 text-sm text-muted md:text-base">
                As a certified Amana installer, we stand behind every system we install with industry-leading warranty coverage and dependable American-made comfort equipment built to last.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
