'use client'
import { cn } from '@/lib/utils'
import { Sanity } from '@/types'
import { useEffect, useState } from 'react'
import RecipeCard from './RecipeCard'
type Props = {
  recipes: Sanity.Recipe[]
  categories?: Sanity.Category[]
  showCategoryFilter?: boolean
}
export default function RecipeList({ recipes, categories, showCategoryFilter }: Props) {
  const [myRecipes, setMyRecipes] = useState(recipes)
  const [activeCategory, setActiveCategory] = useState<Sanity.Category | null>(null)
  useEffect(() => {
    // If no category is selected, show all recipes
    if (!activeCategory) {
      setMyRecipes(recipes)
      return
    }

    // Filter recipes based on the selected category
    const filteredRecipes = recipes.filter((recipe) => {
      return recipe?.categories?.some((category) => category._id === activeCategory._id)
    })

    setMyRecipes(filteredRecipes)
  }, [activeCategory, recipes])

  const tabClx =
    'bg-orange-100 text-sm px-4 py-3 rounded-3xl hover:bg-gray-900 hover:text-white hover:duration-300'
  const activeTabClx = 'bg-gray-900 text-orange-100'

  return (
    <div className=''>
      {showCategoryFilter && categories?.length && (
        <div className='my-10 space-y-8'>
          <h2 className='text-center text-2xl md:text-3xl lg:text-4xl font-semibold'>
            Recipes by Category
          </h2>
          <div className='flex justify-center align-middle gap-3 flex-wrap max-w-3xl mx-auto'>
            <button
              onClick={() => {
                setActiveCategory(null)
              }}
              className={cn(tabClx, !activeCategory && activeTabClx)}>
              All Types
            </button>
            {categories?.map((category) => (
              <button
                key={category._id}
                onClick={() => {
                  setActiveCategory(category)
                }}
                className={cn(tabClx, activeCategory?._id === category._id && activeTabClx)}>
                {category.title}
              </button>
            ))}
          </div>
        </div>
      )}
      <div className='flex gap-5 flex-wrap justify-center'>
        {myRecipes.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe} />
        ))}
      </div>
    </div>
  )
}
