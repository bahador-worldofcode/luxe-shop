"use client";

import { useCartStore } from "@/store/cartStore";
import { ShoppingBag } from "lucide-react";
import { toast } from "sonner";

interface Props {
  product: {
    id: string | number;
    name: string;
    price: string;
    image: string;
  };
}

export default function AddToCartBtn({ product }: Props) {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // جلوگیری از باز شدن صفحه محصول هنگام کلیک
    
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
      color: "تک رنگ", // مقدار پیش‌فرض برای رفع خطا
      size: "Free Size", // مقدار پیش‌فرض برای رفع خطا
    });
    
    toast.success(`${product.name} به سبد خرید اضافه شد`);
  };

  return (
    <button 
      onClick={handleAddToCart}
      className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 shadow-lg shadow-blue-600/30 transition-all active:scale-95 flex items-center justify-center gap-2"
    >
      <ShoppingBag className="h-5 w-5" />
      افزودن به سبد خرید
    </button>
  );
}