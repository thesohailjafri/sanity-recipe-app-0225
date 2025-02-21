import ProductPage from '@/components/pages/ProductPage'
import { PRODUCT_BY_SLUG_QY, PRODUCT_SLUGS_QY } from '@/lib/sanity/queries'
import { getImageUrl, sanityFetch } from '@/lib/sanity/util'
import { Sanity } from '@/types/sanity'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { cache } from 'react'

interface Props {
  params: Promise<{ product_slug: string }>
}

export async function generateStaticParams() {
  const slugs = await sanityFetch<string[]>(PRODUCT_SLUGS_QY)
  return slugs.map((s) => ({
    params: { product_slug: s },
  }))
}

// Shared Data Fetch Function with Caching
const getProductBySlug = cache(async (slug: string) => {
  return await sanityFetch<Sanity.Product>(PRODUCT_BY_SLUG_QY, { slug }, [
    `product-${slug}`,
  ])
})

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Fetch data dynamically
  const slug = (await params).product_slug
  const product = await getProductBySlug(slug)

  return {
    title: product?.title,
    description: product?.description,
    openGraph: {
      title: product?.title,
      description: product?.description,
      images: product?.images?.map((image, idx) => ({
        url: getImageUrl(image),
        alt: `${product?.title} Image ${idx + 1}`,
      })),
    },
  }
}

export default async function Page({ params }: Props) {
  const slug = (await params).product_slug
  const product = await getProductBySlug(slug)
  if (!product) {
    notFound()
  }
  return <ProductPage product={product} />
}
