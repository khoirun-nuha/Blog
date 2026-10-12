"use client";

import { useState, useMemo } from "react";
import { Award } from "@/data/awards";
import AwardCard from "@/components/AwardCard";

interface AwardsClientProps {
  awards: Award[];
}

export default function AwardsClient({ awards }: AwardsClientProps) {
  const [selectedYear, setSelectedYear] = useState<string>("All");

  // Extract distinct years sorted descending
  const years = useMemo(() => {
    const set = new Set(awards.map((a) => a.year));
    return Array.from(set).sort((a, b) => b - a);
  }, [awards]);

  // Count per year
  const countByYear = useMemo(() => {
    const counts: Record<string, number> = { All: awards.length };
    awards.forEach((a) => {
      counts[a.year] = (counts[a.year] || 0) + 1;
    });
    return counts;
  }, [awards]);

  // Filter awards based on selected year
  const filteredAwards = useMemo(() => {
    if (selectedYear === "All") return awards;
    return awards.filter((a) => a.year === Number(selectedYear));
  }, [awards, selectedYear]);

  return (
    <div>
      {/* ── Year Filter Bar ── */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-[#00ff9d]/15 font-mono">
        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-400 tracking-wider">// FILTER_TAHUN:</span>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedYear("All")}
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs uppercase tracking-wider border transition-all duration-200 hover:-translate-y-0.5 ${
                selectedYear === "All"
                  ? "bg-[#00ff9d]/15 border-[#00ff9d]/50 text-[#00ff9d] shadow-[0_0_15px_rgba(0,255,157,0.25)] font-bold"
                  : "bg-[#070c16] border-white/[0.08] text-slate-400 hover:border-[#00ff9d]/30 hover:text-white"
              }`}
            >
              <span>Semua Tahun</span>
              <span className={`text-[10px] px-1.5 py-0.5 rounded ${selectedYear === "All" ? "bg-[#00ff9d]/20 text-[#00ff9d]" : "bg-white/[0.05] text-slate-500"}`}>
                [{countByYear.All}]
              </span>
            </button>

            {years.map((year) => {
              const isSelected = selectedYear === String(year);
              const count = countByYear[year] || 0;
              return (
                <button
                  key={year}
                  onClick={() => setSelectedYear(String(year))}
                  className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs uppercase tracking-wider border transition-all duration-200 hover:-translate-y-0.5 ${
                    isSelected
                      ? "bg-[#00ff9d]/15 border-[#00ff9d]/50 text-[#00ff9d] shadow-[0_0_15px_rgba(0,255,157,0.25)] font-bold"
                      : "bg-[#070c16] border-white/[0.08] text-slate-400 hover:border-[#00ff9d]/30 hover:text-white"
                  }`}
                >
                  <span>{year}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded ${isSelected ? "bg-[#00ff9d]/20 text-[#00ff9d]" : "bg-white/[0.05] text-slate-500"}`}>
                    [{count}]
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Counter Info */}
        <p className="text-xs text-slate-400">
          STATUS: <span className="text-[#00ff9d] font-bold text-sm">[{filteredAwards.length}]</span> AWARDS
          {selectedYear !== "All" && (
            <span className="text-amber-400"> // TAHUN {selectedYear}</span>
          )}
        </p>
      </div>

      {/* ── Unified Awards Grid ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAwards.map((award, i) => (
          <AwardCard key={award.id} award={award} index={i} />
        ))}
      </div>
    </div>
  );
}
