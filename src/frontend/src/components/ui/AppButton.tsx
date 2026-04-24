import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import type React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline" | "danger";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  children: React.ReactNode;
  as?: "button" | "a";
  href?: string;
}

const variants = {
  primary:
    "bg-primary text-primary-foreground border border-primary/60 shadow-glow animate-glow-pulse hover:shadow-glow-intense hover:brightness-110",
  secondary:
    "bg-secondary text-secondary-foreground border border-border hover:bg-secondary/80 hover:border-primary/40 hover:shadow-glow",
  ghost:
    "bg-transparent text-foreground border border-transparent hover:border-primary/30 hover:bg-primary/10 hover:shadow-glow",
  outline:
    "bg-transparent text-primary border border-primary/50 hover:bg-primary/10 hover:border-primary hover:shadow-glow",
  danger:
    "bg-destructive/10 text-destructive border border-destructive/40 hover:bg-destructive/20",
};

const sizes = {
  sm: "h-8 px-3 text-xs gap-1.5",
  md: "h-10 px-5 text-sm gap-2",
  lg: "h-12 px-8 text-base gap-2.5",
};

export function Button({
  variant = "secondary",
  size = "md",
  loading = false,
  children,
  className,
  disabled,
  as,
  href,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center font-display font-medium rounded-sm tracking-wide transition-smooth cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed",
    variants[variant],
    sizes[size],
    className,
  );

  if (as === "a" && href) {
    return (
      <motion.a
        href={href}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={classes}
      >
        {loading ? <span className="animate-spin mr-1">⟳</span> : null}
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      disabled={disabled || loading}
      className={classes}
      {...(props as React.ComponentPropsWithoutRef<typeof motion.button>)}
    >
      {loading ? <span className="animate-spin mr-1">⟳</span> : null}
      {children}
    </motion.button>
  );
}
