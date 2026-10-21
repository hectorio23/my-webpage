import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Terminal, Github, Mail } from "lucide-react";

const TERMINAL_LINES = [
  { text: "$ whoami", type: "cmd" },
  { text: "  kernelripper", type: "out" },
  { text: "", type: "blank" },
  { text: "$ cat certifications.txt", type: "cmd" },
  { text: "  CCNA — Cisco Certified Network Associate ✓", type: "out" },
  { text: "", type: "blank" },
  { text: "$ systemctl status passion.service", type: "cmd" },
  { text: "  ● passion.service — Active: running", type: "out" },
  { text: "    Loaded: Developer & Network Engineer", type: "out" },
  { text: "", type: "blank" },
  { text: "$ python3 solve.py --mode creative", type: "cmd" },
  { text: "  [OK] Problem solved. Elegantly.", type: "out" },
  { text: "", type: "blank" },
  { text: "$ _", type: "cmd" },
];

const TerminalWindow = () => {
  const [visibleLines, setVisibleLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (currentLine >= TERMINAL_LINES.length) {
      const timeout = setTimeout(() => {
        setVisibleLines([]);
        setCurrentLine(0);
        setCurrentChar(0);
      }, 3000);
      return () => clearTimeout(timeout);
    }

    const line = TERMINAL_LINES[currentLine];

    if (line.type === "blank") {
      const t = setTimeout(() => {
        setVisibleLines((prev) => [...prev, ""]);
        setCurrentLine((l) => l + 1);
        setCurrentChar(0);
      }, 120);
      return () => clearTimeout(t);
    }

    if (currentChar <= line.text.length) {
      const delay = line.type === "cmd" ? 45 : 20;
      const t = setTimeout(() => {
        setVisibleLines((prev) => {
          const next = [...prev];
          next[currentLine] = line.text.slice(0, currentChar);
          return next;
        });
        setCurrentChar((c) => c + 1);
      }, delay);
      return () => clearTimeout(t);
    } else {
      const pause = line.type === "cmd" ? 300 : 120;
      const t = setTimeout(() => {
        setCurrentLine((l) => l + 1);
        setCurrentChar(0);
      }, pause);
      return () => clearTimeout(t);
    }
  }, [currentLine, currentChar]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [visibleLines]);

  return (
    <div className="rounded-xl border border-border/60 bg-card/40 backdrop-blur-sm overflow-hidden shadow-2xl terminal-scanline">
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-3 bg-secondary/50 border-b border-border/50">
        <span className="w-3 h-3 rounded-full bg-red-500/80" />
        <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <span className="w-3 h-3 rounded-full bg-green-500/80" />
        <span className="ml-3 text-xs font-mono text-muted-foreground">
          kernelripper@arch:~
        </span>
      </div>

      {/* Terminal body */}
      <div ref={containerRef} className="p-5 font-mono text-sm h-72 overflow-y-auto scrollbar-hide">
        {visibleLines.map((line, i) => {
          const def = TERMINAL_LINES[i];
          const isCmd = def?.type === "cmd";
          return (
            <div key={i} className={`leading-6 ${isCmd ? "text-accent" : "text-muted-foreground"}`}>
              {line}
              {i === visibleLines.length - 1 &&
                currentLine < TERMINAL_LINES.length && (
                  <span
                    className="inline-block w-2 h-4 bg-accent ml-0.5 align-text-bottom"
                    style={{ animation: "blink 1s step-end infinite" }}
                  />
                )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center px-6 pt-16 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[160px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px]" />

      <div className="max-w-6xl mx-auto w-full py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* LEFT — Content */}
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="mb-5"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/60 bg-card/50 backdrop-blur-sm">
              <Terminal className="w-3.5 h-3.5 text-accent" />
              <span className="text-xs font-mono text-muted-foreground">~/kernelripper</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="text-5xl md:text-6xl font-bold mb-3 leading-tight"
          >
            <span className="text-foreground">Hello, I'm </span>
            <span className="text-gradient">Adán</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-xl font-mono text-muted-foreground mb-6"
          >
            aka <span className="text-accent">kernelripper</span> 👋
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="text-base text-muted-foreground mb-8 leading-relaxed max-w-lg"
          >
            Passionate software developer and networking professional focused on
            creatively solving problems. CCNA certified with deep expertise in
            switching, routing, and network infrastructure — from intermediate to
            advanced levels, I tackle challenges that enhance both my programming
            and networking skills.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex flex-wrap gap-3 mb-8"
          >
            <a
              href="https://github.com/hectorio23"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-accent-foreground rounded-lg font-medium text-sm hover:bg-accent/90 transition-all hover:shadow-glow"
            >
              <Github className="w-4 h-4" />
              View GitHub
            </a>
            <a
              href="mailto:contact@example.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-border bg-card/50 text-foreground rounded-lg font-medium text-sm hover:bg-card hover:border-accent/50 transition-all"
            >
              <Mail className="w-4 h-4" />
              Contact Me
            </a>
          </motion.div>

          {/* Tech badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex flex-col gap-2"
          >
            <div className="flex flex-wrap gap-2">
              {["Python", "JavaScript", "C++", "C#", "SQL", "Linux"].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-mono text-accent bg-accent/10 border border-accent/20 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {["Switching", "Advanced Routing", "Network Infrastructure"].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-mono text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* RIGHT — Terminal */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <TerminalWindow />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
