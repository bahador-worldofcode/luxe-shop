"use client";

import { useCartStore } from "@/store/cartStore";
import { ArrowRight, CreditCard, MapPin, Truck, CheckCircle } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCartStore();
  const [step, setStep] = useState(1); // 1: فرم, 2: پرداخت, 3: موفقیت
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // جلوگیری از ورود با سبد خالی
  useEffect(() => {
    if (items.length === 0 && step !== 3) {
      router.push("/cart");
    }
  }, [items, step, router]);

  const handleSubmitAddress = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
    window.scrollTo(0,0);
  };

  const handlePayment = () => {
    setLoading(true);
    // شبیه‌سازی درگاه پرداخت
    setTimeout(() => {
      setLoading(false);
      setStep(3);
      clearCart();
      window.scrollTo(0,0);
      toast.success("سفارش شما با موفقیت ثبت شد");
    }, 2000);
  };

  if (items.length === 0 && step !== 3) return null;

  return (
    <div className="min-h-screen bg-gray-50 pb-20 pt-10">
      <div className="container mx-auto px-6 max-w-3xl">
        
        {/* مراحل خرید */}
        <div className="flex items-center justify-between mb-10 px-4">
           <div className={`flex flex-col items-center ${step >= 1 ? 'text-blue-600' : 'text-gray-400'}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 mb-2 ${step >= 1 ? 'border-blue-600 bg-blue-50' : 'border-gray-300'}`}>
                  <MapPin className="h-5 w-5" />
              </div>
              <span className="text-xs font-bold">آدرس</span>
           </div>
           <div className={`h-1 flex-1 mx-2 ${step >= 2 ? 'bg-blue-600' : 'bg-gray-200'}`} />
           <div className={`flex flex-col items-center ${step >= 2 ? 'text-blue-600' : 'text-gray-400'}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 mb-2 ${step >= 2 ? 'border-blue-600 bg-blue-50' : 'border-gray-300'}`}>
                  <CreditCard className="h-5 w-5" />
              </div>
              <span className="text-xs font-bold">پرداخت</span>
           </div>
           <div className={`h-1 flex-1 mx-2 ${step >= 3 ? 'bg-blue-600' : 'bg-gray-200'}`} />
           <div className={`flex flex-col items-center ${step >= 3 ? 'text-blue-600' : 'text-gray-400'}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 mb-2 ${step >= 3 ? 'border-blue-600 bg-blue-50' : 'border-gray-300'}`}>
                  <CheckCircle className="h-5 w-5" />
              </div>
              <span className="text-xs font-bold">اتمام</span>
           </div>
        </div>

        {/* مرحله ۱: آدرس */}
        {step === 1 && (
          <form onSubmit={handleSubmitAddress} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-6">اطلاعات ارسال</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input required placeholder="نام و نام خانوادگی" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-600" />
                <input required placeholder="شماره موبایل" type="tel" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-600" />
            </div>
            <textarea required placeholder="آدرس کامل پستی" rows={3} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-600 mb-4" />
            
            <div className="bg-blue-50 p-4 rounded-xl flex items-center gap-3 text-blue-800 text-sm mb-6">
                <Truck className="h-5 w-5" />
                <span>ارسال رایگان برای سفارش شما فعال شد.</span>
            </div>

            <button type="submit" className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all">
                ثبت و ادامه
            </button>
          </form>
        )}

        {/* مرحله ۲: پرداخت (کارت به کارت) */}
        {step === 2 && (
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
            <h2 className="text-xl font-bold text-gray-900 mb-2">پرداخت نهایی</h2>
            <p className="text-gray-500 mb-8">مبلغ قابل پرداخت: <span className="text-gray-900 font-bold text-lg">{totalPrice().toLocaleString('fa-IR')} تومان</span></p>

            <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white p-6 rounded-2xl w-full max-w-sm mx-auto mb-8 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl" />
                <div className="relative z-10 flex flex-col items-center">
                    <span className="text-sm text-gray-400 mb-2">شماره کارت (بانک ملت)</span>
                    <span className="text-2xl font-mono tracking-widest dir-ltr mb-4">6104 3379 1234 5678</span>
                    <span className="text-sm text-gray-300">به نام: فروشگاه لوکس شاپ</span>
                </div>
            </div>

            <div className="text-right text-sm text-gray-600 mb-8 bg-orange-50 p-4 rounded-xl border border-orange-100">
                <p className="font-bold text-orange-700 mb-1">⚠️ توجه:</p>
                لطفا مبلغ را به کارت بالا واریز کنید و دکمه "پرداخت کردم" را بزنید. همکاران ما برای تایید نهایی با شما تماس خواهند گرفت.
            </div>

            <button 
                onClick={handlePayment} 
                disabled={loading}
                className="w-full bg-green-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-green-700 transition-all flex items-center justify-center gap-2"
            >
                {loading ? 'در حال پردازش...' : 'مبلغ را واریز کردم'}
            </button>
          </div>
        )}

        {/* مرحله ۳: موفقیت */}
        {step === 3 && (
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 text-center flex flex-col items-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="h-10 w-10 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">سفارش با موفقیت ثبت شد!</h2>
                <p className="text-gray-500 max-w-md mx-auto mb-8 leading-7">
                    از خرید شما متشکریم. کد پیگیری سفارش شما <span className="font-bold text-gray-900">LX-8921</span> می‌باشد. همکاران ما جهت هماهنگی ارسال تا ساعاتی دیگر با شما تماس خواهند گرفت.
                </p>
                <Link href="/" className="bg-gray-100 text-gray-900 px-8 py-3 rounded-xl font-bold hover:bg-gray-200 transition-colors">
                    بازگشت به خانه
                </Link>
            </div>
        )}

      </div>
    </div>
  );
}