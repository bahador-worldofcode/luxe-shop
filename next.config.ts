import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* تنظیمات عکس */
  images: {
    /* 
      این خط یعنی: اصلا سعی نکن عکس‌ها رو بهینه کنی. 
      (این باعث میشه فشار از روی سرور ورسل برداشته بشه و عکس‌ها سریع بیان)
    */
    unoptimized: true,

    /* 
       این خط یعنی: "اجازه بده از هر دامنه و سایتی عکس لود بشه"
       (دیگه لازم نیست تک تک اسم سایت‌ها رو بنویسی)
    */
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;