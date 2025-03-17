import HomePage from '@/components/pages/HomePage'
import { BANNERS_QY, CATEGORIES_QY, RECIPES_CARD } from '@/lib/sanity/queries'
import { sanityFetch } from '@/lib/sanity/util'
import { Sanity } from '@/types'

export default async function Home() {
  const [banners, catogories, recipes] = await Promise.all([
    sanityFetch<Sanity.Banner[]>(BANNERS_QY),
    sanityFetch<Sanity.Category[]>(CATEGORIES_QY),
    sanityFetch<Sanity.Recipe[]>(RECIPES_CARD)
  ])
  return <HomePage banners={banners} categories={catogories} recipes={recipes} />
}
