import { NavLink } from "react-router-dom"
import { ShoppingCart, User } from "lucide-react"

const Navbar = () => {
  return (
    <div className="flex z-20 fixed w-full justify-between items-center py-4 h-16 pl-2 pr-4  bg-white shadow">
         <NavLink to="/"><img className="h-13" src="Almirahlogo.png" alt="Almirah_logo" /></NavLink>
        <div className="md:flex hidden text-[16px]  gap-10">

            <NavLink
            className={({isActive})=>
              isActive ? "border-[#5B35D5] text-[#5B35D5] font-semibold border-b-2 pb-1"  : "font-medium text-[#6B7280] pb-1"
            } to="/" >Home </NavLink>
            <NavLink className={({isActive})=>
              isActive ? "border-[#5B35D5] text-[#5B35D5] font-semibold border-b-2 pb-1"  : "font-medium text-[#6B7280] pb-1"
            }   to="/shop">Shop</NavLink>
            <NavLink className={({isActive})=>
              isActive ? "border-[#5B35D5] text-[#5B35D5] font-semibold border-b-2 pb-1"  : "font-medium text-[#6B7280] pb-1"
            }   to="/catagories">Catagories</NavLink>
            <NavLink className={({isActive})=>
              isActive ? "border-[#5B35D5] text-[#5B35D5] font-semibold border-b-2 pb-1"  : "font-medium text-[#6B7280] pb-1"
            }   to="/contact">Contact</NavLink>
            <NavLink className={({isActive})=>
              isActive ? "border-[#5B35D5] text-[#5B35D5] font-semibold border-b-2 pb-1"  : "font-medium text-[#6B7280] pb-1"
            }   to="/help">Help</NavLink>
        </div>

        <div className="flex gap-6">
            <NavLink className={({isActive})=>
              isActive ? " text-[#5B35D5] font-semibold "  : "font-medium text-[#6B7280]"
            } to="/cart">
            <button><ShoppingCart size={23} /></button>
            </NavLink>

            <NavLink
            className={({isActive})=>
              isActive ? " text-[#5B35D5] font-semibold "  : "font-medium text-[#6B7280]"
            } to="/account">
            <button><User size={23} /></button>
            </NavLink>
        </div>
    </div>
  )
}

export default Navbar