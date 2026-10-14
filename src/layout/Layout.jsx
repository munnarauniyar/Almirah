import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import BottomNav from "../components/BottomNav"

const Layout = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="pt-16 pb-16 md:pb-0">
        <Outlet />
      </main>

      <BottomNav />
    </div>
  )
}

export default Layout