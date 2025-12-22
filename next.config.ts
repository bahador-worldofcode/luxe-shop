import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // این خط باعث میشه عکس‌ها سریع‌تر لود بشن و گیر الکی نده
    unoptimized: true, 
    
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
    ],
  },
};

export default nextConfig;