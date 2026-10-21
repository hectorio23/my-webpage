import { Terminal, Github, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border/40">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-accent" />
          <span className="font-mono text-sm text-muted-foreground">kernelripper</span>
        </div>

        <p className="text-xs text-muted-foreground order-last md:order-none">
          © {new Date().getFullYear()} Adán. Built with passion.
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/hectorio23"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-accent transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="mailto:contact@example.com"
            className="text-muted-foreground hover:text-accent transition-colors"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
