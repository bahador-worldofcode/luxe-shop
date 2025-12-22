import { products } from "@/lib/data";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* هدر صفحه */}
      <div className="bg-white border-b border-gray-200 py-12 mb-8">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-4">فروشگاه</h1>
          <p className="text-gray-500">مشاهده تمام محصولات لوکس ({products.length} کالا)</p>
        </div>
      </div>

      {/* لیست محصولات */}
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
      
      {/* دکمه بازگشت */}
      <div className="text-center mt-12">
          <Link href="/" className="text-blue-600 hover:underline">بازگشت به صفحه اصلی</Link>
      </div>
    </div>
  );
}