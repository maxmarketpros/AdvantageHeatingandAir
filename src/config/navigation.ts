import type { NavItem, FooterGroup } from "@/types";

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about-us" },
  {
    label: "Services",
    href: "/#services",
    children: [
      {
        label: "AC Installation & Replacement",
        href: "/ac-installation-replacement-oklahoma-city-ok",
      },
      {
        label: "Air Conditioning Repair",
        href: "/air-conditioning-repair-services-oklahoma-city",
      },
      {
        label: "Heating System Installation",
        href: "/heating-system-installation-services-oklahoma-city",
      },
      {
        label: "Furnace Repair & Replacement",
        href: "/furnace-repair-and-replacement-oklahoma-city",
      },
      {
        label: "Water Heater Services",
        href: "/full-service-water-heater-services",
      },
      {
        label: "Commercial HVAC",
        href: "/commercial-hvac-services",
      },
      {
        label: "Ventilation & Air Duct",
        href: "/ventilation-air-duct-services-oklahoma-city",
      },
    ],
  },
  {
    label: "Service Areas",
    href: "/#service-areas",
    children: [
      { label: "Edmond", href: "/air-conditioning-contractor-in-edmond-oklahoma-city-ok" },
      { label: "Norman", href: "/air-conditioning-contractor-in-norman-ok" },
      { label: "Moore", href: "/air-conditioning-contractor-in-moore-ok" },
      { label: "Yukon", href: "/air-conditioning-contractor-in-yukon-oklahoma-city-ok" },
      { label: "Mustang", href: "/air-conditioning-contractor-in-mustang-oklahoma-city-ok" },
      { label: "Midwest City", href: "/air-conditioning-contractor-in-midwest-city-ok" },
      { label: "Del City", href: "/air-conditioning-contractor-in-del-city-ok" },
      { label: "Bethany", href: "/air-conditioning-contractor-in-bethany-ok" },
      { label: "The Village", href: "/air-conditioning-contractor-in-the-village-oklahoma-city-ok" },
      { label: "Nichols Hills", href: "/air-conditioning-contractor-in-nickels-hills-oklahoma-city-ok" },
      { label: "Piedmont", href: "/air-conditioning-contractor-in-piedmont-oklahoma-city-ok" },
      { label: "Newcastle", href: "/air-conditioning-contractor-in-newcastle-oklahoma-city-ok" },
      { label: "Blanchard", href: "/air-conditioning-contractor-in-blanchard-ok" },
      { label: "Purcell", href: "/air-conditioning-contractor-in-purcell-ok" },
      { label: "Chickasha", href: "/air-conditioning-contractor-in-chickasha-ok" },
      { label: "Shawnee", href: "/air-conditioning-contractor-in-shawnee-ok" },
      { label: "El Reno", href: "/air-conditioning-contractor-in-el-rino-oklahoma-city-ok" },
      { label: "Harrah", href: "/air-conditioning-contractor-in-harrah-ok" },
      { label: "McCloud", href: "/air-conditioning-contractor-in-mccloud-ok" },
    ],
  },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const footerGroups: FooterGroup[] = [
  {
    title: "Services",
    links: [
      { label: "AC Installation & Replacement", href: "/ac-installation-replacement-oklahoma-city-ok" },
      { label: "Air Conditioning Repair", href: "/air-conditioning-repair-services-oklahoma-city" },
      { label: "Heating System Installation", href: "/heating-system-installation-services-oklahoma-city" },
      { label: "Furnace Repair & Replacement", href: "/furnace-repair-and-replacement-oklahoma-city" },
      { label: "Water Heater Services", href: "/full-service-water-heater-services" },
      { label: "Commercial HVAC", href: "/commercial-hvac-services" },
      { label: "Ventilation & Air Duct", href: "/ventilation-air-duct-services-oklahoma-city" },
    ],
  },
  {
    title: "Service Areas",
    links: [
      { label: "Edmond", href: "/air-conditioning-contractor-in-edmond-oklahoma-city-ok" },
      { label: "Norman", href: "/air-conditioning-contractor-in-norman-ok" },
      { label: "Moore", href: "/air-conditioning-contractor-in-moore-ok" },
      { label: "Yukon", href: "/air-conditioning-contractor-in-yukon-oklahoma-city-ok" },
      { label: "Mustang", href: "/air-conditioning-contractor-in-mustang-oklahoma-city-ok" },
      { label: "Midwest City", href: "/air-conditioning-contractor-in-midwest-city-ok" },
      { label: "Del City", href: "/air-conditioning-contractor-in-del-city-ok" },
      { label: "Bethany", href: "/air-conditioning-contractor-in-bethany-ok" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about-us" },
      { label: "Gallery", href: "/gallery" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
      { label: "FAQ", href: "/#faq" },
    ],
  },
];
