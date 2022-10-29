import React, { useState } from 'react';
import "./cart.css";
import {AiTwotoneDelete,AiOutlinePlus,AiOutlineMinus} from "react-icons/ai"

const CartS = ({cartpr}) => {
   
 const [quantity,setQuantity]=useState(1);


 const quantityadding=(val)=>{
    setQuantity(quantity+val)
 }
 console.log(quantity)
  return (
    <>
    {cartpr.map((cartpr)=>(
      <div className='cart-products-main-div'>
      <div className='cart-product-img'>
        <img
        src={cartpr.imageurl}
        width="100%"
        height="100%"
        />
      </div>
      <div className='cart-product-info'>
        <h2>{cartpr.brand}{" "} {cartpr.typeofproduct}</h2>
        <p>{cartpr.Name}
        </p>
        <h3>{cartpr.price}</h3>

    <div className='cart-plus-min'>
  <button onClick={()=>quantityadding(-1)}>
    <AiOutlineMinus/>
  </button>
  <span>{quantity}</span>
  <button onClick={()=>quantityadding(1)}>
    <AiOutlinePlus/>
  </button>
</div>
<button className='remove-button'>

  Remove 
</button>
      </div>
      
    </div>
    ))}
   
    </>
  )
}

export default CartS
