import React, { useEffect, useState } from 'react';
import "./product.css";
import {AiTwotoneDelete,AiOutlinePlus,AiOutlineMinus} from "react-icons/ai"
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import { womensSingleDataGet } from '../../redux/womens/action';
import { AddProductInCart, AddToCart } from '../../redux/cart/action';
import { mensSingleDataGet } from '../../redux/mens/action';
import { accessoriesSingleDataGet } from '../../redux/accessories/action';
import { allSingleDataGet } from '../../redux/allProducts/action';

const SingleProduct = () => {

  const dispatch=useDispatch();
  const {id}=useParams();
  const location=useLocation();
  const { from } = location.state
  // console.log(from)

  // const single=useSelector((state)=>state.mensReducer.singleProduct)
  
  const single=useSelector((state)=>{
    if(from=="mens"){
     return state.mensReducer.singleProduct
    }
    else if(from =="womens"){
      return state.womensReducer.singleProduct
    }
    else if(from=="accessories"){
      return state.accessoriesReducer.singleProduct
    }
    else if(from=="all"){
      return state.allReducer.singleProduct
    }
  }
  );
  
  console.log("single",single)

  useEffect(()=>{


    // dispatch(mensSingleDataGet(id))
    if(from=="mens"){
      dispatch(mensSingleDataGet(id))
    }
    else if(from=="womens"){
      dispatch(womensSingleDataGet(id))
    }
    else if(from=="accessories"){
      dispatch(accessoriesSingleDataGet(id))
    }
    else if(from=="all"){
      dispatch(allSingleDataGet(id))
    }
    
  },[id])



  const AddToCart=()=>{
    let totalPrice=quantity*single.price
    const payload={
      ...single,
      totalPrice,
      quantity
    }
    dispatch(AddProductInCart(payload))
    // console.log("..payload",payload)
  }

   
 const [quantity,setQuantity]=useState(1);


 const quantityadding=(val)=>{
    setQuantity(quantity+val)
 }
//  console.log(quantity)
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
onClick={
  AddToCart
}
>

Add To Cart
</button>

</div>

      </div>
      
    </div>
    
   
    
  )
}

export default SingleProduct
