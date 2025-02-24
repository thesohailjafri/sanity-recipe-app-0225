import { Sanity } from '@/types/sanity'
import React from 'react'

type Props = {
  recipes: Sanity.Recipe[]
}

export default function RecipeIndexPage({ recipes }: Props) {
  console.log(recipes)
  return <div>Page</div>
}
