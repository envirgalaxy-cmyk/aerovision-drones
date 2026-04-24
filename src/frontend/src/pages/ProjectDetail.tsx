import { Layout } from "@/components/Layout";
import { Badge } from "@/components/ui/AppBadge";
import { Button } from "@/components/ui/AppButton";
import { projects } from "@/data/mockData";
import { Link, useParams } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  Calendar,
  CheckCircle,
  ChevronRight,
  MapPin,
  Tag,
  Target,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import { useCallback, useRef, useState } from "react";

// ── Before/After Slider ──────────────────────────────────────────────────────

function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeLabel = "Before",
  afterLabel = "After",
}: {
  beforeSrc: string;
  afterSrc: string;
  beforeLabel?: string;
  afterLabel?: string;
}) {
  const [sliderPos, setSliderPos] = useState(50);
  const [dragging, setDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updateSlider = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const pct = Math.max(
      0,
      Math.min(100, ((clientX - rect.left) / rect.width) * 100),
    );
    setSliderPos(pct);
  }, []);

  const onMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setDragging(true);
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!dragging) return;
    updateSlider(e.clientX);
  };
  const onMouseUp = () => setDragging(false);

  const onTouchMove = (e: React.TouchEvent) => {
    updateSlider(e.touches[0].clientX);
  };

  return (
    <div
      data-ocid="project_detail.before_after.canvas_target"
      ref={containerRef}
      className={`relative select-none overflow-hidden rounded-sm border border-border ${dragging ? "cursor-ew-resize" : "cursor-col-resize"}`}
      style={{ aspectRatio: "16/9" }}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
      onTouchMove={onTouchMove}
    >
      {/* After image (base layer) */}
      <img
        src={afterSrc}
        alt={afterLabel}
        className="absolute inset-0 w-full h-full object-cover"
        draggable={false}
        onError={(e) => {
          (e.target as HTMLImageElement).src = "/assets/images/placeholder.svg";
        }}
      />
      {/* After label */}
      <div className="absolute top-3 right-3 z-10 pointer-events-none">
        <span className="px-2 py-1 bg-card/80 backdrop-blur-sm text-xs font-display font-semibold text-foreground rounded-sm border border-border">
          {afterLabel}
        </span>
      </div>

      {/* Before image (clipped) */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ width: `${sliderPos}%` }}
      >
        <img
          src={beforeSrc}
          alt={beforeLabel}
          className="absolute inset-0 h-full object-cover"
          style={{
            width: containerRef.current
              ? `${containerRef.current.offsetWidth}px`
              : "100%",
          }}
          draggable={false}
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              "/assets/images/placeholder.svg";
          }}
        />
      </div>
      {/* Before label */}
      <div className="absolute top-3 left-3 z-10 pointer-events-none">
        <span className="px-2 py-1 bg-card/80 backdrop-blur-sm text-xs font-display font-semibold text-foreground rounded-sm border border-border">
          {beforeLabel}
        </span>
      </div>

      {/* Divider line */}
      <div
        className="absolute top-0 bottom-0 w-px bg-primary/80 shadow-[0_0_8px_oklch(var(--accent)/0.6)] pointer-events-none"
        style={{ left: `${sliderPos}%` }}
      />

      {/* Drag handle */}
      <div
        className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 flex items-center justify-center w-10 h-10 rounded-full bg-primary border-2 border-primary-foreground shadow-[0_0_16px_oklch(var(--accent)/0.6)] cursor-ew-resize touch-none"
        style={{ left: `${sliderPos}%` }}
        onMouseDown={onMouseDown}
        onTouchStart={(e) => {
          e.preventDefault();
          setDragging(true);
        }}
        onTouchEnd={() => setDragging(false)}
      >
        <ChevronRight className="w-3.5 h-3.5 text-primary-foreground -mr-0.5" />
        <ChevronRight className="w-3.5 h-3.5 text-primary-foreground -ml-2.5 opacity-50" />
      </div>

      {/* Hint */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 pointer-events-none">
        <span className="px-2 py-1 bg-card/70 backdrop-blur-sm text-[10px] font-display text-muted-foreground rounded-sm border border-border">
          Drag to compare
        </span>
      </div>
    </div>
  );
}

// ── Related Project Card ─────────────────────────────────────────────────────

function RelatedCard({
  project,
  index,
}: { project: (typeof projects)[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      data-ocid={`project_detail.related.item.${index + 1}`}
      className="group"
    >
      <Link to="/portfolio/$projectId" params={{ projectId: project.id }}>
        <div className="overflow-hidden rounded-sm border border-border bg-card transition-smooth group-hover:border-primary/50 group-hover:shadow-[0_0_20px_oklch(var(--accent)/0.15)]">
          <div className="relative h-36 overflow-hidden bg-secondary">
            <img
              src={project.coverImage}
              alt={project.title}
              className="w-full h-full object-cover transition-[transform] duration-500 group-hover:scale-110"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  "/assets/images/placeholder.svg";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
            <div className="absolute top-2 left-2">
              <Badge variant="primary" className="text-[10px] px-1.5 py-0.5">
                {project.industry}
              </Badge>
            </div>
          </div>
          <div className="p-4 space-y-1.5">
            <h4 className="font-display font-semibold text-sm text-foreground line-clamp-2 group-hover:text-primary transition-smooth">
              {project.title}
            </h4>
            <p className="text-xs text-muted-foreground">
              {project.location} · {project.year}
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────

export function ProjectDetail() {
  const { projectId } = useParams({ from: "/portfolio/$projectId" });
  const project = projects.find((p) => p.id === projectId);
  const related = projects
    .filter((p) => p.id !== projectId && p.industry === project?.industry)
    .slice(0, 3);
  const fallbackRelated = projects
    .filter((p) => p.id !== projectId)
    .slice(0, 3);
  const relatedProjects = related.length >= 2 ? related : fallbackRelated;

  if (!project) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex flex-col items-center justify-center gap-6 text-center px-4">
          <p className="text-5xl">🚁</p>
          <h2 className="text-2xl font-display font-bold text-foreground">
            Project Not Found
          </h2>
          <p className="text-muted-foreground">
            This project doesn't exist or has been removed.
          </p>
          <Link to="/portfolio">
            <Button
              variant="primary"
              data-ocid="project_detail.not_found.back_button"
            >
              Back to Portfolio
            </Button>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Breadcrumb nav */}
      <div className="sticky top-16 z-20 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <Link
            to="/portfolio"
            data-ocid="project_detail.back.link"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-smooth"
          >
            <ArrowLeft className="w-4 h-4" />
            Portfolio
          </Link>
          <nav className="hidden md:flex items-center gap-1.5 text-xs text-muted-foreground">
            <Link
              to="/portfolio"
              className="hover:text-foreground transition-smooth"
            >
              Portfolio
            </Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-foreground truncate max-w-[200px]">
              {project.title}
            </span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section
        data-ocid="project_detail.hero.section"
        className="relative h-[55vh] md:h-[65vh] overflow-hidden bg-card"
      >
        <img
          src={project.coverImage}
          alt={project.title}
          className="w-full h-full object-cover opacity-50"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              "/assets/images/placeholder.svg";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 30% 60%, oklch(0.65 0.23 254 / 0.1) 0%, transparent 60%)",
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-6 lg:px-8 pb-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-4"
          >
            <div className="flex gap-2 flex-wrap">
              <Badge variant="primary">{project.industry}</Badge>
              <Badge variant="secondary">{project.serviceType}</Badge>
              {project.featured && (
                <Badge
                  variant="outline"
                  className="border-primary/40 text-primary"
                >
                  ★ Featured
                </Badge>
              )}
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold text-foreground leading-tight max-w-4xl">
              {project.title}
            </h1>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed">
              {project.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section
        data-ocid="project_detail.content.section"
        className="py-16 bg-background"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left: narrative */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-2 space-y-10"
            >
              {/* Challenge */}
              {project.challenge && (
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Target className="w-4 h-4 text-primary shrink-0" />
                    <h2 className="text-sm font-display font-semibold text-muted-foreground uppercase tracking-wider">
                      The Challenge
                    </h2>
                  </div>
                  <p className="text-foreground leading-relaxed">
                    {project.challenge}
                  </p>
                </div>
              )}

              {/* Approach */}
              {project.approach && (
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-primary shrink-0" />
                    <h2 className="text-sm font-display font-semibold text-muted-foreground uppercase tracking-wider">
                      Our Approach
                    </h2>
                  </div>
                  <p className="text-foreground leading-relaxed">
                    {project.approach}
                  </p>
                </div>
              )}

              {/* Outcome */}
              <div className="p-5 rounded-sm border border-primary/25 bg-primary/5 space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                  <h2 className="font-display font-semibold text-foreground">
                    Outcome
                  </h2>
                </div>
                <p className="text-muted-foreground leading-relaxed pl-7">
                  {project.results}
                </p>
              </div>

              {/* Before/After Slider */}
              {project.hasBeforeAfter &&
                project.beforeImage &&
                project.afterImage && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <div className="w-1 h-5 bg-primary rounded-full" />
                      <h2 className="font-display font-semibold text-foreground text-lg">
                        Before & After Comparison
                      </h2>
                    </div>
                    <BeforeAfterSlider
                      beforeSrc={project.beforeImage}
                      afterSrc={project.afterImage}
                      beforeLabel="Before"
                      afterLabel="After"
                    />
                  </div>
                )}

              {/* Tags */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Tag className="w-4 h-4 text-primary shrink-0" />
                  <h2 className="text-sm font-display font-semibold text-muted-foreground uppercase tracking-wider">
                    Technologies & Methods
                  </h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right: sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="space-y-6"
            >
              {/* Mission details card */}
              <div className="p-5 rounded-sm border border-border bg-card space-y-4">
                <h3 className="font-display font-semibold text-foreground text-sm uppercase tracking-wider text-muted-foreground">
                  Mission Details
                </h3>
                {[
                  { icon: Building2, label: "Client", value: project.client },
                  { icon: MapPin, label: "Location", value: project.location },
                  {
                    icon: Calendar,
                    label: "Year",
                    value: String(project.year),
                  },
                  {
                    icon: Tag,
                    label: "Service Type",
                    value: project.serviceType,
                  },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-3 text-sm">
                    <div className="w-7 h-7 rounded-sm bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-muted-foreground text-xs mb-0.5">
                        {label}
                      </p>
                      <p className="text-foreground font-medium truncate">
                        {value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA buttons */}
              <Link to="/contact">
                <Button
                  variant="primary"
                  size="md"
                  className="w-full gap-2"
                  data-ocid="project_detail.request_quote.primary_button"
                >
                  Request Similar Mission
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button
                  variant="outline"
                  size="md"
                  className="w-full"
                  data-ocid="project_detail.view_portfolio.secondary_button"
                >
                  View All Projects
                </Button>
              </Link>

              {/* Stats highlight */}
              <div className="p-4 rounded-sm border border-border bg-muted/30 space-y-3">
                <h4 className="text-xs font-display font-semibold text-muted-foreground uppercase tracking-wider">
                  Key Result
                </h4>
                <p className="text-sm text-foreground leading-relaxed font-medium">
                  "{project.results}"
                </p>
                <div className="h-px w-full bg-gradient-to-r from-primary/40 to-transparent" />
                <p className="text-xs text-muted-foreground">
                  — {project.client}, {project.year}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section
          data-ocid="project_detail.related.section"
          className="py-16 bg-muted/20 border-t border-border"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h2 className="text-2xl font-display font-bold text-foreground">
                  Related Projects
                </h2>
                <p className="text-muted-foreground text-sm">
                  More missions in {project.industry}
                </p>
              </div>
              <Link
                to="/portfolio"
                data-ocid="project_detail.related.view_all.link"
              >
                <Button variant="ghost" size="sm" className="gap-1.5">
                  View all <ArrowRight className="w-3.5 h-3.5" />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {relatedProjects.map((p, i) => (
                <RelatedCard key={p.id} project={p} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
}
