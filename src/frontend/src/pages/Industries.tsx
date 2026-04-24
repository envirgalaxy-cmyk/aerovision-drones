import { Layout } from "@/components/Layout";
import { Badge } from "@/components/ui/AppBadge";
import { Button } from "@/components/ui/AppButton";
import { Card } from "@/components/ui/AppCard";
import { SectionHeading } from "@/components/ui/AppSectionHeading";
import { industries } from "@/data/mockData";
import type { Industry } from "@/types";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  BarChart3,
  Building2,
  Camera,
  Check,
  ChevronDown,
  Clock,
  Landmark,
  Shield,
  ShieldCheck,
  Sprout,
  TrendingUp,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

/* ─── Data ─────────────────────────────────────────────────────────────────── */

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Building2: ({ className }) => <Building2 className={className} />,
  Sprout: ({ className }) => <Sprout className={className} />,
  Zap: ({ className }) => <Zap className={className} />,
  ShieldCheck: ({ className }) => <ShieldCheck className={className} />,
  Camera: ({ className }) => <Camera className={className} />,
  Landmark: ({ className }) => <Landmark className={className} />,
};

const industryImages: Record<string, string> = {
  infrastructure:
    "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&q=80",
  agriculture:
    "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200&q=80",
  energy:
    "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=80",
  security:
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
  "film-media":
    "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=1200&q=80",
  "urban-planning":
    "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1200&q=80",
};

const industryStats: Record<string, { value: string; label: string }[]> = {
  infrastructure: [
    { value: "70%", label: "Cost Reduction" },
    { value: "5×", label: "Faster Inspections" },
    { value: "0", label: "Worker Incidents" },
  ],
  agriculture: [
    { value: "25%", label: "Yield Increase" },
    { value: "24%", label: "Water Saved" },
    { value: "12K+", label: "Acres Mapped" },
  ],
  energy: [
    { value: "3×", label: "Faster Inspections" },
    { value: "98%", label: "Anomaly Detection" },
    { value: "480MW", label: "Assets Managed" },
  ],
  security: [
    { value: "40%", label: "Fewer Incidents" },
    { value: "24/7", label: "Monitoring" },
    { value: "<3min", label: "Response Time" },
  ],
  "film-media": [
    { value: "6K–8K", label: "Resolution" },
    { value: "50M+", label: "Views Delivered" },
    { value: "100+", label: "Productions" },
  ],
  "urban-planning": [
    { value: "1.2TB", label: "Point Cloud Data" },
    { value: "<5cm", label: "Accuracy" },
    { value: "15+", label: "City Projects" },
  ],
};

const globalStats = [
  {
    icon: TrendingUp,
    value: "340%",
    label: "Drone industry growth since 2020",
  },
  { icon: BarChart3, value: "$58B", label: "Global market by 2026" },
  { icon: Clock, value: "70%", label: "Average inspection time saved" },
  { icon: Shield, value: "99.7%", label: "Mission success rate" },
  { icon: Award, value: "200+", label: "Successful industry deployments" },
];

/* ─── Sub-components ────────────────────────────────────────────────────────── */

function IndustryDetailPanel({ industry }: { industry: Industry }) {
  const stats = industryStats[industry.id] ?? [];
  const imageUrl = industryImages[industry.id];
  const Icon = iconMap[industry.icon] ?? Zap;

  return (
    <motion.div
      key={industry.id}
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
      className="overflow-hidden"
    >
      <div className="mt-4 rounded-lg border border-border bg-card overflow-hidden">
        {/* Aerial image header */}
        <div className="relative h-52 sm:h-64 overflow-hidden">
          <img
            src={imageUrl}
            alt={`Aerial view for ${industry.title}`}
            className="w-full h-full object-cover transition-smooth hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end gap-3">
            <div className="w-10 h-10 rounded bg-primary/20 border border-primary/40 flex items-center justify-center backdrop-blur-sm">
              <Icon className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-display font-bold text-xl text-foreground">
              {industry.title}
            </h3>
          </div>
        </div>

        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Use Cases */}
          <div className="space-y-3">
            <p className="text-xs font-display font-bold uppercase tracking-widest text-primary">
              Use Cases
            </p>
            <ul className="space-y-2.5">
              {industry.useCases.map((uc) => (
                <li key={uc} className="flex items-start gap-2.5">
                  <span className="mt-0.5 shrink-0 w-4 h-4 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center">
                    <Check className="w-2.5 h-2.5 text-primary" />
                  </span>
                  <span className="text-sm text-muted-foreground leading-relaxed">
                    {uc}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Benefits */}
          <div className="space-y-3">
            <p className="text-xs font-display font-bold uppercase tracking-widest text-primary">
              Key Benefits
            </p>
            <ul className="space-y-2.5">
              {industry.benefits.map((b) => (
                <li key={b} className="flex items-start gap-2.5">
                  <span className="mt-0.5 shrink-0 w-4 h-4 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center">
                    <ArrowRight className="w-2.5 h-2.5 text-primary" />
                  </span>
                  <span className="text-sm text-muted-foreground leading-relaxed">
                    {b}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Stats row */}
        {stats.length > 0 && (
          <div className="border-t border-border px-6 py-4 grid grid-cols-3 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display font-bold text-xl text-primary">
                  {stat.value}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="border-t border-border px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-muted-foreground">
            Ready to transform your{" "}
            <span className="text-foreground font-medium">
              {industry.title.split("&")[0].trim()}
            </span>{" "}
            operations?
          </p>
          <Link to="/contact">
            <Button
              variant="primary"
              size="sm"
              className="gap-1.5 shrink-0"
              data-ocid={`industries.detail.${industry.id}.cta.primary_button`}
            >
              Get Industry Quote
              <ArrowRight className="w-3.5 h-3.5" />
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

function IndustryCard({
  industry,
  index,
  isExpanded,
  onToggle,
}: {
  industry: Industry;
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const Icon = iconMap[industry.icon] ?? Zap;

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        delay: index * 0.09,
        duration: 0.55,
        ease: [0.4, 0, 0.2, 1],
      }}
      data-ocid={`industries.item.${index + 1}`}
    >
      <Card
        hover
        className={`p-0 overflow-hidden transition-smooth ${
          isExpanded ? "border-primary/50 glow-blue" : ""
        }`}
      >
        {/* Card header — always visible */}
        <button
          type="button"
          onClick={onToggle}
          data-ocid={`industries.item.${index + 1}.expand.toggle`}
          className="w-full text-left p-6 flex items-start gap-4 group"
          aria-expanded={isExpanded}
        >
          {/* Icon */}
          <div
            className={`shrink-0 w-12 h-12 rounded-sm flex items-center justify-center transition-smooth
              ${
                isExpanded
                  ? "bg-primary/20 border border-primary/50 glow-blue"
                  : "bg-primary/10 border border-primary/20 group-hover:bg-primary/15 group-hover:border-primary/35"
              }`}
          >
            <Icon
              className={`w-6 h-6 transition-smooth ${
                isExpanded ? "text-primary" : "text-primary/80"
              }`}
            />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-2">
              <h3 className="font-display font-bold text-base text-foreground">
                {industry.title}
              </h3>
              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.25 }}
                className="shrink-0"
              >
                <ChevronDown className="w-4 h-4 text-muted-foreground" />
              </motion.div>
            </div>
            <p className="text-sm text-muted-foreground mt-1 leading-relaxed line-clamp-2">
              {industry.description}
            </p>
          </div>
        </button>

        {/* Compact tag row */}
        <div className="px-6 pb-4 flex flex-wrap gap-1.5">
          {industry.useCases.slice(0, 3).map((uc) => (
            <Badge
              key={uc}
              variant="primary"
              className="text-xs truncate max-w-[160px]"
            >
              {uc}
            </Badge>
          ))}
          {industry.useCases.length > 3 && (
            <Badge variant="primary" className="text-xs">
              +{industry.useCases.length - 3} more
            </Badge>
          )}
        </div>

        {/* Expandable detail */}
        <div className="px-4 pb-4">
          <AnimatePresence initial={false}>
            {isExpanded && <IndustryDetailPanel industry={industry} />}
          </AnimatePresence>
        </div>
      </Card>
    </motion.div>
  );
}

/* ─── Main Page ─────────────────────────────────────────────────────────────── */

export function Industries() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggle = (id: string) =>
    setExpandedId((prev) => (prev === id ? null : id));

  return (
    <Layout>
      {/* ── Hero ───────────────────────────────────────────────────────── */}
      <section
        data-ocid="industries.hero.section"
        className="relative py-32 bg-card border-b border-border overflow-hidden"
      >
        {/* Background glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 100%, oklch(0.65 0.23 254 / 0.09) 0%, transparent 70%)",
          }}
        />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(oklch(0.65 0.23 254) 1px, transparent 1px), linear-gradient(to right, oklch(0.65 0.23 254) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, ease: [0.4, 0, 0.2, 1] }}
              className="space-y-6"
            >
              <Badge
                variant="primary"
                className="tracking-widest uppercase text-xs"
                data-ocid="industries.hero.badge"
              >
                Industries Served
              </Badge>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[0.95] tracking-tight text-foreground">
                Aerial{" "}
                <span
                  className="text-primary"
                  style={{
                    textShadow: "0 0 30px oklch(0.65 0.23 254 / 0.5)",
                  }}
                >
                  Intelligence
                </span>
                <br />
                For Every
                <br />
                Sector
              </h1>
              <p className="text-muted-foreground text-lg max-w-lg leading-relaxed">
                Purpose-built drone solutions for six major verticals. Deep
                domain expertise, certified operators, and cutting-edge aerial
                platforms — delivering results where it matters most.
              </p>
              <div className="flex gap-3 flex-wrap">
                <Link to="/contact">
                  <Button
                    variant="primary"
                    size="lg"
                    className="gap-2"
                    data-ocid="industries.hero.cta.primary_button"
                  >
                    Request Industry Quote
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link to="/portfolio">
                  <Button
                    variant="outline"
                    size="lg"
                    className="gap-2"
                    data-ocid="industries.hero.portfolio.secondary_button"
                  >
                    View Projects
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Stat cards grid */}
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.65,
                delay: 0.15,
                ease: [0.4, 0, 0.2, 1],
              }}
              className="grid grid-cols-2 gap-3"
            >
              {[
                {
                  label: "Industries",
                  value: "6",
                  sub: "Major verticals covered",
                },
                {
                  label: "Deployments",
                  value: "200+",
                  sub: "Successful missions",
                },
                {
                  label: "Avg. Savings",
                  value: "70%",
                  sub: "Inspection time saved",
                },
                {
                  label: "Success Rate",
                  value: "99.7%",
                  sub: "Mission completion",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + i * 0.08, duration: 0.4 }}
                  className="bg-glass rounded-lg border border-border p-4 space-y-1"
                >
                  <p className="text-3xl font-display font-bold text-primary">
                    {item.value}
                  </p>
                  <p className="text-sm font-semibold text-foreground">
                    {item.label}
                  </p>
                  <p className="text-xs text-muted-foreground">{item.sub}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Industry Grid ──────────────────────────────────────────────── */}
      <section
        data-ocid="industries.grid.section"
        className="py-20 bg-background"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <SectionHeading
              title="Six Industry Verticals"
              subtitle="Click any industry to explore detailed use cases, key benefits, performance metrics, and how to get started."
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {industries.map((industry, i) => (
              <IndustryCard
                key={industry.id}
                industry={industry}
                index={i}
                isExpanded={expandedId === industry.id}
                onToggle={() => toggle(industry.id)}
              />
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center text-xs text-muted-foreground mt-8"
            data-ocid="industries.grid.hint"
          >
            ↑ Click any industry card to expand full details
          </motion.p>
        </div>
      </section>

      {/* ── Drone Adoption Stats ──────────────────────────────────────── */}
      <section
        data-ocid="industries.stats.section"
        className="py-20 bg-muted/20 border-y border-border relative overflow-hidden"
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 80% at 80% 50%, oklch(0.65 0.23 254 / 0.06) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <Badge
              variant="primary"
              className="uppercase tracking-widest text-xs mb-4"
            >
              Market Intelligence
            </Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Drone Adoption Across Industries
            </h2>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
              The commercial drone sector is experiencing unprecedented growth.
              Industry leaders are adopting aerial intelligence at scale.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {globalStats.map(({ icon: Icon, value, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                data-ocid={`industries.stats.item.${i + 1}`}
                className="bg-card border border-border rounded-lg p-5 flex flex-col items-center text-center gap-3 transition-smooth hover:border-primary/40 hover:glow-blue"
              >
                <div className="w-10 h-10 rounded bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-display font-bold text-primary">
                    {value}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1 leading-tight">
                    {label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Industry-specific stat bars */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                industry: "Infrastructure & Construction",
                adoption: 78,
                insight:
                  "78% of large infrastructure firms now use drone inspections",
              },
              {
                industry: "Agriculture",
                adoption: 65,
                insight: "Precision agriculture drone market growing 35% YoY",
              },
              {
                industry: "Energy & Utilities",
                adoption: 82,
                insight: "82% of solar operators rely on drone thermal audits",
              },
              {
                industry: "Security & Defense",
                adoption: 71,
                insight:
                  "71% of enterprise security deployments include drone patrol",
              },
            ].map(({ industry, adoption, insight }, i) => (
              <motion.div
                key={industry}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="space-y-2"
                data-ocid={`industries.adoption.item.${i + 1}`}
              >
                <div className="flex justify-between items-center text-sm">
                  <span className="font-medium text-foreground">
                    {industry}
                  </span>
                  <span className="font-display font-bold text-primary">
                    {adoption}%
                  </span>
                </div>
                <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${adoption}%` }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1.2,
                      delay: i * 0.1 + 0.2,
                      ease: "easeOut",
                    }}
                    className="h-full bg-primary rounded-full"
                    style={{
                      boxShadow: "0 0 8px oklch(0.65 0.23 254 / 0.6)",
                    }}
                  />
                </div>
                <p className="text-xs text-muted-foreground">{insight}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ─────────────────────────────────────────────────── */}
      <section
        data-ocid="industries.cta.section"
        className="py-24 bg-background relative overflow-hidden"
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 50%, oklch(0.65 0.23 254 / 0.07) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-3xl mx-auto px-4 text-center relative z-10 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <SectionHeading
              title="Your Industry, Our Expertise"
              subtitle="Don't see your sector listed? We operate across many verticals — our drone experts can scope a custom solution for your requirements."
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="flex gap-3 justify-center flex-wrap"
          >
            <Link to="/contact">
              <Button
                variant="primary"
                size="lg"
                className="gap-2"
                data-ocid="industries.cta.contact.primary_button"
              >
                Discuss Your Project
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button
                variant="outline"
                size="lg"
                className="gap-2"
                data-ocid="industries.cta.portfolio.secondary_button"
              >
                Explore Portfolio
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
