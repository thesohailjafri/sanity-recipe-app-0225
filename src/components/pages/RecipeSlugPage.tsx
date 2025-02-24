import { Sanity } from '@/types/sanity'
import React from 'react'

type Props = {
  recipe: Sanity.Recipe
}

export default function RecipeSlugPage({ recipe }: Props) {
  console.log(recipe)
  return <div>Page</div>
}
