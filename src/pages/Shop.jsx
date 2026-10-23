import ProductGrid from "../components/shop/ProductGrid"
import {product} from "../data/product"
const Shop = () => {
  return (
    <div>
      <ProductGrid products= {product}/>
    </div>
  )
}

export default Shop