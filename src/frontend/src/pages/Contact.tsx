import { Layout } from "@/components/Layout";
import { Badge } from "@/components/ui/AppBadge";
import { Button } from "@/components/ui/AppButton";
import { Card } from "@/components/ui/AppCard";
import { SectionHeading } from "@/components/ui/AppSectionHeading";
import { coverageZones } from "@/data/mockData";
import type { CoverageZone } from "@/types";
import {
  CheckCircle,
  Clock,
  Globe,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
  Youtube,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useRef, useState } from "react";

interface FormState {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
}

const initialForm: FormState = {
  name: "",
  email: "",
  phone: "",
  company: "",
  service: "",
  message: "",
};

const serviceOptions = [
  "Aerial Inspection",
  "Mapping & GIS",
  "Security & Surveillance",
  "Aerial Cinematography",
  "Environmental Monitoring",
  "Emergency Response Support",
  "Other",
];

// SVG map positions for each zone (in viewBox 800 x 500 coordinate space)
const ZONE_COORDS: Record<string, { cx: number; cy: number; r: number }> = {
  "pacific-northwest": { cx: 155, cy: 95, r: 70 },
  "bay-area": { cx: 130, cy: 215, r: 52 },
  "central-valley": { cx: 175, cy: 260, r: 70 },
  "los-angeles": { cx: 185, cy: 330, r: 62 },
  "nevada-corridor": { cx: 310, cy: 300, r: 55 },
};

// Simplified US continental outline + state boundaries for western US
const US_OUTLINE =
  "M 60 50 L 95 40 L 130 38 L 180 35 L 240 30 L 310 28 L 390 30 L 460 35 L 530 40 L 600 50 L 660 65 L 710 85 L 740 110 L 755 140 L 760 175 L 758 210 L 752 245 L 740 275 L 720 300 L 695 318 L 665 330 L 635 335 L 600 330 L 570 320 L 540 305 L 510 285 L 485 265 L 460 250 L 435 240 L 405 235 L 375 238 L 345 245 L 318 255 L 295 268 L 278 280 L 265 295 L 252 312 L 240 330 L 225 350 L 208 368 L 192 382 L 175 392 L 155 400 L 135 405 L 112 408 L 90 405 L 70 396 L 52 382 L 38 365 L 28 345 L 22 322 L 18 298 L 16 272 L 18 245 L 22 218 L 28 190 L 36 162 L 46 134 L 58 108 L 60 50 Z";

// Western state boundary hints (rough lines)
const STATE_LINES = [
  // California eastern border approx
  "M 255 50 L 260 120 L 268 200 L 278 280 L 265 295 L 252 312",
  // Oregon/Washington border
  "M 60 125 L 180 118 L 260 115",
  // Nevada/California rough
  "M 260 115 L 268 200 L 278 280",
  // Oregon/Idaho
  "M 180 118 L 195 150 L 210 175",
];

function validateForm(form: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!form.name.trim()) errors.name = "Name is required";
  if (!form.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "Enter a valid email address";
  }
  if (form.phone && !/^[\d\s\+\-\(\)]{7,20}$/.test(form.phone)) {
    errors.phone = "Enter a valid phone number";
  }
  if (!form.service) errors.service = "Please select a service";
  if (!form.message.trim()) errors.message = "Project details are required";
  else if (form.message.trim().length < 20)
    errors.message = "Please provide at least 20 characters";
  return errors;
}

function PulsingMarker({
  cx,
  cy,
  active,
  isSelected,
}: {
  cx: number;
  cy: number;
  active: boolean;
  isSelected: boolean;
}) {
  return (
    <g>
      {/* Outer pulse ring */}
      {active && (
        <>
          <circle
            cx={cx}
            cy={cy}
            r={isSelected ? 14 : 10}
            fill="none"
            stroke="oklch(0.65 0.23 254 / 0.25)"
            strokeWidth={1.5}
            className={isSelected ? "" : "animate-ping"}
            style={{ transformOrigin: `${cx}px ${cy}px` }}
          />
          <circle
            cx={cx}
            cy={cy}
            r={isSelected ? 8 : 6}
            fill="none"
            stroke="oklch(0.65 0.23 254 / 0.5)"
            strokeWidth={1}
          />
        </>
      )}
      {/* Center dot */}
      <circle
        cx={cx}
        cy={cy}
        r={isSelected ? 5 : 4}
        fill={
          active
            ? isSelected
              ? "oklch(0.75 0.23 254)"
              : "oklch(0.65 0.23 254)"
            : "oklch(0.40 0 0)"
        }
        style={{
          filter: active
            ? `drop-shadow(0 0 ${isSelected ? "8px" : "4px"} oklch(0.65 0.23 254 / 0.8))`
            : "none",
        }}
      />
    </g>
  );
}

function ZoneTooltip({ zone }: { zone: CoverageZone }) {
  const coords = ZONE_COORDS[zone.id];
  if (!coords) return null;

  // Position tooltip above or below based on cy position
  const above = coords.cy > 250;
  const tooltipY = above ? coords.cy - coords.r - 80 : coords.cy + coords.r + 8;
  const tooltipX = Math.max(10, Math.min(coords.cx - 90, 610));

  return (
    <foreignObject
      x={tooltipX}
      y={tooltipY}
      width={180}
      height={80}
      style={{ overflow: "visible" }}
    >
      <div
        style={{
          background: "oklch(0.12 0.01 254)",
          border: "1px solid oklch(0.65 0.23 254 / 0.5)",
          borderRadius: "4px",
          padding: "8px 10px",
          fontSize: "10px",
          lineHeight: "1.4",
          color: "oklch(0.95 0 0)",
          boxShadow: "0 0 16px oklch(0.65 0.23 254 / 0.25)",
          whiteSpace: "nowrap",
        }}
      >
        <div
          style={{
            fontWeight: "700",
            fontSize: "11px",
            color: "oklch(0.75 0.23 254)",
            marginBottom: "2px",
          }}
        >
          {zone.name}
        </div>
        <div style={{ color: "oklch(0.7 0 0)", marginBottom: "4px" }}>
          {zone.region}
        </div>
        <div
          style={{
            fontSize: "9px",
            color: "oklch(0.6 0 0)",
            whiteSpace: "normal",
          }}
        >
          {zone.description.slice(0, 80)}...
        </div>
      </div>
    </foreignObject>
  );
}

export function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [activeZone, setActiveZone] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      const newForm = { ...form, [name]: value };
      const newErrors = validateForm(newForm);
      setErrors((prev) => ({
        ...prev,
        [name]: newErrors[name as keyof FormErrors],
      }));
    }
  }

  function handleBlur(
    e: React.FocusEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const newErrors = validateForm(form);
    setErrors((prev) => ({
      ...prev,
      [name]: newErrors[name as keyof FormErrors],
    }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const allTouched = Object.fromEntries(
      Object.keys(form).map((k) => [k, true]),
    );
    setTouched(allTouched);
    const newErrors = validateForm(form);
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1400);
  }

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
  };

  const fieldVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" as const },
    },
  };

  return (
    <Layout>
      {/* Hero */}
      <section
        data-ocid="contact.hero.section"
        className="relative py-28 lg:py-36 bg-card border-b border-border overflow-hidden"
      >
        {/* Background glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 60%, oklch(0.65 0.23 254 / 0.07) 0%, transparent 70%)",
          }}
        />
        {/* Grid texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(oklch(0.65 0.23 254 / 0.06) 1px, transparent 1px), linear-gradient(90deg, oklch(0.65 0.23 254 / 0.06) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl space-y-5"
          >
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Badge
                variant="primary"
                className="tracking-widest uppercase text-xs"
              >
                Contact
              </Badge>
            </motion.div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground leading-[0.95] tracking-tight">
              Get In{" "}
              <span
                className="text-primary"
                style={{
                  textShadow: "0 0 32px oklch(0.65 0.23 254 / 0.4)",
                }}
              >
                Touch
              </span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-xl leading-relaxed">
              Launch your next aerial mission with a team that responds within
              24 hours. Tell us about your project and we'll get back to you
              with a tailored quote.
            </p>
            <div className="flex items-center gap-6 pt-2">
              {[
                { icon: Clock, text: "24-hr response" },
                { icon: Globe, text: "West Coast + Nevada" },
                { icon: Phone, text: "Available 7 days" },
              ].map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <Icon className="w-4 h-4 text-primary" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main form + sidebar */}
      <section data-ocid="contact.main.section" className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Sidebar */}
            <motion.aside
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-5"
            >
              <Card className="p-6 space-y-5">
                <h3 className="font-display font-bold text-foreground text-base tracking-wide uppercase text-xs text-muted-foreground">
                  Contact Information
                </h3>
                {[
                  {
                    icon: Mail,
                    label: "Email",
                    value: "ops@aerovision.io",
                    href: "mailto:ops@aerovision.io",
                  },
                  {
                    icon: Phone,
                    label: "Phone",
                    value: "+1 (415) 820-4400",
                    href: "tel:+14158204400",
                  },
                  {
                    icon: MapPin,
                    label: "Headquarters",
                    value: "San Francisco, CA 94105",
                    href: null,
                  },
                  {
                    icon: Clock,
                    label: "Response Time",
                    value: "Within 24 hours",
                    href: null,
                  },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-sm bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-0.5">
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          className="text-sm text-foreground font-medium hover:text-primary transition-colors"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-sm text-foreground font-medium">
                          {value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </Card>

              {/* Social links */}
              <Card className="p-6 space-y-4">
                <h3 className="font-display text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  Follow Us
                </h3>
                <div className="flex gap-3">
                  {[
                    {
                      icon: Linkedin,
                      label: "LinkedIn",
                      href: "https://linkedin.com",
                    },
                    {
                      icon: Twitter,
                      label: "Twitter / X",
                      href: "https://twitter.com",
                    },
                    {
                      icon: Youtube,
                      label: "YouTube",
                      href: "https://youtube.com",
                    },
                  ].map(({ icon: Icon, label, href }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="w-10 h-10 rounded-sm bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-smooth"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </Card>

              {/* Operating hours */}
              <Card className="p-6 space-y-4">
                <h3 className="font-display text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  Operating Hours
                </h3>
                <div className="space-y-2">
                  {[
                    { day: "Monday – Friday", hours: "7:00 AM – 7:00 PM" },
                    { day: "Saturday", hours: "8:00 AM – 5:00 PM" },
                    { day: "Sunday / Emergency", hours: "On-call only" },
                  ].map(({ day, hours }) => (
                    <div key={day} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{day}</span>
                      <span className="text-foreground font-medium">
                        {hours}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.aside>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.15 }}
              className="lg:col-span-2"
            >
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.93 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.93 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    data-ocid="contact.form.success_state"
                    className="min-h-[520px] flex flex-col items-center justify-center gap-7 text-center p-12 rounded-sm border border-primary/25 bg-primary/5"
                    style={{
                      boxShadow: "inset 0 0 80px oklch(0.65 0.23 254 / 0.04)",
                    }}
                  >
                    <motion.div
                      initial={{ scale: 0, rotate: -30 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{
                        delay: 0.15,
                        type: "spring",
                        stiffness: 260,
                        damping: 18,
                      }}
                    >
                      <CheckCircle
                        className="w-16 h-16 text-primary"
                        style={{
                          filter:
                            "drop-shadow(0 0 20px oklch(0.65 0.23 254 / 0.6))",
                        }}
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.4 }}
                      className="space-y-3"
                    >
                      <h3 className="text-3xl font-display font-bold text-foreground">
                        Request Received!
                      </h3>
                      <p className="text-muted-foreground max-w-sm leading-relaxed">
                        Thank you{form.name ? `, ${form.name}` : ""}! We'll
                        review your{" "}
                        <span className="text-primary font-medium">
                          {form.service || "inquiry"}
                        </span>{" "}
                        request and get back to you within 24 hours.
                      </p>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="flex flex-col sm:flex-row gap-3"
                    >
                      <Button
                        variant="outline"
                        size="md"
                        onClick={() => {
                          setSubmitted(false);
                          setForm(initialForm);
                          setErrors({});
                          setTouched({});
                        }}
                        data-ocid="contact.form.submit_another.button"
                      >
                        Submit Another Request
                      </Button>
                      <Button
                        variant="primary"
                        size="md"
                        onClick={() =>
                          window.scrollTo({ top: 0, behavior: "smooth" })
                        }
                        data-ocid="contact.form.back_top.button"
                      >
                        Back to Top
                      </Button>
                    </motion.div>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    ref={formRef}
                    onSubmit={handleSubmit}
                    data-ocid="contact.form"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="space-y-5 p-8 rounded-sm border border-border bg-card"
                    style={{
                      boxShadow: "inset 0 0 60px oklch(0.65 0.23 254 / 0.02)",
                    }}
                    noValidate
                  >
                    <motion.div variants={fieldVariants}>
                      <h3 className="font-display font-bold text-foreground text-lg">
                        Request a Quote
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Fields marked{" "}
                        <span className="text-destructive">*</span> are
                        required.
                      </p>
                    </motion.div>

                    {/* Name + Email */}
                    <motion.div
                      variants={fieldVariants}
                      className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                    >
                      <div className="space-y-1.5">
                        <label
                          htmlFor="name"
                          className="text-xs font-display font-semibold text-muted-foreground uppercase tracking-wider"
                        >
                          Full Name <span className="text-destructive">*</span>
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          value={form.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          data-ocid="contact.form.name.input"
                          placeholder="Marcus Chen"
                          className={`w-full h-10 px-3 text-sm bg-background border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 transition-smooth ${errors.name && touched.name ? "border-destructive/60 focus:border-destructive/80 focus:ring-destructive/20" : "border-border focus:border-primary/60 focus:ring-primary/30"}`}
                        />
                        {errors.name && touched.name && (
                          <p
                            data-ocid="contact.form.name.field_error"
                            className="text-xs text-destructive mt-1"
                          >
                            {errors.name}
                          </p>
                        )}
                      </div>
                      <div className="space-y-1.5">
                        <label
                          htmlFor="email"
                          className="text-xs font-display font-semibold text-muted-foreground uppercase tracking-wider"
                        >
                          Email Address{" "}
                          <span className="text-destructive">*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={form.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          data-ocid="contact.form.email.input"
                          placeholder="you@company.com"
                          className={`w-full h-10 px-3 text-sm bg-background border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 transition-smooth ${errors.email && touched.email ? "border-destructive/60 focus:border-destructive/80 focus:ring-destructive/20" : "border-border focus:border-primary/60 focus:ring-primary/30"}`}
                        />
                        {errors.email && touched.email && (
                          <p
                            data-ocid="contact.form.email.field_error"
                            className="text-xs text-destructive mt-1"
                          >
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </motion.div>

                    {/* Phone + Company */}
                    <motion.div
                      variants={fieldVariants}
                      className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                    >
                      <div className="space-y-1.5">
                        <label
                          htmlFor="phone"
                          className="text-xs font-display font-semibold text-muted-foreground uppercase tracking-wider"
                        >
                          Phone Number
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={form.phone}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          data-ocid="contact.form.phone.input"
                          placeholder="+1 (555) 000-0000"
                          className={`w-full h-10 px-3 text-sm bg-background border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 transition-smooth ${errors.phone && touched.phone ? "border-destructive/60 focus:border-destructive/80 focus:ring-destructive/20" : "border-border focus:border-primary/60 focus:ring-primary/30"}`}
                        />
                        {errors.phone && touched.phone && (
                          <p
                            data-ocid="contact.form.phone.field_error"
                            className="text-xs text-destructive mt-1"
                          >
                            {errors.phone}
                          </p>
                        )}
                      </div>
                      <div className="space-y-1.5">
                        <label
                          htmlFor="company"
                          className="text-xs font-display font-semibold text-muted-foreground uppercase tracking-wider"
                        >
                          Company
                        </label>
                        <input
                          id="company"
                          name="company"
                          type="text"
                          value={form.company}
                          onChange={handleChange}
                          data-ocid="contact.form.company.input"
                          placeholder="Acme Corp (optional)"
                          className="w-full h-10 px-3 text-sm bg-background border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-smooth"
                        />
                      </div>
                    </motion.div>

                    {/* Service */}
                    <motion.div
                      variants={fieldVariants}
                      className="space-y-1.5"
                    >
                      <label
                        htmlFor="service"
                        className="text-xs font-display font-semibold text-muted-foreground uppercase tracking-wider"
                      >
                        Service Interest{" "}
                        <span className="text-destructive">*</span>
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        data-ocid="contact.form.service.select"
                        className={`w-full h-10 px-3 text-sm bg-background border rounded-sm text-foreground focus:outline-none focus:ring-1 transition-smooth ${errors.service && touched.service ? "border-destructive/60 focus:border-destructive/80 focus:ring-destructive/20" : "border-border focus:border-primary/60 focus:ring-primary/30"}`}
                      >
                        <option value="" disabled>
                          Select a service...
                        </option>
                        {serviceOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                      {errors.service && touched.service && (
                        <p
                          data-ocid="contact.form.service.field_error"
                          className="text-xs text-destructive mt-1"
                        >
                          {errors.service}
                        </p>
                      )}
                    </motion.div>

                    {/* Message */}
                    <motion.div
                      variants={fieldVariants}
                      className="space-y-1.5"
                    >
                      <label
                        htmlFor="message"
                        className="text-xs font-display font-semibold text-muted-foreground uppercase tracking-wider"
                      >
                        Project Details{" "}
                        <span className="text-destructive">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        data-ocid="contact.form.message.textarea"
                        placeholder="Describe your project scope, location, timeline, and any specific requirements..."
                        className={`w-full px-3 py-2.5 text-sm bg-background border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 transition-smooth resize-none ${errors.message && touched.message ? "border-destructive/60 focus:border-destructive/80 focus:ring-destructive/20" : "border-border focus:border-primary/60 focus:ring-primary/30"}`}
                      />
                      {errors.message && touched.message && (
                        <p
                          data-ocid="contact.form.message.field_error"
                          className="text-xs text-destructive mt-1"
                        >
                          {errors.message}
                        </p>
                      )}
                    </motion.div>

                    <motion.div variants={fieldVariants}>
                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        loading={loading}
                        className="w-full"
                        data-ocid="contact.form.submit_button"
                      >
                        {loading ? (
                          "Sending..."
                        ) : (
                          <span className="flex items-center gap-2">
                            <Send className="w-4 h-4" />
                            Send Quote Request
                          </span>
                        )}
                      </Button>
                    </motion.div>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interactive Coverage Map */}
      <section
        data-ocid="contact.coverage.section"
        className="py-20 bg-muted/20 border-t border-border"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading
              title="Service Coverage Zones"
              subtitle="We operate across the western United States. Click a zone marker or a region card to explore coverage details."
              className="mb-12"
            />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* SVG Map */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="lg:col-span-2"
            >
              <div
                className="relative rounded-sm border border-border overflow-hidden"
                style={{ aspectRatio: "16/10" }}
                data-ocid="contact.coverage.map"
              >
                <svg
                  viewBox="0 0 800 500"
                  className="w-full h-full"
                  role="img"
                  aria-label="Interactive map showing AeroVision coverage zones across western United States"
                >
                  <defs>
                    <radialGradient id="bgGrad" cx="50%" cy="50%">
                      <stop offset="0%" stopColor="oklch(0.09 0.01 254)" />
                      <stop offset="100%" stopColor="oklch(0.05 0 0)" />
                    </radialGradient>
                    <radialGradient id="activeGlow" cx="50%" cy="50%" r="50%">
                      <stop
                        offset="0%"
                        stopColor="oklch(0.65 0.23 254)"
                        stopOpacity="0.35"
                      />
                      <stop
                        offset="100%"
                        stopColor="oklch(0.65 0.23 254)"
                        stopOpacity="0"
                      />
                    </radialGradient>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                      <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  {/* Background */}
                  <rect width="800" height="500" fill="url(#bgGrad)" />

                  {/* Grid lines */}
                  {Array.from({ length: 11 }, (_, i) => i * 50).map((y) => (
                    <line
                      key={`h${y}`}
                      x1="0"
                      y1={y}
                      x2="800"
                      y2={y}
                      stroke="oklch(0.20 0.01 254 / 0.3)"
                      strokeWidth="0.5"
                    />
                  ))}
                  {Array.from({ length: 17 }, (_, i) => i * 50).map((x) => (
                    <line
                      key={`v${x}`}
                      x1={x}
                      y1="0"
                      x2={x}
                      y2="500"
                      stroke="oklch(0.20 0.01 254 / 0.3)"
                      strokeWidth="0.5"
                    />
                  ))}

                  {/* US continental outline (simplified western emphasis) */}
                  <path
                    d={US_OUTLINE}
                    fill="oklch(0.11 0.005 254)"
                    stroke="oklch(0.28 0.03 254)"
                    strokeWidth="1.2"
                  />

                  {/* State lines (rough) */}
                  {STATE_LINES.map((d) => (
                    <path
                      key={d}
                      d={d}
                      fill="none"
                      stroke="oklch(0.22 0.02 254)"
                      strokeWidth="0.8"
                      strokeDasharray="4 3"
                    />
                  ))}

                  {/* Coverage zone circles + markers */}
                  {coverageZones.map((zone) => {
                    const c = ZONE_COORDS[zone.id];
                    if (!c) return null;
                    const isSelected = activeZone === zone.id;

                    return (
                      <g
                        key={zone.id}
                        onClick={() =>
                          setActiveZone(isSelected ? null : zone.id)
                        }
                        onKeyDown={(e) =>
                          e.key === "Enter" &&
                          setActiveZone(isSelected ? null : zone.id)
                        }
                        tabIndex={0}
                        aria-label={`${zone.name} — click to view details`}
                        className="cursor-pointer focus:outline-none"
                        data-ocid={`contact.coverage.zone.${zone.id}`}
                      >
                        {/* Zone radius circle */}
                        <circle
                          cx={c.cx}
                          cy={c.cy}
                          r={c.r}
                          fill={
                            zone.active
                              ? isSelected
                                ? "oklch(0.65 0.23 254 / 0.18)"
                                : "oklch(0.65 0.23 254 / 0.09)"
                              : "oklch(0.35 0 0 / 0.10)"
                          }
                          stroke={
                            isSelected
                              ? "oklch(0.65 0.23 254 / 0.9)"
                              : zone.active
                                ? "oklch(0.65 0.23 254 / 0.45)"
                                : "oklch(0.40 0 0 / 0.4)"
                          }
                          strokeWidth={isSelected ? 1.5 : 1}
                          strokeDasharray={zone.active ? "none" : "5 3"}
                        />

                        {/* Glow halo when selected */}
                        {isSelected && (
                          <circle
                            cx={c.cx}
                            cy={c.cy}
                            r={c.r + 12}
                            fill="url(#activeGlow)"
                          />
                        )}

                        {/* Pulse marker */}
                        <PulsingMarker
                          cx={c.cx}
                          cy={c.cy}
                          active={zone.active}
                          isSelected={isSelected}
                        />

                        {/* Zone label */}
                        <text
                          x={c.cx}
                          y={c.cy + c.r + 14}
                          textAnchor="middle"
                          fontSize="8.5"
                          fill={
                            isSelected
                              ? "oklch(0.75 0.23 254)"
                              : "oklch(0.65 0 0)"
                          }
                          fontFamily="var(--font-display)"
                          letterSpacing="0.5"
                        >
                          {zone.name.toUpperCase()}
                        </text>
                      </g>
                    );
                  })}

                  {/* Tooltip for active zone */}
                  <AnimatePresence>
                    {activeZone &&
                      (() => {
                        const zone = coverageZones.find(
                          (z) => z.id === activeZone,
                        );
                        return zone ? <ZoneTooltip zone={zone} /> : null;
                      })()}
                  </AnimatePresence>

                  {/* Legend */}
                  <g transform="translate(640, 440)">
                    <rect
                      x="0"
                      y="0"
                      width="145"
                      height="48"
                      rx="3"
                      fill="oklch(0.10 0 0 / 0.9)"
                      stroke="oklch(0.22 0 0)"
                      strokeWidth="0.8"
                    />
                    <circle cx="16" cy="16" r="4" fill="oklch(0.65 0.23 254)" />
                    <text
                      x="26"
                      y="20"
                      fontSize="8"
                      fill="oklch(0.75 0 0)"
                      fontFamily="var(--font-display)"
                    >
                      Active Zone
                    </text>
                    <circle
                      cx="16"
                      cy="36"
                      r="4"
                      fill="oklch(0.40 0 0)"
                      stroke="oklch(0.40 0 0 / 0.5)"
                      strokeWidth="1"
                    />
                    <text
                      x="26"
                      y="40"
                      fontSize="8"
                      fill="oklch(0.60 0 0)"
                      fontFamily="var(--font-display)"
                    >
                      Expanding
                    </text>
                  </g>
                </svg>

                {/* Scan-line overlay */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "repeating-linear-gradient(0deg, transparent, transparent 2px, oklch(0 0 0 / 0.04) 2px, oklch(0 0 0 / 0.04) 4px)",
                  }}
                />
              </div>
              <p className="text-xs text-muted-foreground mt-3 text-center">
                Click a zone marker or a region card to view coverage details
              </p>
            </motion.div>

            {/* Zone cards */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="space-y-3"
            >
              {coverageZones.map((zone, i) => (
                <motion.button
                  type="button"
                  key={zone.id}
                  onClick={() =>
                    setActiveZone(activeZone === zone.id ? null : zone.id)
                  }
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  data-ocid={`contact.coverage.zone_card.${zone.id}`}
                  className={`w-full text-left p-4 rounded-sm border transition-smooth focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 ${
                    activeZone === zone.id
                      ? "border-primary/60 bg-primary/10"
                      : "border-border bg-card hover:border-primary/30 hover:bg-primary/5"
                  }`}
                  style={
                    activeZone === zone.id
                      ? {
                          boxShadow:
                            "0 0 16px oklch(0.65 0.23 254 / 0.12), inset 0 0 24px oklch(0.65 0.23 254 / 0.04)",
                        }
                      : {}
                  }
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-display font-semibold text-sm text-foreground">
                      {zone.name}
                    </span>
                    <Badge
                      variant={zone.active ? "primary" : "secondary"}
                      className="text-xs shrink-0"
                    >
                      {zone.active ? "Active" : "Expanding"}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">{zone.region}</p>
                  <AnimatePresence>
                    {activeZone === zone.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.28 }}
                        className="overflow-hidden"
                      >
                        <p className="text-xs text-muted-foreground mt-2.5 pt-2.5 border-t border-border/60 leading-relaxed">
                          {zone.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              ))}

              <div className="pt-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full"
                  data-ocid="contact.coverage.request_zone.button"
                  onClick={() =>
                    formRef.current?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Request Coverage in Your Area
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
