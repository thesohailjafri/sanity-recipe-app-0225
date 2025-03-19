import { pagePath } from '@/lib/config/site.config'
import { getImageUrl } from '@/lib/sanity/util'
import { Sanity } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import { LuChefHat } from 'react-icons/lu'

type Props = {
  recipe: Sanity.Recipe
}

export default function RecipeCard({ recipe }: Props) {
  return (
    <Link
      href={pagePath.recipeSlug(recipe.slug.current)}
      className='group flex flex-col overflow-hidden rounded-2xl bg-orange-100 min-h-[400px] max-w-sm'>
      <Image
        src={getImageUrl(recipe.image)}
        alt={recipe.title}
        width={350}
        height={825}
        className='w-full aspect-video object-cover group-hover:scale-105 transition-all duration-300 group-hover:opacity-90'
      />
      <div className='p-5 flex flex-col justify-between h-full'>
        <div className='space-y-4'>
          <p className='text-2xl font-bold'>{recipe.title}</p>
          <p className='text-sm line-clamp-2'>{recipe.description}</p>
        </div>
        <div className='bg-orange-900 text-orange-100 mt-8 px-4 py-3 rounded-3xl flex justify-between'>
          <span>See Complete Recipe</span>
          <div className='bg-orange-100 text-black rounded-full p-1'>
            <LuChefHat />
          </div>
        </div>
      </div>
    </Link>
  )
}
