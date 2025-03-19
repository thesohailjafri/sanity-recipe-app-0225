import { getImageUrl } from '@/lib/sanity/util'
import { Sanity } from '@/types/sanity'
import Container from '../layout/Container'
import { PortableComponents } from '../layout/PortableComponents'
import { title } from 'process'

type Props = {
  recipe: Sanity.Recipe
}

export default function RecipeSlugPage({ recipe }: Props) {
  const nutritions = [
    {
      title: 'Calories',
      value: recipe.nutrition?.calories
    },
    {
      title: 'Carbs',
      value: recipe.nutrition?.carbs
    },
    {
      title: 'Proteins',
      value: recipe.nutrition?.proteins
    },
    {
      title: 'Fats',
      value: recipe.nutrition?.fats
    }
  ]
  return (
    <div className='p-5 space-y-5 max-w-3xl mx-auto'>
      <div className='flex align-middle justify-center flex-wrap'>
        <img src={getImageUrl(recipe.image)} alt={recipe.title} className='rounded-xl' />
      </div>
      <div className='space-y-2'>
        <h2 className='font-serif text-2xl sm:text-3xl md:text-4xl font-bold'>{recipe.title}</h2>
        <p>{recipe.description}</p>
      </div>
      <div className='p-5 bg-pink-50 rounded-xl space-y-4'>
        <p className='text-pink-600 font-bold sm:text-2xl'>Preparation time</p>
        <ul className='list-disc list-inside space-y-2'>
          <li>
            <span className='font-bold'>Total : </span>
            {recipe.totalTime} Minutes
          </li>
          <li>
            <span className='font-bold'>Preparation : </span>
            {recipe.preparationTime} Minutes
          </li>
          <li>
            <span className='font-bold'>Cooking : </span>
            {recipe.cookingTime} Minutes
          </li>
        </ul>
      </div>
      <div className='space-y-4 p-5'>
        <h2 className='text-2xl font-bold'>Ingredients</h2>
        <ul className='list-disc list-inside space-y-2'>
          {recipe.ingredients.map((ingredient, index) => {
            return <li key={index}>{ingredient}</li>
          })}
        </ul>
      </div>
      <div className='border'></div>
      <div className='space-y-4 p-5'>
        <h2 className='text-2xl font-bold'>Instructions</h2>
        <div>
          <PortableComponents value={recipe.instructions} />
        </div>
      </div>
      <div className='border'></div>
      <div className='space-y-4 p-5'>
        <h2 className='text-2xl font-bold'>Nutrition</h2>
        <p>The table below shows nutritional values per serving without the additional fillings.</p>
        <div className='grid grid-cols-2 space-y-2'>{/* Todo: Implement */}</div>
      </div>
    </div>
  )
}
