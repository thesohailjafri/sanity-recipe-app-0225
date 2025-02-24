import { Sanity } from '@/types'
import React from 'react'

type Props = {
  category: Sanity.Category
}

export default function CategoryCard({ category }: Props) {
  console.log(category)
  return <div>Card</div>
}
