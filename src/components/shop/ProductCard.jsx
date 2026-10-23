import { Heart } from "lucide-react"

const ProductCard = (elem) => {
  return (
    <div className="flex flex-col justify-between h-100 md:h-120 w-full bg-[#f6f2f2] overflow-hidden shrink-0 hover:shadow">
        <div className="h-50 md:h-80 overflow-hidden border-b border-gray-100">
            <img  className="h-full w-full object-cover"  src={elem.img} alt="" />
        </div>
        <div className="p-2">
            <p className="text-gray-400">{elem.category} . {elem.brand}</p>
            <h1>{elem.name}</h1>
            <h3>{elem.discription}</h3>
            <div className="flex justify-between">
            <h3>${elem.price}</h3>
            <button><Heart/></button>
            </div>
        </div>
        <button>
            Add to Cart
        </button>
    </div>
  )
}

export default ProductCard