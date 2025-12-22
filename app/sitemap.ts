import { products } from '@/lib/data'
import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://luxeshop.vercel.app' // آدرس سایتت

  // صفحات ثابت
  const routes = [
    '',
    '/shop',
    '/about',
    '/contact',
    '/category/men',
    '/category/women',
    '/category/accessories',
    '/category/shoes',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 1,
  }))

  // صفحات محصول (داینامیک)
  const productRoutes = products.map((product) => ({
    url: `${baseUrl}/product/${product.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  return [...routes, ...productRoutes]
}