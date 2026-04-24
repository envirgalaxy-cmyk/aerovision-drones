import { r as reactExports, j as jsxRuntimeExports, L as Link } from "./index-DLb34WgJ.js";
import { c as createLucideIcon, L as Layout, m as motion, B as Badge, A as AnimatePresence, a as Button } from "./AppBadge-7-PoDhp5.js";
import { p as projects } from "./mockData-C21zYF-f.js";
import { L as Layers } from "./layers-BIrBlHRJ.js";
import { A as ArrowRight } from "./arrow-right-BS1bs5LZ.js";
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
      d: "M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",
      key: "sc7q7i"
    }
  ]
];
const Funnel = createLucideIcon("funnel", __iconNode);
const allIndustries = [
  "All",
  ...Array.from(new Set(projects.map((p) => p.industry)))
];
const allTypes = [
  "All",
  ...Array.from(new Set(projects.map((p) => p.serviceType)))
];
function FilterPill({
  label,
  active,
  onClick,
  ocid
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.button,
    {
      type: "button",
      "data-ocid": ocid,
      onClick,
      whileTap: { scale: 0.95 },
      className: `px-3.5 py-1.5 text-xs font-display font-medium rounded-sm border transition-smooth whitespace-nowrap ${active ? "bg-primary/20 text-primary border-primary/50 shadow-[0_0_10px_oklch(var(--accent)/0.25)]" : "bg-transparent text-muted-foreground border-border hover:border-primary/30 hover:text-foreground"}`,
      children: label
    }
  );
}
function ProjectCard({
  project,
  index
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      layout: true,
      initial: { opacity: 0, y: 24, scale: 0.97 },
      animate: { opacity: 1, y: 0, scale: 1 },
      exit: { opacity: 0, y: -16, scale: 0.97 },
      transition: {
        duration: 0.4,
        delay: index * 0.06,
        ease: [0.25, 0.46, 0.45, 0.94]
      },
      "data-ocid": `portfolio.item.${index + 1}`,
      className: "group",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/portfolio/$projectId", params: { projectId: project.id }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-sm border border-border bg-card transition-smooth group-hover:border-primary/50 group-hover:shadow-[0_0_28px_oklch(var(--accent)/0.2)]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-52 overflow-hidden bg-secondary", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: project.coverImage,
              alt: project.title,
              className: "w-full h-full object-cover transition-[transform] duration-500 group-hover:scale-110",
              onError: (e) => {
                e.target.src = "/assets/images/placeholder.svg";
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-card/90 via-card/20 to-transparent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center bg-primary/10 opacity-0 group-hover:opacity-100 transition-smooth backdrop-blur-[2px]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { scale: 0.85, opacity: 0 },
              whileInView: { scale: 1, opacity: 1 },
              className: "flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-sm font-display font-semibold text-sm shadow-[0_0_20px_oklch(var(--accent)/0.6)]",
              children: [
                "View Project ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
              ]
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-3 left-3 flex gap-1.5 flex-wrap", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Badge,
              {
                variant: "primary",
                className: "text-[10px] px-2 py-0.5 backdrop-blur-sm",
                children: project.industry
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Badge,
              {
                variant: "secondary",
                className: "text-[10px] px-2 py-0.5 backdrop-blur-sm bg-secondary/80",
                children: project.serviceType
              }
            )
          ] }),
          project.featured && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-3 right-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Badge,
            {
              variant: "outline",
              className: "text-[10px] px-2 py-0.5 border-primary/50 text-primary bg-card/70 backdrop-blur-sm",
              children: "★ Featured"
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground leading-snug line-clamp-2 group-hover:text-primary transition-smooth", children: project.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm line-clamp-2 leading-relaxed", children: project.description }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-1 flex items-start gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1 h-1 rounded-full bg-primary mt-1.5 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-primary/80 font-medium leading-relaxed line-clamp-2", children: project.results })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-xs text-muted-foreground pt-1 border-t border-border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-muted-foreground/50" }),
              project.location
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-muted-foreground/60", children: project.year })
          ] })
        ] })
      ] }) })
    }
  );
}
function Portfolio() {
  const [industryFilter, setIndustryFilter] = reactExports.useState("All");
  const [typeFilter, setTypeFilter] = reactExports.useState("All");
  const filtered = projects.filter((p) => {
    const matchIndustry = industryFilter === "All" || p.industry === industryFilter;
    const matchType = typeFilter === "All" || p.serviceType === typeFilter;
    return matchIndustry && matchType;
  });
  const hasActiveFilters = industryFilter !== "All" || typeFilter !== "All";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        "data-ocid": "portfolio.hero.section",
        className: "relative min-h-[42vh] flex items-end overflow-hidden bg-card border-b border-border",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: "/assets/generated/portfolio-hero.dim_1600x600.jpg",
                alt: "Drone portfolio",
                className: "w-full h-full object-cover opacity-40"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "absolute inset-0",
                style: {
                  background: "radial-gradient(ellipse at 75% 30%, oklch(0.65 0.23 254 / 0.12) 0%, transparent 65%)"
                }
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 32 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
              className: "space-y-4 max-w-3xl",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Badge,
                  {
                    variant: "primary",
                    className: "tracking-[0.2em] uppercase text-[10px]",
                    children: "Mission Archive"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-5xl md:text-7xl font-display font-bold text-foreground leading-none tracking-tight", children: [
                  "Our",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary [text-shadow:0_0_40px_oklch(var(--accent)/0.5)]", children: "Projects" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground text-lg max-w-xl leading-relaxed", children: [
                  "Real missions. Measurable outcomes. Browse",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-foreground font-medium", children: [
                    projects.length,
                    " completed operations"
                  ] }),
                  " ",
                  "across industries and environments."
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-6 pt-2", children: [
                  { value: `${projects.length}+`, label: "Projects" },
                  { value: "6", label: "Industries" },
                  { value: "100%", label: "Success Rate" }
                ].map(({ value, label }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl font-display font-bold text-primary", children: value }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground uppercase tracking-wider", children: label })
                ] }, label)) })
              ]
            }
          ) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        "data-ocid": "portfolio.filters.section",
        className: "sticky top-16 z-30 border-b border-border bg-background/95 backdrop-blur-md shadow-sm",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-4 items-start", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2 items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5 text-[10px] text-muted-foreground font-display uppercase tracking-[0.15em] shrink-0 mr-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Funnel, { className: "w-3 h-3" }),
              "Industry"
            ] }),
            allIndustries.map((ind) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              FilterPill,
              {
                label: ind,
                active: industryFilter === ind,
                onClick: () => setIndustryFilter(ind),
                ocid: `portfolio.filter.industry.${ind.toLowerCase().replace(/[\s&/]/g, "_")}.tab`
              },
              ind
            ))
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block w-px h-6 bg-border self-center" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2 items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5 text-[10px] text-muted-foreground font-display uppercase tracking-[0.15em] shrink-0 mr-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { className: "w-3 h-3" }),
              "Service"
            ] }),
            allTypes.map((type) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              FilterPill,
              {
                label: type,
                active: typeFilter === type,
                onClick: () => setTypeFilter(type),
                ocid: `portfolio.filter.type.${type.toLowerCase().replace(/[\s&/]/g, "_")}.tab`
              },
              type
            ))
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ml-auto flex items-center gap-3 shrink-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground font-mono", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-semibold", children: filtered.length }),
              "/",
              projects.length,
              " results"
            ] }),
            hasActiveFilters && /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.button,
              {
                type: "button",
                "data-ocid": "portfolio.filters.clear_button",
                initial: { opacity: 0, scale: 0.9 },
                animate: { opacity: 1, scale: 1 },
                exit: { opacity: 0, scale: 0.9 },
                onClick: () => {
                  setIndustryFilter("All");
                  setTypeFilter("All");
                },
                className: "text-xs text-primary hover:text-primary/80 underline underline-offset-2 transition-smooth",
                children: "Clear all"
              }
            )
          ] })
        ] }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        "data-ocid": "portfolio.grid.section",
        className: "py-14 bg-background min-h-[50vh]",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "popLayout", children: filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 16 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: -16 },
            "data-ocid": "portfolio.empty_state",
            className: "py-28 text-center space-y-5",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl select-none", children: "🔭" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-display font-semibold text-foreground", children: "No matching projects" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm max-w-xs mx-auto", children: "Try adjusting your industry or service type filters to find a project." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  variant: "outline",
                  size: "sm",
                  "data-ocid": "portfolio.empty_state.clear_button",
                  onClick: () => {
                    setIndustryFilter("All");
                    setTypeFilter("All");
                  },
                  children: "Clear filters"
                }
              )
            ]
          },
          "empty"
        ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            layout: true,
            className: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "popLayout", children: filtered.map((project, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProjectCard, { project, index: i }, project.id)) })
          },
          "grid"
        ) }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        "data-ocid": "portfolio.cta.section",
        className: "py-20 bg-muted/30 border-t border-border",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.6 },
            className: "space-y-4",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground", children: "Ready to launch your mission?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: "Tell us about your project and we'll scope a solution that delivers results." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3 justify-center pt-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    variant: "primary",
                    size: "lg",
                    "data-ocid": "portfolio.cta.request_quote.primary_button",
                    children: "Request a Quote"
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/services", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    variant: "outline",
                    size: "lg",
                    "data-ocid": "portfolio.cta.view_services.secondary_button",
                    children: "View Services"
                  }
                ) })
              ] })
            ]
          }
        ) })
      }
    )
  ] });
}
export {
  Portfolio
};
