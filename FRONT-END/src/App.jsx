import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './component/Nav'
import SellOffer from './component/SellOffer'
import { Route, Routes, useLocation } from 'react-router-dom'
import Hero from './component/Hero'
import Footer from './component/Footer'
import Buynow from './component/Buynow'
import Login from './component/Login'
import Signup from './component/Signup'
import Logout from './component/Logout'
import Men from './component/Men'


function App() {


  const [buynow, setBuynow] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  const location = useLocation()
  const ref = useRef()


  const Buynowproduct = (product) => {
    const alreadyInCart = buynow.find(
      (item) => item.desc === product.desc
    )
    if (!alreadyInCart) {
      const updateCart = [...buynow, product];
      setBuynow(updateCart);
      alert("Product added in cart");
      localStorage.setItem("cart", JSON.stringify(updateCart))
    } else {
      alert("Product already in cart");
    }

  }


  useEffect(() => {
    if (ref.current) {
      ref.current.focus()
    }
    const handlekeypress = () => {
      if (document.activeElement !== ref.current) {
        ref.current.focus()
      }
    }

    window.addEventListener("keydown", handlekeypress)

    return () => {
      window.removeEventListener("keydown", handlekeypress)
    }
  }, [])


  const hideNav = location.pathname === "/Login" || location.pathname === "/Signup"

  const [user, setUser] = useState(null);

  return (
    <>

      {!hideNav && <Nav ref={ref} users={user} setUser={setUser} />}

      <Routes>  
        <Route path='/Shop' element={<h1>Shop</h1>} />
        <Route path='/Buynow' element={<Buynow buynow={buynow} />} />
        <Route path='/Login' element={<Login  setUser={setUser}/>} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/Logout' element={<Logout />}/>
        <Route path='/Men' element={<Men />}/>
      </Routes>
      {location.pathname === "/" && <SellOffer />}
      {location.pathname === "/" && <Hero Buynowproduct={Buynowproduct} users={user} />}


      {!hideNav && <Footer />}
    </>
  )
}

export default App
