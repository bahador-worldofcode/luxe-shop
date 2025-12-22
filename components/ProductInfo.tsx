"use client";

import { useState } from "react";
import { Star, Check, ShieldCheck, Truck, ShoppingBag } from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import { toast } from "sonner";

interface Props {
  product: {
    id: string;
    name: string;
    price: string;
    description: string;
    image: string;
    features: string[];
  };
}

const COLORS = [
  { name: "مشکی", class: "bg-slate-900" },
  { name: "سرمه‌ای", class: "bg-blue-900" },
  { name: "طوسی", class: "bg-gray-500" },
];

const SIZES = ["S", "M", "L", "XL"];

export default function ProductInfo({ product }: Props) {
  const [selectedColor, setSelectedColor] = useState(COLORS[0]);
  const [selectedSize, setSelectedSize] = useState("L");
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
      color: selectedColor.name, // ارسال رنگ انتخاب شده
      size: selectedSize,       // ارسال سایز انتخاب شده
    });
    
    toast.success(`${product.name} (سایز ${selectedSize}) به سبد اضافه شد`);
  };

  return (
    <div className="flex flex-col h-full">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">{product.name}</h1>
      
      <div className="flex items-center gap-2 mb-6">
        <div className="flex text-yellow-400">
          {[1,2,3,4,5].map(i => <Star key={i} className="h-4 w-4 fill-current" />)}
        </div>
        <span className="text-sm text-gray-500">(۴۵ دیدگاه)</span>
      </div>

      <div className="text-4xl font-bold text-gray-900 mb-8">
        {product.price} <span className="text-lg font-normal text-gray-500">تومان</span>
      </div>

      <div className="space-y-6 border-t border-gray-100 pt-6 mb-8">
        {/* انتخاب رنگ */}
        <div>
          <label className="block text-sm font-bold text-gray-900 mb-3">
            رنگ: <span className="text-blue-600 font-normal">{selectedColor.name}</span>
          </label>
          <div className="flex gap-3">
            {COLORS.map((color) => (
              <button
                key={color.name}
                onClick={() => setSelectedColor(color)}
                className={`w-8 h-8 rounded-full ${color.class} ring-2 ring-offset-2 transition-all ${
                  selectedColor.name === color.name ? "ring-blue-600 scale-110" : "ring-transparent opacity-50 hover:opacity-100"
                }`}
              />
            ))}
          </div>
        </div>

        {/* انتخاب سایز */}
        <div>
          <label className="block text-sm font-bold text-gray-900 mb-3">
            سایز: <span className="text-blue-600 font-normal">{selectedSize}</span>
          </label>
          <div className="flex gap-3">
            {SIZES.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`w-12 h-12 flex items-center justify-center rounded-lg border transition-all ${
                  selectedSize === size
                    ? "border-blue-600 text-blue-600 bg-blue-50 font-bold shadow-md"
                    : "border-gray-200 text-gray-600 hover:border-blue-600"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gray-50 rounded-2xl p-4 mb-8">
        <ul className="space-y-2">
          {product.features.map((feature, i) => (
            <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
              <Check className="h-4 w-4 text-green-500" />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <p className="text-gray-500 leading-7 mb-8 text-justify">
        {product.description}
      </p>

      <div className="mt-auto flex flex-col gap-3">
        <button 
          onClick={handleAddToCart}
          className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 shadow-lg shadow-blue-600/30 transition-all active:scale-95 flex items-center justify-center gap-2"
        >
          <ShoppingBag className="h-5 w-5" />
          افزودن به سبد خرید
        </button>
        
        <div className="flex items-center justify-center gap-6 text-xs text-gray-500 mt-2">
           <span className="flex items-center gap-1"><ShieldCheck className="h-4 w-4" /> ضمانت اصالت</span>
           <span className="flex items-center gap-1"><Truck className="h-4 w-4" /> ارسال رایگان</span>
        </div>
      </div>
    </div>
  );
}