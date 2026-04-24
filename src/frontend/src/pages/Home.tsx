import { Layout } from "@/components/Layout";
import { Badge } from "@/components/ui/AppBadge";
import { Button } from "@/components/ui/AppButton";
import { Card } from "@/components/ui/AppCard";
import { SectionHeading } from "@/components/ui/AppSectionHeading";
import { industries, projects, services } from "@/data/mockData";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Building2,
  Camera,
  ChevronDown,
  Crosshair,
  Eye,
  Landmark,
  Leaf,
  MapIcon,
  Play,
  ShieldCheck,
  Sprout,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

// ─── Data ────────────────────────────────────────────────────────────────────

const heroStats = [
  { value: 500, suffix: "+", label: "Projects Completed" },
  { value: 50, suffix: "+", label: "Industries Served" },
  { value: 99, suffix: "%", label: "Satisfaction Rate" },
  { value: 24, suffix: "/7", label: "Support" },
];

const featuredServices = services.slice(0, 3);
const featuredProjects = projects.filter((p) => p.featured);
const featuredIndustries = industries.slice(0, 3);

const serviceIcons: Record<string, React.FC<{ className?: string }>> = {
  ScanLine: ({ className }) => <Crosshair className={className} />,
  Map: ({ className }) => <MapIcon className={className} />,
  Shield: ({ className }) => <Eye className={className} />,
  Film: ({ className }) => <Camera className={className} />,
  Leaf: ({ className }) => <Leaf className={className} />,
  AlertTriangle: ({ className }) => <Zap className={className} />,
};

const industryIcons: Record<string, React.FC<{ className?: string }>> = {
  Building2: ({ className }) => <Building2 className={className} />,
  Sprout: ({ className }) => <Sprout className={className} />,
  Zap: ({ className }) => <Zap className={className} />,
  ShieldCheck: ({ className }) => <ShieldCheck className={className} />,
  Camera: ({ className }) => <Camera className={className} />,
  Landmark: ({ className }) => <Landmark className={className} />,
};

// ─── Animated Counter ─────────────────────────────────────────────────────────

function AnimatedCounter({
  value,
  suffix,
  duration = 1800,
}: {
  value: number;
  suffix: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const startTime = performance.now();
    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      setCount(Math.floor(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

// ─── Home Page ────────────────────────────────────────────────────────────────

export function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (v) {
      v.muted = true;
      v.play().catch(() => {});
    }
  }, []);

  return (
    <Layout>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section
        data-ocid="home.hero.section"
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background"
      >
        {/* Video / image background */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence>
            {!videoLoaded && (
              <motion.img
                key="fallback"
                src="/assets/generated/hero-drone-city.dim_1920x1080.jpg"
                alt="Aerial cityscape"
                className="w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.45 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
              />
            )}
          </AnimatePresence>

          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-1000"
            style={{ opacity: videoLoaded ? 0.45 : 0 }}
            onCanPlay={() => setVideoLoaded(true)}
          >
            <source
              src="https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-city-at-night-14580-large.mp4"
              type="video/mp4"
            />
          </video>

          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/30 to-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-background/50" />

          {/* Blue glow orb */}
          <div
            className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, oklch(0.65 0.23 254 / 0.1) 0%, transparent 65%)",
            }}
          />

          {/* Scan-line texture */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent, transparent 2px, oklch(1 0 0 / 1) 2px, oklch(1 0 0 / 1) 3px)",
            }}
          />
        </div>

        {/* Hero content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Badge
                variant="primary"
                className="text-xs tracking-[0.2em] uppercase px-4 py-1.5"
              >
                ◆ Advanced Aerial Intelligence
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-5xl sm:text-7xl lg:text-8xl font-display font-bold tracking-tight text-foreground leading-[0.95] uppercase"
            >
              Elevate Your{" "}
              <span
                className="text-primary"
                style={{
                  textShadow:
                    "0 0 60px oklch(0.65 0.23 254 / 0.6), 0 0 120px oklch(0.65 0.23 254 / 0.25)",
                }}
              >
                Vision.
              </span>
              <br />
              Redefine{" "}
              <span className="relative inline-block">
                Possibility.
                <motion.span
                  className="absolute -bottom-2 left-0 right-0 h-[3px] bg-primary rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1, duration: 0.7, ease: "easeOut" }}
                  style={{ boxShadow: "0 0 16px oklch(0.65 0.23 254 / 0.8)" }}
                />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
            >
              Professional drone services for inspection, mapping, surveillance,
              and cinematography — delivering intelligence from above for every
              industry.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex flex-wrap items-center justify-center gap-4 pt-2"
            >
              <Link to="/contact">
                <Button
                  variant="primary"
                  size="lg"
                  data-ocid="home.hero.request_quote.primary_button"
                  className="gap-2 min-w-[160px]"
                >
                  Request Quote
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button
                  variant="ghost"
                  size="lg"
                  data-ocid="home.hero.view_projects.secondary_button"
                  className="gap-2 min-w-[160px]"
                >
                  <Play className="w-4 h-4" fill="currentColor" />
                  View Projects
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* ── Stats Bar ─────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-20 relative"
          >
            <div className="absolute inset-0 rounded-sm border border-border/30 bg-glass pointer-events-none" />
            <div
              data-ocid="home.stats.section"
              className="relative grid grid-cols-2 sm:grid-cols-4 gap-0"
            >
              {heroStats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
                  data-ocid={`home.stats.item.${i + 1}`}
                  className={`text-center py-6 px-4 ${i < heroStats.length - 1 ? "border-r border-border/30" : ""} ${i >= 2 ? "sm:border-t-0 border-t border-border/30" : ""}`}
                >
                  <div
                    className="text-4xl font-display font-bold text-primary tabular-nums"
                    style={{
                      textShadow: "0 0 20px oklch(0.65 0.23 254 / 0.4)",
                    }}
                  >
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                      duration={1600}
                    />
                  </div>
                  <div className="text-xs text-muted-foreground mt-1.5 tracking-widest uppercase">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Scroll cue */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="mt-10 flex flex-col items-center gap-2 text-muted-foreground/50"
          >
            <span className="text-[10px] tracking-[0.3em] uppercase">
              Scroll
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 1.8,
                ease: "easeInOut",
              }}
            >
              <ChevronDown className="w-4 h-4" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── SERVICES PREVIEW ─────────────────────────────────────── */}
      <section data-ocid="home.services.section" className="py-28 bg-muted/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Elite Drone Services"
            accent="Drone"
            subtitle="From structural inspections to cinematic aerial photography — our FAA-certified operators deliver precision results for every mission profile."
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredServices.map((svc, i) => {
              const Icon = serviceIcons[svc.icon] ?? Zap;
              return (
                <motion.div
                  key={svc.id}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: i * 0.12, duration: 0.55 }}
                  data-ocid={`home.services.item.${i + 1}`}
                >
                  <Card
                    hover
                    glow={i === 0}
                    className="p-6 h-full flex flex-col gap-4"
                  >
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-sm bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="font-display font-semibold text-foreground text-lg mb-2 leading-snug">
                        {svc.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                        {svc.description}
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {svc.industries.slice(0, 2).map((ind) => (
                        <Badge key={ind} variant="primary" className="text-xs">
                          {ind}
                        </Badge>
                      ))}
                    </div>

                    {/* Price + CTA */}
                    <div className="border-t border-border/50 pt-3 flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">
                        {svc.priceRange}
                      </span>
                      <Link to="/services">
                        <button
                          type="button"
                          className="text-xs text-primary hover:text-primary/80 flex items-center gap-1 transition-smooth"
                        >
                          Learn More <ArrowRight className="w-3 h-3" />
                        </button>
                      </Link>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <Link to="/services">
              <Button
                variant="outline"
                size="md"
                data-ocid="home.services.view_all.link"
                className="gap-2"
              >
                View All Services
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES TEASER ─────────────────────────────────────── */}
      <section
        data-ocid="home.industries.section"
        className="py-28 bg-background"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Industries We Serve"
            accent="Industries"
            subtitle="Specialized aerial solutions tailored to the demands of diverse sectors — from energy infrastructure to precision agriculture."
            className="mb-16"
          />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {featuredIndustries.map((ind, i) => {
              const Icon = industryIcons[ind.icon] ?? Building2;
              return (
                <motion.div
                  key={ind.id}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -24 : 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: i * 0.1, duration: 0.55 }}
                  data-ocid={`home.industries.item.${i + 1}`}
                >
                  <Card hover className="p-6 h-full group">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-sm bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-smooth">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-display font-semibold text-foreground text-base mb-1.5 leading-snug">
                          {ind.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                          {ind.description}
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center gap-1.5 text-xs text-primary opacity-0 group-hover:opacity-100 transition-smooth">
                      <ArrowRight className="w-3 h-3" />
                      <span>Explore use cases</span>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <Link to="/industries">
              <Button
                variant="outline"
                size="md"
                data-ocid="home.industries.view_all.link"
                className="gap-2"
              >
                All Industries
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO PREVIEW ─────────────────────────────────────── */}
      <section data-ocid="home.portfolio.section" className="py-28 bg-muted/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Featured Projects"
            accent="Projects"
            subtitle="Real-world aerial missions demonstrating precision capabilities across industries and environments."
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProjects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{
                  opacity: 0,
                  y: i === 1 ? 40 : 0,
                  scale: i === 1 ? 0.97 : 1,
                }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.12, duration: 0.55 }}
                data-ocid={`home.portfolio.item.${i + 1}`}
              >
                <Link
                  to="/portfolio/$projectId"
                  params={{ projectId: project.id }}
                >
                  <Card hover className="overflow-hidden group">
                    {/* Image */}
                    <div className="relative h-52 overflow-hidden bg-secondary/50">
                      <img
                        src={project.coverImage}
                        alt={project.title}
                        className="w-full h-full object-cover transition-smooth group-hover:scale-105"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src =
                            "/assets/generated/hero-drone-city.dim_1920x1080.jpg";
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
                      <Badge
                        variant="primary"
                        className="absolute top-3 left-3 text-[10px] tracking-wide"
                      >
                        {project.industry}
                      </Badge>
                      <Badge
                        variant="secondary"
                        className="absolute top-3 right-3 text-[10px] tracking-wide"
                      >
                        {project.serviceType}
                      </Badge>
                    </div>

                    {/* Info */}
                    <div className="p-5 space-y-2">
                      <h3 className="font-display font-semibold text-foreground leading-snug line-clamp-2 group-hover:text-primary transition-smooth">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm line-clamp-2">
                        {project.description}
                      </p>
                      <div className="flex items-center justify-between pt-2 text-xs text-muted-foreground border-t border-border/40">
                        <span>{project.location}</span>
                        <span>{project.year}</span>
                      </div>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link to="/portfolio">
              <Button
                variant="outline"
                size="md"
                data-ocid="home.portfolio.view_all.link"
                className="gap-2"
              >
                View All Projects
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────────────────── */}
      <section
        data-ocid="home.cta.section"
        className="relative py-28 overflow-hidden"
      >
        {/* Background */}
        <div className="absolute inset-0 bg-background" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(45deg, oklch(0.65 0.23 254) 25%, transparent 25%, transparent 75%, oklch(0.65 0.23 254) 75%), linear-gradient(45deg, oklch(0.65 0.23 254) 25%, transparent 25%, transparent 75%, oklch(0.65 0.23 254) 75%)",
            backgroundSize: "40px 40px",
            backgroundPosition: "0 0, 20px 20px",
          }}
        />
        {/* Glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse, oklch(0.65 0.23 254 / 0.08) 0%, transparent 70%)",
          }}
        />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <Badge
                variant="primary"
                className="text-xs tracking-widest uppercase"
              >
                Ready to Launch
              </Badge>
              <h2 className="text-4xl md:text-6xl font-display font-bold text-foreground leading-tight">
                Ready to Elevate
                <br />
                <span
                  className="text-primary"
                  style={{
                    textShadow: "0 0 40px oklch(0.65 0.23 254 / 0.5)",
                  }}
                >
                  Your Operations?
                </span>
              </h2>
              <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                Talk to our team about your project requirements. Get a custom
                quote within 24 hours from our certified specialists.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link to="/contact">
                <Button
                  variant="primary"
                  size="lg"
                  data-ocid="home.cta.request_quote.primary_button"
                  className="gap-2 min-w-[180px]"
                >
                  Request a Quote
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button
                  variant="ghost"
                  size="lg"
                  data-ocid="home.cta.view_projects.secondary_button"
                  className="gap-2 min-w-[180px]"
                >
                  View Our Work
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  data-ocid="home.cta.contact_us.button"
                  className="gap-2 min-w-[180px]"
                >
                  Contact Us
                </Button>
              </Link>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap items-center justify-center gap-6 pt-4 border-t border-border/30">
              {[
                "FAA Part 107 Certified",
                "Fully Insured",
                "24/7 Response",
                "NDA Available",
              ].map((trust) => (
                <span
                  key={trust}
                  className="text-xs text-muted-foreground flex items-center gap-1.5"
                >
                  <span className="w-1 h-1 rounded-full bg-primary inline-block" />
                  {trust}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
