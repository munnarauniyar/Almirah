import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import BottomNav from "../components/BottomNav"

const Layout = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <BottomNav/>
    </div>
  )
}

export default Layout