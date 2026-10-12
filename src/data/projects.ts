export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  techStack: string[];
  category: "security" | "tool" | "web" | "mobile" | "other";
  githubUrl?: string;
  liveUrl?: string;
  stars?: number;
  featured: boolean;
  image?: string;
  year: number;
}

export const projects: Project[] = [
  {
    id: "passwordcheker",
    title: "Passwordcheker",
    description:
      "Tools keamanan siber untuk mengecek kekuatan password, generate password acak, enkripsi password, dan dekripsi password.",
    longDescription:
      "Aplikasi keamanan password berbasis Python dengan kemampuan analisis entropi & kekuatan kata sandi, auto-generator password kompleks, serta implementasi algoritma kriptografi untuk enkripsi dan dekripsi password secara aman.",
    techStack: ["Python", "Cryptography", "Hashing", "Security CLI"],
    category: "security",
    githubUrl: "https://github.com/khoirun-nuha/Passwordcheker",
    featured: true,
    year: 2026,
  },
  {
    id: "buku-tamu-cli",
    title: "BUKU-TAMU-CLI",
    description:
      "Buku tamu berbentuk CLI dengan antarmuka yang sederhana, interaktif, dan minimalis berbasis Python.",
    longDescription:
      "Sistem pencatatan buku tamu interaktif berbasis Command Line Interface (CLI). Didesain dengan alur input efisien, tampilan terminal yang bersih, dan manajemen data pengunjung yang terstruktur.",
    techStack: ["Python", "CLI", "Data Management", "Terminal UI"],
    category: "tool",
    githubUrl: "https://github.com/khoirun-nuha/BUKU-TAMU-CLI",
    featured: true,
    year: 2025,
  },
  {
    id: "portfolio-blog",
    title: "Cyber Portfolio & Blog",
    description:
      "Website portofolio & blog pribadi modern dengan tema hacker dark mode, showcase write-up CTF, dan animasi smooth.",
    longDescription:
      "Dibangun menggunakan Next.js App Router, TypeScript, dan Tailwind CSS dengan arsitektur modern, terminal widget interaktif, dan optimasi performa tinggi.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    category: "web",
    githubUrl: "https://github.com/khoirun-nuha",
    featured: true,
    year: 2026,
  },
  {
    id: "perpus",
    title: "E-Perpustakaan Digital",
    description:
      "Sistem informasi perpustakaan digital interaktif berbasis PHP & MySQL untuk katalog buku dan manajemen peminjaman.",
    longDescription:
      "Aplikasi perpustakaan digital interaktif yang dirancang dengan antarmuka mulus dan responsif. Memudahkan katalogisasi buku, registrasi anggota, histori peminjaman & pengembalian, serta pencatatan sirkulasi perpustakaan secara rapi.",
    techStack: ["PHP", "MySQL", "JavaScript", "Bootstrap", "Web App"],
    category: "web",
    githubUrl: "https://github.com/khoirun-nuha/perpus",
    liveUrl: "http://nuha.merak.web.id/perpus",
    featured: true,
    year: 2026,
  },
  {
    id: "apkekstra",
    title: "E-Ekskul SMKN 3 Tuban",
    description:
      "Aplikasi web pendaftaran dan manajemen kegiatan ekstrakurikuler sekolah dengan galeri kegiatan terpadu.",
    longDescription:
      "Sistem Informasi Ekstrakurikuler sekolah berbasis PHP untuk memfasilitasi siswa dalam mengeksplorasi minat dan bakat, melakukan pendaftaran online ke berbagai ekskul (Basket, Futsal, Paskibraka, PMR, Voli), serta dashboard admin untuk mengelola calon anggota.",
    techStack: ["PHP", "MySQL", "Bootstrap", "CSS3", "Web App"],
    category: "web",
    githubUrl: "https://github.com/khoirun-nuha/apkekstra",
    liveUrl: "http://nuha.merak.web.id/apkekstra",
    featured: true,
    year: 2026,
  },
  {
    id: "pinjamyuk",
    title: "PinjamYuk",
    description:
      "Aplikasi peminjaman sarana dan fasilitas berbasis web dengan alur pengajuan dan tracking status terstruktur.",
    longDescription:
      "Platform web manajemen peminjaman sarana dan inventaris barang sekolah/organisasi berbasis PHP & MySQL. Dilengkapi UI modern dengan Bootstrap 5, animasi interaktif, alur verifikasi pengajuan, dan tracking status pengembalian barang secara real-time.",
    techStack: ["PHP", "MySQL", "Bootstrap 5", "SweetAlert", "JavaScript"],
    category: "web",
    githubUrl: "https://github.com/khoirun-nuha/pinjamyuk",
    liveUrl: "http://nuha.merak.web.id/pinjamyuk",
    featured: true,
    year: 2026,
  },
];
