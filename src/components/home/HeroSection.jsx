
const HeroSection = () => {
  return (
    <div className="flex bg-[url(Home.png)] bg-cover overflow-hidden w-full items-center justify-between h-80 md:h-170 pt-16">
        <div className="w-3/5 p-5 md:p-10 h-full">
        <input className="border-2 px-4 py-1 text-sm  rounded-full w-40 md:w-170  border-gray-500" type="text" placeholder="Search for products!" />
        
        </div>
        <div className="w-2/5 flex items-center justify-center h-full">
        <img className="h-55 md:h-150 mix-blend-multiply" src="https://sony.scene7.com/is/image/sonyglobalsolutions/WH1000XM6_Primary_image_Black?$categorypdpnav$&fmt=png-alpha" alt="" />
        </div>
    </div>
  )
}

export default HeroSection