import React, { useEffect, useState } from 'react';
import "./product.css";
import {AiTwotoneDelete,AiOutlinePlus,AiOutlineMinus} from "react-icons/ai"
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { womensSingleDataGet } from '../../redux/womens/action';
import { AddToCart } from '../../redux/cart/action';

const SingleProduct = () => {

  const dispatch=useDispatch();
  const {id}=useParams()

  const single=useSelector((state)=>state.womensReducer.singleProduct);
  console.log(id,single)

  useEffect(()=>{
    dispatch(womensSingleDataGet(id))
  },[id])



  const AddToCart=(payload)=>{
    dispatch(AddToCart(payload))
    console.log("..payload",payload)
  }

   
 const [quantity,setQuantity]=useState(1);


 const quantityadding=(val)=>{
    setQuantity(quantity+val)
 }
 console.log(quantity)
  return (
   
    
      <div className='single-products-main-div'>
      <div className='single-product-img'>
        <img
        src={single.imageurl}
        width="100%"
        height="100%"
        />
      </div>
      <div className='single-product-info'>
        <h1>{single.brand}{" "} ({single.typeofproduct})</h1>
        <p>{single.Name}
        </p>
        <h2>Rs{" "}{single.price*quantity}/-</h2>

    <div className='single-plus-min'>
  <button onClick={()=>quantityadding(-1)}>
    <AiOutlineMinus className='cartaddicon'/>
  </button>
  <span>{quantity}</span>
  <button onClick={()=>quantityadding(1)}>
    <AiOutlinePlus className='cartaddicon' />
  </button>
</div>
<div className='single-product-button'>
<button className='single-remove-add-cart' 
onClick={()=>{
  AddToCart(single)
}}
>

Add To Cart
</button>

</div>

      </div>
      
    </div>
    
   
    
  )
}

export default SingleProduct
