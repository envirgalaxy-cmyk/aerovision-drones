import { r as reactExports, j as jsxRuntimeExports } from "./index-DLb34WgJ.js";
import { c as createLucideIcon, L as Layout, m as motion, B as Badge, b as Linkedin, T as Twitter, A as AnimatePresence, a as Button } from "./AppBadge-7-PoDhp5.js";
import { C as Card, S as SectionHeading } from "./AppSectionHeading-CAvJ9Bqg.js";
import { c as coverageZones } from "./mockData-C21zYF-f.js";
import { C as Clock } from "./clock-BTH42V22.js";
import { M as MapPin } from "./map-pin-B5SRFLqg.js";
import { C as CircleCheckBig } from "./circle-check-big-DIub-gAy.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$4 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }],
  ["path", { d: "M2 12h20", key: "9i4pu4" }]
];
const Globe = createLucideIcon("globe", __iconNode$4);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
  ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }]
];
const Mail = createLucideIcon("mail", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  [
    "path",
    {
      d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
      key: "9njp5v"
    }
  ]
];
const Phone = createLucideIcon("phone", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
];
const Send = createLucideIcon("send", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",
      key: "1q2vi4"
    }
  ],
  ["path", { d: "m10 15 5-3-5-3z", key: "1jp15x" }]
];
const Youtube = createLucideIcon("youtube", __iconNode);
const initialForm = {
  name: "",
  email: "",
  phone: "",
  company: "",
  service: "",
  message: ""
};
const serviceOptions = [
  "Aerial Inspection",
  "Mapping & GIS",
  "Security & Surveillance",
  "Aerial Cinematography",
  "Environmental Monitoring",
  "Emergency Response Support",
  "Other"
];
const ZONE_COORDS = {
  "pacific-northwest": { cx: 155, cy: 95, r: 70 },
  "bay-area": { cx: 130, cy: 215, r: 52 },
  "central-valley": { cx: 175, cy: 260, r: 70 },
  "los-angeles": { cx: 185, cy: 330, r: 62 },
  "nevada-corridor": { cx: 310, cy: 300, r: 55 }
};
const US_OUTLINE = "M 60 50 L 95 40 L 130 38 L 180 35 L 240 30 L 310 28 L 390 30 L 460 35 L 530 40 L 600 50 L 660 65 L 710 85 L 740 110 L 755 140 L 760 175 L 758 210 L 752 245 L 740 275 L 720 300 L 695 318 L 665 330 L 635 335 L 600 330 L 570 320 L 540 305 L 510 285 L 485 265 L 460 250 L 435 240 L 405 235 L 375 238 L 345 245 L 318 255 L 295 268 L 278 280 L 265 295 L 252 312 L 240 330 L 225 350 L 208 368 L 192 382 L 175 392 L 155 400 L 135 405 L 112 408 L 90 405 L 70 396 L 52 382 L 38 365 L 28 345 L 22 322 L 18 298 L 16 272 L 18 245 L 22 218 L 28 190 L 36 162 L 46 134 L 58 108 L 60 50 Z";
const STATE_LINES = [
  // California eastern border approx
  "M 255 50 L 260 120 L 268 200 L 278 280 L 265 295 L 252 312",
  // Oregon/Washington border
  "M 60 125 L 180 118 L 260 115",
  // Nevada/California rough
  "M 260 115 L 268 200 L 278 280",
  // Oregon/Idaho
  "M 180 118 L 195 150 L 210 175"
];
function validateForm(form) {
  const errors = {};
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
  isSelected
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { children: [
    active && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "circle",
        {
          cx,
          cy,
          r: isSelected ? 14 : 10,
          fill: "none",
          stroke: "oklch(0.65 0.23 254 / 0.25)",
          strokeWidth: 1.5,
          className: isSelected ? "" : "animate-ping",
          style: { transformOrigin: `${cx}px ${cy}px` }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "circle",
        {
          cx,
          cy,
          r: isSelected ? 8 : 6,
          fill: "none",
          stroke: "oklch(0.65 0.23 254 / 0.5)",
          strokeWidth: 1
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "circle",
      {
        cx,
        cy,
        r: isSelected ? 5 : 4,
        fill: active ? isSelected ? "oklch(0.75 0.23 254)" : "oklch(0.65 0.23 254)" : "oklch(0.40 0 0)",
        style: {
          filter: active ? `drop-shadow(0 0 ${isSelected ? "8px" : "4px"} oklch(0.65 0.23 254 / 0.8))` : "none"
        }
      }
    )
  ] });
}
function ZoneTooltip({ zone }) {
  const coords = ZONE_COORDS[zone.id];
  if (!coords) return null;
  const above = coords.cy > 250;
  const tooltipY = above ? coords.cy - coords.r - 80 : coords.cy + coords.r + 8;
  const tooltipX = Math.max(10, Math.min(coords.cx - 90, 610));
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "foreignObject",
    {
      x: tooltipX,
      y: tooltipY,
      width: 180,
      height: 80,
      style: { overflow: "visible" },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          style: {
            background: "oklch(0.12 0.01 254)",
            border: "1px solid oklch(0.65 0.23 254 / 0.5)",
            borderRadius: "4px",
            padding: "8px 10px",
            fontSize: "10px",
            lineHeight: "1.4",
            color: "oklch(0.95 0 0)",
            boxShadow: "0 0 16px oklch(0.65 0.23 254 / 0.25)",
            whiteSpace: "nowrap"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                style: {
                  fontWeight: "700",
                  fontSize: "11px",
                  color: "oklch(0.75 0.23 254)",
                  marginBottom: "2px"
                },
                children: zone.name
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: "oklch(0.7 0 0)", marginBottom: "4px" }, children: zone.region }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                style: {
                  fontSize: "9px",
                  color: "oklch(0.6 0 0)",
                  whiteSpace: "normal"
                },
                children: [
                  zone.description.slice(0, 80),
                  "..."
                ]
              }
            )
          ]
        }
      )
    }
  );
}
function Contact() {
  const [form, setForm] = reactExports.useState(initialForm);
  const [errors, setErrors] = reactExports.useState({});
  const [touched, setTouched] = reactExports.useState({});
  const [submitted, setSubmitted] = reactExports.useState(false);
  const [loading, setLoading] = reactExports.useState(false);
  const [activeZone, setActiveZone] = reactExports.useState(null);
  const formRef = reactExports.useRef(null);
  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      const newForm = { ...form, [name]: value };
      const newErrors = validateForm(newForm);
      setErrors((prev) => ({
        ...prev,
        [name]: newErrors[name]
      }));
    }
  }
  function handleBlur(e) {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const newErrors = validateForm(form);
    setErrors((prev) => ({
      ...prev,
      [name]: newErrors[name]
    }));
  }
  function handleSubmit(e) {
    e.preventDefault();
    const allTouched = Object.fromEntries(
      Object.keys(form).map((k) => [k, true])
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
    visible: { transition: { staggerChildren: 0.08 } }
  };
  const fieldVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        "data-ocid": "contact.hero.section",
        className: "relative py-28 lg:py-36 bg-card border-b border-border overflow-hidden",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0 pointer-events-none",
              style: {
                background: "radial-gradient(ellipse 60% 50% at 50% 60%, oklch(0.65 0.23 254 / 0.07) 0%, transparent 70%)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0 pointer-events-none opacity-20",
              style: {
                backgroundImage: "linear-gradient(oklch(0.65 0.23 254 / 0.06) 1px, transparent 1px), linear-gradient(90deg, oklch(0.65 0.23 254 / 0.06) 1px, transparent 1px)",
                backgroundSize: "64px 64px"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 28 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
              className: "max-w-3xl space-y-5",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    initial: { opacity: 0, x: -16 },
                    animate: { opacity: 1, x: 0 },
                    transition: { duration: 0.5, delay: 0.1 },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Badge,
                      {
                        variant: "primary",
                        className: "tracking-widest uppercase text-xs",
                        children: "Contact"
                      }
                    )
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground leading-[0.95] tracking-tight", children: [
                  "Get In",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "text-primary",
                      style: {
                        textShadow: "0 0 32px oklch(0.65 0.23 254 / 0.4)"
                      },
                      children: "Touch"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg md:text-xl max-w-xl leading-relaxed", children: "Launch your next aerial mission with a team that responds within 24 hours. Tell us about your project and we'll get back to you with a tailored quote." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-6 pt-2", children: [
                  { icon: Clock, text: "24-hr response" },
                  { icon: Globe, text: "West Coast + Nevada" },
                  { icon: Phone, text: "Available 7 days" }
                ].map(({ icon: Icon, text }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "flex items-center gap-2 text-sm text-muted-foreground",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-4 h-4 text-primary" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: text })
                    ]
                  },
                  text
                )) })
              ]
            }
          ) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { "data-ocid": "contact.main.section", className: "py-16 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.aside,
        {
          initial: { opacity: 0, x: -24 },
          animate: { opacity: 1, x: 0 },
          transition: { duration: 0.6, delay: 0.1 },
          className: "space-y-5",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-6 space-y-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-foreground text-base tracking-wide uppercase text-xs text-muted-foreground", children: "Contact Information" }),
              [
                {
                  icon: Mail,
                  label: "Email",
                  value: "ops@aerovision.io",
                  href: "mailto:ops@aerovision.io"
                },
                {
                  icon: Phone,
                  label: "Phone",
                  value: "+1 (415) 820-4400",
                  href: "tel:+14158204400"
                },
                {
                  icon: MapPin,
                  label: "Headquarters",
                  value: "San Francisco, CA 94105",
                  href: null
                },
                {
                  icon: Clock,
                  label: "Response Time",
                  value: "Within 24 hours",
                  href: null
                }
              ].map(({ icon: Icon, label, value, href }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-sm bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-4 h-4 text-primary" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-0.5", children: label }),
                  href ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "a",
                    {
                      href,
                      className: "text-sm text-foreground font-medium hover:text-primary transition-colors",
                      children: value
                    }
                  ) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground font-medium", children: value })
                ] })
              ] }, label))
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-6 space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xs font-bold uppercase tracking-widest text-muted-foreground", children: "Follow Us" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-3", children: [
                {
                  icon: Linkedin,
                  label: "LinkedIn",
                  href: "https://linkedin.com"
                },
                {
                  icon: Twitter,
                  label: "Twitter / X",
                  href: "https://twitter.com"
                },
                {
                  icon: Youtube,
                  label: "YouTube",
                  href: "https://youtube.com"
                }
              ].map(({ icon: Icon, label, href }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  "aria-label": label,
                  className: "w-10 h-10 rounded-sm bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-smooth",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-4 h-4" })
                },
                label
              )) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-6 space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xs font-bold uppercase tracking-widest text-muted-foreground", children: "Operating Hours" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: [
                { day: "Monday – Friday", hours: "7:00 AM – 7:00 PM" },
                { day: "Saturday", hours: "8:00 AM – 5:00 PM" },
                { day: "Sunday / Emergency", hours: "On-call only" }
              ].map(({ day, hours }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: day }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium", children: hours })
              ] }, day)) })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.65, delay: 0.15 },
          className: "lg:col-span-2",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: submitted ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, scale: 0.93 },
              animate: { opacity: 1, scale: 1 },
              exit: { opacity: 0, scale: 0.93 },
              transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
              "data-ocid": "contact.form.success_state",
              className: "min-h-[520px] flex flex-col items-center justify-center gap-7 text-center p-12 rounded-sm border border-primary/25 bg-primary/5",
              style: {
                boxShadow: "inset 0 0 80px oklch(0.65 0.23 254 / 0.04)"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    initial: { scale: 0, rotate: -30 },
                    animate: { scale: 1, rotate: 0 },
                    transition: {
                      delay: 0.15,
                      type: "spring",
                      stiffness: 260,
                      damping: 18
                    },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      CircleCheckBig,
                      {
                        className: "w-16 h-16 text-primary",
                        style: {
                          filter: "drop-shadow(0 0 20px oklch(0.65 0.23 254 / 0.6))"
                        }
                      }
                    )
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0, y: 12 },
                    animate: { opacity: 1, y: 0 },
                    transition: { delay: 0.3, duration: 0.4 },
                    className: "space-y-3",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-3xl font-display font-bold text-foreground", children: "Request Received!" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground max-w-sm leading-relaxed", children: [
                        "Thank you",
                        form.name ? `, ${form.name}` : "",
                        "! We'll review your",
                        " ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary font-medium", children: form.service || "inquiry" }),
                        " ",
                        "request and get back to you within 24 hours."
                      ] })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    transition: { delay: 0.5 },
                    className: "flex flex-col sm:flex-row gap-3",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Button,
                        {
                          variant: "outline",
                          size: "md",
                          onClick: () => {
                            setSubmitted(false);
                            setForm(initialForm);
                            setErrors({});
                            setTouched({});
                          },
                          "data-ocid": "contact.form.submit_another.button",
                          children: "Submit Another Request"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Button,
                        {
                          variant: "primary",
                          size: "md",
                          onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }),
                          "data-ocid": "contact.form.back_top.button",
                          children: "Back to Top"
                        }
                      )
                    ]
                  }
                )
              ]
            },
            "success"
          ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.form,
            {
              ref: formRef,
              onSubmit: handleSubmit,
              "data-ocid": "contact.form",
              variants: containerVariants,
              initial: "hidden",
              animate: "visible",
              className: "space-y-5 p-8 rounded-sm border border-border bg-card",
              style: {
                boxShadow: "inset 0 0 60px oklch(0.65 0.23 254 / 0.02)"
              },
              noValidate: true,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: fieldVariants, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-foreground text-lg", children: "Request a Quote" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground mt-1", children: [
                    "Fields marked",
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" }),
                    " are required."
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.div,
                  {
                    variants: fieldVariants,
                    className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "label",
                          {
                            htmlFor: "name",
                            className: "text-xs font-display font-semibold text-muted-foreground uppercase tracking-wider",
                            children: [
                              "Full Name ",
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
                            ]
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "input",
                          {
                            id: "name",
                            name: "name",
                            type: "text",
                            value: form.name,
                            onChange: handleChange,
                            onBlur: handleBlur,
                            "data-ocid": "contact.form.name.input",
                            placeholder: "Marcus Chen",
                            className: `w-full h-10 px-3 text-sm bg-background border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 transition-smooth ${errors.name && touched.name ? "border-destructive/60 focus:border-destructive/80 focus:ring-destructive/20" : "border-border focus:border-primary/60 focus:ring-primary/30"}`
                          }
                        ),
                        errors.name && touched.name && /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "p",
                          {
                            "data-ocid": "contact.form.name.field_error",
                            className: "text-xs text-destructive mt-1",
                            children: errors.name
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "label",
                          {
                            htmlFor: "email",
                            className: "text-xs font-display font-semibold text-muted-foreground uppercase tracking-wider",
                            children: [
                              "Email Address",
                              " ",
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
                            ]
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "input",
                          {
                            id: "email",
                            name: "email",
                            type: "email",
                            value: form.email,
                            onChange: handleChange,
                            onBlur: handleBlur,
                            "data-ocid": "contact.form.email.input",
                            placeholder: "you@company.com",
                            className: `w-full h-10 px-3 text-sm bg-background border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 transition-smooth ${errors.email && touched.email ? "border-destructive/60 focus:border-destructive/80 focus:ring-destructive/20" : "border-border focus:border-primary/60 focus:ring-primary/30"}`
                          }
                        ),
                        errors.email && touched.email && /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "p",
                          {
                            "data-ocid": "contact.form.email.field_error",
                            className: "text-xs text-destructive mt-1",
                            children: errors.email
                          }
                        )
                      ] })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.div,
                  {
                    variants: fieldVariants,
                    className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "label",
                          {
                            htmlFor: "phone",
                            className: "text-xs font-display font-semibold text-muted-foreground uppercase tracking-wider",
                            children: "Phone Number"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "input",
                          {
                            id: "phone",
                            name: "phone",
                            type: "tel",
                            value: form.phone,
                            onChange: handleChange,
                            onBlur: handleBlur,
                            "data-ocid": "contact.form.phone.input",
                            placeholder: "+1 (555) 000-0000",
                            className: `w-full h-10 px-3 text-sm bg-background border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 transition-smooth ${errors.phone && touched.phone ? "border-destructive/60 focus:border-destructive/80 focus:ring-destructive/20" : "border-border focus:border-primary/60 focus:ring-primary/30"}`
                          }
                        ),
                        errors.phone && touched.phone && /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "p",
                          {
                            "data-ocid": "contact.form.phone.field_error",
                            className: "text-xs text-destructive mt-1",
                            children: errors.phone
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "label",
                          {
                            htmlFor: "company",
                            className: "text-xs font-display font-semibold text-muted-foreground uppercase tracking-wider",
                            children: "Company"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "input",
                          {
                            id: "company",
                            name: "company",
                            type: "text",
                            value: form.company,
                            onChange: handleChange,
                            "data-ocid": "contact.form.company.input",
                            placeholder: "Acme Corp (optional)",
                            className: "w-full h-10 px-3 text-sm bg-background border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-smooth"
                          }
                        )
                      ] })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.div,
                  {
                    variants: fieldVariants,
                    className: "space-y-1.5",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "label",
                        {
                          htmlFor: "service",
                          className: "text-xs font-display font-semibold text-muted-foreground uppercase tracking-wider",
                          children: [
                            "Service Interest",
                            " ",
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "select",
                        {
                          id: "service",
                          name: "service",
                          value: form.service,
                          onChange: handleChange,
                          onBlur: handleBlur,
                          "data-ocid": "contact.form.service.select",
                          className: `w-full h-10 px-3 text-sm bg-background border rounded-sm text-foreground focus:outline-none focus:ring-1 transition-smooth ${errors.service && touched.service ? "border-destructive/60 focus:border-destructive/80 focus:ring-destructive/20" : "border-border focus:border-primary/60 focus:ring-primary/30"}`,
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", disabled: true, children: "Select a service..." }),
                            serviceOptions.map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: opt, children: opt }, opt))
                          ]
                        }
                      ),
                      errors.service && touched.service && /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          "data-ocid": "contact.form.service.field_error",
                          className: "text-xs text-destructive mt-1",
                          children: errors.service
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.div,
                  {
                    variants: fieldVariants,
                    className: "space-y-1.5",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "label",
                        {
                          htmlFor: "message",
                          className: "text-xs font-display font-semibold text-muted-foreground uppercase tracking-wider",
                          children: [
                            "Project Details",
                            " ",
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "textarea",
                        {
                          id: "message",
                          name: "message",
                          rows: 5,
                          value: form.message,
                          onChange: handleChange,
                          onBlur: handleBlur,
                          "data-ocid": "contact.form.message.textarea",
                          placeholder: "Describe your project scope, location, timeline, and any specific requirements...",
                          className: `w-full px-3 py-2.5 text-sm bg-background border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 transition-smooth resize-none ${errors.message && touched.message ? "border-destructive/60 focus:border-destructive/80 focus:ring-destructive/20" : "border-border focus:border-primary/60 focus:ring-primary/30"}`
                        }
                      ),
                      errors.message && touched.message && /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          "data-ocid": "contact.form.message.field_error",
                          className: "text-xs text-destructive mt-1",
                          children: errors.message
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: fieldVariants, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    type: "submit",
                    variant: "primary",
                    size: "lg",
                    loading,
                    className: "w-full",
                    "data-ocid": "contact.form.submit_button",
                    children: loading ? "Sending..." : /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "w-4 h-4" }),
                      "Send Quote Request"
                    ] })
                  }
                ) })
              ]
            },
            "form"
          ) })
        }
      )
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        "data-ocid": "contact.coverage.section",
        className: "py-20 bg-muted/20 border-t border-border",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.6 },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                SectionHeading,
                {
                  title: "Service Coverage Zones",
                  subtitle: "We operate across the western United States. Click a zone marker or a region card to explore coverage details.",
                  className: "mb-12"
                }
              )
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8 items-start", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, x: -20 },
                whileInView: { opacity: 1, x: 0 },
                viewport: { once: true },
                transition: { duration: 0.65 },
                className: "lg:col-span-2",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "relative rounded-sm border border-border overflow-hidden",
                      style: { aspectRatio: "16/10" },
                      "data-ocid": "contact.coverage.map",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "svg",
                          {
                            viewBox: "0 0 800 500",
                            className: "w-full h-full",
                            role: "img",
                            "aria-label": "Interactive map showing AeroVision coverage zones across western United States",
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("defs", { children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsxs("radialGradient", { id: "bgGrad", cx: "50%", cy: "50%", children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "oklch(0.09 0.01 254)" }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "oklch(0.05 0 0)" })
                                ] }),
                                /* @__PURE__ */ jsxRuntimeExports.jsxs("radialGradient", { id: "activeGlow", cx: "50%", cy: "50%", r: "50%", children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                                    "stop",
                                    {
                                      offset: "0%",
                                      stopColor: "oklch(0.65 0.23 254)",
                                      stopOpacity: "0.35"
                                    }
                                  ),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                                    "stop",
                                    {
                                      offset: "100%",
                                      stopColor: "oklch(0.65 0.23 254)",
                                      stopOpacity: "0"
                                    }
                                  )
                                ] }),
                                /* @__PURE__ */ jsxRuntimeExports.jsxs("filter", { id: "glow", children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("feGaussianBlur", { stdDeviation: "3", result: "coloredBlur" }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsxs("feMerge", { children: [
                                    /* @__PURE__ */ jsxRuntimeExports.jsx("feMergeNode", { in: "coloredBlur" }),
                                    /* @__PURE__ */ jsxRuntimeExports.jsx("feMergeNode", { in: "SourceGraphic" })
                                  ] })
                                ] })
                              ] }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "800", height: "500", fill: "url(#bgGrad)" }),
                              Array.from({ length: 11 }, (_, i) => i * 50).map((y) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "line",
                                {
                                  x1: "0",
                                  y1: y,
                                  x2: "800",
                                  y2: y,
                                  stroke: "oklch(0.20 0.01 254 / 0.3)",
                                  strokeWidth: "0.5"
                                },
                                `h${y}`
                              )),
                              Array.from({ length: 17 }, (_, i) => i * 50).map((x) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "line",
                                {
                                  x1: x,
                                  y1: "0",
                                  x2: x,
                                  y2: "500",
                                  stroke: "oklch(0.20 0.01 254 / 0.3)",
                                  strokeWidth: "0.5"
                                },
                                `v${x}`
                              )),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "path",
                                {
                                  d: US_OUTLINE,
                                  fill: "oklch(0.11 0.005 254)",
                                  stroke: "oklch(0.28 0.03 254)",
                                  strokeWidth: "1.2"
                                }
                              ),
                              STATE_LINES.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "path",
                                {
                                  d,
                                  fill: "none",
                                  stroke: "oklch(0.22 0.02 254)",
                                  strokeWidth: "0.8",
                                  strokeDasharray: "4 3"
                                },
                                d
                              )),
                              coverageZones.map((zone) => {
                                const c = ZONE_COORDS[zone.id];
                                if (!c) return null;
                                const isSelected = activeZone === zone.id;
                                return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                  "g",
                                  {
                                    onClick: () => setActiveZone(isSelected ? null : zone.id),
                                    onKeyDown: (e) => e.key === "Enter" && setActiveZone(isSelected ? null : zone.id),
                                    tabIndex: 0,
                                    "aria-label": `${zone.name} — click to view details`,
                                    className: "cursor-pointer focus:outline-none",
                                    "data-ocid": `contact.coverage.zone.${zone.id}`,
                                    children: [
                                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                                        "circle",
                                        {
                                          cx: c.cx,
                                          cy: c.cy,
                                          r: c.r,
                                          fill: zone.active ? isSelected ? "oklch(0.65 0.23 254 / 0.18)" : "oklch(0.65 0.23 254 / 0.09)" : "oklch(0.35 0 0 / 0.10)",
                                          stroke: isSelected ? "oklch(0.65 0.23 254 / 0.9)" : zone.active ? "oklch(0.65 0.23 254 / 0.45)" : "oklch(0.40 0 0 / 0.4)",
                                          strokeWidth: isSelected ? 1.5 : 1,
                                          strokeDasharray: zone.active ? "none" : "5 3"
                                        }
                                      ),
                                      isSelected && /* @__PURE__ */ jsxRuntimeExports.jsx(
                                        "circle",
                                        {
                                          cx: c.cx,
                                          cy: c.cy,
                                          r: c.r + 12,
                                          fill: "url(#activeGlow)"
                                        }
                                      ),
                                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                                        PulsingMarker,
                                        {
                                          cx: c.cx,
                                          cy: c.cy,
                                          active: zone.active,
                                          isSelected
                                        }
                                      ),
                                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                                        "text",
                                        {
                                          x: c.cx,
                                          y: c.cy + c.r + 14,
                                          textAnchor: "middle",
                                          fontSize: "8.5",
                                          fill: isSelected ? "oklch(0.75 0.23 254)" : "oklch(0.65 0 0)",
                                          fontFamily: "var(--font-display)",
                                          letterSpacing: "0.5",
                                          children: zone.name.toUpperCase()
                                        }
                                      )
                                    ]
                                  },
                                  zone.id
                                );
                              }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: activeZone && (() => {
                                const zone = coverageZones.find(
                                  (z) => z.id === activeZone
                                );
                                return zone ? /* @__PURE__ */ jsxRuntimeExports.jsx(ZoneTooltip, { zone }) : null;
                              })() }),
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { transform: "translate(640, 440)", children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  "rect",
                                  {
                                    x: "0",
                                    y: "0",
                                    width: "145",
                                    height: "48",
                                    rx: "3",
                                    fill: "oklch(0.10 0 0 / 0.9)",
                                    stroke: "oklch(0.22 0 0)",
                                    strokeWidth: "0.8"
                                  }
                                ),
                                /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "16", cy: "16", r: "4", fill: "oklch(0.65 0.23 254)" }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  "text",
                                  {
                                    x: "26",
                                    y: "20",
                                    fontSize: "8",
                                    fill: "oklch(0.75 0 0)",
                                    fontFamily: "var(--font-display)",
                                    children: "Active Zone"
                                  }
                                ),
                                /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  "circle",
                                  {
                                    cx: "16",
                                    cy: "36",
                                    r: "4",
                                    fill: "oklch(0.40 0 0)",
                                    stroke: "oklch(0.40 0 0 / 0.5)",
                                    strokeWidth: "1"
                                  }
                                ),
                                /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  "text",
                                  {
                                    x: "26",
                                    y: "40",
                                    fontSize: "8",
                                    fill: "oklch(0.60 0 0)",
                                    fontFamily: "var(--font-display)",
                                    children: "Expanding"
                                  }
                                )
                              ] })
                            ]
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            className: "absolute inset-0 pointer-events-none",
                            style: {
                              background: "repeating-linear-gradient(0deg, transparent, transparent 2px, oklch(0 0 0 / 0.04) 2px, oklch(0 0 0 / 0.04) 4px)"
                            }
                          }
                        )
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-3 text-center", children: "Click a zone marker or a region card to view coverage details" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, x: 20 },
                whileInView: { opacity: 1, x: 0 },
                viewport: { once: true },
                transition: { duration: 0.65, delay: 0.1 },
                className: "space-y-3",
                children: [
                  coverageZones.map((zone, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    motion.button,
                    {
                      type: "button",
                      onClick: () => setActiveZone(activeZone === zone.id ? null : zone.id),
                      initial: { opacity: 0, x: 16 },
                      whileInView: { opacity: 1, x: 0 },
                      viewport: { once: true },
                      transition: { duration: 0.4, delay: i * 0.08 },
                      "data-ocid": `contact.coverage.zone_card.${zone.id}`,
                      className: `w-full text-left p-4 rounded-sm border transition-smooth focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 ${activeZone === zone.id ? "border-primary/60 bg-primary/10" : "border-border bg-card hover:border-primary/30 hover:bg-primary/5"}`,
                      style: activeZone === zone.id ? {
                        boxShadow: "0 0 16px oklch(0.65 0.23 254 / 0.12), inset 0 0 24px oklch(0.65 0.23 254 / 0.04)"
                      } : {},
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-1.5", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-semibold text-sm text-foreground", children: zone.name }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Badge,
                            {
                              variant: zone.active ? "primary" : "secondary",
                              className: "text-xs shrink-0",
                              children: zone.active ? "Active" : "Expanding"
                            }
                          )
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: zone.region }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: activeZone === zone.id && /* @__PURE__ */ jsxRuntimeExports.jsx(
                          motion.div,
                          {
                            initial: { opacity: 0, height: 0 },
                            animate: { opacity: 1, height: "auto" },
                            exit: { opacity: 0, height: 0 },
                            transition: { duration: 0.28 },
                            className: "overflow-hidden",
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-2.5 pt-2.5 border-t border-border/60 leading-relaxed", children: zone.description })
                          }
                        ) })
                      ]
                    },
                    zone.id
                  )),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      variant: "outline",
                      size: "sm",
                      className: "w-full",
                      "data-ocid": "contact.coverage.request_zone.button",
                      onClick: () => {
                        var _a;
                        return (_a = formRef.current) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
                      },
                      children: "Request Coverage in Your Area"
                    }
                  ) })
                ]
              }
            )
          ] })
        ] })
      }
    )
  ] });
}
export {
  Contact
};
