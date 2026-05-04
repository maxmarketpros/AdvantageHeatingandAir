import type { FAQItem } from "@/types";

export const faqs: FAQItem[] = [
  // ===== GENERAL =====
  {
    id: "faq-general-1",
    question: "Do you really offer 24/7 emergency service?",
    answer:
      "Yes — Advantage Heating & Air Conditioning answers calls 24 hours a day, 365 days a year. Whether your AC quits at midnight in July or your furnace stops on Christmas Eve, a real person picks up and we dispatch a technician fast. There's no extra surcharge just for calling after hours.",
  },
  {
    id: "faq-general-2",
    question: "What areas of Oklahoma do you serve?",
    answer:
      "We serve all of Oklahoma City and the surrounding metro — including Edmond, Norman, Moore, Yukon, Mustang, Midwest City, Del City, Bethany, The Village, Nichols Hills, Piedmont, Newcastle, Blanchard, Purcell, Chickasha, Shawnee, El Reno, Harrah, and McCloud. If you're not sure whether we cover your area, just give us a call.",
  },
  {
    id: "faq-general-3",
    question: "How fast can a technician get to my home?",
    answer:
      "Most of our service calls in the OKC metro are answered the same day, often within a few hours. For true emergencies — no heat in winter or no cooling in 100°+ heat — we prioritize your call and get someone rolling immediately.",
  },
  {
    id: "faq-general-4",
    question: "Are you licensed and insured?",
    answer:
      "Absolutely. We are fully licensed in Oklahoma, bonded, and insured. Our technicians are NATE-certified and we are an Air Conditioning Contractors of America (ACCA) member as well as a BBB-accredited business. Proof of insurance is available on request.",
  },
  {
    id: "faq-general-5",
    question: "Do you offer financing for new HVAC systems?",
    answer:
      "Yes — financing is available for qualifying new system installs and major replacements. We'll walk through the options with you during your free in-home estimate so you can pick the plan that fits your budget. No surprises, no pressure.",
  },
  {
    id: "faq-general-6",
    question: "What brands do you install and service?",
    answer:
      "We're a certified Amana Heating & Cooling installer and we service every major HVAC brand on the market — including Carrier, Trane, Lennox, Goodman, York, Rheem, Bryant, Ruud, and more. If your system has a name plate, we can probably work on it.",
  },
  {
    id: "faq-general-7",
    question: "Do you offer free estimates?",
    answer:
      "Yes. Estimates on new installs, replacements, and major repair work are 100% free with no obligation. We'll walk through the options, give you a written quote, and let you decide on your timeline.",
  },
  {
    id: "faq-general-8",
    question: "Why should I choose Advantage over a national chain?",
    answer:
      "We're family-owned and have served Oklahoma City for over 25 years. Our techs aren't on commission, our pricing is straight-forward, and we treat your home like our own. You'll talk to the same crew every time — not a different stranger from a giant corporate dispatch board.",
  },

  // ===== CONTACT =====
  {
    id: "faq-contact-1",
    question: "What's the best way to reach you?",
    answer:
      "Call us at (405) 549-1652 — we answer 24/7. You can also use the contact form on this page and we'll get back to you within an hour during the day.",
  },
  {
    id: "faq-contact-2",
    question: "Do you charge a fee just to come out?",
    answer:
      "Diagnostic visits have a small service fee that covers the technician's time and travel. If you move forward with the repair or install, that fee is typically applied to the cost of the work. Free estimates on new system installs and replacements.",
  },

  // ===== AC INSTALL =====
  {
    id: "faq-ac-install-1",
    question: "How do I know if I need a new AC unit instead of a repair?",
    answer:
      "If your unit is 10+ years old, has needed multiple repairs in the past two seasons, can't keep up on hot OKC days, or your power bills keep climbing, replacement is usually the better long-term call. We'll give you an honest comparison of repair-vs-replace costs before you decide.",
  },
  {
    id: "faq-ac-install-2",
    question: "How long does a new AC installation take?",
    answer:
      "Most residential AC replacements are wrapped up in a single day — typically 4 to 8 hours depending on access, ductwork, and whether we're replacing the indoor coil or furnace at the same time. We always clean up before we leave.",
  },
  {
    id: "faq-ac-install-3",
    question: "What size AC do I need for my Oklahoma home?",
    answer:
      "Sizing isn't just about square footage. We perform a Manual J-style load calculation that factors in your home's insulation, windows, ceiling height, sun exposure, and Oklahoma's brutal summer heat. An undersized unit struggles to keep up; an oversized one short-cycles and wears out fast.",
  },

  // ===== AC REPAIR =====
  {
    id: "faq-ac-repair-1",
    question: "My AC is blowing warm air — what's wrong?",
    answer:
      "Most often it's low refrigerant (a leak), a frozen evaporator coil, a failed capacitor, or a tripped breaker. All of these are diagnosable in a single visit. Don't keep running the system — you can damage the compressor.",
  },
  {
    id: "faq-ac-repair-2",
    question: "How much does an AC repair typically cost?",
    answer:
      "Common repairs (capacitors, contactors, thermostats) usually run $150–$450. Refrigerant leaks and compressor work can be more. We quote every repair in writing before we start, and you decide whether to proceed.",
  },
  {
    id: "faq-ac-repair-3",
    question: "Do you repair AC units you didn't install?",
    answer:
      "Yes — every brand, every age. Our technicians work on systems we didn't install all the time. We'll diagnose the issue, give you a fair quote, and get it fixed.",
  },

  // ===== HEATING / FURNACE =====
  {
    id: "faq-heating-1",
    question: "What's the difference between a furnace and a heat pump?",
    answer:
      "A furnace generates heat by burning gas (or using electric resistance). A heat pump moves heat from outside air into your home using refrigerant — much more energy-efficient in mild weather, but typically paired with backup heat for very cold OKC nights. We can help you decide which fits your home.",
  },
  {
    id: "faq-heating-2",
    question: "How often should I have my furnace serviced?",
    answer:
      "Once a year, ideally in early fall before you need it. A maintenance visit catches small problems before they become breakdowns and keeps your warranty in good standing.",
  },
  {
    id: "faq-heating-3",
    question: "My furnace keeps shutting off — what's going on?",
    answer:
      "Short-cycling is usually caused by a dirty flame sensor, clogged air filter, oversized unit, or a thermostat issue. It's worth getting checked promptly because a struggling furnace wastes gas and stresses components.",
  },

  // ===== WATER HEATER =====
  {
    id: "faq-water-1",
    question: "How long does a water heater last?",
    answer:
      "Tank-style water heaters typically last 8–12 years; tankless models can run 15–20 years with proper maintenance. If yours is over 10 years old and starting to leak or run lukewarm, it's worth pricing a replacement.",
  },
  {
    id: "faq-water-2",
    question: "Should I switch to a tankless water heater?",
    answer:
      "Tankless gives you endless hot water and saves space, but the upfront cost is higher and your gas line or electrical may need upgrades. We'll give you a side-by-side comparison so you can decide whether the long-term savings are worth it.",
  },

  // ===== COMMERCIAL =====
  {
    id: "faq-commercial-1",
    question: "Do you handle commercial HVAC contracts?",
    answer:
      "Yes — we service offices, retail spaces, restaurants, churches, and small industrial buildings throughout the OKC metro. We offer planned maintenance agreements that keep your equipment running and your tenants comfortable.",
  },
  {
    id: "faq-commercial-2",
    question: "Can you service rooftop units?",
    answer:
      "Absolutely — rooftop package units, split systems, mini-splits, make-up air, and exhaust ventilation. Our techs are equipped for rooftop work and we carry the right insurance to be on your property.",
  },

  // ===== VENTILATION / DUCT =====
  {
    id: "faq-vent-1",
    question: "How do I know if my ductwork needs to be replaced?",
    answer:
      "Signs include uneven temperatures between rooms, visible damage or dirt around vents, dust constantly building up, high power bills, and weak airflow. We do a free duct inspection as part of any estimate.",
  },
  {
    id: "faq-vent-2",
    question: "Can you install a ductless mini-split system?",
    answer:
      "Yes — mini-splits are perfect for additions, garages, sunrooms, and homes without ductwork. We install single-zone and multi-zone systems from leading manufacturers with full warranties.",
  },
];

export function getFaqsByKeys(keys: string[]): FAQItem[] {
  return faqs.filter((faq) => keys.includes(faq.id));
}

export const homepageFaqKeys = [
  "faq-general-1",
  "faq-general-2",
  "faq-general-3",
  "faq-general-4",
  "faq-general-5",
  "faq-general-6",
];

export const contactFaqKeys = [
  "faq-contact-1",
  "faq-contact-2",
  "faq-general-2",
  "faq-general-3",
  "faq-general-5",
];
