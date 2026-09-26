import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Shop from "./pages/Shop"
import Catagories from "./pages/Catagories"
import Contact from "./pages/Contact"
import Help from "./pages/Help"
import Cart from "./pages/Cart"
import Wishlist from "./pages/Wishlist"
import Account from "./pages/Account"
import Search from "./pages/Search"
import Layout from "./layout/Layout"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/catagories" element={<Catagories/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/help" element={<Help/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/account" element={<Account/>}/>
        <Route path="/wishlist" element={<Wishlist/>} />
        <Route path="/search" element={<Search/>} />
      </Routes>
      

      <Layout/>

    </div>
  )
}

export default App