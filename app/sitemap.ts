import { MetadataRoute } from 'next'
import { waterHeaterCities } from '@/data/water-heater'
import { stoveCities } from '@/data/stove'
import { cookerhoodCities } from '@/data/coockerhood'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.teknohomeservice.com'

  const waterHeaterRoutes = Object.keys(waterHeaterCities).map((city) => ({
    url: `${baseUrl}/water-heater/${city}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  const stoveRoutes = Object.keys(stoveCities).map((city) => ({
    url: `${baseUrl}/stove/${city}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  const cookerhoodRoutes = Object.keys(cookerhoodCities).map((city) => ({
    url: `${baseUrl}/coockerhood/${city}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...waterHeaterRoutes,
    ...stoveRoutes,
    ...cookerhoodRoutes,
  ]
}

