"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link"; // <--- این خط اضافه شد

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden flex items-center justify-center bg-gray-50">
      
      {/* بک‌گراند نوری */}
      <div className="absolute top-0 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[120px]" />
      <div className="absolute bottom-0 left-0 -z-10 h-[500px] w-[500px] rounded-full bg-purple-500/10 blur-[120px]" />

      <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
        
        {/* متن‌ها */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-right z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-4 inline-block rounded-full bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-600 border border-blue-100">
              کالکشن جدید ۱۴۰۴
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6 text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl leading-tight"
          >
            استایل خاص خودت را <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              خلق کن
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-8 max-w-lg text-lg text-gray-600 leading-8"
          >
            جدیدترین ترندهای دنیای مد و فشن را کشف کنید. ترکیبی از کیفیت بی‌نظیر و طراحی مدرن در کالکشن تابستانه ما منتظر شماست.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            {/* دکمه ۱: لینک به فروشگاه */}
            <Link href="/shop">
              <button className="flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 font-bold text-white transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/30">
                شروع خرید <ArrowLeft className="h-5 w-5" />
              </button>
            </Link>

            {/* دکمه ۲: لینک به دسته‌بندی زنانه (به عنوان گالری) */}
            <Link href="/category/women">
              <button className="rounded-full border border-gray-200 bg-white px-8 py-4 font-bold text-gray-900 transition-all hover:bg-gray-50 hover:border-gray-300">
                مشاهده گالری
              </button>
            </Link>
          </motion.div>
        </div>

        {/* تصویر */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden h-[600px] w-full lg:block"
        >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tl from-blue-200 to-purple-200 opacity-60 blur-2xl transform -rotate-3" />
            <div className="relative h-full w-full overflow-hidden rounded-3xl border border-white shadow-2xl">
                <Image 
                    src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1000&q=80" 
                    alt="مدل لباس"
                    fill
                    className="object-cover"
                    priority
                />
            </div>
        </motion.div>

      </div>
    </section>
  );
}