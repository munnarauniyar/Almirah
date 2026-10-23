import { Heart } from "lucide-react"

const ProductCard = (elem) => {
  return (
    <div className="flex flex-col justify-between  w-full bg-[white] overflow-hidden shrink-0 hover:shadow-xl">
        <div className="h-50 md:h-80 overflow-hidden border-b shrink-0 border-gray-100">
            <img  className="h-full w-full object-cover"  src={elem.img} alt="" />
        </div>
        <div className="p-2">
            <p className="text-gray-400">{elem.category} . {elem.brand}</p>
            <h1 className="text-xl">{elem.name}</h1>
        </div>
        <div className="flex justify-between px-2">
            <h3 className="text-3xl py-2 text-[#D4AF37]">${elem.price}</h3>
            <button><Heart/></button>
            </div>
        <button className="bg-[#5B35D5] text-white font-bold py-3">
            Add to Cart
        </button>
    </div>
  )
}

export default ProductCard