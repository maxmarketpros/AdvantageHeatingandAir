import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { OptimizedImage } from "@/components/ui/OptimizedImage";
import { businessConfig } from "@/config/business";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Gallery — HVAC Work Across the OKC Metro",
  description:
    "Photos of HVAC installations, AC and furnace replacements, ductwork, and commercial projects by Advantage Heating & Air Conditioning across Oklahoma City.",
  path: "/gallery",
});

const phoneCta = {
  label: `Call ${businessConfig.phone}`,
  href: `tel:${businessConfig.phoneRaw}`,
};

const galleryImages = [
  { src: "/images/commercial-rooftop-chillers.jpg", alt: "Commercial rooftop HVAC service" },
  { src: "/images/outdoor-ac-staged.jpg", alt: "Newly installed residential AC unit" },
  { src: "/images/condenser-row.jpg", alt: "Multi-unit residential condenser install" },
  { src: "/images/condenser-closeup.jpg", alt: "Premium AC condenser closeup" },
  { src: "/images/tech-blue-helmet.jpg", alt: "AC repair technician at work" },
  { src: "/images/tech-outdoor-unit-crouch.jpg", alt: "Diagnosing an outdoor AC unit" },
  { src: "/images/ac-refrigerant-gauges.jpg", alt: "Refrigerant gauges during AC service" },
  { src: "/images/tech-thumbs-up.jpg", alt: "Job complete — Advantage technician" },
  { src: "/images/heating-pipes-repair.jpg", alt: "Heating system pipe and manifold work" },
  { src: "/images/tech-control-panel.jpg", alt: "HVAC control panel diagnostics" },
  { src: "/images/hvac-component-closeup.jpg", alt: "HVAC component closeup detail" },
  { src: "/images/water-heater-tank.jpg", alt: "Residential water heater installation" },
  { src: "/images/water-heater-knob.jpg", alt: "Water heater service" },
  { src: "/images/industrial-ductwork.jpg", alt: "Industrial galvanized ductwork" },
  { src: "/images/duct-filter-inspection.jpg", alt: "Ductwork filter inspection" },
  { src: "/images/air-duct-vent.jpg", alt: "Air duct vent installation" },
  { src: "/images/mini-split-remote.jpg", alt: "Ductless mini-split installation" },
  { src: "/images/mini-split-cleaning.jpg", alt: "Mini-split maintenance and cleaning" },
  { src: "/images/window-ac-unit.jpg", alt: "Modern window AC unit" },
  { src: "/images/commercial-rooftop-techs.jpg", alt: "Commercial HVAC techs on a rooftop" },
  { src: "/images/tech-blue-helmet-2.jpg", alt: "Commercial HVAC service work" },
];

export default function GalleryPage() {
  return (
    <>
      <PageHero
        heading="Gallery"
        subtitle="Real HVAC work across Oklahoma City — installs, repairs, and commercial service from our crew."
        imageKey="gallery-hero"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Gallery" }]}
        primaryCta={{ label: "Get a Free Estimate", href: "#contact" }}
        secondaryCta={phoneCta}
      />

      <section className="section-padding">
        <Container>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl bg-surface-dark shadow-card transition-all hover:shadow-card-hover"
              >
                <OptimizedImage
                  src={img.src}
                  alt={img.alt}
                  width={1920}
                  height={1080}
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent p-4 opacity-0 transition-opacity group-hover:opacity-100">
                  <p className="text-sm font-medium text-white">{img.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
