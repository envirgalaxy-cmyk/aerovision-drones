import { cn } from "@/lib/utils";
import { motion } from "motion/react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  accent?: string;
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  align = "center",
  accent,
  className,
}: SectionHeadingProps) {
  const parts = accent ? title.split(accent) : [title];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "space-y-4",
        align === "center" && "text-center",
        align === "right" && "text-right",
        className,
      )}
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight text-foreground">
        {accent ? (
          <>
            {parts[0]}
            <span className="text-primary glow-blue">{accent}</span>
            {parts[1]}
          </>
        ) : (
          title
        )}
      </h2>

      {/* Animated underline */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        className={cn(
          "h-0.5 w-16 bg-primary rounded-full origin-left",
          align === "center" && "mx-auto origin-center",
          align === "right" && "ml-auto origin-right",
        )}
        style={{
          boxShadow: "0 0 12px oklch(var(--primary) / 0.6)",
        }}
      />

      {subtitle && (
        <p
          className={cn(
            "text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl",
            align === "center" && "mx-auto",
          )}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
