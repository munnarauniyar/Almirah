import { NavLink } from "react-router-dom"
import { Heart, Home, ShoppingCart, Store, User } from "lucide-react"

const BottomNav = () => {
  return (
    <div className="flex fixed justify-between items-center h-16 px-4 py-4 md:hidden w-full border-t bottom-0 bg-white ">
        <NavLink
        className={({isActive})=>
              isActive ? " text-[#5B35D5] flex justify-center items-center flex-col gap-1 text-sm"  : "font-medium text-[#6B7280] flex justify-center items-center flex-col gap-1 text-sm"
          } to="/"><Home size={23} /> Home</NavLink>
        <NavLink
        className={({isActive})=>
              isActive ? " text-[#5B35D5] font-semibold flex justify-center items-center flex-col gap-1 text-sm"  : "font-medium text-[#6B7280] flex justify-center items-center flex-col gap-1 text-sm"
          } to="/shop"><Store size={23}/> Shop</NavLink>
        <NavLink
        className={({isActive})=>
              isActive ? " text-[#5B35D5] font-semibold flex justify-center items-center flex-col gap-1 text-sm"  : "font-medium text-[#6B7280] flex justify-center items-center flex-col gap-1 text-sm"
          } to="/wishlist"><Heart size={23}/> Wishlist</NavLink>
        <NavLink
        className={({isActive})=>
              isActive ? " text-[#5B35D5] font-semibold flex justify-center items-center flex-col gap-1 text-sm"  : "font-medium text-[#6B7280] flex justify-center items-center flex-col gap-1 text-sm"
          } to="/cart"><ShoppingCart size={23}/>Cart</NavLink>
        <NavLink
        className={({isActive})=>
              isActive ? " text-[#5B35D5] font-semibold flex justify-center items-center flex-col gap-1 text-sm"  : "font-medium text-[#6B7280] flex justify-center items-center flex-col gap-1 text-sm"
          } to="/account"><User size={23}/>Account</NavLink>
    </div>
  )
}

export default BottomNav