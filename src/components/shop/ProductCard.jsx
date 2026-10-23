
const ProductCard = (elem) => {
  return (
    <div className="flex flex-col justify-between h-100 md:h-120 w-full shadow bg-[#f6f2f2] rounded-2xl overflow-hidden shrink-0">
        <div className="h-50 md:h-80 overflow-hidden border-b border-gray-100">
            <img  className="h-full w-full object-cover"  src={elem.img} alt="" />
        </div>
        <div>
            <p>Electronics·Sony</p>
            <h1>{elem.name}</h1>
            <div>
            <h3>price</h3>
            <button>heart</button>
            </div>
        </div>
        <button>
            Add to Cart
        </button>
    </div>
  )
}

export default ProductCard