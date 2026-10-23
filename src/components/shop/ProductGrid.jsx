import { SlidersHorizontal } from "lucide-react";
import { Search } from "lucide-react";
import ProductCard from "./ProductCard";

const ProductGrid = ({products}) => {
  return (
    <div className="pt-19 px-5 md:px-10">
        <div className="flex justify-between items-center font-bold text-4xl pb-5">
        <h1 className="">Explore Products</h1>
        <SlidersHorizontal size={24} strokeWidth={2} />
       </div>
       <div>
          <div className="relative w-full">
             <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-gray-400">
            <Search size={18} />
          </div>
          <input 
            className="border-2 pl-11 pr-11 h-[42px] md:h-[44px] focus:outline-none text-sm rounded-2xl w-full border-gray-500" 
            type="text" 
            placeholder="Search Products..." 
          />
          </div>
       </div>

       <div className="pt-5 flex gap-3 md:gap-5 overflow-x-auto scrollbar-none">
        <button className="bg-[#dadada] md:text-sm text-[10px] px-2 shrink-0 rounded-full text-black active:scale-95">All Products</button>
        <button className="bg-[#dadada] md:text-sm text-[10px] px-2 shrink-0 rounded-full text-black active:scale-95">Electronics</button>
        <button className="bg-[#dadada] md:text-sm text-[10px] px-2 shrink-0 rounded-full text-black active:scale-95">Fashion</button>
        <button className="bg-[#dadada] md:text-sm text-[10px] px-2 shrink-0 rounded-full text-black active:scale-95">Beauty</button>
        <button className="bg-[#dadada] md:text-sm text-[10px] px-2 shrink-0 rounded-full text-black active:scale-95">Sports</button>
        <button className="bg-[#dadada] md:text-sm text-[10px] px-2 shrink-0 rounded-full text-black active:scale-95">Smart Phones</button>
       </div>
       
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 pt-5">
     {products.map((elem)=>{
     return <ProductCard img={elem.image} name={elem.name} category={elem.category} brand={elem.brand} price={elem.price} description={elem.description}/>
     })}


     </div>

      
    </div>
  )
}

export default ProductGrid