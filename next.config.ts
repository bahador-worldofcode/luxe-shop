import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // 👇 این خط رو اضافه کن. این معجزه می‌کنه!
    // باعث میشه نکست دیگه سمت سرور عکس رو دانلود نکنه و ارور نده.
    unoptimized: true, 
    
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;