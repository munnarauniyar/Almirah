import { Mic, Search } from "lucide-react"
import heroimg from "./hero-bg.jpg"
import Catagorysection from "./Catagorysection"

const HeroSection = () => {
  return (
    <div>
    <div style={{ backgroundImage: `url(${heroimg})`, backgroundPosition: "center",  backgroundSize: "cover"}} className=" from-[#F8F7FF] via-[#EEE9FF] to-[#DCD2FF] pt-19  md:pt-26 p-5 bg-cover bg-center overflow-hidden w-full h-80 md:h-160">

    <div className="relative w-full md:w-[420px]">
  
  <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-gray-400">
    <Search size={18} />
  </div>

  
  <input 
    className="border-2 pl-11 pr-11 h-[42px] md:h-[44px] focus:outline-none text-sm rounded-full w-full border-gray-500" 
    type="text" 
    placeholder="Search for products" 
  />

 
  <button 
    type="button"
    className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-400 hover:text-gray-600 transition-colors">
    <Mic size={18} />
  </button>
</div>

  

    <div className="flex items-center justify-between">
        <div className="w-3/5 md:w-6/11 h-full">

        <div className="py-[10px] 0 h-full  flex flex-col items-start justify-center">
          <div className="h-6 w-15 md:h-10 md:w-20 overflow-hidden flex items-center">
          <img className="h-full w-full object-cover" src="https://logos-world.net/wp-content/uploads/2020/06/Sony-Logo-1961.png" alt="brand logo" />
          </div>

          <div>
            <h3 className="text-4xl whitespace-nowrap md:text-8xl font-light">Sound Pro</h3>
            <h3 className="text-4xl whitespace-nowrap md:text-8xl font-bold">A56 Headset</h3>
          </div>


          <div className="flex gap-3 md:gap-5 pt-3 md:pt-6">
            <button className="rounded-full text-sm whitespace-nowrap px-5 border-1 h-10 md:h-12 font-bold bg-black text-white active:scale-95">Buy Now</button>
            <button className="rounded-full text-sm whitespace-nowrap px-5 h-10 md:h-12 font-normal border-1 text-black active:scale-95">Explore Shop</button>
          </div>
        </div>
        </div>


        <div className="w-2/5 md:w-5/11 py-5 flex items-center justify-start h-full">
        <div className="md:w-3/5 overflow-hidden  h-40 md:h-120 flex w-full justify-center items-center">
        <img className="lg:pb-20 object-cover" src="https://www.simcoeav.ca/cdn/shop/files/sony-wh-1000xm6-pink-straight-view.webp?v=1780081168&width=1200" alt="" />
        </div>
        <div className="hidden md:w-2/5 h-full md:flex  flex-col">
          <div className="h-60 flex items-center justify-start w-full">
            <div className="border  border-[#5B35D5] font-bold text-2xl px-5 py-3 shadow rounded-full bg-[#5b35d5] text-white hover:scale-105">$45.56</div>
          </div>
          <div className="h-60 w-60 p-15 flex overflow-hidden items-center justify-center">
            <img className="h-full w-full object-cover" src="https://file.aiquickdraw.com/imgcompressed/img/compressed_53c072e1ebbad799b69d4cb85c04d4dd.webp" alt="" />
          </div>
        </div>
        </div>
     </div>

    </div>

    <Catagorysection />
    </div>
  )
}

export default HeroSection