import type { ProcessStep } from "@/types";

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Call or Request a Quote",
    description:
      "Reach out by phone or our online form, day or night. We answer 24/7 and book most appointments same-day.",
    icon: "PhoneCall",
  },
  {
    step: 2,
    title: "Free On-Site Estimate",
    description:
      "A NATE-certified technician inspects your system, diagnoses the issue, and gives you a clear, written estimate with no pressure.",
    icon: "ClipboardList",
  },
  {
    step: 3,
    title: "We Get to Work",
    description:
      "Once you approve, we get your repair, install, or replacement done fast — using premium parts and the right tools for the job.",
    icon: "Wrench",
  },
  {
    step: 4,
    title: "Comfort Restored",
    description:
      "We test the system, walk you through what we did, and stand behind the work with a written warranty. Done right the first time.",
    icon: "CheckCircle",
  },
];
