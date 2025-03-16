import { pagePath } from "@/lib/config/site.config";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
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
      <div className="my-10 space-y-5">
        <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-medium">
          What <span className="text-secondary ">to</span> Cook?
        </h2>
        <div className="flex justify-center align-middle gap-5 flex-wrap max-w-3xl mx-auto">
            {categories.map((category, index) => (
              <>
                <Link key={index} className=" " href={category.href}>
                  <div className=" bg-secondaryBg text-black px-4 py-3 rounded-3xl flex gap-3 hover:bg-foreground hover:text-secondaryBg hover:duration-300 active:text-secondaryBg active:bg">
                    <Image src={category.icon} alt={category.category} width={24} height={24}/>      
                    {category.category}
                  </div>
                </Link>
              </>
            ))}
          </div>
        
      </div>
    </>
  );
}
// changes which is required with other things

const categories = [
  {
    icon: "https://framerusercontent.com/images/LLB1timKO1IMBiyb719Hoyvu8w.png",
    category: "All Types",
    href: pagePath.category,
  },
  {
    icon: "https://framerusercontent.com/images/aELEM3AKS1YIxqh6mNDhuCc.png",
    category: "Appetizers",
    href: "#",
  },
  {
    icon: "https://framerusercontent.com/images/5cw8rJQNmiGopI1lUrq8kFFFJMw.png",
    category: "Main Courses",
    href: "#",
  },
  {
    icon: "https://framerusercontent.com/images/lsyMYJA28eKtSeFKHhmx0ZaT0.png",
    category: "Vegetarain Delights",
    href: "#",
  },
  {
    icon: "https://framerusercontent.com/images/AOLFGzFZmh4XqXQ0zY9tj99IRaQ.png",
    category: "International Flavors",
    href: "#", 
  },
  {
    icon: "https://framerusercontent.com/images/ZI9A5MQnODrKdGQbQS3uHz0FIC4.png",
    category: "Desserts & Sweets",
    href: "#",
  },
];
