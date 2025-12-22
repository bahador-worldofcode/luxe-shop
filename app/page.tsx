import Hero from "@/components/Hero";
import ProductList from "@/components/ProductList";
import CategoryGrid from "@/components/CategoryGrid"; // <--- جدید
import Features from "@/components/Features";       // <--- جدید
import PromoBanner from "@/components/PromoBanner"; // <--- جدید

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      {/* ۱. بنر اصلی (ویترین) */}
      <Hero />
      
      {/* ۲. نوار اعتماد (زیر بنر برای جلب اطمینان سریع) */}
      <Features />

      {/* ۳. دسته‌بندی‌های جذاب (برای هدایت ترافیک) */}
      <CategoryGrid />

      {/* ۴. محصولات منتخب (ویترین کالا) */}
      <ProductList />

      {/* ۵. بنر تبلیغاتی بزرگ (دعوت به اقدام نهایی) */}
      <PromoBanner />
    </main>
  );
}