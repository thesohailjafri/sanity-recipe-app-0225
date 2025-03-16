import { pagePath } from "@/lib/config/site.config";
import { getImageUrl } from "@/lib/sanity/util";
import { Sanity } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { LuChefHat } from "react-icons/lu";

type Props = {
  recipe: Sanity.Recipe
}

export default function RecipeCard({ recipe }: Props) {
  console.log(recipe)
  return (
    <>
      <Link
        href={pagePath.recipeSlug(recipe.slug.current)}
        className="group overflow-hidden"
      >
        <div className="bg-secondaryBg p-5 rounded-2xl space-y-5 z-50 relative">
          <p className="w-96 ml-2 translate-y-[-90px] absolute group-hover:translate-y-[0px] duration-300 ease-in-out line-clamp-2">
            {recipe.description}
          </p>
          <h1 className="text-start ml-2 text-3xl translate-y-[-20px] font-bold max-w-[370px] z-50 group-hover:translate-y-11  duration-300 ease-in-out">
            {recipe.title}
          </h1>
          <div className="relative group-hover:blur-sm duration-200 z-[-1] ease-in-out">
            <Image
              src={getImageUrl(recipe.image)}
              alt={recipe.title}
              width={350}
              height={825}
              className="z-[-1]"
            />
          </div>
          <div className="bg-foreground  text-secondaryBg px-4 py-3 rounded-3xl flex justify-between">
            <p>See Complete Recipe</p>
            <div className="bg-secondaryBg text-black rounded-full px-1 py-1">
              <LuChefHat />
            </div>
          </div>
        </div>
      </Link>
    </>
  )
}
