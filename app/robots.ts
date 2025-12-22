import type { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/checkout/', // معمولا صفحه پرداخت نباید ایندکس بشه
    },
    sitemap: 'https://luxeshop.vercel.app/sitemap.xml', // آدرس نهایی سایتت رو بعدا اینجا بذار
  }
}