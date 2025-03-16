import { getImageUrl } from "@/lib/sanity/util";
import { Sanity } from "@/types/sanity";
import MyContainer from "../layout/MyContainer";
import { PortableComponents } from "../layout/PortableComponents";

type Props = {
  recipe: Sanity.Recipe;
};

export default function RecipeSlugPage({ recipe }: Props) {
  return (
    <>
      <MyContainer className="p-5 space-y-5 my-5">
        <div className="flex align-middle justify-center flex-wrap">
          <img
            src={getImageUrl(recipe.image)}
            alt={recipe.title}
            className="rounded-xl"
            
           
          />
        </div>
        <div className="space-y-2 p-5">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            {recipe.title}
          </h2>
          <p>{recipe.description}</p>
        </div>
        <div className="p-5 bg-pink-50 rounded-xl space-y-4 p-5">
          <p className="text-pink-600 font-bold sm:text-2xl">
            Preparation time
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <span className="font-bold">Total : </span>
              {recipe.totalTime} Minutes
            </li>
            <li>
              <span className="font-bold">Preparation : </span>
              {recipe.preparationTime} Minutes
            </li>
            <li>
              <span className="font-bold">Cooking : </span>
              {recipe.cookingTime} Minutes
            </li>
          </ul>
        </div>
        <div className="space-y-4 p-5">
          <h2 className="text-2xl font-bold">Ingredients</h2>
          <ul className="list-disc list-inside space-y-2">
            {recipe.ingredients.map((ingredient, index) => {
              return <li key={index}>{ingredient}</li>;
            })}
          </ul>
        </div>
          <div className="border"></div>
        <div className="space-y-4 p-5">
          <h2 className="text-2xl font-bold">Instructions</h2>
          <div>
            <PortableComponents value={recipe.instructions}/>
          </div>
        </div>
          <div className="border"></div>
        <div className="space-y-4 p-5">
          <h2 className="text-2xl font-bold">Nutrition</h2>
          <p>The table below shows nutritional values per serving without the additional fillings.</p>
          <div className="grid grid-cols-2 space-y-2">
            <p>Calories</p>
            <p>{recipe.nutrition?.calories}kcal</p>
            <div className="border"></div>
            <div className="border"></div>
            <p>Carbs</p>
            <p>{recipe.nutrition?.carbs}g</p>
            <div className="border"></div>
            <div className="border"></div>
            <p>Protein</p>
            <p>{recipe.nutrition?.protein}g</p>
            <div className="border"></div>
            <div className="border"></div>
            <p>Fat</p>
            <p>{recipe.nutrition?.fat}g</p>
            <div className="border"></div>
            <div className="border"></div>
          </div>
        </div>
      </MyContainer>
    </>
  );
}
