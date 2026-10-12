import { Writeup } from "@/data/writeups";
import Link from "next/link";

const categoryConfig: Record<
  string,
  { color: string; bg: string; border: string; dot: string; glow: string }
> = {
  "CTF Competition": {
    color: "text-[#00ff9d]",
    bg: "bg-[#00ff9d]/10",
    border: "border-[#00ff9d]/30",
    dot: "bg-[#00ff9d]",
    glow: "shadow-[#00ff9d]/20",
  },
  "LKS Cyber Security": {
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/30",
    dot: "bg-amber-400",
    glow: "shadow-amber-500/20",
  },
  "Web Exploitation": {
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/30",
    dot: "bg-cyan-400",
    glow: "shadow-cyan-500/20",
  },
  Forensics: {
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/30",
    dot: "bg-emerald-400",
    glow: "shadow-emerald-500/20",
  },
  "Reverse Engineering": {
    color: "text-orange-400",
    bg: "bg-orange-500/10",
    border: "border-orange-500/30",
    dot: "bg-orange-400",
    glow: "shadow-orange-500/20",
  },
  Cryptography: {
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/30",
    dot: "bg-purple-400",
    glow: "shadow-purple-500/20",
  },
  Dev: {
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/30",
    dot: "bg-blue-400",
    glow: "shadow-blue-500/20",
  },
  Misc: {
    color: "text-pink-400",
    bg: "bg-pink-500/10",
    border: "border-pink-500/30",
    dot: "bg-pink-400",
    glow: "shadow-pink-500/20",
  },
};

const difficultyConfig = {
  Easy:   { label: "Easy",   color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/30" },
  Medium: { label: "Medium", color: "text-amber-400",   bg: "bg-amber-500/10",   border: "border-amber-500/30"   },
  Hard:   { label: "Hard",   color: "text-orange-400",  bg: "bg-orange-500/10",  border: "border-orange-500/30"  },
  Insane: { label: "Insane", color: "text-red-400",     bg: "bg-red-500/10",     border: "border-red-500/30"     },
};

interface WriteupCardProps {
  writeup: Writeup;
  index?: number;
}

export default function WriteupCard({ writeup, index = 0 }: WriteupCardProps) {
  const cat = categoryConfig[writeup.category] ?? categoryConfig["CTF Competition"];
  const diff = difficultyConfig[writeup.difficulty];

  const formattedDate = new Date(writeup.date).toLocaleDateString("id-ID", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <article
      className="card-cyber group relative flex flex-col overflow-hidden"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {/* Top accent bar — animated gradient */}
      <div
        className={`h-[2px] w-full bg-gradient-to-r from-transparent via-current to-transparent ${cat.color} opacity-70 group-hover:opacity-100 transition-opacity duration-500`}
      />

      <div className="relative flex flex-col flex-1 p-6">
        {/* Row 1: Category + Difficulty */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span
            className={`inline-flex items-center gap-1.5 text-xs font-mono font-semibold px-2.5 py-1 rounded-full border ${cat.color} ${cat.bg} ${cat.border}`}
          >
            <span className={`w-1.5 h-1.5 rounded-full ${cat.dot} animate-pulse`} />
            {writeup.category}
          </span>

          <span
            className={`text-xs font-mono font-medium px-2.5 py-0.5 rounded-full border ${diff.color} ${diff.bg} ${diff.border}`}
          >
            {diff.label}
          </span>
        </div>

        {/* Row 2: Title */}
        <h3 className="font-bold text-white text-[16px] leading-snug mb-2 group-hover:text-[#00ff9d] transition-colors duration-200 line-clamp-2">
          {writeup.title}
        </h3>

        {/* Row 3: Event + Date */}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-3 font-mono text-xs">
          {writeup.event && (
            <span className={`font-medium ${cat.color}`}>
              @{writeup.event}
            </span>
          )}
          <span className="text-slate-400">[{formattedDate}]</span>
          {writeup.rank && (
            <span className="text-amber-400 font-medium">🏅 {writeup.rank}</span>
          )}
        </div>

        {/* Row 4: Excerpt */}
        <p className="text-sm text-slate-300 leading-relaxed mb-4 line-clamp-3 flex-1">
          {writeup.excerpt}
        </p>

        {/* Row 5: Stats */}
        {(writeup.points || writeup.solves) && (
          <div className="flex items-center gap-4 mb-4 py-2.5 border-t border-b border-white/[0.08] font-mono text-xs">
            {writeup.points && (
              <div className="flex items-center gap-1.5 text-amber-400">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="font-semibold">{writeup.points} PTS</span>
              </div>
            )}
            {writeup.solves && (
              <div className="flex items-center gap-1.5 text-slate-400">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{writeup.solves} solves</span>
              </div>
            )}
          </div>
        )}

        {/* Row 6: Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {writeup.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 rounded bg-white/[0.04] text-slate-300 font-mono border border-white/[0.08]"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Row 7: CTA */}
        {writeup.pdfUrl && writeup.pdfUrl !== "#" ? (
          <Link
            href={writeup.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cyber-primary mt-auto flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl text-xs font-mono uppercase tracking-wider font-bold"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span>Buka Dokumen Write-up</span>
            <svg className="w-3.5 h-3.5 ml-auto transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        ) : (
          <div className="mt-auto flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl text-xs font-mono border border-dashed border-[#00ff9d]/20 text-slate-400 bg-[#00ff9d]/[0.02]">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            <span>DOKUMEN SEDANG DIPERSIAPKAN</span>
          </div>
        )}
      </div>
    </article>
  );
}
