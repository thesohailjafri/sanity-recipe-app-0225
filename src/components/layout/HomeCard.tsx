import { Category } from "@/types";
import Image from "next/image";
import React from "react";
import { LuChefHat } from "react-icons/lu";

export default function HomeCard() {
  return (
    <div className="flex gap-5 flex-wrap justify-center">
      {menuCard.map((menuCard, index) => (
        <>
          <div key={index} className="bg-secondaryBg p-5 rounded-2xl space-y-5">
            <h1 className="text-start ml-2 text-3xl font-bold max-w-[370px]">
              {menuCard.categoryName}
            </h1>
            <div className="relative">
              <Image
                src={menuCard.image}
                alt={menuCard.categoryName}
                width={370}
                height={325}
              />
            </div>
            <div className="bg-foreground  text-secondaryBg px-4 py-3 rounded-3xl flex justify-between">
              <p>See complete recipe</p>
              <div className="bg-secondaryBg text-black rounded-full px-1 py-1">
                <LuChefHat />
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
}

const menuCard: Category[] = [
  {
    image:
      "https://framerusercontent.com/images/ADupjE4PKNi29LQWdKDb0vNxVRk.png",
    categoryName: "Spicy Mexican Tacos",
    href: "#",
    popupText :"lorem lorem lorem"
  },
  {
    image:
      "https://framerusercontent.com/images/ADupjE4PKNi29LQWdKDb0vNxVRk.png",
    categoryName: "Capress Salad Skewers",
    href: "#",
    popupText :"lorem lorem lorem"
  },
  {
    image:
      "https://framerusercontent.com/images/ADupjE4PKNi29LQWdKDb0vNxVRk.png",
    categoryName: "Quinoa & Chickpea Buddha",
    href: "#",
    popupText :"lorem lorem lorem"
  },
  {
    image:
      "https://framerusercontent.com/images/ADupjE4PKNi29LQWdKDb0vNxVRk.png",
    categoryName: "Creamy Chicken Parmesan",
    href: "#",
    popupText :"lorem lorem lorem"
  },
  {
    image:
      "https://framerusercontent.com/images/ADupjE4PKNi29LQWdKDb0vNxVRk.png",
    categoryName: "Mango Tango Smoothie",
    href: "#",
    popupText :"lorem lorem lorem"
  },
  {
    image:
      "https://framerusercontent.com/images/ADupjE4PKNi29LQWdKDb0vNxVRk.png",
    categoryName: "Chocolate Lava Cake",
    href: "#",
    popupText :"lorem lorem lorem"
  },
  {
    image:
      "https://framerusercontent.com/images/ADupjE4PKNi29LQWdKDb0vNxVRk.png",
    categoryName: "Spinach and Feta Stuffed",
    href: "#",
    popupText :"lorem lorem lorem"
  },
  {
    image:
      "https://framerusercontent.com/images/ADupjE4PKNi29LQWdKDb0vNxVRk.png",
    categoryName: "Thai Green Chicken Curry",
    href: "#",
    popupText :"lorem lorem lorem"
  },
  {
    image:
      "https://framerusercontent.com/images/ADupjE4PKNi29LQWdKDb0vNxVRk.png",
    categoryName: "Berry Bliss Delight Parfait",
    href: "#",
    popupText :"lorem lorem lorem"
  },
];
