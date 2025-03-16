import Hero from "@/components/layout/Hero"
import HomeCard from "@/components/layout/HomeCard"
import MyContainer from "@/components/layout/MyContainer"

export default function Home() {
  return (
    <MyContainer className="px-10">
      <Hero/>
      <HomeCard/>
    </MyContainer>
  )
}
