"use client";

import { Home, Grid, ShoppingBag, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BottomNav() {
  const pathname = usePathname();

  const navItems = [
    { name: "خانه", href: "/", icon: Home },
    { name: "دسته‌بندی", href: "/categories", icon: Grid },
    { name: "سبد خرید", href: "/cart", icon: ShoppingBag }, // بعداً بج اضافه می‌کنیم
    { name: "پروفایل", href: "/profile", icon: User },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 block border-t border-gray-200 bg-white px-6 py-3 shadow-lg lg:hidden">
      <div className="flex items-center justify-between">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex flex-col items-center gap-1 transition-colors ${
                isActive ? "text-blue-600" : "text-gray-400 hover:text-gray-600"
              }`}
            >
              <Icon className={`h-6 w-6 ${isActive ? "fill-current" : ""}`} />
              <span className="text-[10px] font-medium">{item.name}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}