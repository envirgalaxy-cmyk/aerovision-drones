import { r as reactExports, j as jsxRuntimeExports, L as Link } from "./index-DLb34WgJ.js";
import { c as createLucideIcon, L as Layout, m as motion, B as Badge, a as Button, A as AnimatePresence } from "./AppBadge-7-PoDhp5.js";
import { S as SectionHeading, C as Card } from "./AppSectionHeading-CAvJ9Bqg.js";
import { i as industries } from "./mockData-C21zYF-f.js";
import { A as ArrowRight } from "./arrow-right-BS1bs5LZ.js";
import { T as TrendingUp, C as Check } from "./trending-up-Ohl1B6Vi.js";
import { C as Clock } from "./clock-BTH42V22.js";
import { S as Shield } from "./shield-DIIpEVzc.js";
import { A as Award } from "./award-DKJ6WUFR.js";
import { Z as Zap } from "./zap-D84rd0y5.js";
import { C as ChevronDown, L as Landmark, S as ShieldCheck, a as Sprout } from "./sprout-KNkOXv0q.js";
import { C as Camera } from "./camera-CVymMJkS.js";
import { B as Building2 } from "./building-2-DZkttnIr.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }],
  ["path", { d: "M18 17V9", key: "2bz60n" }],
  ["path", { d: "M13 17V5", key: "1frdt8" }],
  ["path", { d: "M8 17v-3", key: "17ska0" }]
];
const ChartColumn = createLucideIcon("chart-column", __iconNode);
const iconMap = {
  Building2: ({ className }) => /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className }),
  Sprout: ({ className }) => /* @__PURE__ */ jsxRuntimeExports.jsx(Sprout, { className }),
  Zap: ({ className }) => /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className }),
  ShieldCheck: ({ className }) => /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className }),
  Camera: ({ className }) => /* @__PURE__ */ jsxRuntimeExports.jsx(Camera, { className }),
  Landmark: ({ className }) => /* @__PURE__ */ jsxRuntimeExports.jsx(Landmark, { className })
};
const industryImages = {
  infrastructure: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&q=80",
  agriculture: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200&q=80",
  energy: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=80",
  security: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
  "film-media": "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=1200&q=80",
  "urban-planning": "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1200&q=80"
};
const industryStats = {
  infrastructure: [
    { value: "70%", label: "Cost Reduction" },
    { value: "5×", label: "Faster Inspections" },
    { value: "0", label: "Worker Incidents" }
  ],
  agriculture: [
    { value: "25%", label: "Yield Increase" },
    { value: "24%", label: "Water Saved" },
    { value: "12K+", label: "Acres Mapped" }
  ],
  energy: [
    { value: "3×", label: "Faster Inspections" },
    { value: "98%", label: "Anomaly Detection" },
    { value: "480MW", label: "Assets Managed" }
  ],
  security: [
    { value: "40%", label: "Fewer Incidents" },
    { value: "24/7", label: "Monitoring" },
    { value: "<3min", label: "Response Time" }
  ],
  "film-media": [
    { value: "6K–8K", label: "Resolution" },
    { value: "50M+", label: "Views Delivered" },
    { value: "100+", label: "Productions" }
  ],
  "urban-planning": [
    { value: "1.2TB", label: "Point Cloud Data" },
    { value: "<5cm", label: "Accuracy" },
    { value: "15+", label: "City Projects" }
  ]
};
const globalStats = [
  {
    icon: TrendingUp,
    value: "340%",
    label: "Drone industry growth since 2020"
  },
  { icon: ChartColumn, value: "$58B", label: "Global market by 2026" },
  { icon: Clock, value: "70%", label: "Average inspection time saved" },
  { icon: Shield, value: "99.7%", label: "Mission success rate" },
  { icon: Award, value: "200+", label: "Successful industry deployments" }
];
function IndustryDetailPanel({ industry }) {
  const stats = industryStats[industry.id] ?? [];
  const imageUrl = industryImages[industry.id];
  const Icon = iconMap[industry.icon] ?? Zap;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0, height: 0 },
      animate: { opacity: 1, height: "auto" },
      exit: { opacity: 0, height: 0 },
      transition: { duration: 0.45, ease: [0.4, 0, 0.2, 1] },
      className: "overflow-hidden",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 rounded-lg border border-border bg-card overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-52 sm:h-64 overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: imageUrl,
              alt: `Aerial view for ${industry.title}`,
              className: "w-full h-full object-cover transition-smooth hover:scale-105"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-0 left-0 right-0 p-5 flex items-end gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded bg-primary/20 border border-primary/40 flex items-center justify-center backdrop-blur-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-5 h-5 text-primary" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-xl text-foreground", children: industry.title })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 grid grid-cols-1 md:grid-cols-2 gap-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-display font-bold uppercase tracking-widest text-primary", children: "Use Cases" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2.5", children: industry.useCases.map((uc) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-0.5 shrink-0 w-4 h-4 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-2.5 h-2.5 text-primary" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground leading-relaxed", children: uc })
            ] }, uc)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-display font-bold uppercase tracking-widest text-primary", children: "Key Benefits" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2.5", children: industry.benefits.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-0.5 shrink-0 w-4 h-4 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-2.5 h-2.5 text-primary" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground leading-relaxed", children: b })
            ] }, b)) })
          ] })
        ] }),
        stats.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-border px-6 py-4 grid grid-cols-3 gap-4", children: stats.map((stat) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-bold text-xl text-primary", children: stat.value }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: stat.label })
        ] }, stat.label)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
            "Ready to transform your",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium", children: industry.title.split("&")[0].trim() }),
            " ",
            "operations?"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: "primary",
              size: "sm",
              className: "gap-1.5 shrink-0",
              "data-ocid": `industries.detail.${industry.id}.cta.primary_button`,
              children: [
                "Get Industry Quote",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3.5 h-3.5" })
              ]
            }
          ) })
        ] })
      ] })
    },
    industry.id
  );
}
function IndustryCard({
  industry,
  index,
  isExpanded,
  onToggle
}) {
  const Icon = iconMap[industry.icon] ?? Zap;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0, y: 32 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-60px" },
      transition: {
        delay: index * 0.09,
        duration: 0.55,
        ease: [0.4, 0, 0.2, 1]
      },
      "data-ocid": `industries.item.${index + 1}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Card,
        {
          hover: true,
          className: `p-0 overflow-hidden transition-smooth ${isExpanded ? "border-primary/50 glow-blue" : ""}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: onToggle,
                "data-ocid": `industries.item.${index + 1}.expand.toggle`,
                className: "w-full text-left p-6 flex items-start gap-4 group",
                "aria-expanded": isExpanded,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: `shrink-0 w-12 h-12 rounded-sm flex items-center justify-center transition-smooth
              ${isExpanded ? "bg-primary/20 border border-primary/50 glow-blue" : "bg-primary/10 border border-primary/20 group-hover:bg-primary/15 group-hover:border-primary/35"}`,
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Icon,
                        {
                          className: `w-6 h-6 transition-smooth ${isExpanded ? "text-primary" : "text-primary/80"}`
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-base text-foreground", children: industry.title }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        motion.div,
                        {
                          animate: { rotate: isExpanded ? 180 : 0 },
                          transition: { duration: 0.25 },
                          className: "shrink-0",
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-4 h-4 text-muted-foreground" })
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1 leading-relaxed line-clamp-2", children: industry.description })
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 pb-4 flex flex-wrap gap-1.5", children: [
              industry.useCases.slice(0, 3).map((uc) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                Badge,
                {
                  variant: "primary",
                  className: "text-xs truncate max-w-[160px]",
                  children: uc
                },
                uc
              )),
              industry.useCases.length > 3 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "primary", className: "text-xs", children: [
                "+",
                industry.useCases.length - 3,
                " more"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 pb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { initial: false, children: isExpanded && /* @__PURE__ */ jsxRuntimeExports.jsx(IndustryDetailPanel, { industry }) }) })
          ]
        }
      )
    }
  );
}
function Industries() {
  const [expandedId, setExpandedId] = reactExports.useState(null);
  const toggle = (id) => setExpandedId((prev) => prev === id ? null : id);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        "data-ocid": "industries.hero.section",
        className: "relative py-32 bg-card border-b border-border overflow-hidden",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0 pointer-events-none",
              style: {
                background: "radial-gradient(ellipse 80% 60% at 50% 100%, oklch(0.65 0.23 254 / 0.09) 0%, transparent 70%)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0 pointer-events-none opacity-[0.03]",
              style: {
                backgroundImage: "linear-gradient(oklch(0.65 0.23 254) 1px, transparent 1px), linear-gradient(to right, oklch(0.65 0.23 254) 1px, transparent 1px)",
                backgroundSize: "60px 60px"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, x: -32 },
                animate: { opacity: 1, x: 0 },
                transition: { duration: 0.65, ease: [0.4, 0, 0.2, 1] },
                className: "space-y-6",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Badge,
                    {
                      variant: "primary",
                      className: "tracking-widest uppercase text-xs",
                      "data-ocid": "industries.hero.badge",
                      children: "Industries Served"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[0.95] tracking-tight text-foreground", children: [
                    "Aerial",
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "text-primary",
                        style: {
                          textShadow: "0 0 30px oklch(0.65 0.23 254 / 0.5)"
                        },
                        children: "Intelligence"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                    "For Every",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                    "Sector"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg max-w-lg leading-relaxed", children: "Purpose-built drone solutions for six major verticals. Deep domain expertise, certified operators, and cutting-edge aerial platforms — delivering results where it matters most." }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 flex-wrap", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Button,
                      {
                        variant: "primary",
                        size: "lg",
                        className: "gap-2",
                        "data-ocid": "industries.hero.cta.primary_button",
                        children: [
                          "Request Industry Quote",
                          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
                        ]
                      }
                    ) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/portfolio", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Button,
                      {
                        variant: "outline",
                        size: "lg",
                        className: "gap-2",
                        "data-ocid": "industries.hero.portfolio.secondary_button",
                        children: "View Projects"
                      }
                    ) })
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { opacity: 0, x: 32 },
                animate: { opacity: 1, x: 0 },
                transition: {
                  duration: 0.65,
                  delay: 0.15,
                  ease: [0.4, 0, 0.2, 1]
                },
                className: "grid grid-cols-2 gap-3",
                children: [
                  {
                    label: "Industries",
                    value: "6",
                    sub: "Major verticals covered"
                  },
                  {
                    label: "Deployments",
                    value: "200+",
                    sub: "Successful missions"
                  },
                  {
                    label: "Avg. Savings",
                    value: "70%",
                    sub: "Inspection time saved"
                  },
                  {
                    label: "Success Rate",
                    value: "99.7%",
                    sub: "Mission completion"
                  }
                ].map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0, scale: 0.9 },
                    animate: { opacity: 1, scale: 1 },
                    transition: { delay: 0.3 + i * 0.08, duration: 0.4 },
                    className: "bg-glass rounded-lg border border-border p-4 space-y-1",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-3xl font-display font-bold text-primary", children: item.value }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground", children: item.label }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: item.sub })
                    ]
                  },
                  item.label
                ))
              }
            )
          ] }) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        "data-ocid": "industries.grid.section",
        className: "py-20 bg-background",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 16 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.5 },
              className: "mb-12",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                SectionHeading,
                {
                  title: "Six Industry Verticals",
                  subtitle: "Click any industry to explore detailed use cases, key benefits, performance metrics, and how to get started."
                }
              )
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5", children: industries.map((industry, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            IndustryCard,
            {
              industry,
              index: i,
              isExpanded: expandedId === industry.id,
              onToggle: () => toggle(industry.id)
            },
            industry.id
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.p,
            {
              initial: { opacity: 0 },
              whileInView: { opacity: 1 },
              viewport: { once: true },
              transition: { delay: 0.5 },
              className: "text-center text-xs text-muted-foreground mt-8",
              "data-ocid": "industries.grid.hint",
              children: "↑ Click any industry card to expand full details"
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        "data-ocid": "industries.stats.section",
        className: "py-20 bg-muted/20 border-y border-border relative overflow-hidden",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0 pointer-events-none",
              style: {
                background: "radial-gradient(ellipse 60% 80% at 80% 50%, oklch(0.65 0.23 254 / 0.06) 0%, transparent 70%)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 16 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { duration: 0.5 },
                className: "text-center mb-14",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Badge,
                    {
                      variant: "primary",
                      className: "uppercase tracking-widest text-xs mb-4",
                      children: "Market Intelligence"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground", children: "Drone Adoption Across Industries" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-3 max-w-xl mx-auto", children: "The commercial drone sector is experiencing unprecedented growth. Industry leaders are adopting aerial intelligence at scale." })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4", children: globalStats.map(({ icon: Icon, value, label }, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 24 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { delay: i * 0.1, duration: 0.5 },
                "data-ocid": `industries.stats.item.${i + 1}`,
                className: "bg-card border border-border rounded-lg p-5 flex flex-col items-center text-center gap-3 transition-smooth hover:border-primary/40 hover:glow-blue",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded bg-primary/10 border border-primary/20 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-5 h-5 text-primary" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-display font-bold text-primary", children: value }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1 leading-tight", children: label })
                  ] })
                ]
              },
              label
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid grid-cols-1 md:grid-cols-2 gap-6", children: [
              {
                industry: "Infrastructure & Construction",
                adoption: 78,
                insight: "78% of large infrastructure firms now use drone inspections"
              },
              {
                industry: "Agriculture",
                adoption: 65,
                insight: "Precision agriculture drone market growing 35% YoY"
              },
              {
                industry: "Energy & Utilities",
                adoption: 82,
                insight: "82% of solar operators rely on drone thermal audits"
              },
              {
                industry: "Security & Defense",
                adoption: 71,
                insight: "71% of enterprise security deployments include drone patrol"
              }
            ].map(({ industry, adoption, insight }, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, x: -20 },
                whileInView: { opacity: 1, x: 0 },
                viewport: { once: true },
                transition: { delay: i * 0.1 },
                className: "space-y-2",
                "data-ocid": `industries.adoption.item.${i + 1}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center text-sm", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground", children: industry }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display font-bold text-primary", children: [
                      adoption,
                      "%"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 bg-muted rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    motion.div,
                    {
                      initial: { width: 0 },
                      whileInView: { width: `${adoption}%` },
                      viewport: { once: true },
                      transition: {
                        duration: 1.2,
                        delay: i * 0.1 + 0.2,
                        ease: "easeOut"
                      },
                      className: "h-full bg-primary rounded-full",
                      style: {
                        boxShadow: "0 0 8px oklch(0.65 0.23 254 / 0.6)"
                      }
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: insight })
                ]
              },
              industry
            )) })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        "data-ocid": "industries.cta.section",
        className: "py-24 bg-background relative overflow-hidden",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0 pointer-events-none",
              style: {
                background: "radial-gradient(ellipse 70% 60% at 50% 50%, oklch(0.65 0.23 254 / 0.07) 0%, transparent 70%)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto px-4 text-center relative z-10 space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  SectionHeading,
                  {
                    title: "Your Industry, Our Expertise",
                    subtitle: "Don't see your sector listed? We operate across many verticals — our drone experts can scope a custom solution for your requirements."
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
                transition: { delay: 0.15 },
                className: "flex gap-3 justify-center flex-wrap",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Button,
                    {
                      variant: "primary",
                      size: "lg",
                      className: "gap-2",
                      "data-ocid": "industries.cta.contact.primary_button",
                      children: [
                        "Discuss Your Project",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
                      ]
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/portfolio", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      variant: "outline",
                      size: "lg",
                      className: "gap-2",
                      "data-ocid": "industries.cta.portfolio.secondary_button",
                      children: "Explore Portfolio"
                    }
                  ) })
                ]
              }
            )
          ] })
        ]
      }
    )
  ] });
}
export {
  Industries
};
