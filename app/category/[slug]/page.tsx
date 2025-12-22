import { getProductsByCategory } from "@/lib/data";
import ProductCard from "@/components/ProductCard";
import { notFound } from "next/navigation";
import Link from "next/link";

// دیکشنری برای تبدیل اسلاگ انگلیسی به عنوان فارسی
const categoryTitles: Record<string, string> = {
  "men": "پوشاک مردانه",
  "women": "پوشاک زنانه",
  "accessories": "اکسسوری و ساعت",
  "shoes": "کفش و کتانی",
};

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  // گرفتن محصولات این دسته
  const categoryProducts = getProductsByCategory(slug);
  const title = categoryTitles[slug];

  if (!title) notFound();

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* هدر دسته‌بندی */}
      <div className="bg-white border-b border-gray-200 py-12 mb-8">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-4">{title}</h1>
          <p className="text-gray-500">نمایش {categoryProducts.length} محصول موجود در انبار</p>
        </div>
      </div>

      {/* لیست محصولات */}
      <div className="container mx-auto px-6">
        {categoryProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {categoryProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-gray-400">
            هیچ محصولی در این دسته یافت نشد.
          </div>
        )}
      </div>
      
      {/* دکمه بازگشت */}
      <div className="text-center mt-12">
          <Link href="/" className="text-blue-600 hover:underline">بازگشت به صفحه اصلی</Link>
      </div>
    </div>
  );
}