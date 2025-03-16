import { Sanity } from "@/types/sanity";
import React from "react";
import MyContainer from "../layout/MyContainer";
import HomeCard from "../layout/HomeCard";

type Props = {
  categories: Sanity.Category[];
};

export default function CategoryIndexPage({ categories }: Props) {
  console.log(categories);
  return (
    <MyContainer className="space-y-5">
      <h1 className="text-center text-3xl font-bold m-5 lg:text-4xl">All Categories</h1>
      <HomeCard/>
    </MyContainer>
  );
}
