import RecipeIndexPage from '@/components/pages/RecipeIndexPage'
import { RECIPES_QY } from '@/lib/sanity/queries'
import { sanityFetch } from '@/lib/sanity/util'
import { Sanity } from '@/types/sanity'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Recipes',
  description: 'Recipes Page',
}

export default async function page() {
  const products = await sanityFetch<Sanity.Recipe[]>(RECIPES_QY)
  return <RecipeIndexPage recipes={products} />
}
