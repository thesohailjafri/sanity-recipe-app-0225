import ProductsPage from '@/components/pages/ProductsPage'
import { PRODUCTS_QY } from '@/lib/sanity/queries'
import { sanityFetch } from '@/lib/sanity/util'
import { Sanity } from '@/types/sanity'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Products',
  description: 'Products',
}
export default async function page() {
  const products = await sanityFetch<Sanity.Product[]>(PRODUCTS_QY)
  return <ProductsPage products={products} />
}
