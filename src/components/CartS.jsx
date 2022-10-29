import React from 'react';
import "./cart.css";
import {AiTwotoneDelete,AiOutlinePlus,AiOutlineMinus} from "react-icons/ai"

const CartS = ({cartpr}) => {
   console.log("cartpr",cartpr)
  cartpr.map((e)=>{
    console.log("e",e)
  })

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
  <button>
    <AiOutlineMinus/>
  </button>
  <span>5</span>
  <button>
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
