import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://sekabencamp.vercel.app/',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: 'https://sekabencamp.vercel.app/about',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: 'https://sekabencamp.vercel.app/product',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.5,
    },
    {
        url: 'https://sekabencamp.vercel.app/contact',
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 0.2,
      },
  ]
}