import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // نکته مهم: خط unoptimized را پاک کردیم تا سرور ورسل واسط شود
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