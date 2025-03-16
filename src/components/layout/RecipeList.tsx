"use client";
import { cn } from "@/lib/utils";
import { Sanity } from "@/types";
import { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";
type Props = {
  recipes: Sanity.Recipe[];
  categories?: Sanity.Category[];
  showCategoryFilter?: boolean;
};
export default function RecipeList({
  recipes,
  categories,
  showCategoryFilter,
}: Props) {
  const [myRecipes, setMyRecipes] = useState(recipes);
  const [activeCategory, setActiveCategory] = useState<Sanity.Category | null>(
    null
  );
  useEffect(() => {
    // If no category is selected, show all recipes
    if (!activeCategory) {
      setMyRecipes(recipes);
      return;
    }

    // Filter recipes based on the selected category
    const filteredRecipes = recipes.filter((recipe) => {
      return recipe?.categories?.some(
        (category) => category._id === activeCategory._id
      );
    });

    setMyRecipes(filteredRecipes);
  }, [activeCategory, recipes]);
  return (
    <div className="">
      {showCategoryFilter && categories?.length && (
        <div className="my-10 space-y-5">
          <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-medium">
            What <span className="text-secondary ">to</span> Cook?
          </h2>
          <div className="flex justify-center align-middle gap-5 flex-wrap max-w-3xl mx-auto">
          <button
                onClick={() => {
                  setActiveCategory(null);
                }}
                className={cn(
                  "bg-secondaryBg text-black px-4 py-3 rounded-3xl flex gap-3 hover:bg-foreground hover:text-secondaryBg hover:duration-300 active:text-secondaryBg active:bg"
                )}
              >
                All Types
              </button>
            {categories?.map((category) => (
              <button
                key={category._id}
                onClick={() => {
                  setActiveCategory(category);
                }}
                className={cn(
                  "bg-secondaryBg text-black px-4 py-3 rounded-3xl flex gap-3 hover:bg-foreground hover:text-secondaryBg hover:duration-300 active:text-secondaryBg active:bg"
                )}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>
      )}
      <div className="flex gap-5 flex-wrap justify-center">
        {myRecipes.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}
