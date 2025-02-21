import CollectionPage from '@/components/pages/CollectionPage'
import {
  COLLECTION_BY_SLUG_QY,
  COLLECTION_SLUGS_QY,
} from '@/lib/sanity/queries'
import { getImageUrl, sanityFetch } from '@/lib/sanity/util'
import { Sanity } from '@/types/sanity'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { cache } from 'react'

interface Props {
  params: Promise<{ collection_slug: string }>
}

export async function generateStaticParams() {
  const slugs = await sanityFetch<string[]>(COLLECTION_SLUGS_QY)
  return slugs.map((s) => ({
    params: { collection_slug: s },
  }))
}

// Shared Data Fetch Function with Caching
const getCollectionBySlug = cache(async (slug: string) => {
  return await sanityFetch<Sanity.Collection>(COLLECTION_BY_SLUG_QY, { slug }, [
    `collection-${slug}`,
  ])
})

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Fetch data dynamically
  const slug = (await params).collection_slug
  const collection = await getCollectionBySlug(slug)

  return {
    title: collection?.title,
    description: collection?.description,
    openGraph: {
      title: collection?.title,
      description: collection?.description,
      images: [
        {
          url: getImageUrl(collection?.image),
          alt: `${collection?.title} Image`,
        },
      ],
    },
  }
}

export default async function Page({ params }: Props) {
  const slug = (await params).collection_slug
  const collection = await getCollectionBySlug(slug)
  if (!collection) {
    notFound()
  }
  return <CollectionPage collection={collection} />
}
