"use client";

import { Product } from "@/lib/data";
import { ShoppingBag, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  return (
    <Link 
      href={`/product/${product.id}`} 
      className="group block bg-white rounded-2xl p-4 border border-gray-100 hover:shadow-xl transition-all duration-300 h-full flex flex-col"
    >
      {/* بخش تصویر */}
      <div className="relative h-64 w-full overflow-hidden rounded-xl bg-gray-50 mb-4">
          <Image 
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur text-gray-900 py-3 rounded-lg font-bold opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 shadow-lg flex items-center justify-center gap-2">
            <ShoppingBag className="h-4 w-4" />
            مشاهده
          </div>
      </div>

      {/* اطلاعات محصول */}
      <div className="mt-auto">
        <div className="text-xs text-blue-600 font-semibold mb-1">{product.category}</div>
        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-1">
          {product.name}
        </h3>
        <div className="flex items-center justify-between">
          <span className="text-gray-900 font-bold text-lg">
            {product.price} <span className="text-xs text-gray-500 font-normal">تومان</span>
          </span>
          <div className="flex items-center gap-1 text-yellow-400 text-xs">
            <Star className="h-3 w-3 fill-yellow-400" />
            <span>۴.۸</span>
          </div>
        </div>
      </div>
    </Link>
  );
}