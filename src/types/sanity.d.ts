export namespace Sanity {
  // *** Defaults ***
  export type Type =
    | 'collection'
    | 'product'
    | 'variant'
    | 'category'
    | 'review'

  export type TypeSlug =
    | `collection-${string}`
    | `product-${string}`
    | `variant-${string}`
    | `category-${string}`
    | `review-${string}`

  interface Defaults {
    _id: string
    _type: Type
    _createdAt: string
    _updatedAt: string
    _rev: string
  }

  export interface File extends Defaults {
    _type: string
    alt: string
    asset: {
      _type: string
      _ref: string
    }
  }

  export type Slug = {
    _type: 'slug'
    current: string
  }

  // *** Documents ***

  export interface Collection extends Defaults {
    _type: 'collection'
    title: string
    slug: Slug
    description: string
		image: File
    products: Product[]
  }

  export interface Product extends Defaults {
    _type: 'product'
    title: string
    slug: Slug
    description: string
    price: number
    discountPrice: number
    images: File[]
    category: Category
    variants: Variant[]
    reviews: Review[]
    inStock: boolean
    tags: string[]
    collections: Collection[]
  }

  export interface Variant extends Defaults {
    _type: 'variant'
    size: string
    color: string
    stock: number
  }

  export interface Category extends Defaults {
    _type: 'category'
    title: string
    slug: Slug
    description: string
  }

  export interface Review extends Defaults {
    _type: 'review'
    user: string
    product: Product
    rating: number
    comment: string
    createdAt: string
  }
}
