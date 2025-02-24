import CategorySlugPage from '@/components/pages/CategorySlugPage'
import { CATEGORY_BY_SLUG_QY, CATEGORY_SLUGS_QY } from '@/lib/sanity/queries'
import { getImageUrl, sanityFetch } from '@/lib/sanity/util'
import { Sanity } from '@/types/sanity'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { cache } from 'react'

interface Props {
  params: Promise<{ category_slug: string }>
}

export async function generateStaticParams() {
  const slugs = await sanityFetch<string[]>(CATEGORY_SLUGS_QY)
  return slugs.map((slug) => ({
    params: { category_slug: slug },
  }))
}

// Shared Data Fetch Function with Caching
const getCategoryBySlug = cache(async (slug: string) => {
  return await sanityFetch<Sanity.Category>(CATEGORY_BY_SLUG_QY, { slug }, [
    `category-${slug}`,
  ])
})

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Fetch data dynamically
  const slug = (await params).category_slug
  const category = await getCategoryBySlug(slug)
  const title = category?.seo?.title || category?.title
  const description = category?.seo?.description || category?.description
  const keywords = category?.seo?.keywords || []
  const images = []
  if (category?.image) {
    images.push({
      url: getImageUrl(category?.image),
      alt: `${category?.title} Image`,
    })
  }

  return {
    title: title,
    description: description,
		keywords: keywords,
    openGraph: {
      title: title,
      description: description,
      images: images,
    },
  }
}

export default async function Page({ params }: Props) {
  const slug = (await params).category_slug
  const category = await getCategoryBySlug(slug)
  if (!category) {
    notFound()
  }
  return <CategorySlugPage category={category} />
}
