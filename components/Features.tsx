import { Truck, ShieldCheck, Headphones, CreditCard } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "ارسال سریع و رایگان",
    desc: "برای سفارش‌های بالای ۲ میلیون تومان"
  },
  {
    icon: ShieldCheck,
    title: "ضمانت اصالت کالا",
    desc: "تضمین اورجینال بودن تمامی محصولات"
  },
  {
    icon: Headphones,
    title: "پشتیبانی ۲۴ ساعته",
    desc: "پاسخگویی در تمام روزهای هفته"
  },
  {
    icon: CreditCard,
    title: "پرداخت امن",
    desc: "درگاه پرداخت ایمن و کارت به کارت"
  }
];

export default function Features() {
  return (
    <section className="bg-gray-50 border-y border-gray-100 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center mb-4 text-gray-500 group-hover:text-blue-600 group-hover:scale-110 transition-all duration-300">
                <item.icon className="h-8 w-8" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}