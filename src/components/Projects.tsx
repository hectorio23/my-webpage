import { motion } from "framer-motion";
import { ExternalLink, GitFork, Star, Code } from "lucide-react";

const projects = [
    {
      name: "pypwd",
      description: "A terminal based password manager for Unix Systems",
      language: "Python",
      url: "https://github.com/hectorio23/pypwd",
      stars: 0,
      forks: 0,
      featured: false,
    },
    {
    name: "py-proxy",
    description: "Proxy server written in Python for network handling",
    language: "Python",
    url: "https://github.com/hectorio23/py-proxy",
    stars: 0,
    forks: 0,
    featured: false,
  },
  {
    name: "dotfiles",
    description: "Personal Linux configuration files for Arch/Gentoo setups",
    language: "Shell",
    url: "https://github.com/hectorio23/dotfiles",
    stars: 0,
    forks: 0,
    featured: false,
  },
  {
    name: "articles-app",
    description: "Web application for deploying and managing articles and blogs",
    language: "JavaScript",
    url: "https://github.com/hectorio23/articles-app",
    stars: 0,
    forks: 0,
    featured: true,
  },
  {
    name: "node-filer",
    description: "FTP server developed in Node.js for document storage",
    language: "JavaScript",
    url: "https://github.com/hectorio23/node-filer",
    stars: 0,
    forks: 0,
    featured: false,
  },
  {
    name: "ci-cd-practica",
    description: "CI/CD practice repository for continuous integration workflows",
    language: "YAML",
    url: "https://github.com/hectorio23/ci-cd-practica",
    stars: 0,
    forks: 0,
    featured: false,
  },
];

const languageColors: Record<string, string> = {
  JavaScript: "bg-yellow-400",
  Python: "bg-blue-400",
  Shell: "bg-green-400",
  YAML: "bg-red-400",
  Markdown: "bg-purple-400",
  TypeScript: "bg-blue-500",
};

const ProjectCard = ({
  project,
  className = "",
}: {
  project: (typeof projects)[0];
  className?: string;
}) => (
  <motion.a
    href={project.url}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ y: -3 }}
    className={`group flex flex-col p-6 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm hover:border-accent/50 hover:bg-card/60 transition-all duration-300 hover:shadow-glow-sm ${className}`}
  >
    <div className="flex items-start justify-between mb-3">
      <div className="flex items-center gap-2">
        <Code className="w-4 h-4 text-accent flex-shrink-0" />
        <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors text-sm">
          {project.name}
        </h3>
      </div>
      <ExternalLink className="w-3.5 h-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
    </div>

    <p className="text-sm text-muted-foreground flex-1 leading-relaxed mb-5">
      {project.description}
    </p>

    <div className="flex items-center justify-between mt-auto">
      <div className="flex items-center gap-2">
        <span
          className={`w-2.5 h-2.5 rounded-full ${languageColors[project.language] ?? "bg-gray-400"}`}
        />
        <span className="text-xs text-muted-foreground">{project.language}</span>
      </div>
      <div className="flex items-center gap-3 text-muted-foreground">
        <span className="flex items-center gap-1 text-xs">
          <Star className="w-3 h-3" />
          {project.stars}
        </span>
        <span className="flex items-center gap-1 text-xs">
          <GitFork className="w-3 h-3" />
          {project.forks}
        </span>
      </div>
    </div>
  </motion.a>
);

const Projects = () => {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-xs font-mono text-accent uppercase tracking-widest mb-3">
            // open source
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-muted-foreground">{"{"}</span>
            <span className="text-foreground"> Projects </span>
            <span className="text-muted-foreground">{"}"}</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-md">
            Open source projects and personal experiments
          </p>
        </motion.div>

        {/* Projects grid: 3 columns, 2 rows (6 items) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="flex"
            >
              <ProjectCard project={project} className="w-full h-full" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-10"
        >
          <a
            href="https://github.com/hectorio23?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent/80 transition-colors font-mono"
          >
            View all repositories
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
