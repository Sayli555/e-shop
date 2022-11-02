import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { logout } from '../redux/auth/action';
import { AddToCart } from '../redux/cart/action';
import "./navbar.css";

const Navbar = () => {
  const carttotal=useSelector((state)=>state.cartReducer.cart);
  const [cartNo,setCartno]=useState(carttotal.length);
  const dispatch=useDispatch();

  const location=useLocation();
  // console.log("location",location.pathname);
  const [active,setActive]=useState("/");

 const check=useSelector((state)=>state.authReducer.checkuser);
 console.log("check",check)

 const navigate=useNavigate()


  useEffect(()=>{
    setActive(location.pathname)
  },[location])

  useEffect(()=>{
    setCartno(carttotal.length)
  },[carttotal,cartNo,location])

  useEffect(()=>{
    dispatch(AddToCart())
},[])



// ****************************login part***********************************************************

const navbarLogin=()=>{

  if(!check){
   
    navigate("/login");
    

  }
  else if(check){
    dispatch(logout())
    navigate("/");
  }
  

  
}
  // *******************************************************responsive part************************************


  const [isMobile,setIsMobile]=useState(false);



  return (
    
    <nav>
    <div className='navbar'>
    <div className='navbar-home'>
    <Link to="/"  className={active=="/"? "active link" : "Notactive link"}>HOME</Link>
    </div>
    <div className='navbar-other-product'>
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
    <div className={active=="/login"? "active link" : "Notactive link"}  onClick={navbarLogin}>
    {/* <Link to="/login" > */}
    {check ? "LOGOUT" : "LOGIN"}
   
    {/* </Link> */}
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

    
   
   
      
  
    </div>



     {/* ************************************responsive nvbar************************************** */}


    

<div className='navbar-mobile'>
        <h3 className='logo'>
        <Link to="/"  className="home">HOME</Link>
        </h3>
        <ul className={isMobile? "nav-mobile-links" : "nav-links"}
        onClick={()=>{setIsMobile(false)}}
        >
            <Link to="/mens" className="home">
            <li>MENS</li>
            </Link>
            <Link to="/womens" className="home">
            <li>WOMENS</li>
            </Link>
            <Link to="/accessories" className="home">
            <li>ACCESSORIES</li>
            </Link>


            {/* <div > */}
   <li className=" mobile-login" onClick={navbarLogin}>
    {check ? "LOGOUT" : "LOGIN"}
   
    </li>
     {/* </div> */}
    
       <Link to="/register" className="home">
       <li>
        REGISTER
       </li>
       </Link>
   

  
    <Link to="/cart" className="home">
    <li>
    CART<strong
    className={active=="/cart"? "activecart " : "Notactive "}
    >({cartNo})</strong>
    </li>
    </Link>
   
            
           
        </ul>
       
        <button className='mobile-menu-icons' 
        onClick={()=>setIsMobile(!isMobile)}
        >
            {isMobile ? <i className='fas fa-times'></i> : <i className='fas fa-bars'></i> }
        </button>
    </div>



   
  

</nav>
   
    
      
  
  )
}

export default Navbar
