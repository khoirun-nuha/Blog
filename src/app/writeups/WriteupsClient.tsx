"use client";

import { useState, useMemo } from "react";
import { Writeup, ALL_CATEGORIES } from "@/data/writeups";
import WriteupCard from "@/components/WriteupCard";

const categoryIcons: Record<string, string> = {
  All: "⚡",
  "CTF Competition": "🚩",
  "LKS Cyber Security": "🛡️",
  "Web Exploitation": "🌐",
  Forensics: "🔬",
  "Reverse Engineering": "⚙️",
  Cryptography: "🔐",
  Misc: "🎯",
};

const difficultyConfig: Record<string, { label: string; active: string; dot: string }> = {
  All:    { label: "Semua",  active: "bg-[#00ff9d]/20 text-[#00ff9d] border-[#00ff9d]/50 shadow-[0_0_12px_rgba(0,255,157,0.3)]", dot: "" },
  Easy:   { label: "Easy",   active: "bg-emerald-400/20 text-emerald-400 border-emerald-400/50 shadow-[0_0_12px_rgba(52,211,153,0.3)]", dot: "bg-emerald-400" },
  Medium: { label: "Medium", active: "bg-amber-400/20 text-amber-400 border-amber-400/50 shadow-[0_0_12px_rgba(251,191,36,0.3)]", dot: "bg-amber-400" },
  Hard:   { label: "Hard",   active: "bg-orange-400/20 text-orange-400 border-orange-400/50 shadow-[0_0_12px_rgba(251,146,60,0.3)]", dot: "bg-orange-400" },
  Insane: { label: "Insane", active: "bg-red-400/20 text-red-400 border-red-400/50 shadow-[0_0_12px_rgba(248,113,113,0.3)]", dot: "bg-red-400" },
};

export default function WriteupsClient({ writeups }: { writeups: Writeup[] }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeDiff, setActiveDiff]         = useState("All");
  const [search, setSearch]                 = useState("");

  const countByCategory = useMemo(() => {
    const m: Record<string, number> = { All: writeups.length };
    writeups.forEach((w) => { m[w.category] = (m[w.category] || 0) + 1; });
    return m;
  }, [writeups]);

  const filtered = useMemo(() =>
    writeups.filter((w) => {
      const matchCat  = activeCategory === "All" || w.category === activeCategory;
      const matchDiff = activeDiff === "All"     || w.difficulty === activeDiff;
      const q = search.toLowerCase();
      const matchQ = !q || w.title.toLowerCase().includes(q) || w.excerpt.toLowerCase().includes(q)
        || w.tags.some((t) => t.toLowerCase().includes(q))
        || (w.event?.toLowerCase().includes(q) ?? false);
      return matchCat && matchDiff && matchQ;
    }),
  [writeups, activeCategory, activeDiff, search]);

  const hasFilters = activeCategory !== "All" || activeDiff !== "All" || !!search;

  return (
    <div>
      {/* Hacker Search Bar */}
      <div className="relative mb-5 font-mono">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#00ff9d] text-sm pointer-events-none select-none">
          $&gt;
        </span>
        <input
          id="writeup-search"
          type="text"
          placeholder="grep -i 'cari judul, event, kategori, tag'..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-11 pr-10 py-3.5 bg-[#050914] border border-[#00ff9d]/25 rounded-2xl text-sm font-mono text-white placeholder-slate-500 focus:outline-none focus:border-[#00ff9d] focus:shadow-[0_0_20px_rgba(0,255,157,0.25)] transition-all duration-200"
        />
        {search && (
          <button
            onClick={() => setSearch("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-lg text-slate-400 hover:text-white transition-all duration-200 hover:scale-110"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {/* Category tabs */}
      <div className="flex flex-wrap gap-2 mb-4 font-mono">
        {ALL_CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat;
          const count    = countByCategory[cat] ?? 0;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs tracking-wider uppercase border transition-all duration-200 hover:-translate-y-0.5 ${
                isActive
                  ? "bg-[#00ff9d]/15 border-[#00ff9d]/50 text-[#00ff9d] shadow-[0_0_15px_rgba(0,255,157,0.2)] font-bold"
                  : "bg-[#070c16] border-white/[0.08] text-slate-400 hover:border-[#00ff9d]/30 hover:text-white"
              }`}
            >
              <span>{categoryIcons[cat]}</span>
              <span>{cat === "All" ? "Semua Kategori" : cat}</span>
              <span className={`text-[10px] px-1.5 py-0.5 rounded ${isActive ? "bg-[#00ff9d]/20 text-[#00ff9d]" : "bg-white/[0.05] text-slate-500"}`}>
                [{count}]
              </span>
            </button>
          );
        })}
      </div>

      {/* Difficulty pills */}
      <div className="flex flex-wrap items-center gap-2 mb-8 font-mono">
        <span className="text-xs text-slate-400 tracking-wider font-medium shrink-0">// TINGKAT_KESULITAN:</span>
        {Object.entries(difficultyConfig).map(([d, cfg]) => {
          const isActive = activeDiff === d;
          return (
            <button
              key={d}
              onClick={() => setActiveDiff(d)}
              className={`inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg border font-medium transition-all duration-200 hover:scale-[1.04] ${
                isActive
                  ? cfg.active
                  : "border-white/[0.08] bg-[#070c16] text-slate-400 hover:border-white/20 hover:text-white"
              }`}
            >
              {cfg.dot && <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot}`} />}
              {cfg.label}
            </button>
          );
        })}
      </div>

      {/* Result bar */}
      <div className="flex items-center justify-between mb-7 font-mono">
        <p className="text-xs text-slate-400">
          HASIL_TEMUAN: <span className="text-[#00ff9d] font-bold text-sm">[{filtered.length}]</span>
          {activeCategory !== "All" && <span className="text-cyan-400"> // {activeCategory}</span>}
          {activeDiff !== "All"     && <span className="text-amber-400"> // {difficultyConfig[activeDiff]?.label}</span>}
        </p>
        {hasFilters && (
          <button
            onClick={() => { setActiveCategory("All"); setActiveDiff("All"); setSearch(""); }}
            className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-red-400 transition-all duration-200 hover:scale-[1.04]"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
            reset_filter()
          </button>
        )}
      </div>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((w, i) => (
            <WriteupCard key={w.id} writeup={w} index={i} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-24 text-center font-mono">
          <div className="w-16 h-16 rounded-2xl border border-[#00ff9d]/30 bg-[#070c16] flex items-center justify-center text-3xl mb-4 shadow-[0_0_20px_rgba(0,255,157,0.15)]">
            🔍
          </div>
          <p className="text-base font-semibold text-white mb-1.5">[404] DOKUMEN_TIDAK_DITEMUKAN</p>
          <p className="text-xs text-slate-400">Pencarian tidak menemukan dokumen write-up yang sesuai kriteria.</p>
        </div>
      )}
    </div>
  );
}
