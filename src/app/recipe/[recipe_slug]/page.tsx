import RecipeSlugPage from '@/components/pages/RecipeSlugPage'
import { RECIPE_BY_SLUG_QY, RECIPE_SLUGS_QY } from '@/lib/sanity/queries'
import { getImageUrl, sanityFetch } from '@/lib/sanity/util'
import { Sanity } from '@/types/sanity'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { cache } from 'react'

interface Props {
  params: Promise<{ recipe_slug: string }>
}

export async function generateStaticParams() {
  const slugs = await sanityFetch<string[]>(RECIPE_SLUGS_QY)
  return slugs.map((s) => ({
    params: { recipe_slug: s }
  }))
}

// Shared Data Fetch Function with Caching
const getRecipeBySlug = cache(async (slug: string) => {
  return await sanityFetch<Sanity.Recipe>(RECIPE_BY_SLUG_QY, { slug }, [`recipe-${slug}`])
})

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Fetch data dynamically
  const slug = (await params).recipe_slug
  const recipe = await getRecipeBySlug(slug)
  const title = recipe?.seo?.title || recipe?.title
  const description = recipe?.seo?.description || recipe?.description
  const keywords = recipe?.seo?.keywords || []
  const images = []
  if (recipe?.image) {
    images.push({
      url: getImageUrl(recipe?.image),
      alt: recipe?.seo?.image?.alt || `${recipe?.title} Image`
    })
  }

  return {
    title: title,
    description: description,
    keywords: keywords,
    openGraph: {
      title: title,
      description: description,
      images: images
    }
  }
}

export default async function Page({ params }: Props) {
  const slug = (await params).recipe_slug
  const recipe = await getRecipeBySlug(slug)
  if (!recipe) {
    notFound()
  }
  return <RecipeSlugPage recipe={recipe} />
}
