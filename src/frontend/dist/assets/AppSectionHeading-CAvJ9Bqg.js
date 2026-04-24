import { j as jsxRuntimeExports } from "./index-DLb34WgJ.js";
import { d as cn, m as motion } from "./AppBadge-7-PoDhp5.js";
function Card({
  children,
  className,
  glow = false,
  hover = false,
  onClick,
  as: Tag = "div"
}) {
  const classes = cn(
    "bg-glass border border-border rounded-sm overflow-hidden",
    glow && "border-glow",
    hover && "cursor-pointer transition-smooth hover:border-primary/50 hover:shadow-glow",
    className
  );
  if (hover || onClick) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        whileHover: { y: -4, scale: 1.01 },
        transition: { duration: 0.2, ease: "easeOut" },
        onClick,
        className: classes,
        as: Tag,
        children
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { className: classes, children });
}
function SectionHeading({
  title,
  subtitle,
  align = "center",
  accent,
  className
}) {
  const parts = accent ? title.split(accent) : [title];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.6, ease: "easeOut" },
      className: cn(
        "space-y-4",
        align === "center" && "text-center",
        align === "right" && "text-right",
        className
      ),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight text-foreground", children: accent ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          parts[0],
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary glow-blue", children: accent }),
          parts[1]
        ] }) : title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { scaleX: 0 },
            whileInView: { scaleX: 1 },
            viewport: { once: true },
            transition: { duration: 0.5, delay: 0.2, ease: "easeOut" },
            className: cn(
              "h-0.5 w-16 bg-primary rounded-full origin-left",
              align === "center" && "mx-auto origin-center",
              align === "right" && "ml-auto origin-right"
            ),
            style: {
              boxShadow: "0 0 12px oklch(var(--primary) / 0.6)"
            }
          }
        ),
        subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            className: cn(
              "text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl",
              align === "center" && "mx-auto"
            ),
            children: subtitle
          }
        )
      ]
    }
  );
}
export {
  Card as C,
  SectionHeading as S
};
