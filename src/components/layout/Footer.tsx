import Link from "next/link";
import { Phone, Mail, MapPin, Clock, MapPinned } from "lucide-react";
import { OptimizedImage } from "@/components/ui/OptimizedImage";

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12S0 5.446 0 12.073c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.49 0-1.955.925-1.955 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";
import { businessConfig } from "@/config/business";
import { footerGroups } from "@/config/navigation";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-white">
      <Container>
        <div className="grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
              <div className="group relative shrink-0">
                {/* Soft brand glow behind the mascot */}
                <div
                  aria-hidden
                  className="absolute -inset-3 rounded-full bg-primary-500/30 blur-2xl transition-all duration-500 group-hover:bg-primary-500/50"
                />
                {/* Subtle ring */}
                <div className="relative flex items-center justify-center rounded-2xl bg-white p-4 shadow-lg ring-1 ring-white/20 transition-transform duration-500 group-hover:scale-105">
                  <OptimizedImage
                    src="/penguin.png"
                    alt="Advantage Heating & Air mascot"
                    width={350}
                    height={350}
                    sizes="(max-width: 640px) 128px, 160px"
                    className="h-32 w-32 object-contain sm:h-40 sm:w-40"
                  />
                </div>
              </div>
              <div>
                <h2 className="text-xl font-bold leading-tight md:text-2xl">
                  {siteConfig.name}
                </h2>
                <p className="mt-1.5 text-xs uppercase tracking-[0.2em] text-primary-200">
                  {siteConfig.tagline}
                </p>
                <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-accent-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-accent-200 ring-1 ring-accent-500/30">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-500" />
                  </span>
                  Open 24/7
                </div>
              </div>
            </div>
            <p className="mt-6 text-sm leading-relaxed text-white/60">
              {siteConfig.description}
            </p>

            <div className="mt-6 flex gap-3">
              {siteConfig.social.facebook && (
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white transition-colors hover:bg-primary-500"
                >
                  <FacebookIcon className="h-5 w-5" />
                </a>
              )}
              {siteConfig.social.google && (
                <a
                  href={siteConfig.social.google}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Google Business Profile"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white transition-colors hover:bg-primary-500"
                >
                  <MapPinned className="h-5 w-5" />
                </a>
              )}
            </div>
          </div>

          {/* Nav Groups */}
          {footerGroups.map((group) => (
            <div key={group.title}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-200">
                {group.title}
              </h3>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Column */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-200">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${businessConfig.phoneRaw}`}
                  className="flex items-center gap-2 text-sm font-bold text-white transition-colors hover:text-accent-300"
                >
                  <Phone className="h-4 w-4 text-accent-500" />
                  {businessConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${businessConfig.email}`}
                  className="flex items-start gap-2 text-sm text-white/60 transition-colors hover:text-white"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0" />
                  <span className="break-all">{businessConfig.email}</span>
                </a>
              </li>
              <li>
                <span className="flex items-start gap-2 text-sm text-white/60">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>{businessConfig.address.full}</span>
                </span>
              </li>
              <li>
                <span className="flex items-center gap-2 text-sm text-white/60">
                  <Clock className="h-4 w-4 shrink-0" />
                  {businessConfig.hours.display}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col items-center justify-between gap-2 text-xs text-white/40 md:flex-row">
            <p>
              &copy; {currentYear} {siteConfig.name}. All rights reserved.
            </p>
            <p>
              NATE Certified · BBB Accredited · ACCA Member · Certified Amana Installer · Financing Available
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
