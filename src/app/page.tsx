import HomePage from "@/components/pages/HomePage";
import { CATEGORIES_QY, RECIPES_CARD } from "@/lib/sanity/queries";
import { sanityFetch } from "@/lib/sanity/util";
import { Sanity } from "@/types";

export default async function Home() {
  const catogories = await sanityFetch<Sanity.Category[]>(CATEGORIES_QY);
  const recipes = await sanityFetch<Sanity.Recipe[]>(RECIPES_CARD);

  return <HomePage categories={catogories} recipes={recipes} />;
}
