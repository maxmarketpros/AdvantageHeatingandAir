import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/ui/ContactForm";
import { businessConfig } from "@/config/business";
import { cn } from "@/lib/utils";

interface ContactSectionProps {
  id?: string;
  variant?: "full" | "compact";
  heading?: string;
  subtitle?: string;
  className?: string;
}

// Lead-capture section that appears above the footer on every page.
// `variant="full"` is for the dedicated /contact page (bigger, with map + sidebar).
// `variant="compact"` is the default site-wide footer-form.
export function ContactSection({
  id = "contact",
  variant = "compact",
  heading,
  subtitle,
  className,
}: ContactSectionProps) {
  return (
    <section
      id={id}
      className={cn("section-padding bg-surface-dark", className)}
    >
      <Container>
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <span className="mb-3 inline-block rounded-full bg-primary-100 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary-700">
            Get a Free Estimate
          </span>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            {heading || "Ready to Get Started?"}
          </h2>
          <p className="mt-3 text-base text-muted md:text-lg">
            {subtitle ||
              "Tell us what's going on and we'll get back to you fast. Need someone today? Call (405) 549-1652 — we answer 24/7."}
          </p>
        </div>

        <div
          className={cn(
            "grid gap-8",
            variant === "full" ? "lg:grid-cols-5" : "lg:grid-cols-3"
          )}
        >
          {/* Form */}
          <div
            className={cn(
              "rounded-2xl bg-white p-6 shadow-card md:p-8",
              variant === "full" ? "lg:col-span-3" : "lg:col-span-2"
            )}
          >
            <ContactForm />
          </div>

          {/* Sidebar */}
          <aside
            className={cn(
              "rounded-2xl bg-primary-700 p-6 text-white md:p-8",
              variant === "full" ? "lg:col-span-2" : "lg:col-span-1"
            )}
          >
            <h3 className="text-lg font-bold text-white">Reach Us Directly</h3>
            <p className="mt-1 text-sm text-white/70">
              Skip the form — call, email, or stop by.
            </p>

            <div className="mt-6 space-y-5">
              <a
                href={`tel:${businessConfig.phoneRaw}`}
                className="flex items-center gap-3 transition-colors hover:text-accent-200"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-500">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-white/60">
                    24/7 Phone
                  </p>
                  <p className="font-semibold">{businessConfig.phone}</p>
                </div>
              </a>

              <a
                href={`mailto:${businessConfig.email}`}
                className="flex items-start gap-3 transition-colors hover:text-primary-200"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-white/60">
                    Email
                  </p>
                  <p className="break-all font-semibold">
                    {businessConfig.email}
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-white/60">
                    Office
                  </p>
                  <p className="font-semibold">
                    {businessConfig.address.full}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10">
                  <Clock className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-white/60">
                    Hours
                  </p>
                  <p className="font-semibold">
                    {businessConfig.hours.display}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 border-t border-white/10 pt-5 text-sm text-white/70">
              NATE Certified · BBB Accredited · 25+ Years Local
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}
