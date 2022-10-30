import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SingleProduct from '../components/products/SingleProduct'
import Cart from './Cart'
import Checkout from './Checkout'
import Home from './Home'
import Mens from './products/Mens'
import Women from './products/Women'

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/mens" element={<Mens/>} />
        <Route path="/womens" element={<Women/>} />
        <Route path="/mens/:id" element={<SingleProduct/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/checkout" element={<Checkout/>} />

        <Route path="/womens/:id" element={<SingleProduct/>} />
      </Routes>
    </div>
  )
}

export default MainRoutes
