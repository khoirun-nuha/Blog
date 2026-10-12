import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export for XAMPP compatibility
  // output: 'export',  // uncomment this for static HTML export

  images: {
    unoptimized: true, // for static export
  },

  // Ensure dark mode works with 'class' strategy
  experimental: {},
};

export default nextConfig;
