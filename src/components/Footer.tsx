import Link from "next/link";

const footerLinks = [
  { href: "/", label: "Beranda" },
  { href: "/projects", label: "Proyek" },
  { href: "/writeups", label: "Write-up" },
  { href: "/awards", label: "Prestasi" },
  { href: "/about", label: "Tentang" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#00ff9d]/15 bg-[#02040a] mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2 font-mono font-bold">
            <span className="w-8 h-8 rounded-lg bg-[#00ff9d]/10 border border-[#00ff9d]/30 flex items-center justify-center text-[#00ff9d] text-xs font-black shadow-[0_0_10px_rgba(0,255,157,0.2)]">
              &gt;_
            </span>
            <span className="text-white text-sm">
              <span className="text-[#00ff9d]">root@</span>khoirunnuha
              <span className="text-[#00ff9d] animate-pulse">#_</span>
            </span>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 font-mono text-xs">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-slate-400 hover:text-[#00ff9d] transition-colors duration-200"
              >
                // {link.label}
              </Link>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-xs font-mono text-slate-500">
            [WAKTU_SISTEM: {new Date().getFullYear()}] · HAK CIPTA DILINDUNGI
          </p>
        </div>
      </div>
    </footer>
  );
}
