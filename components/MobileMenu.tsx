"use client";

import { X, ChevronLeft, Instagram, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const links = [
  { name: "صفحه اصلی", href: "/" },
  { name: "فروشگاه", href: "/shop" },
  { name: "مردانه", href: "/category/men" },
  { name: "زنانه", href: "/category/women" },
  { name: "اکسسوری", href: "/category/accessories" },
  { name: "درباره ما", href: "/about" },
  { name: "تماس با ما", href: "/contact" },
];

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* لایه تاریک پشت */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm lg:hidden"
          />

          {/* پنل منو */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 z-[70] w-[280px] bg-white shadow-2xl lg:hidden flex flex-col"
          >
            {/* سربرگ منو */}
            <div className="p-6 flex items-center justify-between border-b border-gray-100">
              <Logo />
              <button onClick={onClose} className="p-2 bg-gray-50 rounded-full hover:bg-red-50 hover:text-red-500 transition-colors">
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* لینک‌ها */}
            <div className="flex-1 overflow-y-auto py-6 px-4">
              <nav className="space-y-2">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={onClose}
                    className="flex items-center justify-between p-4 rounded-xl text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-all group"
                  >
                    <span className="font-medium">{link.name}</span>
                    <ChevronLeft className="h-4 w-4 text-gray-300 group-hover:text-blue-600 group-hover:-translate-x-1 transition-transform" />
                  </Link>
                ))}
              </nav>
            </div>

            {/* فوتر منو */}
            <div className="p-6 border-t border-gray-100 bg-gray-50">
               <p className="text-xs text-center text-gray-400 mb-4">ما را دنبال کنید</p>
               <div className="flex justify-center gap-4">
                  {[Instagram, Twitter, Linkedin].map((Icon, i) => (
                    <button key={i} className="p-2 bg-white rounded-lg shadow-sm text-gray-500 hover:text-blue-600">
                        <Icon className="h-4 w-4" />
                    </button>
                  ))}
               </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}