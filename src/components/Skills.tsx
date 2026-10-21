import { motion } from "framer-motion";
import { Code, Server, Shield, Terminal, Network } from "lucide-react";

const skills = [
  {
    icon: Code,
    title: "Languages",
    subtitle: "Software Development",
    items: ["Python", "JavaScript", "C++", "C#", "HTML/CSS", "SQL"],
    description:
      "Proficient in multi-paradigm software engineering. Experienced in building automated scripts, robust backend services, and clean system-level utilities with clean architecture.",
    featured: false,
  },
  {
    icon: Network,
    title: "Networking",
    subtitle: "Cisco Certified (CCNA)",
    items: ["Switching", "Advanced Routing", "STP", "VLANs", "IP Services", "OSPF", "EIGRP", "ACLs", "NAT/PAT"],
    description:
      "CCNA certified with hands-on mastery in enterprise infrastructure. Solid background in multi-tier campus switching, redundant routing topologies, security filtering, and dynamic IP services.",
    featured: true,
  },
  {
    icon: Terminal,
    title: "Linux Power User",
    subtitle: "UNIX & System Internals",
    items: ["Arch Linux", "Gentoo", "Bash", "Shell Scripting", "Systemd", "Kernel Config"],
    description:
      "Advanced Linux practitioner with years configuring source-based and rolling-release distributions. Deep grasp of shell scripting, init systems, package building, and granular OS optimization.",
    featured: false,
  },
  {
    icon: Server,
    title: "Databases",
    subtitle: "Storage & Persistence",
    items: ["MySQL", "PostgreSQL", "MariaDB", "SQLite"],
    description:
      "Solid foundation in relational schema modeling, normalization, and query performance. Experienced managing persistent state for production-grade APIs and standalone utilities.",
    featured: false,
  },
  {
    icon: Shield,
    title: "Security",
    subtitle: "Defensive & Offensive Basics",
    items: ["Network Security", "Traffic Analysis", "Pentesting Basics", "Firewalling", "Hardening"],
    description:
      "Security-conscious mindset oriented towards proactive hardening, perimeter enforcement, and packet inspection. Dedicated to applying secure protocols and mitigation techniques across layers.",
    featured: false,
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 relative">
      {/* Subtle section bg */}
      <div className="absolute inset-0 bg-grid-fine opacity-30" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-xs font-mono text-accent uppercase tracking-widest mb-3">
            // expertise
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-muted-foreground">{"<"}</span>
            <span className="text-foreground">Skills</span>
            <span className="text-muted-foreground">{" />"}</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-md">
            My toolbox for building efficient solutions
          </p>
        </motion.div>

        {/* Cards container: 3 columns layout, taller cards with vertical breath, centered remaining items */}
        <div className="flex flex-wrap justify-center gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className={`group flex flex-col w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] min-h-[340px] p-7 rounded-xl border bg-card/30 backdrop-blur-sm transition-all duration-300 ${
                skill.featured
                  ? "border-accent/40 bg-card/45 hover:border-accent hover:bg-card/60 shadow-glow-sm"
                  : "border-border/50 hover:border-accent/40 hover:bg-card/50"
              }`}
            >
              {/* Card Header */}
              <div className="flex items-center gap-3.5 mb-5">
                <div
                  className={`w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                    skill.featured
                      ? "bg-accent/20 border border-accent/40 text-accent group-hover:bg-accent/30"
                      : "bg-accent/10 border border-accent/20 text-accent group-hover:bg-accent/20"
                  }`}
                >
                  <skill.icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-semibold text-foreground">{skill.title}</h3>
                    {skill.featured && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-accent/15 text-accent border border-accent/30 font-medium">
                        CCNA
                      </span>
                    )}
                  </div>
                  <p className="text-xs font-mono text-accent/80 mt-0.5">{skill.subtitle}</p>
                </div>
              </div>

              {/* Extended Description */}
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                {skill.description}
              </p>

              {/* Badges / Tech items */}
              <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-border/40">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className={`text-xs font-mono px-2.5 py-1 rounded transition-colors ${
                      skill.featured
                        ? "bg-accent/10 text-accent border border-accent/20 hover:bg-accent/20"
                        : "bg-secondary text-secondary-foreground hover:text-foreground"
                    }`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
