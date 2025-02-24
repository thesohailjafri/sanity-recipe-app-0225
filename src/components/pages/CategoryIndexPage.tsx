import { Sanity } from '@/types/sanity'
import React from 'react'

type Props = {
  categories: Sanity.Category[]
}

export default function CategoryIndexPage({ categories }: Props) {
  console.log(categories)
  return <div>Page</div>
}
