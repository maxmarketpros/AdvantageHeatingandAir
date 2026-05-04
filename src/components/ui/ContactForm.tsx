import { Send } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface ContactFormProps {
  className?: string;
  formName?: string;
  // Optional preset value rendered as a hidden field — useful for tagging
  // submissions by service or area page (e.g. preset="ac-repair-edmond").
  preset?: string;
}

// Netlify-compatible static form. The submission flow:
//   1. Netlify scans /__forms.html during deploy and registers the form schema.
//   2. On submit, the browser POSTs to "/" with form-encoded data, including
//      the form-name field. Netlify's reverse proxy intercepts that POST and
//      stores the submission, then redirects to /thank-you/.
//   3. The honeypot field (bot-field) silently filters out spam bots.
export function ContactForm({ className, formName = "contact", preset }: ContactFormProps) {
  return (
    <form
      name={formName}
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      action="/thank-you/"
      className={cn("space-y-5", className)}
    >
      {/* Required for Netlify to associate the submission with the form */}
      <input type="hidden" name="form-name" value={formName} />
      {preset && <input type="hidden" name="preset" value={preset} />}

      {/* Honeypot — hidden from real users, filled in by bots */}
      <p className="hidden">
        <label>
          Don&apos;t fill this out if you&apos;re human:
          <input name="bot-field" />
        </label>
      </p>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-foreground">
            Full Name <span className="text-accent-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            autoComplete="name"
            className="w-full rounded-lg border border-border bg-white px-4 py-3 text-base text-foreground placeholder:text-muted-light focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-100"
            placeholder="John Smith"
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-foreground">
            Phone <span className="text-accent-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            autoComplete="tel"
            className="w-full rounded-lg border border-border bg-white px-4 py-3 text-base text-foreground placeholder:text-muted-light focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-100"
            placeholder="(405) 555-0123"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-foreground">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          autoComplete="email"
          className="w-full rounded-lg border border-border bg-white px-4 py-3 text-base text-foreground placeholder:text-muted-light focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-100"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label htmlFor="address" className="mb-1.5 block text-sm font-semibold text-foreground">
          Service Address (City)
        </label>
        <input
          type="text"
          id="address"
          name="address"
          autoComplete="street-address"
          className="w-full rounded-lg border border-border bg-white px-4 py-3 text-base text-foreground placeholder:text-muted-light focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-100"
          placeholder="Edmond, OK or full address"
        />
      </div>

      <div>
        <label htmlFor="service" className="mb-1.5 block text-sm font-semibold text-foreground">
          Service Needed
        </label>
        <select
          id="service"
          name="service"
          defaultValue=""
          className="w-full rounded-lg border border-border bg-white px-4 py-3 text-base text-foreground focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-100"
        >
          <option value="" disabled>
            Choose a service…
          </option>
          <option>AC Repair</option>
          <option>AC Installation / Replacement</option>
          <option>Heating Repair</option>
          <option>Heating / Furnace Installation</option>
          <option>Water Heater Service</option>
          <option>Commercial HVAC</option>
          <option>Ventilation / Ductwork / Mini-Split</option>
          <option>Annual Maintenance</option>
          <option>Other / Not Sure</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-foreground">
          Tell Us About the Issue
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full rounded-lg border border-border bg-white px-4 py-3 text-base text-foreground placeholder:text-muted-light focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-100"
          placeholder="What's going on with your system? When did it start? Anything else we should know?"
        />
      </div>

      <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted">
          We respond within 1 business hour during the day. For 24/7 emergencies, call us directly.
        </p>
        <Button type="submit" size="lg" icon={<Send className="h-5 w-5" />}>
          Send Request
        </Button>
      </div>
    </form>
  );
}
