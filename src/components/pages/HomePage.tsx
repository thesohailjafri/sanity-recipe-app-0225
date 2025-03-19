import { getImageUrl } from '@/lib/sanity/util'
import { Sanity } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import Container from '../layout/Container'
import RecipeList from '../layout/RecipeList'
import { pagePath } from '@/lib/config/site.config'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '../ui/carousel'

type Props = {
  banners: Sanity.Banner[]
  categories: Sanity.Category[]
  recipes: Sanity.Recipe[]
}

export default function HomePage({ banners, categories, recipes }: Props) {
  return (
    <Container>
      <Banners banners={banners} />
      <RecipeList recipes={recipes} categories={categories} showCategoryFilter={true} />
    </Container>
  )
}

type BannersProps = {
  banners: Sanity.Banner[]
}
function Banners({ banners }: BannersProps) {
  const getLink = (banner: Sanity.Banner) => {
    let link = '#'
    switch (banner?.resourceReference?._type) {
      case 'recipe':
        link = pagePath.recipeSlug(banner.resourceReference.slug.current)
        break
      case 'category':
        link = pagePath.categorySlug(banner.resourceReference.slug.current)
        break
    }
    return link
  }
  return (
    <Carousel>
      <CarouselContent>
        {banners.map((banner, index) => (
          <CarouselItem key={index} className='md:basis-1/2'>
            <Link href={getLink(banner)} target='_blank' className='block w-full'>
              <div className='relative'>
                <div className='aspect-video aspect-w-16 aspect-h-9'>
                  <Image
                    src={getImageUrl(banner.image)}
                    alt={banner.image?.alt ?? 'Image for banner'}
                    fill
                    className='object-cover rounded-2xl'
                  />
                </div>
              </div>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
