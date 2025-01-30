import React, { useEffect, useState } from 'react'
import Navbar from './components/navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Cart from './pages/cart/Cart'
import PlaceOrder from './pages/placeorder/PlaceOrder'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Footer from './components/footer/Footer'
import LoginPopup from './components/loginPopup/LoginPopup'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Verify from './pages/verify/Verify'
import MyOrders from './pages/myorders/MyOrders'

const App = () => {
  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100
    })
    Aos.refresh()
  }, [])

  const [showLogin, setShowLogin] = useState(false)
  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <div className='w-[80%] m-auto'>
        <ToastContainer autoClose={2000} />
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
          <Route path='/verify' element={<Verify />} />
          <Route path='/myorders' element={<MyOrders />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
