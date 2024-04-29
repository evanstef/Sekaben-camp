import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/product/allproduct',
    },
    sitemap: 'https://sekabencamp.vercel.app/sitemap.xml',
  }
}