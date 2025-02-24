import { Sanity } from '@/types/sanity'
import { QueryParams } from '@sanity/client'
import { sanityClient, sanityConfig } from '@/lib/sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import { buildFileUrl, parseFileAssetId } from '@sanity/asset-utils'

type Tags = Sanity.Type[] | Sanity.TypeSlug[]

export const sanityFetch = async <QueryResponse>(
  query: string,
  params: QueryParams = {},
  tags?: Tags,
): Promise<QueryResponse> => {
  return sanityClient.fetch<QueryResponse>(query, params, {
    cache: process.env.NODE_ENV === 'development' ? 'no-store' : 'force-cache',
    next: { tags },
  })
}

const imageBuilder = imageUrlBuilder(sanityClient)

type SanityUrlOption = {
  width?: number
  format?: 'webp' | 'png' | 'jpg'
  quality?: number
}

export const getImageUrl = (data: Sanity.Image, options?: SanityUrlOption) => {
  const fallback = '/assets/placeholder.png'
  try {
    const { width = 1080, format = 'webp', quality = 90 } = options || {}
    const url = imageBuilder
      .image(data)
      .width(width)
      .format(format)
      .quality(quality)
      .url()
    return url || fallback
  } catch {
    return fallback
  }
}

export const getFileUrl = (file: Sanity.File): string => {
  const part = parseFileAssetId(file.asset._ref)
  const result = buildFileUrl(part, sanityConfig)
  return result
}
