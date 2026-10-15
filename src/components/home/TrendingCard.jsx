
const TrendingCard = (elem) => {
  return (
     <div className="h-55 lg:h-[380px] rounded-2xl  shadow md:rounded-3xl overflow-hidden shrink-0">
        <div style={{ backgroundImage: `url(${elem.img})`, backgroundPosition: "center",  backgroundSize: "cover"}} className="flex items-center justify-between h-full flex-col pt-5 pb-2 px-5">
          <div>
          <h1 className="font-bold lg:text-[25px]">{elem.title}</h1>
          <p className="text-[13px] text-gray-700">{elem.subTitle}</p>
          </div>
          <div>
          <button className="rounded-full text-xs md:text-sm whitespace-nowrap px-5 border-1-black h-5 md:h-11 font-bold bg-black text-white active:scale-95">{elem.btntxt}</button>
          </div>
        </div>
    </div>
  )
}

export default TrendingCard