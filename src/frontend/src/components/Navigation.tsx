import { Button } from "@/components/ui/AppButton";
import { cn } from "@/lib/utils";
import { Link, useRouterState } from "@tanstack/react-router";
import { Crosshair, Menu, X } from "lucide-react";
import { AnimatePresence, motion, useScroll } from "motion/react";
import { useEffect, useRef, useState } from "react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Industries", to: "/industries" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;
  const prevPath = useRef(currentPath);

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setScrolled(latest > 40);
    });
  }, [scrollY]);

  if (prevPath.current !== currentPath) {
    prevPath.current = currentPath;
    setMobileOpen(false);
  }

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-card/95 backdrop-blur-md border-b border-border shadow-elevated-dark"
            : "bg-transparent border-b border-transparent",
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              to="/"
              data-ocid="nav.logo.link"
              className="flex items-center gap-2.5 group"
            >
              <div className="w-8 h-8 rounded-sm border border-primary/50 bg-primary/10 flex items-center justify-center group-hover:shadow-glow transition-smooth">
                <Crosshair className="w-4 h-4 text-primary" />
              </div>
              <span className="font-display font-bold text-lg tracking-wide text-foreground">
                Aero<span className="text-primary">Vision</span>
              </span>
            </Link>

            {/* Desktop nav */}
            <nav
              className="hidden md:flex items-center gap-1"
              data-ocid="nav.desktop"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  data-ocid={`nav.${link.label.toLowerCase()}.link`}
                  className={cn(
                    "px-3 py-1.5 text-sm font-display font-medium rounded-sm transition-smooth",
                    currentPath === link.to
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/60",
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA + Hamburger */}
            <div className="flex items-center gap-3">
              <Link to="/contact" className="hidden md:block">
                <Button
                  variant="primary"
                  size="sm"
                  data-ocid="nav.request_quote.primary_button"
                >
                  Request Quote
                </Button>
              </Link>

              <button
                type="button"
                data-ocid="nav.mobile_menu.toggle"
                className="md:hidden w-9 h-9 flex items-center justify-center rounded-sm border border-border bg-secondary/50 hover:border-primary/40 hover:bg-primary/10 transition-smooth"
                onClick={() => setMobileOpen((o) => !o)}
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
              >
                <AnimatePresence mode="wait" initial={false}>
                  {mobileOpen ? (
                    <motion.span
                      key="x"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      <X className="w-4 h-4 text-foreground" />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      <Menu className="w-4 h-4 text-foreground" />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.nav
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              data-ocid="nav.mobile_menu.sheet"
              className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-card border-l border-border shadow-elevated-dark flex flex-col md:hidden"
            >
              <div className="flex items-center justify-between p-4 border-b border-border">
                <span className="font-display font-bold text-foreground">
                  Aero<span className="text-primary">Vision</span>
                </span>
                <button
                  type="button"
                  data-ocid="nav.mobile_menu.close_button"
                  onClick={() => setMobileOpen(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-sm hover:bg-secondary/50 transition-smooth"
                  aria-label="Close menu"
                >
                  <X className="w-4 h-4 text-muted-foreground" />
                </button>
              </div>

              <div className="flex flex-col gap-1 p-4 flex-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.to}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.3 }}
                  >
                    <Link
                      to={link.to}
                      data-ocid={`nav.mobile.${link.label.toLowerCase()}.link`}
                      className={cn(
                        "flex items-center px-4 py-3 rounded-sm font-display font-medium text-sm transition-smooth",
                        currentPath === link.to
                          ? "text-primary bg-primary/10 border border-primary/20"
                          : "text-muted-foreground hover:text-foreground hover:bg-secondary/50",
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="p-4 border-t border-border">
                <Link to="/contact">
                  <Button
                    variant="primary"
                    size="md"
                    className="w-full"
                    data-ocid="nav.mobile.request_quote.primary_button"
                  >
                    Request Quote
                  </Button>
                </Link>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
