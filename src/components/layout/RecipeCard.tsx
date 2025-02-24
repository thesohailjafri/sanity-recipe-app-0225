import { Sanity } from '@/types'
import React from 'react'

type Props = {
  recipe: Sanity.Recipe
}

export default function RecipeCard({ recipe }: Props) {
  console.log(recipe)
  return <div>Card</div>
}
