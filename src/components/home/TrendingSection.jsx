
import { Star } from "lucide-react"
import { trendingData } from "../../data/trendingData"
import TrendingCard from "./TrendingCard"

const TrendingSection = () => {
  return (
     <div className="px-5 md:px-10 py-5 ">
        <div>
        <h1 className="flex gap-1 md:gap-2 md:pb-2 pb-1 font-bold text-[12px] md:text-xs text-[#5B35D5]"><Star size={16} />Trending Now</h1>
        </div>
        
       <div className="w-full flex justify-start gap-10 lg:gap-5 overflow-x-auto md:py-3 py-2 scroll-smooth scrollbar-none">

       {trendingData.map((elem)=>{

        return <TrendingCard title={elem.title} subTitle={elem.subtitle} img={elem.image} btntxt={elem.buttonText}  bgcolor={elem.bgcolor} />
       })}
    
    </div>
    </div>
  )
}

export default TrendingSection

