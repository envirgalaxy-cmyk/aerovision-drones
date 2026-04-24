import { r as reactExports, j as jsxRuntimeExports, L as Link } from "./index-DLb34WgJ.js";
import { c as createLucideIcon, L as Layout, A as AnimatePresence, m as motion, B as Badge, a as Button, C as Crosshair } from "./AppBadge-7-PoDhp5.js";
import { S as SectionHeading, C as Card } from "./AppSectionHeading-CAvJ9Bqg.js";
import { s as services, i as industries, p as projects } from "./mockData-C21zYF-f.js";
import { A as ArrowRight } from "./arrow-right-BS1bs5LZ.js";
import { C as ChevronDown, L as Landmark, S as ShieldCheck, a as Sprout } from "./sprout-KNkOXv0q.js";
import { Z as Zap } from "./zap-D84rd0y5.js";
import { B as Building2 } from "./building-2-DZkttnIr.js";
import { u as useInView, E as Eye, M as Map } from "./use-in-view-uVJjKcQJ.js";
import { C as Camera } from "./camera-CVymMJkS.js";
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
      d: "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",
      key: "nnexq3"
    }
  ],
  ["path", { d: "M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12", key: "mt58a7" }]
];
const Leaf = createLucideIcon("leaf", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [["polygon", { points: "6 3 20 12 6 21 6 3", key: "1oa8hb" }]];
const Play = createLucideIcon("play", __iconNode);
const heroStats = [
  { value: 500, suffix: "+", label: "Projects Completed" },
  { value: 50, suffix: "+", label: "Industries Served" },
  { value: 99, suffix: "%", label: "Satisfaction Rate" },
  { value: 24, suffix: "/7", label: "Support" }
];
const featuredServices = services.slice(0, 3);
const featuredProjects = projects.filter((p) => p.featured);
const featuredIndustries = industries.slice(0, 3);
const serviceIcons = {
  ScanLine: ({ className }) => /* @__PURE__ */ jsxRuntimeExports.jsx(Crosshair, { className }),
  Map: ({ className }) => /* @__PURE__ */ jsxRuntimeExports.jsx(Map, { className }),
  Shield: ({ className }) => /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className }),
  Film: ({ className }) => /* @__PURE__ */ jsxRuntimeExports.jsx(Camera, { className }),
  Leaf: ({ className }) => /* @__PURE__ */ jsxRuntimeExports.jsx(Leaf, { className }),
  AlertTriangle: ({ className }) => /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className })
};
const industryIcons = {
  Building2: ({ className }) => /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className }),
  Sprout: ({ className }) => /* @__PURE__ */ jsxRuntimeExports.jsx(Sprout, { className }),
  Zap: ({ className }) => /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className }),
  ShieldCheck: ({ className }) => /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className }),
  Camera: ({ className }) => /* @__PURE__ */ jsxRuntimeExports.jsx(Camera, { className }),
  Landmark: ({ className }) => /* @__PURE__ */ jsxRuntimeExports.jsx(Landmark, { className })
};
function AnimatedCounter({
  value,
  suffix,
  duration = 1800
}) {
  const ref = reactExports.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = reactExports.useState(0);
  reactExports.useEffect(() => {
    if (!isInView) return;
    const startTime = performance.now();
    const tick = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      setCount(Math.floor(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [isInView, value, duration]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { ref, children: [
    count,
    suffix
  ] });
}
function Home() {
  const videoRef = reactExports.useRef(null);
  const [videoLoaded, setVideoLoaded] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const v = videoRef.current;
    if (v) {
      v.muted = true;
      v.play().catch(() => {
      });
    }
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        "data-ocid": "home.hero.section",
        className: "relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 z-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: !videoLoaded && /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.img,
              {
                src: "/assets/generated/hero-drone-city.dim_1920x1080.jpg",
                alt: "Aerial cityscape",
                className: "w-full h-full object-cover",
                initial: { opacity: 0 },
                animate: { opacity: 0.45 },
                exit: { opacity: 0 },
                transition: { duration: 0.8 }
              },
              "fallback"
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "video",
              {
                ref: videoRef,
                autoPlay: true,
                muted: true,
                loop: true,
                playsInline: true,
                className: "absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-1000",
                style: { opacity: videoLoaded ? 0.45 : 0 },
                onCanPlay: () => setVideoLoaded(true),
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "source",
                  {
                    src: "https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-city-at-night-14580-large.mp4",
                    type: "video/mp4"
                  }
                )
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-background/70 via-background/30 to-background" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-background/50" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none",
                style: {
                  background: "radial-gradient(circle, oklch(0.65 0.23 254 / 0.1) 0%, transparent 65%)"
                }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "absolute inset-0 opacity-[0.03] pointer-events-none",
                style: {
                  backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, oklch(1 0 0 / 1) 2px, oklch(1 0 0 / 1) 3px)"
                }
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 40 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
                className: "space-y-6",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    motion.div,
                    {
                      initial: { opacity: 0, scale: 0.9 },
                      animate: { opacity: 1, scale: 1 },
                      transition: { duration: 0.5, delay: 0.1 },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Badge,
                        {
                          variant: "primary",
                          className: "text-xs tracking-[0.2em] uppercase px-4 py-1.5",
                          children: "◆ Advanced Aerial Intelligence"
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    motion.h1,
                    {
                      initial: { opacity: 0, y: 30 },
                      animate: { opacity: 1, y: 0 },
                      transition: {
                        duration: 0.8,
                        delay: 0.2,
                        ease: [0.16, 1, 0.3, 1]
                      },
                      className: "text-5xl sm:text-7xl lg:text-8xl font-display font-bold tracking-tight text-foreground leading-[0.95] uppercase",
                      children: [
                        "Elevate Your",
                        " ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "span",
                          {
                            className: "text-primary",
                            style: {
                              textShadow: "0 0 60px oklch(0.65 0.23 254 / 0.6), 0 0 120px oklch(0.65 0.23 254 / 0.25)"
                            },
                            children: "Vision."
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                        "Redefine",
                        " ",
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative inline-block", children: [
                          "Possibility.",
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            motion.span,
                            {
                              className: "absolute -bottom-2 left-0 right-0 h-[3px] bg-primary rounded-full",
                              initial: { scaleX: 0 },
                              animate: { scaleX: 1 },
                              transition: { delay: 1, duration: 0.7, ease: "easeOut" },
                              style: { boxShadow: "0 0 16px oklch(0.65 0.23 254 / 0.8)" }
                            }
                          )
                        ] })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    motion.p,
                    {
                      initial: { opacity: 0, y: 20 },
                      animate: { opacity: 1, y: 0 },
                      transition: { duration: 0.7, delay: 0.4 },
                      className: "text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed",
                      children: "Professional drone services for inspection, mapping, surveillance, and cinematography — delivering intelligence from above for every industry."
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    motion.div,
                    {
                      initial: { opacity: 0, y: 16 },
                      animate: { opacity: 1, y: 0 },
                      transition: { duration: 0.6, delay: 0.55 },
                      className: "flex flex-wrap items-center justify-center gap-4 pt-2",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          Button,
                          {
                            variant: "primary",
                            size: "lg",
                            "data-ocid": "home.hero.request_quote.primary_button",
                            className: "gap-2 min-w-[160px]",
                            children: [
                              "Request Quote",
                              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
                            ]
                          }
                        ) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/portfolio", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          Button,
                          {
                            variant: "ghost",
                            size: "lg",
                            "data-ocid": "home.hero.view_projects.secondary_button",
                            className: "gap-2 min-w-[160px]",
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "w-4 h-4", fill: "currentColor" }),
                              "View Projects"
                            ]
                          }
                        ) })
                      ]
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 24 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.7, delay: 0.7 },
                className: "mt-20 relative",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 rounded-sm border border-border/30 bg-glass pointer-events-none" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      "data-ocid": "home.stats.section",
                      className: "relative grid grid-cols-2 sm:grid-cols-4 gap-0",
                      children: heroStats.map((stat, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        motion.div,
                        {
                          initial: { opacity: 0, y: 12 },
                          animate: { opacity: 1, y: 0 },
                          transition: { delay: 0.8 + i * 0.1, duration: 0.5 },
                          "data-ocid": `home.stats.item.${i + 1}`,
                          className: `text-center py-6 px-4 ${i < heroStats.length - 1 ? "border-r border-border/30" : ""} ${i >= 2 ? "sm:border-t-0 border-t border-border/30" : ""}`,
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "div",
                              {
                                className: "text-4xl font-display font-bold text-primary tabular-nums",
                                style: {
                                  textShadow: "0 0 20px oklch(0.65 0.23 254 / 0.4)"
                                },
                                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  AnimatedCounter,
                                  {
                                    value: stat.value,
                                    suffix: stat.suffix,
                                    duration: 1600
                                  }
                                )
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-1.5 tracking-widest uppercase", children: stat.label })
                          ]
                        },
                        stat.label
                      ))
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                transition: { delay: 1.2, duration: 0.5 },
                className: "mt-10 flex flex-col items-center gap-2 text-muted-foreground/50",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] tracking-[0.3em] uppercase", children: "Scroll" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    motion.div,
                    {
                      animate: { y: [0, 8, 0] },
                      transition: {
                        repeat: Number.POSITIVE_INFINITY,
                        duration: 1.8,
                        ease: "easeInOut"
                      },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-4 h-4" })
                    }
                  )
                ]
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { "data-ocid": "home.services.section", className: "py-28 bg-muted/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionHeading,
        {
          title: "Elite Drone Services",
          accent: "Drone",
          subtitle: "From structural inspections to cinematic aerial photography — our FAA-certified operators deliver precision results for every mission profile.",
          className: "mb-16"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: featuredServices.map((svc, i) => {
        const Icon = serviceIcons[svc.icon] ?? Zap;
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 32 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, margin: "-60px" },
            transition: { delay: i * 0.12, duration: 0.55 },
            "data-ocid": `home.services.item.${i + 1}`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Card,
              {
                hover: true,
                glow: i === 0,
                className: "p-6 h-full flex flex-col gap-4",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-sm bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-5 h-5 text-primary" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground text-lg mb-2 leading-snug", children: svc.title }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed line-clamp-3", children: svc.description })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: svc.industries.slice(0, 2).map((ind) => /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "primary", className: "text-xs", children: ind }, ind)) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border/50 pt-3 flex items-center justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: svc.priceRange }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/services", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "button",
                      {
                        type: "button",
                        className: "text-xs text-primary hover:text-primary/80 flex items-center gap-1 transition-smooth",
                        children: [
                          "Learn More ",
                          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3 h-3" })
                        ]
                      }
                    ) })
                  ] })
                ]
              }
            )
          },
          svc.id
        );
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/services", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          variant: "outline",
          size: "md",
          "data-ocid": "home.services.view_all.link",
          className: "gap-2",
          children: [
            "View All Services",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
          ]
        }
      ) }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        "data-ocid": "home.industries.section",
        className: "py-28 bg-background",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SectionHeading,
            {
              title: "Industries We Serve",
              accent: "Industries",
              subtitle: "Specialized aerial solutions tailored to the demands of diverse sectors — from energy infrastructure to precision agriculture.",
              className: "mb-16"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-6", children: featuredIndustries.map((ind, i) => {
            const Icon = industryIcons[ind.icon] ?? Building2;
            return /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { opacity: 0, x: i % 2 === 0 ? -24 : 24 },
                whileInView: { opacity: 1, x: 0 },
                viewport: { once: true, margin: "-60px" },
                transition: { delay: i * 0.1, duration: 0.55 },
                "data-ocid": `home.industries.item.${i + 1}`,
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { hover: true, className: "p-6 h-full group", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-sm bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-smooth", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-5 h-5 text-primary" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground text-base mb-1.5 leading-snug", children: ind.title }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed line-clamp-3", children: ind.description })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center gap-1.5 text-xs text-primary opacity-0 group-hover:opacity-100 transition-smooth", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3 h-3" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Explore use cases" })
                  ] })
                ] })
              },
              ind.id
            );
          }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/industries", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: "outline",
              size: "md",
              "data-ocid": "home.industries.view_all.link",
              className: "gap-2",
              children: [
                "All Industries",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
              ]
            }
          ) }) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { "data-ocid": "home.portfolio.section", className: "py-28 bg-muted/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionHeading,
        {
          title: "Featured Projects",
          accent: "Projects",
          subtitle: "Real-world aerial missions demonstrating precision capabilities across industries and environments.",
          className: "mb-16"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: featuredProjects.map((project, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: {
            opacity: 0,
            y: i === 1 ? 40 : 0,
            scale: i === 1 ? 0.97 : 1
          },
          whileInView: { opacity: 1, y: 0, scale: 1 },
          viewport: { once: true, margin: "-60px" },
          transition: { delay: i * 0.12, duration: 0.55 },
          "data-ocid": `home.portfolio.item.${i + 1}`,
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/portfolio/$projectId",
              params: { projectId: project.id },
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { hover: true, className: "overflow-hidden group", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-52 overflow-hidden bg-secondary/50", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: project.coverImage,
                      alt: project.title,
                      className: "w-full h-full object-cover transition-smooth group-hover:scale-105",
                      onError: (e) => {
                        e.target.src = "/assets/generated/hero-drone-city.dim_1920x1080.jpg";
                      }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Badge,
                    {
                      variant: "primary",
                      className: "absolute top-3 left-3 text-[10px] tracking-wide",
                      children: project.industry
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Badge,
                    {
                      variant: "secondary",
                      className: "absolute top-3 right-3 text-[10px] tracking-wide",
                      children: project.serviceType
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground leading-snug line-clamp-2 group-hover:text-primary transition-smooth", children: project.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm line-clamp-2", children: project.description }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between pt-2 text-xs text-muted-foreground border-t border-border/40", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: project.location }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: project.year })
                  ] })
                ] })
              ] })
            }
          )
        },
        project.id
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/portfolio", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          variant: "outline",
          size: "md",
          "data-ocid": "home.portfolio.view_all.link",
          className: "gap-2",
          children: [
            "View All Projects",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
          ]
        }
      ) }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        "data-ocid": "home.cta.section",
        className: "relative py-28 overflow-hidden",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-background" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0 opacity-[0.04]",
              style: {
                backgroundImage: "linear-gradient(45deg, oklch(0.65 0.23 254) 25%, transparent 25%, transparent 75%, oklch(0.65 0.23 254) 75%), linear-gradient(45deg, oklch(0.65 0.23 254) 25%, transparent 25%, transparent 75%, oklch(0.65 0.23 254) 75%)",
                backgroundSize: "40px 40px",
                backgroundPosition: "0 0, 20px 20px"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full pointer-events-none",
              style: {
                background: "radial-gradient(ellipse, oklch(0.65 0.23 254 / 0.08) 0%, transparent 70%)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 28 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.7 },
              className: "space-y-8",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Badge,
                    {
                      variant: "primary",
                      className: "text-xs tracking-widest uppercase",
                      children: "Ready to Launch"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-4xl md:text-6xl font-display font-bold text-foreground leading-tight", children: [
                    "Ready to Elevate",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "text-primary",
                        style: {
                          textShadow: "0 0 40px oklch(0.65 0.23 254 / 0.5)"
                        },
                        children: "Your Operations?"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed", children: "Talk to our team about your project requirements. Get a custom quote within 24 hours from our certified specialists." })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-center gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Button,
                    {
                      variant: "primary",
                      size: "lg",
                      "data-ocid": "home.cta.request_quote.primary_button",
                      className: "gap-2 min-w-[180px]",
                      children: [
                        "Request a Quote",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
                      ]
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/portfolio", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      variant: "ghost",
                      size: "lg",
                      "data-ocid": "home.cta.view_projects.secondary_button",
                      className: "gap-2 min-w-[180px]",
                      children: "View Our Work"
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      variant: "outline",
                      size: "lg",
                      "data-ocid": "home.cta.contact_us.button",
                      className: "gap-2 min-w-[180px]",
                      children: "Contact Us"
                    }
                  ) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap items-center justify-center gap-6 pt-4 border-t border-border/30", children: [
                  "FAA Part 107 Certified",
                  "Fully Insured",
                  "24/7 Response",
                  "NDA Available"
                ].map((trust) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "span",
                  {
                    className: "text-xs text-muted-foreground flex items-center gap-1.5",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1 h-1 rounded-full bg-primary inline-block" }),
                      trust
                    ]
                  },
                  trust
                )) })
              ]
            }
          ) })
        ]
      }
    )
  ] });
}
export {
  Home
};
