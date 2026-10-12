import { Project } from "@/data/projects";
import Link from "next/link";

const categoryColors: Record<string, { text: string; bg: string; border: string; icon: string }> = {
  security: { text: "text-red-400",    bg: "bg-red-500/10",    border: "border-red-500/30",    icon: "🔐" },
  tool:     { text: "text-[#00ff9d]",  bg: "bg-[#00ff9d]/10",  border: "border-[#00ff9d]/30",  icon: "⚙️" },
  web:      { text: "text-cyan-400",   bg: "bg-cyan-500/10",   border: "border-cyan-500/30",   icon: "🌐" },
  mobile:   { text: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/30", icon: "📱" },
  other:    { text: "text-slate-400",  bg: "bg-slate-500/10",  border: "border-slate-500/30",  icon: "🛠️" },
};

const techPalette = [
  "bg-[#00ff9d]/10 text-[#00ff9d] border-[#00ff9d]/25",
  "bg-cyan-500/10   text-cyan-400   border-cyan-500/25",
  "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
  "bg-amber-500/10  text-amber-400  border-amber-500/25",
  "bg-purple-500/10 text-purple-400 border-purple-500/25",
  "bg-sky-500/10    text-sky-400    border-sky-500/25",
];

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const cat = categoryColors[project.category] ?? categoryColors.other;

  return (
    <div
      className="card-cyber group flex flex-col p-6"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {/* Subtle inner cyber gradient glow on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00ff9d]/[0.05] via-transparent to-cyan-500/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="relative flex flex-col flex-1">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-[#00ff9d]/10 border border-[#00ff9d]/20 flex items-center justify-center text-xl transition-all duration-300 group-hover:scale-110 group-hover:border-[#00ff9d]/50 group-hover:shadow-[0_0_15px_rgba(0,255,157,0.25)]">
              {cat.icon}
            </div>
            <div>
              <h3 className="font-semibold text-white text-[15px] leading-tight group-hover:text-[#00ff9d] transition-colors duration-200">
                {project.title}
              </h3>
              <span className="text-xs text-slate-400 font-mono">[{project.year}]</span>
            </div>
          </div>
          <span className={`shrink-0 text-xs px-2.5 py-1 rounded-full border font-mono font-medium capitalize ${cat.text} ${cat.bg} ${cat.border}`}>
            {project.category}
          </span>
        </div>

        {/* Description */}
        <p className="text-sm text-slate-300 leading-relaxed mb-4 line-clamp-2 flex-1">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.techStack.map((tech, i) => (
            <span
              key={tech}
              className={`tag-hover text-[11px] px-2 py-0.5 rounded-md border font-mono ${techPalette[i % techPalette.length]}`}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Separator */}
        <div className="h-px bg-white/[0.08] mb-4" />

        {/* Links */}
        <div className="flex items-center gap-4">
          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-mono font-medium text-slate-300 hover:text-[#00ff9d] transition-all duration-200 group/link"
            >
              <svg className="w-4 h-4 transition-transform group-hover/link:scale-110" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
              {project.stars && (
                <span className="text-amber-400 font-mono">★ {project.stars}</span>
              )}
            </Link>
          )}
          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto flex items-center gap-1.5 text-xs font-mono font-medium text-[#00ff9d] hover:text-cyan-400 transition-all duration-200 group/link"
            >
              <span>Live Demo</span>
              <svg className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
