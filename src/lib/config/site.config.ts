export const siteConfig = {
  domain: 'https://zenrecipes.easyui.design',
  name: 'Zen Recipes',
  logo: '/assets/logo.png',
  contact: {
    email: 'example@app.com',
    facebook: '#',
    instagram: '#',
    twitter: '#',
    youtube: '#'
  }
}
export class pagePath {
  static home = '/'
  static category = '/category'
  static recipe = '/recipe'
  static product = '/product'
  static aboutus = '/aboutus'
  static contactus = '/contactus'
  static form = '/form'
  static categorySlug = (slug: string) => `/category/${slug}`
  static recipeSlug = (slug: string) => `/recipe/${slug}`
}
