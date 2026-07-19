import type { MetadataRoute } from 'next'
import { WEBSITE_URL } from '@/lib/constants'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: WEBSITE_URL,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${WEBSITE_URL}/blog/cara-nulis-appraisal-review-dari-cupu-ke-level-2`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${WEBSITE_URL}/blog/perilaku-keuangan-generasi-z-terhadap-kredit-dan-bnpl`,
      lastModified: new Date('2025-03-29'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${WEBSITE_URL}/blog/copilot-cloud-agent-cost-breakdown`,
      lastModified: new Date('2026-07-12'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${WEBSITE_URL}/cv`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${WEBSITE_URL}/cv/latest`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ]
}
