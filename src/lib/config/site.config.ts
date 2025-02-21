export const siteConfig = {
  domain: 'https://example.com',
  name: 'Example',

  contact: {
    email: 'contact@example.com',
  },
}

export class siteMap {
  static home = '/'
  static about = '/about-us'
  static contact = '/contact-us'
  static terms = '/terms'
  static privacy = '/privacy-policy'
  static howItWorks = '/how-it-works'
  static collections = '/collections'
  static products = '/products'
  static collectionSlug = (slug: string) => `/collections/${slug}`
  static productSlug = (slug: string) => `/products/${slug}`
}
