export namespace Sanity {
  // *** Defaults ***
  export type Type = 'recipe' | 'category'

  export type TypeSlug = `recipe-${string}` | `category-${string}`

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

  export interface Image extends Defaults {
    _type: 'image'
    asset: {
      _ref: string
      _type: 'reference'
    }
    alt?: string
  }

  export type Slug = {
    _type: 'slug'
    current: string
  }

  export type BlockContent = (Block | Image | Callout)[]

  export type Block = {
    _key: string
    _type: 'block'
    style?: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'blockquote'
    children: Span[]
    markDefs?: MarkDef[]
    listItem?: 'bullet' | 'number'
  }

  export type Span = {
    _key: string
    _type: 'span'
    text: string
    marks?: string[]
  }

  export type MarkDef = ExternalLink | InternalLink

  export type ExternalLink = {
    _key: string
    _type: 'link'
    href: string
    blank?: boolean
  }

  export type InternalLink = {
    _key: string
    _type: 'internalLink'
    reference: {
      _type: 'reference'
      _ref: string // ID of the linked document
    }
  }

  export type Callout = {
    _key: string
    _type: 'callout'
    style: 'info' | 'warning' | 'success' | 'error'
    content: string
  }

  export interface Seo extends Defaults {
    _type: 'seo'
    title: string
    description: string
    keywords: string[]
    image?: Image
  }

  // *** Documents ***
  export interface Banner extends Defaults {
    _type: 'banner'
    title: string
    resourceReference: Recipe | Category
    image: Image
  }

  export interface Recipe extends Defaults {
    _type: 'recipe'
    title: string
    slug: Slug
    seo: Seo
    image: Image
    description?: string
    categories: Category[]
    preparationTime?: number // in minutes
    cookingTime?: number // in minutes
    totalTime?: number // in minutes
    ingredients: string[]
    instructions: BlockContent
    nutrition?: {
      calories?: number
      carbs?: number
      proteins?: number
      fats?: number
    }
  }

  export interface Category extends Defaults {
    _type: 'category'
    title: string
    slug: Slug
    seo: Seo
    description?: string
    image: Image
  }
}
