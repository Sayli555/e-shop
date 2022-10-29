import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <Link to="/" >HOME</Link>
      <Link to="/mens" >MENS</Link>
      <Link to="/womens" >WOMENS</Link>
      <Link to="/cart" >cart</Link>
      
    </div>
  )
}

export default Navbar
