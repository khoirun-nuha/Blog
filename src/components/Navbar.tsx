"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Beranda", badge: "~" },
  { href: "/projects", label: "Proyek", badge: "01" },
  { href: "/writeups", label: "Write-up", badge: "02" },
  { href: "/awards", label: "Prestasi", badge: "03" },
  { href: "/about", label: "Tentang", badge: "04" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#030712]/85 backdrop-blur-xl border-b border-[#00ff9d]/15 shadow-[0_8px_30px_rgba(0,0,0,0.7)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Hacker Terminal Logo */}
        <Link
          href="/"
          className="group flex items-center gap-2 font-mono text-sm tracking-tight"
        >
          <div className="w-8 h-8 rounded-lg bg-[#00ff9d]/10 border border-[#00ff9d]/30 flex items-center justify-center text-[#00ff9d] text-xs font-bold transition-all duration-300 group-hover:scale-110 group-hover:border-[#00ff9d] group-hover:shadow-[0_0_15px_rgba(0,255,157,0.4)]">
            &gt;_
          </div>
          <span className="font-bold text-white transition-colors">
            <span className="text-[#00ff9d]">root@</span>khoirunnuha
            <span className="text-[#00ff9d] cursor-blink">#_</span>
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-1 font-mono">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-3.5 py-1.5 rounded-lg text-xs tracking-wider uppercase transition-all duration-200 group ${
                  isActive
                    ? "text-[#00ff9d] bg-[#00ff9d]/10 border border-[#00ff9d]/30 shadow-[0_0_15px_rgba(0,255,157,0.15)]"
                    : "text-slate-400 hover:text-white hover:bg-white/[0.04] border border-transparent"
                }`}
              >
                <span className="text-[#00ff9d]/50 mr-1.5 text-[10px]">[{link.badge}]</span>
                <span>{link.label}</span>
                {!isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#00ff9d] rounded-full transition-all duration-300 group-hover:w-3/4 shadow-[0_0_6px_#00ff9d]" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Status Indicator & Mobile Toggle */}
        <div className="flex items-center gap-3">
          {/* Cyber Status Badge */}
          <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00ff9d]/10 border border-[#00ff9d]/25 text-[#00ff9d] font-mono text-[11px]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ff9d] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00ff9d]" />
            </span>
            <span className="tracking-wide">STATUS: ONLINE</span>
          </div>

          {/* Hamburger (Mobile) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2.5 rounded-lg bg-[#070c16] border border-[#00ff9d]/20 hover:border-[#00ff9d]/50 text-slate-300 hover:text-[#00ff9d] transition-all duration-200"
            aria-label="Toggle menu"
          >
            <div className="w-4 h-3 flex flex-col justify-between">
              <span
                className={`block h-0.5 bg-current rounded transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`}
              />
              <span
                className={`block h-0.5 bg-current rounded transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`}
              />
              <span
                className={`block h-0.5 bg-current rounded transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#030712]/95 backdrop-blur-xl border-b border-[#00ff9d]/15 px-4 pb-4 pt-2 space-y-1 font-mono text-xs">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`flex items-center justify-between px-4 py-2.5 rounded-lg transition-all duration-200 ${
                  isActive
                    ? "bg-[#00ff9d]/10 text-[#00ff9d] border border-[#00ff9d]/30"
                    : "text-slate-400 hover:bg-white/[0.04] hover:text-white"
                }`}
              >
                <span>{link.label}</span>
                <span className="text-[#00ff9d]/50 text-[10px]">[{link.badge}]</span>
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
}
