import { Link } from "react-router-dom"
import { ShoppingCart, User } from "lucide-react"

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4  bg-white font-semibold shadow-sm">
        <img className="h-10 pl-6" src="../../public/Almirah_logo.png" alt="" />
        <div className="flex text-[#6B7280] gap-10">
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/catagories">Catagories</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/help">Help</Link>
        </div>
        <div className="flex gap-6 pr-6">
            <Link className="text-[#5B35D5] " to="/cart">
            <button><ShoppingCart /></button>
            </Link>

            <Link to="/user">
            <button><User /></button>
            </Link>
        </div>
    </div>
  )
}

export default Navbar