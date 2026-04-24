import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { cn } from "@/lib/utils";
import type React from "react";

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
  noFooter?: boolean;
}

export function Layout({
  children,
  className,
  fullWidth = false,
  noFooter = false,
}: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className={cn("flex-1 pt-16", !fullWidth && "w-full", className)}>
        {children}
      </main>

      {!noFooter && <Footer />}
    </div>
  );
}
