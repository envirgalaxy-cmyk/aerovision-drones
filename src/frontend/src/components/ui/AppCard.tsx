import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import type React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
  hover?: boolean;
  onClick?: () => void;
  as?: "div" | "article" | "li";
}

export function Card({
  children,
  className,
  glow = false,
  hover = false,
  onClick,
  as: Tag = "div",
}: CardProps) {
  const classes = cn(
    "bg-glass border border-border rounded-sm overflow-hidden",
    glow && "border-glow",
    hover &&
      "cursor-pointer transition-smooth hover:border-primary/50 hover:shadow-glow",
    className,
  );

  if (hover || onClick) {
    return (
      <motion.div
        whileHover={{ y: -4, scale: 1.01 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        onClick={onClick}
        className={classes}
        // @ts-expect-error -- motion polymorphism
        as={Tag}
      >
        {children}
      </motion.div>
    );
  }

  return <Tag className={classes}>{children}</Tag>;
}
