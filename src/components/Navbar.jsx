import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import "./navbar.css";

const Navbar = () => {
  
  return (
    <div className='navbar'>
    <div>
    <Link to="/" >HOME</Link>
    </div>

    <div className='navbar-products'>
    <div>
    <Link to="/mens" >MENS</Link>
    </div>
    <div>
    <Link to="/womens" >WOMENS</Link>
    </div>
    <div>
    <Link to="/accessories" >ACCESSORIES</Link>
    </div>
     
    </div>
    <div className='navbar-login-register'>
    <div>
    <Link to="/login">LOGIN</Link>
    </div>
    <div>
      <Link to="/register" >REGISTER</Link>
    </div>
    <div>
    <Link to="/cart" >CART</Link>
    </div>
   
      
    </div>
    
   
    
      
     
      
      
  
    </div>
  )
}

export default Navbar
