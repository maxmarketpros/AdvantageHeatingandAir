import type { ImageSlotConfig } from "@/types";

// ===== IMAGE MANIFEST =====
// Every named slot used by ImageSlot.tsx is defined here.
// All photos are 1920x1080 stock unless otherwise noted.

export const imageManifest: Record<string, ImageSlotConfig> = {
  // ===== HOMEPAGE =====
  "hero-home": {
    src: "/images/commercial-rooftop-chillers.jpg",
    alt: "Advantage Heating & Air Conditioning technicians servicing rooftop equipment in Oklahoma City",
    width: 1920,
    height: 1080,
    focalPoint: { x: 0.5, y: 0.45 },
  },
  "about-preview": {
    src: "/images/condenser-closeup.jpg",
    alt: "Premium residential AC condenser installed by Advantage Heating & Air",
    width: 1920,
    height: 1080,
    focalPoint: { x: 0.5, y: 0.5 },
  },
  "standards-feature": {
    src: "/images/team-1987.jpg",
    alt: "The full Advantage Heating & Air Conditioning team standing in front of their service van fleet — local and family-owned since 1987.",
    width: 880,
    height: 800,
    focalPoint: { x: 0.5, y: 0.5 },
  },

  // ===== SERVICE: AC INSTALLATION =====
  "service-ac-install": {
    src: "/images/outdoor-ac-staged.jpg",
    alt: "New residential AC unit installed in an Oklahoma City backyard",
    width: 1920,
    height: 1080,
  },
  "service-ac-install-hero": {
    src: "/images/outdoor-ac-staged.jpg",
    alt: "AC installation and replacement in Oklahoma City",
    width: 1920,
    height: 1080,
    focalPoint: { x: 0.4, y: 0.5 },
  },
  "service-ac-install-feature": {
    src: "/images/condenser-row.jpg",
    alt: "Multiple residential AC condensers installed by Advantage Heating & Air",
    width: 1920,
    height: 1080,
  },

  // ===== SERVICE: AC REPAIR =====
  "service-ac-repair": {
    src: "/images/ac-refrigerant-gauges.jpg",
    alt: "Advantage technician using refrigerant gauges to diagnose an AC unit",
    width: 1920,
    height: 1080,
  },
  "service-ac-repair-hero": {
    src: "/images/tech-blue-helmet.jpg",
    alt: "AC repair technician working on an outdoor unit in Oklahoma City",
    width: 1920,
    height: 1080,
    focalPoint: { x: 0.5, y: 0.45 },
  },
  "service-ac-repair-feature": {
    src: "/images/tech-outdoor-unit-crouch.jpg",
    alt: "Technician inspecting outdoor AC components",
    width: 1920,
    height: 1080,
  },

  // ===== SERVICE: HEATING INSTALLATION =====
  "service-heating": {
    src: "/images/heating-pipes-repair.jpg",
    alt: "Heating system installation in an Oklahoma City home",
    width: 1920,
    height: 1080,
  },
  "service-heating-hero": {
    src: "/images/heating-pipes-repair.jpg",
    alt: "Heating system installation services in Oklahoma City",
    width: 1920,
    height: 1080,
    focalPoint: { x: 0.5, y: 0.4 },
  },
  "service-heating-feature": {
    src: "/images/tech-control-panel.jpg",
    alt: "Technician inspecting an HVAC control panel",
    width: 1920,
    height: 1080,
  },

  // ===== SERVICE: FURNACE =====
  "service-furnace": {
    src: "/images/tech-control-panel.jpg",
    alt: "Furnace repair and replacement in Oklahoma City",
    width: 1920,
    height: 1080,
  },
  "service-furnace-hero": {
    src: "/images/hvac-component-closeup.jpg",
    alt: "Close-up of furnace components during a repair",
    width: 1920,
    height: 1080,
    focalPoint: { x: 0.4, y: 0.5 },
  },
  "service-furnace-feature": {
    src: "/images/heating-pipes-repair.jpg",
    alt: "Furnace heating system being serviced",
    width: 1920,
    height: 1080,
  },

  // ===== SERVICE: WATER HEATER =====
  "service-water": {
    src: "/images/water-heater-tank.jpg",
    alt: "Residential water heater installation",
    width: 1920,
    height: 1080,
  },
  "service-water-hero": {
    src: "/images/water-heater-tank.jpg",
    alt: "Full-service water heater installation and repair in Oklahoma City",
    width: 1920,
    height: 1080,
    focalPoint: { x: 0.5, y: 0.4 },
  },
  "service-water-feature": {
    src: "/images/water-heater-knob.jpg",
    alt: "Technician adjusting water heater temperature controls",
    width: 1920,
    height: 1080,
  },

  // ===== SERVICE: COMMERCIAL =====
  "service-commercial": {
    src: "/images/commercial-rooftop-techs.jpg",
    alt: "Commercial HVAC technicians servicing a rooftop unit",
    width: 1920,
    height: 1080,
  },
  "service-commercial-hero": {
    src: "/images/commercial-rooftop-chillers.jpg",
    alt: "Commercial HVAC services in Oklahoma City",
    width: 1920,
    height: 1080,
    focalPoint: { x: 0.5, y: 0.5 },
  },
  "service-commercial-feature": {
    src: "/images/tech-blue-helmet-2.jpg",
    alt: "Commercial HVAC technician on a rooftop install",
    width: 1920,
    height: 1080,
  },

  // ===== SERVICE: VENTILATION / DUCT =====
  "service-vent": {
    src: "/images/industrial-ductwork.jpg",
    alt: "Industrial ductwork installation by Advantage Heating & Air",
    width: 1920,
    height: 1080,
  },
  "service-vent-hero": {
    src: "/images/industrial-ductwork.jpg",
    alt: "Ventilation, air duct, and ductless mini-split services in Oklahoma City",
    width: 1920,
    height: 1080,
    focalPoint: { x: 0.5, y: 0.5 },
  },
  "service-vent-feature": {
    src: "/images/duct-filter-inspection.jpg",
    alt: "Technician inspecting a duct filter during a maintenance visit",
    width: 1920,
    height: 1080,
  },
  "service-vent-mini-split": {
    src: "/images/mini-split-remote.jpg",
    alt: "Ductless mini-split being controlled by remote",
    width: 1920,
    height: 1080,
  },

  // ===== ABOUT =====
  "about-hero": {
    src: "/images/tech-thumbs-up.jpg",
    alt: "About Advantage Heating & Air Conditioning",
    width: 1920,
    height: 1080,
    focalPoint: { x: 0.6, y: 0.4 },
  },
  "about-story": {
    src: "/images/team-1987.jpg",
    alt: "The Advantage Heating & Air Conditioning crew gathered in front of the company service vans — local Oklahoma City team since 1987.",
    width: 880,
    height: 800,
    focalPoint: { x: 0.5, y: 0.5 },
  },
  "about-team": {
    src: "/images/commercial-rooftop-chillers.jpg",
    alt: "Advantage technicians on a commercial rooftop service call",
    width: 1920,
    height: 1080,
  },

  // ===== CONTACT =====
  "contact-hero": {
    src: "/images/tech-blue-helmet.jpg",
    alt: "Contact Advantage Heating & Air Conditioning in Oklahoma City",
    width: 1920,
    height: 1080,
    focalPoint: { x: 0.5, y: 0.4 },
  },

  // ===== GALLERY =====
  "gallery-hero": {
    src: "/images/condenser-row.jpg",
    alt: "Advantage Heating & Air Conditioning project gallery",
    width: 1920,
    height: 1080,
  },

  // ===== BLOG =====
  "blog-hero": {
    src: "/images/hvac-component-closeup.jpg",
    alt: "Advantage Heating & Air Conditioning HVAC tips and resources",
    width: 1920,
    height: 1080,
    focalPoint: { x: 0.5, y: 0.4 },
  },

  // ===== AREA PAGE HERO (shared) =====
  "area-hero": {
    src: "/images/tech-blue-helmet.jpg",
    alt: "HVAC service in the Oklahoma City metro",
    width: 1920,
    height: 1080,
    focalPoint: { x: 0.5, y: 0.4 },
  },
  "area-feature": {
    src: "/images/outdoor-ac-staged.jpg",
    alt: "Outdoor AC unit installed in an Oklahoma neighborhood",
    width: 1920,
    height: 1080,
  },

  // ===== UTILITY IMAGES (used by individual blog posts / gallery) =====
  "img-mini-split-clean": {
    src: "/images/mini-split-cleaning.jpg",
    alt: "Maintenance cleaning of a ductless mini-split",
    width: 1920,
    height: 1080,
  },
  "img-condenser-closeup": {
    src: "/images/condenser-closeup.jpg",
    alt: "Closeup of a residential AC condenser",
    width: 1920,
    height: 1080,
  },
  "img-window-ac": {
    src: "/images/window-ac-unit.jpg",
    alt: "Modern window AC unit",
    width: 1920,
    height: 1080,
  },
  "img-air-duct-vent": {
    src: "/images/air-duct-vent.jpg",
    alt: "Galvanized air duct vent in a commercial building",
    width: 1920,
    height: 1080,
  },
  "img-water-heater-knob": {
    src: "/images/water-heater-knob.jpg",
    alt: "Adjusting a water heater temperature dial",
    width: 1920,
    height: 1080,
  },

  // ===== BRANDING =====
  logo: {
    src: "/logo.png",
    alt: "Advantage Heating & Air Conditioning logo",
    width: 600,
    height: 200,
  },
  "logo-white": {
    src: "/logo.png",
    alt: "Advantage Heating & Air Conditioning logo",
    width: 600,
    height: 200,
  },
  penguin: {
    src: "/penguin.png",
    alt: "Advantage Heating & Air Conditioning penguin mascot",
    width: 350,
    height: 350,
  },
};
