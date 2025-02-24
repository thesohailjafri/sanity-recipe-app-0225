export const siteConfig = {
  domain: 'https://example.com',
  name: 'Example',

  contact: {
    email: 'contact@example.com',
  },
}

export class siteMap {
  static home = '/'
  static category = '/category'
  static product = '/product'
  static categorySlug = (slug: string) => `/category/${slug}`
  static productSlug = (slug: string) => `/product/${slug}`
}
