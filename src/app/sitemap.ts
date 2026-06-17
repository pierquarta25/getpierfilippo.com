import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://getpierfilippo.com'
  
  const routes = [
    '',
    '/about',
    '/contact',
    '/work',
    '/work/getpierfilippo-com',
    '/work/gt-fleet365',
    '/work/iveco-scraper',
    '/work/leadgen',
    '/work/macnil-contact-manager',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}/`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1.0 : route.startsWith('/work/') ? 0.6 : 0.8,
  }))
}
