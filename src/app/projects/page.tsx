import type { Metadata } from "next";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Projects",
  description: "Koleksi perkakas keamanan siber, skrip eksploitasi, dan platform aplikasi web yang saya bangun.",
};

const categoryMeta: Record<string, { label: string; emoji: string; desc: string }> = {
  security: { label: "Keamanan Siber & Eksploitasi", emoji: "🔐", desc: "Perkakas ofensif, scanner kerentanan, dan framework keamanan siber" },
  tool:     { label: "Utilitas Pengembang",          emoji: "⚙️", desc: "Automasi CLI, skrip otomasi, dan tool produktivitas" },
  web:      { label: "Aplikasi Web",                 emoji: "🌐", desc: "Aplikasi interaktif, sistem informasi, dan platform digital" },
  mobile:   { label: "Keamanan Mobile",              emoji: "📱", desc: "Perkakas pengujian dan audit keamanan mobile" },
  other:    { label: "Eksperimen Lainnya",            emoji: "🛠️", desc: "Prototipe eksperimental dan proof-of-concept" },
};

const categoryOrder = ["security", "tool", "web", "mobile", "other"] as const;

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* ── Hero header ── */}
      <div className="relative overflow-hidden border-b border-[#00ff9d]/15 bg-[#040813]">
        <div className="absolute inset-0 bg-cyber-grid opacity-50" />
        <div className="absolute top-0 right-1/4 w-96 h-64 bg-[#00ff9d]/8 blur-3xl rounded-full pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#00ff9d]/30 bg-[#00ff9d]/10 text-[#00ff9d] text-xs font-mono mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00ff9d] animate-pulse" />
              <span>// 0x01_PUBLIC_REPOSITORIES</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight font-mono">
              Arsenil <span className="gradient-hacker">Proyek & Aplikasi</span>
            </h1>
            <p className="text-slate-300 max-w-xl text-sm sm:text-base leading-relaxed mb-8">
              Koleksi perkakas keamanan siber open-source, skrip CTF, dan platform aplikasi web yang dibangun dengan arsitektur bersih, terstruktur, dan terbuka di GitHub.
            </p>

            {/* Category quick-jump */}
            <div className="flex flex-wrap gap-2">
              {categoryOrder.map((cat) => {
                const meta = categoryMeta[cat];
                const count = projects.filter((p) => p.category === cat).length;
                if (count === 0) return null;
                return (
                  <a
                    key={cat}
                    href={`#cat-${cat}`}
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl border border-white/[0.08] bg-[#070c16] text-xs font-mono text-slate-300 hover:border-[#00ff9d]/50 hover:text-[#00ff9d] hover:shadow-[0_0_15px_rgba(0,255,157,0.2)] transition-all duration-200 hover:-translate-y-0.5"
                  >
                    <span>{meta.emoji}</span>
                    <span>{meta.label}</span>
                    <span className="text-[#00ff9d]/60 font-semibold">[{count}]</span>
                  </a>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>

      {/* ── Project sections ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-16">
        {categoryOrder.map((cat) => {
          const filtered = projects.filter((p) => p.category === cat);
          if (filtered.length === 0) return null;
          const meta = categoryMeta[cat];
          return (
            <section key={cat} id={`cat-${cat}`}>
              <Reveal>
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-2xl p-2 rounded-xl bg-white/[0.03] border border-white/[0.08]">{meta.emoji}</span>
                  <div>
                    <h2 className="text-xl font-bold text-white font-mono capitalize">
                      {meta.label}
                    </h2>
                    <p className="text-xs text-slate-400">{meta.desc}</p>
                  </div>
                  <div className="ml-auto h-px flex-1 max-w-40 bg-gradient-to-r from-[#00ff9d]/30 to-transparent" />
                  <span className="text-xs text-[#00ff9d] font-mono shrink-0">
                    [{filtered.length} REPOS]
                  </span>
                </div>
              </Reveal>

              <Reveal variant="group">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filtered.map((project, i) => (
                    <ProjectCard key={project.id} project={project} index={i} />
                  ))}
                </div>
              </Reveal>
            </section>
          );
        })}
      </div>
    </div>
  );
}
