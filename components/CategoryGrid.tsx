import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const categories = [
  {
    id: 1,
    name: "مردانه",
    slug: "men",
    image: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?q=80&w=800&auto=format&fit=crop",
    colSpan: "md:col-span-2", // این کارت بزرگتره
  },
  {
    id: 2,
    name: "زنانه",
    slug: "women",
    image: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?q=80&w=800&auto=format&fit=crop",
    colSpan: "md:col-span-1",
  },
  {
    id: 3,
    name: "کیف و کفش",
    slug: "shoes",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=800&auto=format&fit=crop",
    colSpan: "md:col-span-1",
  },
  {
    id: 4,
    name: "اکسسوری و ساعت",
    slug: "accessories",
    image: "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&w=800&auto=format&fit=crop",
    colSpan: "md:col-span-2", // این کارت هم بزرگتره برای تقارن
  },
];

export default function CategoryGrid() {
  return (
    <section className="py-10 px-6">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
          <span className="w-2 h-8 bg-blue-600 rounded-full"></span>
          دسته‌بندی‌های محبوب
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {categories.map((cat) => (
            <Link 
              key={cat.id} 
              href={`/category/${cat.slug}`}
              className={`relative group overflow-hidden rounded-3xl ${cat.colSpan}`}
            >
              {/* تصویر پس‌زمینه */}
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* لایه تاریک روی عکس */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* متن و دکمه */}
              <div className="absolute bottom-0 right-0 p-8 w-full">
                <h3 className="text-2xl font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {cat.name}
                </h3>
                <div className="flex items-center gap-2 text-blue-400 font-medium opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                  مشاهده محصولات <ArrowLeft className="h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}