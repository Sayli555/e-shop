import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { AddToCart } from '../../redux/cart/action';

import "./product.css";

const Product = ({product,productCategory}) => {
  // console.log(product.id,productCategory)
const dispatch=useDispatch()


  const addToCart=()=>{

    // toast("Product Add In Cart");
    toast.success('Product Add In Cart', {
      position: toast.POSITION.TOP_RIGHT
  });
   const payload={...product}
    dispatch(AddToCart(payload))

  }

  useEffect(()=>{
    dispatch(AddToCart())
},[])

  


  

  return (
    <div className='product'>
     <Link to={`/${productCategory}/${product.id}`} state={{ from: productCategory }} className="Link" >
      <div className='product_img'>
        <img
        src={product.imageurl}
        width="100%"
        height="100%"
        />
      </div>
      <div className='product_price_title'>
        <div>
          {`${product.price}Rs`}
        </div>
        <div className='product_title'>
        {product.Name}
        </div>
      </div>
      </Link>
      <button onClick={addToCart} >Add To Cart</button>
      
    </div>
  )
}

export default Product
