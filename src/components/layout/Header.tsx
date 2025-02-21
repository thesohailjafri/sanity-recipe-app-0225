"use client"

import { NavLink } from "@/types/type"
import Link from "next/link"
import { Input } from "../ui/input"
import Logo from "./Logo"
import MyContainer from "./MyContainer"
import { siteMap } from "@/lib/config/site.config"

export default function Header() {
  return (
    <>
      <div className="fixed w-full">
        <div className="w-full py-6 border-b-2">
          <MyContainer className="px-10">
            <div className="flex justify-evenly items-center gap-10">
              <Logo />
              <Input
                placeholder="Search by brand, color, etc."
                className="border-2 py-5 text-2xl"
              />
              <DesktopMenu />
            </div>
          </MyContainer>
        </div>
        <div className="flex gap-4 mx-auto justify-center w-full  border-b-2">
          {storeLinks.map((navLink) => {
            return (
              <div
                key={navLink.label}
                className="my-4 font-semibold text-md cursor-pointer
								after:block after:absolute after:w-full after:bg-black after:h-0.5 
								after:scale-x-0 hover:after:scale-x-100 transition-all duration-150 ease-out relative
								"
              >
                <Link href={navLink.href}>{navLink.label}</Link>
              </div>
            )
          })}
        </div>
      </div>
      <div className="h-52" />
    </>
  )
}

const DesktopMenu = () => {
  return (
    <div className="gap-4 flex  min-w-fit">
      {headerNavLinks.map((navLink) => {
        return (
          // <Box
          //   key={navLink.label}
          //   fontWeight={"extrabold"}
          //   fontSize={"md"}
          //   cursor={"pointer"}
          //   color={
          //     navLink.href === getCanonicalUrl(pathname)
          //       ? "brand.lightBlue"
          //       : ""
          //   }
          // >
          <div
            key={navLink.label}
            className="font-semibold text-md cursor-pointer"
          >
            <Link href={navLink.href}>{navLink.label}</Link>
          </div>
          // </Box>
        )
      })}
    </div>
  )
}

const headerNavLinks: NavLink[] = [
  {
    label: "Home",
    href: siteMap.home,
  },
  {
    label: "About Us",
    href: siteMap.home,
  },
  {
    label: "FAQs",
    href: siteMap.home,
  },
]

const storeLinks: NavLink[] = [
  {
    label: "Air Jordan",
    href: siteMap.home,
  },
  {
    label: "Nike",
    href: siteMap.home,
  },
  {
    label: "Adidas",
    href: siteMap.home,
  },
  {
    label: "New Balance",
    href: siteMap.home,
  },
  {
    label: "Yeezy",
    href: siteMap.home,
  },
  {
    label: "Onitsuka Tiger",
    href: siteMap.home,
  },
  {
    label: "Kyrie Irving",
    href: siteMap.home,
  },
  {
    label: "Athlete",
    href: siteMap.home,
  },
]
