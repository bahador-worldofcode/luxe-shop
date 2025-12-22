"use client";

import Link from "next/link";
import { ShoppingBag, Search, Menu } from "lucide-react";
import { motion } from "framer-motion";
import { useCartStore } from "@/store/cartStore";
import { useEffect, useState } from "react";
import Logo from "@/components/Logo";
import MobileMenu from "@/components/MobileMenu";
import SearchModal from "@/components/SearchModal"; // <--- اضافه شد

export default function Header() {
  const totalItems = useCartStore((state) => state.totalItems());
  const [mounted, setMounted] = useState(false);
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false); // <--- اضافه شد

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between border-b border-gray-200 bg-white/80 px-6 py-4 backdrop-blur-md"
      >
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className="rounded-full p-2 hover:bg-gray-100 lg:hidden"
          >
            <Menu className="h-6 w-6" />
          </button>
          
          <Link href="/">
            <Logo />
          </Link>

          <nav className="hidden lg:flex items-center gap-6 mr-8 text-sm font-medium text-gray-600">
            <Link href="/" className="hover:text-blue-600 transition-colors">خانه</Link>
            <Link href="/shop" className="hover:text-blue-600 transition-colors">فروشگاه</Link>
            <Link href="/category/men" className="hover:text-blue-600 transition-colors">مردانه</Link>
            <Link href="/category/women" className="hover:text-blue-600 transition-colors">زنانه</Link>
            <Link href="/about" className="hover:text-blue-600 transition-colors">درباره ما</Link>
          </nav>
        </div>

        <div className="flex items-center gap-2">
          {/* دکمه جستجو (کلیک خور شد) */}
          <button 
            onClick={() => setIsSearchOpen(true)} // <--- وصل شد
            className="rounded-full p-2 text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900"
          >
            <Search className="h-5 w-5 flip-horizontal" />
          </button>
          
          <Link href="/cart">
            <button className="relative rounded-full p-2 text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900">
              <ShoppingBag className="h-5 w-5" />
              {mounted && totalItems > 0 && (
                <span className="absolute left-0 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 text-[10px] font-bold text-white animate-bounce">
                  {totalItems}
                </span>
              )}
            </button>
          </Link>
        </div>
      </motion.header>

      {/* منوی موبایل */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />

      {/* مودال جستجو (اضافه شد) */}
      <SearchModal 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
      />
    </>
  );
}