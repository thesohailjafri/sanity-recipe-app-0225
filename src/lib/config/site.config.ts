export const siteConfig = {
  domain: "https://example.com",
  name: "Example",

  contact: {
    email: "contact@example.com",
  },
};

export class pagePath {
  static home = "/";
  static category = "/category";
  static recipe = "/recipe";
  static product = "/product";
  static aboutus = "/aboutus";
  static contactus = "/contactus";
  static form = "/form";
  static categorySlug = (slug: string) => `/category/${slug}`;
  static recipeSlug = (slug: string) => `/recipe/${slug}`;
}
