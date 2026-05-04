"use client";

import { usePathname } from "next/navigation";
import { ContactSection } from "./ContactSection";

// Renders the site-wide ContactSection above the footer on every page
// EXCEPT /contact, where the contact page itself places ContactSection
// directly under the hero so the form is the first thing visitors see.
export function GlobalContactSection() {
  const pathname = usePathname();
  if (pathname === "/contact" || pathname === "/contact/") return null;
  return <ContactSection />;
}
