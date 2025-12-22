import type { Metadata } from "next";
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

// تنظیمات حرفه‌ای سئو (آپدیت شده)
export const metadata: Metadata = {
  title: {
    template: '%s | لوکس شاپ',
    default: 'لوکس شاپ | مرجع تخصصی پوشاک برند و اکسسوری', // تایتل پیش‌فرض صفحه اصلی
  },
  description: "تجربه‌ای متفاوت از خرید آنلاین. جدیدترین کالکشن‌های لباس مردانه، زنانه و اکسسوری‌های لوکس با ضمانت اصالت کالا و ارسال رایگان.",
  keywords: ["خرید لباس", "فروشگاه اینترنتی لوکس", "کت و شلوار", "لباس زنانه", "اکسسوری", "لوکس شاپ"],
  authors: [{ name: "Luxe Shop Team" }],
  openGraph: {
    title: "لوکس شاپ | استایل خودت رو بساز",
    description: "فروشگاه اینترنتی لوکس شاپ، ارائه دهنده برترین برندهای پوشاک و اکسسوری.",
    type: "website",
    locale: "fa_IR",
  },
  twitter: {
    card: "summary_large_image",
    title: "لوکس شاپ",
    description: "استایل خاص خودت را خلق کن.",
  },
  icons: {
    icon: "/favicon.ico",
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