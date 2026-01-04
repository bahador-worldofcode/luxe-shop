"use client";

import { Instagram, Twitter, Linkedin, MapPin, Phone, Mail, Send, Code2, Heart, Library } from "lucide-react"; // آیکون Library اضافه شد
import Link from "next/link";
import Logo from "@/components/Logo";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 pt-20 pb-10">
      <div className="container mx-auto px-6">
        
        {/* ----------------------------------------------------------- */}
        {/* بخش بالایی: خبرنامه و اطلاعات برند */}
        {/* ----------------------------------------------------------- */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-20">
          
          {/* ستون ۱ و ۲: لوگو و توضیح */}
          <div className="lg:col-span-2 space-y-8">
            <Link href="/">
              <Logo />
            </Link>
            <p className="text-gray-500 leading-7 text-justify max-w-md">
              لوکس شاپ، نمادی از اصالت و زیبایی. ما اینجا هستیم تا با ارائه برترین برندهای پوشاک، استایل شما را به سطح جدیدی ارتقا دهیم.
            </p>
            
            {/* باکس خبرنامه */}
            <div className="bg-gray-50 p-2 rounded-2xl border border-gray-200 flex items-center max-w-md">
              <div className="bg-white p-2 rounded-xl text-gray-400">
                <Mail className="h-5 w-5" />
              </div>
              <input 
                placeholder="ایمیل خود را وارد کنید..." 
                className="bg-transparent border-none outline-none text-sm w-full px-3 text-gray-700 placeholder:text-gray-400"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-xl transition-colors shadow-lg shadow-blue-600/20">
                <Send className="h-4 w-4 -rotate-90" />
              </button>
            </div>
          </div>

          {/* ستون ۳: لینک‌های فروشگاه */}
          <div>
            <h3 className="text-gray-900 font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-blue-600 rounded-full"></span>
              فروشگاه
            </h3>
            <ul className="space-y-4">
              <li><Link href="/shop" className="text-gray-500 hover:text-blue-600 hover:translate-x-1 transition-all inline-block">همه محصولات</Link></li>
              <li><Link href="/category/men" className="text-gray-500 hover:text-blue-600 hover:translate-x-1 transition-all inline-block">مردانه</Link></li>
              <li><Link href="/category/women" className="text-gray-500 hover:text-blue-600 hover:translate-x-1 transition-all inline-block">زنانه</Link></li>
              <li><Link href="/category/accessories" className="text-gray-500 hover:text-blue-600 hover:translate-x-1 transition-all inline-block">اکسسوری</Link></li>
            </ul>
          </div>

          {/* ستون ۴: لینک‌های مفید */}
          <div>
            <h3 className="text-gray-900 font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-blue-600 rounded-full"></span>
              خدمات مشتریان
            </h3>
            <ul className="space-y-4">
              <li><Link href="/faq" className="text-gray-500 hover:text-blue-600 hover:translate-x-1 transition-all inline-block">سوالات متداول</Link></li>
              <li><Link href="/terms" className="text-gray-500 hover:text-blue-600 hover:translate-x-1 transition-all inline-block">قوانین و مقررات</Link></li>
              <li><Link href="/contact" className="text-gray-500 hover:text-blue-600 hover:translate-x-1 transition-all inline-block">تماس با ما</Link></li>
              <li><Link href="/about" className="text-gray-500 hover:text-blue-600 hover:translate-x-1 transition-all inline-block">درباره ما</Link></li>
            </ul>
          </div>

          {/* ستون ۵: اطلاعات تماس */}
          <div>
            <h3 className="text-gray-900 font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-blue-600 rounded-full"></span>
              ارتباط با ما
            </h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-3 text-gray-500">
                <MapPin className="h-6 w-6 text-blue-600 shrink-0" />
                <span className="text-sm leading-6">تهران، جردن، برج تجارت جهانی، طبقه ۲۴</span>
              </li>
              <li className="flex items-center gap-3 text-gray-500">
                <Phone className="h-5 w-5 text-blue-600 shrink-0" />
                <span dir="ltr" className="font-bold">021 - 88 77 66 55</span>
              </li>
            </ul>
          </div>
        </div>

        {/* ----------------------------------------------------------- */}
        {/* بخش پایینی: کپی‌رایت و امضای سازنده (KiyaDev Branding) */}
        {/* ----------------------------------------------------------- */}
        <div className="border-t border-gray-100 pt-8 flex flex-col-reverse md:flex-row items-center justify-between gap-6">
          
          {/* سمت راست: کپی‌رایت فروشگاه */}
          <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-right">
            <p className="text-gray-500 text-sm">
              تمامی حقوق محفوظ است © ۱۴۰۴ <span className="font-bold text-gray-900">لوکس شاپ</span>
            </p>
          </div>

          {/* سمت چپ: امضاها و لینک شبکه همکاران */}
          <div className="flex items-center gap-3">
            
            {/* ۱. دکمه شبکه همکاران (لینک مخفی) */}
            <Link 
              href="/partners"
              title="شبکه همکاران تجاری"
              className="h-12 w-12 bg-gray-50 hover:bg-blue-50 border border-gray-100 hover:border-blue-200 rounded-xl flex items-center justify-center text-gray-400 hover:text-blue-600 transition-all duration-300"
            >
               <Library className="h-5 w-5" />
            </Link>

            {/* ۲. امضای کیا دِو */}
            <a 
              href="https://kiyadev.ir" 
              target="_blank"
              className="group flex items-center gap-3 bg-gray-50 hover:bg-slate-900 border border-gray-100 px-4 py-2 rounded-xl transition-all duration-300 h-12"
            >
              <div className="flex flex-col items-end">
                <span className="text-[10px] text-gray-400 font-medium group-hover:text-gray-300">
                  Design & Engineering by
                </span>
                <span className="text-xs font-bold text-gray-700 group-hover:text-white flex items-center gap-1">
                  KiyaDev Team
                  <Code2 className="h-3 w-3 text-blue-500" />
                </span>
              </div>
              
              <div className="h-8 w-8 bg-white group-hover:bg-blue-600 rounded-lg flex items-center justify-center shadow-sm transition-colors">
                 <Heart className="h-4 w-4 text-gray-400 group-hover:text-white fill-current transition-colors" />
              </div>
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}