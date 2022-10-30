import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CartS from '../components/CartS';
import { AddToCart } from '../redux/cart/action';

import "./cart.css"

const Cart = () => {
    const dispatch=useDispatch()
    const cartProducts=useSelector((state)=>state.cartReducer.cart);
    const TotalPrice=useSelector((state)=>state.cartReducer.TotalPrice);
    useEffect(()=>{
        dispatch(AddToCart())
    },[])
    
  return (
    <div className='cart-main-div'>
      <div className='cart-products'>
            <h2>Cart</h2>
            <div>
           {
            cartProducts.map((e)=>
            <CartS cartpr={e}  />
            )
           }
             
            
               
            </div>
      </div>
      <div className='cart-total-price-div' >
         <div className='cart-total-price'>
         <h2>The Total Amount Of</h2>
           <div >
            <h4>Product Amount</h4>
            <h4>Rs{" "}{TotalPrice}/-</h4>
           </div>
           <div >
            <h4>Shipping Charge</h4>
            <h4>Rs{" "}500/-</h4>
           </div>
           <hr/>
           <div >
            <h4>Total Amount</h4>
            <h4>Rs{" "}{TotalPrice+500}/-</h4>
           </div>
           <div>
            <button>Checkout</button>
            <button>Continue Shopping</button>
           </div>
         </div>
          
      </div>
    </div>
  )
}

export default Cart
