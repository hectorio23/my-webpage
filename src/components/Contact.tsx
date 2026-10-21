import { motion } from "framer-motion";
import { Github, Mail, ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 relative">
      {/* Different background to separate from Projects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
      <div className="absolute inset-0 bg-grid-fine opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-mono text-accent uppercase tracking-widest mb-4">
            // get in touch
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">
            Let's build something{" "}
            <span className="text-gradient">together</span>
          </h2>

          <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Whether it's a software project, a network challenge, or just want
            to connect — I'm open to it.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://github.com/hectorio23"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 px-6 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-accent/90 transition-all hover:shadow-glow w-full sm:w-auto justify-center"
            >
              <Github className="w-4 h-4" />
              View GitHub
              <ArrowRight className="w-3.5 h-3.5 opacity-0 -ml-1 group-hover:opacity-100 group-hover:ml-0 transition-all" />
            </a>
            <a
              href="mailto:contact@example.com"
              className="group inline-flex items-center gap-2.5 px-6 py-3 border border-border bg-card/50 text-foreground rounded-lg font-medium hover:bg-card hover:border-accent/50 transition-all w-full sm:w-auto justify-center"
            >
              <Mail className="w-4 h-4" />
              Send an Email
              <ArrowRight className="w-3.5 h-3.5 opacity-0 -ml-1 group-hover:opacity-100 group-hover:ml-0 transition-all" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
