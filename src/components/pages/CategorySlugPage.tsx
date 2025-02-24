import { Sanity } from '@/types/sanity'
import React from 'react'

type Props = {
  category: Sanity.Category
}

export default function CollectionPage({ category }: Props) {
  console.log(category)
  return <div>Page</div>
}
