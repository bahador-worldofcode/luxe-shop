"use client";

import { X, Search, ChevronLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { products } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: Props) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(products);

  // ریست کردن سرچ وقتی مودال باز میشه
  useEffect(() => {
    if (isOpen) {
        setQuery("");
        setResults([]);
    }
  }, [isOpen]);

  // منطق جستجو
  useEffect(() => {
    if (query.trim() === "") {
      setResults([]);
      return;
    }
    const filtered = products.filter(p => 
      p.name.includes(query) || p.category.includes(query)
    );
    setResults(filtered);
  }, [query]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[70] flex items-start justify-center pt-20 px-4">
          
          {/* بک‌گراند تاریک */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* باکس جستجو */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: -20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: -20 }}
            className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* ورودی */}
            <div className="flex items-center border-b border-gray-100 p-4 gap-3">
              <Search className="h-6 w-6 text-gray-400" />
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="جستجو برای کت، کیف، کفش..."
                className="flex-1 text-lg outline-none bg-transparent placeholder:text-gray-400"
              />
              <button onClick={onClose} className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
                <X className="h-5 w-5 text-gray-600" />
              </button>
            </div>

            {/* نتایج */}
            <div className="max-h-[60vh] overflow-y-auto p-2">
              {results.length > 0 ? (
                <div className="space-y-2">
                  {results.map((product) => (
                    <Link
                      key={product.id}
                      href={`/product/${product.id}`}
                      onClick={onClose}
                      className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors group"
                    >
                      <div className="relative h-16 w-16 rounded-lg overflow-hidden bg-gray-100 border border-gray-200">
                        <Image src={product.image} alt={product.name} fill className="object-cover" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{product.name}</h4>
                        <span className="text-xs text-gray-500">{product.category}</span>
                      </div>
                      <div className="font-bold text-gray-900 text-sm">
                        {product.price}
                      </div>
                      <ChevronLeft className="h-4 w-4 text-gray-300" />
                    </Link>
                  ))}
                </div>
              ) : (
                query !== "" && (
                  <div className="text-center py-12 text-gray-500">
                    محصولی یافت نشد.
                  </div>
                )
              )}
              {query === "" && (
                 <div className="p-4">
                    <p className="text-xs font-bold text-gray-400 mb-3">پیشنهادهای پرطرفدار</p>
                    <div className="flex flex-wrap gap-2">
                        {['کت تک', 'ساعت', 'کیف چرم', 'کفش ورزشی'].map(tag => (
                            <button key={tag} onClick={() => setQuery(tag)} className="px-3 py-1 bg-gray-100 hover:bg-blue-50 hover:text-blue-600 rounded-full text-sm transition-colors">
                                {tag}
                            </button>
                        ))}
                    </div>
                 </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}