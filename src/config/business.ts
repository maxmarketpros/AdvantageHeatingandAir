export const businessConfig = {
  phone: "(405) 549-1652",
  phoneRaw: "+14055491652",
  email: "davidmesquita2102@gmail.com",
  address: {
    street: "4317 SW 22nd St #705",
    city: "Oklahoma City",
    state: "OK",
    zip: "73108",
    full: "4317 SW 22nd St #705, Oklahoma City, OK 73108",
  },
  hours: {
    display: "Open 24/7 — 365 Days a Year",
    structured: [
      { days: "Mo-Su", opens: "00:00", closes: "23:59" },
    ],
  },

  // ===== SERVICE AREAS =====
  // Compact list used in footer / structured data.
  serviceAreas: [
    "Oklahoma City",
    "Edmond",
    "Norman",
    "Moore",
    "Yukon",
    "Mustang",
    "Midwest City",
    "Del City",
    "Bethany",
    "The Village",
    "Nichols Hills",
    "Piedmont",
    "Newcastle",
    "Blanchard",
    "Purcell",
    "Chickasha",
    "Shawnee",
    "El Reno",
    "Harrah",
    "McCloud",
  ],

  // Expanded city list for the Service Areas section on the homepage.
  // Hrefs match the slugs preserved from the legacy site.
  serviceAreaCities: [
    { name: "Edmond", href: "/air-conditioning-contractor-in-edmond-oklahoma-city-ok" },
    { name: "Norman", href: "/air-conditioning-contractor-in-norman-ok" },
    { name: "Moore", href: "/air-conditioning-contractor-in-moore-ok" },
    { name: "Yukon", href: "/air-conditioning-contractor-in-yukon-oklahoma-city-ok" },
    { name: "Mustang", href: "/air-conditioning-contractor-in-mustang-oklahoma-city-ok" },
    { name: "Midwest City", href: "/air-conditioning-contractor-in-midwest-city-ok" },
    { name: "Del City", href: "/air-conditioning-contractor-in-del-city-ok" },
    { name: "Bethany", href: "/air-conditioning-contractor-in-bethany-ok" },
    { name: "The Village", href: "/air-conditioning-contractor-in-the-village-oklahoma-city-ok" },
    { name: "Nichols Hills", href: "/air-conditioning-contractor-in-nickels-hills-oklahoma-city-ok" },
    { name: "Piedmont", href: "/air-conditioning-contractor-in-piedmont-oklahoma-city-ok" },
    { name: "Newcastle", href: "/air-conditioning-contractor-in-newcastle-oklahoma-city-ok" },
    { name: "Blanchard", href: "/air-conditioning-contractor-in-blanchard-ok" },
    { name: "Purcell", href: "/air-conditioning-contractor-in-purcell-ok" },
    { name: "Chickasha", href: "/air-conditioning-contractor-in-chickasha-ok" },
    { name: "Shawnee", href: "/air-conditioning-contractor-in-shawnee-ok" },
    { name: "El Reno", href: "/air-conditioning-contractor-in-el-rino-oklahoma-city-ok" },
    { name: "Harrah", href: "/air-conditioning-contractor-in-harrah-ok" },
    { name: "McCloud", href: "/air-conditioning-contractor-in-mccloud-ok" },
  ],

  // Service areas section content
  serviceAreasHeading: "Serving Oklahoma City & the Surrounding Metro",
  serviceAreasSubtitle:
    "From Edmond and Norman to Yukon, Moore, and beyond — we cover the OKC metro 24/7.",

  // ===== MAP EMBED =====
  googleBusinessMapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6500.909330716919!2d-97.59724172276641!3d35.443536772664864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b211a0955872a3%3A0xc11dc8289d4283a7!2sAdvantage%20Heating%20and%20Air%20Conditioning!5e0!3m2!1sen!2sus!4v1777911874845!5m2!1sen!2sus",

  // ===== FORM EMBED =====
  // We use a native Netlify-compatible form (see ContactForm.tsx) instead of an iframe embed.
  formEmbedUrl: "",
  formEmbedHeight: "600px",

  coordinates: { lat: 35.4435368, lng: -97.5946668 },
  yearEstablished: 2000,
  yearsExperience: "25+",
  projectsCompleted: "5,000+",
  ownerName: "",
} as const;

// Helper: returns the map embed URL — Google Business embed if set, otherwise a generic city map
export function getMapEmbedUrl(): string {
  if (businessConfig.googleBusinessMapEmbed) {
    return businessConfig.googleBusinessMapEmbed;
  }
  const { city, state } = businessConfig.address;
  return `https://www.google.com/maps/embed/v1/place?key=&q=${encodeURIComponent(`${city}, ${state}`)}`;
}
