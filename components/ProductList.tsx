"use client";

import { motion } from "framer-motion";
import { products } from "@/lib/data"; // <--- ایمپورت دیتابیس
import ProductCard from "./ProductCard"; // <--- ایمپورت کارت جدید

export default function ProductList() {
  // فقط ۸ تای اول رو برای صفحه اصلی برمیداریم
  const featuredProducts = products.slice(0, 8);

  return (
    <section className="py-20 px-6 bg-white">
      <div className="container mx-auto">
        
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">منتخب سردبیر</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-500">پیشنهادهای ویژه از بین {products.length} کالای لوکس</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}