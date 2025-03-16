import { Sanity } from '@/types'

type Props = {
  category: Sanity.Category
}

export default function CategoryCard({ category }: Props) {
  console.log(category)
  return <div>Card</div>
}
