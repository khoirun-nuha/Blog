export interface Award {
  id: string;
  title: string;
  organizer: string;
  year: number;
  description: string;
  category: "ctf" | "hackathon" | "certification" | "competition" | "recognition";
  placement?: string;
  badge?: string; // label badge
  certificateUrl?: string;
  featured: boolean;
}

export const awards: Award[] = [
  {
    id: "ctf-itfair-2026",
    title: "Juara 1 — CTF IT-FAIR 2026",
    organizer: "UIN Sunan Gunung Djati Bandung",
    year: 2026,
    description:
      "Kompetisi Capture The Flag (CTF) bidang cybersecurity tingkat nasional yang diselenggarakan oleh UIN Bandung. Berhasil memecahkan berbagai tantangan exploit dan meraih Juara 1 Nasional.",
    category: "ctf",
    placement: "🥇 Juara 1 (1st Place)",
    badge: "Tingkat Nasional",
    certificateUrl: "#",
    featured: true,
  },
  {
    id: "apl-ctf-2026",
    title: "Juara 2 — APL CTF 2026",
    organizer: "APL Cyber Security Competition",
    year: 2026,
    description:
      "Kompetisi Capture The Flag (CTF) bidang keamanan siber APL CTF 2026. Berhasil menyelesaikan rangkaian tantangan eksploitasi sistem dan pertahanan digital hingga meraih posisi Juara 2 Nasional.",
    category: "ctf",
    placement: "🥈 Juara 2 (2nd Place)",
    badge: "Tingkat Nasional",
    certificateUrl: "https://drive.google.com/file/d/1JKnqWvMRTwiwI9VI9hI4BZA3ALdKySAf/view?usp=sharing",
    featured: true,
  },
  {
    id: "fitcomp-2025",
    title: "Finalis — Cyber Security FITCOMP 3.0",
    organizer: "Universitas Dinamika Surabaya",
    year: 2025,
    description:
      "Kompetisi Cyber Security tingkat nasional yang diselenggarakan oleh Universitas Dinamika Surabaya. Berhasil lolos seleksi ketat dan melaju ke babak Final kompetisi.",
    category: "competition",
    placement: "🏆 Top Finalist",
    badge: "Tingkat Nasional",
    certificateUrl: "#",
    featured: true,
  },
  {
    id: "lks-jatim-2026",
    title: "Medallion for Excellence — LKS DIKMEN Cyber Security",
    organizer: "Dinas Pendidikan Provinsi Jawa Timur",
    year: 2026,
    description:
      "Lomba Kompetensi Siswa (LKS) DIKMEN bidang Cyber Security Tingkat Provinsi Jawa Timur. Meraih Medallion for Excellence atas pencapaian standar performa teknis di atas rata-rata.",
    category: "competition",
    placement: "🎖️ Medallion for Excellence",
    badge: "Tingkat Provinsi Jatim",
    certificateUrl: "#",
    featured: true,
  },
  {
    id: "jatim-csc-2025",
    title: "Finalis — Jatim Cyber Security Competition",
    organizer: "Diskominfo Provinsi Jawa Timur",
    year: 2025,
    description:
      "Kompetisi keamanan siber tingkat Provinsi Jawa Timur yang diselenggarakan oleh Dinas Komunikasi dan Informatika (Diskominfo) Jawa Timur dalam pengujian ketahanan dan analisis kerentanan.",
    category: "ctf",
    placement: "🏅 Finalis Provinsi",
    badge: "Tingkat Provinsi Jatim",
    certificateUrl: "#",
    featured: true,
  },
  {
    id: "lks-tuban-2026",
    title: "Juara 2 — LKS DIKMEN Cyber Security",
    organizer: "LKS DIKMEN Kabupaten Tuban",
    year: 2026,
    description:
      "Lomba Kompetensi Siswa (LKS) DIKMEN bidang Cyber Security Tingkat Kabupaten Tuban. Berhasil meraih Juara 2 dan melaju sebagai perwakilan ke tingkat Provinsi Jawa Timur.",
    category: "competition",
    placement: "🥈 Juara 2 (2nd Place)",
    badge: "Tingkat Kab. Tuban",
    certificateUrl: "#",
    featured: true,
  },
  {
    id: "junior-hacker-2025",
    title: "Juara 1 — Junior Hacker 2025",
    organizer: "Diskominfo Kabupaten Tuban",
    year: 2025,
    description:
      "Kompetisi keamanan siber dan etika peretasan Junior Hacker tingkat Kabupaten Tuban yang diselenggarakan oleh Diskominfo Kabupaten Tuban. Berhasil meraih Juara 1.",
    category: "ctf",
    placement: "🥇 Juara 1 (1st Place)",
    badge: "Tingkat Kab. Tuban",
    certificateUrl: "#",
    featured: true,
  },
];
