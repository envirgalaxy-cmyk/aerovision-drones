import { r as reactExports, j as jsxRuntimeExports, L as Link } from "./index-DLb34WgJ.js";
import { c as createLucideIcon, L as Layout, m as motion, B as Badge, a as Button } from "./AppBadge-7-PoDhp5.js";
import { S as SectionHeading, C as Card } from "./AppSectionHeading-CAvJ9Bqg.js";
import { s as services } from "./mockData-C21zYF-f.js";
import { A as ArrowRight } from "./arrow-right-BS1bs5LZ.js";
import { E as Eye, u as useInView, M as Map } from "./use-in-view-uVJjKcQJ.js";
import { C as ChevronRight } from "./chevron-right-Dwl5V4KJ.js";
import { Z as Zap } from "./zap-D84rd0y5.js";
import { C as Check, T as TrendingUp } from "./trending-up-Ohl1B6Vi.js";
import { C as Camera } from "./camera-CVymMJkS.js";
import { L as Layers } from "./layers-BIrBlHRJ.js";
import { S as Shield } from "./shield-DIIpEVzc.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M7 3v18", key: "bbkbws" }],
  ["path", { d: "M3 7.5h4", key: "zfgn84" }],
  ["path", { d: "M3 12h18", key: "1i2n21" }],
  ["path", { d: "M3 16.5h4", key: "1230mu" }],
  ["path", { d: "M17 3v18", key: "in4fa5" }],
  ["path", { d: "M17 7.5h4", key: "myr1c1" }],
  ["path", { d: "M17 16.5h4", key: "go4c1d" }]
];
const Film = createLucideIcon("film", __iconNode);
const iconMap = {
  Eye: ({ className }) => /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className }),
  Map: ({ className }) => /* @__PURE__ */ jsxRuntimeExports.jsx(Map, { className }),
  Shield: ({ className }) => /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className }),
  Film: ({ className }) => /* @__PURE__ */ jsxRuntimeExports.jsx(Film, { className }),
  Layers: ({ className }) => /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { className }),
  Camera: ({ className }) => /* @__PURE__ */ jsxRuntimeExports.jsx(Camera, { className })
};
function ServicesHero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      "data-ocid": "services.hero.section",
      className: "relative min-h-[52vh] flex items-center overflow-hidden bg-card border-b border-border",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0 pointer-events-none",
            style: {
              background: "radial-gradient(ellipse 80% 60% at 70% 40%, oklch(0.65 0.23 254 / 0.08) 0%, transparent 65%)"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0 pointer-events-none opacity-[0.04]",
            style: {
              backgroundImage: "linear-gradient(oklch(0.98 0 0) 1px, transparent 1px), linear-gradient(90deg, oklch(0.98 0 0) 1px, transparent 1px)",
              backgroundSize: "80px 80px"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10 w-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 32 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
              className: "max-w-3xl",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    initial: { opacity: 0, x: -16 },
                    animate: { opacity: 1, x: 0 },
                    transition: { delay: 0.1, duration: 0.5 },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Badge,
                      {
                        variant: "primary",
                        className: "tracking-widest uppercase text-xs mb-5",
                        children: "Our Services"
                      }
                    )
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-5xl md:text-7xl font-display font-bold text-foreground leading-none tracking-tight mb-6", children: [
                  "Our Drone",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "text-primary",
                      style: { textShadow: "0 0 40px oklch(0.65 0.23 254 / 0.4)" },
                      children: "Services"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-xl leading-relaxed mb-10 max-w-2xl", children: "Six specialized aerial service lines engineered for the demands of modern industry. Every mission planned, certified, and executed to the highest standard." }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#service-detail-aerial-inspection", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Button,
                    {
                      variant: "primary",
                      size: "lg",
                      "data-ocid": "services.hero.explore.primary_button",
                      className: "gap-2",
                      children: [
                        "Explore Services",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
                      ]
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      variant: "outline",
                      size: "lg",
                      "data-ocid": "services.hero.quote.secondary_button",
                      className: "gap-2",
                      children: "Get a Quote"
                    }
                  ) })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 24 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.45, duration: 0.6 },
              className: "mt-16 flex flex-wrap gap-8",
              children: [
                { value: "6", label: "Service Lines" },
                { value: "500+", label: "Missions Flown" },
                { value: "FAA", label: "Part 107 Certified" },
                { value: "24/7", label: "Rapid Deployment" }
              ].map((stat) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "text-2xl font-display font-bold text-primary",
                    style: { textShadow: "0 0 16px oklch(0.65 0.23 254 / 0.5)" },
                    children: stat.value
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground font-body", children: stat.label })
              ] }, stat.label))
            }
          )
        ] })
      ]
    }
  );
}
function ServicesGrid({
  active,
  onSelect
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      "data-ocid": "services.overview.section",
      className: "py-20 bg-background",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            className: "mb-12",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              SectionHeading,
              {
                title: "What We Deliver",
                subtitle: "Hover a card to preview, or click Learn More to jump straight to the deep-dive section."
              }
            )
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6", children: services.map((svc, i) => {
          const Icon = iconMap[svc.icon] ?? Eye;
          const isActive = active === svc.id;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 32 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: {
                delay: i * 0.07,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1]
              },
              "data-ocid": `services.card.item.${i + 1}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Card,
                {
                  hover: true,
                  className: `p-6 h-full flex flex-col gap-4 cursor-pointer transition-smooth group ${isActive ? "border-primary/50 glow-blue" : ""}`,
                  onClick: () => onSelect(svc.id),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: `w-12 h-12 shrink-0 rounded-sm flex items-center justify-center transition-smooth ${isActive ? "bg-primary/20 border border-primary/40" : "bg-primary/10 border border-primary/20 group-hover:bg-primary/20 group-hover:border-primary/40"}`,
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-5 h-5 text-primary" })
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-lg text-foreground leading-tight", children: svc.title }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-primary font-body", children: svc.priceRange })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed flex-1", children: svc.description }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: svc.industries.slice(0, 3).map((ind) => /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "text-xs", children: ind }, ind)) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "a",
                      {
                        href: `#service-detail-${svc.id}`,
                        onClick: (e) => {
                          e.stopPropagation();
                          onSelect(svc.id);
                        },
                        className: "mt-auto",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          Button,
                          {
                            variant: "ghost",
                            size: "sm",
                            "data-ocid": `services.card.item.${i + 1}.learn_more.button`,
                            className: "gap-1.5 p-0 h-auto text-primary hover:text-primary/80 font-display font-semibold text-sm",
                            children: [
                              "Learn More",
                              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4" })
                            ]
                          }
                        )
                      }
                    )
                  ]
                }
              )
            },
            svc.id
          );
        }) })
      ] })
    }
  );
}
function StickySideNav({ active }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "data-ocid": "services.sidenav.panel",
      className: "hidden xl:block sticky top-24 h-fit w-56 shrink-0",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-sm p-4 space-y-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-display font-semibold text-muted-foreground uppercase tracking-widest mb-3 px-2", children: "Jump to Service" }),
        services.map((svc) => {
          const Icon = iconMap[svc.icon] ?? Eye;
          const isActive = active === svc.id;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: `#service-detail-${svc.id}`,
              "data-ocid": `services.sidenav.${svc.slug}.link`,
              className: `flex items-center gap-3 px-3 py-2 rounded-sm text-sm font-body transition-smooth group ${isActive ? "bg-primary/10 text-primary border border-primary/20" : "text-muted-foreground hover:text-foreground hover:bg-muted/40"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Icon,
                  {
                    className: `w-4 h-4 shrink-0 transition-smooth ${isActive ? "text-primary" : "text-muted-foreground group-hover:text-primary"}`
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate leading-tight", children: svc.title })
              ]
            },
            svc.id
          );
        })
      ] })
    }
  );
}
function ServiceDetail({ svc, index }) {
  const ref = reactExports.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px 0px" });
  const isEven = index % 2 === 0;
  const Icon = iconMap[svc.icon] ?? Eye;
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };
  const slideVariants = {
    hidden: { opacity: 0, x: isEven ? -40 : 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      id: `service-detail-${svc.id}`,
      "data-ocid": `services.detail.${svc.slug}.section`,
      ref,
      className: `py-24 ${isEven ? "bg-background" : "bg-card"} border-t border-border`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: `flex flex-col xl:flex-row gap-12 lg:gap-16 items-start ${isEven ? "" : "xl:flex-row-reverse"}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                variants: slideVariants,
                initial: "hidden",
                animate: isInView ? "visible" : "hidden",
                className: "w-full xl:w-[48%] shrink-0",
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-sm overflow-hidden aspect-[16/10] border border-border", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: svc.imageUrl,
                      alt: svc.title,
                      className: "w-full h-full object-cover transition-smooth group-hover:scale-105",
                      loading: "lazy"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "absolute inset-0 pointer-events-none",
                      style: {
                        background: "linear-gradient(160deg, oklch(0.65 0.23 254 / 0.12) 0%, transparent 50%)"
                      }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-4 left-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-card/90 backdrop-blur-sm border border-primary/30 text-primary font-display font-semibold text-sm px-4 py-2 rounded-sm", children: svc.priceRange }) })
                ] })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                variants: containerVariants,
                initial: "hidden",
                animate: isInView ? "visible" : "hidden",
                className: "flex-1 min-w-0 space-y-7",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    motion.div,
                    {
                      variants: itemVariants,
                      className: "flex items-center gap-4",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 shrink-0 rounded-sm bg-primary/10 border border-primary/30 flex items-center justify-center glow-blue", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-5 h-5 text-primary" }) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Badge,
                            {
                              variant: "primary",
                              className: "text-xs tracking-widest uppercase mb-1",
                              children: "Service"
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground leading-tight", children: svc.title })
                        ] })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    motion.p,
                    {
                      variants: itemVariants,
                      className: "text-muted-foreground leading-relaxed text-base",
                      children: svc.longDescription
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    motion.div,
                    {
                      variants: containerVariants,
                      className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: itemVariants, className: "space-y-3", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-4 h-4 text-primary" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-display font-semibold text-foreground uppercase tracking-wider", children: "Capabilities" })
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: svc.features.map((feat, fi) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            motion.li,
                            {
                              initial: { opacity: 0, x: -12 },
                              animate: isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -12 },
                              transition: { delay: 0.3 + fi * 0.06, duration: 0.4 },
                              className: "flex items-start gap-2.5 text-sm text-muted-foreground",
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-3.5 h-3.5 text-primary mt-0.5 shrink-0" }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: feat })
                              ]
                            },
                            feat
                          )) })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: itemVariants, className: "space-y-3", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-4 h-4 text-primary" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-display font-semibold text-foreground uppercase tracking-wider", children: "Key Benefits" })
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: svc.benefits.map((ben, bi) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            motion.li,
                            {
                              initial: { opacity: 0, x: 12 },
                              animate: isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 12 },
                              transition: { delay: 0.3 + bi * 0.06, duration: 0.4 },
                              className: "flex items-start gap-2.5 text-sm text-muted-foreground",
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3.5 h-3.5 text-primary mt-0.5 shrink-0" }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: ben })
                              ]
                            },
                            ben
                          )) })
                        ] })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    motion.div,
                    {
                      variants: itemVariants,
                      className: "flex flex-wrap gap-2 pt-1",
                      children: svc.industries.map((ind) => /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "text-xs", children: ind }, ind))
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    motion.div,
                    {
                      variants: itemVariants,
                      className: "flex flex-wrap gap-3 pt-2",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          Button,
                          {
                            variant: "primary",
                            "data-ocid": `services.detail.${svc.slug}.quote.primary_button`,
                            className: "gap-2",
                            children: [
                              "Get a Quote",
                              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
                            ]
                          }
                        ) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Button,
                          {
                            variant: "outline",
                            "data-ocid": `services.detail.${svc.slug}.contact.secondary_button`,
                            className: "gap-2",
                            children: "Contact Us"
                          }
                        ) })
                      ]
                    }
                  )
                ]
              }
            )
          ]
        }
      ) })
    }
  );
}
function ServicesCTA() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      "data-ocid": "services.cta.section",
      className: "py-24 bg-card border-t border-border relative overflow-hidden",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0 pointer-events-none",
            style: {
              background: "radial-gradient(ellipse 60% 80% at 50% 50%, oklch(0.65 0.23 254 / 0.07) 0%, transparent 70%)"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto px-4 text-center relative z-10 space-y-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 24 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.6 },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                SectionHeading,
                {
                  title: "Need a Custom Mission?",
                  subtitle: "Our team will design an operation profile tailored to your exact requirements — talk to us today."
                }
              )
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 16 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { delay: 0.2, duration: 0.5 },
              className: "flex flex-wrap gap-4 justify-center",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    variant: "primary",
                    size: "lg",
                    "data-ocid": "services.cta.contact.primary_button",
                    className: "gap-2",
                    children: [
                      "Contact Our Team",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
                    ]
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/portfolio", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    variant: "outline",
                    size: "lg",
                    "data-ocid": "services.cta.portfolio.secondary_button",
                    className: "gap-2",
                    children: "View Our Projects"
                  }
                ) })
              ]
            }
          )
        ] })
      ]
    }
  );
}
function Services() {
  var _a;
  const [activeService, setActiveService] = reactExports.useState(((_a = services[0]) == null ? void 0 : _a.id) ?? "");
  reactExports.useEffect(() => {
    const sectionIds = services.map((s) => `service-detail-${s.id}`);
    const observers = [];
    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (!el) continue;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            const svcId = id.replace("service-detail-", "");
            setActiveService(svcId);
          }
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    }
    return () => {
      for (const o of observers) o.disconnect();
    };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ServicesHero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ServicesGrid, { active: activeService, onSelect: setActiveService }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "xl:flex xl:gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StickySideNav, { active: activeService }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 min-w-0", children: services.map((svc, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(ServiceDetail, { svc, index: i }, svc.id)) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ServicesCTA, {})
  ] });
}
export {
  Services
};
