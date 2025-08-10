import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://techforweb.com.br'

  return [
    { url: `${baseUrl}/`, changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/servicos`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/projetos`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/politica-privacidade`, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/termos-uso`, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/servicos/tech-loja`, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/servicos/viveiro-plataform`, changeFrequency: 'yearly', priority: 0.4 },
  ]
}

