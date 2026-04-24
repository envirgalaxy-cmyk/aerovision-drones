import { u as useParams, j as jsxRuntimeExports, L as Link, r as reactExports } from "./index-DLb34WgJ.js";
import { c as createLucideIcon, L as Layout, a as Button, m as motion, B as Badge } from "./AppBadge-7-PoDhp5.js";
import { p as projects } from "./mockData-C21zYF-f.js";
import { C as ChevronRight } from "./chevron-right-Dwl5V4KJ.js";
import { T as Target } from "./target-DuQfuHP7.js";
import { Z as Zap } from "./zap-D84rd0y5.js";
import { C as CircleCheckBig } from "./circle-check-big-DIub-gAy.js";
import { B as Building2 } from "./building-2-DZkttnIr.js";
import { M as MapPin } from "./map-pin-B5SRFLqg.js";
import { A as ArrowRight } from "./arrow-right-BS1bs5LZ.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
];
const ArrowLeft = createLucideIcon("arrow-left", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
];
const Calendar = createLucideIcon("calendar", __iconNode$1);
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
      d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",
      key: "vktsd0"
    }
  ],
  ["circle", { cx: "7.5", cy: "7.5", r: ".5", fill: "currentColor", key: "kqv944" }]
];
const Tag = createLucideIcon("tag", __iconNode);
function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeLabel = "Before",
  afterLabel = "After"
}) {
  const [sliderPos, setSliderPos] = reactExports.useState(50);
  const [dragging, setDragging] = reactExports.useState(false);
  const containerRef = reactExports.useRef(null);
  const updateSlider = reactExports.useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const pct = Math.max(
      0,
      Math.min(100, (clientX - rect.left) / rect.width * 100)
    );
    setSliderPos(pct);
  }, []);
  const onMouseDown = (e) => {
    e.preventDefault();
    setDragging(true);
  };
  const onMouseMove = (e) => {
    if (!dragging) return;
    updateSlider(e.clientX);
  };
  const onMouseUp = () => setDragging(false);
  const onTouchMove = (e) => {
    updateSlider(e.touches[0].clientX);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      "data-ocid": "project_detail.before_after.canvas_target",
      ref: containerRef,
      className: `relative select-none overflow-hidden rounded-sm border border-border ${dragging ? "cursor-ew-resize" : "cursor-col-resize"}`,
      style: { aspectRatio: "16/9" },
      onMouseMove,
      onMouseUp,
      onMouseLeave: onMouseUp,
      onTouchMove,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: afterSrc,
            alt: afterLabel,
            className: "absolute inset-0 w-full h-full object-cover",
            draggable: false,
            onError: (e) => {
              e.target.src = "/assets/images/placeholder.svg";
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-3 right-3 z-10 pointer-events-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-1 bg-card/80 backdrop-blur-sm text-xs font-display font-semibold text-foreground rounded-sm border border-border", children: afterLabel }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0 overflow-hidden pointer-events-none",
            style: { width: `${sliderPos}%` },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: beforeSrc,
                alt: beforeLabel,
                className: "absolute inset-0 h-full object-cover",
                style: {
                  width: containerRef.current ? `${containerRef.current.offsetWidth}px` : "100%"
                },
                draggable: false,
                onError: (e) => {
                  e.target.src = "/assets/images/placeholder.svg";
                }
              }
            )
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-3 left-3 z-10 pointer-events-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-1 bg-card/80 backdrop-blur-sm text-xs font-display font-semibold text-foreground rounded-sm border border-border", children: beforeLabel }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute top-0 bottom-0 w-px bg-primary/80 shadow-[0_0_8px_oklch(var(--accent)/0.6)] pointer-events-none",
            style: { left: `${sliderPos}%` }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 flex items-center justify-center w-10 h-10 rounded-full bg-primary border-2 border-primary-foreground shadow-[0_0_16px_oklch(var(--accent)/0.6)] cursor-ew-resize touch-none",
            style: { left: `${sliderPos}%` },
            onMouseDown,
            onTouchStart: (e) => {
              e.preventDefault();
              setDragging(true);
            },
            onTouchEnd: () => setDragging(false),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-3.5 h-3.5 text-primary-foreground -mr-0.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-3.5 h-3.5 text-primary-foreground -ml-2.5 opacity-50" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-3 left-1/2 -translate-x-1/2 pointer-events-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-1 bg-card/70 backdrop-blur-sm text-[10px] font-display text-muted-foreground rounded-sm border border-border", children: "Drag to compare" }) })
      ]
    }
  );
}
function RelatedCard({
  project,
  index
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { delay: index * 0.1, duration: 0.5 },
      "data-ocid": `project_detail.related.item.${index + 1}`,
      className: "group",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/portfolio/$projectId", params: { projectId: project.id }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overflow-hidden rounded-sm border border-border bg-card transition-smooth group-hover:border-primary/50 group-hover:shadow-[0_0_20px_oklch(var(--accent)/0.15)]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-36 overflow-hidden bg-secondary", children: [
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-2 left-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "primary", className: "text-[10px] px-1.5 py-0.5", children: project.industry }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display font-semibold text-sm text-foreground line-clamp-2 group-hover:text-primary transition-smooth", children: project.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
            project.location,
            " · ",
            project.year
          ] })
        ] })
      ] }) })
    }
  );
}
function ProjectDetail() {
  const { projectId } = useParams({ from: "/portfolio/$projectId" });
  const project = projects.find((p) => p.id === projectId);
  const related = projects.filter((p) => p.id !== projectId && p.industry === (project == null ? void 0 : project.industry)).slice(0, 3);
  const fallbackRelated = projects.filter((p) => p.id !== projectId).slice(0, 3);
  const relatedProjects = related.length >= 2 ? related : fallbackRelated;
  if (!project) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-[60vh] flex flex-col items-center justify-center gap-6 text-center px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-5xl", children: "🚁" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-display font-bold text-foreground", children: "Project Not Found" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "This project doesn't exist or has been removed." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/portfolio", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          variant: "primary",
          "data-ocid": "project_detail.not_found.back_button",
          children: "Back to Portfolio"
        }
      ) })
    ] }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sticky top-16 z-20 bg-background/90 backdrop-blur-md border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          to: "/portfolio",
          "data-ocid": "project_detail.back.link",
          className: "inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-smooth",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4" }),
            "Portfolio"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden md:flex items-center gap-1.5 text-xs text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/portfolio",
            className: "hover:text-foreground transition-smooth",
            children: "Portfolio"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-3 h-3" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground truncate max-w-[200px]", children: project.title })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        "data-ocid": "project_detail.hero.section",
        className: "relative h-[55vh] md:h-[65vh] overflow-hidden bg-card",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: project.coverImage,
              alt: project.title,
              className: "w-full h-full object-cover opacity-50",
              onError: (e) => {
                e.target.src = "/assets/images/placeholder.svg";
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0",
              style: {
                background: "radial-gradient(ellipse at 30% 60%, oklch(0.65 0.23 254 / 0.1) 0%, transparent 60%)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-0 right-0 px-4 sm:px-6 lg:px-8 pb-10 max-w-7xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 30 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
              className: "space-y-4",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 flex-wrap", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "primary", children: project.industry }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", children: project.serviceType }),
                  project.featured && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Badge,
                    {
                      variant: "outline",
                      className: "border-primary/40 text-primary",
                      children: "★ Featured"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl sm:text-5xl md:text-6xl font-display font-bold text-foreground leading-tight max-w-4xl", children: project.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed", children: project.description })
              ]
            }
          ) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        "data-ocid": "project_detail.content.section",
        className: "py-16 bg-background",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, x: -24 },
              animate: { opacity: 1, x: 0 },
              transition: { duration: 0.6, delay: 0.15 },
              className: "lg:col-span-2 space-y-10",
              children: [
                project.challenge && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "w-4 h-4 text-primary shrink-0" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-display font-semibold text-muted-foreground uppercase tracking-wider", children: "The Challenge" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground leading-relaxed", children: project.challenge })
                ] }),
                project.approach && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-4 h-4 text-primary shrink-0" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-display font-semibold text-muted-foreground uppercase tracking-wider", children: "Our Approach" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground leading-relaxed", children: project.approach })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 rounded-sm border border-primary/25 bg-primary/5 space-y-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-5 h-5 text-primary shrink-0" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-semibold text-foreground", children: "Outcome" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed pl-7", children: project.results })
                ] }),
                project.hasBeforeAfter && project.beforeImage && project.afterImage && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1 h-5 bg-primary rounded-full" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-semibold text-foreground text-lg", children: "Before & After Comparison" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    BeforeAfterSlider,
                    {
                      beforeSrc: project.beforeImage,
                      afterSrc: project.afterImage,
                      beforeLabel: "Before",
                      afterLabel: "After"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { className: "w-4 h-4 text-primary shrink-0" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-display font-semibold text-muted-foreground uppercase tracking-wider", children: "Technologies & Methods" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: project.tags.map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", children: tag }, tag)) })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, x: 24 },
              animate: { opacity: 1, x: 0 },
              transition: { duration: 0.6, delay: 0.25 },
              className: "space-y-6",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 rounded-sm border border-border bg-card space-y-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground text-sm uppercase tracking-wider text-muted-foreground", children: "Mission Details" }),
                  [
                    { icon: Building2, label: "Client", value: project.client },
                    { icon: MapPin, label: "Location", value: project.location },
                    {
                      icon: Calendar,
                      label: "Year",
                      value: String(project.year)
                    },
                    {
                      icon: Tag,
                      label: "Service Type",
                      value: project.serviceType
                    }
                  ].map(({ icon: Icon, label, value }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 text-sm", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-7 h-7 rounded-sm bg-primary/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-3.5 h-3.5 text-primary" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-xs mb-0.5", children: label }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground font-medium truncate", children: value })
                    ] })
                  ] }, label))
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    variant: "primary",
                    size: "md",
                    className: "w-full gap-2",
                    "data-ocid": "project_detail.request_quote.primary_button",
                    children: [
                      "Request Similar Mission",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
                    ]
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/portfolio", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    variant: "outline",
                    size: "md",
                    className: "w-full",
                    "data-ocid": "project_detail.view_portfolio.secondary_button",
                    children: "View All Projects"
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-sm border border-border bg-muted/30 space-y-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs font-display font-semibold text-muted-foreground uppercase tracking-wider", children: "Key Result" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-foreground leading-relaxed font-medium", children: [
                    '"',
                    project.results,
                    '"'
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px w-full bg-gradient-to-r from-primary/40 to-transparent" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                    "— ",
                    project.client,
                    ", ",
                    project.year
                  ] })
                ] })
              ]
            }
          )
        ] }) })
      }
    ),
    relatedProjects.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        "data-ocid": "project_detail.related.section",
        className: "py-16 bg-muted/20 border-t border-border",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-display font-bold text-foreground", children: "Related Projects" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground text-sm", children: [
                "More missions in ",
                project.industry
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/portfolio",
                "data-ocid": "project_detail.related.view_all.link",
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "ghost", size: "sm", className: "gap-1.5", children: [
                  "View all ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3.5 h-3.5" })
                ] })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5", children: relatedProjects.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(RelatedCard, { project: p, index: i }, p.id)) })
        ] })
      }
    )
  ] });
}
export {
  ProjectDetail
};
