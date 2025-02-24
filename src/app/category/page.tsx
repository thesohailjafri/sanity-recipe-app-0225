import CategoryIndexPage from '@/components/pages/CategoryIndexPage'
import { CATEGORIES_QY } from '@/lib/sanity/queries'
import { sanityFetch } from '@/lib/sanity/util'
import { Sanity } from '@/types/sanity'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Category',
  description: 'Category Page',
}

export default async function page() {
  const categories = await sanityFetch<Sanity.Category[]>(CATEGORIES_QY)
  return <CategoryIndexPage categories={categories} />
}
