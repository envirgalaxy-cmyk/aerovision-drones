import { Layout } from "@/components/Layout";
import { Badge } from "@/components/ui/AppBadge";
import { Button } from "@/components/ui/AppButton";
import { Card } from "@/components/ui/AppCard";
import { SectionHeading } from "@/components/ui/AppSectionHeading";
import { services } from "@/data/mockData";
import type { Service } from "@/types";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Camera,
  Check,
  ChevronRight,
  Eye,
  Film,
  Layers,
  MapIcon,
  Shield,
  TrendingUp,
  Zap,
} from "lucide-react";
import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

// ─── Icon map ────────────────────────────────────────────────────────────────
const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Eye: ({ className }) => <Eye className={className} />,
  Map: ({ className }) => <MapIcon className={className} />,
  Shield: ({ className }) => <Shield className={className} />,
  Film: ({ className }) => <Film className={className} />,
  Layers: ({ className }) => <Layers className={className} />,
  Camera: ({ className }) => <Camera className={className} />,
};

// ─── Hero ─────────────────────────────────────────────────────────────────────
function ServicesHero() {
  return (
    <section
      data-ocid="services.hero.section"
      className="relative min-h-[52vh] flex items-center overflow-hidden bg-card border-b border-border"
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 70% 40%, oklch(0.65 0.23 254 / 0.08) 0%, transparent 65%)",
        }}
      />
      {/* Grid lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.98 0 0) 1px, transparent 1px), linear-gradient(90deg, oklch(0.98 0 0) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <Badge
              variant="primary"
              className="tracking-widest uppercase text-xs mb-5"
            >
              Our Services
            </Badge>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-display font-bold text-foreground leading-none tracking-tight mb-6">
            Our Drone{" "}
            <span
              className="text-primary"
              style={{ textShadow: "0 0 40px oklch(0.65 0.23 254 / 0.4)" }}
            >
              Services
            </span>
          </h1>
          <p className="text-muted-foreground text-xl leading-relaxed mb-10 max-w-2xl">
            Six specialized aerial service lines engineered for the demands of
            modern industry. Every mission planned, certified, and executed to
            the highest standard.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#service-detail-aerial-inspection">
              <Button
                variant="primary"
                size="lg"
                data-ocid="services.hero.explore.primary_button"
                className="gap-2"
              >
                Explore Services
                <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
            <Link to="/contact">
              <Button
                variant="outline"
                size="lg"
                data-ocid="services.hero.quote.secondary_button"
                className="gap-2"
              >
                Get a Quote
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Stat strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="mt-16 flex flex-wrap gap-8"
        >
          {[
            { value: "6", label: "Service Lines" },
            { value: "500+", label: "Missions Flown" },
            { value: "FAA", label: "Part 107 Certified" },
            { value: "24/7", label: "Rapid Deployment" },
          ].map((stat) => (
            <div key={stat.label} className="flex items-center gap-3">
              <span
                className="text-2xl font-display font-bold text-primary"
                style={{ textShadow: "0 0 16px oklch(0.65 0.23 254 / 0.5)" }}
              >
                {stat.value}
              </span>
              <span className="text-sm text-muted-foreground font-body">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Overview Grid ────────────────────────────────────────────────────────────
function ServicesGrid({
  active,
  onSelect,
}: { active: string; onSelect: (id: string) => void }) {
  return (
    <section
      data-ocid="services.overview.section"
      className="py-20 bg-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <SectionHeading
            title="What We Deliver"
            subtitle="Hover a card to preview, or click Learn More to jump straight to the deep-dive section."
          />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, i) => {
            const Icon = iconMap[svc.icon] ?? Eye;
            const isActive = active === svc.id;
            return (
              <motion.div
                key={svc.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.07,
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                data-ocid={`services.card.item.${i + 1}`}
              >
                <Card
                  hover
                  className={`p-6 h-full flex flex-col gap-4 cursor-pointer transition-smooth group ${isActive ? "border-primary/50 glow-blue" : ""}`}
                  onClick={() => onSelect(svc.id)}
                >
                  {/* Icon */}
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 shrink-0 rounded-sm flex items-center justify-center transition-smooth ${isActive ? "bg-primary/20 border border-primary/40" : "bg-primary/10 border border-primary/20 group-hover:bg-primary/20 group-hover:border-primary/40"}`}
                    >
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display font-bold text-lg text-foreground leading-tight">
                        {svc.title}
                      </h3>
                      <span className="text-xs text-primary font-body">
                        {svc.priceRange}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                    {svc.description}
                  </p>

                  {/* Industries */}
                  <div className="flex flex-wrap gap-1.5">
                    {svc.industries.slice(0, 3).map((ind) => (
                      <Badge key={ind} variant="secondary" className="text-xs">
                        {ind}
                      </Badge>
                    ))}
                  </div>

                  {/* CTA */}
                  <a
                    href={`#service-detail-${svc.id}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelect(svc.id);
                    }}
                    className="mt-auto"
                  >
                    <Button
                      variant="ghost"
                      size="sm"
                      data-ocid={`services.card.item.${i + 1}.learn_more.button`}
                      className="gap-1.5 p-0 h-auto text-primary hover:text-primary/80 font-display font-semibold text-sm"
                    >
                      Learn More
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </a>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── Sticky Side Nav ──────────────────────────────────────────────────────────
function StickySideNav({ active }: { active: string }) {
  return (
    <div
      data-ocid="services.sidenav.panel"
      className="hidden xl:block sticky top-24 h-fit w-56 shrink-0"
    >
      <div className="bg-card border border-border rounded-sm p-4 space-y-1">
        <p className="text-xs font-display font-semibold text-muted-foreground uppercase tracking-widest mb-3 px-2">
          Jump to Service
        </p>
        {services.map((svc) => {
          const Icon = iconMap[svc.icon] ?? Eye;
          const isActive = active === svc.id;
          return (
            <a
              key={svc.id}
              href={`#service-detail-${svc.id}`}
              data-ocid={`services.sidenav.${svc.slug}.link`}
              className={`flex items-center gap-3 px-3 py-2 rounded-sm text-sm font-body transition-smooth group ${isActive ? "bg-primary/10 text-primary border border-primary/20" : "text-muted-foreground hover:text-foreground hover:bg-muted/40"}`}
            >
              <Icon
                className={`w-4 h-4 shrink-0 transition-smooth ${isActive ? "text-primary" : "text-muted-foreground group-hover:text-primary"}`}
              />
              <span className="truncate leading-tight">{svc.title}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
}

// ─── Service Detail Section ───────────────────────────────────────────────────
function ServiceDetail({ svc, index }: { svc: Service; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px 0px" });
  const isEven = index % 2 === 0;
  const Icon = iconMap[svc.icon] ?? Eye;

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };
  const slideVariants = {
    hidden: { opacity: 0, x: isEven ? -40 : 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" as const },
    },
  };

  return (
    <section
      id={`service-detail-${svc.id}`}
      data-ocid={`services.detail.${svc.slug}.section`}
      ref={ref}
      className={`py-24 ${isEven ? "bg-background" : "bg-card"} border-t border-border`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex flex-col xl:flex-row gap-12 lg:gap-16 items-start ${isEven ? "" : "xl:flex-row-reverse"}`}
        >
          {/* Image */}
          <motion.div
            variants={slideVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="w-full xl:w-[48%] shrink-0"
          >
            <div className="relative rounded-sm overflow-hidden aspect-[16/10] border border-border">
              <img
                src={svc.imageUrl}
                alt={svc.title}
                className="w-full h-full object-cover transition-smooth group-hover:scale-105"
                loading="lazy"
              />
              {/* Blue scan overlay */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(160deg, oklch(0.65 0.23 254 / 0.12) 0%, transparent 50%)",
                }}
              />
              {/* Price badge */}
              <div className="absolute bottom-4 left-4">
                <span className="bg-card/90 backdrop-blur-sm border border-primary/30 text-primary font-display font-semibold text-sm px-4 py-2 rounded-sm">
                  {svc.priceRange}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex-1 min-w-0 space-y-7"
          >
            {/* Title row */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4"
            >
              <div className="w-12 h-12 shrink-0 rounded-sm bg-primary/10 border border-primary/30 flex items-center justify-center glow-blue">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <Badge
                  variant="primary"
                  className="text-xs tracking-widest uppercase mb-1"
                >
                  Service
                </Badge>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground leading-tight">
                  {svc.title}
                </h2>
              </div>
            </motion.div>

            {/* Long description */}
            <motion.p
              variants={itemVariants}
              className="text-muted-foreground leading-relaxed text-base"
            >
              {svc.longDescription}
            </motion.p>

            {/* Features & Benefits in two cols */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {/* Features */}
              <motion.div variants={itemVariants} className="space-y-3">
                <div className="flex items-center gap-2 mb-1">
                  <Zap className="w-4 h-4 text-primary" />
                  <p className="text-sm font-display font-semibold text-foreground uppercase tracking-wider">
                    Capabilities
                  </p>
                </div>
                <ul className="space-y-2">
                  {svc.features.map((feat, fi) => (
                    <motion.li
                      key={feat}
                      initial={{ opacity: 0, x: -12 }}
                      animate={
                        isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -12 }
                      }
                      transition={{ delay: 0.3 + fi * 0.06, duration: 0.4 }}
                      className="flex items-start gap-2.5 text-sm text-muted-foreground"
                    >
                      <Check className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                      <span>{feat}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Benefits */}
              <motion.div variants={itemVariants} className="space-y-3">
                <div className="flex items-center gap-2 mb-1">
                  <TrendingUp className="w-4 h-4 text-primary" />
                  <p className="text-sm font-display font-semibold text-foreground uppercase tracking-wider">
                    Key Benefits
                  </p>
                </div>
                <ul className="space-y-2">
                  {svc.benefits.map((ben, bi) => (
                    <motion.li
                      key={ben}
                      initial={{ opacity: 0, x: 12 }}
                      animate={
                        isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 12 }
                      }
                      transition={{ delay: 0.3 + bi * 0.06, duration: 0.4 }}
                      className="flex items-start gap-2.5 text-sm text-muted-foreground"
                    >
                      <ArrowRight className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                      <span>{ben}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>

            {/* Industries served */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-2 pt-1"
            >
              {svc.industries.map((ind) => (
                <Badge key={ind} variant="secondary" className="text-xs">
                  {ind}
                </Badge>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3 pt-2"
            >
              <Link to="/contact">
                <Button
                  variant="primary"
                  data-ocid={`services.detail.${svc.slug}.quote.primary_button`}
                  className="gap-2"
                >
                  Get a Quote
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  variant="outline"
                  data-ocid={`services.detail.${svc.slug}.contact.secondary_button`}
                  className="gap-2"
                >
                  Contact Us
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── CTA Banner ───────────────────────────────────────────────────────────────
function ServicesCTA() {
  return (
    <section
      data-ocid="services.cta.section"
      className="py-24 bg-card border-t border-border relative overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 50% 50%, oklch(0.65 0.23 254 / 0.07) 0%, transparent 70%)",
        }}
      />
      <div className="max-w-3xl mx-auto px-4 text-center relative z-10 space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            title="Need a Custom Mission?"
            subtitle="Our team will design an operation profile tailored to your exact requirements — talk to us today."
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <Link to="/contact">
            <Button
              variant="primary"
              size="lg"
              data-ocid="services.cta.contact.primary_button"
              className="gap-2"
            >
              Contact Our Team
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
          <Link to="/portfolio">
            <Button
              variant="outline"
              size="lg"
              data-ocid="services.cta.portfolio.secondary_button"
              className="gap-2"
            >
              View Our Projects
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export function Services() {
  const [activeService, setActiveService] = useState(services[0]?.id ?? "");

  // Intersection observer to update active side nav item on scroll
  useEffect(() => {
    const sectionIds = services.map((s) => `service-detail-${s.id}`);
    const observers: IntersectionObserver[] = [];

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
        { rootMargin: "-40% 0px -55% 0px" },
      );
      obs.observe(el);
      observers.push(obs);
    }

    return () => {
      for (const o of observers) o.disconnect();
    };
  }, []);

  return (
    <Layout>
      <ServicesHero />
      <ServicesGrid active={activeService} onSelect={setActiveService} />

      {/* Deep service sections with sticky sidenav */}
      <div className="relative">
        {/* Sticky side nav floats beside the detail sections */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="xl:flex xl:gap-8">
            <StickySideNav active={activeService} />
            {/* Detail sections */}
            <div className="flex-1 min-w-0">
              {services.map((svc, i) => (
                <ServiceDetail key={svc.id} svc={svc} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <ServicesCTA />
    </Layout>
  );
}
