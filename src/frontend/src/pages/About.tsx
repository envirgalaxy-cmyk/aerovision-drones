import { Layout } from "@/components/Layout";
import { Badge } from "@/components/ui/AppBadge";
import { Button } from "@/components/ui/AppButton";
import { Card } from "@/components/ui/AppCard";
import { SectionHeading } from "@/components/ui/AppSectionHeading";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  Camera,
  ChevronRight,
  Cpu,
  MapPin,
  Radio,
  Shield,
  Target,
  Users,
  Wind,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";

// ─── Data ─────────────────────────────────────────────────────────────────────

const team = [
  {
    name: "Marcus Chen",
    role: "CEO & Lead Pilot",
    bio: "Former USAF drone operator with 12 years of experience in aerial intelligence and mission-critical operations.",
    initials: "MC",
  },
  {
    name: "Sarah Okafor",
    role: "Head of Engineering",
    bio: "Aerospace engineer specializing in LiDAR systems, photogrammetry pipelines, and autonomous navigation.",
    initials: "SO",
  },
  {
    name: "Devin Torres",
    role: "Operations Director",
    bio: "FAA Part 107 certified. Manages a fleet of 40+ aircraft across 5 active operational zones nationwide.",
    initials: "DT",
  },
  {
    name: "Anika Patel",
    role: "Data Science Lead",
    bio: "Expert in ML-powered anomaly detection, geospatial analytics, and real-time processing infrastructure.",
    initials: "AP",
  },
];

const milestones = [
  {
    year: "2018",
    event:
      "AeroVision founded in San Francisco with 2 drones and a conviction: aerial data should be as precise as the decisions that depend on it.",
  },
  {
    year: "2020",
    event:
      "Expanded to Southern California. Completed first critical infrastructure inspection contract for Caltrans.",
  },
  {
    year: "2022",
    event:
      "Launched AI-powered thermal anomaly detection platform. Fleet scaled to 30+ aircraft across 3 states.",
  },
  {
    year: "2024",
    event:
      "500+ missions complete. Serving clients across 6 states and 7 industry verticals with zero incidents.",
  },
];

const values = [
  {
    icon: Target,
    title: "Precision First",
    desc: "Every mission is executed to sub-centimeter accuracy. We don't approximate — we measure.",
  },
  {
    icon: Award,
    title: "Certified Excellence",
    desc: "FAA Part 107 certified team with full commercial insurance and enterprise-grade protocols.",
  },
  {
    icon: Users,
    title: "Client Partnership",
    desc: "We embed with your operations team to understand your goals before we fly a single mission.",
  },
  {
    icon: Zap,
    title: "Technology Edge",
    desc: "Continuous R&D investment in next-gen sensors, AI processing, and autonomous platforms.",
  },
  {
    icon: Shield,
    title: "Safety Always",
    desc: "Triple-redundant failsafes, mandatory pre-flight checklists, and full liability coverage on every flight.",
  },
  {
    icon: Radio,
    title: "Always Reliable",
    desc: "99.3% mission completion rate. When you need data, we deliver — on time, every time.",
  },
];

const fleet = [
  {
    model: "AV-Phantom X7",
    useCase: "High-resolution Mapping & Surveying",
    range: "25 km",
    camera: "45MP full-frame + LiDAR",
    maxAltitude: "1,000 m AGL",
    flightTime: "52 min",
    icon: Wind,
    highlight: true,
  },
  {
    model: "AV-Thermal S3",
    useCase: "Infrastructure Inspection & Security",
    range: "18 km",
    camera: "Dual optical + FLIR 640",
    maxAltitude: "800 m AGL",
    flightTime: "44 min",
    icon: Cpu,
    highlight: false,
  },
  {
    model: "AV-Swift R2",
    useCase: "Rapid Deployment & Surveillance",
    range: "12 km",
    camera: "4K 60fps + 12× zoom",
    maxAltitude: "500 m AGL",
    flightTime: "38 min",
    icon: Camera,
    highlight: false,
  },
];

// ─── Sub-components ────────────────────────────────────────────────────────────

function StatPill({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="text-center px-6 py-4 rounded-lg bg-card/60 backdrop-blur-md border border-border">
      <p className="text-2xl font-display font-bold text-primary">{value}</p>
      <p className="text-xs text-muted-foreground mt-1 uppercase tracking-widest">
        {label}
      </p>
    </div>
  );
}

function FleetSpec({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between py-2 border-b border-border/40 last:border-0">
      <span className="text-xs text-muted-foreground uppercase tracking-wider">
        {label}
      </span>
      <span className="text-sm font-mono text-foreground font-medium">
        {value}
      </span>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export function About() {
  return (
    <Layout>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section
        data-ocid="about.hero.section"
        className="relative min-h-[70vh] flex items-end overflow-hidden"
      >
        {/* Aerial background */}
        <div className="absolute inset-0">
          <img
            src="/assets/generated/about-hero.dim_1400x600.jpg"
            alt="Aerial city view"
            className="w-full h-full object-cover object-center"
          />
          {/* Layered overlays */}
          <div className="absolute inset-0 bg-background/60" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, oklch(0.04 0 0) 0%, oklch(0.04 0 0 / 0.5) 50%, transparent 100%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 20% 80%, oklch(0.65 0.23 254 / 0.12) 0%, transparent 60%)",
            }}
          />
        </div>

        {/* Scan-line decoration */}
        <div
          className="absolute inset-0 pointer-events-none opacity-5"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 2px, oklch(1 0 0 / 0.3) 2px, oklch(1 0 0 / 0.3) 3px)",
          }}
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-32">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-5 max-w-3xl"
          >
            <Badge
              variant="primary"
              className="tracking-widest uppercase text-xs"
            >
              About AeroVision
            </Badge>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-foreground leading-[0.95] tracking-tight">
              Built for the{" "}
              <span className="text-primary relative">
                Sky
                <span
                  className="absolute -bottom-1 left-0 right-0 h-px"
                  style={{
                    background:
                      "linear-gradient(to right, oklch(0.65 0.23 254), transparent)",
                  }}
                />
              </span>
              ,<br />
              Engineered for <span className="text-primary">Earth.</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl leading-relaxed">
              We combine aerospace precision with cutting-edge AI to turn aerial
              data into decisions that move industries forward.
            </p>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            {[
              { value: "500+", label: "Missions" },
              { value: "40+", label: "Aircraft" },
              { value: "6", label: "States" },
              { value: "7", label: "Sectors" },
            ].map((stat) => (
              <StatPill key={stat.label} {...stat} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Company Story ─────────────────────────────────────────────────── */}
      <section
        data-ocid="about.story.section"
        className="py-24 bg-background border-t border-border"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left — mission/vision */}
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-10"
            >
              <div>
                <Badge
                  variant="outline"
                  className="mb-4 text-xs tracking-widest uppercase"
                >
                  Our Mission
                </Badge>
                <p className="text-xl md:text-2xl font-display font-semibold text-foreground leading-snug">
                  "To make aerial intelligence accessible, actionable, and
                  undeniably accurate — for every industry that depends on
                  knowing what's above."
                </p>
              </div>
              <div className="pl-4 border-l-2 border-primary/40 space-y-3">
                <h3 className="text-sm font-display font-bold text-primary uppercase tracking-widest">
                  Vision
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We envision a world where every infrastructure asset,
                  agricultural field, and critical facility is monitored by
                  autonomous aerial systems that surface insights in real time —
                  eliminating preventable failures before they happen.
                </p>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary shrink-0" />
                <span>
                  Headquartered in San Francisco, CA — operating in 6 states
                </span>
              </div>
            </motion.div>

            {/* Right — timeline */}
            <motion.div
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-sm font-display font-bold text-muted-foreground uppercase tracking-widest mb-8">
                Our Journey
              </h3>
              <div className="relative">
                {/* vertical line */}
                <div
                  className="absolute left-[3.5rem] top-0 bottom-0 w-px"
                  style={{
                    background:
                      "linear-gradient(to bottom, oklch(0.65 0.23 254 / 0.6) 0%, oklch(0.65 0.23 254 / 0.1) 100%)",
                  }}
                />
                <div className="space-y-8">
                  {milestones.map((m, i) => (
                    <motion.div
                      key={m.year}
                      initial={{ opacity: 0, x: 16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.12, duration: 0.45 }}
                      className="flex gap-6 relative"
                      data-ocid={`about.timeline.item.${i + 1}`}
                    >
                      <div className="w-14 shrink-0 text-right">
                        <span className="text-primary font-display font-bold text-sm">
                          {m.year}
                        </span>
                      </div>
                      <div className="relative flex items-start gap-4 pt-0.5">
                        <div className="w-2 h-2 rounded-full bg-primary shrink-0 mt-1.5 shadow-[0_0_8px_oklch(0.65_0.23_254/0.8)]" />
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {m.event}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Core Values ───────────────────────────────────────────────────── */}
      <section
        data-ocid="about.values.section"
        className="py-24 bg-muted/10 border-y border-border"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Core Values"
            subtitle="The principles that guide every mission, every hire, and every investment we make."
            className="mb-14"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((val, i) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                data-ocid={`about.values.item.${i + 1}`}
              >
                <Card className="p-6 h-full flex flex-col gap-4 group hover:border-primary/30 transition-smooth">
                  <div className="w-11 h-11 rounded-sm bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/15 group-hover:border-primary/40 transition-smooth">
                    <val.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-display font-semibold text-foreground">
                      {val.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ─────────────────────────────────────────────────────────── */}
      <section data-ocid="about.team.section" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="The Team"
            subtitle="Aerospace veterans, engineers, and data scientists unified by a single mission."
            className="mb-14"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                data-ocid={`about.team.item.${i + 1}`}
              >
                <Card className="p-6 flex flex-col items-center text-center gap-4 group hover:border-primary/30 transition-smooth">
                  {/* Avatar with glow on hover */}
                  <div className="relative">
                    <div className="w-20 h-20 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center group-hover:border-primary/60 group-hover:shadow-[0_0_20px_oklch(0.65_0.23_254/0.3)] transition-smooth">
                      <span className="font-display font-bold text-2xl text-primary">
                        {member.initials}
                      </span>
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-card border border-primary/40 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <p className="font-display font-semibold text-foreground">
                      {member.name}
                    </p>
                    <p className="text-primary text-xs font-medium tracking-wide">
                      {member.role}
                    </p>
                  </div>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    {member.bio}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Fleet / Technology ────────────────────────────────────────────── */}
      <section
        data-ocid="about.fleet.section"
        className="py-24 bg-card border-y border-border overflow-hidden relative"
      >
        {/* Background glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 70% 50%, oklch(0.65 0.23 254 / 0.06) 0%, transparent 60%)",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            title="Our Fleet"
            subtitle="Three purpose-built platforms engineered for the demands of enterprise-grade aerial operations."
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {fleet.map((drone, i) => {
              const Icon = drone.icon;
              return (
                <motion.div
                  key={drone.model}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.55 }}
                  data-ocid={`about.fleet.item.${i + 1}`}
                >
                  <div
                    className={`relative h-full rounded-lg border p-6 flex flex-col gap-5 transition-smooth group ${
                      drone.highlight
                        ? "border-primary/40 bg-background shadow-[0_0_24px_oklch(0.65_0.23_254/0.1)]"
                        : "border-border bg-background hover:border-primary/30"
                    }`}
                  >
                    {drone.highlight && (
                      <div className="absolute -top-3 left-6">
                        <span className="bg-primary text-primary-foreground text-xs font-display font-bold px-3 py-1 rounded-full tracking-widest uppercase">
                          Flagship
                        </span>
                      </div>
                    )}

                    {/* Icon */}
                    <div
                      className={`w-12 h-12 rounded-sm flex items-center justify-center ${
                        drone.highlight
                          ? "bg-primary/15 border border-primary/30"
                          : "bg-muted/40 border border-border"
                      }`}
                    >
                      <Icon
                        className={`w-5 h-5 ${drone.highlight ? "text-primary" : "text-muted-foreground"}`}
                      />
                    </div>

                    {/* Model name & use-case */}
                    <div>
                      <h3 className="font-display font-bold text-lg text-foreground">
                        {drone.model}
                      </h3>
                      <p className="text-primary text-xs mt-1 font-medium tracking-wide">
                        {drone.useCase}
                      </p>
                    </div>

                    {/* Specs */}
                    <div className="flex-1">
                      <FleetSpec label="Range" value={drone.range} />
                      <FleetSpec label="Camera" value={drone.camera} />
                      <FleetSpec
                        label="Max Altitude"
                        value={drone.maxAltitude}
                      />
                      <FleetSpec label="Flight Time" value={drone.flightTime} />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section
        data-ocid="about.cta.section"
        className="py-24 bg-muted/10 border-t border-border relative overflow-hidden"
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 100%, oklch(0.65 0.23 254 / 0.08) 0%, transparent 60%)",
          }}
        />
        <div className="max-w-3xl mx-auto px-4 text-center space-y-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <SectionHeading
              title="Ready to Work Together?"
              subtitle="Let's discuss how AeroVision can deliver aerial intelligence for your next project."
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-wrap gap-3 justify-center"
          >
            <Link to="/contact">
              <Button
                variant="primary"
                size="lg"
                data-ocid="about.cta.contact.primary_button"
                className="gap-2"
              >
                Get in Touch
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link to="/services">
              <Button
                variant="outline"
                size="lg"
                data-ocid="about.cta.services.secondary_button"
                className="gap-2"
              >
                View Services
                <ChevronRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
