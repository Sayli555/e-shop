import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SingleProduct from '../../components/products/SingleProduct'
import Mens from './Mens'
import Women from './Women'

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" />
        <Route path="/mens" element={<Mens/>} />
        <Route path="/womens" element={<Women/>} />
        {/* <Route path="/mens/:id" element={<SingleProduct/>} /> */}
        <Route path="/womens/:id" element={<SingleProduct/>} />
      </Routes>
    </div>
  )
}

export default MainRoutes
