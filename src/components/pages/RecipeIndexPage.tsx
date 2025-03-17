import { Sanity } from '@/types/sanity'

type Props = {
  recipes: Sanity.Recipe[]
}

export default function RecipeIndexPage({ recipes }: Props) {
  return <div>{recipes.length}</div>
}
