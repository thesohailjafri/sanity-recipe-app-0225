import CollectionsPage from '@/components/pages/CollectionsPage'
import { COLLECTIONS_QY } from '@/lib/sanity/queries'
import { sanityFetch } from '@/lib/sanity/util'
import { Sanity } from '@/types/sanity'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Collections',
  description: 'Collections',
}
export default async function page() {
  const collections = await sanityFetch<Sanity.Collection[]>(COLLECTIONS_QY)
  return <CollectionsPage collections={collections} />
}
