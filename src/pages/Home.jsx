import HeroSection from "../components/home/HeroSection"
import Catagorysection from "../components/home/Catagorysection"
import TrendingSection from "../components/home/TrendingSection"
const Home = () => {
  return (
    <div className="pb-19">
      <HeroSection/>
      <Catagorysection/>
      <TrendingSection/>
    </div>
  )
}

export default Home