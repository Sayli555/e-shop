import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom';
import { AddToCart } from '../redux/cart/action';
import "./navbar.css";

const Navbar = () => {
  const carttotal=useSelector((state)=>state.cartReducer.cart);
  const [cartNo,setCartno]=useState(carttotal.length);
  const dispatch=useDispatch()

  const location=useLocation();
  console.log("location",location.pathname);
  const [active,setActive]=useState("/")

  useEffect(()=>{
    setActive(location.pathname)
  },[location])

  useEffect(()=>{
    setCartno(carttotal.length)
  },[carttotal,cartNo,location])

  useEffect(()=>{
    dispatch(AddToCart())
},[])

  
  return (
    <div className='navbar'>
    <div>
    <Link to="/"  className={active=="/"? "active link" : "Notactive link"}>HOME</Link>
    </div>

    <div className='navbar-products'>
    <div>
    <Link to="/mens" className={active=="/mens"? "active link" : "Notactive link"}>MENS</Link>
    </div>
    <div>
    <Link to="/womens" className={active=="/womens"? "active link" : "Notactive link"}>WOMENS</Link>
    </div>
    <div>
    <Link to="/accessories" className={active=="/accessories"? "active link" : "Notactive link"}>ACCESSORIES</Link>
    </div>
     
    </div>
    <div className='navbar-login-register'>
    <div>
    <Link to="/login" className={active=="/login"? "active link" : "Notactive link"}>LOGIN</Link>
    </div>
    <div>
      <Link to="/register" className={active=="/register"? "active link" : "Notactive link"}>REGISTER</Link>
    </div>
    <div>
    <Link to="/cart" className={active=="/cart"? "active link" : "Notactive link"} >CART<strong
    className={active=="/cart"? "activecart " : "Notactive "}
    >({cartNo})</strong></Link>
    </div>
   
      
    </div>
    
   
    
      
     
      
      
  
    </div>
  )
}

export default Navbar
