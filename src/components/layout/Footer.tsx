import React from "react";
import Link from "next/link";
import MyContainer from "./MyContainer";

export default function Footer() {
  return (
    <div className="bg-foreground rounded-t-2xl text-white py-8 space-y-8">
      <MyContainer>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          <div className="min-h-10 min-w-10 col-span-3 lg:col-span-2 col-start-1 row-start-1 space-y-3">
            <h1 className="text-4xl font-bold">
              TheZen<span className="text-secondary">Recipe</span>
            </h1>
            <p className="text-tertiary">
              Join TheZenRecipe now and embark on a culinary journy to explore,
              create, and savor amazing recipes!
            </p>
          </div>
          <div className="min-h-10  min-w-10 md:row-start-2 lg:row-start-1  ">
            <h2 className="text-2xl font-bold">Company</h2>
            <div className="flex text-tertiary flex-col gap-3 my-3">
              {company.map((content, index) => (
                <Link key={index} href={content.path} className="text-xl">
                  {content.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="min-h-10  min-w-10 row-start-3 md:row-start-2 lg:row-start-1  ">
            <h2 className="text-2xl font-bold">Recipes</h2>
            <div className="flex text-tertiary flex-col gap-3 my-3">
              {recipes.map((recipe, index) => (
                <Link key={index} href={recipe.path} className="text-xl">
                  {recipe.category}
                </Link>
              ))}
            </div>
          </div>
          <div className="min-h-10  min-w-10 row-start-4 md:row-start-2  lg:row-start-1 ">
            <h2 className="text-2xl font-bold">Contact</h2>
            <div className="flex text-tertiary flex-col gap-3 my-3">
              {contact.map((social, index) => (
                <Link key={index} href={social.path} className="text-xl">
                  {social.social}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse lg:flex-row gap-5 lg:items-center lg:justify-between">
          <p className="text-tertiary">
            Copyright &copy; {new Date().getFullYear()} TheZenRecipes. All
            rights reserved.
          </p>
          <div className="flex gap-2 flex-col md:flex-row w-full md:w-auto ">
            <input
              className="w-full lg:w-[450px] p-3 rounded-3xl"
              placeholder="Enter your email"
            />
            <button className="bg-secondary rounded-3xl p-3 w-full md:w-28 text-foreground font-bold">
              Sign up
            </button>
          </div>
        </div>
      </MyContainer>
    </div>
  );
}

const company = [
  {
    title: "Home",
    path: "#",
  },
  {
    title: "About Us",
    path: "#",
  },
  {
    title: "Recipes",
    path: "#",
  },
  {
    title: "Recipes Form",
    path: "#",
  },
];

const recipes = [
  {
    category: "Appetizers",
    path: "#",
  },
  {
    category: "Main Courses",
    path: "#",
  },
  {
    category: "Deserts & Sweets",
    path: "#",
  },
  {
    category: "International Flavors",
    path: "#",
  },
];
const contact = [
  {
    social: "Instagram",
    path: "#",
  },
  {
    social: "Facebook",
    path: "#",
  },
  {
    social: "Twitter",
    path: "#",
  },
  {
    social: "LinkedIn",
    path: "#",
  },
];
