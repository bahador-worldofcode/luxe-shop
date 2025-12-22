import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PromoBanner() {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-slate-900 px-6 py-16 text-center shadow-2xl sm:px-16 md:py-24 lg:flex lg:items-center lg:justify-between lg:px-20 lg:text-right">
          
          {/* پس‌زمینه تزئینی */}
          <div className="absolute top-0 right-0 -z-10 h-[500px] w-[500px] -translate-y-1/2 translate-x-1/2 rounded-full bg-blue-600/20 blur-[100px]" />
          <div className="absolute bottom-0 left-0 -z-10 h-[500px] w-[500px] translate-y-1/2 -translate-x-1/2 rounded-full bg-purple-600/20 blur-[100px]" />

          <div className="lg:w-2/3">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl mb-6">
              استایل تابستانه خودت رو <br />
              <span className="text-blue-400">با تخفیف‌های ویژه</span> کامل کن!
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-gray-300 lg:mx-0">
              جدیدترین کالکشن‌های فصل با بهترین کیفیت پارچه و دوخت. همین حالا خرید کنید و از ارسال رایگان بهره‌مند شوید.
            </p>
          </div>
          
          <div className="mt-10 lg:mt-0 lg:w-1/3 flex justify-center lg:justify-end">
            <Link 
              href="/shop"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-bold text-slate-900 transition-all hover:bg-blue-50 hover:text-blue-700"
            >
              مشاهده فروشگاه
              <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}