import { useState, useEffect } from "react";
import { Terminal, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "skills", href: "#skills" },
  { label: "projects", href: "#projects" },
  { label: "contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const ids = ["skills", "projects", "contact"];
    const observers: IntersectionObserver[] = [];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(`#${id}`); },
        { threshold: 0.35 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <Terminal className="w-4 h-4 text-accent transition-transform group-hover:scale-110" />
          <span className="font-mono text-sm text-muted-foreground group-hover:text-accent transition-colors">
            ~/kernelripper
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative px-4 py-2 text-sm font-mono rounded-md transition-colors ${
                active === link.href
                  ? "text-accent"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
              }`}
            >
              {active === link.href && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-md bg-accent/10 border border-accent/20"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                />
              )}
              <span className="relative">{link.label}</span>
            </a>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded-md text-muted-foreground hover:text-accent hover:bg-secondary/50 transition-colors"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-background/95 backdrop-blur-md border-b border-border/50 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-mono text-muted-foreground hover:text-accent px-3 py-2 rounded-md hover:bg-secondary/50 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
