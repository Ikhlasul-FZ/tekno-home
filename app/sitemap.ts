import { MetadataRoute } from 'next'
import { waterHeaterCities } from '@/data/water-heater'
import { stoveCities } from '@/data/stove'
import { cookerhoodCities } from '@/data/coockerhood'
import { stoveArticles } from '@/data/stove-articles'
import { waterHeaterArticles } from '@/data/water-heater-articles'
import { cookerhoodArticles } from '@/data/coockerhood-articles'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.teknohomeservice.com'

  const waterHeaterRoutes = Object.keys(waterHeaterCities).map((city) => ({
    url: `${baseUrl}/water-heater/${city}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  const waterHeaterArticleRoutes = Object.keys(waterHeaterCities).flatMap((city) =>
    waterHeaterArticles.map((article) => ({
      url: `${baseUrl}/water-heater/${city}/${article.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }))
  )

  const stoveRoutes = Object.keys(stoveCities).map((city) => ({
    url: `${baseUrl}/stove/${city}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  const stoveArticleRoutes = Object.keys(stoveCities).flatMap((city) =>
    stoveArticles.map((article) => ({
      url: `${baseUrl}/stove/${city}/${article.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }))
  )

  const cookerhoodRoutes = Object.keys(cookerhoodCities).map((city) => ({
    url: `${baseUrl}/coockerhood/${city}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  const cookerhoodArticleRoutes = Object.keys(cookerhoodCities).flatMap((city) =>
    cookerhoodArticles.map((article) => ({
      url: `${baseUrl}/coockerhood/${city}/${article.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }))
  )

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...waterHeaterRoutes,
    ...waterHeaterArticleRoutes,
    ...stoveRoutes,
    ...stoveArticleRoutes,
    ...cookerhoodRoutes,
    ...cookerhoodArticleRoutes,
  ]
}


