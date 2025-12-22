"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "چطور می‌توانم سفارشم را پیگیری کنم؟",
    a: "پس از ثبت سفارش، کد رهگیری ۱۰ رقمی برای شما پیامک می‌شود. می‌توانید با وارد کردن این کد در بخش پیگیری سفارش، وضعیت مرسوله را مشاهده کنید."
  },
  {
    q: "هزینه ارسال چقدر است؟",
    a: "برای سفارش‌های بالای ۲ میلیون تومان ارسال رایگان است. برای سفارش‌های کمتر، هزینه ثابت ۵۰،۰۰۰ تومان محاسبه می‌شود."
  },
  {
    q: "آیا امکان پرداخت در محل وجود دارد؟",
    a: "خیر، در حال حاضر تنها امکان پرداخت آنلاین از طریق درگاه بانکی یا کارت به کارت وجود دارد."
  },
  {
    q: "شرایط بازگرداندن کالا چیست؟",
    a: "در صورت وجود هرگونه ایراد فیزیکی یا مغایرت سایز، تا ۷ روز فرصت دارید کالا را با هماهنگی پشتیبانی مرجوع کنید. کالا نباید استفاده شده باشد."
  },
  {
    q: "چقدر طول می‌کشد تا سفارش به دستم برسد؟",
    a: "سفارش‌های تهران ۲۴ تا ۴۸ ساعت و شهرستان‌ها بین ۳ تا ۵ روز کاری تحویل داده می‌شوند."
  }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-gray-50 pb-20 pt-10">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="text-3xl font-bold text-gray-900 text-center mb-4">سوالات متداول</h1>
        <p className="text-gray-500 text-center mb-12">پاسخ به پرسش‌های پرتکرار شما</p>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`bg-white rounded-2xl border transition-all duration-300 ${openIndex === idx ? 'border-blue-600 shadow-md' : 'border-gray-200'}`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-right"
              >
                <span className={`font-bold ${openIndex === idx ? 'text-blue-600' : 'text-gray-900'}`}>{faq.q}</span>
                {openIndex === idx ? <Minus className="text-blue-600" /> : <Plus className="text-gray-400" />}
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="px-6 pb-6 text-gray-500 leading-7 border-t border-gray-100 pt-4">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}