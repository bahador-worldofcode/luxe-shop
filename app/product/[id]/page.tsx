import { getProductById, products } from "@/lib/data"; // ایمپورت توابع دیتا
import Image from "next/image";
import Link from "next/link";
import ProductInfo from "@/components/ProductInfo";
import { notFound } from "next/navigation";
import ProductCard from "@/components/ProductCard";

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  // پیدا کردن محصول واقعی از دیتابیس
  const product = getProductById(id);

  // اگر محصول پیدا نشد، برو به صفحه ۴۰۴
  if (!product) {
    notFound();
  }

  // پیدا کردن محصولات مشابه (از همون دسته)
  const relatedProducts = products
    .filter(p => p.categorySlug === product.categorySlug && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-white pb-20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-blue-600">خانه</Link>
          <span>/</span>
          <Link href={`/category/${product.categorySlug}`} className="hover:text-blue-600">{product.category}</Link>
          <span>/</span>
          <span className="text-gray-900 font-bold">{product.name}</span>
        </div>
      </div>

      <main className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 mt-4">
        {/* عکس محصول */}
        <div className="lg:col-span-7 space-y-4">
          <div className="relative h-[400px] lg:h-[600px] w-full rounded-3xl overflow-hidden bg-gray-100 border border-gray-200">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* اطلاعات محصول */}
        <div className="lg:col-span-5">
          <ProductInfo 
            product={{
              id: product.id,
              name: product.name,
              price: product.price,
              description: product.description,
              image: product.image,
              features: product.features
            }} 
          />
        </div>
      </main>

      {/* محصولات مشابه */}
      <section className="container mx-auto px-6 py-20 border-t border-gray-100 mt-20">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">محصولات مشابه</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {relatedProducts.map((p) => (
             <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}