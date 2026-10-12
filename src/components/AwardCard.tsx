import { Award } from "@/data/awards";
import Link from "next/link";

interface AwardCardProps {
  award: Award;
  index?: number;
}

export default function AwardCard({ award, index = 0 }: AwardCardProps) {
  // Level badge styling based on scope (Nasional vs Provinsi vs Kabupaten)
  const isNasional = award.badge?.toLowerCase().includes("nasional");
  const isProvinsi = award.badge?.toLowerCase().includes("provinsi");

  const badgeStyle = isNasional
    ? "text-amber-400 bg-amber-500/10 border-amber-500/30"
    : isProvinsi
      ? "text-cyan-400 bg-cyan-500/10 border-cyan-500/30"
      : "text-[#00ff9d] bg-[#00ff9d]/10 border-[#00ff9d]/30";

  return (
    <div
      className="card-cyber group flex flex-col p-6"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {/* Inner ambient glow on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-500/[0.08] to-[#00ff9d]/[0.05] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="relative flex flex-col flex-1">
        {/* Top row: Icon, Organizer, Scope Badge */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-xl transition-all duration-300 group-hover:scale-110 group-hover:border-amber-500/50 group-hover:shadow-[0_0_15px_rgba(245,158,11,0.25)]">
              🏆
            </div>
            <div>
              <p className="text-xs text-slate-400 font-mono leading-tight">{award.organizer}</p>
              <p className="text-xs text-amber-400/80 font-mono font-semibold">TAHUN {award.year}</p>
            </div>
          </div>
          {award.badge && (
            <span className={`shrink-0 text-[11px] px-2.5 py-1 rounded-full border font-mono font-medium ${badgeStyle}`}>
              {award.badge}
            </span>
          )}
        </div>

        {/* Placement Highlight */}
        {award.placement && (
          <p className="text-sm font-bold font-mono text-amber-400 mb-2 transition-all duration-300 group-hover:translate-x-1 flex items-center gap-1.5">
            <span className="text-xs text-amber-400/60">//</span>
            <span>{award.placement}</span>
          </p>
        )}

        {/* Title */}
        <h3 className="font-semibold text-white text-[15px] leading-snug mb-3 group-hover:text-[#00ff9d] transition-colors duration-200">
          {award.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-slate-300 leading-relaxed line-clamp-3 flex-1 mb-5">
          {award.description}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-white/[0.08]">
          <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00ff9d] animate-pulse" />
            <span>PRESTASI_TERVERIFIKASI</span>
          </span>
        </div>
      </div>
    </div>
  );
}
