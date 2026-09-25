import { NavLink } from "react-router-dom"
import { ShoppingCart, User } from "lucide-react"

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4  bg-white shadow">
         <NavLink to="/"><img className="h-10 pl-6" src="../../public/Almirah_logo.png" alt="" /></NavLink>
        <div className="md:flex hidden  gap-10">

            <NavLink
            className={({isActive})=>
              isActive ? "border-indigo-500 text-[#5B35D5] font-semibold border-b-2 pb-2"  : "font-medium text-[#6B7280]"
            } to="/" >Home </NavLink>
            <NavLink className={({isActive})=>
              isActive ? "border-indigo-500 text-[#5B35D5] font-semibold border-b-2 pb-2"  : "font-medium text-[#6B7280]"
            }   to="/shop">Shop</NavLink>
            <NavLink className={({isActive})=>
              isActive ? "border-indigo-500 text-[#5B35D5] font-semibold border-b-2 pb-2"  : "font-medium text-[#6B7280]"
            }   to="/catagories">Catagories</NavLink>
            <NavLink className={({isActive})=>
              isActive ? "border-indigo-500 text-[#5B35D5] font-semibold border-b-2 pb-2"  : "font-medium text-[#6B7280]"
            }   to="/contact">Contact</NavLink>
            <NavLink className={({isActive})=>
              isActive ? "border-indigo-500 text-[#5B35D5] font-semibold border-b-2 pb-2"  : "font-medium text-[#6B7280]"
            }   to="/help">Help</NavLink>
        </div>

        <div className="flex gap-6 pr-6">
            <NavLink className="text-[#5B35D5] " to="/cart">
            <button><ShoppingCart /></button>
            </NavLink>

            <NavLink to="/user">
            <button><User /></button>
            </NavLink>
        </div>
    </div>
  )
}

export default Navbar