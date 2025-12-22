"use client";

import { useCartStore } from "@/store/cartStore";
import { Trash2, Plus, Minus, ArrowLeft, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function CartPage() {
  const { items, removeItem, addItem, decreaseItem, totalPrice } = useCartStore();
  
  // حل مشکل هیدریشن
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  // اگر سبد خرید خالی بود
  if (items.length === 0) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6">
        <div className="h-24 w-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
            <ShoppingBag className="h-10 w-10 text-gray-400" />
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">سبد خرید شما خالی است</h1>
        <p className="text-gray-500 mb-8">به نظر می‌رسد هنوز چیزی انتخاب نکرده‌اید.</p>
        <Link href="/" className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors">
          بازگشت به فروشگاه
        </Link>
      </div>
    );
  }

  // اگر محصولی در سبد بود
  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <div className="container mx-auto px-6 py-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-8">سبد خرید ({items.length} کالا)</h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* لیست محصولات */}
          <div className="lg:col-span-8 space-y-4">
            {items.map((item) => (
              // فیکس ارور: کلید ترکیبی از آیدی، رنگ و سایز
              <div key={`${item.id}-${item.color}-${item.size}`} className="bg-white p-4 rounded-2xl flex gap-4 border border-gray-100 shadow-sm">
                
                {/* عکس محصول */}
                <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-gray-100 border border-gray-200">
                  <Image src={item.image} alt={item.name} fill className="object-cover" />
                </div>

                {/* جزئیات */}
                <div className="flex flex-1 flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div>
                        <h3 className="font-bold text-gray-900 line-clamp-1">{item.name}</h3>
                        {/* فیکس اطلاعات: نمایش رنگ و سایز واقعی انتخاب شده */}
                        <div className="flex items-center gap-3 mt-2 text-xs text-gray-500">
                          <span className="flex items-center gap-1">
                            رنگ: <span className="font-bold text-gray-800">{item.color}</span>
                          </span>
                          <span className="w-px h-3 bg-gray-300"></span>
                          <span className="flex items-center gap-1">
                            سایز: <span className="font-bold text-gray-800">{item.size}</span>
                          </span>
                        </div>
                    </div>
                    
                    {/* دکمه حذف: ارسال آیدی، رنگ و سایز برای حذف دقیق */}
                    <button 
                        onClick={() => removeItem(item.id, item.color, item.size)}
                        className="text-gray-400 hover:text-red-500 transition-colors p-1"
                    >
                        <Trash2 className="h-5 w-5" />
                    </button>
                  </div>

                  <div className="flex items-end justify-between mt-4">
                    {/* کنترل تعداد */}
                    <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-1 border border-gray-200">
                        {/* دکمه کاهش: ارسال آیدی، رنگ و سایز */}
                        <button 
                            onClick={() => decreaseItem(item.id, item.color, item.size)}
                            disabled={item.quantity === 1}
                            className="p-1 hover:bg-white rounded-md disabled:opacity-30 transition-all"
                        >
                            <Minus className="h-4 w-4 text-gray-600" />
                        </button>
                        
                        <span className="text-sm font-bold w-4 text-center">{item.quantity}</span>
                        
                        {/* دکمه افزایش: ارسال خود آیتم کافیه چون اددآیتم خودش چک میکنه */}
                        <button 
                             onClick={() => addItem(item)}
                             className="p-1 hover:bg-white rounded-md transition-all"
                        >
                            <Plus className="h-4 w-4 text-gray-600" />
                        </button>
                    </div>

                    {/* قیمت (قیمت واحد ضربدر تعداد در محاسبه نهایی انجام میشه، اینجا قیمت واحد رو نشون میدیم یا کل؟ معمولا واحد) */}
                    <div className="font-bold text-gray-900">
                        {item.price} <span className="text-xs font-normal text-gray-500">تومان</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* خلاصه فاکتور */}
          <div className="lg:col-span-4">
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm sticky top-24">
                <h3 className="text-lg font-bold text-gray-900 mb-6">خلاصه سفارش</h3>
                
                <div className="space-y-4 mb-6">
                    <div className="flex justify-between text-gray-600">
                        <span>قیمت کالاها</span>
                        <span>{totalPrice().toLocaleString('fa-IR')} تومان</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                        <span>هزینه ارسال</span>
                        <span className="text-green-600">رایگان</span>
                    </div>
                </div>

                <div className="border-t border-gray-100 pt-4 mb-6">
                    <div className="flex justify-between items-center">
                        <span className="font-bold text-gray-900">مبلغ قابل پرداخت</span>
                        <span className="font-bold text-xl text-blue-600">{totalPrice().toLocaleString('fa-IR')} تومان</span>
                    </div>
                </div>

                {/* لینک به صفحه پرداخت واقعی */}
                <Link href="/checkout">
                    <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-700 shadow-lg shadow-blue-600/30 transition-all">
                        تکمیل خرید <ArrowLeft className="h-5 w-5" />
                    </button>
                </Link>

                <p className="text-xs text-center text-gray-400 mt-4">
                    پرداخت امن با کلیه کارت‌های عضو شتاب
                </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}