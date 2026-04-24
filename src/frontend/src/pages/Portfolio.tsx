import { Layout } from "@/components/Layout";
import { Badge } from "@/components/ui/AppBadge";
import { Button } from "@/components/ui/AppButton";
import { projects } from "@/data/mockData";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Filter, Layers } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const allIndustries = [
  "All",
  ...Array.from(new Set(projects.map((p) => p.industry))),
];
const allTypes = [
  "All",
  ...Array.from(new Set(projects.map((p) => p.serviceType))),
];

function FilterPill({
  label,
  active,
  onClick,
  ocid,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
  ocid: string;
}) {
  return (
    <motion.button
      type="button"
      data-ocid={ocid}
      onClick={onClick}
      whileTap={{ scale: 0.95 }}
      className={`px-3.5 py-1.5 text-xs font-display font-medium rounded-sm border transition-smooth whitespace-nowrap ${
        active
          ? "bg-primary/20 text-primary border-primary/50 shadow-[0_0_10px_oklch(var(--accent)/0.25)]"
          : "bg-transparent text-muted-foreground border-border hover:border-primary/30 hover:text-foreground"
      }`}
    >
      {label}
    </motion.button>
  );
}

function ProjectCard({
  project,
  index,
}: { project: (typeof projects)[0]; index: number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -16, scale: 0.97 }}
      transition={{
        duration: 0.4,
        delay: index * 0.06,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      data-ocid={`portfolio.item.${index + 1}`}
      className="group"
    >
      <Link to="/portfolio/$projectId" params={{ projectId: project.id }}>
        <div className="relative overflow-hidden rounded-sm border border-border bg-card transition-smooth group-hover:border-primary/50 group-hover:shadow-[0_0_28px_oklch(var(--accent)/0.2)]">
          {/* Image */}
          <div className="relative h-52 overflow-hidden bg-secondary">
            <img
              src={project.coverImage}
              alt={project.title}
              className="w-full h-full object-cover transition-[transform] duration-500 group-hover:scale-110"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  "/assets/images/placeholder.svg";
              }}
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/20 to-transparent" />
            {/* Hover overlay with CTA */}
            <div className="absolute inset-0 flex items-center justify-center bg-primary/10 opacity-0 group-hover:opacity-100 transition-smooth backdrop-blur-[2px]">
              <motion.div
                initial={{ scale: 0.85, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                className="flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-sm font-display font-semibold text-sm shadow-[0_0_20px_oklch(var(--accent)/0.6)]"
              >
                View Project <ArrowRight className="w-4 h-4" />
              </motion.div>
            </div>
            {/* Badges top-left */}
            <div className="absolute top-3 left-3 flex gap-1.5 flex-wrap">
              <Badge
                variant="primary"
                className="text-[10px] px-2 py-0.5 backdrop-blur-sm"
              >
                {project.industry}
              </Badge>
              <Badge
                variant="secondary"
                className="text-[10px] px-2 py-0.5 backdrop-blur-sm bg-secondary/80"
              >
                {project.serviceType}
              </Badge>
            </div>
            {project.featured && (
              <div className="absolute top-3 right-3">
                <Badge
                  variant="outline"
                  className="text-[10px] px-2 py-0.5 border-primary/50 text-primary bg-card/70 backdrop-blur-sm"
                >
                  ★ Featured
                </Badge>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-5 space-y-3">
            <h3 className="font-display font-semibold text-foreground leading-snug line-clamp-2 group-hover:text-primary transition-smooth">
              {project.title}
            </h3>
            <p className="text-muted-foreground text-sm line-clamp-2 leading-relaxed">
              {project.description}
            </p>
            {/* Results pill */}
            <div className="pt-1 flex items-start gap-2">
              <div className="w-1 h-1 rounded-full bg-primary mt-1.5 shrink-0" />
              <p className="text-xs text-primary/80 font-medium leading-relaxed line-clamp-2">
                {project.results}
              </p>
            </div>
            {/* Footer row */}
            <div className="flex items-center justify-between text-xs text-muted-foreground pt-1 border-t border-border">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50" />
                {project.location}
              </span>
              <span className="font-mono text-muted-foreground/60">
                {project.year}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export function Portfolio() {
  const [industryFilter, setIndustryFilter] = useState("All");
  const [typeFilter, setTypeFilter] = useState("All");

  const filtered = projects.filter((p) => {
    const matchIndustry =
      industryFilter === "All" || p.industry === industryFilter;
    const matchType = typeFilter === "All" || p.serviceType === typeFilter;
    return matchIndustry && matchType;
  });

  const hasActiveFilters = industryFilter !== "All" || typeFilter !== "All";

  return (
    <Layout>
      {/* Hero */}
      <section
        data-ocid="portfolio.hero.section"
        className="relative min-h-[42vh] flex items-end overflow-hidden bg-card border-b border-border"
      >
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="/assets/generated/portfolio-hero.dim_1600x600.jpg"
            alt="Drone portfolio"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 75% 30%, oklch(0.65 0.23 254 / 0.12) 0%, transparent 65%)",
            }}
          />
        </div>

        {/* Decorative scan-line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-4 max-w-3xl"
          >
            <Badge
              variant="primary"
              className="tracking-[0.2em] uppercase text-[10px]"
            >
              Mission Archive
            </Badge>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-foreground leading-none tracking-tight">
              Our{" "}
              <span className="text-primary [text-shadow:0_0_40px_oklch(var(--accent)/0.5)]">
                Projects
              </span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl leading-relaxed">
              Real missions. Measurable outcomes. Browse{" "}
              <span className="text-foreground font-medium">
                {projects.length} completed operations
              </span>{" "}
              across industries and environments.
            </p>
            <div className="flex items-center gap-6 pt-2">
              {[
                { value: `${projects.length}+`, label: "Projects" },
                { value: "6", label: "Industries" },
                { value: "100%", label: "Success Rate" },
              ].map(({ value, label }) => (
                <div key={label} className="flex flex-col">
                  <span className="text-2xl font-display font-bold text-primary">
                    {value}
                  </span>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sticky Filter Bar */}
      <section
        data-ocid="portfolio.filters.section"
        className="sticky top-16 z-30 border-b border-border bg-background/95 backdrop-blur-md shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap gap-4 items-start">
            {/* Industry filters */}
            <div className="flex flex-wrap gap-2 items-center">
              <span className="flex items-center gap-1.5 text-[10px] text-muted-foreground font-display uppercase tracking-[0.15em] shrink-0 mr-1">
                <Filter className="w-3 h-3" />
                Industry
              </span>
              {allIndustries.map((ind) => (
                <FilterPill
                  key={ind}
                  label={ind}
                  active={industryFilter === ind}
                  onClick={() => setIndustryFilter(ind)}
                  ocid={`portfolio.filter.industry.${ind.toLowerCase().replace(/[\s&/]/g, "_")}.tab`}
                />
              ))}
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px h-6 bg-border self-center" />

            {/* Type filters */}
            <div className="flex flex-wrap gap-2 items-center">
              <span className="flex items-center gap-1.5 text-[10px] text-muted-foreground font-display uppercase tracking-[0.15em] shrink-0 mr-1">
                <Layers className="w-3 h-3" />
                Service
              </span>
              {allTypes.map((type) => (
                <FilterPill
                  key={type}
                  label={type}
                  active={typeFilter === type}
                  onClick={() => setTypeFilter(type)}
                  ocid={`portfolio.filter.type.${type.toLowerCase().replace(/[\s&/]/g, "_")}.tab`}
                />
              ))}
            </div>

            {/* Result count + clear */}
            <div className="ml-auto flex items-center gap-3 shrink-0">
              <span className="text-xs text-muted-foreground font-mono">
                <span className="text-foreground font-semibold">
                  {filtered.length}
                </span>
                /{projects.length} results
              </span>
              {hasActiveFilters && (
                <motion.button
                  type="button"
                  data-ocid="portfolio.filters.clear_button"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  onClick={() => {
                    setIndustryFilter("All");
                    setTypeFilter("All");
                  }}
                  className="text-xs text-primary hover:text-primary/80 underline underline-offset-2 transition-smooth"
                >
                  Clear all
                </motion.button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section
        data-ocid="portfolio.grid.section"
        className="py-14 bg-background min-h-[50vh]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="popLayout">
            {filtered.length === 0 ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                data-ocid="portfolio.empty_state"
                className="py-28 text-center space-y-5"
              >
                <div className="text-5xl select-none">🔭</div>
                <h3 className="text-xl font-display font-semibold text-foreground">
                  No matching projects
                </h3>
                <p className="text-muted-foreground text-sm max-w-xs mx-auto">
                  Try adjusting your industry or service type filters to find a
                  project.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  data-ocid="portfolio.empty_state.clear_button"
                  onClick={() => {
                    setIndustryFilter("All");
                    setTypeFilter("All");
                  }}
                >
                  Clear filters
                </Button>
              </motion.div>
            ) : (
              <motion.div
                key="grid"
                layout
                className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
              >
                <AnimatePresence mode="popLayout">
                  {filtered.map((project, i) => (
                    <ProjectCard key={project.id} project={project} index={i} />
                  ))}
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section */}
      <section
        data-ocid="portfolio.cta.section"
        className="py-20 bg-muted/30 border-t border-border"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Ready to launch your mission?
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Tell us about your project and we'll scope a solution that
              delivers results.
            </p>
            <div className="flex flex-wrap gap-3 justify-center pt-2">
              <Link to="/contact">
                <Button
                  variant="primary"
                  size="lg"
                  data-ocid="portfolio.cta.request_quote.primary_button"
                >
                  Request a Quote
                </Button>
              </Link>
              <Link to="/services">
                <Button
                  variant="outline"
                  size="lg"
                  data-ocid="portfolio.cta.view_services.secondary_button"
                >
                  View Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
