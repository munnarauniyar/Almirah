import { NavLink } from "react-router-dom"
import { Heart, Home, Search, ShoppingCart, User } from "lucide-react"

const BottomNav = () => {
  return (
    <div className="flex fixed justify-between items-center bg-red-500 md:hidden w-full text-5xl bottom-0">
        <NavLink to="/"><Home/></NavLink>
        <NavLink to="/search"><Search/></NavLink>
        <NavLink to="/wishlist"><Heart/></NavLink>
        <NavLink to="/cart"><ShoppingCart/></NavLink>
        <NavLink to="/account"><User/></NavLink>
    </div>
  )
}

export default BottomNav