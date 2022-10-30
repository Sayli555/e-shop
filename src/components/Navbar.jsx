import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import "./navbar.css";

const Navbar = () => {
  
  return (
    <div className='navbar'>
    <div>
    <Link to="/"  className='link'>HOME</Link>
    </div>

    <div className='navbar-products'>
    <div>
    <Link to="/mens" className='link'>MENS</Link>
    </div>
    <div>
    <Link to="/womens" className='link'>WOMENS</Link>
    </div>
    <div>
    <Link to="/accessories" className='link'>ACCESSORIES</Link>
    </div>
     
    </div>
    <div className='navbar-login-register'>
    <div>
    <Link to="/login" className='link'>LOGIN</Link>
    </div>
    <div>
      <Link to="/register" className='link'>REGISTER</Link>
    </div>
    <div>
    <Link to="/cart" className='link' >CART</Link>
    </div>
   
      
    </div>
    
   
    
      
     
      
      
  
    </div>
  )
}

export default Navbar
