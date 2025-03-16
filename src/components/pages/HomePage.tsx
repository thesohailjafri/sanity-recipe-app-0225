import { Sanity } from "@/types";
import Image from "next/image";
import Link from "next/link";
import MyContainer from "../layout/MyContainer";
import RecipeList from "../layout/RecipeList";

type Props = {
  categories: Sanity.Category[];
  recipes: Sanity.Recipe[];
};

export default function HomePage({ categories, recipes }: Props) {
  return (
    <MyContainer className="px-10">
      <Hero />
      <RecipeList
        recipes={recipes}
        categories={categories}
        showCategoryFilter={true}
      />
    </MyContainer>
  );
}

function Hero() {
  return (
    <>
      <div className="my-10">
        <Link href="#" target="_blank" className="block w-full">
          <div className="relative">
            <div className="relative w-full h-48 md:h-64 lg:h-80 xl:h-96">
              <Image
                src="https://framerusercontent.com/images/VEcwceieYROJCbDt170jHn1DYFs.png?scale-down-to=2048"
                alt="Banner"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
            <h2 className="absolute bottom-5 left-4 text-xl md:text-4xl md:bottom-28 lg:bottom-36 md:left-14 font-bold ">
              <span className="block">Explore</span>
              <span className="block">Culinary Insight</span>
            </h2>
          </div>
        </Link>
      </div>
    </>
  );
}
