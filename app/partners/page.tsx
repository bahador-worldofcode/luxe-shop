"use client";

import { 
  ExternalLink, 
  ShoppingBag, 
  Truck, 
  Gem, 
  Briefcase, 
  Network, 
  Bitcoin, 
  ArrowRight,
  Zap,
  Bot,
  LayoutDashboard,
  Code2 // آیکون کیا دِو
} from "lucide-react";
import Link from "next/link";

// لیست کامل ۸ همکار تجاری و پروژه (بدون لوکس شاپ)
const partners = [
  // 1. Tivan Ex
  {
    id: 1,
    title: "صرافی تیوان اکس | TivanEx",
    description: "پلتفرم معاملاتی نسل ۳ با امنیت سایبری در کلاس جهانی. خرید و فروش آنی بیت‌کوین و تتر با موتور مچینگ فراصوت و کیف پول سرد.",
    features: ["بلاکچین و Web3", "امنیت بانکی", "تراکنش آنی"],
    url: "https://tivan-ex.vercel.app", 
    icon: Bitcoin,
    color: "text-emerald-600",
    bgIcon: "bg-emerald-50",
    borderColor: "group-hover:border-emerald-500/50",
    glow: "group-hover:shadow-emerald-500/20"
  },
  // 2. Nexus Solana
  {
    id: 2,
    title: "نکسوس سولانا | توکن‌ساز",
    description: "اولین پلتفرم No-Code ساخت توکن روی شبکه سولانا. ایجاد ارز دیجیتال شخصی و میم‌کوین در کمتر از ۱ دقیقه با هزینه ناچیز و امنیت بلاکچینی.",
    features: ["ساخت توکن SPL", "شبکه پرسرعت سولانا", "بدون کدنویسی"],
    url: "https://nexus-solana-taupe.vercel.app",
    icon: Zap,
    color: "text-fuchsia-600",
    bgIcon: "bg-fuchsia-50", 
    borderColor: "group-hover:border-fuchsia-500/50",
    glow: "group-hover:shadow-fuchsia-500/20"
  },
  // 3. Mind Orbit
  {
    id: 3,
    title: "مایند اوربیت | هوش مصنوعی",
    description: "دستیار هوشمند مبتنی بر مدل‌های پیشرفته زبانی (LLM). پاسخگویی به سوالات، تولید محتوا، کدنویسی و حل مسائل پیچیده با پشتیبانی کامل فارسی.",
    features: ["چت‌بات هوشمند", "تولید محتوا و کد", "مدل زبانی Gemini"],
    url: "https://mind-orbit-lyart.vercel.app",
    icon: Bot,
    color: "text-cyan-600",
    bgIcon: "bg-cyan-50",
    borderColor: "group-hover:border-cyan-500/50",
    glow: "group-hover:shadow-cyan-500/20"
  },
  // 4. Alpha System
  {
    id: 4,
    title: "آلفا سیستم | داشبورد مدیریتی",
    description: "سامانه جامع مدیریت منابع سازمانی (ERP). مدیریت هوشمند پرسنل، حقوق و دستمزد، و کنترل پروژه‌ها با ابزارهای بصری و نمودارهای تحلیلی.",
    features: ["پنل مدیریت ERP", "مدیریت پروژه‌ها (Kanban)", "تحلیل داده‌ها"],
    url: "https://alpha-system-eight.vercel.app",
    icon: LayoutDashboard,
    color: "text-orange-600",
    bgIcon: "bg-orange-50",
    borderColor: "group-hover:border-orange-500/50",
    glow: "group-hover:shadow-orange-500/20"
  },
  // 5. Coconut (جایگزین لوکس شاپ شد)
  {
    id: 5,
    title: "فروشگاه آنلاین کوکونات",
    description: "بازار آنلاین میوه و پروتئین شهر پرند. خرید آنلاین تازه‌ترین محصولات با تحویل فوری درب منزل. تجربه‌ای راحت و سریع برای شهروندان.",
    features: ["مارکت‌پلیس محلی", "لجستیک هوشمند", "تحویل فوری"],
    url: "https://cocodelivery.ir", 
    icon: Truck,
    color: "text-green-600",
    bgIcon: "bg-green-50",
    borderColor: "group-hover:border-green-500/50",
    glow: "group-hover:shadow-green-500/20"
  },
  // 6. KiyaDev
  {
    id: 6,
    title: "کیا دِو | امپراتوری نرم‌افزار",
    description: "تیم توسعه‌دهنده نخبه در زمینه طراحی وب‌سایت‌های اختصاصی، اپلیکیشن‌های موبایل (Flutter & React Native)، بلاکچین و هوش مصنوعی.",
    features: ["توسعه دهنده اصلی", "بلاکچین و Web3", "هوش مصنوعی"],
    url: "https://kiyadev.ir", 
    icon: Code2,
    color: "text-blue-600",
    bgIcon: "bg-blue-50",
    borderColor: "group-hover:border-blue-500/50",
    glow: "group-hover:shadow-blue-500/20"
  },
  // 7. Alef Gem
  {
    id: 7,
    title: "گالری جواهرات اَلِف جِم",
    description: "طراحی و ساخت جواهرات دست‌ساز با طلای ۱۸ عیار و سنگ‌های قیمتی اصل. ترکیب هنر مینیمال و مدرن برای خلق آثار ماندگار.",
    features: ["لوکس و فشن", "سنگ‌های قیمتی", "طراحی اختصاصی"],
    url: "https://alefgem.com", 
    icon: Gem,
    color: "text-purple-600",
    bgIcon: "bg-purple-50",
    borderColor: "group-hover:border-purple-500/50",
    glow: "group-hover:shadow-purple-500/20"
  },
  // 8. Soughat Shop
  {
    id: 8,
    title: "سوغات شاپ اینترنشنل",
    description: "اولین پلتفرم ارسال هدیه به ایران با پرداخت ارزی و کریپتو. پل ارتباطی ایرانیان خارج از کشور با عزیزانشان.",
    features: ["پرداخت کریپتو", "فین‌تک فرامرزی", "E-Commerce"],
    url: "https://soughat.shop", 
    icon: ShoppingBag,
    color: "text-rose-600",
    bgIcon: "bg-rose-50",
    borderColor: "group-hover:border-rose-500/50",
    glow: "group-hover:shadow-rose-500/20"
  }
];

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-10 px-4 sm:px-8 relative overflow-hidden font-sans">
      
      {/* پترن پس‌زمینه */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-100/40 rounded-full blur-[80px] pointer-events-none" />
      
      <div className="container mx-auto max-w-5xl relative z-10">
        
        {/* هدر صفحه */}
        <div className="mb-12 text-center md:text-right">
            <Link href="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-blue-600 mb-6 transition-colors text-sm font-medium">
                <ArrowRight className="w-4 h-4" />
                بازگشت به خانه
            </Link>
            <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 flex items-center justify-center md:justify-start gap-3">
                <Network className="text-blue-600 w-8 h-8 md:w-10 md:h-10" />
                شبکه همکاران تجاری
            </h1>
            <p className="text-gray-600 max-w-2xl leading-8 text-lg mx-auto md:mx-0 text-justify">
                لوکس شاپ بخشی از یک اکوسیستم بزرگ دیجیتال است. در اینجا، سایر پلتفرم‌ها و پروژه‌های قدرتمندی که توسط تیم فنی ما توسعه یافته یا با آن‌ها همکاری استراتژیک داریم را معرفی می‌کنیم.
            </p>
        </div>

        {/* گرید کارت‌ها */}
        <div className="grid gap-6 md:grid-cols-2">
          {partners.map((partner) => (
            <a
              key={partner.id}
              href={partner.url}
              target="_blank"
              rel="dofollow" 
              className={`group relative flex flex-col justify-between rounded-3xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${partner.borderColor} ${partner.glow}`}
            >
              <div>
                {/* هدر کارت */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`rounded-2xl p-3 ${partner.bgIcon} ${partner.color}`}>
                    <partner.icon size={28} strokeWidth={1.5} />
                  </div>
                  <div className="rounded-full bg-gray-50 border border-gray-200 px-3 py-1 flex items-center gap-1">
                     <Briefcase size={12} className="text-gray-400" />
                    <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Partner</span>
                  </div>
                </div>

                <h2 className="mb-3 text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {partner.title}
                </h2>
                
                <p className="text-sm leading-7 text-gray-600 mb-6 text-justify">
                  {partner.description}
                </p>

                {/* تگ‌ها */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {partner.features.map((feature, idx) => (
                    <span key={idx} className="text-[11px] bg-gray-50 text-gray-600 border border-gray-200 px-2.5 py-1 rounded-lg font-medium">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* فوتر کارت */}
              <div className="mt-auto border-t border-gray-100 pt-4 flex items-center justify-between">
                <span className={`text-xs font-bold transition-colors ${partner.color}`}>
                  بازدید از وب‌سایت
                </span>
                <div className="flex items-center gap-1 text-gray-400 group-hover:text-gray-600 transition-colors">
                  <span className="text-xs font-mono hidden sm:inline-block dir-ltr">{partner.url.replace('https://', '')}</span>
                  <ExternalLink size={14} />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}