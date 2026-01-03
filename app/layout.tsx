import type { Metadata, Viewport } from "next"; // اضافه شدن Viewport
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import { Toaster } from "sonner";

const vazir = Vazirmatn({
  subsets: ["arabic", "latin"],
  variable: "--font-vazir",
  display: "swap",
});

// تنظیمات آیکون‌ها، متا تگ‌ها و گوگل
export const metadata: Metadata = {
  title: {
    template: '%s | لوکس شاپ',
    default: 'لوکس شاپ | مرجع تخصصی پوشاک برند و اکسسوری',
  },
  description: "تجربه‌ای متفاوت از خرید آنلاین. جدیدترین کالکشن‌های لباس مردانه، زنانه و اکسسوری‌های لوکس با ضمانت اصالت کالا و ارسال رایگان.",
  keywords: ["خرید لباس", "فروشگاه اینترنتی لوکس", "کت و شلوار", "لباس زنانه", "اکسسوری", "لوکس شاپ"],
  authors: [{ name: "Luxe Shop Team" }],
  
  // کد تایید گوگل که قبلا دادید
  verification: {
    google: "8cWMZpAnmbxrh3GnAaleixYIEE5V9B6nhGt2pnh9eKk",
  },

  // 👇 تنظیمات جدید آیکون‌ها و مانیفست 👇
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-icon.png', // آیکون مخصوص اپل
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/apple-icon.png',
    },
  },
  // 👆 پایان تنظیمات آیکون 👆

  openGraph: {
    title: "لوکس شاپ | استایل خودت رو بساز",
    description: "فروشگاه اینترنتی لوکس شاپ، ارائه دهنده برترین برندهای پوشاک و اکسسوری.",
    type: "website",
    locale: "fa_IR",
    siteName: "لوکس شاپ",
  },
  twitter: {
    card: "summary_large_image",
    title: "لوکس شاپ",
    description: "استایل خاص خودت را خلق کن.",
  },
};

// تنظیمات رنگ تم موبایل
export const viewport: Viewport = {
  themeColor: '#ffffff',
};

// 👇 داده‌های ساختار یافته (Structured Data) برای گوگل 👇
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Store", // نوع سایت: فروشگاه
  "name": "لوکس شاپ",
  "url": "https://luxe-shop-ten.vercel.app",
  "logo": "https://luxe-shop-ten.vercel.app/icon-512.png", // لینک لوگوی بزرگ
  "image": "https://luxe-shop-ten.vercel.app/icon-512.png",
  "description": "تجربه‌ای متفاوت از خرید آنلاین پوشاک و اکسسوری.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "جردن، برج تجارت جهانی",
    "addressLocality": "Tehran",
    "addressCountry": "IR"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+98-21-88776655",
    "contactType": "customer service"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazir.className} antialiased bg-gray-50 text-gray-900 pb-16 lg:pb-0`}>
        {/* تزریق داده‌های JSON-LD به صفحه */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        <Header />
        <div className="pt-20 min-h-screen">
          {children}
        </div>
        <Footer />
        <BottomNav />
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}