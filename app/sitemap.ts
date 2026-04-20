import { MetadataRoute } from 'next'
import { supabase } from '../lib/supabase'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://lexanzelensky.sk'

  // Static routes
  const staticRoutes = [
    '',
    '/o-nas',
    '/produkty',
    '/sluzby',
    '/kontakt',
    '/blog',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Blog posts dynamically pulled down from active Supabase db
  const { data: posts } = await supabase
    .from('lexan_blog_posts')
    .select('slug, updated_at')
    .eq('is_published', true)

  const blogRoutes = (posts || []).map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updated_at),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticRoutes, ...blogRoutes]
}
